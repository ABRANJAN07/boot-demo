const cds = require('@sap/cds');
const {training} = cds.entities('trainer');
const {colors} = require('colors');

module.exports = cds.service.impl((srv) => {

    srv.before("READ","training",(req)=>{

        console.log("request: ", req.method.yellow.inverse);
        console.log("Target: ", req.target.name.yellow.inverse);

        console.log(req.query);

    });

    srv.on("CREATE","training",(req)=>{
        
        console.log("request: ", req.method.yellow.inverse);     
        if (req.data.duration > 2) {
            req.reject(400,"Dursation cant be more than 2");
        }   

    });

    srv.after("READ","training",(res)=>{
        console.log("request: ", res);

        for(let i = 0 ; i < res.length ; i++){
            res[i].trainee = "dummy";
        }
        
    });

})