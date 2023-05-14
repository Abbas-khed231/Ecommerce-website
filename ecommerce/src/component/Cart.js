import React from 'react'
import Navbar from './Navbar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { AddToCart_Saga, RemoveFromCart_Saga, addToCart, removeFromCart } from '../store/cart/cartAction'

function Cart({cart,RemoveFromCart}) {
  console.log({cart})

  const navigate = useNavigate();

      function handleBuy() {
        navigate("/checkout");
      }


  return (
    <>
        <div>
            <Navbar/>
            {cart.map((items) => {
              return(
                <>
                  <div className="col-md-3 mb-4">
                  <div
                    className="card h-100 text-center p-4"
                    key={items.id}
                  >
                    <img
                      src={items.image}
                      height="250px"
                      className="card-img-top"
                      alt={items.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {items.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bolder">
                        ${items.price}
                      </p>
                      <button
                        onClick={handleBuy}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </button>

                      <button onClick={() => RemoveFromCart(items)} className="btn btn-dark ms-3">Remove</button>
                            </div>
                        </div>
                    </div>
                </>
              )
            })

            }
        </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return{
    cart : state.cartReducer.Cart_items
  } 
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    AddToCart: addToCart,
    RemoveFromCart: removeFromCart,
  },dispatch
) 

export default connect(mapStateToProps,mapDispatchToProps) (Cart);