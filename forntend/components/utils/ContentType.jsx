import React from "react";

function ContentType({ title, plateform }) {
  return (
    <div
      className={`${
        plateform === title && "bg-blue-200 text-textColor-white"
      } capitalize border border-textColor-100 text-sm rounded-full py-1 px-3 cursor-pointer transtion duration-200 hover:bg-blue-100 hover:text-textColor-white`}
    >
      {title}
    </div>
  );
}

export default ContentType;
