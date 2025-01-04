export type genericModalType = {
  [key: string]: boolean;
};

export type transactionTypes = {
  reference: string;
  description: string;
  amount: number;
  paymentDate: string;
  status: "successful" | "failed" | "pending";
  isCredit: boolean;
};

export type loanTypes = {
  reference: string;
  description: string;
  applicationDate: string;
  dueDate: string;
  status: "redeemed" | "pending" | "defaulted";
  amount: number;
};

export type responseType<T> = {
  message: string | undefined;
  description: string;
  code: string;
  success: boolean;
  data: T;
  status: number;
};

export type requestType = {
  data: any;
  error: any;
  isLoading: boolean;
};

export type accountSummaryType = { accountBalance: number; loanToPay: number };
