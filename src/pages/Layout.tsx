import { Outlet, Link } from "react-router-dom";
import styles from "../styles/LayoutStyles.module.css";

const Layout = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navigation}>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
        </nav>
      </div>

      <div className={styles.children}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
