"use server";

import { LoginSchema } from '@/app/types/login-schema';
import { actionClient } from '@/lib/safe-actions';
import { eq } from 'drizzle-orm';
import { db } from '..';
import { users } from '../schema';

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    console.log('Signing in with:', email, password);
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    })
    if (existingUser?.email !== email) {
      return {error: 'Email not found'}
    }
    // if (!existingUser?.emailVerified) {
      
    // }
    return { success:email };
  });
