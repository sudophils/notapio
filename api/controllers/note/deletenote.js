/**
 * NoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function deleteNote(req, res) {
  const id = req.param("id");
  const deleted = await Note.destroy({ id: id }).fetch();
  if (!deleted) {
    return res.status(404).json({ error: "could not retrieve notes" });
  }
  return res.json(deleted);
};
