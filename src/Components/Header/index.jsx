import styles from "../../styles/Header.module.css";
import { BiMenuAltRight } from "react-icons/bi";
export default function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Logo}>SmartWatch</h1>
      <BiMenuAltRight id={styles.MenuIcon} />
      <div className={styles.Menu}>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="#features">Features</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <button>Home</button>
      </div>
    </header>
  );
}
