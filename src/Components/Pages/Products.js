import React, { useEffect, useState } from "react";
import AppContainer from "../Structure/AppContainer";
import Content from "../Structure/Content";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ajax } from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import ajaxProduct from "../../Utils/remote/ajaxProduct";
import EditProduct from "./EditProduct";
import { Prev } from "react-bootstrap/esm/PageItem";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)

  const [meta , setMeta] = useState("");
  const [limit, setLimit] =useState(10)
  const [TotalPages, setTotalPages] = useState(0)
  const [CurrentPageNumber, setCurrentPageNumber] = useState(0)



  const {id} = useParams();

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

  useEffect(() => {
    fetchData();
   
  }, [page]);

  const fetchData = async () => {
    const server_response = await ajaxProduct.listProducts(page, limit);
    // console.log(server_response)
    if ((server_response.status = "Ok")) {
      setMeta(server_response.details.meta.list_of_pages)
      setProducts(server_response.details.list);
      setTotalPages(server_response.details.meta.total_pages)
      setCurrentPageNumber(server_response.details.meta.current_page)
     
    }
  };

  const nextPage = () =>{
    setPage(page + 1)
  }

  const PreviousPage = () =>{
    // if(page === 1){
    // }else{
      setPage(page- 1)
    // }
  }

  const setPageNumber = (e, item) =>{
    setPage(item);
  }

  
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
                    <th>Actions</th>
                  
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
                        <td>

                                <Link to={`/edit/${item.id}`}><i
                                className="bi bi-pen-fill" 
                                style={{ color: "#4e73df", marginLeft:'10px' }}
                              ></i></Link>


                              <Link to={`/delete/${item.id}`}><i
                                className="bi bi-trash"
                                style={{ color: "#e74a3b", marginLeft:'20px'}}
                              ></i></Link>
                            
                        </td>
                      </tr>
                    ))}
                </tbody>

              <>  <div>
                  <button 
                  className=" d-sm-inline-block btn btn-sm btn-primary"
                  style={{  marginTop: "20px" }}
                  onClick={PreviousPage}>
                  Prev
                  </button>


                  {Array.isArray(meta)&&
                  meta.map((item)=>
                  page===item ? (
                    <button
                    style={{marginBottom:"-20px"}}
                    className="btn btn-dark">
                      {item}
                    </button>
                  ):(
                    <button
                    onClick={(e) =>setPageNumber(e, item)}
                    className="btn btn-dark"
                    style={{marginBottom:"-20px"}}>
                      {item}
                    </button>
                  )
                

                )}

               
             
                </div>

                <div style={{display:"flex"}}>
                  <button 
                  className=" d-sm-inline-block btn btn-sm btn-primary"
                  style={{ marginLeft:"110px", marginTop:"-31px"}}
                  onClick={nextPage}>
                   Next
                  </button>
                </div>

                <div 
                style={{marginLeft:"300px", marginTop:"-30px"}}
                >
                 
                  <b><p>{CurrentPageNumber} / {TotalPages}</p></b>
                  
                </div>
                </>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default Products;
