import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container } from "@mui/material";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Container maxWidth="xxl" sx={{ flex: 1, mt: 12, mb: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
