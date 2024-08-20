import React, { useState, useEffect, useRef } from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import "../CSS/QuizPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuizPage() {
  const { questions, getQuestions, addUserResult } = useGlobal();
  const [quizForUser, setQuizForUser] = useState([]);
  const [startClick, setStartClick] = useState(false);
  const [score, setScore] = useState(0);
  let [quizIndex, setQuizIndex] = useState(0);
  const [userQuestions, setUserQuestions] = useState("");
  const [lock, setLock] = useState(false);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_arr = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    if (questions.length == 0) {
      getQuestions();
    } else {
      getQuizQuestions();
    }
  }, [questions]);

  useEffect(() => {
    setUserQuestions(quizForUser[quizIndex]);
  }, [quizForUser, quizIndex]);

  const getQuizQuestions = () => {
    if (questions.length > 0) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      var index = [];
      while (index.length < 5) {
        const b = getRandomInt(questions.length);
        if (!index.includes(b)) {
          index.push(b);
        }
      }
      var result = index.map((ele) => questions[ele]);
      setQuizForUser(result);
    } else {
      toast.error("Error occuried, try restart application.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (userQuestions.Answer == ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_arr[userQuestions.Answer - 1].current.classList.add("correct");
      }
    }
  };

  const nextQuestion = async() => {
    if (lock === true) {
      if (quizIndex === quizForUser.length - 1) {
        setResult(true);
        await addUserResult(score);
      } else {
          setQuizIndex(++quizIndex);
          setUserQuestions(quizForUser[quizIndex]);
          setLock(false);
          option_arr.map((ele) => {
            ele.current.classList.remove("wrong");
            ele.current.classList.remove("correct");
            return null;
          });
      }
    }
  };

  const quizReset = () => {
    getQuizQuestions();
    setQuizIndex(0);
    setLock(false);
    setResult(false);
    setScore(0);
  }

  const quitQuiz = () => {
    setQuizIndex(0);
    setLock(false);
    setResult(false);
    setScore(0);
    setStartClick(false);
  }

  return (
    <>
      {!startClick ? 
      <div className="Quiz-start">
        <h2>Press Start button to start Quiz</h2>
        <button type="button" onClick={() => setStartClick(!startClick)}>
          Start
        </button>
      </div> : ""}

      {startClick ? (
        <>
          <div className="Quiz-Question-Cointainer">
            <h1>Quizz Application Random Questions</h1>
            <hr />
            {!result && (
              <>
                <h2>
                  {quizIndex + 1}. {userQuestions.Question}
                </h2>
                <ul>
                  <li
                    ref={Option1}
                    onClick={(e) => {
                      checkAns(e, 1);
                    }}
                  >
                    {userQuestions.Option1}
                  </li>
                  <li
                    ref={Option2}
                    onClick={(e) => {
                      checkAns(e, 2);
                    }}
                  >
                    {userQuestions.Option2}
                  </li>
                  <li
                    ref={Option3}
                    onClick={(e) => {
                      checkAns(e, 3);
                    }}
                  >
                    {userQuestions.Option3}
                  </li>
                  <li
                    ref={Option4}
                    onClick={(e) => {
                      checkAns(e, 4);
                    }}
                  >
                    {userQuestions.Option4}
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    nextQuestion();
                  }}
                >
                  Next
                </button>
                <div className="Quiz-index">{quizIndex + 1} of 5 questions</div>
              </>
            )}
            {result && (
              <>
                <h2 style={{textAlign:"center"}}>You Scored <span style={{color:"green", fontWeight:"700"}}>{score}</span> out of 5</h2>
                <button type="button" onClick={()=>{quizReset()}}>Reset</button>
                <button type="button" onClick={()=>{quitQuiz()}} style={{background:"red"}}>Quit</button>
              </>
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default QuizPage;
