import { useState, useEffect } from "react";
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Flex from "./../Common/Flex";
import ProgressBar from "@ramonak/react-progress-bar";
import Btn from "./../Common/Btn";
import "../../components/../styles/ExperienceContent.css";
import PreBtn from "./../Common/PreBtn";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { APIService } from "../../api.service";
import SideBar from "../Common/SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const getDatafromLS = () => {
  const data = localStorage.getItem("experience");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function ExperiencePage() {
  const insert = (data) => {
    APIService.insertExp(data).then((response) => {
      if (response.status === "SUCCESS") {
        console.log("Success");
      }
    });
  };
  const classes = useStyles();
  const [experience, setExperience] = useState(getDatafromLS());
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      company: "",
      designation: "",
      fromdate: "",
      todate: "",
      ctc: "",
    },
  ]);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let experience = {};
      experience["experience"] = inputFields;
      setExperience(experience);
      console.log(experience);
      insert(experience);
    }
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        company: "",
        designation: "",
        fromdate: "",
        todate: "",
        ctc: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  useEffect(() => {
    console.log(experience);
    localStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  const title = "Experience";
  const steps = "1 step to complete ";

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="mt-3">
            <div className="mt-3">
              <ProgressBar
                completed="75"
                bgColor="black"
                height="14px"
                labelColor="black"
              />
            </div>

            <br />
            <Flex title={title} steps={steps} />

            <div className="experience d-flex mt-5 py-3 justify-content-center align-self-end">
              <h4>
                Here is where you can tell us about <br />
                your experience.
              </h4>
            </div>
            <p className="d-flex justify-content-center">
              Share your experience here
            </p>
            <div className="d-flex justify-content-center">
              <form className={classes.root} onKeyPress={handleSubmit}>
                {inputFields.map((inputField) => (
                  <div key={inputField.id}>
                    <TextField
                      name="company"
                      label="Company Name"
                      variant="standard"
                      value={inputField.company}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <TextField
                      name="designation"
                      label="Designation"
                      variant="standard"
                      value={inputField.designation}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <TextField
                      name="fromdate"
                      label="From - MM/YYYY"
                      variant="standard"
                      value={inputField.fromdate}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <TextField
                      name="todate"
                      label="To - MM/YYYY"
                      variant="standard"
                      value={inputField.todate}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />

                    <TextField
                      name="ctc"
                      label="CTC"
                      variant="standard"
                      value={inputField.ctc}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <IconButton
                      disabled={inputFields.length === 1}
                      onClick={() => handleRemoveFields(inputField.id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={handleAddFields}>
                      <AddIcon />
                    </IconButton>
                  </div>
                ))}
              </form>
            </div>

            <div className="d-flex justify-content-end">
              <Btn information="/salarypage" />
              <PreBtn information="/skillpage" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <SideBar />
      </div>
    </div>
  );
}

export default ExperiencePage;
