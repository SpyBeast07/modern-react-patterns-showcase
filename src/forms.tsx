// import { useState } from 'react'
import { UseRefForm } from './components/UseRefForm';
import { ReactHookForm } from './components/ReactHookForm';
import { FormikForm } from './components/FormikForm';
import { useFormStore } from './store/useFormStore';

export function FormsRoute() {
    // const [activeForm, setActiveForm] = useState<'useRef' | 'reactHookForm' | 'formik'>('useRef');

    // This is replaced by zustand
    const { activeForm, setActiveForm } = useFormStore();

    return (
        <div className="w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="w-full max-w-2xl space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Form Implementation Demo
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Select a form type below to see the implementation.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
                        <button
                            onClick={() => setActiveForm('useRef')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeForm === 'useRef'
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                }`}
                        >
                            UseRef
                        </button>
                        <button
                            onClick={() => setActiveForm('reactHookForm')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeForm === 'reactHookForm'
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                }`}
                        >
                            React Hook Form
                        </button>
                        <button
                            onClick={() => setActiveForm('formik')}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeForm === 'formik'
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                }`}
                        >
                            Formik
                        </button>
                    </div>
                </div>

                <div className="mt-8 transition-all duration-300 ease-in-out">
                    {activeForm === 'useRef' && <UseRefForm />}
                    {activeForm === 'reactHookForm' && <ReactHookForm />}
                    {activeForm === 'formik' && <FormikForm />}
                </div>
            </div>
        </div>
    )
}
