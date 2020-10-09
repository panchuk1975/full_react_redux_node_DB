import React, { useEffect } from "react";
import Notes from "../components/Notes";

const MainPage = ({
  notesArray,
  newNote,
  note,
  addNoteThunkCreator,
  changeNoteThunkCreator,
  deleteNoteThunkCreator,
  fetchNoteThunkCreator,
  fetchNotesThunkCreator,
}) => {
  useEffect(() => {
    fetchNotesThunkCreator();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Notes
        notesArray={notesArray}
        newNote={newNote}
        note={note}
        addNoteThunkCreator={addNoteThunkCreator}
        changeNoteThunkCreator={changeNoteThunkCreator}
        deleteNoteThunkCreator={deleteNoteThunkCreator}
        fetchNoteThunkCreator={fetchNoteThunkCreator}
      />
    </div>
  );
};

export default MainPage;