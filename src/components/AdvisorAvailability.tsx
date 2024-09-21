"use client";
import React, { useEffect, useState } from "react";

import { advisor } from "@/types/advisor";
import { Availability } from "@/types/availability";
import AvailabilityButton from "./AvailabilityButton";

interface Props {
  advisor: advisor;
}

const AdvisorAvailability = ({ advisor }: Props) => {
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
    <>
      <AvailabilityButton availability={availability.call as Availability} />
      <AvailabilityButton availability={availability.chat as Availability} />
    </>
  );
};

export default AdvisorAvailability;
