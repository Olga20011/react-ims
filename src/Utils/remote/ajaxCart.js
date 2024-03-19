import apiCall from "./apiCall";

export default {
    async createCart(order_id, prd_id,unit_price, quantity)
    {
      
        let data={
            "order_id":order_id,
            "prd_id":prd_id,
            "unit_price":unit_price,
            "quantity":quantity
        }
        let response = await apiCall("cart/create", data)
        return response;

    },

    async listCart(data)
    {
        let response = await apiCall("cart/list", data)
        return response;

    },

    async getCartInfo(id)
    {

        let data={
            "id":id
        }
        let response = await apiCall("cart/info", data)
        return response;

    },
    async updateCustomer(id,order_id, prd_id,unit_price, quantity){

        let data={
            "id":id,
            "order_id":order_id,
            "prd_id":prd_id,
            "unit_price":unit_price,
            "quantity":quantity
           
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