import * as React from "react";
import {Link, useNavigate, NavLink} from "react-router-dom";


function Navbar(props) {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 0);
    return navigate("/");
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/Home">
            AK COLLECTION
          </NavLink>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Products">
                  Products
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/" className="btn btn-outline-dark">
                {/* <NavLink onClick={handleLogout()} className="btn btn-outline-dark"> */}

                    <i className="fa fa-sign-out me-1"></i> Logout </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i> Cart (0)</NavLink>
            </div>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

export default Navbar;
