import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* navbar Start */}
        <Navbar />
        {/* navbar End */}
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* header Start */}
          <Header />
          {/* header End */}

          <hr className="" />

          {/* todo list Start */}
          <TodoList />
          {/* todo list End */}

          <hr className="mt-4" />
          {/* footer Start  */}
          <Footer />
          {/* footer End */}
        </div>
      </div>
    </>
  );
}

export default App;
