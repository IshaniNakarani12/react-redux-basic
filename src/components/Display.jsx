import { useSelector } from "react-redux";

const Display = () => {
  const { count } = useSelector((state) => state.counterState);
  return <div>{count}</div>;
};

export default Display;
