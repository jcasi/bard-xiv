import React from "react";

type Props = {};

export default function Info({}: Props) {
  return (
    <div className="absolute left-[52%] h-full">
      <img className="h-12 w-12 my-auto" src="/bard-flat.png" alt="bard icon" />
      <h1 className="text-9xl text-amaranth">INFO</h1>
    </div>
  );
}
