import React from 'react'

function PageHeader(props) {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800"><strong>{props.title}</strong></h1>
                      
                    </div>
  )
}

export default PageHeader