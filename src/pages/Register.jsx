import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Bu alan zorunludur")
    .min(3, "En az 3 karakter"),
  email: yup
    .string()
    .required("Email zoruludur")
    .email("Geçerli bir email giriniz"),
  password: yup
    .string()
    .required("Şifre zorunludur")
    .min(6, "En az 6 karakter"),
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

  const onSubmit = (data) => {
    console.log("Kayıt Bilgileri:", data);
    navigate("/auth/login");
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
          />

          <TextField
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Şifre"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button variant="contained" color="primary" type="submit">
            Kayıt Ol
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
