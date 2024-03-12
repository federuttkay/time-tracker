import "./Card.css";
import "./Main.css";
import userImage from "../images/image-jeremy.png";
import TimeOption from "./TimeOption";

interface Props {
	timeframe: string;
	setTimeframe: (a: string) => void;
}

const timeframes = ["Daily", "Weekly", "Monthly"];

const Main = ({ timeframe, setTimeframe }: Props) => {
	return (
		<section className="card grid main-card">
			<div className="user">
				<img className="user-image" src={userImage} alt="" />
				<h1 className="user-title">
					Report for <span className="user-name">Jeremy Robson</span>{" "}
				</h1>
			</div>
			<div className="timeframe-selector">
				<ul className="timeframes-list grid">
					{timeframes.map((tf) => (
						<TimeOption
							name={tf}
							isSelected={timeframe === tf}
							setTimeframe={setTimeframe}
							key={tf}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Main;
