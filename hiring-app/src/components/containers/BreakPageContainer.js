import Logo from "../Common/Logo";
import BreakPage from "../views/BreakPage";

const BreakPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <BreakPage />
    </div>
  );
};

export default BreakPageContainer;
