import { useState, useEffect } from "react";
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import Flex from "./../Common/Flex";
import ProgressBar from "@ramonak/react-progress-bar";
import Btn from "./../Common/Btn";
import "../../components/../styles/EducationContent.css";
import { APIService } from "../../api.service";

import { makeStyles } from "@material-ui/core/styles";
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
  const data = localStorage.getItem("education");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function EducationPage() {
  const insert = (data) => {
    APIService.insertEdu(data).then((response) => {
      if (response.status === "SUCCESS") {
        console.log("Success");
      }
    });
  };

  const classes = useStyles();
  const [education, setEducation] = useState(getDatafromLS());
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      institution: "",
      stream: "",
      yearofpassing: "",
      percentage: "",
    },
  ]);
  const [bachelorFields, setBachelorFields] = useState([
    {
      id: uuidv4(),
      institution: "",
      stream: "",
      yearofpassing: "",
      percentage: "",
    },
  ]);
  const [masterFields, setMasterFields] = useState([
    {
      id: uuidv4(),
      institution: "",
      stream: "",
      yearofpassing: "",
      percentage: "",
    },
  ]);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let education = {};
      education["school"] = inputFields;
      education["bachelors"] = bachelorFields;
      education["master"] = masterFields;
      setEducation(education);
      console.log(education);
      insert(education);
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

  const handleChangeBachelor = (id, event) => {
    const newBachelorFields = bachelorFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setBachelorFields(newBachelorFields);
  };

  const handleChangeMaster = (id, event) => {
    const newMasterFields = masterFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setMasterFields(newMasterFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        institution: "",
        stream: "",
        yearofpassing: "",
        percentage: "",
      },
    ]);
  };

  const handleAddBachelors = () => {
    setBachelorFields([
      ...bachelorFields,
      {
        id: uuidv4(),
        institution: "",
        stream: "",
        yearofpassing: "",
        percentage: "",
      },
    ]);
  };

  const handleAddMasters = () => {
    setMasterFields([
      ...masterFields,
      {
        id: uuidv4(),
        institution: "",
        stream: "",
        yearofpassing: "",
        percentage: "",
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

  const handleRemoveBachelors = (id) => {
    const values = [...bachelorFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setBachelorFields(values);
  };

  const handleRemoveMasters = (id) => {
    const values = [...masterFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setMasterFields(values);
  };

  useEffect(() => {
    console.log(education);
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  const title = "Education";
  const steps = "3 steps to complete";

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="mt-3">
            <div className="mt-3">
              <ProgressBar
                completed="25"
                bgColor="black"
                height="14px"
                labelColor="black"
              />
            </div>

            <br />
            <Flex title={title} steps={steps} />

            <div className="education d-flex mt-5 py-3 justify-content-center align-self-end">
              <h4>
                Kindly tell us about your educational
                <br />
                background
              </h4>
            </div>
            <p className="d-flex justify-content-center">
              Share your educational details here
            </p>
            <div className="eduform d-flex justify-content-center">
              <form className={classes.root} onKeyPress={handleSubmit}>
                {inputFields.map((inputField) => (
                  <div key={inputField.id}>
                    <TextField
                      name="institution"
                      label="School"
                      variant="standard"
                      value={inputField.institution}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <TextField
                      name="stream"
                      label="Stream"
                      variant="standard"
                      value={inputField.stream}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <TextField
                      name="yearofpassing"
                      label="Year of passing"
                      variant="standard"
                      value={inputField.yearofpassing}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <TextField
                      name="percentage"
                      label="Percentage"
                      variant="standard"
                      value={inputField.percentage}
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

            <div className="eduform d-flex justify-content-center">
              <form className={classes.root} onKeyPress={handleSubmit}>
                {bachelorFields.map((inputField) => (
                  <div key={inputField.id}>
                    <TextField
                      name="institution"
                      label="Bachelors"
                      variant="standard"
                      value={inputField.institution}
                      onChange={(event) =>
                        handleChangeBachelor(inputField.id, event)
                      }
                    />
                    <TextField
                      name="stream"
                      label="Stream"
                      variant="standard"
                      value={inputField.stream}
                      onChange={(event) =>
                        handleChangeBachelor(inputField.id, event)
                      }
                    />
                    <TextField
                      name="yearofpassing"
                      label="Year of passing"
                      variant="standard"
                      value={inputField.yearofpassing}
                      onChange={(event) =>
                        handleChangeBachelor(inputField.id, event)
                      }
                    />
                    <TextField
                      name="percentage"
                      label="Percentage"
                      variant="standard"
                      value={inputField.percentage}
                      onChange={(event) =>
                        handleChangeBachelor(inputField.id, event)
                      }
                    />
                    <IconButton
                      disabled={bachelorFields.length === 1}
                      onClick={() => handleRemoveBachelors(inputField.id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={handleAddBachelors}>
                      <AddIcon />
                    </IconButton>
                  </div>
                ))}
              </form>
            </div>

            <div className="eduform d-flex justify-content-center">
              <form className={classes.root} onKeyPress={handleSubmit}>
                {masterFields.map((inputField) => (
                  <div key={inputField.id}>
                    <TextField
                      name="institution"
                      label="Masters"
                      variant="standard"
                      value={inputField.institution}
                      onChange={(event) =>
                        handleChangeMaster(inputField.id, event)
                      }
                    />
                    <TextField
                      name="stream"
                      label="Stream"
                      variant="standard"
                      value={inputField.stream}
                      onChange={(event) =>
                        handleChangeMaster(inputField.id, event)
                      }
                    />
                    <TextField
                      name="yearofpassing"
                      label="Year of passing"
                      variant="standard"
                      value={inputField.yearofpassing}
                      onChange={(event) =>
                        handleChangeMaster(inputField.id, event)
                      }
                    />
                    <TextField
                      name="percentage"
                      label="Percentage"
                      variant="standard"
                      value={inputField.percentage}
                      onChange={(event) =>
                        handleChangeMaster(inputField.id, event)
                      }
                    />
                    <IconButton
                      disabled={masterFields.length === 1}
                      onClick={() => handleRemoveMasters(inputField.id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={handleAddMasters}>
                      <AddIcon />
                    </IconButton>
                  </div>
                ))}
              </form>
            </div>

            <div className="d-flex justify-content-end">
              <Btn information="/skillpage" />
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

export default EducationPage;
