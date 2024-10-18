'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link';
import { useAction } from 'next-safe-action/hooks'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { AuthCard } from './auth-card'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/app/types/login-schema'
import * as z from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { emailSignIn } from '@/server/actions/email-signin';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [error, setError] = useState('')

  const { execute, status } = useAction(emailSignIn, {
    onSuccess(data) {
      console.log(data);
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    execute(values);
  };

  return (
    <AuthCard cardTitle='Welcome back' backBtnURL='/auth/register' backBtnName='Create a new account' showSocials>
      <div><Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type='email' autoComplete='email' placeholder='example@email.com' />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type='password' autoComplete='current=password' placeholder='********' />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size={'sm'} variant={'link'} asChild>
              <Link href='/auth/reset'>Forgot your password</Link>
            </Button>
          </div>
          <Button
            type="submit"
            className={cn(
              "w-full my-4",
              status === "executing" ? "animate-pulse" : ""
            )}
          >{'Login'}</Button>
        </form>
      </Form></div>
    </AuthCard>
  )
}