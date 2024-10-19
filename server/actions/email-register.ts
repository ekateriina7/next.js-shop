"use server";

import bcrypt from 'bcrypt'
import { RegisterSchema } from '@/app/types/register-schema';
import { actionClient } from '@/lib/safe-actions';
import { eq } from 'drizzle-orm';
import { db } from '..';
import { users } from '../schema';

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

export const emailRegister = actionClient
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Signing up with:', email, hashedPassword, name);
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    })
    if (existingUser) {
       // if (!existingUser?.emailVerified) {

      // }
      return { error: 'Email already in use' }
    }

    return { success: 'successfully registered' };
  });
