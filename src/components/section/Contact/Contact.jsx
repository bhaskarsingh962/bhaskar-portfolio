import Container from "../../ui/Container";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-28"
    >
      <Container>

        <ContactHeader />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
};

export default Contact;