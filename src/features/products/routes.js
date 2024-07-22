const express = require('express');
const router = express.Router();

// RMI 관련 라우트
router.get('/rmi', /* RMI 목록 조회 */);
router.post('/rmi', /* RMI 추가 */);

// 서류 관련 라우트
router.get('/documents', /* 서류 목록 조회 */);
router.post('/documents', /* 서류 생성 */);

module.exports = router;