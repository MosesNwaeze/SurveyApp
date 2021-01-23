const Response = require("../models/response");

const result = [];
try{

  Response.find({}, (error, data)=>{
    if(error){
      console.log(error);
    }

    data.map((item)=>{
      console.log(item.question1.options.optionName);
      result.push(item);
    });
  });

}catch(e){
  console.log(e.message);
}
  
exports.getResponse = () => result;