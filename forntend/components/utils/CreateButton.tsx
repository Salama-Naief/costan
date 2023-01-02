import { useContext } from "react";
import { SquarePlus } from "tabler-icons-react";
import { Store } from "../../utils/Store";

const CreateButton = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <button
      className={`flex items-center space-x-0.5 bg-blue-100 text-textColor-white text-sm  font-semibold  px-3 py-2  rounded transtion-all ease-in-out duration-200 hover:translate-y-px active:scale-90`}
      onClick={() => dispatch({ type: "CREATE_CONTENT_OPEN" })}
    >
      <SquarePlus className="w-5 h-5" />
      <span>CREATE</span>
    </button>
  );
};

export default CreateButton;
