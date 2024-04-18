import apiCall from "./apiCall";

export default {
    async createCart(cart_id,customer_id, prd_id,unit_price,quantity,date)
    {
      
        let data={
            "cart_id":cart_id,
            "customer_id":customer_id,
            "prd_id":prd_id,
            "unit_price":unit_price,
            "quantity":quantity,
            "date":date

        }
        let response = await apiCall("cart/create", data)
        return response;

    },

    async listCarts(data)
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

    async cart_details(cart_id){
        let data={
            "cart_id":cart_id
        }

        let response = await apiCall("cart/details", data)
        return response;

    },
    async updateCart(id,customer_id,date){

        let data={
            "id":id,
            "customer_id":customer_id,
            "date":date,
            
        }
        let response = await apiCall("cart/update", data)
        return response;


    },
    async total(data){
        let response = await apiCall("cart/orders", data)
        return response

        
    },

    async deleteCart(id){

        let data={
            "id":id
        }

        let response = await apiCall("cart/delete", data)
        return response

    }
}
