import * as React from "react";
import { NavLink } from "react-router-dom";
import { APP } from "../../constants/index";
import "../../components/../styles/FinalContent.css";

export const FinalPage = () => {
  return (
    <div className="row">
      <div className="col-md-10">
        <div className="div-one ms-5 me-5 mt-3">
          <div className="d-flex  pt-2 mt-5 bg-white align-self-start">
            <div className="title d-flex mt-5 align-self-start ">
              Thanks for applying.
            </div>
          </div>
          <div className="content d-flex py-4 align-self-start">
            Through planned and continual improvement of our services,
            <br />
            products, processes, and people, our aim is to create products
            <br />
            and services that not only meet but exceed our customer's
            <br />
            expectations.
            <br />
            <br />
            Your application will be processed in 3 days. The only way to
            <br />
            perform excellent work is to enjoy it. Keep looking if you
            <br />
            haven't discovered it yet.
            <br />
            <br />
            In case of any queries, you can always reach out to us at
            <br />
            careers@tarento.com
            <br />
            Does everything sound good to you ?
          </div>
          <button className="d-flex mt-4 align-self-start">
            <NavLink
              to={APP.ROUTES.LANDING}
              style={{ color: "#FFF" }}
              className="btn mx-4 mt-2 text-align-center link"
            >
              SOUNDS GREAT
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
