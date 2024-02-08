import React from "react";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <p className={styles.title}>Привіт👋</p>
        <p>Мене звати Ярослав Усенко.</p>
        <p>Я люблю читати, програмувати, конструювати, рефлексувати та заробляти.</p>
        <p>Зараз несу смерть ворогам в 3 ОШБр.</p>
        <p>Тут буде мій сайт, але поки його немає.</p>
      </article>
    </main>
  );
}
