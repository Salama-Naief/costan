import Image from "next/image";
import React, { FormEvent, useContext, useState } from "react";
import { BrandTelegram, ChevronLeft, Paperclip } from "tabler-icons-react";
import { Store } from "../../../utils/Store";
import wavingHand from "../../../public/img/faces/waving-hand.png";
// user Chat function
const UserChat = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="flex space-x-1.5">
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={name}
        />
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs text-green-300">Online</div>
      </div>
    </div>
  );
};

//
interface Message {
  id: number;
  img: string;
  message: string;
  userId: number;
}
const Message = ({ img, userId, id, message }: Message) => {
  return (
    <div
      className={`${
        id === userId ? "flex-row-reverse" : "flex-row"
      } flex gap-x-1 my-2 `}
    >
      <div className="w-8 h-8 relative rounded-full overflow-hidden">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>
      <div
        className={`${
          id === userId
            ? "bg-blue-100 text-textColor-white rounded-tl-2xl"
            : "bg-textColor-50 rounded-tr-2xl"
        } rounded-b-2xl p-2.5 border border-green-50`}
      >
        {message}
        <p className="text-xs my-1 ">10 mini</p>
      </div>
    </div>
  );
};

interface stateMesage {
  from: {
    name: string;
    id: number;
  };
  message: string;
  to: {
    name: string;
    id: number;
  };
}
function Chat() {
  const { state, dispatch } = useContext(Store);
  const { userChat, messages } = state;
  const [message, setMessage] = useState<string>("");
  const userId1 = 1;
  const userId2 = 2;
  console.log("sate", state);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message) {
      const messageSingle = {
        from: { name: "me", id: 101 },
        message: message,
        to: { name: userChat?.name, id: userChat.id },
        sendAt: new Date(),
      };
      dispatch({ type: "ADD_MESSAGE", payload: messageSingle });
      setMessage("");
    }
  };

  return (
    <div className="mt-4 py-4 border-t border-gray-100 relative h-full">
      <div className="flex items-center pb-4">
        <ChevronLeft
          onClick={() => dispatch({ type: "REMOVE_USER_CHAT" })}
          className="text-textColor-100 cursor-pointer"
        />
        <UserChat img={userChat?.img} name={userChat?.name} />
      </div>
      <div className="pt-8 pb-20 h-full overflow-y-auto">
        {messages?.map((mess: stateMesage, index: number) => (
          <div
            key={index}
            className={`${
              userChat.id === userId1 ? "justify-end" : "justify-start"
            } flex `}
          >
            {mess.message ? (
              <Message
                id={userChat?.id}
                img={userChat?.img}
                message={mess.message}
                userId={userId1}
              />
            ) : (
              <div className="text-gray-100 space-x-2 flex h-full items-center justify-center w-full py-12">
                <span>Say hello</span>
                <Image src={wavingHand} alt="" width={32} height={32} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2 absolute -bottom-12 left-0 w-full bg-textColor-white shadow">
        <label htmlFor="file">
          <Paperclip className="cursor-pointer text-textColor-100" />
        </label>
        <input type="file" id="file" className="hidden" />
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="my-6 border border-gray-100 rounded px-2  flex-1 bg-textColor-white flex items-center"
        >
          <input
            type="text"
            value={message}
            className="appearance-none outline-none px-1.5 py-2 text-sm flex-1"
            placeholder={"type your replay"}
            onChange={(e) => setMessage(e.target.value)}
            autoFocus
          />
          <button
            disabled={message === ""}
            type="submit"
            className={`cursor-pointer disabled:text-textColor-100 text-blue-100 border-l  border-gray-100`}
          >
            <BrandTelegram />
          </button>
        </form>
      </div>
    </div>
  );
}
/*${
  message === "" ? "text-textColor-100" : "text-blue-100"
}*/
export default Chat;
