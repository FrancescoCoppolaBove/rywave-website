const AiProducer = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="204"
      height="204"
      viewBox="0 0 204 204"
      fill="none"
    >
      <rect width="204" height="204" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_174_881" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_174_881"
          width="96"
          height="96"
          xlinkHref="`data:image/png;base64,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`"
        />
      </defs>
    </svg>
  );
};

export default AiProducer;
