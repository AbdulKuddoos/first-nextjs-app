import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ todos }) {
  return (
    <div className={styles.container}>
      <h1>Code With Kudos</h1>

      <p>Abdul Quddous Software Engineer here</p>

      <p>
        To get quote hit at{" "}
        <a style={{ color: "blue" }} href="mailto:quddoux112@gmail.com">
          quddoux112@gmail.com
        </a>
      </p>

      <Link href="/about">
        <a style={{ color: "blue" }}>Web Applications</a>
      </Link>

      <h2>
        Todos fetched from{" "}
        <a
          style={{ color: "blue" }}
          href="https://jsonplaceholder.typicode.com/todos"
        >
          https://jsonplaceholder.typicode.com/todos
        </a>
      </h2>

      {todos.map(({ id, completed, title }) => (
        <div key={id}>
          <p>title: {title}</p>
          <p>completed: {completed.toString()}</p>
          <div
            style={{
              backgroundColor: "black",
              height: "1px",
              width: "50%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return { props: { todos } };
}
