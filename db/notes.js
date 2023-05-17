const fs = require('fs');
const path = require('path');

function updateDb(id, notesObj) {
    const notes = notesObj.notes
    const deletedNote = id;
    for (let i = 0; i < notes.length; i++) {
        if (deletedNote === notes[i].id) {
            notes.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, "db.json"),
                JSON.stringify({notes: notes}, null, 2), err => {
                    if (err) {
                        throw err;
                    }
                }
            )
        }
    }
}

function createNewNote(newNote, notesObj) {
    const notes = notesObj.notes
    notes.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, "db.json"),
      JSON.stringify({notes: notes}, null, 2)
    );
    return newNote;
};

module.exports = { updateDb, createNewNote }; 