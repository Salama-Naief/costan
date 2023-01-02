import React, { useContext, useState } from "react";
import { ChevronDown, ChevronUp, PlaystationX } from "tabler-icons-react";
import { Store } from "../../utils/Store";
import { motion } from "framer-motion";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "../utils/CustomButton";
import shortId from "short-uuid";
import { backend_api } from "../../utils/Url";
import { useRouter } from "next/router";
interface Pateforms {
  youtube: string;
  facebook: string;
  twitter: string;
  instegram: string;
}
interface IFormInput {
  title: string;
  description: string;
  plateform: Pateforms;
  publishDate: Date;
  paiedAd: boolean;
  organizationName: string;
  amount: Number;
}

function CreateContent() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const [paiedAd, setPaiedAd] = useState<boolean>(false);
  const [contentType, setContentType] = useState<{ img: string; name: string }>(
    { img: "/img/film.png", name: "Film/Short video" }
  );
  const [loading, setLoading] = useState<Boolean>(false);
  const [errMsg, setErrMsg] = useState<String>("");
  const [contentTypeDropMenu, setContentTypeDropMenu] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(
      "title",
      data.title.toLocaleLowerCase().trim().replaceAll(" ", "-")
    );
    const content = {
      data: {
        title: data.title,
        description: data.description,
        Plateform: data.plateform,
        publishdate: data.publishDate,
        organizationName: data.organizationName,
        amount: data.amount,
        contentType: contentType.name,
        paidAd: paiedAd,
        slug: data.title.toLocaleLowerCase().trim().replaceAll(" ", "-"),
      },
    };

    setLoading(true);
    const contentRes = await fetch(`${backend_api}/api/contents`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(content),
    });
    const contentData = await contentRes.json();
    if (contentData.data) {
      setLoading(false);
      dispatch({ type: "ADD_OPTIONS", payload: false });
      router.reload();
    } else if (contentData.error) {
      setErrMsg(contentData.error.message);
      setLoading(false);
    }
    console.log("contentData", contentData);
  };

  const contentTypeArry = [
    { img: "/img/film.png", name: "Film/Short video" },
    { img: "/img/socail.png", name: "Social media post" },
    { img: "/img/article.png", name: "Podcast/Music" },
    { img: "/img/podcast.png", name: "Article/Blog" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 bg-textColor-white p-8 overflow-y-auto">
      <div className="lg:grid md:grid-cols-3">
        <div className="col-span-2">
          <div className="font-bold text-2xl">Create</div>
          <p className="text-textColor-100 text-sm">
            Please fill all detail related of project
          </p>
        </div>
        <div className="flex space-x-3 items-center my-4 ld:my-0">
          <div className="relative flex items-center w-fit whitespace-nowrap flex-1 border border-gray-100 px-2 h-fit py-1 rounded cursor-pointer">
            <div
              onClick={() => setContentTypeDropMenu(!contentTypeDropMenu)}
              className="flex items-center space-x-1 flex-1 py-1"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={contentType.img}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  alt={contentType.name}
                />
              </div>
              <div className="text-sm font-bold">{contentType.name}</div>
            </div>
            {contentTypeDropMenu ? <ChevronUp /> : <ChevronDown />}
            {/**content type menu dropdwon */}

            <motion.div
              initial={{ display: "none", scale: 0 }}
              animate={
                contentTypeDropMenu
                  ? { display: "block", scale: 1 }
                  : { display: "none", scale: 0 }
              }
              className="absolute left-0 top-12 w-full z-20 bg-textColor-white shadow-lg"
            >
              {contentTypeArry.map((type, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setContentTypeDropMenu(false);
                    setContentType(type);
                  }}
                  className="flex items-center space-x-1 flex-1 py-3 px-2 transition duration-100 ease-in-out hover:bg-blue-50 rounded"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src={type.img}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      alt={type.name}
                    />
                  </div>
                  <div className="text-sm font-semibold">{type.name}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div
            onClick={() => dispatch({ type: "CREATE_CONTENT_CLOSE" })}
            className="absolute lg:static top-5 right-5 text-textColor-100 cursor-pointer"
          >
            <PlaystationX className="w-8 h-8" />
          </div>
        </div>
      </div>
      {errMsg && (
        <div className="bg-red-50 text-error text-center w-full p-2 rounded">
          {errMsg}
        </div>
      )}
      {/**forms  */}
      <div className="w-full mt-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <label htmlFor="title">
            {" "}
            <span className="font-bold text-sm text-textColor-100">Title</span>
            <span className="text-error mx-1 font-bold">*</span>
          </label>
          <input
            type="text"
            {...register("title", { required: "Title is Required" })}
            className={`${
              errors.title
                ? "border-error text-error"
                : "border-textColor-100 focus:border-blue-100"
            } input`}
            placeholder="title"
            id="title"
          />
          <div className="text-error capitalize mb-4">
            {errors.title?.message}
          </div>

          <label htmlFor="desc">
            {" "}
            <span className="font-bold text-sm text-textColor-100">
              Description
            </span>
          </label>
          <input
            type="text"
            {...register("description")}
            className={`${
              errors.description
                ? "border-error text-error"
                : "border-textColor-100 focus:border-blue-100"
            } input`}
            placeholder="Description"
            id="desc"
          />
          <div className="text-error capitalize mb-4">
            {errors.description?.message}
          </div>
          <div className="grid md:grid-cols-2 gap-3 md:space-x-3">
            <div>
              <label htmlFor="Plateform">
                {" "}
                <span className="font-bold text-sm text-textColor-100">
                  Plateform
                </span>
                <span className="text-error mx-1 font-bold">*</span>
              </label>
              <select
                {...register("plateform")}
                className={`${
                  errors.plateform
                    ? "border-error text-error"
                    : "border-textColor-100 focus:border-blue-100"
                } input capitalize`}
                id="Plateform"
              >
                <option value="youtube">youtube</option>
                <option value="facebook">facebook</option>
                <option value="twitter">twitter</option>
                <option value="instegram">instegram</option>
              </select>
              <div className="text-error capitalize mb-4">
                {errors.plateform?.message}
              </div>
            </div>

            <div>
              <label htmlFor="date">
                {" "}
                <span className="font-bold text-sm text-textColor-100">
                  Piblish Date
                </span>
                <span className="text-error mx-1 font-bold">*</span>
              </label>
              <input
                type="datetime-local"
                {...register("publishDate", {
                  required: "pubish date is required",
                })}
                className={`${
                  errors.publishDate
                    ? "border-error text-error"
                    : "border-textColor-100 focus:border-blue-100"
                } input`}
                placeholder={new Date().toDateString()}
                id="date"
              />
              <div className="text-error capitalize mb-4">
                {errors.publishDate?.message}
              </div>
            </div>
          </div>
          <div className="py-4">
            <input
              type="checkbox"
              onChange={(e) => setPaiedAd(e.target.checked)}
              id="chechbox"
            />
            <label
              htmlFor="chechbox"
              className="font-bold text-sm mx-2 text-textColor-100"
            >
              Project contain paid ad
            </label>
          </div>

          {paiedAd && (
            <motion.div
              initial={{ display: "none", scale: 0 }}
              animate={
                paiedAd
                  ? { display: "grid", scale: 1 }
                  : { display: "none", scale: 0 }
              }
              className="grid grid-cols-2 gap-3"
            >
              <div>
                <label htmlFor="orgname">
                  {" "}
                  <span className="font-bold text-sm text-textColor-100">
                    Organization Name
                  </span>
                  <span className="text-error mx-1 font-bold">*</span>
                </label>
                <input
                  type="text"
                  {...register("organizationName", {
                    required: "organization name is required",
                  })}
                  className={`${
                    errors.organizationName
                      ? "border-error text-error"
                      : "border-textColor-100 focus:border-blue-100"
                  } input`}
                  placeholder="Organization Name"
                  id="orgname"
                />
                <div className="text-error capitalize mb-4">
                  {errors.organizationName?.message}
                </div>
              </div>

              <div>
                <label htmlFor="amount">
                  {" "}
                  <span className="font-bold text-sm text-textColor-100">
                    Amount
                  </span>
                  <span className="text-error mx-1 font-bold">*</span>
                </label>
                <input
                  type="number"
                  {...register("amount", {
                    required: "amount is required",
                  })}
                  className={`${
                    errors.amount
                      ? "border-error text-error"
                      : "border-textColor-100 focus:border-blue-100"
                  } input`}
                  placeholder="amount"
                  id="amount"
                />
                <div className="text-error capitalize mb-4">
                  {errors.amount?.message}
                </div>
              </div>
            </motion.div>
          )}
          <div>
            {loading ? (
              <span className="bg-blue-100 text-textColor-white px-2 py-1 rounded">
                Saving...
              </span>
            ) : (
              <CustomButton title={"save"} bg />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContent;
