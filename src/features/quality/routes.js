const express = require('express');
const router = express.Router();

// ISO9001 관련 라우트
router.get('/iso9001', /* ISO9001 목차 조회 */);
router.get('/iso9001/:id', /* 특정 ISO9001 내용 조회 */);

// 협력사 Audit 관련 라우트
router.get('/audit', /* Audit 기록 조회 */);
router.post('/audit', /* Audit 기록 추가 */);

module.exports = router;