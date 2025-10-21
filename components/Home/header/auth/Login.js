"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [callbackUrl, setCallbackUrl] = useState("/");

  const username = useRef("");
  const password = useRef("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCallbackUrl(params.get("callbackUrl") || "/");
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        username: username.current,
        password: password.current,
        redirect: false,
        callbackUrl,
      });

      if (!result?.error) {
        router.push(callbackUrl);
      } else {
        setError("نام کاربری یا کلمه عبور اشتباه می باشد");
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <section className="bg-gray-50 h-max">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight md:text-2xl dark:text-white">
              وارد اکانت خود شوید
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              {error && (
                <p className="text-center bg-red-300 py-4 mb-6 rounded">
                  {error}
                </p>
              )}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  نام کاربری
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="نام کاربری"
                  onChange={(e) => (username.current = e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  کلمه عبور
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="کلمه عبور"
                  onChange={(e) => (password.current = e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-7 py-2 text-sm rounded shadow bg-gray-600 hover:bg-gray-400 text-gray-200 w-full"
              >
                ورود
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                اکانت نداری؟{" "}
                <Link
                  href="/regester"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  ثبت نام کن
                </Link>
              </p>
            </form>
            <button
              type="button"
              className="px-7 py-2 text-white text-sm rounded bg-gray-600 shadow-md w-full flex justify-center items-center"
              onClick={() => signIn("github", { callbackUrl: "/quiz" })}
            >
              ورود با گیت هاب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
