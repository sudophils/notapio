/**
 * NoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function getNotes(req, res) {
  const allNotes = await Note.find()
    .fetch()
    .sort("createdAt DESC");
  if (!allNotes) {
    return res.status(404).json({ error: "could not retrieve notes" });
  }
  return res.status(200).json(allNotes);
};
