// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"];
function writeCards(names, event){
  let greeting = []
  for (let i = 0; i < names.length; i++){
     greeting.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return greeting;
    

}

function countDown(num){
  while (num >= 0){
    console.log(num--);
      }

}