import { useDispatch, useSelector } from "react-redux";

import { toast, Toaster } from "react-hot-toast";

import { getSolution } from "./featues/wordle/wordleSlice";
import { useEffect, useState } from "react";
import { Keypad, Modal, Navbar } from "./Components";
import { Wordle } from "./featues/wordle/Wordle";

function App() {
	const { isCorrect, solution } = useSelector((state) => state.wordle);
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		dispatch(getSolution());
		setShowModal(true);
		if (isCorrect) {
			setShowModal(false);
			toast("won 🏆");
		}
	}, [dispatch, isCorrect]);

	return (
		<div className="App">
			<Navbar />
			<Toaster position="top-center" reverseOrder={true} />

			{solution && <Wordle />}
			{showModal && <Modal setShowModal={setShowModal} />}
			{showModal && <Modal setShowModal={setShowModal} isCorrect={isCorrect} />}
			<Keypad />
		</div>
	);
}

export default App;
