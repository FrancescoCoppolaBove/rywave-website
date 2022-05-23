const LogoAbout = ({ className, width, height, color }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      // width="252"
      // height="216"
      viewBox="0 0 252 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="72" width="36" height="144" rx="18" fill="#1E1E1E" />
      <rect x="54" width="36" height="144" rx="18" fill="#1E1E1E" />
      <rect x="162" width="36" height="144" rx="18" fill="#1E1E1E" />
      <rect x="216" y="72" width="36" height="144" rx="18" fill="#1E1E1E" />
      <rect x="108" y="54" width="36" height="126" rx="18" fill="#1E1E1E" />
    </svg>
  );
};

export default LogoAbout;
