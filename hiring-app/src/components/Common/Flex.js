import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Flex(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <div className="row justify-content-between">
              <div className="col-2 ">{props.title}</div>
              <div className="col-2">{props.steps} </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
