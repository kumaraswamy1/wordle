import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../constants/data";
const initialState = {
	turn: 0,
	currentGuess: "",
	guesses: [...Array(6)],
	isCorrect: false,
	solution: null,
};

export const wordleSlice = createSlice({
	name: "wordle",
	initialState,
	reducers: {
		getSolution: (state) => {
			state.solution = data[Math.floor(Math.random() * data.length)];
		},
		handleKeyUp: (state, action) => {
			if (state.currentGuess.length < 5) {
				state.currentGuess =
					state.currentGuess.toUpperCase() + action.payload.toUpperCase();
			}
		},

		handleEnter: (state) => {
			let solutionArray = [...state.solution.word];
			let formatedGuess = [...state.currentGuess].map((l) => {
				return { key: l, color: "grey" };
			});

			formatedGuess.forEach((l, i) => {
				if (solutionArray[i] === l.key) {
					formatedGuess[i].color = "green";
					solutionArray[i] = null;
				}
			});

			formatedGuess.forEach((l, i) => {
				if (solutionArray.includes(l.key) && l.color !== "green") {
					formatedGuess[i].color = "yellow";
					solutionArray[solutionArray.indexOf(l.key)] = null;
				}
			});

			if (state.currentGuess === state.solution.word) {
				state.isCorrect = true;
			}
			state.guesses[state.turn] = formatedGuess;

			state.turn = state.turn + 1;

			state.currentGuess = "";
		},
		handleBackspace: (state) => {
			state.currentGuess = state.currentGuess.slice(0, -1);
		},
	},
});

export const { getSolution, handleEnter, handleKeyUp, handleBackspace } =
	wordleSlice.actions;

export default wordleSlice.reducer;
