import axios from "axios";
import dictionary from "../dictionary";

const ACCESS_TOKEN = localStorage.getItem('mysystem@user');
const apiHost = dictionary.apiHost

const apiCall = async ( endpoint, data)=>{

    console.log("tokeeen",ACCESS_TOKEN)

    try {
        let response = await axios.post(apiHost + endpoint, data,
          {
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          });

        // let result = await response.json();
        // return result;
        return response.data
      } catch (error) {
        let connError = { 'status': 'conn', 'message':'Server connection error occured!', 'details': { 'message': 'Contacting server....', 'content': false } }
        return connError;
      }

}


export default apiCall