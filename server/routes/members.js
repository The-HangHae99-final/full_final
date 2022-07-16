const express = require("express");
const router = express.Router();
const memberController = require("../controller/members");
const authMiddleware = require("../middlewares/auth-middleware");
const isMember = require("../middlewares/isMember");

//멤버 추가
router.put(
  "/memberIn",
  authMiddleware,
  isMember,
  memberController.memberAdd
);

//멤버 목록 조회
router.get(
  "/member",
  authMiddleware,
  isMember,
  memberController.getMemberList
);

//멤버 삭제
router.put(
  "/memberOut",
  authMiddleware,
  isMember,
  memberController.deleteMember
);

module.exports = router;
