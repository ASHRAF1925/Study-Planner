import React from 'react';

const ActivityDetail = (props) => {
    return (
        <div className='text-white'>
              <br />
            <br />
            <h2 >Activity Details</h2>
            <br />
          
            <h3>Study Time :{props.totaltime} min</h3>
            <h3>Break Time : </h3>
            <br />
            <br />
            <button className='btn btn-primary'>Study Completed</button>
        </div>
    );
};

export default ActivityDetail;