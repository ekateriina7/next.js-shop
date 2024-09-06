'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link';

type BackBtnType = {
  url: string;
  label: string
}

export default function BackButton({ url, label }: BackBtnType) {
  return (
    <div>
      <Button className='font-medium w-full'>
        <Link aria-label={label} href={url}>{label}</Link>
      </Button>
    </div>
  )
}