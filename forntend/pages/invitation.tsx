import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowBack } from "tabler-icons-react";
import SideBar from "../components/loginAndregister/SideBar";
import CustomButton from "../components/utils/CustomButton";
import CustomInput from "../components/utils/CustomInput";
import { backend_api } from "../utils/Url";

interface IFormInput {
  email_id: string;
  email: string;
}

function Invitation() {
  const router = useRouter();
  const session: any = useSession().data;
  const [errMsg, setErrMsg] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (session && session.id) {
      const userData = {
        data: {
          members: [data.email_id],
        },
      };
      setLoading(true);
      const taskRes = await fetch(`${backend_api}/api/content-users`, {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${session?.jwt}`,
        },
        body: JSON.stringify(userData),
      });
      const task = await taskRes.json();
      if (task.data) {
        setLoading(false);
        router.push("/invitation");
      } else if (task.error) {
        setErrMsg(task.error.message);
        setLoading(false);
      }
    }
  };

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
        <div className="h-full flex items-center justify-start">
          <div className="w-full md:w-3/4">
            <div className="font-bold text-2xl mb-6">Invite your team here</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="emailId" className="text-sm font-semibold">
                Email Id
              </label>
              <input
                {...register("email_id", {
                  required: "Email id is required",
                  minLength: { value: 3, message: "Email id must at least 3" },
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
                className={`${
                  errors.email_id
                    ? "border-error text-error"
                    : "border-textColor-100 focus:border-blue-100"
                } input`}
                placeholder="Eg.Neha@gmail.com"
                id="emailId"
              />
              <div className="text-error mb-4">{errors.email_id?.message}</div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9_.]+@[A-Za-z]+.[A-Za-z]+$/i,
                    message: "invalid email formate",
                  },
                })}
                type="text"
                className={`${
                  errors.email
                    ? "border-error text-error"
                    : "border-textColor-100 focus:border-blue-100"
                } input `}
                placeholder="Eg.Neha@gmail.com"
                id="email"
              />
              <div className="text-error capitalize">
                {errors.email?.message}
              </div>
              <div className="py-4 flex space-x-4 w-full">
                <CustomButton title={"next"} bg />
                <CustomButton title={"skip"} border />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
