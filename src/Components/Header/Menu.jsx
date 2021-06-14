import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";

import styles from "../../styles/Menu.module.css";

export function Menu() {
  return (
    <div>
      <IconContext.Provider value={{ size: "1.8rem" }}>
        <BiMenuAltRight />
      </IconContext.Provider>
      <div className={styles.Menu}>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="#features">Features</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <button>Home</button>
      </div>
    </div>
  );
}
