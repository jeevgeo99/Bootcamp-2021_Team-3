const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.query3)


module.exports=router