import React from 'react';
import { Alert,AlertTitle } from '@mui/material';


const FormAlert = () => {
  return (
    <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    <strong> Please enter all field !check it out!</strong>
  </Alert>
  )
}

export default FormAlert