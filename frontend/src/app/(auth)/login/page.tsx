"use client";

import Link from "next/link";
import React from "react";

interface Props {
  messages?: { text: string; type: "error" | "success" }[];
}

const Page: React.FC<Props> = ({ messages = []}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 max-w-md w-full shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300">
        
        {/* Messages */}
        {messages.length > 0 && (
          <div className="mb-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.type === "error"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
        )}

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/ProgLobby.png" alt="Proglobby Logo" className="w-40 h-auto" />
        </div>

        {/* Google Login */}
        <Link
          href="#"
          className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-lg transition-all duration-300 mb-6"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
          <span>Continue with Google</span>
        </Link>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-gray-400">or</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        {/* Form */}
        <form method="POST" className="space-y-6">
          <input
            type="text"
            name="login"
            required
            className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Email address"
          />

          <input
            type="password"
            name="password"
            required
            className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Password"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-gray-400">
              <input
                type="checkbox"
                name="remember"
                className="rounded border-gray-600 bg-gray-700/20 text-purple-500 focus:ring-purple-500"
              />
              <span>Remember me</span>
            </label>
            <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-gray-400">
          Don't have an account?{" "}
          <Link href="registration" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
            Join Us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
