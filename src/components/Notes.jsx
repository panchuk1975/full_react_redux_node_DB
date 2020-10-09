import React, { useState } from "react";
import { useTranslation } from "react-i18next";
var moment = require("moment");

const Notes = ({
  notesArray,
  newNote,
  note,
  addNoteThunkCreator,
  changeNoteThunkCreator,
  deleteNoteThunkCreator,
  fetchNoteThunkCreator,
}) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ ...newNote });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.currentTarget.value });
  };
  let number = moment(new Date()).format("DD-MM-YY HH:mm");
  notesArray.sort((a, b) => a.id - b.id);
  return (
    <div className="wrapper">
      <form className="create-note">
        <fieldset className="new-field main-block">
          <legend className="text-first">{t("New_note.1")}</legend>

          <div className="section">
            <label className="note-text" htmlFor="firstName">
              {t("First_name.1")}
            </label>
            <input
              type="text"
              className="firstName"
              placeholder={t("First_name.1")}
              value={form.firstName}
              name="firstName"
              onChange={changeHandler}
              autoFocus
              required
            />
          </div>

          <div className="section">
            <label className="note-text" htmlFor="secondName">
              {t("Second_name.1")}
            </label>
            <input
              type="text"
              className="secondName"
              placeholder={t("Second_name.1")}
              value={form.secondName}
              name="secondName"
              onChange={changeHandler}
            />
          </div>

          <div className="section">
            <label className="note-text" htmlFor="textarea">
              {t("Enter_note_text.1")}
            </label>
            <textarea
              type="text"
              className="textarea"
              placeholder={t("Enter_note_text.1")}
              value={form.text}
              name="text"
              onChange={changeHandler}
            />
          </div>

          <div className="section">
            <label className="note-text" htmlFor="status">
              {t("Set_status.1")}
            </label>
            <select
              type="text"
              className="status"
              value={form.status}
              name="status"
              onChange={changeHandler}
            >
              <option value="Busy">Busy</option>
              <option value="No busy">No busy</option>
            </select>
          </div>

          <div className="section">
            <button
              className="enter button-item"
              onClick={() => addNoteThunkCreator(form, number)}
            >
              {t("Enter.1")}
            </button>
          </div>
        </fieldset>
      </form>
      <form className="current-note">
        <fieldset className="note-field main-block">
          <legend className="text-first">{t("Current_note.1")}</legend>
          <div className="inf">
              <span className="note-text">
                {note.number} 
              </span>
              <span>{note.firstName} {note.secondName}</span>
              <span>{note.status}</span>
            </div>
          <p>{note.text}</p>
        </fieldset>
      </form>

      {notesArray.map((note) => {
        return (
          <div key={note.id} className="notes-block">
              <div className="text" onClick={() => fetchNoteThunkCreator(note.id)}>
              <div className="inf">
              <span className="note-text">
                {note.number} 
              </span>
              <span>{note.firstName} {note.secondName}</span>
              <span>{note.status}</span>
            </div>

            <p>{note.text.substr(0, 40)}...</p>
              </div>
           
            <button
              className="button-item"
              onClick={() => deleteNoteThunkCreator(note.id)}
            >
              {t("Delete.1")}
            </button>
            <button
              className="button-item"
              onClick={() =>
                changeNoteThunkCreator(
                  { ...form, number: note.number },
                  note.id
                )
              }
            >
              {t("Change.1")}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
