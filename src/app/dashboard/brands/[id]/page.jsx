import { updateBrand } from "@/app/lib/action";
import { fetchBrand } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/brands/singleBrand/singleBrand.module.css";
import Image from "next/image";

const SingleBrandPage = async ({ params }) => {
  
  const {id} = params;
  const brand = await fetchBrand(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={brand.logo} alt="" fill />
        </div>
        {brand.name}
      </div>
      <div className={styles.formContainer}>
        <form action={updateBrand} className={styles.form}>
          <input type="hidden" name="id" value={brand.id}/>
          <label>Brand Name</label>
          <input type="text" name="name" placeholder={brand.name} />
          <label>Brand Description</label>
          <textarea type="text" name="description" placeholder={brand.description} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBrandPage;
