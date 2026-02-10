 let gameSeq =[];
 let userSeq=[];
let btns = ["yellow","red","purple","green"];
 let started=false;
 let level = 0;
let h2 = document.querySelector("h2");

function startGame() {
    if (!started) {
        started = true;
        levelup();
    }
};


document.addEventListener("keypress", startGame);






function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    userSeq=[];

    let randomindx =Math.floor(Math.random()*btns.length);
    let randcolr = btns[randomindx];
    let randbtn = document.querySelector(`.${randcolr}`);
     gameSeq.push(randcolr);
 
    btnFlash(randbtn);


}


function checkAns(indx){
 
    if(userSeq[indx]===gameSeq[indx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelup,500);
       }
    }
    else{
         playSound("wrong");  
       h2.innerHTML=` Game Over ! Your Score Was <b> ${level} </b>  <br>Press Any key To Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";},150);
        
       reset(); 
    }
}

function btnPrss(){
   let btn = this;
   let userColor = btn.id;
   userSeq.push(userColor);

   if(userSeq[userSeq.length-1] === gameSeq[userSeq.length-1]){
        btnFlash(btn); 
   }
   checkAns(userSeq.length-1);
}


let allbtn = document.querySelectorAll(".btn");
for( let button of allbtn){

 button.addEventListener("click",btnPrss);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function playSound(color) {
    let audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

function btnFlash(btn) {
    btn.classList.add("flash");
    playSound(btn.id);
    setTimeout(() => btn.classList.remove("flash"), 250);
}
