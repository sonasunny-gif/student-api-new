import React, { useState } from 'react'
import Navigation from './Navigation'

const Add = () => {

    const [input,change]=useState(
        {

name: "",
roll_number: "",
admission_number: "",
college: ""
}
    )

    const inputHand=(event)=>{
        change({...input,[event.target.name]:event.target.value})
    }

    const readvalues=()=>{
        console.log(input)
    }
  return (
    <div style={{ 
        backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMteGUFDVXr49C_h9ei2hVPcBn0zd29mgEa15Oz88K4_pXQQBMIbZ2y-qt2eDv5w8QCOA&usqp=CAU')",
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
                        <h1 style={{
                            textAlign:"center",
                        }}>
                            ADD DETAILS
                        </h1>
                      
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHand}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Roll no</label>
                            <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputHand}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Admission No</label>
                            <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputHand}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={input.college} onChange={inputHand}/>
                        </div>
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalues}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add
