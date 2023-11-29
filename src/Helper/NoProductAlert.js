import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

const NoProductAlert = () => {
  return (
    <div>
         <Alert severity="info">
  <AlertTitle>Oops</AlertTitle>
  Looks like There is no product found with your search — <strong>Please try something else</strong>
 </Alert>
    </div>
  )
}

export default NoProductAlert