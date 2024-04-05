import apiCall from "./apiCall";


export default {
    async createCategory(category_name,category_description)
    {
      
        let data={
            "category_name":category_name,
            "category_description":category_description,

        }
        let response = await apiCall("category/create", data)
        return response;

    },

    async listCategory(data)
    {
        let response = await apiCall("category/list", data)
        return response;

    },

    async getCategoryInfo(data)
    {

        let response = await apiCall("category/info", data)
        return response;

    },

    async updateCategory(id,category_name,category_description){

        let data={
             id:id,
            "category_name":category_name,
            "category_description":category_description
            

        }
        let response = await apiCall("category/update", data)
        return response;


    },

    async deleteCategory(id){

        let data={
            "id":id
        }

        let response = await apiCall("category/delete", data)
        return response

    }
 
}