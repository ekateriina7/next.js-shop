"use server";

import bcrypt from 'bcrypt'
import { RegisterSchema } from '@/app/types/register-schema';
import { actionClient } from '@/lib/safe-actions';
import { eq } from 'drizzle-orm';
import { db } from '..';
import { users } from '../schema';
import { generateEmailVerificationToken } from './tokens';

export const emailRegister = actionClient
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Signing up with:', email, hashedPassword, name);
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    })
    if (existingUser) {
      if (!existingUser?.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(email);
        await sendVerificationEmail()
        return { success: 'Email confirmation resent' }
      }
      return { error: 'Email already in use' }
    }
    await db.insert(users).values({
      email,
      name,
      password: hashedPassword
    })
    const verificationToken = await generateEmailVerificationToken(email)
    await sendVerificationEmail()
    return { success: 'successfully registered' };
  });
