import styles from "../../styles/Header.module.css";
import { Menu } from "./Menu";
export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <h1 className={styles.Logo}>SmartWatch</h1>
        <Menu />
      </header>
    </>
  );
}
