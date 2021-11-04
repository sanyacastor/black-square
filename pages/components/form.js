import React from "react";
import s from "../../styles/form.module.css";

export default function form({ action }) {
  return (
    <div className={s.formContainer}>
      <button onClick={() => action()}>назад</button>
      <form
        className={s.form}
        name="demand"
        method="POST"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="form-name" value="demand" />

        <h2>Заполните форму:</h2>
        <label>
          <input type="text" name="username" placeholder="Имя"></input>
        </label>
        <label>
          <input
            type="text"
            name="phone"
            placeholder="Телефон для связи"
          ></input>
        </label>
        <label>
          <input type="text" name="email" placeholder="Почта"></input>
        </label>
        <label>
          <input type="text" name="address" placeholder="Адрес объекта"></input>
        </label>
        <label>
          Статус объекта:
          <span className={s.spacer}></span>
          <select name="status">
            <option value="identified">выявленный</option>
            <option value="regional">региональный</option>
            <option value="federal">федеральный</option>
          </select>
        </label>
        <label>
          <input
            type="text"
            name="registry_name"
            placeholder="Наименование объекта"
          ></input>
        </label>
        <small>
          (по единому государственный реестру объектов культурного наследия
          народов РФ)
        </small>
        <label>
          <input
            type="text"
            name="square"
            placeholder="Проектируемая площадь"
          ></input>
        </label>
        <label>
          <input
            type="text"
            name="security_status"
            placeholder="Информация о наличии предмета охраны"
          ></input>
        </label>
        <small>
          (акт технического состояния, предписания органа охраны памятников)
        </small>
        <textarea
          type="text"
          rows="4"
          name="description"
          placeholder="Описание планируемых работ"
        ></textarea>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
