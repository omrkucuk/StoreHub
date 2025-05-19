import api from "../api";

const getAllProducts = async () => {
  const response = await api.get("products");
  return response.data;
};

const getProductById = async (id) => {
  const response = await api.get(`products/${id}`);
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

export const productDetailLoader = async ({ params }) => {
  try {
    const data = await getProductById(params.id);
    return data;
  } catch (error) {
    console.log("Tek ürün loader hatası:", error);
    throw new Response("Ürün bulunamadı:", { status: 404 });
  }
};
