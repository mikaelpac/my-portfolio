import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  const handleSubmit = (formData: any) => {
  };

  return (
    <div className="dark:bg-indigo-950 bg-slate-200 md:py-12 py-12" id="contact">
      <h2 className="text-center dark:text-white text-black text-4xl mb-10 ">Get in touch</h2>
    <div className="flex items-center justify-center" >
      <ContactForm onSubmit={handleSubmit} />
    </div>
    </div>
  );
};

export default Contact;