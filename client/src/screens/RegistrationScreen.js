import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationScreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
      <main class="flex flex-auto flex-col max-w-full">
        <div class="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
          <div class="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
          <div class="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>

          <div class="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
            <div class="mb-8 text-center">
              <h1 class="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                <svg
                  class="hi-solid hi-cube-transparent inline-block w-8 h-8 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>SHOPGENIX</span>
              </h1>
              <p class="text-gray-500">
                Create your own account in one single step
              </p>
            </div>

            <div class="flex flex-col rounded shadow-sm bg-white overflow-hidden">
              <div class="p-5 lg:p-6 flex-grow w-full">
                <div class="sm:p-5 lg:px-10 lg:py-8">
                  <form onSubmit={handleRegister} class="space-y-6">
                    <div class="space-y-1">
                      <label for="tk-pages-sign-up-name" class="font-medium">
                        Name
                      </label>
                      <input
                        class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="text"
                        value={name}
                        required
                        onChange={(e) => setname(e.target.value)}
                        id="tk-pages-sign-up-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div class="space-y-1">
                      <label for="tk-pages-sign-up-email" class="font-medium">
                        Email
                      </label>
                      <input
                        class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        id="tk-pages-sign-up-email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div class="space-y-1">
                      <label
                        for="tk-pages-sign-up-password"
                        class="font-medium"
                      >
                        Password
                      </label>
                      <input
                        class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setpassword(e.target.value)}
                        id="tk-pages-sign-up-password"
                        placeholder="Choose a strong password"
                      />
                    </div>
                    <div class="space-y-1">
                      <label
                        for="tk-pages-sign-up-password-confirm"
                        class="font-medium"
                      >
                        Confirm Password
                      </label>
                      <input
                        class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="password"
                        value={confirmPassword}
                        required
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        id="tk-pages-sign-up-password-confirm"
                        placeholder="Confirm your chosen password"
                      />
                    </div>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        class="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      />
                      <span class="ml-2">
                        {" "}
                        I accept{" "}
                        <a
                          href="javascript:void(0)"
                          class="underline text-gray-600 hover:text-gray-500"
                        >
                          terms &amp; conditions
                        </a>
                      </span>
                    </div>
                    <button
                      type="submit"
                      class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                    >
                      Create Account
                    </button>
                  </form>
                </div>
              </div>
              <div class="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
                <Link
                  class="font-medium text-blue-600 hover:text-blue-400"
                  to="/signin"
                >
                  Return to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistrationScreen;