const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const commentController = require('../controller/comments');
const isMember = require('../middlewares/isMember');

//보드 댓글 작성
//댓글 작성
router.post(
  '/board/:boardId',
  authMiddleware,
  isMember,
  commentController.boardCommentUpload
);

//댓글 삭제 (수정여부 보류)
router.delete(
  '/board/:boardId/:commentId',
  authMiddleware,
  isMember,
  commentController.boardCommentDelete
);

//댓글 수정
router.put(
  '/board/:boardId/:commentId',
  authMiddleware,
  isMember,
  commentController.boardCommentEdit
);

//포스트 댓글 작성
//댓글 작성
router.post(
  '/post/:postId',
  authMiddleware,
  isMember,
  commentController.postCommentUpload
);

//댓글 삭제
router.delete(
  '/post/:postId/:commentId',
  authMiddleware,
  isMember,
  commentController.postCommentDelete
);

//댓글 수정
router.put(
  '/post/:postId/:commentId',
  authMiddleware,
  //
  commentController.postCommentEdit
);

module.exports = router;
