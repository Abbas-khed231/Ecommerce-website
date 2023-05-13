import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import {
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function Payment() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    navigate("/Home");
  };

  const handleSubmit = () => {
    if (selectedValue !== "") {
      setError(false);
      setOpen(true);
    } else {
      setError(true);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="500">
          Payment
        </Typography>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={selectedValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="upi"
              control={<Radio />}
              label="UPI Apps / Netbanking"
            />
            <FormControlLabel
              value="cod"
              control={<Radio />}
              label="Cash on delivery"
            />
            <FormControlLabel
              value="cards"
              control={<Radio />}
              label="Pay with Debit/Credit/ATM Cards"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          marginTop: "30px",
        }}
      >
        <Button
          style={{ color: "black", border: " 2px solid black" }}
          variant="outlined"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      {error && (
        <Typography
          variant="body1"
          color="error"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          Please select a payment option.
        </Typography>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Thank you for shopping!</DialogTitle>
        <DialogContent>
          <Typography>Payment successful.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Payment;



