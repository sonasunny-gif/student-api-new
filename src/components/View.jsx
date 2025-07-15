import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

const View = () => {
    const [data, setData] = useState(
        
            {"status":"success","data":[]}
            
        
    );


   const fetchData= ()=>{
    axios.get("http://18.144.111.41/view_all_students.php").then(
    (response)=>{
        setData(response.data)
    }
    ).catch()
   }

   useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-2">
                            <div className="col col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Roll No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Admission No</th>
                                            <th scope="col">College</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.data.map((value) => (
                                            <tr key={value.id}>
                                                <th>{value.id}</th>
                                                <td>{value.roll_number}</td>
                                                <td>{value.name}</td>
                                                <td>{value.admission_number}</td>
                                                <td>{value.college}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
