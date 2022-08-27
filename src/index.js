import './style.css';
import submitScore from './modules/submitScore.js';
import displayScore from './modules/displayScore.js';

displayScore();
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore();
});

refreshBtn.addEventListener('click', () => {
  displayScore();
});