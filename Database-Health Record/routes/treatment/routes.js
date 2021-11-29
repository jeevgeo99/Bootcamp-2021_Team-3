const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.getTreatment)
router.post('/',controller.addTreatment)

module.exports=router