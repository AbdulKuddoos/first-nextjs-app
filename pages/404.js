import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 3000);
  });
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <p>Page Not Found🙂 But Don't Worry, Next is here to help you</p>
    </div>
  );
};

export default ErrorPage;
