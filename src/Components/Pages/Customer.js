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
  const [page , setPage] = useState(1);
  const [limit , setLimit] = useState(10)
  const [meta, setMeta] = useState("")

  const [state, setState] = useState({
    id:"",
    name: "",
    phone_number: "",
    email: "",
    location: "",
  });

    
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Location, setLocation]= useState("")

  const [showCustomer, setShowCustomer] = useState(false)

  const handleShow = () =>{
    setShowCustomer(true);
  }

  const handleCloseShowCustomer =() =>{
    setShowCustomer(false);
  }

  const [showEditCustomer, setShowEditCustomer] = useState(false)

  const handleEdit = () =>{
    setShowEditCustomer(true);
  }

  const handleCloseEdit = () =>{
    setShowEditCustomer(false);
  }

  const { name, phone_number, email, location } = state;

  const handleEditForm = (item) => {
    if (item) {
      setState({ id: item.id, name: item.name,
      phone_number: item.phone_number,
      email: item.email,
      location: item.location,}); // Set the content of the modal
      handleEdit()
    } else {
      // Handle the case where the item is null or undefined
      console.error("Invalid item for editing:", item);
      console.log(item);
    }
  };

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
    getCustomer();
    deleteCustomer();
  }, [page]);

  const fetchCustomers = async () => {
    const server_response = await ajaxCustomer.listCustomers(page, limit);
    if (server_response.status === "OK") {
      setMeta(server_response.details.meta.list_of_pages)
      setCustomer(server_response.details.list);
    }
  };

  const getCustomer = async () => {
    const server_response = await ajaxCustomer.getCustomerInfo(state.id);
    console.log(server_response.details);

    if (server_response.status === "OK") {

    setName(server_response.details.name);
    setPhoneNumber(server_response.details.phone_number);
    setEmail(server_response.details.email);
    setLocation(server_response.details.location);

    console.log(server_response)
      
    }
  }

  const updateCustomer = async (e) => {
    e.preventDefault();
    console.log(state.id)
    const server_response = await ajaxCustomer.updateCustomer(state.id, name, phone_number,email,location);
    console.log(server_response)
    if (server_response.status === "OK") {
      fetchCustomers();
      handleCloseEdit()
      
      console.log(server_response.details)
      
    } else {
      // Handle error
    }
  };
  const deleteCustomer = async (e) =>{
    const server_response = await ajaxCustomer.deleteCustomer(state.id);
    console.log(server_response)
    if(server_response.status==="OK"){
      console.log(server_response)
      fetchCustomers();

    }
    
  }

  const nextPage = () =>{
    setPage(page + 1)
  }

  const PreviousPage = () =>{
    setPage(page - 1)
  }

  const setPageNumber = (e, item) =>{
    setPage(item)

  }

  return (

    <>
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
                          <td>  
                            
                          <i className="bi bi-pen-fill" variant="primary" onClick={()=>handleEditForm(item)}  
                          style={{ color: "#4e73df", marginLeft:'10px' }}>
                          
                          </i>


                              <i
                                className="bi bi-trash"
                                style={{ color: "#e74a3b", marginLeft:'20px'}}
                                onClick={(e)=>deleteCustomer(e)}
                              ></i></td>
                        </tr>
                      ))}
                  </tbody>

                  <><div>
                  <button 
                  className=" d-sm-inline-block btn btn-sm btn-primary" 
                  style={{ marginTop:"20px"}}
                  onClick={PreviousPage}>
                  Prev
                  </button>

                  {Array.isArray(meta)&&
                  meta.map((item)=>
                  page===item ? (
                    <button style={{marginBottom:"-17px"}} className="btn btn-dark">
                      {item}
                    </button>
                  ):(
                    <button 
                    onClick={(e) =>setPageNumber(e)}
                    className ="btn btn-dark"
                    style={{marginBottom:"-20px"}}>
                      {item}
                    </button>
                  )
                
                )}
                </div> 

                <div style={{marginLeft:"78px"}}>
                  <button className=" d-sm-inline-block btn btn-sm btn-primary" 
                  style={{ marginTop:"-58px"}} 
                  onClick={ nextPage}>
                   Next
                  </button>
                </div>
                </>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>

    <CustomModal
    title="Edit Customer"
    show={showEditCustomer}
    onHide={handleCloseEdit}
    button=""
    iconClass={"bi bi-pen-fill"}
    
  >
    <form
      className="prd"
      method="POST"
    >
      <div className="form-group row">
        <label
          htmlFor="inputEmail3"
          className="col-sm-2 col-form-label ml-5"
        >
           Name
        </label>
        <div className="col-sm-6 ml-5">
          <input
            type="text"
            className="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            defaultValue={name}
            onChange={(e) =>
              setState({ ...state, name: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-group row">
        <label
          htmlFor="inputEmail3"
          className="col-sm-2 col-form-label ml-5"
        >
          Phone Number
        </label>
        <div className="col-sm-6 ml-5">
          <input
            type="text"
            className="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="phone_number"
            defaultValue={phone_number}
            onChange={(e) =>
              setState({ ...state, phone_number: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-group row">
        <label
          htmlFor="inputEmail3"
          className="col-sm-2 col-form-label ml-5 "
        >
          Email
        </label>
        <div className="col-sm-6 ml-5 ">
          <input
            type="text"
            className="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            defaultValue={email}
            onChange={(e) =>
              setState({ ...state, email: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-group row">
        <label
          htmlFor="inputEmail3"
          className="col-sm-2 col-form-label ml-5"
        >
          Location
        </label>
        <div className="col-sm-6 ml-5">
          <input
            type="text"
            className="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="location"
            defaultValue={location}
            onChange={(e) =>
              setState({ ...state,location: e.target.value })
            }
          />
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary w-50 ml-3"
          onClick={(e)=>updateCustomer(e)}
        >
          Update
        </button>
      </div>
    </form>
  </CustomModal>

  </>
  );
}

export default Customer;
