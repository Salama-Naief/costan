import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowBack } from "tabler-icons-react";
import CustomButton from "../utils/CustomButton";
import CustomInput from "../utils/CustomInput";
import CustomLink from "../utils/CustomLink";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
interface IFormInput {
  email: string;
}

function LoginSide() {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  if (session) {
    router.push("/dashboard");
  }
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="h-full container mx-auto pt-12 px-4 md:px-8 lg:px-16  bg-textColor-50">
      <Link href={"/"}>
        <div className="uppercase space-x-1 font-medium text-textColor-100 flex items-center transition-all duration-200 ease-in-out px-2 rounded active:scale-95 w-fit hover:bg-blue-50">
          <ArrowBack />
          <div className="">go to home</div>
        </div>
      </Link>
      <div className="h-full flex flex-col items-center justify-center  md:w-3/4">
        <div className="font-bold text-3xl text-blue-200 mb-6">
          Sign in to your account
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
              Continue with Google
            </div>
          </div>
        </div>

        <div className="flex items-center w-full my-4">
          <div className="flex-1 h-px bg-textColor-100 w-full"></div>
          <div className="py-1 px-2 mx-2 rounded-full border border-r-textColor-100">
            Or
          </div>
          <div className="flex-1 h-px bg-textColor-100"></div>
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="text-sm font-semibold">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "email Name is required",
              minLength: {
                value: 3,
                message: "email Name must be at least 3",
              },
              pattern: {
                value: /^[A-Za-z0-9_.]+@[A-Za-z]+.[A-Za-z]+$/i,
                message: "invalid email formate",
              },
            })}
            className={`${
              errors.email
                ? "border-error text-error"
                : "border-textColor-100 focus:border-blue-100"
            } input `}
            id="email"
          />
          <div className="text-error capitalize">{errors.email?.message}</div>
          <div className="py-4">
            <CustomButton title={"continue"} bg />
          </div>
        </form>
        <div className="flex items-center justify-center space-x-4">
          <div className="font-medium">Do not have a Costan account yet?</div>
          <CustomLink title={"sign up"} navegation="register" />
        </div>
      </div>
    </div>
  );
}

export default LoginSide;
