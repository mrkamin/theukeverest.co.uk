export const SvgComponents = () => {
  return (
    <>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsxlink="http://www.w3.org/1999/xlink"
          id="blobSvg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(76, 161, 175)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(196, 224, 229)" }}
              ></stop>
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="3000ms"
              repeatCount="indefinite"
              values="
              M419,295.5Q407,341,390,401.5Q373,462,311.5,460Q250,458,208,427Q166,396,106.5,381.5Q47,367,30.5,308.5Q14,250,42.5,198.5Q71,147,119.5,128Q168,109,209,78.5Q250,48,304,56Q358,64,370.5,118.5Q383,173,407,211.5Q431,250,419,295.5Z;
                M379.5,282Q360,314,359.5,376.5Q359,439,304.5,414.5Q250,390,218.5,374.5Q187,359,133,354Q79,349,49.5,299.5Q20,250,64.5,209Q109,168,131.5,125.5Q154,83,202,62Q250,41,299,60.5Q348,80,359,130.5Q370,181,384.5,215.5Q399,250,379.5,282Z" />
          </path>
        </svg>
      </div>
    </>
  );
};
