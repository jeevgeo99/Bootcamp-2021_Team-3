import React, { Suspense } from "react";
import "./App.css";
// import Start from "./components/views/Start";
// import { Route, Routes } from "react-router-dom";
// import Resume from "./components/views/Resume";
// import PersonalDetails from "./components/views/PersonalDetails";
import Router from "./Router";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
  // return (
  //   <div className="App">
  //     {/* <Routes>
  //       <Route exact path="/" element={<Start />} />
  //       <Route exact path="/resume" element={<Resume />} />
  //       <Route exact path="/personalDetails" element={<PersonalDetails />} />
  //     </Routes> */}
  //   </div>
  // );
};

export default App;
