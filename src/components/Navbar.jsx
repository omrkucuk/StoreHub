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
  Stack,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#212121", padding: 2 }}>
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

            <Stack direction="row" spacing={2}>
              {token ? (
                <Button color="inherit" onClick={handleLogout}>
                  Çıkış Yap
                </Button>
              ) : (
                <>
                  <Button color="inherit" component={Link} to="/auth/login">
                    Giriş Yap
                  </Button>
                  <Button color="inherit" component={Link} to="/auth/register">
                    Kayıt Ol
                  </Button>
                </>
              )}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
