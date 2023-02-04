import './css/styles.css';
import {Game} from "./../src/js/rpg.js";
//temp console
//const game1 = new Game;
// let hero1 = game1.characterGenerator();
// let zombie1 = game1.npcGenerator();
// game1.avatar = hero1;
// game1.npc =zombie1;
// console.log (game1);

//UI Logic
window.addEventListener("load", () => {
  //substitute global variables here
  document.getElementById("output-text").innerText = "You have arrived in the land of the dead. There are many zombies here, aka homeless people.  Well, it's pretty much the same thing.  They're all dead.  Except for maybe you... if you can prove it.  Press Enter to continue.";
  //document.getElementById("karma").innerText = game1.avatar.karma 
  //turn start
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = document.getElementById("prompt");
    console.log (answer);
    //turn function here
  });
});




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