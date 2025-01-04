import React from "react";
import ArrowLeft from "../Assests/Svgs/ArrowLeft";
import {
  CardDecoration1,
  CardDecoration2,
} from "../Assests/Svgs/CardDecoration";
import { formatCurrency } from "../Helpers/formatAmount";

type AmountDetailsCardTypes = {
  title: string;
  amount: number | string;
  cta?: {
    text: string;
    action: () => void;
  };
  notAmount?: boolean;
};

const AmountDetailsCard = ({
  title,
  amount,
  cta,
  notAmount,
}: AmountDetailsCardTypes) => {
  return (
    <div className="bg-black-100 p-4 lg:min-w-[327px] min-w-[80vw] min-h-[138px] text-white rounded-lg relative">
      <span className="text-base font-normal font-main">{title}</span>
      <h2 className="text-3xl font-semibold font-main">
        {" "}
        {notAmount ? amount : `₦${formatCurrency(amount)}`}
      </h2>
      {cta && (
        <div className="mt-5 flex gap-2 items-center justify-end">
          <span className="text-xs font-normal font-main">{cta.text}</span>
          <button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
            onClick={cta.action}
          >
            <ArrowLeft />
          </button>
        </div>
      )}
      <CardDecoration1 className="absolute top-0 right-0" />
      <CardDecoration2 className="absolute bottom-0 left-0 z-0" />
    </div>
  );
};

export default AmountDetailsCard;
