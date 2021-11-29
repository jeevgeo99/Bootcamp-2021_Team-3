import Logo from "../Common/Logo";
import GenderPage from "../views/GenderPage";

const GenderPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <GenderPage />
    </div>
  );
};

export default GenderPageContainer;
