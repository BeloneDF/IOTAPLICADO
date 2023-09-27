"use client";

import styles from "./page.module.css";
import { CardComponent } from '../components/card/card.index';

export default function Home() {

  return (
    <main className={styles.main} style={{display:'flex', justifyContent:'space-around', flexDirection:'column'}}>
     <CardComponent/>
    </main>
  );
}
