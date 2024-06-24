import React from 'react'
import Navbar from './Navbar'

const AddSubscribers = () => {
  return (
    <div>
      <Navbar/>
      <div className="container"><br />
      <div class="card" >
  <div class="card-body">
    
  </div>
  <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subscriber Name</label>
                        <input type="text" className="form-control"placeholder='enter the name' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input type="text" className="form-control"placeholder='enter the phone number' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                      <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder='enter the pincode' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">District</label>
                        <input type="text" className="form-control" placeholder='enter district' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Village Office</label>
                        <input type="text" className="form-control" placeholder='enter the villageoffice' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email ID</label>
                        <input type="text" className="form-control" placeholder='enter email id'/>
                    </div>
                </div>
            </div>
        </div>
</div>


       
      </div>
    </div>
  )
}

export default AddSubscribers
