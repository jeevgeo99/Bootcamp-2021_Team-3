import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { APP } from "./constants/index";

// Code splitting using React.lazy
const MainContainer = React.lazy(() =>
  import("./components/containers/MainContainer")
);
const ResumeContainer = React.lazy(() =>
  import("./components/containers/ResumeContainer")
);
const NamePageContainer = React.lazy(() =>
  import("./components/containers/NamePageContainer")
);
const GenderPageContainer = React.lazy(() =>
  import("./components/containers/GenderPageContainer")
);
const ContactPageContainer = React.lazy(() =>
  import("./components/containers/ContactPageContainer")
);
const LinkPageContainer = React.lazy(() =>
  import("./components/containers/LinkPageContainer")
);
const EducationPageContainer = React.lazy(() =>
  import("./components/containers/EducationPageContainer")
);
const BreakPageContainer = React.lazy(() =>
  import("./components/containers/BreakPageContainer")
);
const ExperiencePageContainer = React.lazy(() =>
  import("./components/containers/ExperiencePageContainer")
);
const SkillPageContainer = React.lazy(() =>
  import("./components/containers/SkillPageContainer")
);
const SalaryPageContainer = React.lazy(() =>
  import("./components/containers/SalaryPageContainer")
);

const FinalPageContainer = React.lazy(() =>
  import("./components/containers/FinalPageContainer")
);
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path={APP.ROUTES.LANDING} element={<MainContainer />} />
        <Route path="/resume" element={<ResumeContainer />} />
        <Route path={APP.ROUTES.RESUME} element={<ResumeContainer />} />
        <Route path="/namepage" element={<NamePageContainer />} />
        <Route path={APP.ROUTES.NAME} element={<NamePageContainer />} />
        <Route path="/genderpage" element={<GenderPageContainer />} />
        <Route path={APP.ROUTES.GENDER} element={<GenderPageContainer />} />
        <Route path="/contactpage" element={<ContactPageContainer />} />
        <Route path={APP.ROUTES.CONTACT} element={<ContactPageContainer />} />
        <Route path="/linkpage" element={<LinkPageContainer />} />
        <Route path={APP.ROUTES.LINK} element={<LinkPageContainer />} />
        <Route path="/educationpage" element={<EducationPageContainer />} />
        <Route
          path={APP.ROUTES.EDUCATION}
          element={<EducationPageContainer />}
        />
        <Route path="/breakpage" element={<BreakPageContainer />} />
        <Route path={APP.ROUTES.BREAK} element={<BreakPageContainer />} />

        <Route path="/experiencepage" element={<ExperiencePageContainer />} />
        <Route
          path={APP.ROUTES.EXPERIENCE}
          element={<ExperiencePageContainer />}
        />
        <Route path="/skillpage" element={<SkillPageContainer />} />
        <Route path={APP.ROUTES.SKILL} element={<SkillPageContainer />} />
        <Route path="/salarypage" element={<SalaryPageContainer />} />
        <Route path={APP.ROUTES.SALARY} element={<SalaryPageContainer />} />
        <Route path="/finalpage" element={<FinalPageContainer />} />
        <Route path={APP.ROUTES.FINAL} element={<FinalPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
