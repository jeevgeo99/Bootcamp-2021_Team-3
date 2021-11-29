const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.getUsercred)
router.post('/',controller.addUsercred)

module.exports=router