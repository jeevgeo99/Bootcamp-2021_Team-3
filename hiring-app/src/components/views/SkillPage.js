import * as React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "../Common/Flex";
import SideBar from "../Common/SideBar";
import Btn from "../Common/Btn";
import PreBtn from "../Common/PreBtn";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import AddMore from "./AddMore";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "../../components/../styles/SkillContent.css";

const getDatafromLS = () => {
  const data = localStorage.getItem("mskills");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export const SkillPage = () => {
  // main array of objects state || books state || books array of objects
  const [mskills, setMskills] = useState(getDatafromLS());
  const [value, setValue] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let m_skills = {};
  let localMskills = JSON.parse(localStorage.getItem("mskills"));

  // form submit event
  const onChange = (e) => {
    setValue(e.target.name.value);
    // creating an object
    setMskills({ ...mskills, [e.target.name]: e.target.value });
    let localMskills = JSON.parse(localStorage.getItem("mskills"));
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("mskills", JSON.stringify(mskills));
  }, [mskills]);

  const title = "Skill";
  const steps = " 2 steps to complete";

  function valuetext(value) {
    setValue(value);
    return `${value}`;
  }

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="div-zero">
            {/* <Logo /> */}
            <div className="mt-3">
              <ProgressBar
                completed="50"
                bgColor="black"
                height="14px"
                labelColor="black"
              />
            </div>
          </div>
          <br />
          <Flex title={title} steps={steps} />
          <div className="one p-3 mb-4 bg-white">
            <h4 className="skill d-flex mt-5 py-3 justify-content-center align-self-end">
              What skills do you have that you believe <br />
              will help you succeed in this position?
              <br /> Rate it!!
            </h4>
            <p className="d-flex justify-content-center">
              What skill can you bring to this position. Rate it !!
            </p>
          </div>
          <div className="m_skill">
            <div className="sub_head d-flex align-item-start">
              <h5>Mandatory skills</h5>
            </div>
            <br />
            <div class="list-group">
              <a
                href="#!"
                class="list list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex justify-content-between align-item-center">
                  <p className="mb-1">Attention to detail</p>
                  <Box sx={{ width: 157 }}>
                    <span>
                      <Slider
                        aria-label="Attention to details"
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        name="Attention to details"
                        onChange={onChange}
                        value={value}
                        step={1}
                        marks
                        min={0}
                        max={5}
                        valueLabelDisplay="auto"
                      />
                    </span>
                  </Box>
                </div>
              </a>
            </div>
            <br />
            <div class="list-group">
              <a
                href="#!"
                class="list list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex align-item-end justify-content-between">
                  <p className="mb-1">Strategic orientation</p>
                  <Box sx={{ width: 157 }}>
                    <Slider
                      aria-label="Strategic orientation"
                      defaultValue={0}
                      getAriaValueText={valuetext}
                      name="Strategic orientation"
                      onChange={onChange}
                      value={value}
                      step={1}
                      marks
                      min={0}
                      max={5}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </a>
            </div>
            <br />
            <div class="list-group">
              <a
                href="#!"
                class="list list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex align-item-end justify-content-between">
                  <p className="mb-1">Dealing with ambiguity</p>
                  <Box sx={{ width: 157 }}>
                    <Slider
                      aria-label="Detailing with ambiguity"
                      defaultValue={0}
                      getAriaValueText={valuetext}
                      name="Detailing with ambiguity"
                      onChange={onChange}
                      value={value}
                      step={1}
                      marks
                      min={0}
                      max={5}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </a>
            </div>
            <br />
            <div class="list-group">
              <a
                href="#!"
                class="list list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex align-item-end justify-content-between">
                  <p className="mb-1">Customer focus</p>

                  <Box sx={{ width: 157 }}>
                    <Slider
                      aria-label="Customer focus"
                      defaultValue={0}
                      getAriaValueText={valuetext}
                      name="Customer focus"
                      onChange={onChange}
                      value={value}
                      step={1}
                      marks
                      min={0}
                      max={5}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </a>
            </div>
          </div>
          <br />
          <div className="sub_head d-flex align-item-start">
            <h5>Additional skills</h5>
          </div>

          <div>
              <AddMore />
            </div> 
            
          <div className="d-flex justify-content-end">
            <PreBtn information="/educationpage" />
            <Btn information="/experiencepage" />
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <SideBar />
      </div>
    </div>
  );
};

export default SkillPage;