import { pgTable, serial, text, timestamp, boolean, varchar, json } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

// Photo categories
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// Photos table
export const photos = pgTable("photos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  categoryId: serial("category_id").references(() => categories.id),
  aspectRatio: varchar("aspect_ratio", { length: 20 }).notNull().default("square"),
  imageUrl: text("image_url").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  uploadKey: varchar("upload_key", { length: 255 }).notNull(),
  featured: boolean("featured").default(false),
  tags: json("tags").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// Blog posts
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  coverImageUrl: text("cover_image_url"),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// Define relations
export const photosRelations = relations(photos, ({ one }) => ({
  category: one(categories, {
    fields: [photos.categoryId],
    references: [categories.id],
  }),
}))

// Types
export type Photo = typeof photos.$inferSelect
export type NewPhoto = typeof photos.$inferInsert
export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert
export type BlogPost = typeof blogPosts.$inferSelect
export type NewBlogPost = typeof blogPosts.$inferInsert

export interface BlogPostType {
  id: number
  title: string
  slug: string
  content: string
  excerpt?: string
  coverImageUrl?: string
  published: boolean
  createdAt: string
  updatedAt: string
  readingTime?: string
  category?: string
  tags?: string[]
}

export type PhotoCategory =
  | "portraits"
  | "fashion"
  | "creative"
  | "events"
  | "commercial"
  | "personal"
  | "wedding"
  | "family"
  | "boudoir"
  | "landscape"
  | "street"
  | "architecture"
  | "product"
  | "travel"
  | "blackandwhite"
  | "conceptual"

// Add missing users table definition
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

