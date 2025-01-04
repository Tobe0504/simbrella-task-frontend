import { useMemo } from "react";
import AmountDetailsCard from "../Components/AmountDetailsCard";
import Loader from "../Components/Loader";
import SectionsHeader from "../Components/SectionsHeader";
import Table from "../Components/Table";
import { useGetTransactions } from "../Hooks/useGetTransactions";
import AppLayout from "../Layouts/AppLayout";

const tableHeader = [
  "Reference",
  "Description",
  "Amount",
  "Payment Date",
  "Status",
];

const Transactions = () => {
  // Requests
  const { loading, data } = useGetTransactions();

  const cashInflow = useMemo(() => {
    const sum = data?.reduce((acc, transaction) => {
      if (transaction?.isCredit) {
        return acc + transaction?.amount;
      } else {
        return acc;
      }
    }, 0);
    return sum;
  }, [data]);

  const cashOutflow = useMemo(() => {
    const sum = data?.reduce((acc, transaction) => {
      if (!transaction?.isCredit) {
        return acc + transaction?.amount;
      } else {
        return acc;
      }
    }, 0);
    return sum;
  }, [data]);

  return (
    <AppLayout className="h-full overflow-auto no-scrollbar px-4 lg:px-0">
      <SectionsHeader
        header="Transactions"
        caption="See your previous transactions till today"
      />

      <div className="flex gap-4 mb-4 overflow-auto no-scrollbar">
        <AmountDetailsCard amount={cashInflow as number} title="Cash inflow" />
         
        <AmountDetailsCard
          amount={cashOutflow as number}
          title="Cash outflow"
        />
         
      </div>

      {loading ? (
        <Loader />
      ) : (
        <Table
          header="All Transactions"
          headers={tableHeader}
          data={data as any}
        />
      )}
    </AppLayout>
  );
};

export default Transactions;
