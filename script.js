let music=new Audio("music.mp3");
let turnn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let restart=document.getElementById("restart");
let isgameOver=false;
const box=document.getElementsByClassName("item");
let turn="X";



Array.from(box).forEach((element)=>{
    element.addEventListener("click",function(){
           if(isgameOver===false)
           {
            turnn.play();
            element.innerHTML=turn;
            turn=changeTurn();
           
            element.disabled=true;
            checkWin();
           }
          
        
       
    })
})
//function to change turns
const changeTurn=()=>{
    
        return turn==="X"?"O" : "X";
    
    
}

// // console.log(box);
// //function to check win
const checkWin=()=>{
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    // (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
  wins.forEach((element)=>{
    
    if((box[element[0]].innerHTML === box[element[1]].innerHTML)&&(box[element[2]].innerHTML === box[element[1]].innerHTML)&&(box[element[0]].innerHTML !=="") )
    {
        isgameOver=true;
        
        const g=document.getElementById("result");
        gameover.play();
        g.style.display="block";
        g.innerText=box[element[0]].innerHTML+"  wins";
        box[element[0]].style.backgroundColor="green";
        box[element[1]].style.backgroundColor="green";
        box[element[2]].style.backgroundColor="green";
        box[element[0]].style.color="white";
        box[element[1]].style.color="white";
        box[element[2]].style.color="white";
        // console.log();
         restart.style.backgroundColor="red";
         restart.style.color="white";
    }
  });

};


// //game logic



// Array.from(box).forEach((element) => {
//      element.addEventListener("click",function(e){
//        if(isgameOver===false)
//        {
//         element.innerHTML=turn;
//         turn=changeTurn(turn);
//         element.disabled=true;
//         turnn.play();
//         checkWin();
//        }
        

//      }) 
// });


restart.addEventListener("click",((event)=>{

     window.location.reload();
     isgameOver=false;
     turn="X";


}));