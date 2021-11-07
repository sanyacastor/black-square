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
      <button onClick={() => action()} className={s.ctaButton}>
        🚧
        <svg viewBox='0 0 100 100' width='120' height='120'>
          <defs>
            <path
              id='circle'
              d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
            />
          </defs>
          <text font-size='10'>
            <textPath href='#circle'>
              Получить коммерческое предложение
            </textPath>
          </text>
        </svg>
      </button>
    </div>
  );
}
