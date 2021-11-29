import * as React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "./../Common/Flex";
import Btn from "./../Common/Btn";
import PreBtn from "./../Common/PreBtn";
import "../../components/../styles/LinkContent.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { APIService } from "../../api.service";
import SideBar from "../Common/SideBar";

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

export const LinkPage = () => {
  const insert = (data) => {
    APIService.insertData(data).then((response) => {
      if (response.status === "SUCCESS") {
        console.log("Success");
      }
    });
  };
  // main array of objects state || books state || books array of objects
  const [details, setdetails] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setMail] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [github, setGitHub] = useState("");
  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let details = {
      name,
      gender,
      dob,
      email,
      phone,
    };
    let localDetails = JSON.parse(localStorage.getItem("details"));
    console.log(localDetails[0]);

    console.log(linkedin, github);
    details.name = localDetails[0]["name"];
    details.gender = localDetails[0]["gender"];
    details.dob = localDetails[0]["dob"];
    details.email = localDetails[0]["email"];
    details.phone = localDetails[0]["phone"];
    details["linkedin"] = linkedin;
    details["github"] = github;
    console.log(localDetails);
    // console.log(details);
    setdetails([details]);
    setName(details.name);
    setGender(details.gender);
    setDob(details.dob);
    setMail(details.email);
    setPhone(details.phone);
    // setLinkedIn(" ");
    // setGitHub(" ");
    insert(details);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  });
  const title = "Social links";
  const steps = " Completed ";

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

          <div className="link d-flex mt-5 py-3 justify-content-center align-self-end">
            <h4>
              Just a few personal details to add
              <br />
              credibility to your profile and we will <br />
              have all the information we need.
            </h4>
          </div>

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
                  label="LinkedIn"
                  variant="standard"
                  type="text"
                  placeholder="Paste the link here"
                  className="form-control"
                  required
                  onChange={(e) => setLinkedIn(e.target.value)}
                  value={linkedin}
                />
              </Box>
              <br />
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
                  label="Github"
                  variant="standard"
                  type="text"
                  placeholder="Paste the link here"
                  className="form-control"
                  required
                  onChange={(e) => setGitHub(e.target.value)}
                  value={github}
                />
              </Box>
            </div>

            <div className="d-flex justify-content-end">
              <PreBtn information="/contactpage" />
              <Btn information="/breakpage" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <SideBar />
      </div>
    </div>
  );
};

export default LinkPage;
