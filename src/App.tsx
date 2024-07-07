import { useEffect, useState } from "react";
import Question from "./components/Question";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import getQuestions from "./api";
import { CATEGORY_QUESTIONS } from "./constants";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectData, setSelectData] = useState("day1");
  const handleNextquestion = () => {
    if (index < questions.length) {
      setIndex(index + 1);
      return;
    }
    alert("end");
  };
  useEffect(() => {
    const getDatas = async () => {
      const datas = await getQuestions(selectData);
      setQuestions(datas);
    };
    getDatas();
  }, [selectData]);
  return (
    <div className="mt-20">
      <div>
        <p>Chọn ngày: </p>
        <select
          defaultValue="day1"
          onChange={(e) => setSelectData(e.target.value)}
        >
          {CATEGORY_QUESTIONS.map((data) => (
            <option value={data.key} key={data.key}>
              {data.text}
            </option>
          ))}
        </select>
      </div>
      <Question
        handleNextquestion={handleNextquestion}
        setScore={setScore}
        question={questions[index]}
        end={index >= questions.length}
        score={score}
        length={questions.length}
      />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
