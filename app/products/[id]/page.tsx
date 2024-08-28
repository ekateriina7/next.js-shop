import Link from '@/node_modules/next/link'
import React from 'react'

export default function page({params}:{id:string}) {
  return (
    <div>{params.id}
    </div>
  )
}
