import React, { useState, useEffect } from "react";
import AppContainer from "../Structure/AppContainer";
import ajaxCart from "../../Utils/remote/ajaxCartItem";
import { useParams } from "react-router-dom";

function Cart() {

  // const {OrderId} = useParams();
  const {id} = useParams();

  const [cart , setCart] = useState("")
  const [cartDetails, setCartDetails] = useState("");

  const [OrderID, setOrderID] = useState("");
  const [CustomerID, setCustomerID] = useState("");
  const [PrdID, setPrdID] = useState("");
  const [UnitPrice, setUnitPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  


  useEffect(() => {
    if(id){
        getCart(id);
    }
    updateCart();
    fetchCartDetails(); 
    // fetchCart();

  }, [id])

  const getCart = async (id) =>{
    const server_response = await ajaxCart.getCartInfo(id);
    // console.log(OrderId)
    if(server_response.status===" OK"){
      console.log(server_response.details)
        setOrderID(server_response.details.OrderID)
        setCustomerID(server_response.details.CustomerID)
        setPrdID(server_response.details.PrdID)
        setUnitPrice(server_response.details.UnitPrice)
        setQuantity(server_response.details.UnitPrice)
    }
  }

  const fetchCartDetails= async (id) =>{
    const server_response = await ajaxCart.cartDetails(id);
    console.log(server_response)
    if(server_response.status==="OK"){
      setCartDetails(server_response.details)
      console.log(server_response.details)

    }
  }


  const updateCart = (e) => {

    // Implement your form submission logic here
  };

  // const fetchCart = async () =>{
  //   const server_response = await ajaxCart.listCart();
  //   if(server_response.status === "OK"){
  //       setCart(server_response.details);

  //   }
  // }

  return (
    // <></>
    <AppContainer title="Cart">
      <div className="col-md-12">
        <div className="card w-75 ">
          <div className="card-body shadow-lg rounded-lg">
            <form className="prd" onSubmit={updateCart} method="POST">
             
              <div className="form-group row">
                <label htmlFor="prd_name" className="col-sm-2 col-form-label ml-5">
                  Order Number
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="order_id"
                    name="order_id"
                    value={OrderID}
                    onChange={(e) => setOrderID(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="prd_name" className="col-sm-2 col-form-label ml-5">
                  Customer Name
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="customer_id"
                    name="customer_id"
                    value={CustomerID}
                    onChange={(e) => setCustomerID(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="prd_name" className="col-sm-2 col-form-label ml-5">
                 Product Name
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="prd_id"
                    name="prd_id"
                    value={PrdID}
                    onChange={(e) => setPrdID(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="prd_name" className="col-sm-2 col-form-label ml-5">
                 Unit Price
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="unit_price"
                    name="unit_price"
                    value={UnitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="prd_name" className="col-sm-2 col-form-label ml-5">
                 Quantity
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="quantity"
                    name="quantity"
                    value={Quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
             
              <div className="text-center">
                {/* <button type="submit" className="btn btn-primary w-50 ml-3">
                  Update
                </button> */}


              </div>
            </form>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default Cart;
