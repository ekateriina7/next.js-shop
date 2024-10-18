"use server";

import { LoginSchema } from '@/app/types/login-schema';
import { actionClient } from '@/lib/safe-actions';

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    console.log('Signing in with:', email, password);
    return { email };
  });
