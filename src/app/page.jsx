import Navbar from "./ui/dashboard/navbar/navbar";
import Sidebar from "./ui/dashboard/sidebar/sidebar";
import styles from "./ui/dashboard/dashboard.module.css";
import Dashboard from "./dashboard/page";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        <Dashboard/>
      </div>
    </div>
  );
};

export default Layout;
