import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";

import styles from "../../styles/Menu.module.css";
import { useState } from "react";

export function Menu() {
  const open_value = "-200%";

  const [menu_state, setMenuState] = useState(open_value);

  const handleMenuClick = () => {
    if (menu_state === "-200%") {
      setMenuState("0");
    } else {
      setMenuState("-200%");
    }
  };

  return (
    <div>
      <IconContext.Provider value={{ size: "1.8rem" }}>
        <BiMenuAltRight onClick={handleMenuClick} />
      </IconContext.Provider>
      <div
        className={styles.Menu}
        style={{
          transform: `translateY(${menu_state})`
        }}
      >
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
