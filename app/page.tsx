"use client";

import { useEffect, useState } from "react";

const Home = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [computerChoice, setComputerChoice] = useState<string>("");
	const [result, setResult] = useState<string | void>("");

	//@ts-ignore
	useEffect(() => play());

	const play = (userChoice: string) => {
		const rand = Math.floor(Math.random() * 3);
		rand === 0 && setComputerChoice("rock");
		rand === 1 && setComputerChoice("paper");
		rand === 2 && setComputerChoice("scissors");

		if (computerChoice == userChoice) {
			return "It's a tie!";
		}
		if (userChoice === "rock") {
			if (computerChoice === "paper") {
				return "You lost! Try again?";
			} else if (computerChoice == "scissors") {
				return "Congratulations! You won!";
			}
		}
		if (userChoice === "paper") {
			if (computerChoice === "scissors") {
				return "You lost! Try again?";
			} else if (computerChoice == "rock") {
				return "Congratulations! You won!";
			}
		}
		if (userChoice === "scissors") {
			if (computerChoice === "rock") {
				return "You lost! Try again?";
			} else if (computerChoice == "paper") {
				return "Congratulations! You won!";
			}
		}
	};

	const options = [
		{ name: "🪨 Rock", value: "rock" },
		{ name: "📄 Paper", value: "paper" },
		{ name: "✂️ Scissors", value: "scissors" },
	];

	return (
		<div className="min-h-screen flex gap-8 flex-col justify-center items-center p-4">
			<div className="sm:text-xl text-lg text-center font-semibold">
				{!result ? (
					<p>Push a button to play rock paper scissors!</p>
				) : (
					<p>{result}</p>
				)}
			</div>
			{/* <div className="text-xl font-semibold">{result && result}</div> */}
			<div className="flex flex-col sm:flex-row gap-4 justify-between">
				{options.map((option: any) => (
					<button
						key={option.value}
						disabled={loading}
						onClick={() => {
							setLoading(true);
							setTimeout(() => {
								setResult(play(option.value));
								setLoading(false);
							}, 250);
						}}
						className="rounded-md border-black/25 shadow-sm border text-lg font-semibold p-1 px-8 w-full whitespace-nowrap transition-all hover:bg-black/5 hover:scale-[1.05] cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:bg-black/5 disabled:border-black/10"
					>
						{option.name}
					</button>
				))}
			</div>
		</div>
	);
};

export default Home;
