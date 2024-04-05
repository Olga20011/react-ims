
import AppContainer from "../Structure/AppContainer";
import React ,{  useState , useEffect} from "react";
import ajaxProduct from "../../Utils/remote/ajaxProduct";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ajaxSupplier from "../../Utils/remote/ajaxSupplier";
import ajaxCategory from "../../Utils/remote/ajaxCategory";


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
        minimum_stock_value: "",
      });

      const [suppliers, setSupplier] = useState('')
      const [category, setCatetory]= useState('')

      const fetchSuppliers = async () =>{
         const server_response = await ajaxSupplier.listSupplier()
         if (server_response.status==="OK"){
          setSupplier(server_response.details)
         }
      }

      const fetchCategories =  async () =>{
        const server_response = await ajaxCategory.listCategory()
        if(server_response.status==="OK"){
          setCatetory(server_response.details)
        }
      }

      useEffect(() => {
        fetchSuppliers()
        fetchCategories()
      }, [])

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
          minimum_stock_value
        );
        console.log(server_response);

        if (server_response.status==="OK"){
          setState({
            prd_name: "",
            prd_category: "",
            prd_description: "",
            supplier: "",
            buying_price: "",
            selling_price: "",
            qty_in: "",
            qty_out: "",
            minimum_stock_value: ""
          });
          // toast.success(server_response.data.message)
          
        }else{
          console.log("Error")
        }
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
        minimum_stock_value,
      } = state;


      const handleChange = (e) =>{
        const {name, value} = e.target;
        setState({...state, [name]: value});
      }

  return (
    <AppContainer title="Create New Product">
      <div className="col-md-12">
        <div className="card w-75 ">
          <div className="card-body shadow-lg rounded-lg">
            <form
            className="prd"
            onSubmit={(e) => CreateProducts(e) }
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
                  <select
                   className="form-control mb-3"
                   name="category"
                   value={state.category}
                   onChange={handleChange}
                  >

                    <option value="Select Category"></option>
                    {Array.isArray(category) && category.map((category)=>
                    <option key={category.id} value={category.id}>
                      {category.category_name}

                    </option>
                    )}


                  </select>
                  
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
                  <select
                  className="form-control mb-3"
                  name="supplier"
                  value={state.supplier}
                  onChange={handleChange}
                  >
                    <option value="Select Supplier"></option>
                    {Array.isArray(suppliers) && suppliers.map((supplier)=>
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.supplier_name}

                    </option>
                    )}

                  </select>
                 
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
                  Minimum stock value
                </label>
                <div className="col-sm-6 ml-5">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="minimum_stock_value"
                    value={minimum_stock_value}
                    onChange={(e) =>
                      setState({ ...state, minimum_stock_value: e.target.value })
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
      <ToastContainer />
    </AppContainer>
  );
}

export default CreateProduct;
