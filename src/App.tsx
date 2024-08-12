import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layouts from "./components/layouts";
import StartExams from "./pages/exams";

function App() {
  return (
    <Layouts>
      <div className="mt-20">
        <StartExams />
        <ToastContainer autoClose={3000} />
      </div>
    </Layouts>
  );
}

export default App;
