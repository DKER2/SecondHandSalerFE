import React, { useState } from 'react';
import ICreateUserRequest from "../../../http/request/createUserRequest.ts";
import UserService from "../../../services/UserService.ts";

const SignUpModule: React.FC = () => {
    // State to hold form data

    const [formData, setFormData] = useState<ICreateUserRequest>({
        username: '',
        email: ''
    });

    // Handle input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform validation and submit data
        console.log(formData);
        await UserService.createUser(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
            <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
            </div>
            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Create Account
            </button>
        </form>
    );
}

export default SignUpModule;
