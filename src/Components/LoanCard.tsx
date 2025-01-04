import { capitalize } from "../Helpers/capitalize";
import { formatCurrency } from "../Helpers/formatAmount";

type LoanCardTypes = {
  description: string;
  amount: number;
};

const LoanCard = ({ description, amount }: LoanCardTypes) => {
  return (
    <div className="p-2 bg-grey-100 rounded-xl mb-3 hover:bg-grey-300 cursor-pointer shrink-0 order-2">
      <div className="flex gap-3">
        <div className="w-12 h-12 flex items-center justify-center bg-grey-300 rounded-full font-medium text-lg font-main">
          {capitalize(description[0])}
        </div>
        <div>
          <h4 className="font-normal text-base font-main">{description}</h4>
          <p className="font-normal text-sm text-grey-200 font-main">
            ₦{formatCurrency(amount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
