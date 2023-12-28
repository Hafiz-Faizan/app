import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system'; 

const StyledGrid = styled(Grid)(({ theme }) => ({
    color: 'white',
    textDecoration: 'none',
    backgroundColor:'lightblue',
    margin: theme.spacing(5),
     
  }));
const SingleStudent = ({student}) => {
  return (
    <>
   <StyledGrid item xs={3} spacing={5} >
    <h1>{student.title}</h1>
    
    
    <h2>{student.details}</h2>
    
   
    <h2>{student.salary}</h2>
    <hr />
    </StyledGrid>
    
    
    </>
  )
}

export default SingleStudent