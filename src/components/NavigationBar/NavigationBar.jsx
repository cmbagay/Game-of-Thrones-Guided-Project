import { Link } from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/character">Characters</Link></li>
      <li><Link to="/houses">Houses</Link></li>
    </ul>
  );
}

export default NavigationBar;
