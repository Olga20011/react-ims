import React, { useContext, useEffect, useState } from 'react';
import ajaxUser from '../util/remote/ajaxUser';
import AuthContext from './AuthContext';
import ajaxProperty from '../util/remote/ajaxProperty';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export const UserProvider = (props)=> {
   const {user} = useContext(AuthContext)
   
   const [userList, setUserList] = useState(false);
   const [data, setData]= useState({page:"1"})
   const [secondPropertyList,setSecondPropertyList] = useState(false)
   const [page,setPage] = useState(1)
   const [meta,setMeta] = useState("")

   useEffect(()=>{
         getUserList();
   }, [page])

  

   const getUserList =async()=>{

      const server_response = await ajaxUser.fetchUserList(page);
      
console.log(server_response)
      if(server_response.status==="OK"){
         //store results
         setMeta(server_response.details.meta.list_of_pages)
         setUserList(server_response.details.list);
      }else{
         //communicate error
	

         setUserList("404");
      }
   }
    
    return (
           <UserContext.Provider value={
               {
                  userList,
                  setData,
                  getUserList,
                  secondPropertyList,
                  meta,
                  setMeta,
                  page,
                  setPage
               }
               }>
               {props.children}
           </UserContext.Provider>
        );
    
}

export default UserContext;