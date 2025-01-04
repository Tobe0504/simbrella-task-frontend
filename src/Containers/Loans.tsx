import React, { useMemo, useState } from "react";
import AmountDetailsCard from "../Components/AmountDetailsCard";
import Button from "../Components/Button";
import Loader from "../Components/Loader";
import Modal from "../Components/Modal";
import SectionsHeader from "../Components/SectionsHeader";
import Table from "../Components/Table";
import { setAllModalsFalse } from "../Helpers/setAllModalsFalse";
import { useGetLoan } from "../Hooks/useGetLoans";
import AppLayout from "../Layouts/AppLayout";
import { genericModalType } from "../Utilities/types";
import LoanApplicationForm from "./LoanApplicationForm";

const tableHeader = [
  "Reference",
  "Description",
  "Amount",
  "Payment Date",
  "Status",
];

const Loans = () => {
  // Requests
  const { loading, data } = useGetLoan();

  // States
  const [modals, setModals] = useState<genericModalType>({
    loanApplication: false,
  });

  // Memos
  const pendingLoans = useMemo(() => {
    const sum = data?.reduce((acc, loan) => {
      if (loan?.status === "pending") {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    return sum;
  }, [data]);

  const defaultedLoans = useMemo(() => {
    const sum = data?.reduce((acc, loan) => {
      if (loan?.status === "defaulted") {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    return sum;
  }, [data]);

  return (
    <>
      {modals?.loanApplication && (
        <Modal
          body={<LoanApplicationForm />}
          onClick={() => {
            setAllModalsFalse(setModals);
          }}
        />
      )}

      <AppLayout className="h-full overflow-auto no-scrollbar px-4 lg:px-0">
        <SectionsHeader
          header="Loans"
          caption="Keep track of your loans here"
        />

        <div className="flex gap-4 mb-4 overflow-auto no-scrollbar items-center">
          <AmountDetailsCard
            title="Pending Loans"
            amount={pendingLoans as number}
            notAmount
          />
          <AmountDetailsCard
            title="Defaulted Loans "
            amount={defaultedLoans as number}
            notAmount
          />

          <Button
            classNames="ml-auto hidden lg:block"
            onClick={() =>
              setModals((prevState) => {
                return { ...prevState, loanApplication: true };
              })
            }
          >
            Apply
          </Button>
        </div>

        <Button
          classNames="ml-auto block lg:hidden w-full mb-4"
          onClick={() =>
            setModals((prevState) => {
              return { ...prevState, loanApplication: true };
            })
          }
        >
          Apply
        </Button>

        {loading ? (
          <Loader />
        ) : (
          <Table header="Loans" headers={tableHeader} data={data as any} />
        )}
      </AppLayout>
    </>
  );
};

export default Loans;
