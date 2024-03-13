import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import PageHeader from './PageHeader'



function AppContainer(props) {
  return (
    <div id="wrapper" >
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">

            { /* Main Content */ }
            <div id="content" >
            <Header />
            <div className="container-fluid" >
                <PageHeader title={props.title} button={props.button} />
                <div className="row" >
                    {props.children}
                </div>
            </div>
            
            </div>

    </div>
    </div>

  )
}

export default AppContainer