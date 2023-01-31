import React from "react";

const Auth = ({ handleSubmit }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-4">
        <h1 className="text-center font-bold text-4xl text-slate-900 uppercase">
          Login Now
        </h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <label className="text-slate-600 text-xl font-semibold">Email</label>
          <input
            type="email"
            className="block border rounded-md p-2 outline-none"
          />
          <label className="text-slate-600 text-xl font-semibold">
            Password
          </label>

          <input
            type="password"
            className="block border rounded-md p-2 outline-none"
          />
          <br />
          <button
            type="submit"
            className="block w-full bg-slate-900 text-white rounded-full py-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
