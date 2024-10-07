"use server";
import { revalidatePath } from "next/cache";
import { Brand, Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { fullname, email, password } = Object.fromEntries(formData);
  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ fullname, email, password: hashedPassword });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create user");
  }
};

export const addBrand = async (formData) => {
  const { name, description, logo } = Object.fromEntries(formData);
  try {
    connectToDB();
    const newBrand = new Brand({ name, description, logo });
    await newBrand.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create brand");
  }

  revalidatePath("/dashboard/brands");
  redirect("/dashboard/brands");
};

export const addProduct = async (formData) => {
  const { name, description, price, category, image, brand } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image,
      brand,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteBrand = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Brand.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete brand");
  }

  revalidatePath("/dashboard/brands");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete product");
  }

  revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, name, description, price, category, image, brand } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateFields = {
      id,
      name,
      description,
      price,
      category,
      image,
      brand,
    };
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || undefined) {
        delete updateFields[key];
      }
    });
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateBrand = async (formData) => {
  const { id, name, description, logo } = Object.fromEntries(formData);
  try {
    connectToDB();
    const updateFields = { id, name, description, logo };
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || undefined) {
        delete updateFields[key];
      }
    });
    await Brand.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("failed to update brands");
  }
  revalidatePath("/dashboard/brands");
  redirect("/dashboard/brands");
};

export const authenticate = async (formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log(error);
    throw new Error("failed to authenticate");
  }
};
