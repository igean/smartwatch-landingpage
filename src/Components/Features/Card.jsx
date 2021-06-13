import styles from "../../styles/Card.module.css";

export function Card({ icon, title, body }) {
  return (
    <div className={styles.Card}>
      <i className={icon} />
      <div className={styles.CardBody}>
        <strong>{title}</strong>
        <p>{body}</p>
      </div>
    </div>
  );
}
