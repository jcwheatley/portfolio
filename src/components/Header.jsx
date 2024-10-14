import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const drawerWidth = 240;
const navItems = ["Skills", "Projects", "Experience"];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        width: drawerWidth,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography variant='h6' sx={{ my: 2 }}>
        JAMES WHEATLEY
      </Typography>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleScroll(item.toLowerCase())}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ justifyContent: "center", mt: 2 }}
            onClick={() => handleScroll("contact")}
          >
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#CE7B65",
                color: "#fff",
                fontWeight: "bold", // Bold text
                borderRadius: "50px",
                "&:hover": { backgroundColor: "#B76558" },
              }}
            >
              Contact Me
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
      {/* Icons at the bottom of the drawer */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <IconButton
          component='a'
          href='https://github.com/your-profile'
          target='_blank'
          rel='noopener noreferrer'
          sx={{ color: "#000" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component='a'
          href='https://linkedin.com/in/your-profile'
          target='_blank'
          rel='noopener noreferrer'
          sx={{ color: "#0A66C2" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' component='nav' style={{ background: "#fff" }}>
        <Toolbar sx={{ position: "relative" }}>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000",
              textAlign: "left",
            }}
          >
            JAMES WHEATLEY
          </Typography>

          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "#000", ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                sx={{ color: "#000", ml: 2 }}
              >
                {item}
              </Button>
            ))}
            <Button
              variant='contained'
              onClick={() => handleScroll("contact")}
              sx={{
                backgroundColor: "#CE7B65",
                color: "#fff",
                fontWeight: "bold", // Bold text
                borderRadius: "50px",
                ml: 2,
                "&:hover": { backgroundColor: "#B76558" },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          anchor='right'
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
