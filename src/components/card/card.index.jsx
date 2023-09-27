"use client";
import { Card, CardContainer } from "./card.styled";
import axios from "axios";
import { useEffect, useState } from "react";

export const CardComponent = ({}) => {
  const [data, setData] = useState([]);

  async function get() {
    let cancelToken = axios.CancelToken.source();

    axios
      .get("https://iotaplicado.vercel.app/lamp", {
        cancelToken: cancelToken.token,
      })
      .then((response) => {
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

  async function put(id, on) {
    let cancelToken = axios.CancelToken.source();

    axios
      .post(`https://iotaplicado-nu53x72z9-belonedf.vercel.app/lamp/${id}`, {
        on: !on,
      })
      .then((response) => {
        console.log("Mudou");
        get();
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

  return (
    <CardContainer>
      {data.map((item) => (
        <Card
          key={item.id}
          onClick={() => put(item.id, item.on)}
          teste={item.on}
        >
          {item.nome}
          {item.on}
        </Card>
      ))}
    </CardContainer>
  );
};
