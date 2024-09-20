import { Availability } from "@/types/availability";
import React from "react";

interface Props {
  availability: Availability;
}
const AvailabilityButton = ({ availability }: Props) => {
  return (
    <button
      type="button"
      className={`text-white focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm py-1 mb-2 w-20  focus:outline-none  
        ${
          availability === Availability.online
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-400 cursor-not-allowed focus:ring-0"
        }`}
    >
      {availability}
    </button>
  );
};

export default AvailabilityButton;
