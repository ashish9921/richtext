"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./SignUpPage.module.css";
import Link from "next/link";

const SignUpPage = () => {
  // ============= Router ============
  const router = useRouter();

  // ============= State ============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ============= Function ============
  const signUpHandler = async (event) => {
    event.preventDefault();
    if (password !== rePassword) {
      toast.error("password not match");
      return;
    }
    setLoading(true);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setLoading(false);
    if (response.status === 201) router.push("/signin");
    else toast.error(data.error);
  };

  // ============= Rendering ============
  return (
    <div className={styles.form}>
      <Toaster />
      <h4>Signup</h4>
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="rePassword">Repassword</label>
        <input
          id="rePassword"
          type="password"
          value={rePassword}
          onChange={(event) => setRePassword(event.target.value)}
        />
        {
          <button type="submit" onClick={signUpHandler}>
            submit
          </button>
        }
      </form>
      <p>
        have an Account<Link href={"/signin"}>Signin</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
