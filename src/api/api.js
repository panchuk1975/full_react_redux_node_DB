import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const notesAPI = {
  addNote(newNote, number) {
    return instance
      .post(
        "/employees",
        { ...newNote, number } // - and THEN returns other PROMIS
      )
      .then((response) => response.data); // - outside to US
  },

  changeNote(newNote, numberId) {
    return instance
      .put(`/employees/${numberId}`, { ...newNote })
      .then((response) => response.data);
  },

  deleteNote(numberId) {
    return instance
      .delete(`/employees/${numberId}`)
      .then((response) => response.data);
  },

  fetchNotes() {
    return instance.get(`/employees`).then((response) => response.data);
  },

  fetchNote(numberId) {
    return instance
      .get(`/employees/${numberId}`)
      .then((response) => response.data);
  },
};
