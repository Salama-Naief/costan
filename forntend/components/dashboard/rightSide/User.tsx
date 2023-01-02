import Image from "next/image";
import React from "react";

interface users {
  id: number;
  name: string;
  job: string;
  img: string;
  lastConnect: string;
}

function User({ name, id, job, img, lastConnect }: users) {
  return (
    <div
      key={id}
      className="flex items-center justify-between my-2 cursor-pointer hover:bg-blue-50 p-1 rounded"
    >
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
          <div className="text-xs text-gray-100">{job}</div>
        </div>
      </div>
      <p className="text-xs">{lastConnect}</p>
    </div>
  );
}

export default User;
