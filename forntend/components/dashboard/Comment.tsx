import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import {
  MessageDots,
  MoodAngry,
  MoodAnnoyed2,
  MoodHappy,
  Trash,
} from "tabler-icons-react";
import { getSession } from "next-auth/react";
import { backend_api } from "../../utils/Url";
import Moment from "react-moment";

interface IFormInput {
  comment: string;
}
function Comment({ contentId }: { contentId: number }) {
  //const comments = [1, 2, 3];
  const [mood, setMood] = useState<String>("");
  const [seeMore, setSeeMore] = useState<Boolean>(false);
  const [user, setUser] = useState<any | null>(null);
  const [comments, setComments] = useState<Comments[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  useEffect(() => {
    const getUser = async () => {
      const userRes = await getSession();
      setLoading(true);
      const res = await fetch(
        `${backend_api}/api/comments?filters[contentId][$eq]=${contentId}`
      );
      const CommentsData = await res.json();
      setUser(userRes);
      if (CommentsData.data) {
        setComments(CommentsData.data);
        setLoading(false);
      } else {
        setErrMsg(CommentsData.error?.message);
        setLoading(false);
      }
    };
    getUser();
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (user?.id) {
      const commentData = {
        data: {
          contentId: contentId,
          fromUserId: user?.id,
          message: data.comment,
        },
      };
      const res = await fetch(`${backend_api}/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentData),
      });

      const comment = await res.json();
      console.log("comment", comment);
    }
  };

  const hamdelMoode = async (type: string) => {
    console.log("type", type);
  };
  return (
    <div className="w-full mt-2 rounded-xl border border-gray-100 p-2 text-sm bg-textColor-white">
      <div className="flex justify-between items-center px-4">
        <div className="text-textColor-100">Comments</div>
        <div className="flex items-center space-x-2">
          <span
            onClick={() => hamdelMoode("happy")}
            className="text-yellow-100 cursor-pointer hover:scale-110 transition duration-200 active:scale-95"
          >
            <MoodHappy />
          </span>
          <span
            onClick={() => hamdelMoode("annoyed")}
            className="text-yellow-100 cursor-pointer hover:scale-110 transition duration-200 active:scale-95"
          >
            <MoodAnnoyed2 />
          </span>
          <span
            onClick={() => hamdelMoode("angry")}
            className="text-error cursor-pointer hover:scale-110 transition duration-200 active:scale-95"
          >
            <MoodAngry />
          </span>
          <span
            onClick={() => setMood(mood === "comment" ? "" : "comment")}
            className="text-textColor-100 cursor-pointer hover:scale-110 transition duration-200 active:scale-95"
          >
            <MessageDots />
          </span>
        </div>
      </div>
      {mood === "comment" && (
        <motion.div
          initial={{ scale: 0, display: "none" }}
          animate={{ scale: 1, display: "block" }}
          transition={{ type: "just" }}
          className="flex items-center w-full  py-4 "
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex space-x-2 text-sm"
          >
            <input
              {...register("comment", {
                required: "comment Name is required",
                minLength: {
                  value: 3,
                  message: "email Name must be at least 3",
                },
              })}
              className={`${
                errors.comment
                  ? "border-error text-error"
                  : "border-textColor-100 focus:border-blue-100"
              } input flex-1`}
              id="email"
              placeholder="Comment"
            />
            <button
              type="submit"
              className="px-2 py-2 rounded bg-textColor-100 text-textColor-white hover:bg-blue-100 transition duration-200 active:scale-95"
            >
              {loading ? "wait..." : "Comment"}
            </button>
          </form>
          <div className="text-error capitalize text-xs">
            {errors.comment?.message}
          </div>
        </motion.div>
      )}
      <div className="">
        {comments.length > 0 && (
          <div className="px-4 pt-2">
            {!seeMore ? (
              <CommentBody comment={comments[0]} />
            ) : (
              comments.map((comment: Comments) => (
                <CommentBody comment={comment} />
              ))
            )}

            <button
              onClick={() => setSeeMore(!seeMore)}
              className="text-blue-100  active:scale-95 transition duration-200 "
            >
              {seeMore ? "See less" : "See more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

interface User {
  username: string;
  email: string;
}
const CommentBody = ({ comment }: { comment: Comments }) => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const userFun = async () => {
      const res = await fetch(
        `${backend_api}/api/users/${comment.attributes.fromUserId}`
      );
      const userData = await res.json();
      setUser(userData);
    };
    userFun();
  }, []);
  console.log("user", user);
  return (
    <div className="flex justify-between my-1">
      <div className="flex space-x-2">
        <img
          src={"/img/images.jpg"}
          className="object-cover w-6 h-6 rounded-full"
          alt=""
        />
        <div>
          <span className="text-textColor-100 capitalize">
            {user?.username}
          </span>
          <span className="mx-1 text-textColor-100">
            at
            <span className="text-blue-100 mx-1">
              <Moment format="DD/MM hh:mm">
                {comment.attributes.createdAt}
              </Moment>
            </span>
          </span>
          <div className="py-1">{comment.attributes.message}</div>
        </div>
      </div>
      <button className="text-error transition duration-200 active:scale-90">
        <Trash size={20} />
      </button>
    </div>
  );
};
export default Comment;
