import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/allproducts/allproducts.module.css";
import Search from "@/app/ui/dashboard/search/search";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/action";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const products = await fetchProducts(q);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search products" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Image</td>
            <td>Product name</td>
            {/* <td>Description</td> */}
            <td>Price</td>
            <td>Category</td>
            <td>Brand</td>
            <td>Actions</td>
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
                  {product.name}
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
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
