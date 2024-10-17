"use client";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { auth } from "../lib/firebase";

function Login({ closeModal }: { closeModal: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginWithEmail, setLoginWithEmail] = useState(false);

  const [type, setType] = useState<"login" | "signup">("login");

  /* eslint-disable @typescript-eslint/no-explicit-any  */
  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    try {
      let userCredential: UserCredential;

      if (type === "login") {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      console.log(userCredential);

      closeModal();
    } catch (error: any) {
      const errorMessage = error.message;
      const errorCode = error.code;

      switch (errorCode) {
        case "auth/invalid-email":
          setError("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setError("This email address is disabled by the administrator.");
          break;
        case "auth/user-not-found":
          setError("This email address is not registered.");
          break;
        case "auth/wrong-password":
          setError(
            "The password is invalid or the user does not have a password."
          );
          break;
        default:
          setError(errorMessage);
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  /* eslint-disable @typescript-eslint/no-explicit-any  */
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      closeModal();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col z-30">
      <h1 className="text-[48px] font-light text-center font-syne mb-1">
        {type === "login" ? "Log In" : "Sign Up"}
      </h1>

      {type === "login" && (
        <p className="text-lg text-center">
          New to this site?{" "}
          <button
            type="button"
            onClick={() => setType("signup")}
            className="hover:scale-110 transition-all duration-200 ease-in-out text-primary font-light ml-1"
          >
            Sign Up
          </button>
        </p>
      )}

      {type === "signup" && (
        <p className="text-lg text-center">
          Already a Member?{" "}
          <button
            type="button"
            onClick={() => setType("login")}
            className="hover:scale-110 transition-all duration-200 ease-in-out text-primary font-light ml-1"
          >
            Log In
          </button>
        </p>
      )}

      {!loginWithEmail && (
        <div>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-between bg-white py-3 px-4 w-full text-black mt-5"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="-3 0 262 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            {type === "login" ? "Login" : "Signup"} with Google
            <span></span>
          </button>

          <button className="flex items-center justify-between bg-[#1878f2] mt-4 py-3 px-4 w-full text-white">
            <svg
              width="24px"
              height="24px"
              viewBox="126.445 2.281 589 589"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
              <path
                d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                fill="#ffffff"
              />
            </svg>
            {type === "login" ? "Login" : "Signup"} with Facebook
            <span></span>
          </button>

          <div className="border-b border-gray-300 h-[11px] text-center w-full my-7">
            <span className=" px-3">or</span>
          </div>

          <button
            onClick={() => setLoginWithEmail(true)}
            className="py-3  w-full border border-[#d9d9d9] text-center"
          >
            {type === "login" ? "Login" : "Signup"} with Email
          </button>
        </div>
      )}

      {loginWithEmail && (
        <div>
          <form className="  mt-4" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                className="border-b border-b-gray-300 focus:border-b-primary outline-none bg-transparent py-1 transition-all duration-200 ease-in-out"
                required
              />
            </div>

            <div className="flex flex-col gap-2 mt-4 mb-9">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-b-gray-300 focus:border-b-primary outline-none bg-transparent py-1 transition-all duration-200 ease-in-out"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <Link
              href="#"
              className="text-sm underline underline-offset-2 mt-6"
            >
              Forgot Password?
            </Link>
            <button
              disabled={loading || !email || !password}
              type="submit"
              className={`mt-5 w-full py-3 bg-primary disabled:bg-[rgba(217,217,217,0.5)] disabled:pointer-events-none disabled:cursor-default text-white ${
                loading ? "animate-pulse" : ""
              }`}
            >
              {type === "login" ? "Log In" : "Sign up"} {loading && "...."}
            </button>
          </form>

          <div className="border-b border-gray-300 h-[11px] text-center w-full my-7">
            <span className=" px-3">
              or {type === "login" ? "log in" : "sign up"} with
            </span>
          </div>

          <div className="flex items-center justify-center gap-10">
            <button onClick={handleGoogleLogin}>
              <svg
                width="30px"
                height="30px"
                viewBox="-3 0 262 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>
            </button>

            <button>
              <svg
                width="30px"
                height="30px"
                viewBox="126.445 2.281 589 589"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
                <path
                  d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                  fill="#ffffff"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
