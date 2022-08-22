const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = parseInt(result.input);
   let a;
   if(-10000 <= n && n <=10000){
      if(n>=10){
      a = n**3 + 5*n 
      }else{
      a = n**2 -2*n + 4;
      }
      console.log(a);
   }









   //let a = n**3 + 5*n;
   // let b = n**2 -2*n + 4;
   // if(a%b !== 0){
   // console.log(b);
   // }
  
});