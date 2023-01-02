import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import {
  GridDots,
  QuestionMark,
  Flame,
  Mail,
  Bulb,
  Speakerphone,
  ChevronDown,
} from "tabler-icons-react";
import { Store } from "../../utils/Store";
import CreateButton from "../utils/CreateButton";
import CustomButton from "../utils/CustomButton";
import Search from "../utils/Search";

function DashboardNav() {
  const { state, dispatch } = useContext(Store);
  const [navIcons, setNavIcons] = useState<string>(state.options);
  const { data: session } = useSession();
  const handleOptions = (type: string) => {
    setNavIcons(type);
    dispatch({ type: "ADD_OPTIONS", payload: type });
  };
  return (
    <header className="px-4 flex items-center justify-between py-1 border-b border-gray-100">
      <div className="text-blue-100 flex items-center space-x-8">
        <Link href={"/"}>
          <GridDots className="w-8 h-8" />
        </Link>
        <Search />
      </div>
      <div className="flex items-center space-x-1.5">
        <div className="px-2">
          <CreateButton />
        </div>
        <div
          onClick={() => handleOptions("jim")}
          className={`${
            navIcons === "jim" ? "bg-gray-100" : "bg-textColor-white"
          } navIcons`}
        >
          <Bulb />
        </div>
        <div
          onClick={() => handleOptions("messages")}
          className={`${
            navIcons === "messages" ? "bg-gray-100" : "bg-textColor-white"
          } navIcons`}
        >
          <Mail />
        </div>
        <div
          onClick={() => handleOptions("whatsNew")}
          className={` ${
            navIcons === "newIncostan" ? "bg-gray-100" : "bg-textColor-white"
          } navIcons`}
        >
          <Flame />
        </div>
        <div
          onClick={() => handleOptions("Notification")}
          className={`${
            navIcons === "Notification" ? "bg-gray-100" : "bg-textColor-white"
          } navIcons`}
        >
          <Speakerphone />
        </div>
        <div
          onClick={() => handleOptions("info")}
          className={`${
            navIcons === "info" ? "bg-gray-100" : "bg-textColor-white"
          } hover:bg-gray-100 p-2 flex items-center space-x-0.5 rounded transition duration-150 ease-in-out cursor-pointer`}
        >
          <QuestionMark className=" h-5 w-5 p-0.5 bg-textColor-100 rounded-full text-textColor-white" />
          <ChevronDown className="w-4 h-4" />
        </div>
        <div
          onClick={() => handleOptions("")}
          className={`hover:bg-gray-100 p-0.5 flex items-center space-x-0.5 rounded transition duration-200 ease-in-out cursor-pointer`}
        >
          <img
            src={session?.user?.image || "/img/images.jpg"}
            alt=""
            className="relative h-8 w-8  rounded-full overflow-hidden"
          />

          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}

export default DashboardNav;
