import {
  boolean,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: text("name").notNull(),

  sku: text("sku").notNull().unique(),

  description: text("description"),

  salePrice: numeric("sale_price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  active: boolean("active").notNull().default(true),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
