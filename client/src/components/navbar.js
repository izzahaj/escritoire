import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./searchBar";
import NavCreateButton from "./navCreateButton";

export default function Navbar({ children }) {
  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }
  
  return (
    <nav className={styles.main_navbar}>
      <Link href={"/"}>
        <p>Escritoire</p>
      </Link>
      <div className={styles.navbar}>
          <FontAwesomeIcon icon={faBars} className={styles.menu_icon} />
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
            <SearchBar />
          </li>
          <li>
            <NavCreateButton />
          </li>
          <li>
            <Link href={"#"}>
              Pr
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}