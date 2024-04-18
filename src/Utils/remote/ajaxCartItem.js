import apiCall from "./apiCall";

export default {
    async createCartItem(cart_id, prd_id,unit_price, quantity)
    {
      
        let data={
            "cart_id":cart_id,
            "prd_id":prd_id,
            "unit_price":unit_price,
            "quantity":quantity
        }
        let response = await apiCall("cartItem/create", data)
        return response;

    },

    async listCartItem(data)
    {
        let response = await apiCall("cartItem/list", data)
        return response;

    },

    async getCartItemInfo(id)
    {

        let data={
            "id":id
        }
        let response = await apiCall("cartItem/info", data)
        return response;

    },
    async cartItemDetails(id){
        let data={
            "id":id
        }

        let response = await apiCall("cartItem/details", data)
        return response;


    },
    async updateCartItem(id,cart_id, prd_id,unit_price, quantity){

        let data={
            "id":id,
            "cart_id":cart_id,
            "prd_id":prd_id,
            "unit_price":unit_price,
            "quantity":quantity
           
        }
        let response = await apiCall("cartItem/update", data)
        return response;


    },

    async deleteCartItem(id){

        let data={
            "id":id
            
        }

        let response = await apiCall("cartItem/delete", data)
        return response

    }
}