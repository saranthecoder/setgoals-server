const express = require('express');
const router=express.Router();
const schema = require('../user/usermodel')

router.get('/',(req,res)=>{
    console.log("done call..")
    const jsonResponse = {
        unit:2
    };

    // Send the JSON response
    res.json(jsonResponse);
})

router.post('/posting',async(req,res)=>{

    var data = await req.body;
    const emp = await schema.create(data);
    res.json(emp);
})
// router.post('/router',userController.createUser);
module.exports = router;