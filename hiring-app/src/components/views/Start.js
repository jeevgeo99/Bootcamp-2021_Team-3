import "../../components/../styles/Start.css";
import { NavLink } from "react-router-dom";
import { APP } from "../../constants/index";

const Start = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* <div className="div-zero">
        <img src="./tarento.jpg" alt="Tarento Logo" />
      </div> */}
      <div className=" div-one">
        <div className="start py-5 text-center">
          <h1>JOIN US!</h1>
          <br />
          <img src="./tarento.jpg" alt="Tarento Logo" />
          <br />
          <br />
          <span>
            <h4 className>
              We are looking for a business analyst.
              <br />
              Are you right person for the job.
            </h4>
          </span>
          <br />
          <button>
            <NavLink
              to={APP.ROUTES.RESUME}
              style={{ color: "#FFF" }}
              className="btn mx-4 text-align-center link"
            >
              Let's find out
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
