"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const headerContainerClasses = clsx(
    "container",
    "mx-auto",
    "flex",
    "justify-between",
    "bg-white",
    "py-8",
    {
      "h-[7.5rem]": !isExpanded,
      "h-[13rem]": isExpanded,
    }
  );

  const searchContainerClasses = clsx(
    "search-container",
    "flex",
    "flex-row",
    "rounded-full",
    "p-4",
    "justify-center",
    "items-center",
    "border",
    "drop-shadow-md",
    "bg-white",
    {
      "border-b-0": !isExpanded,
      "border-b-8": isExpanded,
    }
  );

  return (
    <header className="flex border-b bg-white z-50 fixed w-full">
      <div className={headerContainerClasses}>
        <div className="text-red-500">airbnb</div>
        {isExpanded ? (
          <SearchBar />
        ) : (
          <button onClick={toggleExpanded} className={searchContainerClasses}>
            <div className="input flex items-center border-r px-4">
              <p>Anywhere</p>
            </div>
            <div className="input flex items-center border-r px-4">
              <p>Any Date</p>
            </div>
            <div className="input flex items-center border-r px-4">
              <p>Add Guests</p>
            </div>
            <div className="search-btn px-4 rounded-full bg-primary h-10 w-10 relative">
              <MagnifyingGlassIcon className="h-4 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </button>
        )}
        <div>user</div>
      </div>
    </header>
  );
}
