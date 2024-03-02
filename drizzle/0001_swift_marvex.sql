DO $$ BEGIN
 ALTER TABLE "brands" ADD CONSTRAINT "brands_id_products_product_id_fk" FOREIGN KEY ("id") REFERENCES "products"("product_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
