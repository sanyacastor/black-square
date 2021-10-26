import React from "react";
import s from "../../styles/section.module.css";

export default function Section({ header, list, action }) {
  return (
    <div className={s.section}>
      <h2 className={s.title}>{header}</h2>
      <ul className={s.list}>
        {list &&
          list.map((el) => {
            return <li>{el}</li>;
          })}
      </ul>
      <button onClick={() => action()}>
        Получить коммерческое предложение
      </button>
    </div>
  );
}
