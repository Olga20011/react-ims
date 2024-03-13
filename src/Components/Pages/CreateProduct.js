import { ajax } from 'jquery';
import React, { useState } from 'react';


function CreateProduct() {
  const [prd_name, setPrdName] = useState('');
  const [prd_category, setPrdCategory] = useState('');
  const [prd_description, setPrdDescription] = useState('');
  const [supplier, setSupplier] = useState('');
  const [buying_price, setBuyingPrice] = useState('');
  const [selling_price, setSellingPrice] = useState('');



  const CreateProducts = async() => {

    const server_response= await ajax.CreateProduct(prd_name, prd_category,prd_description,supplier, buying_price,selling_price)
    console.log(server_response)
    
  };




  return (
    <>
      
      
      <div>
        <form className='prd'>
          <input
            type='text'
            name='prd_name'
            placeholder='Product Name'
            value={prd_name}
            onChange={(e)=>setPrdName(e.target.value)}
          />
          <input
            type='text'
            name='prd_category'
            placeholder='Product Category'
            value={prd_category}
            onChange={(e)=>setPrdCategory(e.target.value)}
          />
          <input
            type='text'
            name='prd_description'
            placeholder='Product Description'
            value={prd_description}
            onChange={(e)=>setPrdDescription(e.target.value)}
          />
          <input
            type='text'
            name='supplier'
            placeholder='Supplier'
            value={supplier}
            onChange={(e)=>setSupplier(e.target.value)}
          />
          <input
            type='text'
            name='buying_price'
            placeholder='Buying Price'
            value={buying_price}
            onChange={(e)=>setBuyingPrice(e.target.value)}
          />
          <input
            type='text'
            name='selling_price'
            placeholder='Selling Price'
            value={selling_price}
            onChange={(e)=>setSellingPrice(e.target.value)}
          />
          <div>
            <button type='submit' onClick={CreateProducts}>
              Create product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
