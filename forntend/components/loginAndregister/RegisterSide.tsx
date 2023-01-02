import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ArrowBack } from "tabler-icons-react";
import CustomButton from "../utils/CustomLink";

function RegisterSide() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session?.user) {
    router.push("/login/plateform");
  }
  return (
    <div className="h-full container mx-auto pt-12 px-8 lg:px-16  bg-textColor-50">
      <Link href={"/"}>
        <div className="uppercase space-x-1 font-medium text-textColor-100 flex items-center transition-all duration-200 ease-in-out px-2 rounded active:scale-95 w-fit hover:bg-blue-50">
          <ArrowBack />
          <div className="">go to home</div>
        </div>
      </Link>
      <div className="h-full flex flex-col items-center justify-center w-3/4">
        <div className="font-bold text-3xl text-blue-200 mb-6">
          Start your 14-day free trial. Sign up now
        </div>
        <div
          onClick={() => signIn("google")}
          className="rounded w-full bg-blue-300 h-12 p-0.5 my-4 cursor-pointer transition duration-200 ease-in-out active:scale-95"
        >
          <div className="flex items-center h-full rounded">
            <div className="h-full w-12 bg-textColor-white relative flex items-center rounded">
              <Image
                src={"/img/icons8-google.svg"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt=""
              />
            </div>
            <div className="text-textColor-white text-center w-full font-medium text-xl">
              Sign up with Google
            </div>
          </div>
        </div>

        <div className="rounded w-full bg-blue-400 h-12 p-0.5 my-4 cursor-pointer transition duration-200 ease-in-out active:scale-95">
          <div className="flex items-center h-full rounded">
            <div className="h-full w-12 bg-textColor-white relative flex items-center rounded p-2">
              <Image
                src={"/img/facebook.svg"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt=""
              />
            </div>
            <div className="text-textColor-white text-center w-full font-medium text-xl">
              Sign up with Facebook
            </div>
          </div>
        </div>

        <div className="rounded w-full bg-blue-300 h-12 p-0.5 my-4 cursor-pointer transition duration-200 ease-in-out active:scale-95">
          <div className="flex items-center h-full rounded">
            <div className="h-full w-12 bg-textColor-white relative flex items-center rounded">
              <Image
                src={"/img/twitter.svg"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt=""
              />
            </div>
            <div className="text-textColor-white text-center w-full font-medium text-xl">
              Sign up with Twitter
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className="font-medium">
            Have your business already on Blessink?
          </div>
          <CustomButton title={"login"} navegation="login" />
        </div>
      </div>
    </div>
  );
}

export default RegisterSide;
