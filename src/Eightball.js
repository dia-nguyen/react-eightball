import { useState } from "react";
import { randomAnswer } from "./helper";
// can be intentional with helper file name. or helper/randomAnswer.js
import "./EightBall.css";

const EIGHTBALL_ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

const INITIAL_EIGHTBALL_STATE = {
  msg: "Think of a Question",
  color: "black",
};

/**
 * Magic Eightball - Initially shows "Think of a question"
 * then shows random answer on click
 *
 * Props: answers - an array of answer obj [{ msg, color }, {msg, color}]
 * State: result - an obj of answer {msg, color}
 *
 * App -> Eightball
 */
function EightBall({ answers=EIGHTBALL_ANSWERS }) {
  const [result, setResult] = useState(INITIAL_EIGHTBALL_STATE);
  const [colorCount, setColorCount] = useState({
    green: 0,
    goldenrod: 0,
    red: 0
  });

  function getAnswer() {
    const answer = randomAnswer(answers);
    setResult(answer);
    setColorCount(count => {
      count[answer.color]++

      return count;
    })
  }

  function resetEightball() {
    setResult(INITIAL_EIGHTBALL_STATE);
  }

  return (
    <div className='EightBall-wrapper'>
      <div
        className="EightBall"
        onClick={getAnswer}
        style={{ backgroundColor: result.color }}
      >
        <p>{result.msg}</p>
      </div>
      <button
        className='EightBall-btn'
        onClick={resetEightball}
      >
        Reset
      </button>
      <div
        className='EightBall-counter'
      >
        <div style={{ backgroundColor: 'green' }}>
          <p>{ colorCount.green }</p>
        </div>
        <div style={{ backgroundColor: 'goldenrod' }}>
          <p>{ colorCount.goldenrod }</p>
        </div>
        <div style={{ backgroundColor: 'red' }}>
          <p>{ colorCount.red }</p>
        </div>
      </div>
    </div>
  );
}

export default EightBall;
