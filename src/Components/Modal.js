import { RiCloseFill } from "react-icons/ri";

export const Modal = ({ setShowModal }) => {
	const handleClose = (e) => {
		if (e.target.id === "wrapper") {
			setShowModal(false);
		}
	};

	return (
		<div>
			<div
				id="wrapper"
				className="fixed flex justify-center z-50  p-4   overflow-x-hidden overflow-y-auto inset-0  backdrop-blur-sm bg-opacity-30 "
				onClick={(e) => handleClose(e)}
			>
				<div className="relative w-full h-full max-w-2xl md:h-auto ">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex   p-4 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								How To Play
							</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent   rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
								onClick={() => {
									setShowModal(false);
								}}
							>
								<RiCloseFill size={28} />
							</button>
						</div>

						<div className="p-4 space-y-6">
							<ol className=" p-2  space-y-4 text-sm md:text-base leading-normal text-slate-200">
								<li>Guess the Wordle in 6 tries.</li>
								<li> Each guess must be a valid 5-letter word.</li>
								<li>
									The color changes to show how close your guess was to the
									word.
								</li>
								<li>
									Green color tile is in the word and in the correct spot.
								</li>
								<li>Yellow color tile is in the word and in the wrong spot.</li>
								<li>Gray color tile is not in the word in any spot.</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
