import apiCall from "./apiCall";

export default {
    async createInventory(prd_id, qty_in, qty_out, reorder_point)
    {
      
        let data={
            "prd_id":prd_id,
            "qty_in":qty_in,
            "qty_out":qty_out,
            "reorder_point":reorder_point

        }
        let response = await apiCall("inv/create", data)
        return response;

    },

    async listInventory(data)
    {
        let response = await apiCall("inv/list", data)
        return response;

    },

    async getInventoryInfo(id)
    {

        let data={
            "id":id

        }
        let response = await apiCall("inv/info", data)
        return response;


    },

    async reorderStock(reorder_point, qty_in)
    {

        let data={
            "reorder_point":reorder_point,
            "qty_in":qty_in

        }
        let response = await apiCall("inv/order", data)
        return response;
        

    },

    async totalQty(data)
    {
        let response = await apiCall("inv/total", data)
        return response;
        

    },
    async updateInventory(id,prd_id, qty_in, qty_out, reorder_point){

        let data={
            "id":id,
            "prd_id":prd_id,
            "qty_in":qty_in,
            "qty_out":qty_out,
            "reorder_point":reorder_point
        }
        let response = await apiCall("inv/update", data)
        return response;

    },

    async deleteInventory(id){

        let data={
            "id":id
        }

        let response = await apiCall("inv/delete", data)
        return response

    }
}