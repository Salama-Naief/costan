import React from "react";
import GiftSection from "../components/home/GiftSection";
import HomeFooter from "../components/footer/HomeFooter";
import HomeNavbar from "../components/navbar/HomeNavbar";
import CustomButton from "../components/utils/CustomLink";

function Pricing() {
  return (
    <div className="container mx-auto">
      <HomeNavbar />
      <div className="px-4 md:px-0">
        <h1 className="text-center text-blue-100 my-8 text-2xl md:text-3xl lg:text-4xl font-semibold">
          Simple, transparent pricing
        </h1>
        <div className="grid md:grid-cols-3 min-h-fit">
          <div className="p-2 w-full">
            <div className="border p-8 rounded border-textColor-100">
              <div className="flex justify-between">
                <div className="font-bold text-xl">Trial</div>
                <div className="font-semibold text-xl">Free</div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">
                  No of projects
                </div>
                <div className="font-semibold">10</div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">Team size</div>
                <div className="font-semibold">05</div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">
                  Platform integrate
                </div>
                <div className="font-semibold">03</div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">Others</div>
                <div className="font-semibold">Chat</div>
              </div>
              <div className="text-center mt-6">
                <CustomButton title={"get started"} border />
              </div>
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="border p-8 rounded border-textColor-100">
              <div className="flex justify-between">
                <div className="font-bold text-xl">
                  Pro{" "}
                  <span className="text-textColor-white bg-blue-100 rounded px-2 py-0.5 text-sm font-normal">
                    Popular
                  </span>
                </div>
                <div className="font-semibold text-xl">
                  20${" "}
                  <span className="text-xs text-textColor-100">
                    /mo/annualy
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">
                  No of projects
                </div>
                <div className="font-bold">Unlimited</div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">Team size</div>
                <div className="font-bold">Unlimited</div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">
                  Platform integrate
                </div>
                <div className="font-bold">Unlimited</div>
              </div>
              <div className="flex justify-between my-6">
                <div className="font-bold text-textColor-100">Others</div>
                <div className="font-bold">Chat,Download</div>
              </div>
              <div className="text-center mt-6">
                <CustomButton title={"get started"} bg />
              </div>
            </div>
          </div>

          <div className="p-2 w-full h-full">
            <div className="h-full grid content-between border p-8 rounded border-textColor-100">
              <div>
                <div className="font-bold text-xl">
                  Organization / Enterprise
                </div>
                <div className="text-textColor-100 font-semibold my-6">
                  Description
                </div>
              </div>
              <div className="text-center mt-6">
                <CustomButton title={"get started"} border />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GiftSection />
      <footer className="bg-blue-200 text-textColor-white">
        <HomeFooter />
      </footer>
    </div>
  );
}

export default Pricing;
