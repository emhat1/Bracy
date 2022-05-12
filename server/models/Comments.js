const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: 'You need to leave a comment',
    minlength: 10,
    maxlength: 280,
    trim: true,
  },
  commentAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comment: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Comment = model('comment', commentSchema);

module.exports = Thought;
