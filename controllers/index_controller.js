async function getIndex(req,res){
    try{

        return res.render('index',{title:'Express', test:'20101309 한지수'});
    }catch(err){
        console.log(err);
    }
}


module.exports = {
    getIndex:getIndex

}