import styles from "../styles/Home.module.css";
import Header from "../pages/header";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
