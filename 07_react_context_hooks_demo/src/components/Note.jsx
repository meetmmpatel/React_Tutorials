import React, { useContext } from "react";
import NotesContext from "../context/notes";
import useMousePosition from "../hooks/useMousePosition";

const Note = ({ note }) => {
	/**
	 Return the notes Dispatch actions from current context value
	 */
	const { notesDispatch } = useContext(NotesContext);

	// Create Variable for useMousePosition hooks
	const position = useMousePosition();

	// Dispatch Remove Note actions on button Click

	const removeNote = title => {
		notesDispatch({
			type: "REMOVE_NOTE",
			title
		});
	};

	return (
		<div>
			<h3>{note.title}</h3>
			<p>{note.body}</p>
			<p>
				{position.x}, {position.y}
			</p>
			<button
				onClick={() => {
					removeNote(note.title);
				}}
			>
				Remove Note
			</button>
		</div>
	);
};

export { Note as default };
