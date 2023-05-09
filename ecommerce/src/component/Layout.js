import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';


function Layout(props) {
    const isAuth = localStorage.getItem('isAuthenticated');
    const [isAuthenticated, updateAuthenticated] = useState(false);
    return(
        <>  
            <Navbar>
                {props.renderComponent}
            </Navbar>
            
        </>
    )
}

export default Layout;
