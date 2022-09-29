
const additem=(value)=>{
    localStorage.setItem('selected_time',value);

}

const getitem=()=>{
    const value=localStorage.getItem('selected_time');
    return value;
}

export{additem,getitem}