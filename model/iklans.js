var db=require('../dbconnection'); //reference of dbconnection.js
 
var Iklans={
 
getAllIklans:function(callback){
 
return db.query("Select * from iklans",callback);
 
},
 getIklansById:function(id,callback){
 
return db.query("select * from iklans where id=?",[id],callback);
 },
 addIklans:function(Iklans,callback){
 return db.query("Insert into iklans (title,image) values(?,?)",[Iklans.title,Iklans.image],callback);
 },
 deleteIklans:function(id,callback){
  return db.query("delete from iklans where id=?",[id],callback);
 },

 updateIklans:function(id,Iklans,callback){
  return db.query("update iklans set title=?,image=? where id=?",[Iklans.title,Iklans.image,id],callback);
 }
 
};
 module.exports=Iklans;