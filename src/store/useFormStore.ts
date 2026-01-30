import { create } from 'zustand';

type FormType = 'useRef' | 'reactHookForm' | 'formik';

interface FormStore {
    activeForm: FormType;
    setActiveForm: (form: FormType) => void;
}

export const useFormStore = create<FormStore>((set) => ({
    activeForm: 'useRef',
    setActiveForm: (form) => set({ activeForm: form }),
}));
