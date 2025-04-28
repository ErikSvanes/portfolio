import { Outlet, Link } from "react-router-dom";
import styles from "../styles/LayoutStyles.module.css";

const Layout = () => {
  return (
    <div className={styles.body}>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <div className={styles.children}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
