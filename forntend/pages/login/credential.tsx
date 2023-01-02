import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowBack } from "tabler-icons-react";
import SideBar from "../../components/loginAndregister/SideBar";
import CustomButton from "../../components/utils/CustomButton";
import CustomInput from "../../components/utils/CustomInput";

interface IFormInput {
  name: string;
  password: string;
}

function Credential() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="grid md:grid-cols-2 h-screen bg-textColor-50">
      <SideBar title="You are one step away from simply content planning." />
      <div className="h-full container mx-auto pt-12 px-4 md:px-8 lg:px-16">
        <Link href={"/"}>
          <div className="uppercase space-x-1 font-medium text-textColor-100 flex items-center transition-all duration-200 ease-in-out px-2 rounded active:scale-95 w-fit hover:bg-blue-50">
            <ArrowBack />
            <div className="">go to home</div>
          </div>
        </Link>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="font-bold text-2xl mb-6">
            Costan is better with teammates! Try adding a few of yours.
          </div>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-sm font-semibold" htmlFor="email">
              Name
            </label>
            <input
              {...register("name", {
                required: "name is required",
                minLength: {
                  value: 3,
                  message: "name length must be at last 3",
                },
              })}
              className={`${
                errors.name
                  ? "border-error text-error"
                  : "border-textColor-100 focus:border-blue-100"
              } input`}
              id="name"
            />
            <div className="text-error capitalize mb-4">
              {errors.name?.message}
            </div>
            <label className="text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type={"password"}
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "name length must be at last 3",
                },
              })}
              className={`${
                errors.password
                  ? "border-error text-error"
                  : "border-textColor-100 focus:border-blue-100"
              } input`}
              id="password"
            />
            <div className="text-error capitalize">
              {errors.password?.message}
            </div>
            <div className="py-4 text-left w-full">
              <CustomButton title={"next"} bg />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Credential;
