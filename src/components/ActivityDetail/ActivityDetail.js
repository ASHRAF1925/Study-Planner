import React from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ActivityDetail = (props) => {
    const notify=()=>toast.success("hwllo",{position:"top-center"});
    const {totaltime, breaktime}=props;
    return (
        <div className='text-white'>
              <br />
            <br />
            <h2 >Activity Details</h2>
            <br />
          
            <h3>Study Time :{totaltime} min</h3>
            <h3>Break Time :{breaktime} </h3>
            <br />
            <br />
            <button onClick={notify} className='btn btn-primary'>Study Completed</button>
            <ToastContainer></ToastContainer>
          
        </div>
    );
};

export default ActivityDetail;