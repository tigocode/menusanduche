'use client';
import { useState } from 'react';
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
        { menuAberto ? 'Fechar Menu': 'Abrir Menu' }
      </button>
      { menuAberto && ( <Menu /> ) }
     </header>
    </main>
  );
}
