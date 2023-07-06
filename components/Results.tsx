import React from "react";
import { useState, useEffect } from "react";

type Props = {};

export default function Results({}: Props) {
  const [results, setResults] = useState<any[]>([]);
  var searchParam = "approved grade 4 skybuilder";
  let parsed = [];
  const itemList = new Array<any>();
  const appendLink = "https://xivapi.com/search?string=" + searchParam;
  const searchResults = () => {
    fetch(appendLink)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        parsed = data.Results;
        for (var i = 0; i < parsed.length; i++) {
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
      <div>
        {results.map((result) => {
          return (
            <div>
              <img className="lg:w-10 md:w-8 sm:w-8" src={result.Icon} />
              <h1>{result.Name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
