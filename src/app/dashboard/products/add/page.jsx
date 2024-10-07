import { addProduct } from "@/app/lib/action";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Product Name" name="name" required />
        <select name="category" id="cat">
          <option value="general">Choose a Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home & garden">Home & Garden</option>
          <option value="health & beauty">Health & Beauty</option>
        </select>
        {/* <input type="text" placeholder="Category of Product" name="category" /> */}
        <input type="number" placeholder="Price" name="price" required />
        <input type="text" placeholder="Brand" name="brand" required />
        <input type="text" placeholder="Product Image URL" name="image" required />
        <textarea
          required
          name="description"
          id="description"
          rows="10"
          placeholder="Add a Description"
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
