import * as React from "react";
import { getLocalStgProducts } from "../service/product";
import ProductCards from "./ProductCards";
import Progress from "./Progress";
import SearchAppBar from "./SearchBar";
import NoProductAlert from "../Helper/NoProductAlert";
import { Pagination } from "@mui/material";
import FilterProduct from "../Helper/FilterProduct";

export default function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [noProductMsg, setNoProductMsg] = React.useState(false);
  const [loader, setLoader] = React.useState(true);
  const [allProducts, setAllProducts] = React.useState([]);


  //for filter logic
  const [render, setRender] = React.useState("");

  React.useEffect(() => {
    getLocalStgProducts()
      .then((el) => setAllProducts(el))
      .catch((e) => console.log(e));
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  //for search functionality
  function handleChange(e) {
    const query = e.target.value.toLowerCase(); // Convert query to lowercase;
    if (query === "") {
      setNoProductMsg(false);
      setRender(render + 1);
    } else {
      const filteredProd = allProducts.filter((el) => {
        // return el.title.replace(/\s/g, '').toLowerCase()===(query.toLowerCase());
        return el.title
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setProducts([...filteredProd]);

      if (filteredProd.length === 0) {
        console.log("d");
        setNoProductMsg(true);
      } else {
        setNoProductMsg(false);
      }
    }
  }

  //For pagination
  const itemsPerPage = 3; // Change this to your desired number of items per page
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    // Calculate the start and end index based on the current page and itemsPerPage
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the items to display for the current page

    getLocalStgProducts()
      .then((el) => {
        const currentItems = el.slice(startIndex, endIndex);
        setProducts([...currentItems]);
      })
      .catch((e) => console.log(e));
  }, [page, render]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  //for filter
  function handleChangeBox(_, value) {
    if (value.length > 0) {
      const result = [];
      for (let i = 0; i < allProducts.length; i++) {
        for (let j = 0; j < value.length; j++) {
          if (
            allProducts[i].brand.replace(/\s/g, "").toLowerCase() ===
            value[j].title.toLowerCase()
          ) {
            result.push(allProducts[i]);
          }
        }
      }
      console.log(result);
      const newResult = [...new Set(result)];
      setProducts(newResult);
          
      //this logic is for first getting checked value from input and then sending it for unchecking
     
    } else {
      setRender(render + 1);
    }
  }

  return (
    <>
      <SearchAppBar handleChange={handleChange} />
      {/* Filter Component */}
      <div className="float-right mt-4">
        <FilterProduct
          allProducts={allProducts}
          handleChangeBox={handleChangeBox}
        />
      </div>

      {noProductMsg && <NoProductAlert />}
      <div className="flex flex-wrap">
        {loader
          ? products?.map((el) => <Progress key={el.id} />)
          : products?.map((el) => (
              <ProductCards products={el} productsInfo={products} key={el.id} />
            ))}
      </div>
      {/* Pagination Logic */}
      <div className="flex flex-end justify-end mt-3">
        <Pagination
          count={Math.ceil(allProducts.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
        />
      </div>

      {/* dummy practice */}

    </>
  );
}
