import React from "react";

type Props = {};

export default function Results({}: Props) {
  const results = await fetch(
    "https://xivapi.com/search?string=${searchString}",
    {
      method: "GET",
      headers: {
        Accept: "applications/json",
        "Content-Type": "applications/json",
      },
    }
  );

  return (
    <div className="absolute left-[12%] w-[40%] bg-gunmetal h-full">
      <div className="flex pl-2 pt-4 pb-4 items-center border-b-2 border-b-raisin">
        <img
          className="lg:w-10 md:w-8 sm:w-8"
          src="/bard-magni.png"
          alt="search icon"
        />
        <h1 className="lg:text-3xl md:text-xl sm:text-sm text-spring pt-2 pl-4">
          Searchbar to go here
        </h1>
      </div>
    </div>
  );
}
