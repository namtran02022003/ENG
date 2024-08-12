import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QUESTION_TYPE } from "../../types";
import getQuestions from "../../api";
import { shuffleDatas } from "../../helpers";
import { CATEGORY_QUESTIONS } from "../../constants";
import Question from "../../components/Question";

function StartExams() {
  const [questions, setQuestions] = useState<QUESTION_TYPE[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectData, setSelectData] = useState("a1");
  const [params, setParams] = useState({
    _start: 0,
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
      const res = await getQuestions(selectData, params);
      setQuestions(shuffleDatas(res?.data));
    };
    getDatas();
  }, [selectData, params]);

  return (
    <div className="mt-20">
      {index >= questions.length ? (
        <div>
          <p>Your score is: {score}</p>
          <p>Còn {unsolvedQuestions.length} câu làm sai </p>
          <p>Làm lại những câu đã sai</p>
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
            <button
              onClick={() => {
                setIndex(0),
                  setScore(0),
                  setParams((pre) => ({
                    ...pre,
                    _start: pre._start + pre._limit,
                  }));
              }}
            >
              Làm bài kết tiếp
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center">
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
            </div>
            <div>
              <p>Chọn Số lượng câu hỏi: </p>
              <select
                defaultValue={params._limit}
                onChange={(e) =>
                  setParams((pre) => ({ ...pre, _limit: +e.target.value }))
                }
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
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

export default StartExams;
