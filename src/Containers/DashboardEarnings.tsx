import React from "react";
import { Link } from "react-router-dom";
import TransactionsCard from "../Components/TransactionsCard";
import { routes } from "../Utilities/routes";
import { transactionTypes } from "../Utilities/types";

type DashboardEarningsTypes = {
  data: transactionTypes[];
};

const DashboardEarnings = ({ data }: DashboardEarningsTypes) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-xl text-black-100 font-main">
          Earnings
        </h4>
        <Link
          className="font-normal text-sm text-blue-100 font-main"
          to={routes.TRANSACTIONS}
        >
          See all
        </Link>
      </div>

      <div className="flex gap-4 overflow-auto w-full no-scrollbar">
        {data?.map((data) => (
          <TransactionsCard
            key={data?.reference}
            amount={data?.amount}
            description={data?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardEarnings;
