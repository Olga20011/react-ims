import AppContainer from "../Structure/AppContainer";
// import ajaxOrder from "../../Utils/remote/ajaxCart";
import ajaxCustomer from "../../Utils/remote/ajaxCustomer";
import { useState, useEffect } from "react";
import CustomModal from "../Common/Modals";
import { Button } from 'react-bootstrap';
import ajaxProduct from "../../Utils/remote/ajaxProduct";
import { Link } from "react-router-dom";
import fetchCartDetails from "./Cart";
import { useParams } from "react-router-dom";


function Orders() {

//   const {id} = useParams();
//   const [order, setOrder] = useState([]);
//   const [orderDetails, setOrderDetails]= useState([])
//   const [customer, setCustomer] = useState([]);
//   const [product, setProduct] = useState([])
//   const [state, setState] = useState({
//     order_id:"",
//     customer_id: "",
//     prd_id: "",
//     unit_price: "",
//     quantity: "",
//     date: "",
//     status: "",
//   });

//   const { order_id,customer_id, prd_id, unit_price, quantity, date, status } = state;

//   const createOrder = async (e) => {
//     e.preventDefault();
//     const server_response = await ajaxOrder.createOrder(
//       order_id,
//       customer_id,
//       prd_id,
//       unit_price,
//       quantity,
//       date,
//       status
//     );
//     console.log(server_response);
//     if(server_response.status==="OK"){
//       setState({
//         order_id:"",
//         customer_id:"",
//         prd_id:"",
//         order_id:"",
//         unit_price:"",
//         quantity:"",
//         date:"",
//         status:""
//       })
//     }
//     fetchOrders();
//     handleCloseOrder();
//   };

//   const [showOrder, setShowOrder] = useState(false);

//   const handleShow = () => {
//     setShowOrder(true);
//   };

//   const handleCloseOrder = () => {
//     setShowOrder(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//     fetchCustomers();
//     fetchProducts();
//   }, []);

//   // const fetchOrders = async () => {
//   //   const server_response = await ajaxOrder.listOrders();
//   //   if (server_response.status === "OK") setOrder(server_response.details);
//   // };

//   const fetchCustomers = async () => {
//     const server_response = await ajaxCustomer.listCustomers();
//     if (server_response.status === "OK") {
//       setCustomer(server_response.details);
//     }
//   };

//   const fetchProducts = async(e) =>{
//     const server_response = await ajaxProduct.listProducts();
//     if (server_response.status=== "OK"){
//       setProduct(server_response.details);
//     }
//   }

//   const fetchOrderDetails = async () =>{
//     const server_response = await ajaxOrder.order_details(order_id)
//     console.log(server_response)
//     if(server_response.details==="OK"){
//       console.log(server_response.details)
//       setOrderDetails(server_response.details);
//     }
//   }

//   const handleChange = (e) => {
//     setState({ ...state, customer_id: e.target.value });
//   };

//   const handlePrdChange = (e) => {
//     setState({ ...state, prd_id: e.target.value });
//   };


//   return (
//     <>
//       <AppContainer title="Orders">
//         <div className="nav-item dropdown no-arrow">
//           <CustomModal
//             title="Create Order"
//             show={showOrder}
//             onHide={handleCloseOrder}
//             button="Create Order"
//             iconClass={"btn btn-primary"}
//             variant={"primary"}
//             position="bottom center"
//           >
//             <div>
//               <form className="prd" onSubmit={(e) => createOrder(e)} method="POST">

//               <input
//                   type="number"
//                   name="order_id"
//                   placeholder=" Order ID"
//                   value={order_id}
//                   onChange={(e) => setState({ ...state, order_id: e.target.value })}
//                 />

//                 <select
//                   className="form-control mb-3"
//                   name="customer"
//                   value={state.id}
//                   onChange={handleChange}
//                 >
//                   <option value="select customer">Select Customer</option>
//                   {customer.map((customer) => (
//                     <option key={customer.id} value={customer.id}>
//                       {customer.name}
//                     </option>
//                   ))}
//                 </select>

//                 <br/>

//                 <select
//                   className="form-control mb-3"
//                   name="prd_name"
//                   value={state.id}
//                   onChange={handlePrdChange}
//                 >
//                   <option value="select product">Select Product</option>
//                   {product.map((product) => (
//                     <option key={product.id} value={product.id}>
//                       {product.prd_name}
//                     </option>
//                   ))}
//                 </select>

//                 <br/>

//                 <input
//                   type="number"
//                   name="unit_price"
//                   placeholder="Unit Price"
//                   value={unit_price}
//                   onChange={(e) => setState({ ...state, unit_price: e.target.value })}
//                 />

//                 <br/>

//                 <input
//                   type="number"
//                   name="quantity"
//                   placeholder="Quantity"
//                   value={quantity}
//                   onChange={(e) => setState({ ...state, quantity: e.target.value })}
//                 />

//                 <br/>

//                 <input
//                   type="date"
//                   name="date"
//                   placeholder="Date"
//                   value={date}
//                   onChange={(e) => setState({ ...state, date: e.target.value })}
//                 />

//                 <br/>

//                 <input
//                   type="text"
//                   name="status"
//                   placeholder="Status"
//                   value={status}
//                   onChange={(e) => setState({ ...state, status: e.target.value })}
//                 />
//                 <div>
//                   <button type="submit">Create order</button>
//                 </div>
//               </form> 
//             </div>
//           </CustomModal>
//         </div>
//         <div className="col-md-12">

//         <Button variant="primary" onClick={handleShow} style={{marginLeft: "1090px"}}>
//         Create Order
//       </Button>

//           <div>
//             <div className="card shadow mb-4">
//               <div className="card-header py-3"></div>
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table
//                     className="table table-bordered"
//                     id="dataTable"
//                     width="100%"
//                     cellSpacing={0}
//                   >
//                     <thead>
//                       <tr>
                        
//                         <th>Order Date</th>
//                         <th>Status</th>
//                         <th>Details</th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       {order.map((item) => (
//                         <tr key={item.id}>
//                           <td>{item.date}</td>
//                           <td>{item.status}</td>
//                           <Link to={`/cart/${item.id}`} onClick={() => fetchCartDetails(item.id)}> <td>ViewCart</td></Link> 
//                         {/* <Link to={`/cart/${item.id}`}> <td>ViewCart</td></Link>  */}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </AppContainer>
//     </>
  // );
}

export default Orders;
