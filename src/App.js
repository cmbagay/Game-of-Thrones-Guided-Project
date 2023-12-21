import styles from "./App.module.css";

import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Credit from "./components/Credit/Credit";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles["app"]}>
          <header className={styles["app__header"]}>
            <NavigationBar />
          </header>

          <main className={styles["app__main"]}>
            <AppRoute />
            <Pagination page={1} pageSize={10} />
          </main>

          <footer className={styles["app__footer"]}>
            <Credit />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
