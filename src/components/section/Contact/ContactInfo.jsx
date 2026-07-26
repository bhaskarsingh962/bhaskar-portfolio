import contact from "../../../data/contact";
import ContactCard from "./ContactCard";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {contact.map((item) => (
        <ContactCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ContactInfo;