import React, { useEffect, useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';
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

  const [total,setTotal]=useState(0)
    
  const AddtoListClick=(subject)=>{

const new_total=total+subject.time;

    setTotal(new_total)
  }


    return (
        <div className="container text-center mt-5">
        <div className="row">
          <div className="col-lg-9 col-sm-12 subjects ">
      
        <div className="row  ">
          
            {
                subjects.map(subject =><Subject key={subject.id} subject={subject} AddtoListClick={AddtoListClick}></Subject>)
            }
         
          
      
        </div>
      
          </div>
          <div className="col-lg-3 side-menu ">
   
            <SideMenu totaltime={total}></SideMenu>
          </div>
      
        </div>
      </div>
    );
};

export default Subjects;