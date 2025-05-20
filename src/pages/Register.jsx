import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Box,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";

const schema = yup.object().shape({
  username: yup.string().required("Bu alan zorunlu").min(3, "En az 3 karakter"),
  email: yup
    .string()
    .required("Email zorunlu")
    .email("Geçerli bir email girin"),
  password: yup.string().required("Şifre zorunlu").min(6, "En az 6 karakter"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      const result = await registerUser(data);
      console.log("Kayıt Başarılı", result);
      setOpen(true);

      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    } catch (error) {
      console.error("Kayıt hatası", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box maxWidth={400} mx="auto" mt={4} p={3} boxShadow={3} borderRadius={2}>
      <Typography variant="h5" mb={2}>
        Kayıt Ol
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="Kullanıcı Adı"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            name="username"
          />

          <TextField
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            name="email"
          />

          <TextField
            label="Şifre"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            name="password"
          />

          <Button variant="contained" color="primary" type="submit">
            Kayıt Ol
          </Button>
        </Stack>
      </form>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success" variant="filled" onClose={handleClose}>
          Kayıt başarılı! Yönlendiriliyorsunuz...
        </Alert>
      </Snackbar>

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={2}
      >
        <Typography>Hesabın var mı ?</Typography>
        <Button onClick={() => navigate("/auth/login")}>Giriş Yap</Button>
      </Box>
    </Box>
  );
}
