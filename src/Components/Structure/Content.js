import React, { useEffect, useState } from "react";
import ajaxProduct from "../../Utils/remote/ajaxProduct";
import ajaxCustomer from "../../Utils/remote/ajaxCustomer";
import ajaxSupplier from "../../Utils/remote/ajaxSupplier";
import { Link } from "react-router-dom";

function Content() {
  const [count, setCount] = useState(false);
  const [prd, setCountPrd] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [supplier, setSupplier] = useState(false);
  const [product, setProduct] = useState([]);

  // const total_order = async () => {
  //   const server_response = await ajaxOrder.total();
  //   if (server_response.status === "OK") {
  //     console.log(server_response);
  //     setCount(server_response.details);
  //   }
  // };

  const products = async () => {
    const server_response = await ajaxProduct.total_products();
    if (server_response.status === "OK") {
      console.log(server_response);
      setCountPrd(server_response.details);
    }
  };

  const customers = async () => {
    const server_response = await ajaxCustomer.total_customers();
    console.log("object");
    if (server_response.status === "OK") {
      console.log(server_response);
      setCustomer(server_response.details);
    }
  };

  const suppliers = async () => {
    const server_response = await ajaxSupplier.all_suppliers();
    console.log("object");
    if (server_response.status === "OK") {
      console.log(server_response);
      setSupplier(server_response.details);
    }
  };

  const newestProducts = async () =>{
    const server_response= await ajaxProduct.newProducts();
    if(server_response.status==="OK"){
      console.log(server_response.details);
      setProduct(server_response.details)
    }
  }

  useEffect(() => {
    // total_order();
    products();
    customers();
    suppliers();
    newestProducts();
  }, []);

  return (
    <div id="content">
      {/* Begin Page Content */}
      <div className="container-fluid">
        <div className="row">
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <Link
                      to="/orders"
                      className="Link"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Orders
                      </div>
                    </Link>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {count}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-fw fa-table fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings (Annual) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <Link to="/products" style={{ textDecoration: "none" }}>
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Products
                      </div>
                    </Link>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {prd}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fa-brands fa-product-hunt fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <Link to="/customers" style={{ textDecoration: "none" }}>
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Customers
                      </div>
                    </Link>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {customer}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i
                      className="fa fa-users fa-2x text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Customers</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{customer}</div>
                                        </div>
                                        <div className="col-auto">
                                        <i className="fa fa-users fa-2x text-gray-300" aria-hidden="true" />
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <Link to="/suppliers" style={{ textDecoration: "none" }}>
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Suppliers
                      </div>
                    </Link>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {supplier}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i
                      className="fa fa-truck fa-2x text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6"></div>

        </div>
      </div>
      {/* /.container-fluid */}

      <div className="col-xl-8 col-lg-7">
        {/* Area Chart */}

        <div className="row" style={{display:"flex"}}>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Newest Products
              </h6>
              </div>
        <div className="col-md-12">
          <div className="card shadow mb-4">
            <div className="card-body" style={{height:"50px"}}>
              <div className="row">
                {product.map((product) => (
                  <div key={product.id} className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body" style={{}}>
                        <h3 className="card-title">{product.prd_name}</h3>
                        <p className="card-text"><b>Category</b>: {product.prd_category}</p>
                        <p className="card-text"><b>Description</b>: {product.prd_description}</p>
                        <p className="card-text"><b>Supplier</b>: {product.supplier}</p>
                        <p className="card-text"><b>buying_price</b>: {product.buying_price}</p>
                        <p className="card-text"><b>selling_price</b>: {product.selling_price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
              </div>
              </div>


            <div >
            <div className="card-body" style={{ marginLeft:"40px"}}>
              <div className="chart-area">
                <canvas id="myAreaChart" />
              </div>
            </div>
          </div>
        </div> 

       
       

      </div>

      </div>

    </div>
  );
}

export default Content;
