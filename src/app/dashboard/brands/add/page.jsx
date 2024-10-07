// import { addProduct } from "@/app/lib/actions";
import { addBrand } from "@/app/lib/action";
import styles from "@/app/ui/dashboard/brands/addBrand/addBrand.module.css";

const AddBrandPage = () => {
  return (
    <div className={styles.container}>
      <form  action={addBrand} enctype="multipart/form-data" className={styles.form}>
        <input required type="text" placeholder="Brand Name" name="name" />
        <input required type="text" name="logo" placeholder="Brand Logo URL" />
        <textarea
          required
          name="description"
          id="desc"
          rows="10"
          placeholder="Add a Description"
        ></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBrandPage;
