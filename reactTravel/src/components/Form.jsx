import { useState } from "react";

function Form ({onSubmit}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //     setFormData( (prev) => ({
    //        ...prev, [e.target.name]: e.target.value}
    //     ) );
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name, email, message};
        onSubmit(data);
    };

    return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-md">
        <label htmlFor=""></label>
    </form>
  )
}

export default Form
