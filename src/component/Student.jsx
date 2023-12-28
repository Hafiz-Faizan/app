import React, { useState, useEffect } from 'react';
import SingleStudent from './SingleStudent';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook

  const getData = () => {
    axios.get("http://localhost:3000/api/employee/")
      .then(res => {
        setStudents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const openAddStudent = () => {
    navigate("/student/new"); // Use navigate instead of props.history.push
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-2 m-3">
        <h1>Student list</h1>
        <Button onClick={openAddStudent}>Add Student</Button>
      </div>
      {students.length === 0 ? <p>There are no students</p> : (
        <Grid container spacing={2}>
          {students.map((student) => (
            <SingleStudent key={student._id} student={student} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Student;
