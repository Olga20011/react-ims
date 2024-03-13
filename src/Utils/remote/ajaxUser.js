import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   
    async loginUser(username, password)
    {

        let data={
            "username":username,
            "password":password
        }
        let response = await apiCall("login", data)
        return response;

    },
    //Creating
    async createUser(username,password, first_name,last_name,roleID,userID,email,age,phone_number,image)
    {
      
        let data={
            "username":username,
            "password":password,
            "first_name":first_name,
            "last_name":last_name,
            "role_id":roleID,
            "landlord_id":userID,
            "email":email,
            "age":age,
            "phone_number":phone_number,
            "photo":image

        }
        let response = await apiCall("user/create", data)
        return response;

    },

    async listUsers(data)
    {
        let response = await apiCall("product/list", data)
        return response;

    },
 

}