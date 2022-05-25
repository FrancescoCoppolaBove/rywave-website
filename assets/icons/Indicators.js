const Indicators = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      // width="166"
      // height="365"
      viewBox="0 0 166 365"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 15V15C11.1439 6.3561 22.8676 1.5 35.0919 1.5H163"
        stroke="#270911"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 350V350C10.6439 358.644 22.3676 363.5 34.5919 363.5H162.5"
        stroke="#CE718A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M95 113L163 113"
        stroke="#7A122E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M96 233L164 233"
        stroke="#BD4666"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Indicators;
