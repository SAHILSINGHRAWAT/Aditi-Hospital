const express=require('express');
const app = express();
const router= express.Router();
const {handler1}=require('../controllers/handler');
router.post('/', handler1);
module.exports = router;