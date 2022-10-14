export const render = (scores) => {
    const outputDiv = document.querySelector('#oui-scores');
    outputDiv.innerText = '';

    if (scores.length === null) {
        outputDiv.innerText = 'No scores found';
    }

    scores.sort((a, b) => b.score - a.score).forEach((score) => {
        outputDiv.innerHTML += `<p>${score.user}: ${score.score}</p>`;
    });
};
