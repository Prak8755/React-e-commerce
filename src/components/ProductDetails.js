import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { getLocalStgProducts } from "../service/product";
import { type } from "@testing-library/user-event/dist/type";

export default function ProductDetails() {
  const [products, setProducts] = React.useState([]);
  const [productPage, setProductPage] = React.useState([]);
  const params = useParams();
  let { id } = params;

  React.useEffect(() => {
    getLocalStgProducts()
      .then((el) => {
        setProducts(el);
      })
      .catch((e) => console.log(e));
  }, []);

  React.useEffect(() => {
    handleProductView();
  }, [products]);

  //finding out Product with id
  function handleProductView() {
    id = +id;
    const filteredProd = products.filter((el) => el.id === id);
setProductPage([...filteredProd])
  };

  return (
    <Card sx={{ maxWidth: 845 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026582322"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {productPage[0]?.title}
           <h4>{productPage[0]?.brand}</h4>
          </Typography>
          <h5>{productPage[0]?.price}</h5>
          <Typography variant="body2" color="text.secondary">
            {productPage[0]?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
