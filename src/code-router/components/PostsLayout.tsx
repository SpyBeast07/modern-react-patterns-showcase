import { Outlet } from '@tanstack/react-router'

export function PostsLayoutComponent() {
    return (
        <div className="flex gap-2 p-2">
            <Outlet />
        </div>
    )
}
