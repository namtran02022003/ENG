import React, { Dispatch, useEffect, useRef, useState } from "react";
import { QUESTION_TYPE } from "../types";
import { toast } from "react-toastify";
type PROPS = {
  question: QUESTION_TYPE;
  setScore: Dispatch<React.SetStateAction<number>>;
  handleNextquestion: (a?: boolean, b?: QUESTION_TYPE) => void;
  score: number;
  length: number;
  index: number;
};
const Question = ({
  question,
  setScore,
  handleNextquestion,
  score,
  length,
  index,
}: PROPS) => {
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(false);
  const [errors, setErrors] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const checkButton = useRef<HTMLInputElement | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const handleCheck = () => {
    if (value.toLocaleLowerCase() == question?.en.toLocaleLowerCase()) {
      setScore((pre) => pre + 1);
      setFlag(true);
      setErrors(false);
      toast.success("Success Notification !", {
        position: "top-center",
      });
      return;
    }
    setErrors(true);
  };
  const clearValue = () => {
    setErrors(false);
    setValue("");
    setFlag(false);
    setShowAnswer(false);
  };
  const handleKeyDown = (e: any) => {
    if (e.key == "Enter") {
      handleCheck();
    }
  };
  useEffect(() => {
    const on = (window.onkeydown = (e) => {
      if (e.key == "Enter") {
        if (flag) {
          handleNextquestion(
            value.toLocaleLowerCase() == question?.en.toLocaleLowerCase(),
            question
          ),
            clearValue();
        } else {
          handleCheck();
        }
        checkButton.current?.focus();
      }
    });
    return window.removeEventListener("keydown", on);
  });
  const handleSpeak = () => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(question?.en);
      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) {
        utterance.voice = voice;
      }
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text to speech.");
    }
  };
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);
  return (
    <div>
      <div className="">
        <p className="text-center">
          {score}/{length}
        </p>
        <div>
          <p>Chọn giọng:</p>
          <select
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
          >
            {voices.map((voice) => (
              <option key={voice.name}>{voice.name}</option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-center my-4">Question {index}</p>
        </div>
        <div className="flex gap-x-10 justify-center items-center relative mb-10">
          <div className="">{question?.vn}</div>
          <div className="">
            <input
              ref={checkButton}
              readOnly={flag}
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value), setErrors(false);
              }}
              className={`border border-[#ccc] rounded-lg px-2 py-1`}
              placeholder="Write your answer"
            />
            {errors && (
              <p className="absolute text-red-950">
                Câu trả lời của bạn chưa đúng
              </p>
            )}
          </div>
          {showAnswer && (
            <p>
              {question?.en}{" "}
              <span onClick={handleSpeak} className="cursor-pointer ms-3">
                click
              </span>
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-x-20 justify-center">
        <button
          disabled={flag}
          className="bg-slate-400 rounded-md px-2 py-1 disabled:opacity-[0.8]"
          onClick={handleCheck}
          onKeyDown={handleKeyDown}
        >
          Check
        </button>
        {/* <button
          onClick={() => {
            handleNextquestion(), clearValue();
          }}
          className="bg-slate-400 rounded-md px-2 py-1 disabled:opacity-[0.8]"
        >
          Skip Question
        </button> */}
        <button
          // disabled={!flag}
          className="bg-green-600 rounded-md px-2 py-1 text-white disabled:opacity-[0.8]"
          onClick={() => (
            handleNextquestion(
              value.toLocaleLowerCase() == question?.en.toLocaleLowerCase(),
              question
            ),
            clearValue()
          )}
        >
          Next question
        </button>
        <button
          className="bg-green-600 rounded-md px-2 py-1 text-white disabled:opacity-[0.8]"
          onClick={() => {
            setShowAnswer(!showAnswer), setFlag(true);
          }}
        >
          Show answer
        </button>
      </div>
    </div>
  );
};
export default Question;
