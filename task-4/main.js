const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input;
    let n = input.split("")
    let a = parseInt(n[0]);
    let b = parseInt(n[1]);
    let c = parseInt(n[2]);
    let d = parseInt(n[3]);
    
    if(a==b && a==c && a!==d|| b==c && b==d && b!==a || c==d && c==a && c!==d || d==a && d==b && d!==c){
     console.log("YES");
    }else{
    console.log("NO");
    }

  
});
