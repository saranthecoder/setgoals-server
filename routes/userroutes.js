const express = require('express');
const router=express.Router();
const schema = require('../user/usermodel')

router.get('/', async (req, res) => {
    try {
      const data = await schema.findOne().sort({ timestamp: -1 });
      console.log(data.units)
  
      if (!data) {
        return res.status(404).json({ message: 'No data found' });
      }
  
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.post('/posting',async(req,res)=>{

    var data = await req.body;
    const emp = await schema.create(data);
    res.json(emp);
})

module.exports = router;