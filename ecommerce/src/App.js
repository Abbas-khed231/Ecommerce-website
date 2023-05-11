import './style.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Auth from './component/Auth';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
 import About from './component/About';
import Layout from './component/Layout';
import Products from './component/Products';
import Product from './component/Product';
import Checkout from './component/Checkout';
import Payment from './component/Payment';
import Cart from './component/Cart';
import store from './store';


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />          
          <Route path="/Home" element={<Layout renderComponent={<Home />} />} />
          <Route path="/About" element={<Layout renderComponent={<About />}/>} />
          <Route path='/Products' element={<Layout renderComponent={<Products/>}/>} />
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='Cart' element={<Cart/>}/>


          {/* <Route path='/Products' Component={Products} /> */}
          {/* <Route path='/products/:id' Component={Product}/> */}
        </Routes>
      </BrowserRouter> 
      </Provider>
      {/* <Auth/>
      {/* <Navbar/>
      <Home/> */}
    </>
  );
}

export default App;
