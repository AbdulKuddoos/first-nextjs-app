import styles from "../styles/Home.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <Link href="/akdkdk" scroll={false}>
        <a>Disables scrolling to the top</a>
      </Link>
      <h1>Fast Web Applications are at your propsal...</h1>
      <Link href="/">
        <a style={{ color: "blue" }}>Back to Home</a>
      </Link>
    </div>
  );
};

export default About;
