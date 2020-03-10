import React, { useContext } from "react";
import Note from "./Note";
import NoteContext from "../context/notes";
const NoteList = () => {
	// Return notes state from the current context value

	const { notes } = useContext(NoteContext);

	// Maps each note from state to it's own note component
	return notes.map(note => <Note key={note.title} note={note}></Note>);
};

export { NoteList as default };
