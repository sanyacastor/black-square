import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Section from "./components/section";
import Form from "./components/form";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [formVisible, setFormVisible] = useState(false);
  return (
    <div className={styles.page}>
      <Head>
        <title>ООО "Черный Квадрат" | BLACK SQUARE CONSULTING</title>
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

          {!formVisible ? (
            <Section
              header="Разработаем научно-проектную документацию по:"
              list={[
                "обеспечению сохранности объекта культурного наследия",
                "перепланировке  помещения, расположенного в объекте культурного наследия",
                "ремонту объекта культурного наследия",
                "реставрации объекта культурного наследия",
                "приспособлению объекта культурного наследия для современного использования",
                "консервации объекта культурного наследия",
                "воссозданию объекта культурного наследия методом строительства",
              ]}
              action={() => setFormVisible(true)}
            ></Section>
          ) : (
            <Form />
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          ООО "Черный Квадрат" | Лицензия Министерства культуры Российской
          Федерации № МКРФ 21571 от 10 августа 2021 г.
        </p>
      </footer>
    </div>
  );
}
