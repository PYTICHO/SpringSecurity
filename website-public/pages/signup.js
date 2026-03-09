import style from "../styles/About.module.css";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";


export default function SignUp() {
    const router = useRouter()

    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    })

    async function handle() {
        const res = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.ok) {
            alert("success, baby")
            router.push("/signin")
        }
    }

    return (
      <>
        <Head>
          <title>Sign up</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className={style.containerSign}>
          <div className={style.form}>
            <h1>Sign up</h1>
  
            <div>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={state.username}
                onChange={handle}
                autoComplete="off"
              />
            </div>
  
            <div>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handle}
                autoComplete="off"
              />
            </div>
  
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={state.password}
                onChange={handle}
              />
            </div>
  
            <button onClick={handle}>Submit</button>
          </div>
        </div>
      </>
    )
  }