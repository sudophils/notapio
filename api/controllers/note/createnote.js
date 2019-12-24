/**
 * NoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function createNote(req, res) {
  const noteTitle = req.param("noteTitle");
  const noteText = req.param("noteText");
  const noteDate = req.param("noteDate");
  const noteTime = req.param("noteTime");

  const note = await Note.create({
    noteTitle,
    noteText,
    noteDate,
    noteTime
  }).fetch();

  if (!note) {
    return res.status(400).json({ error: "could not create note" });
  }
  return res.json(note);
};
