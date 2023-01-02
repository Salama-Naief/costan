import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import disappointed from "../../../public/img/faces/angry.png";
import angry from "../../../public/img/faces/disappointed.png";
import happy from "../../../public/img/faces/happy.png";
import jim from "../../../public/img/jim.png";
import { ChevronRight, Flame, Share } from "tabler-icons-react";

//helper function
const News = () => {
  const [feel, setFeel] = useState<string>("");
  return (
    <div className="rounded bg-textColor-50 shadow my-4">
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1 text-xs space-x-1">
            <p className="p-1  text-textColor-white bg-blue-200 rounded-full">
              ENHANCEMENT
            </p>
            <p className="text-gray-100">Feb ,04 2022</p>
          </div>
          <Share className="text-gray-100 cursor-pointer" />
        </div>
        <p className="text-blue-200 font-semibold my-1">
          DIY Editor For Web Message
        </p>
        <div className="text-sm text-textColor-100">
          <p className="py-1">Hi Marketers</p>
          <p className="py-1">it is a pain not to have creative freedom</p>
          <p className="py-1">
            We gave it a lot of thought and introduces te DIY drag and drop
            editor , which allows you to create your own bespoke ewb message
            template
          </p>
          <a
            href="/"
            className="flex items-center space-x-1 text-blue-100 py-2"
          >
            <p className="">Reed the document for more datials </p>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="relative mt-4">
        <div className="absolute -top-5 left-0 flex items-center w-full justify-center space-x-2">
          <div
            onClick={() => setFeel("disappointed")}
            className={`${
              feel === "disappointed" ? "bg-blue-150" : "bg-textColor-white"
            }  rounded-full cursor-pointer `}
          >
            <Image src={disappointed} width={32} height={32} alt="" />
          </div>
          <div
            onClick={() => setFeel("angry")}
            className={`${
              feel === "angry" ? "bg-blue-150" : "bg-textColor-white"
            }  rounded-full cursor-pointer `}
          >
            <Image src={angry} width={32} height={32} alt="" />
          </div>
          <div
            onClick={() => setFeel("happy")}
            className={`${
              feel === "happy" ? "bg-blue-150" : "bg-textColor-white"
            }  rounded-full cursor-pointer `}
          >
            <Image src={happy} width={32} height={32} alt="" />
          </div>
        </div>
        <div className="bg-gray-100 py-4 px-2 rounded">
          <form action="" className="">
            <input
              type="text"
              className="appearance-none outline-none text-sm w-full rounded p-1.5"
              placeholder="send us your feedback"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

//main function
function WhatsNew() {
  const [jims, setJims] = useState<boolean>(true);

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2">
        <Flame className="w-10 h-10 text-blue-150" />
        <div className="text-xl font-semibold flex items-center space-x-0.5">
          What's new on costan
        </div>
      </div>
      <div className="w-full h-px my-3 bg-gray-100"></div>
      <div className="h-full">
        {jims ? (
          <>
            <News />
            <News />
          </>
        ) : (
          <div className="h-full py-12 text-center">
            <div>
              <Image src={jim} alt="" />
              <div className="text-lg font-semibold py-6">No new here</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WhatsNew;
