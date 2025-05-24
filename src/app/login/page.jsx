"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./loginpage.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
  if (status === "authenticated") {
    router.push("/");
  }
}, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      alert("Login failed: " + res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p>Only Authorised Person Can Log In on this Page</p>
        <form onSubmit={handleLogin} className={styles.wrapper}>
          <input
            type="text"
            placeholder="Email"
            className={styles.login}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.login}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.loginbtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;