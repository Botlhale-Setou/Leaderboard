import './styles.css';

const submitBtn = document.querySelector('#submit-btn');
const scoresOutput = document.querySelector('#oui-scores');

submitBtn.addEventListener('click', () => {
  scoresOutput.innerHTML = 'Hello World!';
});