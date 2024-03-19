import React from "react";
import AppContainer from "../Structure/AppContainer";
import ajaxOrder from "../../Utils/remote/ajaxOrder";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Orders() {
  const [order, setOrder] = useState([]);
  const [state, setState] = useState({
    customer_id: "",
    prd_id: "",
    unit_price: "",
    quantity: "",
    date: "",
    status: "",
  });

  const { customer_id, prd_id, unit_price, quantity, date, status } = state;

  const createOrder = async (e) => {
    e.preventDefault();
    const server_response = await ajaxOrder.createOrder(
      customer_id,
      prd_id,
      unit_price,
      quantity,
      date,
      status
    );
    console.log(server_response);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const server_response = await ajaxOrder.listOrders();
    if (server_response.status === "OK") setOrder(server_response.details);
  };

  return (
    <AppContainer title="Orders">
      <div className="nav-item dropdown no-arrow">
        <Popup
          trigger={
            <button
              className=" d-sm-inline-block btn btn-sm btn-primary"
              style={{ marginLeft: "1090px", marginTop: "-100px" }}
            >
              Create Order
            </button>
          }
          position="bottom center"
        >
          <div>
            <form
              className="prd"
              onSubmit={(e) => createOrder(e)}
              method="POST"
            >
              <input
                type="text"
                name="customer_id"
                placeholder="Customer ID"
                value={customer_id}
                onChange={(e) =>
                  setState({ ...state, customer_id: e.target.value })
                }
              />
              <input
                type="text"
                name="prd_id"
                placeholder="Product ID"
                value={prd_id}
                onChange={(e) => setState({ ...state, prd_id: e.target.value })}
              />
              <input
                type="number"
                name="unit_price"
                placeholder="Unit Price"
                value={unit_price}
                onChange={(e) =>
                  setState({ ...state, unit_price: e.target.value })
                }
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) =>
                  setState({ ...state, quantity: e.target.value })
                }
              />

              <input
                type="date"
                name="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setState({ ...state, date: e.target.value })}
              />

              <input
                type="text"
                name="status"
                placeholder="Status"
                value={status}
                onChange={(e) => setState({ ...state, status: e.target.value })}
              />

              <div>
                <button type="submit">Create order</button>
              </div>
            </form>
          </div>
        </Popup>
      </div>

      <div className="col-md-12">
        <div>
          <div className="card shadow mb-4">
            <div className="card-header py-3"></div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>Customer ID</th>
                      <th>Order Date</th>
                      <th>Status</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Array.isArray(order) &&
                      order.map((item) => (
                        <tr key={item.id}>
                          <td>{item.customer_id}</td>
                          <td>{item.date}</td>
                          <td>{item.status}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default Orders;
