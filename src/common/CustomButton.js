const CustomButton = ({
  onSubmitButton,
  bgColor,
  textColor,
  btnWidth,
  text,
}) => {
  return (
    <button
      onClick={(e) => onSubmitButton(e)}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        width: btnWidth,
        borderRadius: "27px",
      }}
      className={`h-[43px] bg-black font-MuseoSans font-normal text-lg shadow-xl`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
