import Logo from "../Common/Logo";
import Start from "../views/Start";

const MainContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <Start />
    </div>
  );
};

export default MainContainer;
