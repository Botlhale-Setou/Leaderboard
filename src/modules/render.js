export const render = (scores) => {
	const outputDiv = document.querySelector('#oui-scores');
	outputDiv.innerText = '';

	if (scores.length === null) {
    outputDiv.innerText = 'No scores found';
	};

  scores.sort((a, b) => b.score - a.score).forEach((score) => {
		outputDiv.innerHTML += `<p>${score.user}: ${score.score}</p>`;
	});

  // console.log(scores);
  // for (let entry in scores) {
  //   const entryDiv = document.createElement('div');
  //   const entryText = document.createElement('p');

  //   console.log('here: ' + entry['user']);

  //   entryText.textContent = `${entry.user}: ${entry.score}`;

  //   entryText.classList.add('entry-text');
  //   entryDiv.classList.add('entry-div');

  //   entryDiv.append(entryText);
  //   outputDiv.append(entryDiv);
  // };
};