const mongoose = require('mongoose');

const postCommentSchema = new mongoose.Schema({
  //게시글 고유번호
  postId: {
    type: Number,
    unique: true,
  },
  //댓글 고유번호
  commentId: {
    type: Number,
  },
  //작성자 id
  userEmail: {
    type: String,
    match: /.+\@.+\..+/,
  },
  //댓글 내용
  content: {
    type: String,
    required: true,
  },
});

const postComment = mongoose.model('postComment', postCommentSchema);
module.exports = postComment;
