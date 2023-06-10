import React from "react";
import Image from "next/image";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="container fixed left-0 top-0 w-[12%] h-full border-r border-r-raisin bg-gunmetal">
      <p className="inline-flex p-2 items-center ">
        <img
          className="h-12 w-12 my-auto"
          src="/bard-flat.png"
          alt="bard icon"
        />
        <h1 className="text-4xl text-flax font-trajan pl-2">Bard XIV</h1>
      </p>
      <ul className="pt-4">
        <li className="p-4">Bard</li>
      </ul>
    </div>
  );
}
