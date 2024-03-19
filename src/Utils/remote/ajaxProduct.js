import apiCall from "./apiCall";


export default {
    async createProduct(prd_name, prd_category,prd_description,supplier, buying_price,selling_price, qty_in, qty_out, reorder_point)
    {
      
        let data={
            "prd_name":prd_name,
            "prd_category":prd_category,
            "prd_description":prd_description,
            "supplier":supplier,
            "buying_price":buying_price,
            "selling_price":selling_price,
            "qty_in":qty_in,
            "qty_out":qty_out,
            "reorder_point":reorder_point

            

        }
        let response = await apiCall("product/create", data)
        return response;

    },

    async listProducts(data)
    {
        let response = await apiCall("product/list", data)
        return response;

    },

    async getProductInfo(id)
    {

        let data={
            "id":id

        }
        let response = await apiCall("product/info", data)
        return response;

    },

    async total_products(data){
        let response= await apiCall("product/total", data)
        return response;

    },
    async updateProduct(prd_name, prd_category,prd_description,supplier, buying_price,selling_price){

        let data={
            "prd_name":prd_name,
            "prd_category":prd_category,
            "prd_description":prd_description,
            "supplier":supplier,
            "buying_price":buying_price,
            "selling_price":selling_price,
            

        }
        let response = await apiCall("product/update", data)
        return response;


    },

    async deleteProduct(id){

        let data={
            "id":id
        }

        let response = await apiCall("product/delete", data)
        return response

    }
 
}