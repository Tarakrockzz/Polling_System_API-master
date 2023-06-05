const express = require('express');
const router = express.Router();

const questionsApi = require('../../../controllers/api/v1/questions_api');

router.post('/create', questionsApi.createQuestion);
router.post('/:id/options/create', questionsApi.createOption);
router.get('/:id', questionsApi.viewQuestion);
router.delete('/:id/delete', questionsApi.deleteQuestion);

module.exports = router;
