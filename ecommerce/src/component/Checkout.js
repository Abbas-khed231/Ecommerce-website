import { Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

function Checkout() {
  
  const navigate = useNavigate()

  function handleContinue() {
    navigate("/payment");
  }

  function validateForm() {
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const pincode = document.getElementById("pincode").value;

    if (!fullName || !email || !address || !city || !state || !pincode) {
      alert("Please fill out all fields.");
      return false;
    }

    // Add additional validation logic here, such as checking for valid email addresses or zip codes

    return true;
  }

  return (
    <>
      <Navbar/>
      <div style={{textAlign:"center"}}>
        <Typography variant="h4" fontWeight="500" > Billing Address</Typography>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
        <div>
          <TextField type="text" id="full-name" label="Full name" style={{ width: "400px", marginTop: "2rem" }} variant="standard" required></TextField>
        </div>
        <div>
          <TextField type="email" id="email" label="Email Address" style={{ width: "400px", marginTop: "2rem" }} variant="standard" required></TextField>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
        <div>
          <TextField type="text" id="address" label="Address" style={{ width: "400px", marginTop: "2rem" }} variant="standard" required></TextField>
        </div>
        <div>
          <TextField type="text" id="city" label="City" style={{ width: "400px", marginTop: "2rem" }} variant="standard" required></TextField>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
        <div>
          <TextField type="text" id="state" label="State" style={{ width: "400px", marginTop: "2rem" }} variant="standard" required></TextField>
        </div>
        <div>
          <TextField type="text" id="pincode" label="Pincode" style={{ width: "400px", marginTop: "2rem" }} variant="standard" required></TextField>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center", marginTop:"30px"}}>
        <Button style={{color:"black", border:" 2px solid black"}} onClick={() => validateForm() && handleContinue()} variant="outlined">Continue to Payment</Button>
      </div>
    </>
  );
}

export default Checkout;


