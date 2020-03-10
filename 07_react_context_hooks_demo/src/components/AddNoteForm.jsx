import React, { useContext, useState } from "react";
import NotesContext from "../context/notes";
const AddNoteForm = () => {
	const { notesDispatch } = useContext(NotesContext);

	const [noteTitle, setNoteTitle] = useState(" ");
	const [noteBody, setNoteBody] = useState(" ");

	// Create Functions that will add note  to notesDispatch()
	const addNote = e => {
		e.preventDefault();

		notesDispatch({
			type: "ADD_NOTE",
			title: noteTitle,
			body: noteBody
		});

		setNoteTitle(" ");
		setNoteBody(" ");
	};
	return (
		<div>
			<h3>Add Note</h3>
			<form onSubmit={addNote}>
				<p>
					<input
						type="text"
						name="noteTitle"
						id="noteTitle"
						value={noteTitle}
						onChange={e => setNoteTitle(e.target.value)}
					></input>
				</p>
				<p>
					<textarea
						value={noteBody}
						onChange={e => setNoteBody(e.target.value)}
					></textarea>
				</p>
				<button type="submit"> Add Note</button>
			</form>
		</div>
	);
};

export { AddNoteForm as default };
