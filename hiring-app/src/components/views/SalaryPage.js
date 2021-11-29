// import { DefaultHandler } from "htmlparser2";
import * as React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "../Common/Flex";
import Btn from "../Common/Btn";
import "../../components/../styles/NameContent.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PreBtn from "../Common/PreBtn";
import SideBar from "../Common/SideBar";
import { APIService } from "../../api.service";

const getDatafromLS = () => {
  const data = localStorage.getItem("details");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const SalaryPage = () => {
  const insert= (data) => {
    APIService.insertSalary(data).then((response) => {
      if (response.status === "SUCCESS") {
        console.log("Success");
      }
    });
  };
  const [salary, setSalary] = useState(getDatafromLS());

  // input field states
  const [expected_salary, setTotalSalary] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let salary = {
      expected_salary,
    };

    console.log(salary);
    setSalary([salary]);
    setTotalSalary("");
    
    insert(salary);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("salary", JSON.stringify(salary));
  }, [salary]);

  const title = "Salary";
  const steps = "Completed";

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="mt-3">
            <ProgressBar
              completed="100"
              bgColor="black"
              height="14px"
              labelColor="black"
            />
          </div>

          <br />
          <Flex title={title} steps={steps} />

          <div className="name d-flex mt-5 py-3 justify-content-center align-self-end">
            <h4>
              Last but not least, I have a question for you!! <br />
              What is the annual salary you expect?
            </h4>
          </div>

          {/* <div className="one p-3 mb-5 bg-white"> */}
          <div className="d-flex justify-content-center py-5">
            <div className="text-line">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "70ch" },
                }}
                noValidate
                autoComplete="off"
                className="form-group"
                onSubmit={handleAddBookSubmit}
              >
                <TextField
                  id="standard-basic"
                  label="Salary expectation"
                  variant="standard"
                  type="text"
                  placeholder="Type here"
                  className="form-control"
                  required
                  onChange={(e) => setTotalSalary(e.target.value)}
                  value={expected_salary}
                />
              </Box>
            </div>

            {/* <div className="d-flex justify-content-end">  */}
            <PreBtn information="/experiencepage" />
            <Btn information="/finalpage" />

            {/* </div>
              </form> */}
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <SideBar />
      </div>
    </div>
    // </div>
  );
};

export default SalaryPage;
