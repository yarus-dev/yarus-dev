import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: "Помилка 404 - сторінка не знайдена",
  description: "Швидше за все, ця сторінка ніколи не існувала, або стала непотрібною і я її грохнув.",
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <p className={styles.title}>Йойк! Помилка 404 - сторінка не знайдена</p>
        <p>Швидше за все, ця сторінка ніколи не існувала, або стала непотрібною і я її грохнув.</p>
        <p>Так буває, не засмучуйтесь. <Link href="/">На головній</Link> є ще сторінки, не гірші за цю.</p>
        <p>Скаржитися сюди → <a href='mailto:yar.usenko.inc@gmail.com'>yar.usenko.inc@gmail.com</a></p>
      </article>
    </main>
  )
}






