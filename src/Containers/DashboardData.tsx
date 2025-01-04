import { useNavigate } from "react-router-dom";
import AmountDetailsCard from "../Components/AmountDetailsCard";
import GreetingComponent from "../Components/Greeting";
import Loader from "../Components/Loader";
import Table from "../Components/Table";
import { routes } from "../Utilities/routes";
import { accountSummaryType, transactionTypes } from "../Utilities/types";
import DashboardEarnings from "./DashboardEarnings";

type DashboardDataTypes = {
  summary: accountSummaryType;
  data: transactionTypes[];
  loading: boolean;
};

const tableHeader = [
  "Reference",
  "Description",
  "Amount",
  "Payment Date",
  "Status",
];

const DashboardData = ({ summary, data, loading }: DashboardDataTypes) => {
  // Router
  const navigate = useNavigate();

  return (
    <section className="p-4 flex-1 lg:w-[calc(100%-304px)] w-full lg:overflow-auto no-scrollbar ">
      <GreetingComponent />
      <div className="flex gap-4 mb-4 overflow-auto no-scrollbar">
        <AmountDetailsCard
          title="Total Balance"
          amount={summary?.accountBalance || 0}
          cta={{
            text: "My Transactions",
            action: () => {
              navigate(routes.TRANSACTIONS);
            },
          }}
        />
        <AmountDetailsCard
          title="Loan Amount"
          amount={summary?.loanToPay || 0}
          cta={{
            text: "My Loans",
            action: () => {
              navigate(routes.LOANS);
            },
          }}
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <DashboardEarnings
            data={data?.filter((data) => data?.isCredit)?.slice(0, 5)}
          />
          <Table header="Transactions" headers={tableHeader} data={data} />
        </>
      )}
    </section>
  );
};

export default DashboardData;
