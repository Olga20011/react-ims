import React, { useEffect} from 'react'
import ajaxProduct from '../../Utils/remote/ajaxProduct'
import { useNavigate, useParams } from 'react-router-dom';

function Delete(){
    const {id} = useParams();
    const navigate= useNavigate();

    useEffect(() => {
        deletePrd();
       
    }, [])

    const deletePrd= async()=>{
        const server_response = await ajaxProduct.deleteProduct(id)
        if(server_response.status==="OK"){
            console.log(server_response.details)
            navigate('/products')
            
        }
    }

    return(
        <div></div>
    )
}
export default Delete;