import scoreBody from './scoreBody.js';

const scoreList = document.querySelector('.score-list');

const displayScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ncT92zkPgEUg4RfpDGEA/scores');
  const data = await response.json();
  let dataArray = data.result;
  dataArray = dataArray.sort((a, b) => b.score - a.score);
  scoreList.innerHTML = '';
  dataArray.forEach((score) => {
    scoreBody(score.user, score.score);
  });
};

export default displayScore;