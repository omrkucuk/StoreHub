import api from "../api";

const getAllProducts = async () => {
  const response = await api.get("products");
  return response.data;
};

export const productsLoader = async () => {
  try {
    const data = await getAllProducts();
    return data;
  } catch (err) {
    throw new Response("Ürünler Yüklenmedi", { status: 500 }, err);
  }
};
