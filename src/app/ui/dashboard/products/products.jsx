import { fetchProducts } from "@/app/lib/data";
import styles from "./products.module.css";
import Image from "next/image";

const Products = async () => {

  const products = await fetchProducts();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Image</td>
            <td>Product name</td>
            {/* <td>Description</td> */}
            <td>Price</td>
            <td>Category</td>
            <td>Brand</td>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={product.image}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                </div>
              </td>
              <td>
                <span>{product.name}</span>
              </td>
              <td>
                <span>{`₹${product.price} `}</span>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  {product.category}
                </span>
              </td>
              <td>{product.brand}</td>
              {/* <td>
                <form action={deleteProduct}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <input type="hidden" name="id" value={product.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
