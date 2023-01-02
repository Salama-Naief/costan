import React from "react";

function ProcessState({ processType }: { processType?: string }) {
  return (
    <div className="w-fit ">
      {processType === "not started" && (
        <div className="uppercase rounded-full text-[0.7rem] px-2 py-0.5 bg-gray-50 text-textColor-100">
          {processType}
        </div>
      )}
      {processType === "in progress" && (
        <div className="uppercase rounded-full text-[0.7rem] px-2 py-0.5 bg-yellow-50 text-yellow-100">
          {processType}
        </div>
      )}
      {processType === "on hold" && (
        <div className="uppercase rounded-full text-[0.7rem] px-2 py-0.5 bg-red-50 text-red-100">
          {processType}
        </div>
      )}
      {processType === "completed" && (
        <div className="uppercase rounded-full text-[0.7rem] px-2 py-0.5 bg-green-50 text-green-100">
          {processType}
        </div>
      )}
    </div>
  );
}

export default ProcessState;
