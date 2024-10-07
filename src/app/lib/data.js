import { connectToDB } from "./utils";

const { Brand, Product, User } = require("./models");

export const fetchBrands = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const brands = await Brand.find({ name: { $regex: regex } });
    return brands;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch products");
  }
};

export const fetchProducts = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const products = await Product.find({ name: { $regex: regex } });
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch products");
  }
};

export const fetchBrand = async (id) => {
  try {
    connectToDB();
    const brand = await Brand.findById(id);
    return brand;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch brand");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch product");
  }
};
