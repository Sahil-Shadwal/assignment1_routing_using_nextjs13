import Link from "next/link";
import styles from "./styles.module.css";
export default function page() {
  return (
    <main>
      <h1>ProjectList</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">Jobit</Link>
        </li>
        <li>
          <Link href="/projects/carrenr">Car rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hip Node</Link>
        </li>
      </ul>
    </main>
  );
}
