//import { Npc, Game, Avatar } from "./rpg";
import './css/styles.css';

//UI Logic
window.addEventListener("load", () => {
  //substitute global variables here
  document.getElementById("output-area").innerText = "You have arrived in the land of the dead";
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = document.getElementById("prompt");
    console.log(answer);
    //turn function here
  })
})



//-------IMPORTANT AREA------------jd
// window.addEventListener("load", () => {
//   const book = new AddressBook();
//   const form = document.querySelector("form");
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     handleSubmit(book);
//     addToPage(book);
//   });
// });