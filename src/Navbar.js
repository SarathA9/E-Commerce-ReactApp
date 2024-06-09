import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Logo from "./components/assets/logo.png";  

const pages = [
  { title: "Home", path: "/" },
  { title: "Category", path: "/Category" },
  { title: "Products", path: "/Products" },
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250, fontFamily: "Rajdhani" }} // Added fontFamily here
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem button key={page.title} component={Link} to={page.path}>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#09824b" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Box */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img src={Logo} alt="Logo" style={{ height: "60px", width: "auto" }} />
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />

          {/* Menu items for large screens */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page?.title} to={page?.path} style={{ textDecoration: "none" }}>
                <Button
                  onClick={toggleDrawer(false)}
                  sx={{ my: 2, color: "white", display: "block", fontFamily: "Rajdhani" }}
                >
                  {page?.title}
                </Button>
              </Link>
            ))}
          </Box>
          
          {/* Drawer for small screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerList}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
