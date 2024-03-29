import React, { useEffect, useState } from "react";
import AppContainer from "../Structure/AppContainer";
import Content from "../Structure/Content";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ajax } from "jquery";
import ajaxProduct from "../../Utils/remote/ajaxProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const server_response = await ajaxProduct.listProducts();
    // console.log(server_response)
    if ((server_response.status = "Ok")) {
      setProducts(server_response.details);
    }
  };

  //  console.log(products)
  return (
    <AppContainer title="Products">
      <div className="nav-item dropdown no-arrow">

        <Link to='/create'><button
              className=" d-sm-inline-block btn btn-sm btn-primary"
              style={{ marginLeft: "1090px", marginTop: "-100px" }}>
              CreateProduct
            </button>
         </Link>
        
            
      </div>

      <div className="col-md-12">

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
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Description</th>
                    <th>Supplier</th>
                    <th>Buying Price</th>
                    <th>Selling Price</th>
                  </tr>
                </thead>

                <tbody>
                  {Array.isArray(products) &&
                    products.map((item) => (
                      <tr key={item.id}>
                        <td>{item.prd_name}</td>
                        <td>{item.prd_category}</td>
                        <td>{item.prd_description}</td>
                        <td>{item.supplier}</td>
                        <td>{item.buying_price}</td>
                        <td>{item.selling_price}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default Products;
