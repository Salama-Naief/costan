import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { Store } from "../../../../utils/Store";
import DashboardNav from "../../../../components/navbar/DashboardNav";
import DashboardLeftSide from "../../../../components/dashboard/DashboardLeftSide";
import {
  ChevronLeft,
  ClockHour4,
  Pencil,
  SquarePlus,
  Stack2,
} from "tabler-icons-react";
import Messages from "../../../../components/dashboard/rightSide/Messages";
import Jim from "../../../../components/dashboard/rightSide/Jim";
import WhatsNew from "../../../../components/dashboard/rightSide/WhatsNew";
import Notification from "../../../../components/dashboard/rightSide/Notification";
import { GetStaticPaths, GetStaticProps } from "next";
import { backend_api } from "../../../../utils/Url";
import ContentType from "../../../../components/dashboard/ContentType";
import { inventedTeam } from "../../../../utils/inventedTeam";
import Link from "next/link";
import TextEditor from "../../../../components/dashboard/TextEditor";
import TaskAddContent from "../../../../components/dashboard/TaskAddContent";
import parser from "html-react-parser";
import Comment from "../../../../components/dashboard/Comment";
import Moment from "react-moment";
interface Props {
  taskContent: any;
  contents: Contnet[];
  tasks: Tasks[];
}

