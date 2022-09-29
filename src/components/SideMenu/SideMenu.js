import React from "react";
import ActivityDetail from "../ActivityDetail/ActivityDetail";
import "./SideMenu.css";

const SideMenu = (props) => {
  return (
    <div>
      <img
        src="/images/Batman.jpg"
        class="rounded-circle  image-size"
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
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-danger">
          1 min
        </button>
        <button type="button" className="btn btn-warning">
          2 min
        </button>
        <button type="button" className="btn btn-info">
          3 min
        </button>

        <button type="button" className="btn btn-success">
          5 min
        </button>
      </div>

      <ActivityDetail totaltime={props.totaltime}></ActivityDetail>
    </div>
  );
};

export default SideMenu;
