import Head from "next/head";
import Link from "next/link";

import { useRef, useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const cursor = useRef(null);
  const [mousePos, setMousePos] = useState([500, 500]);

  return (
    <div
      className={styles.container}
      onMouseMove={(e) => {
        setMousePos([e.clientX, e.clientY]);
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.logo}>
            <div className={styles.square}></div>
            <h1 className={styles.title}>Black square consulting</h1>
            <p className={styles.lead}>
              Консультируем по вопросам владения, содержания, ремонта и
              реставрации объектов культурного наследия, памятников истории и
              культуры народов Российской Федерации.
            </p>
          </div>
          <div
            className={styles.sectionItem}
            onMouseOver={() => {
              cursor.current.style.backgroundColor = "transparent";
              cursor.current.style.width = "50px";
              cursor.current.style.height = "50px";
            }}
            onMouseLeave={() => {
              cursor.current.style.backgroundColor = "#000";
              cursor.current.style.width = "30px";
              cursor.current.style.height = "30px";
            }}
          >
            <span
              onMouseOver={() => {
                cursor.current.style.borderColor = "blue";
                cursor.current.style.borderWidth = "1px";
              }}
              onMouseLeave={() => {
                cursor.current.style.borderColor = "#000";
                cursor.current.style.borderWidth = "4px";
              }}
            >
              <Link href="/userPage">Пользователю</Link>
            </span>
          </div>
          <div className={styles.sectionItem}>
            <Link
              onMouseOver={() => {
                cursor.current.style.backgroundColor = "transparent";
                cursor.current.style.width = "50px";
                cursor.current.style.height = "50px";
              }}
              onMouseLeave={() => {
                cursor.current.style.backgroundColor = "#000";
                cursor.current.style.borderRadius = "0";
                cursor.current.style.width = "30px";
                cursor.current.style.height = "30px";
              }}
              href="/customerPage"
            >
              Заказчику
            </Link>
          </div>
          <div className={styles.sectionItem}>
            <Link
              onMouseOver={() => {
                cursor.current.style.backgroundColor = "transparent";
                cursor.current.style.width = "50px";
                cursor.current.style.height = "50px";
              }}
              onMouseLeave={() => {
                cursor.current.style.backgroundColor = "#000";
                cursor.current.style.borderRadius = "0";
                cursor.current.style.width = "30px";
                cursor.current.style.height = "30px";
              }}
              href="/contractorPage"
            >
              Подрядчику
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          designed and code by Sanya 3000
        </a>
      </footer>
      <div
        ref={cursor}
        className={styles.cursor}
        style={{ top: mousePos[1], left: mousePos[0] }}
      ></div>
    </div>
  );
}
