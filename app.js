const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000
const router = express.Router();

router.get('/',(req,res) => res.sendFile(path.join(__dirname+'/public/view/index.html')));
router.get('/menu',(req,res) => res.sendFile(path.join(__dirname+'/public/view/menu.html')));
app.use( express.static(__dirname+'/public'));
//router.get('/menu',function(req,res){
//    res.sendFile(path.join(__dirname+'/menu.html'));
//});
//add router
app.use('/',router);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))