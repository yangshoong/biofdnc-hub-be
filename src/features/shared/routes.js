const express = require('express');
const router = express.Router();

// 공통 기능 라우트 (예: 인증, 로깅 등)
router.get('/login', (req, res) => {
  res.send('get login');
});
router.get('/logout', /* 로그아웃 처리 */);

module.exports = router;