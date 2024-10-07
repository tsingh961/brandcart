import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Products from "../ui/dashboard/products/products";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import { fetchBrands } from "../lib/data";

const Dashboard = async () => {
  const brands = await fetchBrands();
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
        {brands.map((brand) => (
          <Card key={brand.id} item={{ title: `${brand.name}`, description: `${brand.description}`, logo: `${brand.logo}`}} />
        ))}
        </div>

        <Products/>
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
