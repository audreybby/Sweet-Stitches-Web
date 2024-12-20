// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import GoogleIcon from "../assets/Google.png"; // Pastikan path ke file benar

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2
          className="text-3xl font-bold text-center mb-6 text-[#873930]"
          style={{ fontFamily: "'Quintessential', cursive" }}>Login</h2>

        <form>
          {/* Username Field */}
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa095]"
          />

          {/* Password Field */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa095]"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-3 text-base bg-[#f6867a] text-white rounded-full hover:bg-[#e77a6d] transition mb-3"
            aria-label="Login"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <div className="text-center mt-3">
          <button
            className="flex items-center justify-center w-full max-w-xs mx-auto px-5 py-2.5 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition"
            aria-label="Login with Google"
          >
            <img
              src={GoogleIcon}
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-500">Login with Google</span>
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center mt-6">
          <span className="text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="underline text-[#873930] hover:text-[#a34a40]"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
