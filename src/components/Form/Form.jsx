import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState(true);

  const handlerRemenber = () => {
    setRemember(!remember);
  };

  const handlerDataLogin = (event) => {
    const { name, value } = event.target;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };

  return (
    <form action="#">
      {/* EMAIL INPUT  */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={dataForm.email}
          name="email"
          onChange={handlerDataLogin}
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="your@email.com"
          required
        />
      </div>

      {/* PASSWORD INPUT  */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={dataForm.password}
          onChange={handlerDataLogin}
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your password"
          required
        />
        <Link
          to={"/forgot-password/remember"}
          className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Forgot Password?
        </Link>
      </div>

      {/* CHECK REMEMBER PASSWORD  */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            onClick={handlerRemenber}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
            defaultChecked
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <Link
          to={"/register-acount/register"}
          className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Account
        </Link>
      </div>

      {/* BUTTON SEND LOGIN  */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </form>
  );
}
