import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Main from "./components/Main";
import jsonData from "./assets/data.json";

interface TimeframeProps {
	current: number;
	previous: number;
}

interface CardProps {
	title: string;
	timeframes: {
		daily: TimeframeProps;
		weekly: TimeframeProps;
		monthly: TimeframeProps;
	};
}

function App() {
	const [timeframe, setTimeframe] = useState("Daily");

	let timef: string;
	if (timeframe === "Daily") timef = "Day";
	if (timeframe === "Weekly") timef = "Week";
	if (timeframe === "Monthly") timef = "Month";

	const time = timeframe.toLowerCase();

	return (
		<main className="grid main-grid">
			<div className="main-card">
				<Main timeframe={timeframe} setTimeframe={setTimeframe} />
			</div>
			{jsonData.map((element: CardProps) => (
				<Card
					title={element.title}
					currentTime={element.timeframes[time].current}
					previousTime={element.timeframes[time].previous}
					timeframe={timef}
					key={element.title}
				/>
			))}
		</main>
	);
}

export default App;
