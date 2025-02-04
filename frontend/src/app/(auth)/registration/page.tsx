"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password1: "",
    password2: "",
    terms: false,
  });

  const [messages, setMessages] = useState<{ type: "error" | "success"; text: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
      setMessages([{ type: "error", text: "Passwords do not match" }]);
      return;
    }

    try {
      // Replace with actual API call
      console.log("Submitting", formData);
      setMessages([{ type: "success", text: "Account created successfully!" }]);
    } catch (error) {
      setMessages([{ type: "error", text: "Something went wrong!" }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 max-w-md w-full shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300">
        <div className="flex justify-center mb-8">
          <Image src="/ProgLobby.png" alt="Proglobby Logo" width={160} height={80} />
        </div>

        <a
          href="/api/auth/google"
          className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-lg transition-all duration-300 mb-6"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
          <span>Continue with Google</span>
        </a>

        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-gray-400">or</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        {messages.length > 0 && (
          <div className="mb-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  msg.type === "error" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            required
            className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            required
            className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              required
              className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              required
              className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>

          <input
            type="password"
            name="password1"
            required
            className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Password"
            value={formData.password1}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password2"
            required
            className="w-full bg-gray-700/20 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Confirm Password"
            value={formData.password2}
            onChange={handleChange}
          />

          <label className="flex items-center space-x-2 text-gray-400">
            <input
              type="checkbox"
              name="terms"
              required
              className="rounded border-gray-600 bg-gray-700/20 text-purple-500 focus:ring-purple-500"
              checked={formData.terms}
              onChange={handleChange}
            />
            <span>I agree to the Terms of Service</span>
          </label>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-all duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
