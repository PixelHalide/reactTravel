import Form from "./Form.jsx";

function Contact() {
  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    alert(`Thanks, we'll get back to you soon`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-gray-800 dark:text-neutral-200">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          Have questions, suggestions, or need help booking tickets? We're here to assist you! ✈️
        </p>
        <p className="mb-4">
          Reach out to us for any queries, feedback, or support regarding your travel plans. Your journey starts here!
        </p>
      </div>
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-neutral-200">Contact Us</h2>
        <Form onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default Contact;
