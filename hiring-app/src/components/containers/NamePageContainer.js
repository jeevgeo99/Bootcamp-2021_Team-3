import Logo from "../Common/Logo";
import NamePage from "../views/NamePage";

const NamePageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <NamePage />
    </div>
  );
};

export default NamePageContainer;
