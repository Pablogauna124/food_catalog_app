import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../db";

export const productsRouter = router({
  // Get all products (public)
  getAll: publicProcedure.query(async () => {
    return await getAllProducts();
  }),

  // Get products by category (public)
  getByCategory: publicProcedure
    .input(z.object({ category: z.enum(["fast-food", "savory", "sweet"]) }))
    .query(async ({ input }) => {
      return await getProductsByCategory(input.category);
    }),

  // Get single product (public)
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await getProductById(input.id);
    }),

  // Create product (admin only)
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
        price: z.string().regex(/^\d+(\.\d{2})?$/),
        category: z.enum(["fast-food", "savory", "sweet"]),
        imageUrl: z.string().optional(),
        imageKey: z.string().optional(),
        badge: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Only admins can create products");
      }

      return await createProduct({
        name: input.name,
        description: input.description || null,
        price: input.price,
        category: input.category,
        imageUrl: input.imageUrl || null,
        imageKey: input.imageKey || null,
        badge: input.badge || null,
      });
    }),

  // Update product (admin only)
  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.string().optional(),
        category: z.enum(["fast-food", "savory", "sweet"]).optional(),
        imageUrl: z.string().optional(),
        imageKey: z.string().optional(),
        badge: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Only admins can update products");
      }

      const { id, ...updateData } = input;
      return await updateProduct(id, updateData);
    }),

  // Delete product (admin only)
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Only admins can delete products");
      }

      return await deleteProduct(input.id);
    }),
});
