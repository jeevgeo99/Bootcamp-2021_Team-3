import Logo from "../Common/Logo";
import LinkPage from "../views/LinkPage";

const LinkPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <LinkPage />
    </div>
  );
};

export default LinkPageContainer;
