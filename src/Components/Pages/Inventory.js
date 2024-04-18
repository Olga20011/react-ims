import React, { useState, useEffect } from 'react';
import AppContainer from '../Structure/AppContainer'
import ajaxInventory from '../../Utils/remote/ajaxInventory';



function Inventory() {

  const [inventory, setInventory]=useState([])
  const [page, setPage] = useState (1);
  const [limit, setLimit] = useState(10);
  const [meta, setMeta] = useState("");
  const [Loading , setLoading]= useState(false);
  const [TotalePages, setTotalPages] = useState(0)
  const [ CurrentPageNumber, setCurrentPageNumber] = useState(0)

  
  useEffect(() => {
    fetchInv()
  
  }, [page])

  const fetchInv = async()=>{
    const server_response= await ajaxInventory.listInventory(page, limit)
    if(server_response.status==="OK")
    setMeta(server_response.details.meta.list_of_pages)
    setInventory(server_response.details.list)
    setTotalPages(server_response.details.meta.total_pages)
    setCurrentPageNumber(server_response.details.meta.current_page)
    
  }

  const nextPage = () =>{
    setPage(page + 1)
  }

  const prevPage = () =>{
    setPage(page - 1)
  }

  const setPageNumber = (e, item) =>{
    setPage(item)
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
           <th>Product Name</th>
           <th>Qty In</th>
           <th>Qty Out</th>
           <th>Minimum_stock_value</th>
         </tr>
       </thead>
     

     <tbody >
      
       {Array.isArray(inventory)&&inventory.map((item) =>(
         <tr key={item.id}>
           <td>{item.prd_id}</td>
           <td>{item.prd_name}</td>
           <td>{item.qty_in}</td>
           <td>{item.qty_out}</td>
           <td>{item.minimum_stock_value}</td>

         </tr>
         
       ))}
       
     </tbody>

     <div>
                  <button className=" d-sm-inline-block btn btn-sm btn-primary" 
                  style={{marginTop:"20px"}}
                  onClick={prevPage}>
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
                    <button onClick={(e)=> setPageNumber(e,item)}
                    className="btn btn-dark"
                    style={{marginBottom:"-20px"}}>
                      {item}
                    </button>
                  )
                
                )}
                </div> 

              
                <div >
                  <button className=" d-sm-inline-block btn btn-sm btn-primary" 
                  style={{marginLeft:"90px", marginTop:"-58px"}}
                  onClick={nextPage }>
                   Next
                  </button>
                </div>
                
               

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