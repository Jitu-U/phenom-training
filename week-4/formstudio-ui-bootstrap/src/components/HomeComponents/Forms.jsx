import React from 'react'


function FormMain(){
    return (
        <>
        </>
    )
}


function Forms() {


  return (
    <div className='row'>
       <div className="col-2 bg-red">
           <div className="row p-2 mt-3">
                <div className="col-12">
                    <div className="row">
                        <h6>Forms</h6>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <span className="nav-link-text">All Forms</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span className="nav-link-text"> Apply</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span className="nav-link-text"> Registration</span>
                            </a>
                        </li>
                    </ul>
                </div>
           </div>
       </div>
         <div className="col-8">
             <FormMain/>
        </div>
    </div>
  )
}

export default Forms