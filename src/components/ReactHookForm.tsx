import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField } from './FormField';

const formSchema = z.object({
    name: z.string()
        .min(1, 'Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters'),
    email: z.string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    // Use string input for age to allow empty state, then transform to number
    age: z.string()
        .min(1, 'Age is required')
        .refine((val) => !Number.isNaN(Number(val)), { message: 'Must be a valid number' })
        .transform((val) => Number(val))
        .pipe(z.number().min(18, 'Must be at least 18 years old').max(120, 'Age must be less than 120')),
});

// FormInput is what the form fields expect (strings, even for number inputs in HTML)
type FormInput = z.input<typeof formSchema>;
// FormOutput is what the submit handler receives (transformed numbers)
type FormOutput = z.output<typeof formSchema>;

export const ReactHookForm = () => {
    // defaults match FormInput (all strings)
    const { control, handleSubmit } = useForm<FormInput, any, FormOutput>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            age: "",
        },
    });

    const onSubmit: SubmitHandler<FormOutput> = (data) => {
        console.log("React Hook Form Data:", data);
        alert(`Submitted: ${JSON.stringify(data, null, 2)}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">React Hook Form</h2>

            <FormField
                name="name"
                control={control}
                label="Name"
                placeholder="Kushagra"
            />

            <FormField
                name="email"
                control={control}
                label="Email"
                placeholder="kushagra@example.com"
            />

            <FormField
                name="age"
                control={control}
                label="Age"
                placeholder="22"
                type="number"
            />

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Submit Data
            </button>
        </form>
    );
};
