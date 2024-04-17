import { CircularProgress } from "@mui/material";

const CustomButton = ({
  onSubmitButton,
  bgColor,
  textColor,
  btnWidth,
  text,
  process
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
      className={`py-[8px] bg-black font-MuseoSans font-normal text-[18px] shadow-xl`}
    >
      {text}
      {
        process && <span className="ml-2">
        <CircularProgress style={{color : textColor}} size={18}  />
      </span>
      }
      
    </button>
  );
};

export default CustomButton;
