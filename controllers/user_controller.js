let userService = require('../services/user-service');

async function loginUser(req,res){
    try{

    }catch(err){
        return res.status(500).json(err);
    }
}

async function getUser(req,res){
    const {id} = req.params;
    try{
        let data = await userService.getUser(id);
        console.log(data);
        return res.render('user/detail',{data:data, name:"20101309"});
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

async function getUsers(req,res){
    try{
        let data = await userService.getUsers();
        return res.render('user/detail',{data:data, name:"20101309"});
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

async function insertUser(req,res){
    const {email,password, number,name,phone1,phone2,phone3} = req.body;
    let phone = phone1 + phone2+ phone3;
    try{
        let data = await userService.insertUser(email,password,number,name,phone);
        return res.redirect('/user/list')
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

async function updateUser(req,res){
    const {id,email,password,phone} = req.body;
    try{
        let data = await userService.updateUser(id, email, password, phone);
        return res.render('user/detail', {data:data, name:"20101309"});
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

async function deleteUser(req,res){
    const {id} = req.params;
    try{
        let data = await userService.deleteUser(id);
        return res.redirect('/user/list');
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

async function logOutUser(req,res){
    try{

    }catch(err){
        return res.status(500).json(err);
    }
}


module.exports ={
    loginUser:loginUser,
    getUser:getUser,
    getUsers:getUsers,
    insertUser:insertUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    logOutUser:logOutUser
}