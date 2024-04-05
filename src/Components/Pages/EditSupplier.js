import { useNavigate, useParams } from "react-router-dom";
import ajaxProduct from "../../Utils/remote/ajaxProduct";
import React, { useEffect, useState } from "react";
import AppContainer from "../Structure/AppContainer";
import ajaxSupplier from "../../Utils/remote/ajaxSupplier";
import Button from 'react-bootstrap/Button';
import CustomModal from "../Common/Modals";


function EditSupplier() { 
  const navigate = useNavigate();
  const {id} = useParams();

  const [supplier, setSupplier] = useState([]);

  const [SupName, setSupName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Location, setLocation]= useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    supplier_name:"",
    phone_number:"",
    email:"",
    location:"",
  });

  useEffect(() => {
    // getSupplier(); 
    
  }, []);


  const {supplier_name, phone_number, email, location}= state

//   const getSupplier = async () => {
//     var data = {
//         id:id
//     }
//     const server_response = await ajaxSupplier.getSupplierInfo(data);
//     console.log(server_response.details);

//     if (server_response.status === "OK") {

//     setSupName(server_response.details.supplier_name);
//     setPhoneNumber(server_response.details.phone_number);
//     setEmail(server_response.details.email);
//     setLocation(server_response.details.location);
      
//     }
// };

    // const updateSupplier = async (e) => {
    //     e.preventDefault();
    //     const server_response = await ajaxSupplier.updateSupplier(id, supplier_name, phone_number,email,location);
    //     console.log(server_response)
    //     if (server_response.status === "OK") {
    //       setState({
    //         id:id,
    //         supplier_name:SupName,
    //         phone_number:PhoneNumber,
    //         email:Email,
    //         Location
           
    //       });
    //       console.log(server_response.details)
    //       navigate("/product");
    //     } else {
    //       // Handle error
    //     }
    //   };

      console.log(CustomModal)
      
  return (
    <AppContainer title="Edit Supplier">

      <CustomModal
      title="Edit Supplier" show={show} onHide={handleClose} button="Edit Supplier"
      >
            <form className="prd" method="POST">
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
                    value={SupName}
                    onChange={(e)=>setState(e.target.value)}
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
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={Location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

             
             
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-50 ml-3">
                  Update
                </button>
                
              </div>
            </form>
            

      </CustomModal>
    </AppContainer>
  );
}

export default EditSupplier;

