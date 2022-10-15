import './styles.css';
import {fetchData} from './modules/interaction.js';
import {addScore} from './modules/start.js';
import {render} from './modules/render.js';

window.onload = async () => {
    render(await fetchData());
};

const refreshBtn = document.querySelector('#refresh-btn');
refreshBtn.addEventListener('click', async () => {
    const scorelist = await fetchData();
    render(scorelist);
});

const form = document.querySelector('.input-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log('kjhsfdjk');

    const name = document.querySelectorAll('input')[0].value.trim();
    const score = document.querySelectorAll('input')[1].value.trim();

    const newScore = {
        user: name,
        score: score,
    };

    form.reset();

    await addScore(newScore);
});
