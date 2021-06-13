import styles from "../../styles/Features.module.css";
import { Card } from "./Card";

export default function Features() {
  const data = [
    {
      icon: "fas fa-crosshairs fa-2x",
      title: "Interactive Design",
      body: "Proin hendrerit nisi augue. Aenean sed accumsan augue."
    },
    {
      icon: "fas fa-network-wired fa-2x",
      title: "Latest Tecnology",
      body: "Proin hendrerit nisi augue. Aenean sed accumsan augue."
    },
    {
      icon: "fas fa-user-tie fa-2x",
      title: "User Friendly",
      body: "Proin hendrerit nisi augue. Aenean sed accumsan augue."
    },
    {
      icon: "fas fa-lock fa-2x",
      title: "High Security",
      body: "Proin hendrerit nisi augue. Aenean sed accumsan augue."
    },
    {
      icon: "fab fa-android fa-2x",
      title: "Install Apps",
      body: "Proin hendrerit nisi augue. Aenean sed accumsan augue."
    },
    {
      icon: "fas fa-route fa-2x",
      title: "GPS Tracking",
      body: "Proin hendrerit nisi augue. Aenean sed accumsan augue."
    }
  ];

  return (
    <div id="features" className={styles.Features}>
      <h3>Product Features</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className={styles.FeaturesCards}>
        {data.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
    </div>
  );
}
