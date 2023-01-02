import Head from "next/head";
import Image from "next/image";
import React, { useContext, useState } from "react";
import DashboardLeftSide from "../../../components/dashboard/DashboardLeftSide";
import Jim from "../../../components/dashboard/rightSide/Jim";
import Messages from "../../../components/dashboard/rightSide/Messages";
import Notification from "../../../components/dashboard/rightSide/Notification";
import WhatsNew from "../../../components/dashboard/rightSide/WhatsNew";
import DashboardNav from "../../../components/navbar/DashboardNav";
import { Store } from "../../../utils/Store";
import wavingHand from "../../public/img/faces/waving-hand.png";
import CreateButton from "../../../components/utils/CreateButton";
import CreateContent from "../../../components/dashboard/CreateContent";
import { ClockHour4, DotsVertical, SquarePlus } from "tabler-icons-react";
import Content from "../../../components/dashboard/Content";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { backend_api } from "../../../utils/Url";

function Index({ contents }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { state } = useContext(Store);
  const { content } = state;
  const { options, createContent } = state;

  return (
    <div className=" h-screen flex flex-col  overflow-hidden">
      <Head>
        <title>dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardNav />
      <main className="flex flex-1 h-full">
        <div>
          <DashboardLeftSide />
        </div>

        {/**main bar */}
        <div className="flex-1 bg-blue-50 mb-20 h-full relative ">
          <div className="p-8 pb-20 h-full overflow-y-auto">
            <div className="text-xl font-bold">My Content</div>

            <p className="text-textColor-100 font-semibold">
              you can start prepare content and track from here
            </p>
            {createContent && <CreateContent />}
            <div className="my-4 relative h-full">
              {contents?.length > 0 ? (
                <div>
                  <div className="pt-4">
                    <div className=" font-bold">Next Week</div>
                  </div>
                  {contents.map((cont: Contnet) => (
                    <Content content={cont} />
                  ))}
                </div>
              ) : (
                <div className="h-full flex justify-center items-center bg-textColor-white">
                  <div className="w-2/3 text-center">
                    <p className="font-bold text-xl">
                      You have not planned any content yet. Create content now
                    </p>
                    <p className="text-textColor-100 my-2">
                      Content creators like youtubers, podcast, blogger, Movie
                      or short film and social media using multiple tool to
                      manage content across platforms.
                    </p>
                    <div className="flex justify-center my-6">
                      <CreateButton />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/**right side bar */}
        <div className="border-l border-gray-100 w-1/4 p-6 h-full overflow-y-auto ">
          {options === "messages" ? <Messages /> : null}
          {options === "jim" ? <Jim /> : null}
          {options === "whatsNew" ? <WhatsNew /> : null}
          {options === "Notification" ? <Notification /> : null}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("context", context);
  try {
    const contentRes = await fetch(`${backend_api}/api/contents`);
    const contents = await contentRes.json();
    console.log("content", contents.data);
    return {
      props: {
        contents: contents.data,
        errMsg: false,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        errMsg: true,
      },
    };
  }
};

export default Index;
