import React from "react";
import { useState } from "react";

type Props = {};

export default function Results({}: Props) {
  var searchParam = "elm lumber";
  var count = 0;
  var parsed;
  // var iconList: string[];
  // iconList = [];
  // const [iconList, setIconList] = useState({ key: "", value: "" });

  // const addIconPath = () => {
  //   setIconList({ ...iconList });
  // };

  const [iconList, setIconList] = useState({});
  const addIconPath = (key: string, value: string) => {
    setIconList({ ...iconList, [key]: value });
  };

  const appendCall = "https://xivapi.com/search?string=" + searchParam;

  fetch(appendCall)
    .then((response) => response.json())
    .then((response) => {
      parsed = response.Results;
      for (var i = 0; i < parsed.length; i++) {
        var result = parsed[i];
        if (result.UrlType === "Item") {
          console.log(result);
          count++;
          //addIconPath(result.ID.toString(), result.Icon);
        }
      }
      //console.log(count); //for debugging
    });

  return (
    <div className="absolute left-[14%] w-[40%] bg-gunmetal h-full">
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
      {Object.keys(iconList).map((key) => (
        <img className="lg:w-10 md:w-8 sm:w-8" />
      ))}
    </div>
  );
}
