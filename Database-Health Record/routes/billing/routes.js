const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.getBilling)
router.post('/',controller.addBilling)

module.exports=router