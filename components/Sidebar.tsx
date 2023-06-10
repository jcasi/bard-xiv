import React from "react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="fixed left-0 top-0 w-[12%] h-full border-r-2 border-r-raisin bg-gunmetal">
      <p className="inline-flex pl-2 pt-4 pb-4 items-center border-b-2 border-b-raisin">
        <img className="w-[20%] my-auto" src="/bard-flat.png" alt="bard icon" />
        <h1 className="text-3xl text-flax font-trajan pl-2 pt-2">Bard XIV</h1>
      </p>
      <ul className="pt-4">
        <li className="pl-4 pt-3">Bard</li>
        <li className="pl-4 pt-3">Bard</li>
        <li className="pl-4 pt-3">Bard</li>
      </ul>
    </div>
  );
}
