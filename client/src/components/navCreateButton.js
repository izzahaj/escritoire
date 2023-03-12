import styles from '../styles/NavCreateButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function NavCreateButton({ children }) {
  return (
    <div className={styles.create_button}>
      <FontAwesomeIcon icon={faPlus}/>
    </div>
  );
}
          