function TaskContent({ taskContent }: { taskContent: TaskContent }) {
  return (
    <div key={taskContent.id} className="w-full h-fit">
      {taskContent.attributes.textContent && (
        <>
          <div className="w-full bg-textColor-white p-4 rounded">
            {parser(taskContent.attributes.textContent)}
          </div>
          <div className="px-2">
            <Comment contentId={taskContent.id} />
          </div>
        </>
      )}
      {taskContent.attributes.img.data && (
        <div className="my-8 py-4  rounded">
          <Image
            src={taskContent.attributes.img.data.attributes.url}
            height={taskContent.attributes.img.data.attributes.height}
            width={taskContent.attributes.img.data.attributes.width}
            alt={taskContent.attributes.img.data.attributes.name}
            layout="responsive"
          />
          <div className="px-2">
            <Comment contentId={taskContent.id} />
          </div>
        </div>
      )}
      {taskContent.attributes.vedio.data && (
        <div className="my-8">
          <iframe
            src={taskContent.attributes.vedio.data?.attributes.url}
            name={taskContent.attributes.vedio.data?.attributes.name}
            allowFullScreen
            className="w-full h-96"
          />
          <div className="px-2">
            <Comment contentId={taskContent.id} />
          </div>
        </div>
      )}
    </div>
  );
}
function StateId({ contents, tasks, taskContent }: Props) {
  const { state } = useContext(Store);
  const { content, options } = state;
  const router = useRouter();
  const [addContent, setAddContent] = useState<Boolean>(false);
  const [taskContentType, setTaskContentType] = useState<string>("");
  // const { contentId } = router.query;
  const currentContent = contents[0];
  if (!currentContent) router.push("/dashboard");

  const [title, setTitle] = useState<string>(
    router.query.taskslug === "untitled" ? "" : currentContent.attributes.title
  );
  const [titleEdit, seTitleEdit] = useState<boolean>(false);

  const user: User | undefined = inventedTeam.find(
    (t) => t.id === tasks[0].attributes.memberId
  );

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const publishedDate = () => {
    const days =
      new Date(currentContent.attributes.publishdate).getUTCDay() -
      new Date().getUTCDay();
    const hours =
      new Date(currentContent.attributes.publishdate).getUTCHours() -
      new Date().getUTCHours();
    const minutes =
      new Date(currentContent.attributes.publishdate).getTime() -
      new Date().getTime();
    console.log(days, hours, new Date(minutes).getHours());
    return days > 0
      ? days
      : 0 + "d: " + hours > "0"
      ? hours
      : 0 + "h: " + minutes > "0"
      ? hours
      : 0 + "m: " + "left";
  };

  const handleUpdateTitle = async (e: FormEvent) => {
    e.preventDefault();
    seTitleEdit(false);

    const upadetedData = { data: { title: title } };

    const dataRes = await fetch(`${backend_api}/api/tasks/${tasks[0].id}`, {
      method: "PUT",
      body: JSON.stringify(upadetedData),
    });
    const data = await dataRes.json();
  };
  console.log("taskContent", taskContent);
  return (
    <div className=" h-screen flex flex-col  overflow-hidden">
      <DashboardNav />
      <main className="flex flex-1 h-full ">
        <div>
          <DashboardLeftSide />
        </div>

        {/**main bar */}
        <div className=" flex-1 bg-blue-50 mb-20 h-full relative p-8 overflow-y-auto pb-12">
          <div className="text-textColor-100 text-sm px-4 flex items-center space-x-1">
            <Stack2 />
            <Link href={`/dashboard/content`} passHref>
              <p className="hover:text-blue-100">content /</p>
            </Link>
            <Link
              href={`/dashboard/content/${currentContent.attributes.slug}`}
              passHref
            >
              <p className="hover:text-blue-100">
                {currentContent.attributes.title} /
              </p>
            </Link>
            <p>{router.query.stateId}</p>
            <p>{router.query.taskslug}</p>
          </div>
          <div className="py-4">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center  space-x-2">
                  <span
                    onClick={() => router.back()}
                    className="text-sm text-textColor-100 cursor-pointer"
                  >
                    <ChevronLeft />
                  </span>
                  <ContentType
                    contentType={currentContent.attributes.contentType}
                  />
                </div>

                <p className="text-xs px-2 py-0.5 capitalize text-textColor-100 ">
                  last update:1/2/2022
                </p>
              </div>

              <div className="px-8 flex items-center justify-between">
                {titleEdit ? (
                  <form
                    className="pt-3 pb-1 w-full flex items-center space-x-1 h-fit"
                    onSubmit={(e) => handleUpdateTitle(e)}
                  >
                    <input
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      value={title}
                      className={`border-textColor-100 focus:border-blue-100 input flex-1`}
                      placeholder="title"
                      id="title"
                    />
                    <button
                      type="submit"
                      className="bg-blue-100 text-textColor-white px-3 py-2 rounded"
                    >
                      Save
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between pt-2 w-full">
                    <p className="text-2xl font-semibold capitalize">
                      {title ? (
                        title
                      ) : (
                        <span className="text-gray-100">Untitled</span>
                      )}
                    </p>
                    <span
                      onClick={() => seTitleEdit(true)}
                      className="text-textColor-100 bg-textColor-white p-1 hover:text-blue-100 rounded hover:bg-gray-50 cursor-pointer "
                    >
                      <Pencil className=" w-5 h-5" />
                    </span>
                  </div>
                )}
              </div>

              <div className="px-8 text-sm text-textColor-100 capitalize py-1 w-full flex items-center justify-between">
                {true && (
                  <div className="flex items-center space-x-1">
                    <img
                      src={user ? user.img : "/img/images.jpg"}
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-blue-100 object-cover object-center"
                    />
                    <p className="font-bold text-sm">
                      {user ? user.name : "name user"}
                    </p>
                  </div>
                )}
                <div className="flex items-center space-x-1 text-xs text-green-100">
                  <ClockHour4 className="w-5 h-5" />
                  <Moment durationFromNow format="dd hh:mm">
                    {currentContent.attributes.publishdate}
                  </Moment>
                  <span>{publishedDate()} Days to publish</span>
                </div>
              </div>
            </div>
          </div>

          {/**Teaxt editor */}
          {taskContent?.map((content: TaskContent) => (
            <TaskContent taskContent={content} />
          ))}
          <div className=" my-6 w-full rounded border border-gray-100 p-6 flex flex-col items-center justify-center">
            <div
              onClick={() => setAddContent(!addContent)}
              className="relative cursor-pointer  transtion duration-200 group"
            >
              <SquarePlus
                size={36}
                className="hover:text-blue-100 text-gray-100"
              />
              <motion.ul
                initial={{ display: "none", scale: 0 }}
                animate={
                  addContent
                    ? { display: "block", scale: 1 }
                    : { display: "none", scale: 0 }
                }
                className="font-semibold bg-textColor-white absolute top-0 left-0 shadow-xl rounded"
              >
                <li
                  onClick={() => setTaskContentType("text")}
                  className="py-3 px-8 rounded hover:bg-blue-50"
                >
                  Text
                </li>
                <li
                  onClick={() => setTaskContentType("image")}
                  className="py-3 px-8 rounded hover:bg-blue-50"
                >
                  Image
                </li>
                <li
                  onClick={() => setTaskContentType("sound")}
                  className="py-3 px-8 rounded hover:bg-blue-50"
                >
                  Sound
                </li>
                <li
                  onClick={() => setTaskContentType("vedio")}
                  className="py-3 px-8 rounded hover:bg-blue-50"
                >
                  Video
                </li>
              </motion.ul>
            </div>
          </div>
          {taskContentType && (
            <TaskAddContent
              type={taskContentType}
              setTaskContentType={setTaskContentType}
              taskId={tasks[0].id}
            />
          )}
        </div>
        {/**right side bar */}
        <div className="border-l border-gray-100 w-1/4 p-6 h-full overflow-y-auto ">
          {options === "messages" ? <Messages /> : null}
          {options === "jim" ? <Jim /> : null}
          {options === "whatsNew" ? <WhatsNew /> : null}
          {options === "Notification" ? <Notification /> : null}
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { contentId: string; taskslug?: string } }[] = [];

  try {
    const contentRes = await fetch(`${backend_api}/api/contents`);
    const contents = await contentRes.json();
    const contentId = contents?.data[0].id;
    const tasksRes = await fetch(`${backend_api}/api/tasks`);
    const tasks = await tasksRes.json();
    console.log("paths contents", contents.data);
    console.log("paths tasks", tasks.data);
    contents.data.map((content: Contnet) => {
      tasks.data.map((task: Tasks) => {
        paths.push({
          params: {
            contentId: content.attributes.slug,
            taskslug: task.attributes.slug,
          },
        });
      });
    });
  } catch (err) {
    console.error("paths error", err);
    paths = [
      {
        params: {
          contentId: "",
          taskslug: "",
        },
      },
    ];
  }
  console.log("paths", paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const contentId = context.params?.contentId;
  const taskslug = context.params?.taskslug;
  let taskContent = [];
  try {
    const contentRes = await fetch(
      `${backend_api}/api/contents?filters[slug][$eq]=${contentId}`
    );

    const contents = await contentRes.json();
    const tasksRes = await fetch(
      `${backend_api}/api/tasks?filters[slug][$eq]=${taskslug}`
    );
    const tasks = await tasksRes.json();
    if (tasks.data[0]) {
      const tasksContentRes = await fetch(
        `${backend_api}/api/task-contents?[taskId][$eq]=${tasks.data[0].id}&&populate=*`
      );
      taskContent = await tasksContentRes.json();
      console.log("taskContent ==>", taskContent);
    }

    return {
      props: {
        contents: contents.data,
        tasks: tasks.data,
        taskContent: taskContent.data,
        errMsg: false,
      },
    };
  } catch (error) {
    console.log("error dd", error);
    return {
      props: {
        errMsg: true,
      },
    };
  }
};
export default StateId;
