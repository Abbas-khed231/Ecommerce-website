import React from "react";
import Navbar from "./Navbar";
import {Typography,Button,RadioGroup, Radio,FormControl,FormControlLabel} from "@mui/material";


function Payment() {

 

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="500">
          Payment
        </Typography>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value=""
              control={<Radio />}
              label="UPI Apps / Netbanking"
            />
            <FormControlLabel value="male" control={<Radio />} label="Cash on delivery"/>
            <FormControlLabel value="other" control={<Radio />} label="Pay with Debit/Credit/ATM Cards" />
          </RadioGroup>
        </FormControl>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center", marginTop:"30px"}}>
        <Button style={{color:"black", border:" 2px solid black"}} variant="outlined">Submit</Button>
      </div>
    </>
  );
}

export default Payment;
