import "./TimeOption.css";

interface Props {
	name: string;
	isSelected: boolean;
	setTimeframe: (a: string) => void;
}

const TimeOption = ({ name, isSelected, setTimeframe }: Props) => {
	return (
		<li
			className={isSelected ? "selected" : ""}
			onClick={() => {
				setTimeframe(name);
				// console.log(name);
			}}
		>
			{name}
		</li>
	);
};

export default TimeOption;
