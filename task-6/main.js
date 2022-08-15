const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let input = result.input;
   let n = input.split("");
   let a = parseInt(n[0]);
   let b = parseInt(n[1]);
   let c = parseInt(n[2]);
   let d = parseInt(n[3]);

   if(a%2 == 0 && b%2 == 0 && c%2 == 0 && d%2 ==0){
      console.log("YES");
   }else{
      console.log("NO");
   }

  
});
