import React, { useReducer, useEffect } from "react";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";
import NotesContext from "../context/notes";
import notesReducer from "../reducers/notes";
export default function NoteApp() {
	const [notes, notesDispatch] = useReducer(notesReducer, []);

	// Runs only once on application load..(Similar to ComponentDidMount())
	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem("notes"));
		if (notes) notesDispatch({ type: "POPULATE_NOTE", notes });
	}, []);

	//Runs everyTime
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<NotesContext.Provider value={{ notes, notesDispatch }}>
			<div>
				<h1>Note App</h1>
				<NoteList></NoteList>
				<AddNoteForm></AddNoteForm>
			</div>
		</NotesContext.Provider>
	);
}
