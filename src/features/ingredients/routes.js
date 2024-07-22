const express = require('express');
const router = express.Router();

// 성분 관련 라우트 정의
router.get('/', /* 성분 목록 조회 */);
router.post('/', /* 성분 추가 */);
// ... 기타 성분 관련 라우트

module.exports = router;