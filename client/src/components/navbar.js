import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function Navbar({ children }) {
  return (
    <nav className={styles.main_navbar}>
      <Link href={"/"}>
        <h3>Escritoire</h3>
      </Link>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href={"#"}>
              Explore
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Workspace
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Library
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"#"}>
              Search
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Create
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}