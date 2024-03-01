DO $$ BEGIN
 CREATE TYPE "category" AS ENUM('accessories', 'men', 'women', 'kids', 'sale');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "size" AS ENUM('4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '4.5', '5.5', '6.5', '7.5', '8.5', '9.5', '10.5', '11.5', '12.5');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "brands" (
	"value" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "colors" (
	"value" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "models" (
	"value" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone,
	"category" "category" NOT NULL,
	"image_url" text,
	"price" integer NOT NULL,
	"created_by" uuid,
	"product_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sizes" (
	"value" "size" NOT NULL,
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"email" text NOT NULL,
	"display_name" text NOT NULL,
	"image_url" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "post" ("name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
