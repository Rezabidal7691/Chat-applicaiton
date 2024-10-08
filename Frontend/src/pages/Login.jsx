import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="card bg-base-100 w-96 shadow-xl flex flex-col justify-center items-center gap-y-5 px-10 py-8">
      <h1 className="mb-5 text-slate-500 text-lg">ورود به <span className="text-primary font-bold text-xl">چتینـــــو</span> </h1>
        <label className="w-full input input-bordered flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow placeholder:text-slate-500" placeholder="نام کاربری" />
        </label>
        <label className="w-full input input-bordered flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="grow placeholder:text-slate-500" placeholder="گذرواژه" />
        </label>
        <div className="w-full flex justify-start items-center gap-x-2">
            <span className="text-gray-500 text-xs">حساب کاربری ندارید ؟</span>
            <Link to='/signup' className="text-primary font-bold text-xs" >ثبت نام</Link>
        </div>
        <button className="w-full btn btn-primary text-white">ورود</button>
        
      </form>
    </div>
  );
}

export default Login;
