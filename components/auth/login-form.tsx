'use client'

import { AuthCard } from './auth-card'

export default function LoginForm() {
  return (
    <AuthCard cardTitle='Welcome back' backBtnURL='/auth/register' backBtnName='Create a new account' showSocials>

    </AuthCard>
  )
}