import Loader from "../Components/Loader";
import LoanCard from "../Components/LoanCard";
import { loanTypes } from "../Utilities/types";

type DashboardLoansPreviewTypes = {
  data: loanTypes[];
  loading: boolean;
};

const DashboardLoansPreview = ({
  data,
  loading,
}: DashboardLoansPreviewTypes) => {
  return (
    <section className="lg:basis-[304px] basis-auto border-r-2 border-grey-400 lg:px-6 p-4 py-4 shrink-0 overflow-auto no-scrollbar order-2 lg:order-none">
      <h2 className="font-normal text-2xl text-black mb-4">Loans</h2>

      <div className="lg:block gap-2 overflow-x-auto no-scrollbar">
        {loading ? (
          <Loader />
        ) : (
          data?.map((loan) => {
            return (
              <LoanCard
                key={loan.reference}
                description={loan?.description}
                amount={loan?.amount}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default DashboardLoansPreview;
