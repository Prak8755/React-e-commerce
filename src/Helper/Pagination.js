import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationShow() {
  const itemsPerPage = 5; // Change this to your desired number of items per page
  const [storedProducts,setStoredProducts]=React.useState([]);
  React.useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('products')) || [];
    setStoredProducts([...data])
  },[])


  const [page, setPage] = React.useState(1);
  const [displayedItems, setDisplayedItems] = React.useState([]);

  React.useEffect(() => {
    // Calculate the start and end index based on the current page and itemsPerPage
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Get the items to display for the current page
    const currentItems = storedProducts.slice(startIndex, endIndex);
    setDisplayedItems(currentItems);
  }, [page, storedProducts]);

  const handleChange = (event, value) => {
   setPage(value);
  };

  return (
    <Stack spacing={2}>
      {/* Display the current page number */}
      <Typography>Page: {page}</Typography>

      {/* Display the items for the current page */}
      {displayedItems.map(item => (
        <div key={item.id}>
          <h1>{}</h1>
          {/* Render your item here */}
          <Typography>{item.name}</Typography>
        </div>
      ))}

      {/* Render pagination component */}
      <Pagination count={Math.ceil(storedProducts.length / itemsPerPage)} page={page} onChange={handleChange} />
    </Stack>
  );
}
