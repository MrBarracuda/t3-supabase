ALTER TABLE "brands" ADD COLUMN "model_id" uuid;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "brand_id" uuid;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "color_id" uuid;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "size_id" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "brands" ADD CONSTRAINT "brands_model_id_models_id_fk" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_color_id_colors_id_fk" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_size_id_sizes_id_fk" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
