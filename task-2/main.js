const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input;
    let n = input.split(',');
    let x = parseInt(n[0]); //7
    let a = parseInt(n[1]); //2
    let b = parseInt(n[2]); //7
    if(x > a && x <= b){
        console.log("IN")
    }else{
        console.log("OUT")
    }
    
});
