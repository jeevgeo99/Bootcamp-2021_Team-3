const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.query5)


module.exports=router