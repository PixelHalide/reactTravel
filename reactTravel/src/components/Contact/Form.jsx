import { useState } from "react";

function Form ({onSubmit}) {

    const API_URL = import.meta.env.VITE_API_URL

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "name":name,
            "email":email,
            "message":message
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {'Content-Type': 'application/json', },
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong on the server.');
            }

            // Handle successful response
            const result = await response.json();

            if (onSubmit) {
                onSubmit(result);
            }

            setName('');
            setEmail('');
            setMessage('');

        } catch (e){
            console.error('Error submitting item:', e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-md">
            <label className="block mb-2">Name</label>
            <input
                type="text"
                required
                className="border p-2 w-full mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label className="block mb-2">Email</label>
            <input
                type="email"
                required
                className="border p-2 w-full mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block mb-2">Message</label>
            <textarea
                required
                className="border p-2 w-full mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className="bg-green-600 hover:bg-green-700 transition-all duration-400 hover:scale-108 shadow-lg text-white py-2 px-4 rounded">
                Submit
            </button>

        </form>
    );
}

export default Form;