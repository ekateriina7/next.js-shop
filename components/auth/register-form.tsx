'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link';
import { useAction } from 'next-safe-action/hooks'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { AuthCard } from './auth-card'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { emailSignIn } from '@/server/actions/email-signin';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { RegisterSchema } from '@/app/types/register-schema';
import { emailRegister } from '@/server/actions/email-register';
import FormSuccess from './form-success';
import FormError from './form-error';

export default function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  })

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')

  const { execute, status } = useAction(emailRegister, {
    onSuccess({ data }: { data?: { success?: string; error?: string } }) {
      if (data?.error) {
        setError(data.error);
      }
      if (data?.success) {
        setSuccess(data.success);
      }
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    execute(values);
  };

  return (
    <AuthCard cardTitle='Create an account' backBtnURL='/auth/login' backBtnName='Already have an account?' showSocials>
      <div><Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} type='text' placeholder='Bob' />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
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
          </div>
          <FormSuccess message={success} />
          <FormError message={error}/>
          <Button
            type="submit"
            className={cn(
              "w-full my-4",
              status === "executing" ? "animate-pulse" : ""
            )}
          >{'Register'}</Button>
        </form>
      </Form></div>
    </AuthCard>
  )
}