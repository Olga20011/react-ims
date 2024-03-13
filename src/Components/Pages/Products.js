import React, { useEffect, useState } from 'react'
import AppContainer from '../Structure/AppContainer'
import Content from '../Structure/Content'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ajax } from 'jquery';


function Products() {

    const [products , setProducts]= useState([]);
    const [loading, setLoading]= useState(false);


    useEffect(() => {
      fetchData();
    }, []);
  const fetchData = async () => {
    const server_response= await ajax.listProducts()
    console.log(server_response)
    }

  };
  return (
    
    <AppContainer title="Products" >
     
       <div className="nav-item dropdown no-arrow">
       <Popup trigger={<button className=" d-sm-inline-block btn btn-sm btn-primary" style={{marginLeft: "980px", marginTop: "-100px"}}>CreateProduct</button>} position="bottom center" >
        
       <div>
        <form className='prd'>
          <input
            type='text'
            name='prd_name'
            placeholder='Product Name'
          />
          <input
            type='text'
            name='prd_category'
            placeholder='Product Category'
          />
          <input
            type='text'
            name='prd_description'
            placeholder='Product Description'
          />
          <input
            type='text'
            name='supplier'
            placeholder='Supplier'
          />
          <input
            type='text'
            name='buying_price'
            placeholder='Buying Price'
          />
          <input
            type='text'
            name='selling_price'
            placeholder='Selling Price'
          />
          <div>
            <button type='submit'>
              Create product
            </button>
          </div>
        </form>
      </div>
</Popup>


    </div> 


    <div className='col-md-12'>
   
      <div>

        <table style={{borderSpacing: '50px', borderCollapse: 'separate'}}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Decsription</th>
              <th>Supplier</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
            </tr>
          </thead>
        </table>

        <tbody>
         
          {Array.isArray(products)&& products.map(item =>(
            <tr key={item.id}>
              <td>{item.prd_name}</td>
              <td>{item.prd_category}</td>
              <td>{item.prd_description}</td>
              <td>{item.supplier}</td>
              <td>{item.buying_price}</td>
              <td>{item.selling_price}</td>

            </tr>
            
          ))}
        </tbody>
      </div>



    </div>
    </AppContainer>
   
  )

export default Products;