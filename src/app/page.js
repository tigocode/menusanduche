'use client';
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import styles from './page.module.css';
import Menu from '@/components/Menu';

export default function Home() {
  const [ menuAberto, setMenuAberto ] = useState(false);

  function atualizarMenu() {
    setMenuAberto(!menuAberto);
  };

  return (
    <main className={styles.container}>
     <header className={styles.topo}>
      <button className={styles.botao} onClick={atualizarMenu}>
        { menuAberto ? <CgClose />: <CiMenuBurger /> }
      </button>
      { menuAberto && ( <Menu /> ) }
     </header>
    </main>
  );
}
