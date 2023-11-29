// import React, { useEffect, useState } from "react";
// import {
//   getLocalStgData,
//   setLoggedInUser,
// } from "../utils/Service";
// import { useNavigate } from "react-router-dom";

// import Button from '@mui/material/Button';

// function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputData, setInputData] = useState({ email: "", password: "" });
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     getLocalStgData()
//       .then((el) => setUser(el))
//       .catch((e) => alert(e));
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const { email, password } = inputData;
//     const index = user.findIndex((el) => {
//       return el.email === email && el.password === password;
//     });

//     if (index >= 0) {
//       let loggedUser = { email: email, password: password };
//       setLoggedInUser(loggedUser);
//       navigate("/");
//     } else {
//       alert("wrong credentials");
//     }
//   }

//   return (
//     <div className="mt-20">
//       <div className="m-auto w-[60%] shadow-md">
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             className="h-10 border"
//             type="email"
//             placeholder="Email"
//             required
//             onChange={function (e) {
//               setInputData({ ...inputData, email: e.target.value });
//             }}
//           />
//           <input
//             className="h-10 border"
//             type="password"
//             placeholder="Password"
//             required
//             onChange={function (e) {
//               setInputData({ ...inputData, password: e.target.value });
//             }}
//           />
//           <button className="px-5 py-1 bg-blue-500">Sign up</button>
//         </form>
//       </div>
//       <ButtonUsage/>
//     </div>
//   );
// };

// export default Login;


import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setLoggedInUser } from '../service/user'
import { toast, Toaster } from "alert";
import { AlertLogin } from "../Helper/AlertProgress";
import { getLocalStgUser } from "../service/user";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const[alertMsg,setAlertMsg]=useState('')
   const navigate = useNavigate();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [user, setUser] = useState([]);

  useEffect(() => {
    getLocalStgUser()
      .then((el) => setUser(el))
      .catch((e) => setAlertMsg(e.message));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if(inputData.email===''||inputData.password===''){
      toast('Please input Email and Password Properly');
      return;
    }
   else{
    const { email, password } = inputData;
    const index = user.findIndex((el) => {
      return el.email === email && el.password === password;
    });

    if (index >= 0) {
      let loggedUser = { email: email, password: password };
      setLoggedInUser(loggedUser);
      navigate("/");
    } else {
     toast('Oops, wrong login details')
    }
   }
  }
  
  
  function handleInput(e) {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
   <>
{user.length<=0&&<AlertLogin alertMsg={alertMsg}/>}
   <Toaster/>
    <ThemeProvider theme={defaultTheme}>
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
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
            id="email"
            value={inputData.email}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={inputData.password}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInput}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container >
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Dont have an account sign up now"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
   </>
  );
}

