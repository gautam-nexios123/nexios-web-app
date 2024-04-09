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
      className={`py-[8px] bg-black font-MuseoSans font-normal text-[15px] shadow-xl`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
