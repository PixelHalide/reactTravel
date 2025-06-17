import { useState } from "react";

function Form ({onSubmit}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name, email, message};
        onSubmit(data);
    };

    return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-md">
        <label className="block mb-2">Name</label>
        <input
            className="border p-2 w-full mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2">Email</label>
        <input
            className="border p-2 w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2">Message</label>
        <textarea
            className="border p-2 w-full mb-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" 
        className="bg-green-600 hover:bg-green-700 transition-transform duration-300 hover:scale-108 shadow-lg px-4 py-2 rounded text-white"
        >
        Submit
        </button>

    </form>
  );
}

export default Form
