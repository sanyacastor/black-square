import Head from "next/head";
import { useState } from "react";

import Section from "./components/section";
import Form from "./components/form";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [formVisible, setFormVisible] = useState(false);
  return (
    <div className={styles.page}>
      <Head>
        <title>ООО "Черный Квадрат" | Помогаем сохранить историю </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.logo}>
            <div className={styles.square}></div>
            <h1 className={styles.title}>Черный квадрат</h1>
            <p className={styles.lead}>
              Научно-проектные работы по сохранению объектов культурного
              наследия (памятников истории и культуры) народов Российской
              Федерации.
            </p>
          </div>
          <Section
            header='Разрабатываем научно-проектную документацию по объектам культурного наследия:'
            list={[
              "Обеспечение сохранности",
              "Ремонт и реставрация",
              "Перепланировка жилого помещения",
              "Приспособление для современного использования",
              "Консервация",
              "Воссоздание методом строительства"
            ]}
            action={() => setFormVisible(true)}
          ></Section>
          <div
            className={
              formVisible
                ? `${styles.form__visible + " " + styles.form_}`
                : `${styles.form__hidden + " " + styles.form_}`
            }
          >
            <Form action={() => setFormVisible(false)} />
          </div>
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
