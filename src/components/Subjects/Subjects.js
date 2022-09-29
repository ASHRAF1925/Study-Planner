import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import './Subjects.css'

const Subjects = () => {
    let Total_time=0;
    const [subjects,setSubjects]=useState([]);
    useEffect(()=>{
        fetch('Subjects.json')
        .then(res => res.json())
        .then(data => setSubjects(data))
    },[])

    
  const AddtoListClick=(subject)=>{

  Total_time=Total_time+subject.time;
    console.log(Total_time)
    setTotal(Total_time)
  }
  const [total,setTotal]=useState(0)

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
            Total time={total}
          </div>
      
        </div>
      </div>
    );
};

export default Subjects;