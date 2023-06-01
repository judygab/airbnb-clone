"use client";
import InfoCard from "../components/InfoCard";
import { useSearchStore } from "../../../store";

export const ResultsList = ({ data }) => {
  const searchLocation = useSearchStore((state) => state.location);

  const filteredListings =
    searchLocation === ""
      ? data
      : data.filter((listing) =>
          listing.name.toLowerCase().includes(searchLocation)
        );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {filteredListings.map((listing) => (
        <InfoCard listing={listing} key={listing.id} />
      ))}
    </div>
  );
};
