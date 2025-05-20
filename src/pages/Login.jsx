import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import * as yup from "yup";

export default function Login() {
  const loginSchema = yup.object({
    username: yup.string().required("Kullanıcı adı zorunlu"),
    password: yup.string().required("Şifre zorunlu"),
  });

  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await loginUser(data);
      console.log("Login Success:", result);
      localStorage.setItem("token", result.token);
      setOpen(true);
      setLoginError("");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: 5,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        Giriş Yap
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
            label="Şifre"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained">
            Giriş Yap
          </Button>
        </Stack>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">Giriş Başarılı!</Alert>
      </Snackbar>
      {loginError && (
        <Typography color="error" mt={2}>
          {loginError}
        </Typography>
      )}
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={2}
      >
        <Typography>Hesabın yok mu ?</Typography>
        <Button onClick={() => navigate("/auth/register")}>Kayıt Ol</Button>
      </Box>
    </Box>
  );
}
