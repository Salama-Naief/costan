import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BoxMultiple, Stack2, Home, Settings } from "tabler-icons-react";

function DashboardLeftSide() {
  const router = useRouter();
  const { pathname } = router;
  const [navIcons, setNavIcons] = useState<string>();
  console.log(router);
  return (
    <div className="w-fit h-full bg-blue-200 text-textColor-white">
      <div className="grid">
        <Link href={"/dashboard"}>
          <div
            onClick={() => setNavIcons("jim")}
            className={`${
              pathname === "/dashboard" ? "bg-blue-100" : "bg-blue-200"
            } leftSideIcons`}
          >
            <Home />
          </div>
        </Link>
        <Link href={"/dashboard/content"}>
          <div
            onClick={() => setNavIcons("jim")}
            className={`${
              pathname === "/dashboard/content" ? "bg-blue-100" : "bg-blue-200"
            } leftSideIcons`}
          >
            <BoxMultiple />
          </div>
        </Link>
        <div
          onClick={() => setNavIcons("jim")}
          className={`${
            navIcons === "jim" ? "bg-blue-100" : "bg-blue-200"
          } leftSideIcons`}
        >
          <Stack2 />
        </div>
        <div
          onClick={() => setNavIcons("jim")}
          className={`${
            navIcons === "jim" ? "bg-blue-100" : "bg-blue-200"
          } leftSideIcons`}
        >
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default DashboardLeftSide;
