import { useDispatch } from "react-redux";
import { decrease } from "../counterSlice";

const DecreaseButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrease())}>-</button>;
};

export default DecreaseButton;
