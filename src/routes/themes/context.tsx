import { createFileRoute } from '@tanstack/react-router'
import { ThemeProvider, useTheme } from '../../themes/context/ThemeContext'

export const Route = createFileRoute('/themes/context')({
    component: ContextThemeWrapper,
})

function ContextThemeWrapper() {
    return (
        <ThemeProvider>
            <ContextThemePage />
        </ThemeProvider>
    )
}

function ContextThemePage() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`min-h-[calc(100vh-60px)] transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'
            } flex flex-col items-center justify-center p-8`}>
            <div className={`p-8 rounded-2xl shadow-xl border max-w-md w-full text-center transition-all ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                }`}>
                <h2 className="text-2xl font-bold mb-4">Context API Theme</h2>
                <p className="mb-6 opacity-80">
                    Current Theme: <span className="font-bold uppercase tracking-wider">{theme}</span>
                </p>

                <button
                    onClick={toggleTheme}
                    className={`px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all shadow-lg ${theme === 'dark'
                        ? 'bg-indigo-500 hover:bg-indigo-400 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        }`}
                >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
        </div>
    )
}
