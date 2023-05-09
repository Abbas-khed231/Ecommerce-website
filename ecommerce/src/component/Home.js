import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/Images/bg1.jpg" className="card-img" alt="Background" height="650px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 style={{color:"black"}} className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
                <p style={{color:"black"}}  className="card-text lead fs-2">
                    CHECK OUT ALL THE TRENDS
                </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
