const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input;
    let n = input.split("");
    let a = parseInt(n[0]);
    let b = parseInt(n[1]);
    let c = parseInt(n[2]);
    let d = parseInt(n[3]);
    let g = 3;
    let v = 7;
    
    if(n[0]==g && n[1]==v || n[1]==g && n[2]==v || n[2]==g && n[3]==v){
    console.log("YES");
     }
     else{
         console.log("NO");
     }

});
