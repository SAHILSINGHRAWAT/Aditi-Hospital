const express=require('express');
const app = express();
const router= express.Router();
const { signup , makeAppointment , nothing}=require('../controllers/handler');
router.post('/', nothing);
router.post('/ap', makeAppointment);
router.post('/signup', signup);
module.exports = router;