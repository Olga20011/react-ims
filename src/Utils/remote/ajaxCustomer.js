import apiCall from "./apiCall";


export default {
    async createCustomer(name, phone_number, email, location)
    {
      
        let data={
            "name":name,
            "phone_number":phone_number,
            "email":email,
            "location":location
        }
        let response = await apiCall("customer/create", data)
        return response;

    },

    async listCustomers(data)
    {
        let response = await apiCall("customer/list", data)
        return response;

    },

    async getCustomerInfo(id)
    {

        let data={
            "id":id
        }
        let response = await apiCall("customer/info", data)
        return response; 
    },

    async total_customers(data){
        let response= await apiCall("customer/total" ,data)
        return response;


    },
    async updateCustomer(id,name,phone_number, email, location){

        let data={
            "id":id,
            "name":name,
            "phone_number":phone_number,
            "email":email,
            "location":location
        }
        let response = await apiCall("customer/update", data)
        return response;


    },

    async deleteCustomer(id){

        let data={
            "id":id
        }

        let response = await apiCall("customer/delete", data)
        return response

    }
}