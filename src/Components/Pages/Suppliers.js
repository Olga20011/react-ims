import React, { useEffect, useState } from "react";
import AppContainer from "../Structure/AppContainer";
import ajaxSupplier from "../../Utils/remote/ajaxSupplier";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Suppliers() {
  const [supplier, setSupplier] = useState([]);

  const [state, setState] = useState({
    supplier_name: "",
    phone_number: "",
    email: "",
    location: "",
  });

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
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    const server_response = await ajaxSupplier.listSupplier();
    if (server_response.status === "OK") {
      setSupplier(server_response.details);
    }
  };

  return (
    <AppContainer title="Suppliers">
      <div className="nav-item dropdown no-arrow">
        <Popup
          trigger={
            <button
              className=" d-sm-inline-block btn btn-sm btn-primary"
              style={{ marginLeft: "1090px", marginTop: "-100px" }}
            >
              CreateSupplier
            </button>
          }
          position="bottom center"
        >
          <div>
            <form
              className="supplier"
              onSubmit={(e) => CreateSupplier(e)}
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
              <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={phone_number}
                onChange={(e) =>
                  setState({ ...state, phone_number: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
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
                <button type="submit">Create supplier</button>
              </div>
            </form>
          </div>
        </Popup>
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
                      <th>Supplier Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Location</th>
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

export default Suppliers;
