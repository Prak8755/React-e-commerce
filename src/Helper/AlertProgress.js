import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Alert } from '@mui/material';

export default function AlertProgress() {
  return (
   <>
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
      <Alert severity="success">You have successfully registered. You are being redirected to Login Page now</Alert>

   </>
  );
}

export function AlertLogin({alertMsg}){
    return(
        <Alert severity="error">{alertMsg}</Alert>

    )
}
