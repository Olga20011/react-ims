
import AppContainer from "../Structure/AppContainer";
import React ,{  useState } from "react";
import ajaxProduct from "../../Utils/remote/ajaxProduct";


function CreateProduct() {

    const [state, setState] = useState({
        prd_name: "",
        prd_category: "",
        prd_description: "",
        supplier: "",
        buying_price: "",
        selling_price: "",
        qty_in: "",
        qty_out: "",
        reorder_point: "",
      });


      const CreateProducts = async (e) => {
        e.preventDefault();
    
        const server_response = await ajaxProduct.createProduct(
          prd_name,
          prd_category,
          prd_description,
          supplier,
          buying_price,
          selling_price,
          qty_in,
          qty_out,
          reorder_point
        );
        console.log(server_response);
      };

      const {
        prd_name,
        prd_category,
        prd_description,
        supplier,
        buying_price,
        selling_price,
        qty_in,
        qty_out,
        reorder_point,
      } = state;


  return (
    <AppContainer title="Create New Product">
      <div className="col-md-12">
        <div className="card w-75  mt-5">
          <div className="card-body shadow-lg rounded-lg">
            <form
            className="prd"
            onSubmit={(e) => CreateProducts(e)}
            method="POST">
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
                    value={prd_name}
                    onChange={(e) =>
                    setState({ ...state, prd_name: e.target.value })
                }
                    
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
                    value={prd_category}
                    onChange={(e) =>
                  setState({ ...state, prd_category: e.target.value })
                }
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
                    value={prd_description}
                    onChange={(e) =>
                      setState({ ...state, prd_description: e.target.value })
                    }
                    
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
                    value={supplier}
                    onChange={(e) =>
                      setState({ ...state, supplier: e.target.value })
                    }
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
                    value={buying_price}
                    onChange={(e) =>
                      setState({ ...state, buying_price: e.target.value })
                    }
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
                    value={selling_price}
                    onChange={(e) =>
                    setState({ ...state, selling_price: e.target.value })
                }
                  />
                </div>
              </div>

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
                    value={qty_in}
                    onChange={(e) => setState({ ...state, qty_in: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group row">
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
                    value={qty_out}
                    onChange={(e) =>
                    setState({ ...state, qty_out: e.target.value })
                }
                  />
                </div>
              </div>

              <div className="form-group row">
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
                    value={reorder_point}
                    onChange={(e) =>
                      setState({ ...state, reorder_point: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="text-center">
                    <button type="submit" className="btn btn-primary w-50 ml-3">Create Product</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default CreateProduct;
