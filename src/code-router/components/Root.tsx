import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export function RootComponent() {
    return (
        <>
            <div className="p-2 flex gap-2 text-lg border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
                <Link
                    to="/"
                    activeProps={{
                        className: 'font-bold text-indigo-600',
                    }}
                    className="hover:text-indigo-500 px-3 py-1 rounded transition-colors"
                >
                    Home
                </Link>
                <Link
                    to="/forms"
                    activeProps={{
                        className: 'font-bold text-indigo-600',
                    }}
                    className="hover:text-indigo-500 px-3 py-1 rounded transition-colors"
                >
                    Forms
                </Link>
                <Link
                    to="/posts"
                    activeProps={{
                        className: 'font-bold text-indigo-600',
                    }}
                    className="hover:text-indigo-500 px-3 py-1 rounded transition-colors"
                >
                    Posts
                </Link>
                <Link
                    to="/search"
                    activeProps={{
                        className: 'font-bold text-indigo-600',
                    }}
                    className="hover:text-indigo-500 px-3 py-1 rounded transition-colors"
                >
                    Search Params
                </Link>
            </div>
            <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
                <Outlet />
            </div>
            <TanStackRouterDevtools position="bottom-right" />
        </>
    )
}
