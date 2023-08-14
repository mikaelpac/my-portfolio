import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [state, handleSubmit] = useForm("mbjvgybz");

    console.log(state)

 useEffect(() => {
      if(state.succeeded) {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        notifySuccess()
      }
      if(!state.succeeded && state.errors) {
        notifyError()
      }
   }, [state.succeeded, state.errors])



  const notifySuccess = () => toast('✅ Message sent');
  //TODO: Could get a more accurate error message from state.errors obj
  const notifyError = () => toast('❌ Something went wrong');

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form  onSubmit={handleSubmit} className="w-full md:p-6 mx-6 max-w-xl p-4 rounded-lg dark:text-white bg-slate-100 dark:bg-slate-950  file:rounded-lg shadow-md">
      <div className="">
        <label htmlFor="topic" className="block mb-2 font-semibold ">
            Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
          className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
         <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
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
          className="w-full px-3 py-2 border text-black rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
          rows={6}
          required
        />
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-2 text-black font-bold  bg-yellow-500 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        Send
      </button>
      <Toaster />
    </form>
  );
};

export default ContactForm;
