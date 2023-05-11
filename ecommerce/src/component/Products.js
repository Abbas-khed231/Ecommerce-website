import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: [],
      loading: false,
    };
    this.filterProduct = this.filterProduct.bind(this);
  }

  componentDidMount() {
    this.componentMounted = true;
    this.getProducts();
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }

  async getProducts() {
    this.setState({ loading: true });
    const response = await fetch("https://fakestoreapi.com/products");
    if (this.componentMounted) {
      const data = await response.clone().json();
      const filter = await response.json();
      this.setState({ data, filter, loading: false });
    }
  }

  filterProduct(cat) {
    const updatedList = this.state.data.filter((x) => x.category === cat);
    this.setState({ filter: updatedList });
  }

  render() {
    const { filter, data, loading } = this.state;
    const { AddToCart, RemoveFromCart, cart} = this.props;


    const Loading = () => {
      return (
        <>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>

          <div className="col-md-3">
            <Skeleton height={350} />
          </div>

          <div className="col-md-3">
            <Skeleton height={350} />
          </div>

          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
        </>
      );
    };

    const ShowProducts = () => {
      const navigate = useNavigate();

      function handleBuy() {
        navigate("/checkout");
      }
      return (
        <>
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => this.setState({ filter: data })}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => this.filterProduct("men's clothing")}
            >
              Mens Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => this.filterProduct("women's clothing")}
            >
              Womens Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => this.filterProduct("jewelery")}
            >
              Jewellery
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => this.filterProduct("electronics")}
            >
              Electronics
            </button>
          </div>
          {filter.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div
                    className="card h-100 text-center p-4"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      height="250px"
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bolder">
                        ${product.price}
                      </p>
                      <button
                        onClick={handleBuy}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </button>

                      <button onClick={() => AddToCart(product)} className="btn btn-dark ms-3">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}

      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    cart :state.cartReducer.Cart_items
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    AddToCart: "",
    RemoveFromCart: ""
  },dispatch
) 
  


export default connect(mapStateToProps, mapDispatchToProps)(Products)

// export default Products;



