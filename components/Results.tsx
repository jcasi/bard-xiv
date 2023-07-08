import React from "react";
import { useState, useEffect } from "react";

type Props = {};

export default function Results({}: Props) {
  const [results, setResults] = useState<any[]>([]);
  var searchParam = "diadochos";
  let parsed = [];
  const itemList = new Array<any>();
  const appendLink = "https://xivapi.com/search?string=" + searchParam;
  const searchResults = () => {
    fetch(appendLink)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        parsed = data.Results;
        for (var i = 0; i < 12; i++) {
          if (parsed[i].UrlType === "Item") {
            //console.log(parsed[i]);
            itemList.push(parsed[i]);
          }
        }
        setResults(itemList);
      });
  };
  useEffect(() => searchResults(), []);

  return (
    <div className="absolute left-[14%] w-[40%] bg-gunmetal h-full">
      <div className="flex pl-2 pt-5 pb-4 items-center border-b-2 border-b-raisin">
        <img
          className="lg:w-10 md:w-8 sm:w-8"
          src="/bard-magni.png"
          alt="search icon"
        />
        <h1 className="lg:text-xl md:text-xl sm:text-sm text-cadet pt-2 pl-4">
          Search market board
        </h1>
      </div>
      <div className="">
        {results.map((result) => {
          return (
            <div className="flex border-b-2 border-b-raisin p-2">
              <img className="lg:w-10 md:w-8 sm:w-8" src={result.Icon} />
              <p>
                <h1 className="pl-2 text-babypowder">{result.Name}</h1>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
