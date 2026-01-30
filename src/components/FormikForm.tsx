import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

// onChange
// ↓
// Formik updates state
// ↓
// React re-renders
// ↓
// Input gets new value

// Controlled Form library
// React stores everything -> Many re-renders

export const FormikForm = () => {
    // const validationSchemaYup = Yup.object({
    //     firstName: Yup.string()
    //         .max(15, 'Must be 15 characters or less')
    //         .required('Required'),
    //     lastName: Yup.string()
    //         .max(20, 'Must be 20 characters or less')
    //         .required('Required'),
    //     email: Yup.string()
    //         .email('Invalid email address')
    //         .required('Required'),
    // });

    const validationSchemaZod = z.object({
        firstName: z.string().max(15, 'Must be 15 characters or less').min(1, 'Required'),
        lastName: z.string().max(20, 'Must be 20 characters or less').min(1, 'Required'),
        email: z.string().email('Invalid email address').min(1, 'Required'),
    });

    const formik = useFormik({
        initialValues: { // Controlled inputs in react state
            firstName: '',
            lastName: '',
            email: '',
        },
        // validationSchema: validationSchemaYup,
        validationSchema: toFormikValidationSchema(validationSchemaZod),
        onSubmit: values => {
            console.log("Formik Form Data:", values);
            alert(`Submitted: ${JSON.stringify(values, null, 2)}`);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">Formik Form</h2>

            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps('firstName')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-gray-900 ${formik.touched.firstName && formik.errors.firstName ? 'border-rose-300 ring-rose-200' : 'border-gray-200'}`}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-rose-500 text-sm mt-1 block">{formik.errors.firstName}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    {...formik.getFieldProps('lastName')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-gray-900 ${formik.touched.lastName && formik.errors.lastName ? 'border-rose-300 ring-rose-200' : 'border-gray-200'}`}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-rose-500 text-sm mt-1 block">{formik.errors.lastName}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-gray-900 ${formik.touched.email && formik.errors.email ? 'border-rose-300 ring-rose-200' : 'border-gray-200'}`}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-rose-500 text-sm mt-1 block">{formik.errors.email}</div>
                ) : null}
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Submit Data
            </button>
        </form>
    );
};
