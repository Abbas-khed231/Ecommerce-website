import React, { Component } from "react";
import { Typography, TextField, Button } from "@mui/material";

// import { redirect } from "react-router-dom";

class Auth extends Component {
    constructor(props){
        super(props)

        this.state = {
            form:{
                email:"",
                password:""
            }
        }

        this.creds = {
            email:"farhan@gmail.com",
            password:"123456789"
        }
    }

    // componentDidMount(){
    //     const authenticated = localStorage.setItem("isAuthenticated");
    //     if(authenticated){
    //         redirect("/Home")
    //     }
    // }
    // }

    handleForm = (key,value) => {
        let { form } = this.state;
        form[key] = value;
        this.setState({ form });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {form} = this.state;
        const { email, password } = this.creds;
        if ( form.email === email && form.password === password) {
          localStorage.setItem('isAuthenticated', 1);
        } else {
          alert('Invalid email & password');
        }
    }




  render() {
    return (
      <>
      
      
      <div style={{display:"flex",justifyContent:"center" }}>
        <Typography variant="h3" fontWeight="700">AK COLLECTION</Typography>
      </div>

      <div style={{display:"flex",justifyContent:"center" }}>
          <Typography variant="h4" fontWeight="700">
            Login
          </Typography>
      </div>

      <div style={{display:"flex",justifyContent:"center" }}>
        <p>Login to continue</p>
      </div>

      <div style={{display:"flex",justifyContent:"center" }}>

        <div>
            <form onSubmit={this.handleSubmit}>
            <div>
                <TextField
                label="Email Address"
                style={{ width: "400px", marginTop: "2rem" }}
                onChange={(e) => this.handleForm("email", e.target.value)}
                />
                <br />
            </div>
            <div>
                <TextField
                label="Password"
                type="password"
                style={{ width: "400px", marginTop: "2rem" }}
                onChange={(e) => this.handleForm("password", e.target.value)}
                />
            </div>
            <div>
                <Button 
                variant="contained"
                style={{
                    width: "400px",
                    lineHeight: "1.75",
                    marginTop: "2rem",
                    backgroundColor: "black",
                    cursor: "pointer",
                    padding: "11px 24px",
                }}
                type={"submit"}
                >
                Login
                </Button>
            </div>
            </form>
        </div>
        
        

        </div>
      </>
    );
  }
}

export default Auth;
