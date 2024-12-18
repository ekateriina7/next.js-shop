'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link';

type BackBtnType = {
  url: string;
  label: string
}

export default function BackButton({ url, label }: BackBtnType) {
  return (
      <Button asChild variant={'link'} className="font-medium w-full">
        <Link aria-label={label} href={url}>{label}</Link>
      </Button>
  )
}