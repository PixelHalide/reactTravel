import Form from "./Form.jsx";

function Contact() {
  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    alert(`Thanks, we'll get back to you soon`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-neutral-200">Contact Us</h2>
        <Form onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default Contact
