import React from "react";
import { capitalize } from "../Helpers/capitalize";
import { formatCurrency } from "../Helpers/formatAmount";

type TransactionsCardType = {
  description: string;
  amount: number;
};

const TransactionsCard = ({ description, amount }: TransactionsCardType) => {
  return (
    <div className="h-[140px] w-[150px] rounded-md p-4 text-center bg-orange text-white font-main shrink-0">
      <p className="w-7 h-7 flex items-center justify-center bg-[#FFFFFFBF] mx-auto mb-5 font-semibold text-base text-black-100 font-main rounded-full">
        {capitalize(description[0])}
      </p>
      <p className="font-normal text-sm font-main">{description}</p>
      <p className="font-semibold text-xl font-main">
        ₦{formatCurrency(amount)}
      </p>
    </div>
  );
};

export default TransactionsCard;
