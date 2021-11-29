import Logo from "../Common/Logo";
import SkillPage from "../views/SkillPage";

const SkillPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <SkillPage />
    </div>
  );
};

export default SkillPageContainer;
