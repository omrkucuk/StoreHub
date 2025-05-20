import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useCart } from "../contexts/CartContext";

export default function ProductDetail() {
  const product = useLoaderData();
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();

  console.log("Sepetteki ürünler: ", cartItems);

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: 500, padding: 2 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ height: 350, objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            {product.price} TL
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="warning"
            onClick={() => addToCart(product)}
          >
            Sepete Ekle
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Geri Dön
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
