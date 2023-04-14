import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  let history = useHistory();
  const clickLogin =()=>history.push("/login")
  const clickRegister =()=>history.push("/register")
  const clickProducts = () => history.push("/")
  const LogOut = () => {
    window.localStorage.clear("token")
    window.localStorage.clear("username")
    window.localStorage.clear("balance")
    history.push("/")
    window.location.reload();
  }
  if (localStorage.getItem("token")!=null) {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to='/'><img src="logo_light.svg" alt="QKart-icon"></img></Link>
        </Box>
        <Stack direction="row" spacing={2}>
          <Avatar src="/avatar.png" alt={localStorage.getItem("username")} />
          <p className="username-text">{localStorage.getItem("username")}</p>
          <Button className="explore-button" variant="text" onClick={LogOut}>
          Logout</Button>
        </Stack>
      </Box>
    );
  }
  else if (!hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to='/'><img src="logo_light.svg" alt="QKart-icon"></img></Link>
        </Box>
        <Stack direction="row" spacing={2}>
        <Button className="explore-button" variant="text" onClick={clickLogin}>
          Login</Button>
        <Button varient="contained" variant="contained" onClick={clickRegister}>
        Register</Button>
        </Stack>
      </Box>
    );
  }
  else {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to='/'><img src="logo_light.svg" alt="QKart-icon"></img></Link>
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text" onClick={clickProducts}>
          Back to explore
        </Button>
      </Box>
    );
  }

};

export default Header;
