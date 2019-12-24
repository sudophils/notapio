/**
 * NoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function updateNote(req, res) {
  const id = req.param("id");
  noteTitle = req.param("noteTitle");
  noteText = req.param("noteText");
  noteDate = req.param("noteDate");
  noteTime = req.param("noteTime");

  //const note = await Note.findOne({ id: id });

  // verify
  //   if (!note) {
  //     return res.status(404).json({ error: "There is no note with this id" });
  //   }

  const updateNote = await Note.updateOne({ id: id }).set({
    noteTitle: noteTitle,
    noteText: noteText,
    noteDate: noteDate,
    noteTime: noteTime
  });
  return res.json(updateNote);
};
