import { updateProduct } from "@/app/lib/action";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.image} alt="" fill />
        </div>
        {product.name}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id}/>
          <label>Product Name</label>
          <input type="text" name="name" placeholder={product.name} />
          <label>Brand</label>
          <input type="text" name="brand" placeholder={product.brand} />
          <label>Product price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Category</label>
          <input type="text" name="category" placeholder={product.category} />
          <label>Product Description</label>
          <textarea type="text" name="description" placeholder={product.description} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
