import React from "react";
import { TextField } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <form className="form-control">
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      </form>
    </div>
  );
};
export default Home;
