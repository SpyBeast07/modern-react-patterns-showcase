import { createFileRoute } from '@tanstack/react-router'
import { useThemeStore } from '../../themes/zustand/useThemeStore'

export const Route = createFileRoute('/themes/zustand')({
    component: ZustandThemePage,
})

function ZustandThemePage() {
    const { theme, toggleTheme } = useThemeStore()

    return (
        <div className={`min-h-[calc(100vh-60px)] transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-gray-50 text-gray-900'
            } flex flex-col items-center justify-center p-8`}>
            <div className={`p-8 rounded-2xl shadow-xl border max-w-md w-full text-center transition-all ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-gray-200'
                }`}>
                <h2 className="text-2xl font-bold mb-4">Zustand Theme</h2>
                <p className="mb-6 opacity-80">
                    Current Theme: <span className="font-bold uppercase tracking-wider text-emerald-500">{theme}</span>
                </p>

                <button
                    onClick={toggleTheme}
                    className={`px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all shadow-lg ${theme === 'dark'
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        }`}
                >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>

                <p className="mt-4 text-xs opacity-50">
                    State managed by Zustand store (minimal code!)
                </p>
            </div>
        </div>
    )
}
