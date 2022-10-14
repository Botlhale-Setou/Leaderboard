const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jX8uSQVUyjJLw1sq1HTq/scores';

export const addScore = async (data) => {
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-type': 'application/json; charset= UTF-8', },
		body: JSON.stringify(data),
	});

	const { result } = await response.json();
	return result;
};
