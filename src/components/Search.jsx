import React from 'react'
import Navigation from './Navigation'

const Search = () => {
  return (
    <div style={{
        backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9vuano0IEH7ETWWlHTkjiXxYvy7GKpi98IVyQ1mczQgoBaktFYcsahmJcPqlXrT-n1I&usqp=CAU')",
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
                            <label htmlFor="" className="fomr-label">Roll No</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search