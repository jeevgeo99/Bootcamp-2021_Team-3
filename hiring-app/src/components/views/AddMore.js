import * as React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import {APIService} from '../../api.service';
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";


export const AddMore = () => {
  
  
  // const [myOptions, setMyOptions] = useState([])
  const [allskills, setAllskills] = useState([]);
  // const [allskills, setAllskills] = useState(["Communication","Leardership","Presentation","Decision Making","Angular","React"])
  const [open, setOpen] = React.useState(false);

  const allskills = () => {
    APIService.skillmaster().then((response) => {
      if (response.status === "SUCCESS") {
        console.log("Success");
      }
    });
  };

  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('"http://localhost:5000/skills"').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].skill)
      }
      setMyOptions(myOptions)
    })
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  


    return (

        <div className="sub_head d-flex align-item-start">
          <button type="button" 
            style={{height:40,width: 120}} 
            onClick={handleClickOpen}
            class="btn btn-light">ADD MORE
           </button>

         <div>
          <Dialog PaperProps={{ sx: { position: "fixed", top: 128, left: 400, maxHeight: 375, maxWidth:808 } }} open={open} onClose={handleClose}>
            <DialogTitle style={{fontSize: 30, fontWeight:"bold",}}>Add mandatory skills</DialogTitle>
            <DialogContent>
            <Autocomplete
              style={{ width: 500 }}
              freeSolo
              autoComplete
              autoHighlight
              options={allskills}
              renderInput={(params) => ( 
                <TextField {...params}
                  onChange={getDataFromAPI}
                  variant="outlined"
                  label="Search"
                /> 
              )}
            />
            
            <br/>
            <div className="d-flex justify-content-end"> 
              <button  
              type="button" style={{height:40,width: 100}}
              className="add btn btn-secondary">Add</button>
            </div>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions> */}
          </Dialog>
        </div>  
        </div>  

    )};

    export default AddMore;