/**
 * Takes in list of answers and returns a random answer object
 * @param {*} answersList - list of answer objects
 * Returns { msg, color }
 */
function randomAnswer(answersList) {
  const idx = Math.floor(Math.random() * answersList.length);
  return answersList[idx];
}

export { randomAnswer };
