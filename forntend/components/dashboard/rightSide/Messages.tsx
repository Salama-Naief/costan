import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { inventedTeam } from "../../../utils/inventedTeam";
import CustomButton from "../../utils/CustomButton";
import SearchInput from "./SearchInput";
import User from "./User";
import notTeamImg from "../../../public/img/users/notTeam.png";
import Chat from "./Chat";
import { Store } from "../../../utils/Store";

interface User {
  id: number;
  img: string;
  job: string;
  name: string;
  lastConnect: string;
}

function Messages() {
  const { state, dispatch } = useContext(Store);
  const [team, setTeam] = useState<boolean>(true);
  //const [userChat, setUserChat] = useState<user | null>(null);

  const handleUserChat = (user: User) => {
    dispatch({ type: "ADD_USER_CHAT", payload: user });
  };
  return (
    <div className="h-full pb-10">
      <div className="flex items-center space-x-2">
        <div className="relative w-8 h-8">
          <Image
            src="/img/users/messages.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </div>
        <div className="text-2xl font-semibold">Messages</div>
      </div>
      <div className="h-full">
        {state.userChat ? (
          <Chat />
        ) : (
          <div>
            <SearchInput placeholder="Search team member" />
            <div className="h-full">
              {team ? (
                inventedTeam.map((team) => (
                  <div key={team.id} onClick={() => handleUserChat(team)}>
                    <User
                      id={team.id}
                      job={team.job}
                      img={team.img}
                      name={team.name}
                      lastConnect={team.lastConnect}
                    />
                  </div>
                ))
              ) : (
                <div className="h-full py-12 text-center">
                  <div>
                    <Image src={notTeamImg} alt="" />
                    <div className="text-xl font-semibold py-6">
                      No jam found
                    </div>
                    <Link href={"/invitation"}>
                      <CustomButton title={"invite team"} bg />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;
