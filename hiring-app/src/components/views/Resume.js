import * as React from "react";
import "../../components/../styles/Resume.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "../Common/Flex";
import Btn from "../Common/RBtn";
import Box from "@mui/material/Box";
import { useState } from "react";
import { APIService } from "../../api.service";
// import Logo from "../Common/Logo";

const Resume = () => {
  const display = (data) => {
    APIService.displayResume(data).then((response) => {
      if (response.status === "SUCCESS") {
        console.log("Success");
      }
    });
  };

  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("resume", fileData);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("File sent successful");
      })

      .catch((err) => {
        console.log("err.message");
      });
  };
  const title = "Upload your resume";
  const steps = " 4 steps to complete";
  return (
    <div className="ms-5 me-5 mt-3">
      <div className="div-zero">
        {/* <Logo /> */}
        <div className="mt-3">
          <ProgressBar
            completed="20"
            bgColor="black"
            height="14px"
            labelColor="black"
          />
        </div>
      </div>
      <br />
      <Flex title={title} steps={steps} />

      <div className="resume-quote">
        <h4>“Your resume says a lot about you”</h4>
        <p>Upload your resume here</p>
      </div>

      <div className="box-grid">
        {/* <button onClick={APIService.displayResume}>Download</button> */}
        <Box component="span" sx={{ p: 8, border: "1px dashed grey" }}>
          {/* <Button>Drop your files here</Button> */}
          <form onSubmit={onSubmitHandler}>
            <label> Drop your resume </label>
            <input
              name="resume"
              className="browse"
              type="file"
              onChange={fileChangeHandler}
            />
            <br />
            <br />
            <button className="btn btn-dark" type="submit">Upload</button>
          </form>
        </Box>
      </div>

      <Btn information="/namepage" flag={true} />
    </div>
  );
};

export default Resume;
