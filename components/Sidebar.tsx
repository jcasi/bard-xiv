import React from "react";
import { useState } from "react";

type Props = {};

export default function Sidebar({}: Props) {
  const [selected, setSelected] = useState(false);
  const [textColor, setTextColor] = useState("");

  const handleToggle = () => {};

  return (
    <div className="fixed left-0 top-0 w-[12%] h-full border-r-2 border-r-raisin bg-gunmetal">
      <div className="flex pl-2 pt-4 pb-4 items-center border-b-2 border-b-raisin">
        <img className="lg:w-10 md:w-8" src="/bard-flat.png" alt="bard icon" />
        <h1 className="lg:text-3xl md:text-xl sm:text-sm text-flax font-trajan pl-2 pt-2">
          Bard XIV
        </h1>
      </div>
      <ul className="pt-4">
        <li className="pt-2 pb-2">
          <a href="#">
            <span className="pl-4 sm:text-xs md:text-sm lg:text-xl text-cadet hover:text-babypowder">
              Retainer Items
            </span>
          </a>
        </li>
        <li className="pt-2 pb-2">
          <a href="#">
            <span className="pl-4 sm:text-xs md:text-sm lg:text-xl text-cadet hover:text-babypowder">
              Tracked Items
            </span>
          </a>
        </li>
        <li className="pt-2 pb-2">
          <a href="#">
            <span className="pl-4 sm:text-xs md:text-sm lg:text-xl text-cadet hover:text-babypowder">
              Top World Items
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
