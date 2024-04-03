const customDotStyles = {
  width: "10px",
  height: "10px",
  margin: "0 5px",
  borderRadius: "50%",
  display: "inline-block",
};

export const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      className={active ? "bg-[#399EFD]" : "bg-white border border-[black]"}
      style={{ ...customDotStyles }}
      onClick={() => onClick()}
    />
  );
};
