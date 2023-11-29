import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useRandomImage from '../customHooks/useRandomImage';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductModel from '../Helper/ProductModel';


const ProductCards = ({productsInfo,products}) => {

    const {title,description,price,brand,id}=products
  

  return (
    <Card sx={{ maxWidth: 245 }} className='m-4'>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          <img src='' alt=''/>
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={title}
      subheader={brand}
    />
    <h6>{price}</h6>
   <img src='https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg' alt='' className='h-[200px]'/>
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
   <div className='flex gap-2 '>  
   {/* Modal show */}
   <ProductModel id={id} productsInfo={productsInfo}/>
 <Link to={`/products/${id}`} ><Button variant="contained">Product</Button>
</Link>
   </div>
  </Card>
  )
}

export default ProductCards