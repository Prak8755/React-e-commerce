import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Outlet } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import ConfirmDelete from './ConfirmDelete';



const routesShow=[{el:'PRODUCTS',id:1234}, {el:'CONTACT',id:1111},{el:'ADD PRODUCTS',id:2312}]

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [loader,setLoader]=React.useState(true);

  React.useEffect(()=>{
setTimeout(() => {
  setLoader(false)
}, 2000);
  },[])

  
  return (
    <>
   {loader? <div className='flex items-center h-[100vh] '>
    <CircularProgress className='m-auto w-[20%]'/>
   </div>:
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Link to='/' variant="h6" component="div">
            E-commerce
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {routesShow?.map((text,index) => (
              <Link key={text.id} to={`/${text.el.toLowerCase()}`}  >
                <ListItemButton >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.el} />
                </ListItemButton>
              </Link>
            ))}
          </List>
          <Divider />

 
          <List>
            {['LOGOUT'].map((text, index) => (
             <ConfirmDelete key={index}/>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
        <Toolbar />
  
        <div >
       {/* Children element will appear here */}
      <Outlet/>      
  </div>
      
      </Box>
    </Box>}
    </>
  );
}




