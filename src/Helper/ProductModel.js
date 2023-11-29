import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ProductModel({id,productsInfo}) {

  const [open, setOpen] = React.useState(false);
  const productModal=productsInfo.filter(el=>el.id===id);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className='px-4 py-1 bg-orange-500 rounded shadow-md'  variant="outlined" onClick={handleClickOpen}>
       View More
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
  <img className='h-30 w-30' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026582322' alt=''/>

        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         {productModal[0]?.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
          {productModal[0]?.price}
          </Typography>
          <Typography gutterBottom>
          {productModal[0]?.brand}
          </Typography>
          <Typography gutterBottom>
          {productModal[0]?.description}
          </Typography>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
