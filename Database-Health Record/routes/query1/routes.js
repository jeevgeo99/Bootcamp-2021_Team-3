const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.query1)


module.exports=router