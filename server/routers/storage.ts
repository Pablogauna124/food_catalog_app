import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { storagePut } from "../storage";
import {
  createFileUpload,
  getFileUploadsByUser,
  deleteFileUpload,
} from "../db";

export const storageRouter = router({
  // Upload file to S3 and save metadata
  uploadFile: protectedProcedure
    .input(
      z.object({
        fileName: z.string().min(1),
        fileData: z.string(), // base64 encoded
        mimeType: z.string(),
        fileSize: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) {
        throw new Error("User not authenticated");
      }

      try {
        // Decode base64 to buffer
        const buffer = Buffer.from(input.fileData, "base64");

        // Generate unique file key
        const timestamp = Date.now();
        const fileKey = `products/${ctx.user.id}/${timestamp}-${input.fileName}`;

        // Upload to S3
        const { url, key } = await storagePut(fileKey, buffer, input.mimeType);

        // Save metadata to database
        const fileUpload = await createFileUpload({
          userId: ctx.user.id,
          fileName: input.fileName,
          fileKey: key,
          fileUrl: url,
          mimeType: input.mimeType,
          fileSize: input.fileSize,
        });

        return {
          success: true,
          file: fileUpload,
          url: url,
          key: key,
        };
      } catch (error) {
        console.error("File upload error:", error);
        throw new Error("Failed to upload file");
      }
    }),

  // Get user's uploaded files
  getUserFiles: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new Error("User not authenticated");
    }

    return await getFileUploadsByUser(ctx.user.id);
  }),

  // Delete file
  deleteFile: protectedProcedure
    .input(z.object({ fileId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) {
        throw new Error("User not authenticated");
      }

      // Verify file belongs to user
      const files = await getFileUploadsByUser(ctx.user.id);
      const fileExists = files.some((f) => f.id === input.fileId);

      if (!fileExists) {
        throw new Error("File not found or unauthorized");
      }

      return await deleteFileUpload(input.fileId);
    }),
});
