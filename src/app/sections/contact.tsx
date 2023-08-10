import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  const handleSubmit = (formData: any) => {
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex dark:bg-indigo-950 bg-slate-200 md:py-24 py-12 items-center justify-center" id="contact">
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Contact;