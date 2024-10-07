// import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ item }) => {
  
  return (
    <div className={styles.container}>
      {/* <MdSupervisedUserCircle size={24} /> */}
      <Image src={item.logo} alt={item.title} width={100} height={100}/>
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>        
        <span className={styles.detail}>
          {item.description}
        </span>
        
      </div>
    </div>
  );
};

export default Card;
