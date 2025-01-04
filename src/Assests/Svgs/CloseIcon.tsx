type CloseType = {
  height?: string;
  width?: string;
  onClick?: () => void;
  className: string;
};

const Close = ({ height, width, onClick, className }: CloseType) => {
  return (
    <svg
      width={width || "56"}
      height={height || "56"}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={className}
    >
      <path
        d="M42 14L14 42M14 14L42 42"
        stroke="#354052"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;
