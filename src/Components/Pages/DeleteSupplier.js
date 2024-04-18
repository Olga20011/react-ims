import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ajaxSupplier from "../../Utils/remote/ajaxSupplier";

function DeleteSupplier() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    deleteSupplier();
  }, []);

  const deleteSupplier = async () => {
    const server_response = await ajaxSupplier.deleteSupplier(id);
    if (server_response.status === "OK") {
      console.log(server_response);
      navigate("/suppliers");
    }
  };
  return <div></div>;
}
export default DeleteSupplier;
