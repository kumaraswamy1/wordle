import { keypadLetters } from "../constants/data";

export const Keypad = () => {
	const keybadAlign = {
		A: "ml-4 ",
		Z: "ml-4",
	};

	return (
		<div className="block  max-w-[500px] text-center m-5 mx-auto my-5  border rounded-md py-4">
			{keypadLetters.map((l) => {
				return (
					<div
						key={l.key}
						className={`${keybadAlign[l.key]}
							inline-block w-10 h-12 text-center	m-1 p-2 border rounded-md
						`}
					>
						{l.key}
					</div>
				);
			})}
		</div>
	);
};
