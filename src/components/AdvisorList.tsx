"use client";
import React, { useEffect } from "react";
import Advisor from "./Advisor";
import { advisor } from "@/types/advisor";
import { useRouter } from "next/navigation";

interface Props {
  advisors: advisor[];
}

const AdvisorList = ({ advisors }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      router.refresh();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto my-5 p-3 sm:w-4/5 lg:w-3/5">
      {advisors &&
        advisors.map((advisor: advisor, idx: number) => (
          <Advisor
            key={advisor.id}
            advisor={advisor}
            isLastItem={idx + 1 === advisors.length}
          />
        ))}
    </div>
  );
};

export default AdvisorList;
