import PostButton from '@/components/post-button';
import { Button } from '@/components/ui/button';
import createPost from '@/server/actions/create-post';
import getPosts from '@/server/actions/get-posts';

export default async function Home() {
  const { error, success } = await getPosts()
  if (error) {
    throw new Error(error)
  }
  if (success) {
    return (
      <main className='bg-special'>
        {success.map(post => (
          <div className='py-2 my-1 hover:opacity-15 bg-slate-800' key={post.id}>{post.title}</div>
        ))}
        <form action={createPost}>
          <input
            className="p-2 rounded"
            type="text"
            name="title"
            placeholder="Title"
          />
          <PostButton />
          <Button>click me</Button>
        </form>
      </main>
    );
  }

}
