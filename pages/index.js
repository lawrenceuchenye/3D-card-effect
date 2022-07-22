import styles from  "../styles/Index.module.css";
import NickCard from "../components/NickCard";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <NickCard />
    </div>
  )
}
