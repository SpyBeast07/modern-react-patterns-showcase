import { createFileRoute } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import { store } from '../../themes/redux/store'
import { useAppDispatch, useAppSelector } from '../../themes/redux/hooks'
import { toggleTheme } from '../../themes/redux/themeSlice'

export const Route = createFileRoute('/themes/redux')({
    component: ReduxThemeWrapper,
})

function ReduxThemeWrapper() {
    return (
        <Provider store={store}>
            <ReduxThemePage />
        </Provider>
    )
}

function ReduxThemePage() {
    const theme = useAppSelector((state) => state.theme.value)
    const dispatch = useAppDispatch()

    return (
        <div className={`min-h-[calc(100vh-60px)] transition-colors duration-300 ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-stone-50 text-stone-900'
            } flex flex-col items-center justify-center p-8`}>
            <div className={`p-8 rounded-2xl shadow-xl border max-w-md w-full text-center transition-all ${theme === 'dark' ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-stone-200'
                }`}>
                <h2 className="text-2xl font-bold mb-4">Redux Toolkit Theme</h2>
                <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    Current Theme: <span className="font-bold uppercase tracking-wider text-purple-500">{theme}</span>
                </div>

                <button
                    onClick={() => dispatch(toggleTheme())}
                    className={`px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all shadow-lg ${theme === 'dark'
                        ? 'bg-purple-500 hover:bg-purple-400 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                        }`}
                >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
        </div>
    )
}
