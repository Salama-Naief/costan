import Image from "next/image";
import React from "react";

function ContentType({ contentType }: { contentType: string }) {
  const contentTypeImg = () => {
    const contentTypeArry = [
      "/img/film.png",
      "/img/socail.png",
      "/img/article.png",
      "/img/podcast.png",
    ];
    if (contentType === "Film/Short video") {
      return contentTypeArry[0];
    } else if (contentType === "Social media post") {
      return contentTypeArry[1];
    } else if (contentType === "Podcast/Music") {
      return contentTypeArry[2];
    } else if (contentType === "Article/Blog") {
      return contentTypeArry[3];
    } else {
      return contentTypeArry[0];
    }
  };
  return (
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 relative">
        <Image
          src={contentTypeImg()}
          fill
          objectFit="contain"
          objectPosition="center"
          alt={contentType}
        />
      </div>
      <div className="font-bold text-sm">{contentType}</div>
    </div>
  );
}

export default ContentType;
