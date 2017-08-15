var express = require('express');
var router = express.Router();
var Iklans=require('../model/iklans');

/* GET users listing. */
router.get('/', function(req, res, next) {

	Iklans.getAllIklans(function(err,rows){
		if(err)
  			{
  				res.json(err);
  			}	
 		else
  			{
  				res.json(rows);
  			}
	});

});

router.post('/add/', function(req, res, next) {



	Iklans.addIklans(req.body,function(err,count){
		if(err)
  			{
  				res.json(err);
  			}	
 		else
  			{
  				res.json(req.body);
  			}
        Console.log(req.body);
	});

});
router.delete('/:id', function(req, res, next) {

	Iklans.deleteIklans(req.params.id,function(err,count){
 
		if(err)
  			{
  				res.json(err);
  			}
  		else
  			{
 				res.json(count);
  			}
 
	});

});

router.put('/:id', function(req, res, next) {

	Iklans.updateIklans(req.params.id,req.body,function(err,rows){
 
		if(err)
  			{
  				res.json(err);
  			}
  		else
  			{
  				res.json(rows);
  			}
  });

});

module.exports = router;
