import * as React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "./../Common/Flex";
import Btn from "./../Common/Btn";
import PreBtn from "./../Common/PreBtn";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "../../components/../styles/GenderContent.css";
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

export const GenderPage = () => {
  // main array of objects state || books state || books array of objects
  const [details, setdetails] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  //const [dob, setDob] = useState("");
  const [value, setValue] = useState(new Date());

  const handleChange = (e) => {
    setGender(e.target.value);

    // creating an object

    let details = {
      name,
    };

    let localDetails = JSON.parse(localStorage.getItem("details"));
    details["gender"] = e.target.value;
    details.name = localDetails[0]["name"];
    setName(details.name);
    setdetails([details]);
    // setDob("");
  };

  const onChange = (a) => {
    setValue(a);

    let details = {
      name,
    };

    let localDetails = JSON.parse(localStorage.getItem("details"));
    details["dob"] = a;
    details.name = localDetails[0]["name"];
    details.gender = localDetails[0]["gender"];
    setdetails(details);

    console.log(details);
  };
  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  });

  const title = "Gender and Date of Birth";
  const steps = " 2 steps to complete";

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="mt-3">
            <ProgressBar
              completed="60"
              bgColor="black"
              height="14px"
              labelColor="black"
            />
          </div>

          <br />
          <Flex title={title} steps={steps} />

          <div className="one p-3 mb-5 bg-white">
            <h4 className="gender d-flex mt-5 py-3 justify-content-center align-self-end">
              Nice to meet you!! <br />
              Thank you for taking the time for apply.
            </h4>
            <p className="d-flex justify-content-center">
              Kindly choose your gender and enter your date of birth
            </p>
            {/* <div className="d-flex mt-5 py-3 justify-content-center align-self-end">
            <h4 className= 'gender'>It’s great to meet you!!
            <br></br>
             Thanks for taking the time to apply.</h4>
          </div>
          <p className="para justify-content-center">Kindly choose your gender and provide your date of birth</p> */}
            <div className="d-flex justify-content-center py-5">
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  value={gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <div className="date">
                <p> Date of birth </p>
              </div>
              <div className="d-flex justify-content-center">
                <DatePicker onChange={onChange} />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <PreBtn information="/namepage" />
              <Btn information="/contactpage" />
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
export default GenderPage;
