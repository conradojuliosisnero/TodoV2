import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Login = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-[450px] flex-col items-center  my-3 border-1 border-gray-500 dark:border-white rounded-lg flex justify-center">
        {/* TITTLE LOGIN  */}
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mt-12 text-gray-500 dark:text-white">
            Welcome To App
          </h1>
          <p className="text-gray-500 dark:text-white mt-4">
            {"let's register"}
          </p>
        </div>

        {/* LOGIN BOX  */}
        <form className="w-[350px] p-3 ">
          <div className="w-full flex flex-col justify-center items-center">
            <Input
              className="mb-5"
              type="text"
              variant="underlined"
              size="sm"
              label="Name"
            />
            <Input
              className="mb-5"
              type="text"
              variant="underlined"
              size="sm"
              label="Last name"
            />
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
            <Input
              className="mb-4"
              type="password"
              variant="underlined"
              size="sm"
              label="Confirm Password"
            />
          </div>

          {/* BUTTON LOGIN  */}
          <div className="w-full flex my-3 justify-center items-center">
            <Button
              variant="ghost"
              color="default"
              className="w-full dark:text-white"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
