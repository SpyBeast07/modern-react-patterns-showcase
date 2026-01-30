import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { z } from 'zod'

// Define search params schema
const searchSchema = z.object({
    q: z.string().optional(),
})

export const Route = createFileRoute('/search')({
    validateSearch: (search) => searchSchema.parse(search),
    component: SearchPage,
})

function SearchPage() {
    const { q } = useSearch({ from: '/search' })
    const navigate = useNavigate({ from: '/search' })

    return (
        <div className="p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Search Params Demo</h2>
            <input
                value={q || ''}
                onChange={(e) => {
                    navigate({
                        search: { q: e.target.value },
                        replace: true, // Replace history entry
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
