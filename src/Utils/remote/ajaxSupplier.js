import apiCall from "./apiCall";

export default {
    async createSupplier(supplier_name, phone_number, email, location){

        let data={
            "supplier_name":supplier_name,
            "phone_number":phone_number,
            "email":email,
            "location":location
        
        }
        
        let response = await apiCall("sup/create", data)
            return response
    },

                
    async listSupplier(data){

        let response = await apiCall("sup/list", data)
        return response
    },


    async getSupplierInfo(id){

        let data={
            "id":id
        }

        let response = await apiCall("sup/info", data)
        return response
    },


    async all_suppliers(data){
        let response= await apiCall("sup/total", data)

        return response;

    },



    async updateSupplier(supplier_name, phone_number, email, location){

        let data={
            "supplier_name":supplier_name,
            "phone_number":phone_number,
            "email":email,
            "location":location
        }

        let response = await apiCall("sup/update", data)
        return response
    },



    async deleteSupplier(id){

        let data={
            "id":id
        }

        let response = await apiCall("sup/delete", data)
        return response
    }
}
