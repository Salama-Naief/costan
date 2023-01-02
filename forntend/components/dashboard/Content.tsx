import Image from "next/image";
import React, { useContext, useState } from "react";
import { ClockHour4, DotsVertical } from "tabler-icons-react";
import { Store } from "../../utils/Store";
import { motion } from "framer-motion";
import Link from "next/link";
import ContentType from "./ContentType";

const Content = ({ content }: { content: Contnet }) => {
  const { state, dispatch } = useContext(Store);
  const [editMenu, setEditMenu] = useState(false);

  const c =
    new Date(content.attributes.publishdate).getTime() - new Date().getTime();
  console.log("date", new Date(c));
  const publishedDate = () => {
    const days =
      new Date(content.attributes.publishdate).getUTCDay() -
      new Date().getUTCDay();
    const hours =
      new Date(content.attributes.publishdate).getUTCHours() -
      new Date().getUTCHours();
    const minutes =
      new Date(content.attributes.publishdate).getTime() - new Date().getTime();
    console.log(days, hours, new Date(minutes).getHours());
    return days > 0
      ? days
      : 0 + "d: " + hours > "0"
      ? hours
      : 0 + "h: " + minutes > "0"
      ? hours
      : 0 + "m: " + "left";
  };

  const handleDelete = () => {
    dispatch({ type: "REMOVE_CONTENT", payload: content });
  };
  return (
    <div
      key={content.attributes.id}
      className="bg-textColor-white p-4 flex items-center justify-between rounded my-4"
    >
      <div>
        <div className="flex items-center space-x-2">
          <ContentType contentType={content.attributes.contentType} />
          <p className="text-xs rounded-full px-2 py-0.5 capitalize bg-gray-100 ">
            {"content.status"}
          </p>
        </div>
        <Link href={`/dashboard/content/${content.attributes.slug}`}>
          <div className="font-bold text-xl py-1 capitalize">
            {content.attributes.title}
          </div>
        </Link>
        <div className="text-sm text-textColor-100 capitalize py-1">
          plateform:{content.attributes.Plateform}
        </div>
      </div>
      <div className="flex flex-col text-textColor-100 items-stretch text-right">
        <div className="flex justify-end mb-2 cursor-pointer  relative">
          <DotsVertical onClick={() => setEditMenu(!editMenu)} />
          {
            <motion.div
              initial={{ display: "none", scale: 0 }}
              animate={
                editMenu
                  ? { display: "block", scale: 1 }
                  : { display: "none", scale: 0 }
              }
              className="absolute p-1 w-full text-center top-2 left-0 shadow-lg rounded bg-textColor-white"
            >
              <div className="p-1  cursor-pointer transtion duration-200 hover:bg-blue-50 rounded">
                Edit
              </div>
              <div
                onClick={handleDelete}
                className="hover:text-error cursor-pointer p-1 transtion duration-200 hover:bg-blue-50 rounded"
              >
                Delete
              </div>
            </motion.div>
          }
        </div>
        <div className="text-xs my-2 ">
          Created on:{new Date().toLocaleDateString()}
        </div>
        <div className="flex items-center space-x-1 text-xs text-green-100">
          <ClockHour4 className="w-5 h-5" />
          <span>{publishedDate()} Days to publish</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
