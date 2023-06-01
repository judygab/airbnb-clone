import { useState } from "react";
import { Counter } from "../components/Counter";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSearchStore } from "../../../store";

const SearchBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const locationInput = useSearchStore((state) => state.location);
  const startDate = useSearchStore((state) => state.dates[0]);
  const endDate = useSearchStore((state) => state.dates[1]);

  const handleSelect = (ranges) => {
    useSearchStore.setState({
      dates: [ranges.selection.startDate, ranges.selection.endDate],
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleLocationUpdate = (e) => {
    useSearchStore.setState({ location: e.target.value });
  };

  return (
    <div className="flex flex-row self-center justify-center rounded-full border py-2 mt-8 w-3/4">
      <button
        className="border-r px-4 text-left"
        onClick={() => setIsSearchFocused(true)}
      >
        <p className="font-bold">Where</p>
        {isSearchFocused ? (
          <input
            type="text"
            placeholder="Search destinations"
            onChange={handleLocationUpdate}
            value={locationInput}
            className="text-slate-800 bg-transparent border-none outline-none"
          />
        ) : (
          <p className="text-slate-600">Search destinations</p>
        )}
      </button>
      <div className="dropdown dropdown-end px-4 border-r">
        <label tabIndex={1}>
          <p className="font-bold">Dates</p>
          <p className="text-slate-600">Select Ranges</p>
        </label>
        <div
          tabIndex={1}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FF385C"]}
          />
        </div>
      </div>
      <div className="dropdown dropdown-end px-4">
        <label tabIndex={2}>
          <p className="font-bold">Who</p>
          <p className="text-slate-600">Add Guests</p>
        </label>
        <div
          tabIndex={2}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Counter label="Adults" />
        </div>
      </div>
      <Link
        href="/search/results"
        className="px-4 text-white rounded-full bg-primary p-4 flex justify-center gap-3 flex-row"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
        <span>Search</span>
      </Link>
    </div>
  );
};

export default SearchBar;
