DROP TABLE "colors";--> statement-breakpoint
DROP TABLE "sizes";--> statement-breakpoint
ALTER TABLE "brands" DROP CONSTRAINT "brands_model_id_models_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "products_color_id_colors_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "products_size_id_sizes_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "created_by" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "brand_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "gender" gender[] NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "is_for_kids" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "stock" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "color" color[] NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "size" size[] NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "model_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_model_id_models_id_fk" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "brands" DROP COLUMN IF EXISTS "model_id";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN IF EXISTS "category";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN IF EXISTS "product_id";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN IF EXISTS "color_id";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN IF EXISTS "size_id";