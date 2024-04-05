import { useNavigate, useParams } from "react-router-dom";
import ajaxProduct from "../../Utils/remote/ajaxProduct";
import React, { useEffect, useState } from "react";
import AppContainer from "../Structure/AppContainer";
import { ajaxSetup } from "jquery";
import ajaxSupplier from "../../Utils/remote/ajaxSupplier";

function EditProduct() {
  const navigate = useNavigate();
  const {id} = useParams();


  const [state, setState] = useState({
    prd_name: "",
    prd_category: "",
    prd_description: "",
    supplier: "",
    buying_price: "",
    selling_price: ""
    
    
  });

  
  useEffect(() => {
    getProduct();
    
  }, []);


  const [PrdName, setPrdName] = useState("");
  const [PrdCategory, setPrdCategory] = useState("");
  const [PrdDescription, setPrdDescription] = useState("");
  const [Supplier, setSupplier] = useState("");
  const [BuyingPrice, setBuyingPrice] = useState("");
  const [SellingPrice, setSellingPrice] = useState("");


  

  const getProduct = async () => {
    var data = {
        id:id
    }
    const server_response = await ajaxProduct.getProductInfo(data);
    console.log(server_response.details);

    if (server_response.status === "OK") {
      setPrdName(server_response.details.prd_name);
      setPrdCategory(server_response.details.prd_category);
      setPrdDescription(server_response.details.prd_description);
      setSupplier(server_response.details.supplier);
      setBuyingPrice(server_response.details.buying_price);
      setSellingPrice(server_response.details.selling_price);
      
      
    }
};


    const updatePrd = async (e) => {
        e.preventDefault();
        const server_response = await ajaxProduct.updateProduct(id,PrdName, PrdCategory, PrdDescription, Supplier,BuyingPrice,SellingPrice);
        console.log(server_response)
        if (server_response.status === "OK") {
          setState({
            id:id,
            prd_name: PrdName,
            prd_category: PrdCategory,
            prd_description: PrdDescription,
            supplier: Supplier,
            buying_price: BuyingPrice,
            selling_price: SellingPrice
          });
          console.log(server_response.details)
          navigate("/products");
        } else {
          // Handle error
        }
      };
      
  return (
    <AppContainer title="Edit Product">
      <div className="col-md-12">
        <div className="card w-75 ">
          <div className="card-body shadow-lg rounded-lg">
            <form className="prd" onSubmit={(e)=>updatePrd(e)} method="POST">
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Product Name
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="prd_name"
                    value={PrdName}
                    onChange={(e) => setPrdName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Product Category
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="prd_category"
                    value={PrdCategory}
                    onChange={(e) => setPrdCategory(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5 "
                >
                  Product Description
                </label>
                <div className="col-sm-6 ml-5 ">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="prd_description"
                    value={PrdDescription}
                    onChange={(e) => setPrdDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Supplier
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="supplier"
                    value={Supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Buying Price
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="buying_price"
                    value={BuyingPrice}
                    onChange={(e) => setBuyingPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Selling Price
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="selling_price"
                    value={SellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                  />
                </div>
              </div>
              {/* 
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Qty In
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="number"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="qty_in"
                    value={QtyIn}
                    onChange={(e) => setQtyIn( e.target.value )}
                  />
                </div>
              </div> */}

              {/* <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Qty Out
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="number"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="qty_out"
                    value={QtyOut}
                    onChange={(e) =>
                    setQtyOut(e.target.value )
                }
                  />
                </div>
              </div> */}

              {/* <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label ml-5"
                >
                  Reorder Point
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="reorder_point"
                    value={ReorderPoint}
                    onChange={(e) =>
                      setReorderPoint(e.target.value)
                    }
                  />
                </div>
              </div> */}

              <div className="text-center">
                <button type="submit" className="btn btn-primary w-50 ml-3">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
export default EditProduct;
