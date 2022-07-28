const mongoose = require('mongoose');
const { Schema } = mongoose;

const boardSchema = new Schema({
  boardId: { type: Number, required: true }, // 포스트 유니크 값
  workSpaceName: { type: String, required: true },
  userName: { type: String, required: true }, // 유저 이름
  title: { type: String, required: true }, // 글 제목
  content: { type: String, required: true }, //글 내용
  createdTime: { type: String, required: true },
  image: { type: String },
  //   likes: { type: Number, default: 0 }, // 좋아요 수
});

const Board = mongoose.model('Board', boardSchema);
module.exports = Board;
