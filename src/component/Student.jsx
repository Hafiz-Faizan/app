import React from 'react';
import { useState } from 'react';
import SingleStudent from './SingleStudent';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/esm/Button';


const Student = () => {
  const [students, setStudents] = useState([]);
  console.log("student is call")
  
  const getData = () =>{
    axios.get("http://localhost:3000/api/employee/").then(res=>{
    setStudents(res.data)
  }).catch(err=>{
    console.log(err)
  })
  }
  React.useEffect(getData,[])
  
  return (
    <>
     <div className="d-flex justify-content-between align-items-center my-2 m-3">
      <h1>Student list</h1>
      <Button>add student</Button>
    </div>
      {students.length==0? <p>there are no students</p> : (<Grid container spacing={2}>
        {students.map((student) => (
        <SingleStudent key={student._id} student={student} />
      ))}
      </Grid> ) }
    
    </>
  );
};

export default Student;
