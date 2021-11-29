import Logo from "../Common/Logo";
import ContactPage from "../views/ContactPage";

const ContactPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <ContactPage />
    </div>
  );
};

export default ContactPageContainer;
