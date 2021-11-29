// import { DefaultHandler } from "htmlparser2";
import * as React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "./../Common/Flex";
import Btn from "./../Common/Btn";
import PreBtn from "./../Common/PreBtn";
import "../../components/../styles/ContactContent.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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

export const ContactPage = () => {
  // main array of objects state || books state || books array of objects
  const [details, setdetails] = useState(getDatafromLS());
  // input field states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setMail] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let details = {
      name,
      gender,
      dob,
    };

    let localDetails = JSON.parse(localStorage.getItem("details"));
    //console.log(localDetails);
    details.name = localDetails["name"];
    details.gender = localDetails["gender"];
    details.dob = localDetails["dob"];
    details["email"] = email;
    details["phone"] = phone;
    //setdetails([details]);

    //  console.log(localDetails[1]);
    //  console.log(details);
    //  console.log("email");
    //  console.log(email);
    //  console.log(phone);
    setdetails([details]);
    setName(details.name);
    setGender(details.gender);
    setDob(details.dob);
    // setMail("");
    // setPhone("");
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  });

  const title = "Contact";
  const steps = " 1 step to complete";

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="mt-3">
            <ProgressBar
              completed="80"
              bgColor="black"
              height="14px"
              labelColor="black"
            />
          </div>
          <br />
          <Flex title={title} steps={steps} />
          <div className="contact d-flex mt-5 py-3 justify-content-center align-self-end">
            <h4>How can we reach out to you?</h4>
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
                  label="Email"
                  name="email"
                  variant="standard"
                  type="text"
                  placeholder="Type here"
                  className="form-control"
                  required
                  onChange={(e) => setMail(e.target.value)}
                  value={email}
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
                  label="Phone number"
                  name="phone"
                  variant="standard"
                  type="text"
                  placeholder="Type here"
                  className="form-control"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </Box>
            </div>
            <div className="d-flex justify-content-end">
              <PreBtn information="/genderpage" />
              <Btn information="/linkpage" />
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

export default ContactPage;
