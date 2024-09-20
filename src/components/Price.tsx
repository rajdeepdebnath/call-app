import React from "react";

interface Props {
  price: string;
}
const Price = ({ price }: Props) => {
  const price_parts = price.split("/");
  return (
    <div className="w-20">
      <span className="font-bold text-md">{price_parts[0]}</span>
      <span className="text-xs">/{price_parts[1]}</span>
    </div>
  );
};

export default Price;
