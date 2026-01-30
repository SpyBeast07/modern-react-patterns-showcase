import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
    component: PostsLayout,
})

function PostsLayout() {
    return (
        <div className="flex gap-2 p-2">
            <Outlet />
        </div>
    )
}
