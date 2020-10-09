import { createSelector } from "reselect";

//--------------------Simply Selectors--------------------//
const getNotesArray = (state) => {
  return state.notes.notesArray;
};

export const getNewNote = (state) => {
  return state.notes.newNote;
};

export const getNote = (state) => {
    return state.notes.note;
  };

//-----------Use CreateSelector from "reselect"------------//
export const getNotesArraySelector = createSelector(
  getNotesArray,
  (notesArray) => {
    // can something to do with notesArray
    return notesArray;
  }
);
