const userName = document.querySelector('.input-name');
const userScore = document.querySelector('.input-score');

const submitScore = async () => {
  const nameValue = userName.value;
  const scoreValue = userScore.value;
  if (nameValue !== '' || scoreValue !== '') {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ncT92zkPgEUg4RfpDGEA/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: nameValue,
        score: scoreValue,
      }),
    });
  }
  userName.value = '';
  userScore.value = '';
};

export default submitScore;