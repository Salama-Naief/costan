import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { inventedTeam } from "../../../utils/inventedTeam";
import SearchInput from "./SearchInput";
import jim from "../../../public/img/jim.png";
import { Bulb, GripVertical, InfoCircle, Star } from "tabler-icons-react";

//interface
interface jims {
  id: string;
}
//helper function
const YourJams = ({ id }: jims) => {
  const [saved, setSaved] = useState<string>("true");
  return (
    <div
      key={id}
      className="flex justify-between items-center p-1 my-2 rounded border border-gray-100"
    >
      <div className="flex items-center space-x-0.5 flex-1">
        <div className="flex items-center text-textColor-100">
          <GripVertical className="" />
        </div>
        <p className="text-sm">
          Story of tatus of people world through out the things and life
        </p>
      </div>
      <Star
        onClick={() => setSaved(saved === id ? "" : id)}
        className={` ${
          saved === id ? "text-yellow-100" : "text-textColor-100"
        } w-5 h-5 cursor-pointer`}
      />
    </div>
  );
};

//main function
function Jim() {
  const [jims, setJims] = useState<boolean>(false);
  const items = [1, 2, 3, 1, 5];
  return (
    <div className="h-full">
      <div className="flex items-center space-x-2">
        <Bulb className="w-10 h-10 text-yellow-100" />
        <div className="text-2xl font-semibold flex items-center space-x-0.5">
          <span>Your Jam</span>
          <InfoCircle className="text-textColor-100 w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <SearchInput placeholder="Enter jam here" />
      <div className="h-full">
        {jims ? (
          items.map((team, index) => <YourJams id={index.toString()} />)
        ) : (
          <div className="h-full py-12 text-center">
            <div>
              <Image src={jim} alt="" />
              <div className="text-xl font-semibold py-6">No jam found</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jim;
