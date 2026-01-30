import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../../api/posts'

export function PostsIndexComponent() {
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) {
        return <div className="p-4 text-center text-slate-500">Loading posts...</div>
    }

    if (error) {
        return <div className="p-4 text-center text-red-500">Error loading posts: {error.message}</div>
    }

    return (
        <div className="w-full max-w-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-slate-800">Posts List (Axios + Query)</h2>
            <ul className="space-y-2">
                {posts?.map(post => (
                    <li key={post.id} className="bg-white p-3 rounded-lg shadow border border-slate-200 hover:border-indigo-300 transition-colors">
                        <Link to="/posts/$postId" params={{ postId: post.id.toString() }} className="block">
                            <h3 className="font-semibold text-indigo-600 hover:text-indigo-800">{post.title}</h3>
                            <p className="text-sm text-slate-500 truncate">{post.body}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
