"use server"

import { db } from '@/server';
export default async function getPosts() {
  const posts = await db.query.posts.findMany()
  const error = true
  if (!posts) {
    return { error: 'no posts ooh' }
  }
  return { success: posts }
}