const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.query4)


module.exports=router