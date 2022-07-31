function runProgram(input) {
    let str = input.trim();
    let bag = [];
    solve(str,0, bag)
    function solve(str, index, bag){
           if(index===str.length){
               console.log(bag.join(""))
               return;
           }
           let s;
           if(str[index]==="2"){
               s = "abc"
           }else if(str[index]==="3"){
               s = "def"
           }else if(str[index]==="4"){
               s = "ghi"
           }else if(str[index]==="5"){
               s = "jkl"
           }else if(str[index]==="5"){
               s = "mno"
           }else if(str[index]==="6"){
               s = "mno"
           }else if(str[index]==="7"){
               s = "pqrs"
           }else if(str[index]==="8"){
               s = "tuv"
           }else if(str[index]==="9"){
               s = "wxyz"
           }
           
           for(let i=0;i<s.length;i++){
               bag.push(s[i])
               solve(str,index+1, bag)
               bag.pop()    
               
           }
      }  
  
   
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }