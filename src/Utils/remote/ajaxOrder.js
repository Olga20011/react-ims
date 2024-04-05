import apiCall from "./apiCall";

export default {
    async createOrder(order_id,customer_id, prd_id,unit_price, quantity,date, status)
    {
      
        let data={
            "order_id":order_id,
            "customer_id":customer_id,
            "prd_id":prd_id,
            "unit_price":unit_price,
            "quantity":quantity,
            "date":date,
            "status":status
            

        }
        let response = await apiCall("order/create", data)
        return response;

    },

    async listOrders(data)
    {
        let response = await apiCall("order/list", data)
        return response;

    },

    async getOrderInfo(id)
    {

        let data={
            "id":id

        }
        let response = await apiCall("order/info", data)
        return response;

    },
    async updateOrder(id,customer_id,date,status){

        let data={
            "id":id,
            "customer_id":customer_id,
            "date":date,
            "status":status
        }
        let response = await apiCall("order/update", data)
        return response;


    },
    async total(data){
        let response = await apiCall("order/orders", data)
        return response

        
    },

    async deleteOrder(id){

        let data={
            "id":id
        }

        let response = await apiCall("order/delete", data)
        return response

    }
}
