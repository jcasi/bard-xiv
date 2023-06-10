import React from "react";

type Props = {};

export default function Results({}: Props) {
  return (
    <div className="absolute left-[12%] bg-gunmetal h-full">
      <img className="h-12 w-12 my-auto" src="/bard-flat.png" alt="bard icon" />
      <h1 className="text-9xl">RESULTS</h1>
    </div>
  );
}
