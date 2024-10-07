import Card from "@/app/ui/dashboard/card/card";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/brands/brands.module.css";
import Link from "next/link";
import { fetchBrands } from "@/app/lib/data";
import { deleteBrand } from "@/app/lib/action";

const BrandsPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const brands = await fetchBrands(q);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search brands" />
        <Link href="/dashboard/brands/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      {brands.map((brand) => (
      <div key={brand.id} className={styles.wrapper}>
        <Card item={{ title: `${brand.name}`, description: `${brand.description}`, logo: `${brand.logo}`}} />
        <form className={styles.formpage} action={deleteBrand}>
        <Link href={`/dashboard/brands/${brand.id}`}>
          <button className={`${styles.button} ${styles.view}`}>View</button>
        </Link>
          <input type="hidden" name="id" value={brand.id} />
          <button className={`${styles.button} ${styles.delete}`}>
            Delete
          </button>
        </form>
      </div>
      ))}
    </div>
  );
};

export default BrandsPage;
