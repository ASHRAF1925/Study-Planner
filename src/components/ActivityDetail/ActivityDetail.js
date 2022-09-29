import React from 'react';

const ActivityDetail = (props) => {
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
            <button className='btn btn-primary'>Study Completed</button>
        </div>
    );
};

export default ActivityDetail;