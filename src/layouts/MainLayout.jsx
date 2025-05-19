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
    <AppBar sx={{ backgroundColor: "#212121" }}>
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
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={1} color="warning">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              Giriş Yap
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
