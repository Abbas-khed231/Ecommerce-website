import './style.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Auth from './component/Auth';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
 import About from './component/About';
import Layout from './component/Layout';
import Products from './component/Products';
import Product from './component/Product';
import Checkout from './component/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />          
          <Route path="/Home" element={<Layout renderComponent={<Home />} />} />
          <Route path="/About" element={<Layout renderComponent={<About />}/>} />
          <Route path='/Products' element={<Layout renderComponent={<Products/>}/>} />
          <Route path='/Checkout' element={<Checkout/>}/>

          {/* <Route path='/Products' Component={Products} /> */}
          {/* <Route path='/products/:id' Component={Product}/> */}
        </Routes>
      </BrowserRouter> 
      {/* <Auth/>
      {/* <Navbar/>
      <Home/> */}
    </>
  );
}

export default App;
