const notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document
  .querySelector("#created-notes")
  .addEventListener("click", function (e) {
    const id = uuidv4();
    const input = document.querySelector("#input-text");
    const message = document.querySelector("#input-message");
    notes.push({
      id: id,
      title: input.value,
      body: message.value,
    });

    saveNotes(notes);
    renderNotes(notes, filters);
    input.value = "";
    message.value = "";
  });
// document.querySelector("#edit-text").addEventListener("click", function (e) {
//   location.assign(`./edit.html#${id}`);
// });

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// document.querySelector("#filter-by").addEventListener("change", function (e) {
//   console.log(e.target.value);
// });
