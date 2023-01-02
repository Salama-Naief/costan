const CustomButton = ({
  title,
  border,
  bg,
  disabled,
}: {
  title: String;
  border?: boolean;
  bg?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      className={`${border && "border border-blue-100"} ${
        bg ? "bg-blue-100 text-textColor-white" : "bg-inhrit text-blue-100"
      }  text-sm  font-[500] uppercase px-2 py-1.5  rounded transtion-all ease-in-out duration-200 hover:translate-y-px active:scale-90`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
