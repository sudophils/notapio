/**
 * Note.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    noteTitle: {
      type: "string",
      required: true
    },
    noteText: {
      type: "string",
      required: true
    },
    noteTime: {
      type: "string"
    },
    noteDate: {
      type: "string"
    }
  }
};
