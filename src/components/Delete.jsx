import React from 'react'
import Navigation from './Navigation'

const Delete = () => {
  return (
    <div style={{
        backgroundImage:"url('https://media.istockphoto.com/id/1459373176/vector/abstract-defocused-background-spring-summer-sea.jpg?s=612x612&w=0&k=20&c=P6D1VrXeeKsJfyKzlJeIqxyNXkeYtMb6C1mW6p68xro=')",
        backgroundSize:'cover',
        backgroundRepeat:'center',
        minHeight:'100vh'
    }}
    >
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Roll No</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete