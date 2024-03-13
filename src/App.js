import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
  
} from "react-router-dom";

import Test from "./Components/Pages/Test";
import Home from "./Components/Pages/Home";
import Forgotpassword from "./Components/Pages/Forgotpassword";
import Products from "./Components/Pages/Products";
import CreateProduct from "./Components/Pages/CreateProduct";
import Suppliers from "./Components/Pages/Suppliers";
import Inventory from "./Components/Pages/Inventory";
import Customer from "./Components/Pages/Customer";
import Orders from "./Components/Pages/Orders";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/login";




function App() {
  return (
   
    // <Register/>

    <Router>
       
             <Switch>
     
              <Route path="/" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgotpass" element={<Forgotpassword/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/test" element={<Test/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/create" element={<CreateProduct/>}/>
              <Route path="/supplier" element={<Suppliers/>}/>
              <Route path="/customer" element={<Customer/>}/>
              <Route path="/inventory" element={<Inventory/>}/>
              <Route path="/order" element={<Orders/>}/>
     
             </Switch>
     
          </Router>
     

   
  );
}

export default App;
