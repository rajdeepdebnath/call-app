"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { advisor } from "@/types/advisor";
import { Availability } from "@/types/availability";
import AvailabilityButton from "./AvailabilityButton";
import Price from "./Price";

interface Props {
  advisor: advisor;
  isLastItem: boolean;
}

const Advisor = ({ advisor, isLastItem }: Props) => {
  const [availability, setAvailability] = useState({
    call: advisor["call-availability"],
    chat: advisor["chat-availability"],
  });

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_MOCK_URL}advisor-availability?advisorId=${advisor.id}`;
        const resp = await fetch(url);
        const data = await resp.json();

        setAvailability({
          call: data["call-availability"],
          chat: data["chat-availability"],
        });
      } catch (error) {
        console.log(error);
      }
    }, 30000);

    return () => clearInterval(intervalId);
  }, [advisor.id]);

  return (
    <div
      className={`grid grid-cols-[1fr_1fr_3fr] items-center gap-4 my-6 pb-3 ${
        isLastItem ? "" : "border-b"
      }`}
    >
      <div className="relative w-24 aspect-square">
        <Image
          src={advisor.pictureUrl}
          alt={advisor.name}
          sizes="1x"
          fill
          priority
          className="rounded-full"
        />
      </div>
      <div className="text-green-600">{advisor.name}</div>
      <div className="flex flex-col justify-between items-end w-full">
        <Price price={advisor.price} />
        <AvailabilityButton availability={availability.call as Availability} />
        <AvailabilityButton availability={availability.chat as Availability} />
      </div>
    </div>
  );
};

export default Advisor;
