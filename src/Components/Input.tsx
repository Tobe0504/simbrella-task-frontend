import React, { ChangeEvent } from "react";

type InputTypes = {
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent) => void;
};

const Input = ({
  placeholder,
  icon,
  className,
  label,
  type,
  name,
  value,
  onChange,
}: InputTypes) => {
  return (
    <div className="w-full relative border-200 border-red-500 mb-4">
      {label && (
        <label className="block font-normal text-sm text-black-100 font-main">
          {label}
        </label>
      )}
      <input
        className={`w-full h-[44px] rounded-lg p-4 border-2 border-grey-400 shadow-100 outline-grey-400 focus:border focus:border-blue-100 focus:outline-blue-100 ease-in-out transition-all  ${className}`}
        placeholder={placeholder}
        name={name}
        type={type || "text"}
        value={value}
        onChange={onChange}
      />
      <span className="absolute left-4 top-0 bottom-0 my-auto flex items-center justify-center">
        {icon}
      </span>
    </div>
  );
};

export default Input;
