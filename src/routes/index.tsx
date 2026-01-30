import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Welcome to TanStack Router Demo!</h3>
            <p className="text-lg text-slate-600 mb-8">
                This application demonstrates how to use TanStack Router with React.
                Explore the different sections in the navigation bar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                    <h4 className="font-bold text-xl mb-2 text-indigo-600">Forms</h4>
                    <p className="text-slate-600">See implementations of useRef, React Hook Form, and Formik.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                    <h4 className="font-bold text-xl mb-2 text-green-600">Posts</h4>
                    <p className="text-slate-600">Learn about data loading, nested routes, and dynamic segments.</p>
                </div>
            </div>
        </div>
    )
}
