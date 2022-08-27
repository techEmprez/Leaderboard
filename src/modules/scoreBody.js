const scoreBoard = document.querySelector('.score-list');

const scoreBody = (name, score) => {
  const pTag = document.createElement('p');
  pTag.innerHTML = `${name}: ${score}`;

  scoreBoard.appendChild(pTag);

  const index = [...document.querySelectorAll('p')].length;
  if (index % 2 === 0) {
    pTag.classList.add('even');
  } else {
    pTag.classList.add('odd');
  }
};

export default scoreBody;