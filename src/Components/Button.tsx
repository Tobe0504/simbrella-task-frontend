import React from "react";

type ButtonTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  classNames?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  type = "primary",
  classNames,
  onClick,
}: ButtonTypes) => {
  return (
    <button
      className={`flex gap-2 font-semibold font-main text-sm px-4 py-3 rounded-lg text-white justify-center items-center  ${classNames} ${
        type === "primary" && "border-2 border-blue-100 bg-blue-100"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
