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
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const products = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Product</h2>
      <Box
        display="flex"
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={4}
        padding={3}
      >
        {products.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: 400,
              height: 550,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 1,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 8,
                transform: "scale(1.03)",
              },
            }}
          >
            <CardMedia
              image={item.image}
              component="img"
              sx={{ height: 300, objectFit: "contain" }}
            />
            <CardContent>
              <Typography component={"div"} variant="h6">
                {item.title}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
              <Button
                variant="outlined"
                color="warning"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                Ürünü İncele
              </Button>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"row"}
                gap={1}
              >
                <Typography>{item.price} TL</Typography>
                <Button size="medium">Sepete Ekle</Button>
              </Stack>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}
