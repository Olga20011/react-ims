import React, { useState, useEffect } from "react";
import AppContainer from "../Structure/AppContainer";
import ajaxCustomer from "../../Utils/remote/ajaxCustomer";
import "reactjs-popup/dist/index.css";
import CustomModal from "../Common/Modals";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Customer() {
  const {id} = useParams();
  const [customer, setCustomer] = useState([]);
  const [state, setState] = useState({
    name: "",
    phone_number: "",
    email: "",
    location: "",
  });

  const [showCustomer, setShowCustomer] = useState(false)

  const handleShow = () =>{
    setShowCustomer(true);
  }

  const handleCloseShowCustomer =() =>{
    setShowCustomer(false);
  }

  const { name, phone_number, email, location } = state;

  const createCustomer = async (e) => {
    e.preventDefault();
    const server_response = await ajaxCustomer.createCustomer(
      name,
      phone_number,
      email,
      location
    );
    console.log(server_response);
    if(server_response.status=="OK"){
      setState({
        name:"",
        phone_number:"",
        email:"",
        location:""
        
      })
    }

    fetchCustomers();
    handleCloseShowCustomer();
  };

  useEffect(() => {
    fetchCustomers();
    deleteCustomer();
  }, []);

  const fetchCustomers = async () => {
    const server_response = await ajaxCustomer.listCustomers();
    if (server_response.status === "OK") {
      setCustomer(server_response.details);
    }
  };

  const deleteCustomer = async (e) =>{
    const server_response = await ajaxCustomer.deleteCustomer(id);
    if(server_response.status==="OK"){
      console.log(server_response)
      fetchCustomers();

    }
  }

  return (
    <AppContainer title="Customers">
      <div className="nav-item dropdown no-arrow">
       
            <Button
              className=" d-sm-inline-block btn btn-sm btn-primary"
              style={{ marginLeft: "1090px", marginTop: "-100px" }}
              onClick={handleShow}
            >
              Create Customer
            </Button>
          
         
        <CustomModal

          title="Create Customer"
          show={showCustomer}
          onHide={handleCloseShowCustomer}
          button="Create Customer"
          iconClass={"btn btn-primary"}
          variant={"primary"}
          position="bottom center"
        
        >
          <div>
            <form
              className="customer"
              onSubmit={(e) => createCustomer(e)}
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />

              <br/>

              <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={phone_number}
                onChange={(e) =>
                  setState({ ...state, phone_number: e.target.value })
                }
              />

              <br/>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />

              <br/>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) =>
                  setState({ ...state, location: e.target.value })
                }
              />

              <div>
                <button type="submit" onClick={(e)=>createCustomer(e)}>Create Customer</button>
              </div>
            </form>
          </div>

          </CustomModal>
        
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
                      <th>Customer Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Location</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Array.isArray(customer) &&
                      customer.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.phone_number}</td>
                          <td>{item.email}</td>
                          <td>{item.location}</td>
                          <td>  <Link><i
                                className="bi bi-pen-fill" 
                                style={{ color: "#4e73df", marginLeft:'10px' }}
                              ></i></Link>


                              <i
                                className="bi bi-trash"
                                style={{ color: "#e74a3b", marginLeft:'20px'}}
                                onClick={(e)=>deleteCustomer(e)}
                              ></i></td>
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

export default Customer;
