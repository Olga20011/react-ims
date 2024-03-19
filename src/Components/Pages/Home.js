import React, { useEffect, useState } from 'react'
import AppContainer from '../Structure/AppContainer'
import Content from '../Structure/Content'
import ajaxUser from '../../Utils/remote/ajaxUser'

function Home() {

  
  

    return (
      <AppContainer title="" >
  
          <div className='col-md-12'>

            <Content/>

            
  
          </div>
      </AppContainer>
    )
  }
  
  export default Home