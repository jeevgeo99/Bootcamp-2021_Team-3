import * as React from "react";

import { NavLink } from "react-router-dom";
import { APP } from "../../constants/index";
import "../../components/../styles/BreakContent.css";
import SideBar from "../Common/SideBar";

export const BreakPage = () => {
  return (
    <div className="row">
      <div className="div-one col-md-9">
        <div className=" d-flex justify-content-center">
          <img className="break" src="./fire.jpg" alt="Fire Away" />
        </div>
        <br />
        <h4>
          So far, so good?
          <br />
          Now we'd like to know you a little <br /> better.
        </h4>
        <br />
        <button>
          <NavLink
            to={APP.ROUTES.EDUCATION}
            style={{ color: "#FFF" }}
            className="btn mx-4 text-align-center link"
          >
            FIRE AWAY
          </NavLink>
        </button>
      </div>
      <div className="col-md-3">
        <SideBar />
      </div>
    </div>
  );
};

export default BreakPage;
