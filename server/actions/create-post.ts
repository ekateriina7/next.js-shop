"use server"

import { db } from '@/server';
import { revalidatePath } from 'next/cache';
import { posts } from '../schema';
export default async function createPost(formData: FormData) {
  console.log(formData)
  const title = formData.get('title')?.toString()
  if (!title) {
    return {error:'title is required'}
  }
  revalidatePath('/')
  const post = await db.insert(posts).values({
    title
  })
  return {success: post}
}