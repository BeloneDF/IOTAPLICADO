"use client";

import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  async function get() {
    let cancelToken = axios.CancelToken.source();

    axios
      .get("https://iotaplicado.vercel.app/lamp", {
        cancelToken: cancelToken.token,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Cancelado");
        } else {
          console.log(error);
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }

  useEffect(() => {
    get();
  }, []);

  return <main className={styles.main}>{
    data.map((item) => (
      <div key={item.id}>
        <h1>{item.id}</h1>
        <p>{item.on}</p>
        <p>{item.on}</p>
      </div>
    ))
  }</main>;
}
