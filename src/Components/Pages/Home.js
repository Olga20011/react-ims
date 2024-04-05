import React, { useEffect, useState } from 'react'
import AppContainer from '../Structure/AppContainer'
import Content from '../Structure/Content'
import ajaxUser from '../../Utils/remote/ajaxUser'

function Home() {

  
  

    return (
      <AppContainer title="" >
  
          <div className='col-md-12'>

            <Content/>
{/* 
            id,
            prd_name,
            prd_category,
            prd_description,
            supplier,
            buying_price,
            selling_price
   */}
          </div>
      </AppContainer>
    )
  }
  
  export default Home