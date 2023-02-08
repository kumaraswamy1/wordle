import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { handleBackspace, handleEnter, handleKeyUp } from "./wordleSlice";
import { Grid } from "../../Components";
import { data } from "../../constants/data";

export const Wordle = () => {
	const { currentGuess, guesses, isCorrect, turn } = useSelector(
		(state) => state.wordle
	);

	const dispatch = useDispatch();
	// eslint-disable-next-line
	const handleKeypress = ({ key }) => {
		if (key === "Enter") {
			if (turn > 5) {
				toast.error("there is no more guses to make");
				return;
			}

			if (currentGuess.length !== 5) {
				toast.error("word must be 5 characters");
				return;
			}
			if (data.find((item) => item.word === currentGuess)) {
				dispatch(handleEnter());
			} else toast.error("word doesn't exist ");
		}
		if (key === "Backspace") {
			dispatch(handleBackspace(key));
		}

		if (/^[a-zA-Z]$/.test(key)) {
			dispatch(handleKeyUp(key));
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeypress);

		if (isCorrect) {
			window.removeEventListener("keydown", handleKeypress);
		}
		if (turn > 5) {
			window.removeEventListener("keydown", handleKeypress);
		}
		return () => window.removeEventListener("keydown", handleKeypress);
	}, [handleKeypress, isCorrect, turn]);

	return (
		<div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
		</div>
	);
};
