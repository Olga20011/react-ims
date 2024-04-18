import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
  
} from "react-router-dom";

import Test from "./Components/Pages/Test";
import Home from "./Components/Pages/Home";
import Forgotpassword from "./Components/Pages/Forgotpassword";
import Products from "./Components/Pages/Products";
import Suppliers from "./Components/Pages/Suppliers";
import Inventory from "./Components/Pages/Inventory";
import Customer from "./Components/Pages/Customer";
import Orders from "./Components/Pages/Orders";
import Login from "./Components/Pages/login";
import RegisterPage from "./Components/Pages/RegisterPage";
import  CreateProduct from "./Components/Pages/CreateProducts";
import EditProduct from "./Components/Pages/EditProduct";
import Delete from "./Components/Pages/DeleteProduct";
import EditSupplier from "./Components/Pages/EditSupplier";
import DeleteSupplier from "./Components/Pages/DeleteSupplier";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomModal from "./Components/Common/Modals";
import Cart from  "./Components/Pages/Cart";




function App() {
  return (
   
    // <Register/>

    <Router>
       
             <Switch>
     
              <Route path="/" element={<RegisterPage />}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgotpass" element={<Forgotpassword/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="create" element={<CreateProduct/>}/>
              <Route path="edit/:id" element={<EditProduct/>}/>
              <Route path="delete/:id" element={<Delete/>}/>
              <Route path="editSupplier/:id" element={<EditSupplier/>}/>
              <Route path="/deleteSupplier/:id" element={<DeleteSupplier/>} /> 
              <Route path="/products" element={<Products/>}/>
              <Route path="/suppliers" element={<Suppliers/>}/>
              <Route path="/customers" element={<Customer/>}/>
              <Route path="/inventory" element={<Inventory/>}/>
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/cart/:id" element={<Cart/>}/>
              <Route path="/modal" element={<CustomModal/>}/>
     
             </Switch>

     
          </Router>
     

   
  );
}

export default App;
