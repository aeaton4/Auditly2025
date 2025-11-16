const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const auditRoutes = require('./auditRoutes');
const findingRoutes = require('./findingRoutes');
const riskRoutes = require('./riskRoutes');
const documentRoutes = require('./documentRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/audits', auditRoutes);
router.use('/findings', findingRoutes);
router.use('/risks', riskRoutes);
router.use('/documents', documentRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
