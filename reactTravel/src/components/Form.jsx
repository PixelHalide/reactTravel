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

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            Submit
        </button>

    </form>
  );
}

export default Form
