import React, { useState } from "react";

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
  topic: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    topic: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:p-6 mx-6 max-w-xl p-4 rounded-lg dark:text-white bg-slate-100 dark:bg-slate-950  file:rounded-lg shadow-md">
      <div className="">
        <label htmlFor="topic" className="block mb-2 font-semibold ">
          Topic
        </label>
        <input
          type="text"
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block my-3 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-semibold ">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 text-black font-bold  bg-yellow-500 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
