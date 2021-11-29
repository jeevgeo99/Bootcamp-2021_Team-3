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
// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import DisplayResume from "../Common/DisplayResume";

//import '../components/css/View.css';

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("details");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const NamePage = () => {
  // const [file, setFile] = useState();

  // useEffect(() => {
  //   APIService.displayResume().then((file) => setFile(file));
  // }, []);
  // console.log(file.toString());

  const display = (data) => {
    APIService.displayResume(data).then((response) => {
      if (response.status === "SUCCESS") {
        console.log("Success");
      }
    });
  };
  console.log(display);

  // main array of objects state || books state || books array of objects
  const [details, setDetails] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let details = {
      name,
    };

    console.log(details);
    setDetails([details]);
    setName("");
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  const title = "Your name";
  const steps = " 3 steps to complete";

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="mt-3">
            <ProgressBar
              completed="40"
              bgColor="black"
              height="14px"
              labelColor="black"
            />
          </div>

          <br />
          <Flex title={title} steps={steps} />

          <div className="name d-flex mt-5 py-3 justify-content-center align-self-end">
            <h4>Shall we start with your name?</h4>
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
                  label="Enter your full name here"
                  variant="standard"
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Box>
            </div>

            {/* <div className="d-flex justify-content-end">  */}
            <PreBtn information="/resume" />
            <Btn information="/genderpage" />

            {/* </div>
              </form> */}
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <SideBar />
      </div>
    </div>
  );
};

export default NamePage;
