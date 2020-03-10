import { useState, useEffect } from "react";

// Creating a Custom hook for track mouse position
// https://reactjs.org/docs/hooks-custom.html

export default function useMousePosition() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = e => {
			setPosition({ x: e.pageX, y: e.pageY });
		};
		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return position;
}
