import { Link, useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchPostById } from '../../api/posts'

export function PostDetailComponent() {
    // In code-based routing, we use useParams hook. 
    // Types might be loose properly typed route object.
    const { postId } = useParams({ strict: false }) as { postId: string };

    const { data: post, isLoading, error } = useQuery({
        queryKey: ['posts', postId],
        queryFn: () => fetchPostById(postId),
        enabled: !!postId,
    });

    if (isLoading) {
        return <div className="p-8 text-center text-slate-500">Loading post details...</div>
    }

    if (error) {
        return <div className="p-8 text-center text-red-500">Error loading post: {error.message}</div>
    }

    if (!post) {
        return <div className="p-8 text-center text-slate-500">Post not found.</div>
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-slate-100 mt-4">
            <Link to="/posts" className="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-block">&larr; Back to Posts</Link>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{post.title}</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{post.body}</p>
            <div className="mt-8 pt-4 border-t border-slate-100 text-sm text-slate-400">
                Post ID: {post.id}
            </div>
        </div>
    )
}
