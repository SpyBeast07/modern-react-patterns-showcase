import { Controller, type Control, type FieldValues, type Path, useFormState } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues, TContext = any, TTransformed extends FieldValues = T> {
    name: Path<T>;
    control: Control<T, TContext, TTransformed>;
    label: string;
    placeholder?: string;
    type?: string;
}

export const FormField = <T extends FieldValues, TContext = any, TTransformed extends FieldValues = T>({
    name,
    control,
    label,
    placeholder,
    type = 'text'
}: FormFieldProps<T, TContext, TTransformed>) => {
    const { errors } = useFormState({ control });
    const error = errors[name];

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        type={type}
                        {...field}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-gray-900 ${error ? 'border-rose-300 ring-rose-200' : 'border-gray-200'}`}
                        placeholder={placeholder}
                    />
                )}
            />
            {error && <span className="text-rose-500 text-sm mt-1 block">{error.message as string}</span>}
        </div>
    );
};