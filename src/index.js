// disable eslint no-unused-vars

import Entry from './modules/Entry.js';
import './styles.css';

const submitBtn = document.querySelector('#submit-btn');
const refreshBtn = document.querySelector('#refresh-btn');
const scoresOutput = document.querySelector('#oui-scores');

submitBtn.addEventListener('click', () => {
  scoresOutput.innerHTML = 'Hello World!';
});