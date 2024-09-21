import Image from "next/image";

import { advisor } from "@/types/advisor";
import Price from "./Price";
import AdvisorAvailability from "./AdvisorAvailability";

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
        <AdvisorAvailability advisor={advisor} />
      </div>
    </div>
  );
};

export default Advisor;
