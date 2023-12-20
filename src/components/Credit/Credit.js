import styles from "./Credit.module.css";

function Credit() {
  return (
    <div className={styles["Credit"]}>
      <span className={styles["Credit__text"]}>
        Powered by the An API of Ice and Fire by Joakim Skoog
      </span>
    </div>
  );
}

export default Credit;
