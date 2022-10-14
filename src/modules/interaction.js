const gameID = 'llQsMZEQ2bPkFzErF5WW';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jX8uSQVUyjJLw1sq1HTq/scores';


export const fetchData = async () => {
  const response = await fetch(url);
	const { result } = await response.json();

	return result;
};
