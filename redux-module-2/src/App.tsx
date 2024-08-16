import { decrement, increment, reset } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    if (count > 10) {
      dispatch(decrement(10));
    } else {
      dispatch(reset(0));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-xs w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Counter</h1>
        <div className="flex justify-between items-center border-t border-b border-gray-200 py-6 mb-6">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white px-5 py-2 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="text-4xl font-bold text-gray-800">{count}</span>
          <button
            onClick={() => dispatch(increment(3))}
            className="bg-green-500 text-white px-5 py-2 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <button
          onClick={() => dispatch(reset(0))}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
