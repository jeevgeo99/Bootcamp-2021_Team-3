import Logo from "../Common/Logo";
import Resume from "../views/Resume";

const ResumeContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <Resume />
    </div>
  );
};

export default ResumeContainer;
