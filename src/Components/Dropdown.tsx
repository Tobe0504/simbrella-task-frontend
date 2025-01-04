import React, { useState, useRef, useEffect } from "react";
import Loader from "./Loader";

export type DropdownProps = {
  title: string | React.ReactNode;
  options: string[] | undefined;
  selected?: string | undefined | any;
  setSelected?: React.Dispatch<React.SetStateAction<string | undefined | any>>;
  isLoading?: boolean;
  label?: string;
  isRequired?: boolean;
  errorMessage?: string;
  onOpen?: () => void;
};

const Dropdown = (props: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [keyPressedValue, setKEyPressedValue] = useState("");
  const [optionsState, setOptionsState] = useState<string[] | undefined>(
    props.options
  );
  const [invalid, setInvalid] = useState(false);

  // ref
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItem = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOptionsState(props.options);
  }, [props.options]);

  useEffect(() => {
    if (searchInput && isActive) {
      searchInput.current?.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const removeDropdownHandler = (e: any) => {
      if (dropdownRef && !dropdownRef?.current?.contains(e.target)) {
        setIsActive(false);
      } else {
      }
    };
    document.addEventListener("mousedown", removeDropdownHandler);

    return () => {
      document.removeEventListener("mousedown", removeDropdownHandler);
    };
  }, []);

  useEffect(() => {
    const removeDropdownHandler = (e: any) => {
      if (dropdownRef && !dropdownRef?.current?.contains(e.target)) {
        setIsActive(false);
      } else {
      }
    };
    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", removeDropdownHandler);
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("mousedown", removeDropdownHandler);
      }
    };
  }, [props.selected, props.isRequired]);

  return (
    <div className="mb-4">
      {props?.label && (
        <label
          htmlFor={props.label}
          className="block font-normal text-sm text-black-100 font-main"
        >
          {props.label}{" "}
          {props.isRequired && <span className="text-red-400"> *</span>}
        </label>
      )}

      <div
        className={`relative select-none rounded-lg w-full h-[50px] p-4 outline-none my-3 bg-white border shadow-100 ${
          invalid ? " border-red-400" : "border-greuy-400"
        } ${isActive ? "border-blue-100" : "border-grey-400"}`}
        ref={dropdownRef}
      >
        <div
          className="h-full flex items-center justify-between text-black-100 font-main font-normal text-base cursor-pointer ease-in-out transition-all"
          onClick={() => {
            setIsActive(!isActive);
            if (props.onOpen) {
              props.onOpen();
            }
          }}
          onBlur={() => {
            if (props.isRequired && !props?.selected && !isActive) {
              setInvalid(true);
            } else {
              setInvalid(false);
            }
          }}
          tabIndex={0}
          onKeyDown={(event) => {
            setKEyPressedValue(event.key);
            const optionsCopy =
              props.options &&
              props.options.filter((data) => {
                return data?.toString().toLowerCase().charAt(0) === event.key;
              });
            setOptionsState(optionsCopy);
            if (event.key === "Backspace") {
              setOptionsState(props.options);
            }
          }}
        >
          {props?.selected || props?.title}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={
              isActive
                ? { transform: "rotate(-90deg)" }
                : { transform: "rotate(0deg)" }
            }
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="black"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {isActive && (
          <div className="absolute w-full left-0 top-[110%] z-10 bg-white min-h-full max-h-[350px] overflow-y-auto overflow-x-hidden text-left outline-none border-none ease-in-out transition-all shadow-100 rounded-lg">
            {optionsState && optionsState.length > 0 ? (
              optionsState
                ?.filter((option) => {
                  return keyPressedValue.toLowerCase() === ""
                    ? option
                    : option
                        ?.toLowerCase()
                        ?.includes(keyPressedValue?.toLowerCase());
                })
                ?.map((option, i) => {
                  return (
                    <div
                      key={i}
                      className="p-3 cursor-pointer ease-in-out transition-all font-main font-normal text-base text-black-100 w-full"
                      onClick={() => {
                        if (props.setSelected) props?.setSelected(option);
                        setIsActive(false);
                      }}
                      ref={dropdownItem}
                    >
                      {option}
                    </div>
                  );
                })
            ) : !props.isLoading &&
              props.options &&
              props.options.length === 0 ? (
              <p className="font-main font-normal text-base text-black-100">
                No matching Items
              </p>
            ) : (
              <div>
                <Loader />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
