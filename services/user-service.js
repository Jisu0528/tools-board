let pool = require('../config/pool');
let userQuery = require('../query/userQuery');

async function logInUser(){
    try{
        let data = await pool.query(userQuery.getUser,id);
        return data[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

//1개한 정보만 보는것
async function getUser(id){
    try{
        let data = await pool.query(userQuery.getUser, id);
        return data[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}
//모든 정보 ?
async function getUsers(){
    try{
        let data = await pool.query(userQuery.getUsers);
        return data[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

async function insertUser(email,password,number,name,phone){
    //set = ?
    try{
         let data = await pool.query(userQuery.insertUser,{
            email:email,
            password:password,
            number:number,
            name:name,
            phone:phone,
        });
        return data[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

async function updateUser(id, email,password,phone){
    try{
        let data = await pool.query(userQuery.updateUser, [
            email,password,phone,id
        ]);
        return data[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

async function deleteUser(id){
    try{
        let data = await pool.query(userQuery.deleteUser, id);
        return data[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

module.exports ={
    logInUser:logInUser,
    getUser:getUser,
    getUsers:getUsers,
    insertUser:insertUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}