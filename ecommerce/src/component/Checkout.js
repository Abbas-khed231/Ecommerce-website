import { Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

function Checkout() {
  
  const navigate = useNavigate()

  function handleContinue() {
    navigate("/payment");
  }

  return (
    <>
      <Navbar/>
      <div style={{textAlign:"center"}}>
        <Typography variant="h4" fontWeight="500" > Billing Address</Typography>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
        <div>
          <TextField type="text" label="Full name" style={{ width: "400px", marginTop: "2rem" }} variant="standard"></TextField>
        </div>
        <div>
          <TextField type="email" label="Email Address" style={{ width: "400px", marginTop: "2rem" }} variant="standard"></TextField>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
        <div>
          <TextField type="text" label="Address" style={{ width: "400px", marginTop: "2rem" }} variant="standard"></TextField>
        </div>
        <div>
          <TextField type="text" label="City" style={{ width: "400px", marginTop: "2rem" }} variant="standard"></TextField>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
        <div>
          <TextField type="text" label="State" style={{ width: "400px", marginTop: "2rem" }} variant="standard"></TextField>
        </div>
        <div>
          <TextField type="text" label="Pincode" style={{ width: "400px", marginTop: "2rem" }} variant="standard"></TextField>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center", marginTop:"30px"}}>
        <Button style={{color:"black", border:" 2px solid black"}} onClick={handleContinue} variant="outlined">Continue to Payment</Button>
      </div>
    </>
  );
}

export default Checkout;
