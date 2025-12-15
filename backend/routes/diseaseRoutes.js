const express = require('express');
const router = express.Router();
const { getDiseases, getDiseaseById, getSymptoms } = require('../controllers/diseaseController');

router.route('/').get(getDiseases);
router.route('/symptoms').get(getSymptoms);
router.route('/:id').get(getDiseaseById);

module.exports = router;
