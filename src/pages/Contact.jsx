import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ p: 5, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        İletişim
      </Typography>

      <TextField label="Ad Soyad" fullWidth margin="normal" />
      <TextField label="E-posta" fullWidth margin="normal" />
      <TextField
        label="Mesajınız"
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Gönder
      </Button>
    </Box>
  );
}
