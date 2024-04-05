import React, { useState, useEffect } from 'react';
import AppContainer from '../Structure/AppContainer'
import ajaxInventory from '../../Utils/remote/ajaxInventory';



function Inventory() {

  const [inventory, setInventory]=useState([])

  
  useEffect(() => {
    fetchInv()
  
  }, [])

  const fetchInv = async()=>{
    const server_response= await ajaxInventory.listInventory()
    if(server_response.status==="OK")
    setInventory(server_response.details)
    
  }



  return (
    <AppContainer title="Inventory" >
  
 <div className='col-md-12'>

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
           <th>Product ID</th>
           <th>Qty In</th>
           <th>Qty Out</th>
           <th>Minimum_stock_value</th>
         </tr>
       </thead>
     

     <tbody >
      
       {Array.isArray(inventory)&&inventory.map((item) =>(
         <tr key={item.id}>
           <td>{item.prd_id}</td>
           <td>{item.qty_in}</td>
           <td>{item.qty_out}</td>
           <td>{item.minimum_stock_value}</td>

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
  )
}

export default Inventory