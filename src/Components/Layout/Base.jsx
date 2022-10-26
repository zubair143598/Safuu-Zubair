import React from 'react'
import Dashboard from '../Elements/Dashboard'
import Footer from './Footer'
import Header from './Header'

const Base = (props) => {
  return (
    <>
    <Header/>
    <div className='container-fluid  border border-success' >
      <div className="row ">
        <div className="col-md-2">
          {/* <Dashbord/> */}
    <Dashboard/>
        </div>
        <div className="col-md-10 pt-5">
          {props.children}
    {/* {props.children} */}
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Base