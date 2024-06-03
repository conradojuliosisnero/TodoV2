import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-[450px] flex-col items-center  my-3 border-1 border-gray-500 dark:border-white rounded-lg flex justify-center">
        {/* TITTLE LOGIN  */}
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mt-12 text-gray-500 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-gray-500 dark:text-white mt-4">
            Enter your credentials
          </p>
        </div>

        {/* LOGIN BOX  */}
        <form className="w-[350px] p-3 ">
          <div className="w-full flex flex-col justify-center items-center">
            <Input
              className="mb-5"
              type="email"
              variant="underlined"
              size="sm"
              label="Email"
            />
            <Input
              className="mb-4"
              type="password"
              variant="underlined"
              size="sm"
              label="Password"
            />
          </div>

          {/* BUTTON LOGIN  */}
          <div className="w-full flex my-3 justify-center items-center">
            <Button
              className="w-full dark:text-black dark:bg-white"
              variant="ghost"
            >
              Login
            </Button>
          </div>
        </form>

        <div className="w-full mb-12 flex justify-center flex-col items-center">
          <span className="font-semibold text-gray-500 dark:text-white">Not Register?</span>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
