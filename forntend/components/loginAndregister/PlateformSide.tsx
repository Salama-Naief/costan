import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomButton from "../utils/CustomButton";
import CustomInput from "../utils/CustomInput";
import ContentType from "../utils/ContentType";
import { useSession } from "next-auth/react";
import { backend_api } from "../../utils/Url";
import { useRouter } from "next/router";
import { Session } from "next-auth";

interface IFormInput {
  platefromName: string;
}
interface SessionUser extends Session {
  id: number;
  jwt: string;
}

function PlateformSide({ contentTypes }: { contentTypes: ContentTypes[] }) {
  const [plateform, setPlateform] = useState<ContentTypes | null>(null);
  const router = useRouter();
  const session: any = useSession().data;
  const [errMsg, setErrMsg] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);
  console.log("plateform", plateform);
  console.log("session", session);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (plateform && session && session.id) {
      const userData = {
        data: {
          adminUser: session.id,
          platformName: data.platefromName,
          plateforms: [plateform.id],
        },
      };
      setLoading(true);
      const taskRes = await fetch(`${backend_api}/api/content-users`, {
        method: "POST",
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
        router.push(`/login/invitation/${task.data.id}`);
      } else if (task.error) {
        setErrMsg(task.error.message);
        setLoading(false);
      }
    }
  };
  return (
    <div className="h-full container mx-auto text-left pt-12 px-4 md:px-8 lg:px-16  bg-textColor-50">
      <div className="h-full flex items-center">
        <div>
          <div className="font-bold text-3xl text-blue-200 my-2">
            Welcome to Costan!
          </div>
          <p className="text-xs text-textColor-100">
            You are signing up as {/*session?.user?.email*/}
          </p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="py-6">
              <div className="font-bold text-2xl my-2 text-textColor-100">
                Enter the name of your platform.
              </div>
              <label className="text-sm font-semibold" htmlFor="platform">
                Plateform Name
              </label>
              <input
                {...register("platefromName", {
                  required: "platefrom Name is required",
                  minLength: {
                    value: 3,
                    message: "platefrom Name must be at least 3",
                  },
                })}
                className={`${
                  errors.platefromName
                    ? "border-error text-error"
                    : "border-textColor-100 focus:border-blue-100"
                } input `}
                id="platform"
              />
              <div className="text-error capitalize">
                {errors.platefromName?.message}
              </div>
            </div>
            {errMsg && (
              <div className="text-center w-full text-error bg-red-50 p-4 rounded">
                {errMsg}
              </div>
            )}
            <div className="font-bold text-2xl my-6 text-textColor-100">
              What type of content creator are you?
            </div>
            <ul className="flex items-center flex-wrap gap-3">
              {contentTypes.map((content) => (
                <li key={content.id} onClick={() => setPlateform(content)}>
                  <ContentType
                    plateform={plateform?.attributes.title}
                    title={content.attributes.title}
                  />
                </li>
              ))}
            </ul>
            <div className="py-8 w-full text-left">
              {loading ? (
                <div className="bg-blue-100 text-textColor-white w-fit px-3 py-1">
                  Watting...
                </div>
              ) : (
                <CustomButton title={"next"} bg />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PlateformSide;
