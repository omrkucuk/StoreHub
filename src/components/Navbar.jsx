import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Badge,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#212121" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              StoreHub
            </Typography>

            <Button component={Link} to="/" sx={{ color: "white" }}>
              Ana Sayfa
            </Button>
            <Button component={Link} to="/products" sx={{ color: "white" }}>
              Ürünler
            </Button>
            <Button component={Link} to="/about" sx={{ color: "white" }}>
              Hakkında
            </Button>
            <Button component={Link} to="/contact" sx={{ color: "white" }}>
              İletişim
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={1} color="warning">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            <Button
              component={Link}
              to="/register"
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              Kayıt Ol
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
