import { data } from "jquery";
import apiCall from "./apiCall";


export default {
    async createProduct(prd_name, prd_category,prd_description,supplier, buying_price,selling_price, qty_in, qty_out, minimum_stock_value)
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
            "minimum_stock_value":minimum_stock_value

            

        }
        let response = await apiCall("product/create", data)
        return response;

    },

    async listProducts(page)
    {
        let data={
            "page":page
        }
        let response = await apiCall("product/list", data)
        return response;

    },

    async newProducts(data)
    {
        let response = await apiCall("product/new", data)
        return response;

    },

    async getProductInfo(data)
    {

        let response = await apiCall("product/info", data)
        return response;

    },

    async total_products(data){
        let response= await apiCall("product/total", data)
        return response;

    },
    async updateProduct(id,prd_name, prd_category,prd_description,supplier, buying_price,selling_price){

        let data={
             id:id,
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

    async tableLimit(){

        let response = apiCall("product/limit", data)
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