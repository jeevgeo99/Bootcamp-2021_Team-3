import Logo from "../Common/Logo";
import ExperiencePage from "../views/ExperiencePage";

const ExperiencePageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <ExperiencePage />
    </div>
  );
};

export default ExperiencePageContainer;
