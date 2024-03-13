import apiCall from "./apiCall";


export default {
    async createProduct(prd_name, prd_category,prd_description,supplier, buying_price,selling_price)
    {
      
        let data={
            "prd_name":prd_name,
            "prd_category":prd_category,
            "prd_description":prd_description,
            "supplier":supplier,
            "buying_price":buying_price,
            "selling_price":selling_price,
            

        }
        let response = await apiCall("product/create", data)
        return response;

    },

    async listProducts(data)
    {
        let response = await apiCall("product/list", data)
        return response;

    },
 
}