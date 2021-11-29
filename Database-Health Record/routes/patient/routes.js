const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.getPatient)
router.post('/',controller.addPatient)

module.exports=router