import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { inventedTeam } from "../../../utils/inventedTeam";
import SearchInput from "./SearchInput";
import jim from "../../../public/img/jim.png";
import {
  Bulb,
  GripVertical,
  InfoCircle,
  ServerBolt,
  Speakerphone,
  Star,
} from "tabler-icons-react";

//interface
interface jims {
  id: number;
}
//helper function
const NotificationItem = ({ id }: jims) => {
  const [saved, setSaved] = useState<string>("true");
  return (
    <div key={id} className="p-1 my-2 rounded border border-gray-100">
      <div className="flex items-center space-x-1 flex-1">
        <div className="flex items-center text-textColor-100">
          <ServerBolt className="" />
        </div>
        <p className="text-sm">Rahul mention you in Story board (Board name)</p>
      </div>
    </div>
  );
};

//main function
function Notification() {
  const [jims, setJims] = useState<boolean>(true);
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="h-full">
      <div className="flex items-center space-x-2">
        <Speakerphone className="w-10 h-10 text-green-100" />
        <div className="text-2xl font-semibold flex items-center space-x-0.5">
          Notification
        </div>
      </div>
      <div className="w-full h-px bg-gray-100 my-4"></div>
      <div className="h-full">
        {jims ? (
          items.map((team, index) => <NotificationItem id={index} />)
        ) : (
          <div className="h-full py-12 text-center">
            <div>
              <Image src={jim} alt="" />
              <div className="text-xl font-semibold py-6">
                No notification found
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification;
