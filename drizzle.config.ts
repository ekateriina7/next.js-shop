import * as dotenv from "dotenv";
import 'dotenv/config';
import type { Config } from "drizzle-kit";

dotenv.config({
  path: ".env",
});

export default {
  schema: './server/schema.ts',
  out: './server/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
} satisfies Config;