import { useEffect, useState } from "react";
import Question from "./components/Question";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import getQuestions from "./api";
import { CATEGORY_QUESTIONS } from "./constants";
import { QUESTION_TYPE } from "./types";

function App() {
  const [questions, setQuestions] = useState<QUESTION_TYPE[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectData, setSelectData] = useState("a1");
  const [params, setParams] = useState({
    _page: 1,
    _limit: 50,
  });
  const [unsolvedQuestions, setUnsolvedQuestions] = useState<QUESTION_TYPE[]>(
    []
  );
  const handleNextquestion = (pass?: boolean, q?: QUESTION_TYPE) => {
    if (!pass && q) {
      setUnsolvedQuestions((pre) => [...pre, q]);
    }
    if (index < questions.length) {
      setIndex(index + 1);
      return;
    }
    alert("end");
  };
  useEffect(() => {
    const getDatas = async () => {
      const datas = await getQuestions(selectData, params);
      setQuestions(datas);
    };
    getDatas();
  }, [selectData]);

  return (
    <div className="mt-20">
      {index >= questions.length ? (
        <div>
          <p>Your score is: {score}</p>
          <p>Còn {unsolvedQuestions.length} câu làm sai </p>
          <p>Lmà lại những câu đã sai</p>
          <div className="flex justify-center gap-x-5">
            <button
              onClick={() => {
                setQuestions(unsolvedQuestions),
                  setIndex(0),
                  setScore(0),
                  setSelectData("a1"),
                  setUnsolvedQuestions([]);
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setIndex(0), setScore(0), setSelectData("a1");
              }}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>Chọn level: </p>
            <select
              defaultValue="a1"
              onChange={(e) => setSelectData(e.target.value)}
            >
              {CATEGORY_QUESTIONS.map((data) => (
                <option value={data.key} key={data.key}>
                  {data.text}
                </option>
              ))}
            </select>
            <p>kk</p>
          </div>
          <Question
            handleNextquestion={handleNextquestion}
            setScore={setScore}
            question={questions[index]}
            score={score}
            length={questions.length}
            index={index + 1}
          />
        </div>
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
