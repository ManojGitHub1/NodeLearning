module.exports = reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide Age")
    }else if(req.query.age < 18){
        res.send("You can't access this page")
    }else{
        next();
    }
    // console.log('Request received')
}