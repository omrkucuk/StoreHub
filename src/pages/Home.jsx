import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import api from "../api";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products?limit=4").then((res) => setProducts(res.data));
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          padding: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          StoreHub'a Hoş Geldin!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Binlerce ürünü uygun fiyatlarla keşfet!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
          component={Link}
          to="/products"
        >
          Ürünleri İncele
        </Button>
      </Box>

      <Typography variant="h4" textAlign="center" mt={5}>
        Popüler Ürünler
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={3}
        px={2}
      >
        {products.map((item) => (
          <Card key={item.id} sx={{ width: 300 }}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ height: 200, objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h6">{item.price} TL</Typography>
            </CardContent>
            <Button
              component={Link}
              to={`/products/${item.id}`}
              variant="outlined"
              sx={{ m: 1 }}
            >
              Detaya Git
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
