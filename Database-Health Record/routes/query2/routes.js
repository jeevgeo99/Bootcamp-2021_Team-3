const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.get('/', controller.query2)

module.exports=router