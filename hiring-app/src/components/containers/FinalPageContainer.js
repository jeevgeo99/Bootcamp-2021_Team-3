import Logo from "../Common/Logo";
import FinalPage from "../views/FinalPage";

const FinalPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <FinalPage />
    </div>
  );
};

export default FinalPageContainer;
