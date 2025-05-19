import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ p: 5, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Hakkımızda
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="700px"
        mx="auto"
      >
        StoreHub olarak, en kaliteli ürünleri en uygun fiyatlarla
        kullanıcılarımıza sunmayı hedefliyoruz. 2025 yılında kurulan sitemiz,
        güvenilir alışveriş deneyimi ve hızlı teslimat politikasıyla
        müşterilerimizin memnuniyetini ön planda tutar.
      </Typography>
    </Box>
  );
}
