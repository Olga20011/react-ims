import React, { useEffect, useState } from 'react';
import ajaxPermission from '../util/remote/ajaxPermission';

const PermissionContext = React.createContext();

export const PermissionConsumer = PermissionContext.Consumer;

export const PermissionProvider = (props)=> {

   
   const [permissionList, setPermissionList] = useState(false);
   const [data, setData]= useState({page:"1"})
   const [page,setPage] = useState(1)
   const [meta,setMeta] = useState("")
   useEffect(()=>{
         getPermissionList();
   }, [page])
  
   const getPermissionList =async()=>{

      const server_response = await ajaxPermission.fetchPermissionList(page);
console.log(server_response)
      if(server_response.status==="OK"){
         //store results
         setMeta(server_response.details.meta)
         setPermissionList(server_response.details.list);
      }else{
         //communicate error
         setPermissionList("404");
      }
   }
    
    return (
           <PermissionContext.Provider value={
               {
                  
                  permissionList,
                  setData,
                  getPermissionList,
                  setMeta,
                  setPage,
                  page,
                  meta
               }
               }>
               {props.children}
           </PermissionContext.Provider>
        );
    
}

export default PermissionContext;