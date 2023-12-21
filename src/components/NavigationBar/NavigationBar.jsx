import { Link } from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/character?page=1&pageSize=10">Characters</Link></li>
      <li><Link to="/houses?page=1&pageSize=10">Houses</Link></li>
    </ul>
  );
}

export default NavigationBar;
