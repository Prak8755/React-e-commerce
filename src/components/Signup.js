import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AlertProgress from "../Helper/AlertProgress";
import { getLocalStgUser, setLocalStgUser } from "../service/user";

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
  const [alertShow, setAlertShow] = useState(false);

  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
  });
  const [user, setUser] = useState([]);

  useEffect(() => {
    getLocalStgUser()
      .then((el) => setUser(el))
      .catch((e) => console.log(e));
  }, []);

  function handleInput(e) {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = [...user, { ...inputData, id: Date.now() }];
    setUser(newUser);
    setLocalStgUser(newUser);
    //show some alert and then navigate
    setAlertShow(true);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }

  return (
    <>
      {alertShow && <AlertProgress />}
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
              Sign in
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
                id="name"
                value={inputData.name}
                label="Fname"
                name="name"
                autoComplete="fname"
                autoFocus
                onChange={handleInput}
              />
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
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already registered? Login Now"}
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
