const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
       text: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
