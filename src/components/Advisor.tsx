import { advisor } from "@/types/advisor";
import { Availability } from "@/types/availability";
import Image from "next/image";
import React from "react";
import AvailabilityButton from "./AvailabilityButton";
import Price from "./Price";

interface Props {
  advisor: advisor;
  isLastItem: boolean;
}

const Advisor = ({ advisor, isLastItem }: Props) => {
  return (
    <div
      className={`grid grid-cols-[1fr_1fr_3fr] items-center gap-4 my-6 pb-3 ${
        isLastItem ? "" : "border-b"
      }`}
    >
      <div>
        <Image
          src={advisor.pictureUrl}
          alt={advisor.name}
          width={100}
          height={100}
          priority
          layout="responsive"
          className="rounded-full"
        />
      </div>
      <div className="text-green-600">{advisor.name}</div>
      <div className="flex flex-col justify-between items-end w-full">
        <Price price={advisor.price} />
        <AvailabilityButton
          availability={advisor["call-availability"] as Availability}
        />
        <AvailabilityButton
          availability={advisor["chat-availability"] as Availability}
        />
      </div>
    </div>
  );
};

export default Advisor;
