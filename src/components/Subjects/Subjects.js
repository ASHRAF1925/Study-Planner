import React, { useEffect, useState } from 'react';
import './Subjects.css'

const Subjects = () => {
    const [subjects,setSubjects]=useState([]);
    useEffect(()=>{
        fetch('Subjects.json')
        .then(res => res.json())
        .then(data => setSubjects(data))
    },[])

    return (
        <div className="container text-center">
        <div className="row">
          <div className="col-lg-9 subjects">
            Subjects
          </div>
          <div className="col-lg-3 order-first">
            Side menu
          </div>
      
        </div>
      </div>
    );
};

export default Subjects;