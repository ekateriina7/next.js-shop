import createPost from '@/server/actions/create-post';
import getPosts from '@/server/actions/get-posts';

export default async function Home() {
  const { error, success } = await getPosts()
  if (error) {
    throw new Error(error)
  }
  if (success) {
    return (
      <main>
        {success.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
        <form action={createPost}>
          <input
            className="p-2 rounded"
            type="text"
            name="title"
            placeholder="Title"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
            Submit
          </button>
        </form>
      </main>
    );
  }

}
