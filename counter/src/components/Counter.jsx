import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = (payload) => {
    dispatch(increment(payload));
  };

  const handleDecrement = (payload) => {
    if (count > 0) {
      dispatch(decrement(payload));
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            onClick={() => handleIncrement(5)}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => handleDecrement(1)}
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
