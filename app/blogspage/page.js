import BlogsPage from "@/components/Pages/BlogsPage/BlogsPage";
import { fetchPosts } from "@/lib/api"; // مسیر fetchPosts خودت

export default async function BlogsAll() {
  const posts = (await fetchPosts()) || []; // safe fallback

  return (
    <div>
      <BlogsPage posts={posts} />
    </div>
  );
}
