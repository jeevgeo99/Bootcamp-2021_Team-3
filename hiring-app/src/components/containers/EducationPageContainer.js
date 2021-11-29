import Logo from "../Common/Logo";
import EducationPage from "../views/EducationPage";

const EducationPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <EducationPage />
    </div>
  );
};

export default EducationPageContainer;
