import { AppContext } from "../Context/AppContext";
import { useAccountSummary } from "../Hooks/useGetAccountSummary";
import { useGetLoan } from "../Hooks/useGetLoans";
import { useGetTransactions } from "../Hooks/useGetTransactions";
import AppLayout from "../Layouts/AppLayout";

import DashboardData from "./DashboardData";
import DashboardLoansPreview from "./DashboardLoansPreview";

const Dashboard = () => {
  // Requests
  const { loading, data } = useGetTransactions();
  const { loading: loanIsLoading, data: loanData } = useGetLoan();
  const { loading: transactionSummaryIsLoading, data: transactionSummaryData } =
    useAccountSummary();

  return (
    <AppLayout className="flex flex-col lg:flex-row  h-[100%] ">
      <DashboardLoansPreview data={loanData as any} loading={loanIsLoading} />
      <DashboardData
        summary={transactionSummaryData as any}
        data={data as any}
        loading={transactionSummaryIsLoading || loading}
      />
    </AppLayout>
  );
};

export default Dashboard;
