import style from "../styles/About.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";

const User = () => {

  const [userName, setUserName] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    setItem(localStorage.getItem("token"));
    fetchContent();
  }, []);

  async function fetchContent() {
    const res = await fetch("http://localhost:8080/secured/user", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });

    if (res.ok) {
      const json = await res.text();
      setUserName(json);
    }
  }

  return (
    <>
      <Head>
        <title>USER</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.containerSign}>
        <div className={style.form}>
          {
            item != null ?
              <p>Signed in as: {userName}</p>
              :
              <p>UNAUTHORIZED</p>
          }
        </div>
      </div>
    </>
  );
};

export default User;