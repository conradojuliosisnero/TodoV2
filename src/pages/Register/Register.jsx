import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "react-router-dom";
import { CalendarDate } from "@internationalized/date";
import { DateInput } from "@nextui-org/react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

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
        <form className="w-[350px] p-3" onSubmit={onSubmit}>
          <div className="w-full flex flex-col justify-center items-center">
            <Input
              className="mb-5"
              type="text"
              variant="underlined"
              size="sm"
              label="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
                minLength: {
                  value: 3,
                  message: "Your name must have 3 characters",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message: "Numbers or special characters are not allowed.",
                },
              })}
            />
            {errors.name && (
              <span className="text-[#F31260] text-small w-full flex justify-start ">
                {errors.name.message}
              </span>
            )}
            <Input
              className="mb-5"
              type="text"
              variant="underlined"
              size="sm"
              label="last name"
              {...register("lastname", {
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message: "Numbers or special characters are not allowed.",
                },
              })}
            />
            {errors.lastname && (
              <span className="text-[#F31260] text-small w-full flex justify-start ">
                {errors.lastname.message}
              </span>
            )}
            <DateInput
              variant="underlined"
              label={"Birth date"}
              isRequired
              type="date"
              placeholderValue={new CalendarDate(1995, 11, 6)}
              {...register("dateBirth")}
            />

            <Input
              className="mb-5"
              type="email"
              variant="underlined"
              isRequired
              size="sm"
              label="Email"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "email not valid",
                },
              })}
            />
            {errors.email && (
              <span className="text-[#F31260] text-small w-full flex justify-start ">
                {errors.email.message}
              </span>
            )}
            <Input
              className="mb-4"
              type="password"
              variant="underlined"
              size="sm"
              isRequired
              label="Password"
              {...register("password", {
                required: {
                  value: true,
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[\W_]).+$/,
                  message:
                    "must have at least 1 capital letter and one special character",
                },
              })}
            />
            {errors.password && (
              <span className="text-[#F31260] text-small w-full flex justify-start ">
                {errors.password.message}
              </span>
            )}

            <Input
              className="mb-4"
              type="password"
              variant="underlined"
              size="sm"
              label="Confirm Password"
              {...register("confirm", {
                required: {
                  value: true,
                  message: "confim your password",
                },
                validate: (value) =>
                  value === watch("password") || "password do not match",
              })}
            />
            {errors.confirm && (
              <span className="text-[#F31260] text-small w-full flex justify-start mb-4">
                {errors.confirm.message}
              </span>
            )}

            {/* TERMS CONDITIONS  */}
            <div className="flex">
              <Checkbox className="mb-4" {...register("terms")}></Checkbox>
              <p className="text-start text-medium dark:text-white text-gray-400">
                Do you accept our
                <strong className="hover:underline">
                  <Link to="/terms"> Terms and conditions? </Link>
                </strong>
              </p>
            </div>
          </div>

          {/* BUTTON LOGIN  */}
          <div className="w-full flex my-3 justify-center items-center">
            <Button
              variant="ghost"
              color="default"
              type="submit"
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
