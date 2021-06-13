import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Logo}>SmartWatch</h1>
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
