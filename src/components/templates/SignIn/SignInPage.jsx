"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

import styles from "./SignInPage.module.css";
import Link from "next/link";
import Loader from "@/elements/Loader/Loader";

const SignInPage = () => {
  // ============= Router ============
  const router = useRouter();

  // ============= State ============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ============= Function ============
  const signUpHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (response.error) toast.error(response.error);
    else router.push("/richeditor");
  };

  // ============= Rendering ============
  return (
    <div className={styles.form}>
      <Toaster />
      <h4>Login</h4>
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
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signUpHandler}>
            Login
          </button>
        )}
      </form>
      <p>
        Dont have Acount<Link href={"/signup"}>Signup</Link>
      </p>
    </div>
  );
};

export default SignInPage;
