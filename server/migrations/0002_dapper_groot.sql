DO $$ BEGIN
 CREATE TYPE "public"."roles" AS ENUM('user', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "twoFactorEnabled" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "roles" "roles" DEFAULT 'user';