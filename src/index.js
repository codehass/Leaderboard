import './style.css';
import { form, infos, refresh, url } from './Modules/variables';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userScore = {
    user: e.target.user.value,
    score: e.target.score.value,
  };

  const postRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScore),
  };

  await fetch(url, postRequest).then((res) => res.json());
});

fetch(url)
  .then((res) => res.json())
  .then((data) => data.result.map((resp) => addNewUser(resp)));

const addNewUser = (data) => {
  infos.innerHTML += `<div class ="info">${data.user} : ${data.score} </div>`;
};

refresh.addEventListener('click', () => {
  window.location.reload();
});
