import React from "react";
import { useCart } from "../contexts/CartContext";
import { Box, Button, Drawer, Typography } from "@mui/material";

export default function CartDrawer({ open, onClose }) {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    decreaseQuantity,
  } = useCart();
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, padding: 2 }}>
        <Typography variant="h5">Sepet ({totalItems})</Typography>
        {cartItems.length === 0 ? (
          <Typography>Sepetiniz Boş</Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{ marginY: 2, borderBottom: "1px solid #ddd" }}
              >
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography>Adet: {item.quantity}</Typography>
                <Typography>Fiyat: {item.price}</Typography>
                <Button
                  color="primary"
                  onClick={() => decreaseQuantity(item.id)}
                  sx={{ marginRight: 1 }}
                >
                  -
                </Button>
                <Button
                  variant="text"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Sil
                </Button>
              </Box>
            ))}

            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Toplam: {totalPrice.toFixed(2)} TL
            </Typography>

            <Button
              variant="contained"
              color="error"
              onClick={() => {
                clearCart();
              }}
              sx={{ marginTop: 2 }}
              fullWidth
            >
              Sepeti Temizle
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
}
