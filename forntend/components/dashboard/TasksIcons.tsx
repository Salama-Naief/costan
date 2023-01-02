import React from "react";
import {
  CircleDot,
  Components,
  PlaystationTriangle,
  Point,
  Script,
  Sitemap,
} from "tabler-icons-react";

interface Task {
  type?: string;
  title?: string;
}
function TasksIcons({ title, type }: Task) {
  return (
    <div className="flex space-x-1 text-xs uppercase">
      {type === "story board" && (
        <span
          className={`${
            title ? "bg-blue-50 text-blue-150" : "bg-gray-50 text-textColor-100"
          } taskIcons `}
        >
          <Sitemap className="w-4 h-4" />
          <p className="text-[0.6rem]">{type}</p>
        </span>
      )}
      {type === "script/editing" && (
        <span
          className={`${
            title
              ? "bg-pirple-50 text-pirple-100"
              : "bg-gray-50 text-textColor-100"
          } taskIcons `}
        >
          <Script className="w-4 h-4" />
          <p className="text-[0.6rem]">{type}</p>
        </span>
      )}
      {type === "shoting/recording" && (
        <span
          className={`${
            title
              ? "bg-yellow-50 text-yellow-100"
              : "bg-gray-50 text-textColor-100"
          } taskIcons `}
        >
          <CircleDot className="w-4 h-4" />
          <p className="text-[0.6rem]">{type}</p>
        </span>
      )}
      {type === "production" && (
        <span
          className={`${
            title
              ? "bg-green-50 text-green-100"
              : "bg-gray-50 text-textColor-100"
          } taskIcons  `}
        >
          <PlaystationTriangle className="rotate-90 w-4 h-4" />
          <p className="text-[0.6rem]">{type}</p>
        </span>
      )}
      {type === "review" && (
        <span
          className={`${
            title ? " bg-red-50 text-red-100" : "bg-gray-50 text-textColor-100"
          } taskIcons `}
        >
          <Point className="w-5 h-5" />
          <p className="text-[0.6rem]">{type}</p>
        </span>
      )}
      {type === "final draft" && (
        <span
          className={`${
            title
              ? " bg-orange-50 text-orange-100"
              : "bg-gray-50 text-textColor-100"
          } taskIcons `}
        >
          <Components className="w-4 h-4" />
          <p className="text-[0.6rem]">{type}</p>
        </span>
      )}
    </div>
  );
}

export default TasksIcons;
