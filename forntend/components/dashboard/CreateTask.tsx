import React, { useContext, useState } from "react";
import { ChevronDown, ChevronUp, PlaystationX } from "tabler-icons-react";
import { Store } from "../../utils/Store";
import { motion } from "framer-motion";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "../utils/CustomButton";
import shortId from "short-uuid";
import { users } from "../../utils/users";
import { inventedTeam } from "../../utils/inventedTeam";
import { backend_api } from "../../utils/Url";
import { useRouter } from "next/router";
interface Props {
  contentId: number;
  setCreateTaskModel: Function;
}
interface IFormInput {
  title: string;
  taskType: User;
}

function CreateTask({ setCreateTaskModel, contentId }: Props) {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState<String>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [teamMember, setTeamMember] = useState<User>({
    id: 0,
    img: "/img/users/user.png",
    name: "assign team member",
    job: "",
    lastConnect: "",
  });
  const [contentTypeDropMenu, setContentTypeDropMenu] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  console.log("contentId", contentId);
  //handle form submit
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const taskData = {
      data: {
        title: data.title,
        contentId: contentId,
        type: data.taskType,
        memberId: teamMember.id,
        slug: data.title.toLocaleLowerCase().trim().replaceAll(" ", "-"),
      },
    };
    setLoading(true);
    const taskRes = await fetch(`${backend_api}/api/tasks`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    const task = await taskRes.json();
    if (task.data) {
      setCreateTaskModel(false);
      setLoading(false);
      router.reload();
    } else if (task.error) {
      setErrMsg(task.error.message);
      setLoading(false);
    }
    console.log("state", task);
  };
  const contentTypeArry = [
    { img: "/img/film.png", name: "Film / Short video" },
    { img: "/img/socail.png", name: "Social media post" },
    { img: "/img/article.png", name: "Podcast / Music" },
    { img: "/img/podcast.png", name: "Article / Blog" },
  ];

  return (
    <motion.div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 ">
      <div className="w-full h-full opacity-50 bg-textColor-100"></div>
      <div className="absolute top-0 left-0   flex items-center w-full h-full justify-center">
        <motion.div
          initial={{ display: "none", scale: 0 }}
          animate={{ display: "block", scale: 1 }}
          className="w-full  lg:w-3/4 h-fit p-8 rounded bg-textColor-white"
        >
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl">Create task</div>

            <div
              onClick={() => setCreateTaskModel(false)}
              className="absolute lg:static top-5 right-5 text-textColor-100 cursor-pointer"
            >
              <PlaystationX className="w-8 h-8" />
            </div>
          </div>
          {errMsg && (
            <div className="my-4 bg-red-50 text-error w-full p-2 text-center">
              {errMsg}
            </div>
          )}
          {/**forms  */}
          <div className="w-full mt-4 ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <label htmlFor="title">
                {" "}
                <span className="font-bold text-sm text-textColor-100">
                  Title
                </span>
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

              <div className="grid md:grid-cols-2 gap-3 md:space-x-3">
                <div>
                  <label htmlFor="taskType">
                    {" "}
                    <span className="font-bold text-sm text-textColor-100">
                      Task Type
                    </span>
                    <span className="text-error mx-1 font-bold">*</span>
                  </label>
                  <select
                    {...register("taskType")}
                    className={`${
                      errors.taskType
                        ? "border-error text-error"
                        : "border-textColor-100 focus:border-blue-100"
                    } input capitalize`}
                    id="taskType"
                  >
                    <option value="story board">story board</option>
                    <option value="script/script/editing">
                      script/script/editing
                    </option>
                    <option value="shoting/recording">shoting/recording</option>
                    <option value="production">production</option>
                    <option value="review">review</option>
                    <option value="final draft">final draft</option>
                  </select>
                  <div className="text-error capitalize mb-4">
                    {errors.taskType?.message}
                  </div>
                </div>
                <div>
                  <label htmlFor="taskType">
                    <span className="font-bold text-sm text-textColor-100">
                      Assign team member
                    </span>
                    <span className="text-error mx-1 font-bold">*</span>
                  </label>

                  <div className="relative flex items-center w-full whitespace-nowrap flex-1 border border-gray-100 px-2 h-fit py-1 rounded cursor-pointer">
                    <div
                      onClick={() =>
                        setContentTypeDropMenu(!contentTypeDropMenu)
                      }
                      className="flex items-center space-x-1 flex-1 py-1"
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src={teamMember.img}
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center"
                          alt={teamMember.name}
                        />
                      </div>
                      <div className="text-sm font-bold">{teamMember.name}</div>
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
                      {inventedTeam.map((user: User) => (
                        <div
                          key={user.id}
                          onClick={() => {
                            setContentTypeDropMenu(false);
                            setTeamMember(user);
                          }}
                          className="flex items-center space-x-1 flex-1 py-3 px-2 transition duration-100 ease-in-out hover:bg-blue-50 rounded"
                        >
                          <div className="relative w-6 h-6 rounded">
                            <Image
                              src={user.img}
                              layout="fill"
                              objectFit="contain"
                              objectPosition="center"
                              alt={user.name}
                            />
                          </div>
                          <div className="text-sm font-semibold">
                            {user.name}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
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
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CreateTask;
