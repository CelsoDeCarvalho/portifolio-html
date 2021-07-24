let auto = document.getElementById("auto_writer");

let str = "Hello, I am Celso, I'm FullStack Developer and Software Analyst. Nice to meet you.";

let spd = 100;
let i = 0;

let type = () =>{
  
  if(i < str.length){
    auto.innerHTML += str.charAt(i);
    i++
    setTimeout(type, spd);
  }
}

type();

