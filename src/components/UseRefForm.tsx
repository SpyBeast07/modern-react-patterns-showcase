import { useRef, type FormEvent, useState } from 'react'; // FormEvent is used to type the event of form submission

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
}

export const UseRefForm = () => {
    const nameRef = useRef<HTMLInputElement>(null); // useRef is used to store the reference to the DOM element and null because initially the element is not rendered
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<FormErrors>({});

// Form triggers onSubmit
// ↓
// handleSubmit runs
// ↓
// You extract values from refs
// ↓
// Validate
// ↓
// Done

    const validateForm = (name: string, email: string, password: string): FormErrors => {
        const newErrors: FormErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        } else if (name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        } else if (name.length > 50) {
            newErrors.name = 'Name must be less than 50 characters';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            newErrors.password = 'Password must contain uppercase, lowercase, and numbers';
        }

        return newErrors;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // To prevent the default behavior of the form submission that is page reloading
        const name = nameRef.current?.value || ''; // ? means Only continue if NOT null.
        const email = emailRef.current?.value || '';
        const password = passwordRef.current?.value || '';

        const validationErrors = validateForm(name, email, password);
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        console.log("UseRef Form Data:", { name, email, password });
        alert(`Submitted: ${JSON.stringify({ name, email, password }, null, 2)}`);
    };

    const clearError = (field: keyof FormErrors) => {
        setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">UseRef Form</h2>
            <div>
                <label htmlFor="name-input" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    id="name-input"
                    type="text"
                    ref={nameRef}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-gray-900 ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Kushagra"
                    onChange={() => clearError('name')}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    id="email-input"
                    type="email"
                    ref={emailRef}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-gray-900 ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="kushagra@example.com"
                    onChange={() => clearError('email')}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password-input" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                    id="password-input"
                    type="password"
                    ref={passwordRef}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-gray-900 ${
                        errors.password ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="********"
                    onChange={() => clearError('password')}
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Submit Data
            </button>
        </form>
    );
};

// 3 ways to build form
// 1️⃣ Controlled (useState)
// 2️⃣ Uncontrolled (useRef - DOM controlled)
// 3️⃣ React Hook Form
