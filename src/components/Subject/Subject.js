import React from "react";
import './Subject.css'



const Subject = (props) => {
  const { title, description, Credit, time, image } = props.subject;
  let info=description;
  if(info.length>100){
  
   info=info.substr(0,200)
   info=info.substr(0, Math.min(info.length, info.lastIndexOf(" ")))
   info=info+" ..."
  }

  return (
    <div className="mx-2 mt-4 img-back">
      <div className="card card-style img-back p-3" >
        <img src={image}className="card-img-top img-height  rounded" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">
        {info}
          </p>
          <h5>Credit : {Credit}</h5>
          <h4>Time : {time} minute</h4>

          <button className="btn btn-primary">Add to List</button>
       
        </div>
      </div>
    </div>
  );
};

export default Subject;
