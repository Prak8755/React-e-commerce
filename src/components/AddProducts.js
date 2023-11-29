import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  getLocalStgProducts,
  setLclStgProducts,
} from "../service/product";
import { Alert } from "@mui/material";
import FormAlert from "../Helper/FormAlert";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function Products() {
const [formMsg,setFormMsg]=React.useState({success:false,notSuccess:false});
  const [products, setProducts] = React.useState([]);
  const [inputData, setInputData] = React.useState({
    title: "",
    price: "",
    brand: "",
    description: "",
    id: "",
  });

  React.useEffect(() => {
    getLocalStgProducts()
      .then((el) => {
        setLclStgProducts(el);
        setProducts(el)
      })
      .catch((er) => console.log(er));
  }, []);

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputData.title === ""||
      inputData.brand === "" ||
      inputData.price === "" ||
      inputData.description === ""
    ) {
     setFormMsg({...formMsg,notSuccess:true});
     setTimeout(()=>{
      setFormMsg({...formMsg,notSuccess:false});
     },2000)
      return;
    }

    const data = {
      title: inputData.title,
       price: inputData.price,
       brand:inputData.brand,
       description:inputData.description,
      id: Date.now(),
    };
    setProducts([data,...products, ]);
    setLclStgProducts([data,...products]);
    setInputData({title:'',brand:'',price:'',description:''})
    setFormMsg({...formMsg,success:true});
    setTimeout(()=>{
     setFormMsg({...formMsg,success:false});
    },2000)
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  return (
    <>
{    formMsg.success&&  <Alert severity="success">Cool, You have successfully added the product</Alert>
}      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Product name"
                value={inputData.title}
                name="title"
                autoComplete="title"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                value={inputData.price}
                fullWidth
                name="price"
                label="Price"
                type="price"
                id="price"
                autoComplete="price"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={inputData.description}
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={inputData.brand}
                id="brand"
                label="Brand"
                name="brand"
                autoComplete="Brand"
                autoFocus
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                color="success"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      {formMsg.notSuccess&&<FormAlert/>}
      {/* Product list will appeare here */}
    </>
  );
}
