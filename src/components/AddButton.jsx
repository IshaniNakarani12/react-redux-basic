import { useDispatch } from "react-redux";
import { increase } from "../counterSlice";

const AddButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increase())}>+</button>;
};

export default AddButton;
