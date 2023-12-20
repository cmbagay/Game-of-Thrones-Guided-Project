import styles from "./Credit.module.css";

function Credit() {
  return (
    <div className={styles["Credit"]}>
      <a
        className={styles["Credit__text"]}
        href="https://anapioficeandfire.com/"
      >
        Powered by the anapioficeandfire by Joakim Skoog
      </a>
    </div>
  );
}

export default Credit;
