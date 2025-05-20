import api from "../api";

export const registerUser = async (userData) => {
  const response = await api.post("users", userData);

  if (response.status === 200 || response.status === 201) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some((user) => user.username === userData.username);
    if (!exists) {
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
    }

    return response.data;
  } else {
    throw new Error("API Kayıt başarısız");
  }
};

export const loginUser = async (loginData) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const localUser = users.find(
    (user) =>
      user.username === loginData.username &&
      user.password === loginData.password
  );

  if (localUser) {
    const token = btoa(`${localUser.username}:${localUser.password}`);
    return { token, user: localUser };
  } else {
    const response = await api.post("auth/login", loginData);

    if (response.status === 200) {
      const { token } = response.data;

      localStorage.setItem("token", token);

      return response.data;
    } else {
      throw new Error("Giriş başarısız");
    }
  }
};
