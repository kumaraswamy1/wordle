import { Row } from "./Row";

export const Grid = ({ currentGuess, guesses, turn }) => {
	return (
		<div className="grid my-20 place-items-center ">
			{guesses.map((g, i) => {
				if (turn === i) {
					return <Row key={i} currentGuess={currentGuess} />;
				}

				return <Row key={i} guess={g} />;
			})}
		</div>
	);
};
