import { useLocale } from "next-intl";
import React from "react";

export default function PartDescription({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const local = useLocale();
  return (
    <header className="pt-28 ">
      <div className="container">
        <h2
          className={`text-4xl font-bold before:h-1 before:bg-secondColor before:absolute relative before:w-16 ${
            local === "ar" ? "before:right-0" : "before:left-0"
          } before:rounded-full before:top-2/4 before:-translate-y-1/2 ps-20`}
        >
          {title}
        </h2>
        <p
          className=" text-paragraphColor mt-6 mb-12  max-w-[1021px] h-auto  sm:text-lg md:leading-7 
        "
        >
          {content}
        </p>
      </div>
    </header>
  );
}
