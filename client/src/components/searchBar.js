import styles from '../styles/SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function SearchBar({ children }) {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  }

  return (
    <div className={showSearch ? styles.input_box_show : styles.input_box}>
      <input type="text" placeholder="Search..."/>
      <div className={styles.search_button} onClick={toggleSearchBar}>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </div>
    </div>
  );
}