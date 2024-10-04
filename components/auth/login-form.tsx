'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { AuthCard } from './auth-card'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/app/types/login-schema'
import * as z from 'zod'
import { Input } from '../ui/input'

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
  }
  return (
    <AuthCard cardTitle='Welcome back' backBtnURL='/auth/register' backBtnName='Create a new account' showSocials>
      <div><Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          /></form></Form></div>
    </AuthCard>
  )
}