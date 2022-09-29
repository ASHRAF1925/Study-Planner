import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import './Subjects.css'

const Subjects = () => {
    const [subjects,setSubjects]=useState([]);
    useEffect(()=>{
        fetch('Subjects.json')
        .then(res => res.json())
        .then(data => setSubjects(data))
    },[])

    return (
        <div className="container text-center mt-5">
        <div className="row">
          <div className="col-lg-10 subjects bg-info">
      
        <div className="row p-3 ">
          
            {
                subjects.map(subject =><Subject key={subject.id} subject={subject}></Subject>)
            }
         
          
      
        </div>
      
          </div>
          <div className="col-lg-2 ">
            Side menu
          </div>
      
        </div>
      </div>
    );
};

export default Subjects;