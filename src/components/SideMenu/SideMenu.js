import React, { useState } from "react";
import { additem, getitem } from "../../Utilities/databasefunctions";
import ActivityDetail from "../ActivityDetail/ActivityDetail";
import "./SideMenu.css";






const SideMenu = (props) => {
    let Breaktime=getitem();

   
    const[breaktime,setBreaktime]=useState(Breaktime);
    if(Breaktime===0)
    {
      setBreaktime(Breaktime)
    }


    const breaktimeset=(time)=>{
        Breaktime=time;
        additem(Breaktime);
      
        setBreaktime(Breaktime);
       
    }

  return (
    <div>
      <img
        src="/images/Batman.jpg"
        className="rounded-circle  image-size"
        alt=""
      ></img>
      <h3 className="text-white">MD.Ashraful Islam</h3>
      <div className="d-flex text-white justify-content-between">
        <p>Full Stack Developer</p>
        <p>App Developer</p>
      </div>
      <br />
      <br />
      <h2 className="text-white">Add A Break</h2>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button onClick={()=>breaktimeset(1)} type="button" className="btn btn-danger">
          1 min
        </button>
        <button onClick={()=>breaktimeset(2)} type="button" className="btn btn-warning">
          2 min
        </button>
        <button onClick={()=>breaktimeset(3)} type="button" className="btn btn-info">
          3 min
        </button>

        <button onClick={()=>breaktimeset(5)} type="button" className="btn btn-success">
          5 min
        </button>
      </div>

      <ActivityDetail totaltime={props.totaltime} breaktime={breaktime}></ActivityDetail>
    </div>
  );
};

export default SideMenu;
