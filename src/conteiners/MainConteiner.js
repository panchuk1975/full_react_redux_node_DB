import MainPage from "../pages/MainPage";
import { connect } from "react-redux";
import {
  addNoteThunkCreator,
  changeNoteThunkCreator,
  deleteNoteThunkCreator,
  fetchNoteThunkCreator,
  fetchNotesThunkCreator,
} from "../redux/notesReducer";
//import Rainbow from "../hocs/Rainbow";
import { compose } from "redux";
import { getNotesArraySelector, getNewNote, getNote } from "../redux/selectors";

let mapStateToProps = (state) => {
  return {
    notesArray: getNotesArraySelector(state),
    newNote: getNewNote(state),
    note: getNote(state),
  };
};

let MainConteiner = compose(
  //Rainbow, // - can change text colors
  connect(mapStateToProps, {
    changeNoteThunkCreator,
    addNoteThunkCreator,
    deleteNoteThunkCreator,
    fetchNoteThunkCreator,
    fetchNotesThunkCreator,
  })
)(MainPage);
export default MainConteiner;