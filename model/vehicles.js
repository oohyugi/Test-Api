var db=require('../dbconnection'); //reference of dbconnection.js
 
var Vehicles={
 
getAllVehicles:function(callback){
 
return db.query("Select * from vehicles",callback);
 
},
 getVehiclesById:function(id,callback){
 
return db.query("select * from vehicles where Id=?",[id],callback);
 },
 addvehicles:function(Vehicles,callback){
 return db.query("Insert into vehicles (drivers,vehicle_number) values(?,?)",[Vehicles.Drivers,Vehicles.VehicleNumber],callback);
 },
 deleteVehicles:function(id,callback){
  return db.query("delete from vehicles where Id=?",[id],callback);
 },

 updateVehicles:function(id,Vehicles,callback){
  return db.query("update vehicles set drivers=?,vehicle_number=? where Id=?",[Vehicles.Drivers,Vehicles.VehicleNumber,id],callback);
 }
 
};
 module.exports=Vehicles;