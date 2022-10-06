const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// Save the notes to the localStorage
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

const generateTodosDOM = function (note) {
  const notesEl = document.createElement("div");
  const textEl = document.createElement("a");
  const button = document.createElement("button");
  const message = document.createElement("p");
  const textEl1 = document.createElement("h3");

  button.textContent = "x";
  textEl.textContent = "Edit Note"
  notesEl.appendChild(button);
  notesEl.appendChild(textEl1);

  button.addEventListener("click", function () {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  if (note.title.length > 0) {
    textEl1.textContent =  `${note.title}`;
  } else {
    textEl1.textContent = "Untitled Note";
  }
  if (note.body.length > 0) {
    message.textContent = `${note.body}`;
  } else {
    message.textContent = "No MESSAGE";
  }

  notesEl.appendChild(message);
  textEl.setAttribute("href", `./edit.html#${note.id}`);
  notesEl.appendChild(textEl);
  return notesEl;
};

const renderNotes = function (notes, filters) {
  const filtersNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filtersNotes.forEach(function (note) {
    const noteE1 = generateTodosDOM(note);
    document.querySelector("#notes").appendChild(noteE1);
  });
};
