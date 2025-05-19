import React from "react";
import { Box, Container, Typography, Stack, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#212121", color: "white", py: 3, mt: 5 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={2}
        >
          <Typography variant="h6">StoreHub</Typography>

          <Typography variant="body2">
            © {new Date().getFullYear()} StoreHub. Tüm hakları saklıdır.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
