import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { GridDots } from "tabler-icons-react";
import { Logo } from "../../utils/mainLogo";
import CustomButton from "../utils/CustomLink";

function HomeNavbar() {
  const { data: session } = useSession();
  return (
    <header className="px-4 md:px-0 flex justify-between py-4 container mx-auto">
      <Link href={"/"}>
        <div className="text-blue-100 flex items-center space-x-1">
          <GridDots className="w-7 h-7" />
          <div className="text-3xl font-[700] capitalize">{Logo}</div>
        </div>
      </Link>
      <div className="flex uppercase items-center space-x-4">
        <CustomButton title={"pricing"} navegation="pricing" />
        {session?.user ? (
          <div className="flex space-x-2">
            <div
              onClick={() => signOut()}
              className="bg-blue-100 text-textColor-100 px-2 py-1"
            >
              Logout
            </div>
            <CustomButton title={"dashboard"} navegation="dashboard" border />
          </div>
        ) : (
          <CustomButton title={"login"} navegation="login" border />
        )}
      </div>
    </header>
  );
}

export default HomeNavbar;
