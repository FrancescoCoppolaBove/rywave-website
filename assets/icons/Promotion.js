const Promotion = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.437499 8.0625L19.125 0.875003L16.25 16.6875L6.23062 11.2221L17.6875 2.3125L4.45387 10.2518L0.437499 8.0625ZM6.1875 19.5625L6.1875 12.7574L10.5 15.25L6.1875 19.5625Z"
        fill={color}
      />
    </svg>
  );
};

export default Promotion;
