import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import logo from "../assets/diamondg.png";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { firebaseApp } from "../firebase";
import { actionTypes } from "../reducer";

const pages = ["Products", "Pricing", "Blog"];

function BarraNav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAuth = () =>{
    if(user){
      firebaseApp.auth().signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      })
      dispatch({
        type: actionTypes.SET_USER,
        User: null,
      })
      navigate("/")
    }
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <IconButton sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img src={logo} style={{ marginRight: "5px", height: "2rem" }} />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Helvetica",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Super Ventas
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <IconButton sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img src={logo} style={{ marginRight: "5px", height: "2rem" }} />
            </IconButton>
          </Link>
          <Typography
            variant="h7"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Super Ventas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
              noWrap
              sx={{
                mr: 1,
                textAlign: "center",
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: ".1rem",
              }}
            >
              {user ? user.email : "Hello guest@gest "}
            </Typography>
            <Link to="/signin" >
              <Button variant="contained" sx={{color: "white"}} onClick={handleAuth}>
                {user ? "Sign Out" : "Sign In"}
              </Button>
            </Link>
            <Link to="/cart">
              <IconButton sx={{ p: 1 }}>
                <Badge badgeContent={basket?.length} color="error">
                  <ShoppingCart fontSize="large" color="warning" />
                </Badge>
              </IconButton>
            </Link>
            <IconButton sx={{ display: { xs: "none", md: "inline" }, p: 0.5 }} >
              <Avatar
                alt={user ? user.email : "Guest"}
                src="User"
              />
            </IconButton>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default BarraNav;
