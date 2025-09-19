let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let turn0=true;
let newBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

 
// we store the winning conditions in 2D array
const winConditions=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8] 
];

const resetGame=()=>{
    console.log("reset");
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
      if(turn0==true){ //player 0
        box.innerText="O";
        turn0=false;
      }
      else{ //player X
        box.innerText="X";
        turn0=true;
      }
      box.disabled=true; //to disable the box after clicking

      checkWinner();
    });
});
const disableBoxes=()=>{
for(let box of boxes){
    box.disabled=true; //to disable the box after clicking
}
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false; //to enable the box after clicking
        box.innerText="";
    }
}


const showWinner =(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winConditions){
        let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("winner",pos1Val)
            showWinner(pos1Val);
            disableBoxes();
            return;

        }

    }
    };
Draw();
   
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

const Draw=()=>{
    let isDraw=true;
    for(let box of boxes){
        if (box.innerText==""){
isDraw=false;
break;
        }
    }

    if(isDraw==true){
        console.log("draw");
        msg.innerText="it's a Draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}


