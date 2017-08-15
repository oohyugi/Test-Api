var express = require('express');
var router = express.Router();
var Vehicles=require('../model/vehicles');

/* GET users listing. */
router.get('/', function(req, res, next) {

	Vehicles.getAllVehicles(function(err,rows){
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

	Vehicles.addvehicles(req.body,function(err,count){
		if(err)
  			{
  				res.json(err);
  			}	
 		else
  			{
  				res.json(req.body);
  			}
	});

});
router.delete('/:id', function(req, res, next) {

	Vehicles.deleteVehicles(req.params.id,function(err,count){
 
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

	Vehicles.updateVehicles(req.params.id,req.body,function(err,rows){
 
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
