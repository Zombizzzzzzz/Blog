import Featured from "@/components/Featured/Featured";
import styles from "./homepage.module.css";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/Menu/Menu";
import Paginaton from "@/components/Pagination/Pagination";
import Category from "@/components/Catogory/Category";

export default function Home() {
  return (
    <div className={styles.upperPortion}>
      <Featured />
      <Category />
      <div className={styles.content}>
        <CardList />

        <Paginaton />
      </div>
    </div>
  );
}
