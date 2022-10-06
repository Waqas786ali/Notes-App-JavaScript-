const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const saveElement = document.querySelector("#save-note");
const noteId = location.hash.substring(1);
const notes = getSavedNotes();

const note = notes.find(function (note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign("./index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener("input", function (e) {
  note.title = e.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener("input", function (e) {
  note.body = e.target.value;
  saveNotes(notes);
});

saveElement.addEventListener("click", function (e) {
  saveNotes(notes);
  location.assign("./index.html");
});
