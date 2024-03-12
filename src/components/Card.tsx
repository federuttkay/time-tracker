import ellipsis from "../images/icon-ellipsis.svg";
import "./Card.css";
import iconWork from "../images/icon-work.svg";
import iconPlay from "../images/icon-play.svg";
import iconStudy from "../images/icon-study.svg";
import iconExcercise from "../images/icon-exercise.svg";
import iconSocial from "../images/icon-social.svg";
import iconSelfCare from "../images/icon-self-care.svg";

interface Props {
	title: string;
	currentTime: number;
	previousTime: number;
	timeframe: string;
}

const Card = ({ title, currentTime, previousTime, timeframe }: Props) => {
	const getIcon = (iconName: string) => {
		if (iconName === "Work") return iconWork;
		if (iconName === "Play") return iconPlay;
		if (iconName === "Study") return iconStudy;
		if (iconName === "Exercise") return iconExcercise;
		if (iconName === "Social") return iconSocial;
		if (iconName === "Self Care") return iconSelfCare;
	};

	const getCardSubject = (cardSubject: string) => {
		if (cardSubject === "Work") return "work";
		if (cardSubject === "Play") return "play";
		if (cardSubject === "Study") return "study";
		if (cardSubject === "Exercise") return "excercise";
		if (cardSubject === "Social") return "social";
		if (cardSubject === "Self Care") return "self-care";
	};

	const icon = getIcon(title);
	const cardSubject = getCardSubject(title);

	return (
		<section className={`card ${cardSubject} ${cardSubject}-card`}>
			<div className="card-logo flex">
				<img src={icon} alt="" />
			</div>
			<div className="card-content">
				<div className="card-header flex flex-between">
					<h2 className="card-title">{title}</h2>
					<img className="card-ellipsis" src={ellipsis} alt="" />
				</div>
				<div className="time flex flex-between">
					<p className="card-current-time">{currentTime.toString() + "hrs"}</p>
					<p className="card-previous-time">{`Last ${timeframe} - ${previousTime}hrs`}</p>
				</div>
			</div>
		</section>
	);
};

export default Card;
