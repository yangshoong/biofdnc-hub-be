const express = require('express');
const router = express.Router();

const ingredientsRoutes = require('../../features/ingredients/routes');
const productsRoutes = require('../../features/products/routes');
const qualityRoutes = require('../../features/quality/routes');
const sharedRoutes = require('../../features/shared/routes');

router.use('/ingredients', ingredientsRoutes);
router.use('/products', productsRoutes);
router.use('/quality', qualityRoutes);
router.use('/', sharedRoutes);

module.exports = router;