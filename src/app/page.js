'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [ menuAberto, setMenuAberto ] = useState(false);

  function atualizarMenu() {
    setMenuAberto(!menuAberto);
  };

  return (
    <main className={styles.container}>
     <header>
      <button onClick={atualizarMenu}>
        { menuAberto ? 'Fechar Menu': 'Abrir Menu' }
      </button>
     </header>
    </main>
  );
}
