import { GetStaticProps } from "next";
import React from "react";
import PlateformSide from "../../components/loginAndregister/PlateformSide";
import SideBar from "../../components/loginAndregister/SideBar";
import { backend_api } from "../../utils/Url";

function Plateform({ contentTypes }: { contentTypes: ContentTypes[] }) {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <SideBar title="One stop solution for all Content creators" />
      <PlateformSide contentTypes={contentTypes} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const contentTypeRes = await fetch(`${backend_api}/api/content-types`);
    const contentTypes = await contentTypeRes.json();

    return {
      props: {
        contentTypes: contentTypes.data,
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
export default Plateform;
