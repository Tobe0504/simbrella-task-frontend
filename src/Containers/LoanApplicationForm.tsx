import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import Dropdown from "../Components/Dropdown";
import Input from "../Components/Input";
import SectionsHeader from "../Components/SectionsHeader";
import { inputChangeHandler } from "../Helpers/inputChangeHandler";

const LoanApplicationForm = () => {
  // States
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    employmentStatus: "",
    loanType: "",
    amount: "",
    purposeOfLoan: "",
    loanTerm: "",
    accountNumber: "",
    bankName: "",
    refereeName: "",
    refereeAddress: "",
  });
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [loanType, setLoanType] = useState("");
  const [purposeOfLoan, setPurposeOfLoan] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [bankName, setBankName] = useState("");

  //   Utils
  const dropdownSetterFunction = (prop: string) => {
    if (prop) {
      setFormData((prevState) => {
        return { ...prevState, prop };
      });
    }
  };

  //   Effects
  useEffect(() => {
    if (employmentStatus) {
      setFormData((prevState) => {
        return { ...prevState, employmentStatus };
      });
    }

    if (loanType) {
      setFormData((prevState) => {
        return { ...prevState, loanType };
      });
    }
    if (purposeOfLoan) {
      setFormData((prevState) => {
        return { ...prevState, purposeOfLoan };
      });
    }

    if (loanTerm) {
      setFormData((prevState) => {
        return { ...prevState, loanTerm };
      });
    }

    if (bankName) {
      setFormData((prevState) => {
        return { ...prevState, employmentStatus };
      });
    }
  }, [employmentStatus, loanType, loanTerm, purposeOfLoan, bankName]);

  console.log(formData, "Check");

  return (
    <div className="lg:min-w-[500px] min-w-[90vw]  p-4">
      <SectionsHeader header="Apply for a New Loan" mini />

      <form>
        <Input
          label="Firstname"
          name="firstname"
          value={formData?.firstname}
          onChange={(e) => inputChangeHandler(e, setFormData)}
        />
        <Input
          label="Lastname"
          name="lastname"
          value={formData?.lastname}
          onChange={(e) => inputChangeHandler(e, setFormData)}
        />
        <Input
          label="Address"
          name="address"
          value={formData?.address}
          onChange={(e) => inputChangeHandler(e, setFormData)}
        />
        <Dropdown
          label="Employment Status"
          options={["Self-Employed", "Employed", "Unemployed", "Retired"]}
          title="Select employment status"
          selected={employmentStatus}
          setSelected={setEmploymentStatus}
        />
        <Dropdown
          label="Loan Type"
          title="Select loan type"
          options={["Business Loan", "Home Loan", "Car loan"]}
          selected={loanType}
          setSelected={setLoanType}
        />
        <Input
          label="Loan Amount"
          type="number"
          name="amount"
          value={formData?.amount}
          onChange={(e) => inputChangeHandler(e, setFormData)}
        />
        <Dropdown
          label="Purpose of Loan"
          title="Select purpose"
          options={[
            "Personal use",
            "Home renovation",
            "Education",
            "Medicals",
            "Business",
          ]}
          selected={purposeOfLoan}
          setSelected={setPurposeOfLoan}
        />
        <Dropdown
          label="Loan Term"
          title="Select "
          options={["12 months", "24 months"]}
          selected={loanTerm}
          setSelected={setLoanTerm}
        />
        <Input
          label="Bank Account Number"
          type="number"
          name="accountNumber"
          value={formData?.accountNumber}
          onChange={(e) => inputChangeHandler(e, setFormData)}
        />
        <Dropdown
          label="Bank Name"
          title="Select bank name"
          options={["Simbrella Bank"]}
          selected={bankName}
          setSelected={setBankName}
        />
        <Input
          label="Referee Name"
          name="refereeName"
          value={formData?.refereeName}
          onChange={(e) => inputChangeHandler(e, setFormData)}
        />
        <Input
          label="Referee Address"
          name="refereeAddress"
          value={formData?.refereeAddress}
          onChange={(e) => inputChangeHandler(e, setFormData)}
        />

        <Button>Apply</Button>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
