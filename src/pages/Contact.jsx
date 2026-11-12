import ContactDetails from "@/components/contact/ContactDetails";
import ContactHeaderlink from "@/components/contact/ContactHeaderlink";
import UserInputs from "@/components/contact/UserInputs";

function Contact() {
  return (
    <main className="w-[95%] lg:w-[81.25%] mb-[140px]">
      <ContactHeaderlink />
      <div className="flex flex-col md:flex-row gap-[10px] md:gap-[30px] items-center">
        <ContactDetails />
        <UserInputs />
      </div>
    </main>
  );
}

export default Contact;
