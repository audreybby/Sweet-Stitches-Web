// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; // Import Link dari React Router DOM

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[28rem]">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#873930]">Register</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-6 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa095]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-6 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa095]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa095]"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mb-6 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa095]"
          />
          <button
            type="submit"
            className="w-full p-3 text-base bg-[#f6867a] text-white rounded-full hover:bg-[#e77a6d] transition mb-3"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
            Already have an account?{" "}
            <Link to="/login" className="underline text-[#873930] hover:text-[#a34a40]">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
