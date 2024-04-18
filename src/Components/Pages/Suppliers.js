import React, { useEffect, useState } from "react";
import AppContainer from "../Structure/AppContainer";
import ajaxSupplier from "../../Utils/remote/ajaxSupplier";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link, useNavigate, useParams } from "react-router-dom";
// import {openModel} from "./EditSupplier";
import CustomModal from "../Common/Modals";
import EditSupplier from "./EditSupplier";
import { Button } from "react-bootstrap";

function Suppliers() {
  const [supplier, setSupplier] = useState([]);
  const navigate = useNavigate();

  
  const [SupName, setSupName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Location, setLocation]= useState("")
  const [page , setPage] = useState(1);
  const [meta , setMeta] = useState("");
  const [limit , setLimit] = useState(10);


  const [state, setState] = useState({
    id:"",
    supplier_name: "",
    phone_number: "",
    email: "",
    location: ""
    

  });

  useEffect(() => {
    fetchSuppliers();
    getSupplier();
  }, [page]);

  const { supplier_name, phone_number, email, location } = state;

  const CreateSupplier = async (e) => {
    e.preventDefault();
    const server_response = await ajaxSupplier.createSupplier(
      supplier_name,
      phone_number,
      email,
      location
    );
    console.log(server_response);
    if(server_response.status=="OK"){
      setState({
        supplier_name:"",
        phone_number:"",
        email:"",
        location:""

      })
    }
    fetchSuppliers();
    handleCloseCreateModal();
  };

  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal =() =>{
    setShowCreateModal(false);
  }

  const [show,setShow] = useState(false)

  const handleCloseModal = () => {
    setShow(false);
  };

  
  const handleModalShow = () => {
    setShow(true);
  };


  const handleEdit = (item) => {
    if (item) {
      setState({ id: item.id, supplier_name: item.supplier_name,
      phone_number: item.phone_number,
      email: item.email,
      location: item.location,}); // Set the content of the modal
      handleModalShow()
    } else {
      // Handle the case where the item is null or undefined
      console.error("Invalid item for editing:", item);
      console.log(item);
    }
  };


  const getSupplier = async () => {

    const server_response = await ajaxSupplier.getSupplierInfo(state.id);
    console.log(server_response.details);

    if (server_response.status === "OK") {

    setSupName(server_response.details.supplier_name);
    setPhoneNumber(server_response.details.phone_number);
    setEmail(server_response.details.email);
    setLocation(server_response.details.location);
    console.log(server_response)
      
    }
};
  const updateSupplier = async (e) => {
    e.preventDefault();
    console.log(state.id)
    const server_response = await ajaxSupplier.updateSupplier(state.id, supplier_name, phone_number,email,location);
    console.log(server_response)
    if (server_response.status === "OK") {
      fetchSuppliers();
      handleCloseModal()
      
      console.log(server_response.details)
      
    } else {
      // Handle error
    }
  };

  const fetchSuppliers = async () => {
    const server_response = await ajaxSupplier.listSupplier(page, limit);
    if (server_response.status === "OK") {
      setMeta(server_response.details.meta.list_of_pages)
      setSupplier(server_response.details.list);
      
    }
  };

  const nextPage  = () =>{
    setPage(page + 1)
  }

  const PrevPage = () =>{
    setPage(page - 1)
  }

  const setPageNumber = (e, item) =>{
    setPage(item);

  }

  return (
    <>

    <AppContainer title="Suppliers">


    {/* <button classname=" d-sm-inline-block btn btn-sm btn-primary" onClick={() => setShow(true)} style={{ marginleft:"1090px",margintop:"-100px"}}>
              CreateSupplier
            </button> */}
    
      <div className="nav-item dropdown no-arrow">
        <CustomModal

          title="Create Supplier"
          show={showCreateModal}
          onHide={handleCloseCreateModal}
          button="Create Supplier"
          iconClass={"btn btn-primary"}
          variant={"primary"}
          position="bottom center"
        >

          <div>
            <form
              className="supplier"
              onSubmit={(e) => CreateSupplier(e) }
              method="POST"
            >
              <input
                type="text"
                name="supplier_name"
                placeholder="Supplier Name"
                value={supplier_name}
                onChange={(e) =>
                  setState({ ...state, supplier_name: e.target.value })
                }
              />

              <br />

              <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={phone_number}
                onChange={(e) =>
                  setState({ ...state, phone_number: e.target.value })
                }
              />

              <br />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />

              <br />

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
                <button type="submit" >
                  Create supplier
                </button>
              </div>
            </form>
          </div>
        </CustomModal>
      </div>

      <div className="col-md-12">

      <Button variant="primary" onClick={handleShowCreateModal} style={{marginLeft: "1090px"}}>
        Create Supplier
      </Button>

      
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
                      <th>Supplier Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Location</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Array.isArray(supplier) &&
                      supplier.map((item) => (
                        <tr key={item.id}>
                          <td>{item.supplier_name}</td>
                          <td>{item.phone_number}</td>
                          <td>{item.email}</td>
                          <td>{item.location}</td>
                          <td>

                          <i className="bi bi-pen-fill" variant="primary" onClick={()=>handleEdit(item)}  
                          style={{ color: "#4e73df", marginLeft:'10px' }}>
                          
                          </i>
                           
                            {/* <Link to={`/editSupplier/${item.id}`} onClick={() => handleEdit(item)}><i
                                className="bi bi-pen-fill" 
                                style={{ color: "#4e73df", marginLeft:'10px' }}
                              ></i></Link> */}

                            <Link to={`/deleteSupplier/${item.id}`}>
                              <i
                                className="bi bi-trash"
                                style={{ color: "#e74a3b", marginLeft: "20px" }}
                              ></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>

                  <div>
                  <button className=" d-sm-inline-block btn btn-sm btn-primary"
                   style={{ marginTop:"20px"}} 
                   onClick={PrevPage}>
                  Prev
                  </button>

                  {Array.isArray(meta)&&
                  meta.map((item)=>
                  page===item ? (
                    <button style={{marginBottom:"-20px"}} 
                    className="btn btn-dark">
                      {item}
                    </button>
                  ):(
                    <button 
                    onClick={(e)=>setPageNumber(e, item)}
                    className="btn btn-dark"
                    style={{marginBottom:"-20px"}}>
                    
                      {item}

                    </button>
                  )
                
                )}
                </div> 

                <div style={{}}>
                  <button className=" d-sm-inline-block btn btn-sm btn-primary" 
                  style={{ marginLeft:"110px", marginTop:"-56px"}}
                  onClick={nextPage}>
                   Next
                  </button>
                </div>
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>

    
                            <CustomModal
                              title="Edit Supplier"
                              show={show}
                              onHide={handleCloseModal}
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
                                    Supplier Name
                                  </label>
                                  <div className="col-sm-6 ml-5">
                                    <input
                                      type="text"
                                      className="form-control mb-3"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                      name="supplier_name"
                                      defaultValue={supplier_name}
                                      onChange={(e) =>
                                        setState({ ...state, supplier_name: e.target.value })
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
                                    onClick={(e)=>updateSupplier(e)}
                                  >
                                    Update
                                  </button>
                                </div>
                              </form>
                            </CustomModal>
    </>
  );
}

export default Suppliers;
