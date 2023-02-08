import "animate.css";
export const Row = ({ guess, currentGuess }) => {
	const colorVariants = {
		green: "bg-lime-500  ",
		yellow: "bg-yellow-400 ",
		grey: "bg-gray-400 ",
	};

	if (guess) {
		return (
			<div className="grid   grid-cols-[3.1rem_3.1rem_3.1rem_3.1rem_3.1rem]">
				{guess.map((l, i) => (
					<div
						className={`${colorVariants[l.color]}
								 border-2 border-gray-400  animate__animated animate__flipInX
 font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-1
						`}
					>
						{l.key}
					</div>
				))}
			</div>
		);
	}

	if (currentGuess) {
		let letters = currentGuess.split("");
		return (
			<div className="grid  grid-cols-[3.1rem_3.1rem_3.1rem_3.1rem_3.1rem]">
				{letters.map((l, i) => (
					<div
						className={`${
							colorVariants[l.color]
						} animate__animated animate__pulse
							 border-2 border-gray-500    font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-1
						`}
					>
						{l}
					</div>
				))}
				{[...Array(5 - letters.length)].map((_, i) => (
					<div
						className={`
							 border-2 border-gray-400    font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-3
						`}
					></div>
				))}
			</div>
		);
	}

	return (
		<div className="grid  grid-cols-[3.1rem_3.1rem_3.1rem_3.1rem_3.1rem]">
			<div
				className={`
							 border-2 border-gray-400    font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-3
						`}
			></div>
			<div
				className={`
							 border-2 border-gray-400    font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-3
						`}
			></div>
			<div
				className={`
							 border-2 border-gray-400    font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-3
						`}
			></div>
			<div
				className={`
							 border-2 border-gray-400    font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-3
						`}
			></div>
			<div
				className={`
							 border-2 border-gray-400    font-black m-[0.1rem] text-2xl text-center w-[2.5rem] h-[2.5rem] p-3
						`}
			></div>
		</div>
	);
};
