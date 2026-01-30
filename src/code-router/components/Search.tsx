import { useNavigate, useSearch } from '@tanstack/react-router'

export function SearchComponent() {
    // Note: In code-based routing, we might need to verify if 'from' type safety works the same 
    // or if we need to pass the route object. For now, assuming the path string works or we'll adjust in routeTree.
    const { q } = useSearch({ strict: false }) as { q?: string } // specific route types not generated yet
    const navigate = useNavigate()

    return (
        <div className="p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Search Params Demo</h2>
            <input
                value={q || ''}
                onChange={(e) => {
                    navigate({
                        to: '/search',
                        search: { q: e.target.value },
                        replace: true,
                    })
                }}
                placeholder="Type to search..."
                className="w-full p-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <div className="mt-8">
                <p className="text-lg text-slate-600">
                    Current Search Query: <span className="font-bold text-indigo-600">{q || '(Wait for input)'}</span>
                </p>
                <p className="text-sm text-slate-400 mt-2">
                    Notice how the URL updates automatically as you type!
                </p>
            </div>
        </div>
    )
}
