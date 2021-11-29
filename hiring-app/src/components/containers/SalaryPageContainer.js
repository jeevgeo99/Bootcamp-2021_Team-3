import Logo from "../Common/Logo";

import SalaryPage from "../views/SalaryPage";

const SalaryPageContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <SalaryPage />
    </div>
  );
};

export default SalaryPageContainer;
