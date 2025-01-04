type HamburgerTypes = {
  onClick?: () => void;
};

const Hamburger = ({ onClick }: HamburgerTypes) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect width="48" height="48" rx="24" fill="none" />
      <rect x="14" y="20" width="22" height="1.5" fill="#000" />
      <rect x="14" y="29" width="22" height="1.5" fill="#000" />
    </svg>
  );
};

export default Hamburger;
