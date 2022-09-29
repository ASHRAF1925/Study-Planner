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

    
  const AddtoListClick=()=>{
    console.log('clicked')
  }

    return (
        <div className="container text-center mt-5">
        <div className="row">
          <div className="col-lg-10 col-sm-12 subjects ">
      
        <div className="row p-3 ">
          
            {
                subjects.map(subject =><Subject key={subject.id} subject={subject} AddtoListClick={AddtoListClick}></Subject>)
            }
         
          
      
        </div>
      
          </div>
          <div className="col-lg-2 side-menu ">
            Side menu
          </div>
      
        </div>
      </div>
    );
};

export default Subjects;