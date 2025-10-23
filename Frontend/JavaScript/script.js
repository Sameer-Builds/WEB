// let heading=document.getElementById("heading")
// console.dir(heading)

// let headings=document.getElementsByClassName("heading-class")
// console.dir(headings)
// console.log(headings)

// let parahs=document.getElementsByTagName("p")
// console.dir(parahs)
// console.log(parahs)

// let firstEl=document.querySelector("p")
// console.dir(firstEl)

// let allEl=document.querySelectorAll("p")
// console.dir(allElEl)

// let div= document.querySelector("div")
// console.dir(div)


// let i= document.querySelector("h2")
// console.dir(i)


// let boxes= document.querySelectorAll(".box")
// console.log(boxes)
// boxes[0].innerText= "new unique value 0";
// boxes[1].innerText= "new unique value 1";
// boxes[2].innerText= "new unique value 2";

// let idx=0;

// for(box of boxes){
//     box.innerText= `new unique value ${idx}`
//     idx++;
// }


// let id=document.querySelector("#box")
// console.log(id)

// let div=id.getAttribute("id")
// console.log(div)


// let divs=document.querySelector(".para")
// console.log(divs.setAttribute("class","newClass"))


// let div=document.getElementById("box")
// console.log(div)


// let newBtn = document.createElement("button")
// newBtn.innerText = "click me!"
// console.dir(newBtn)

// let div = document.querySelector("div")
// div.append(newBtn)



// let newHeading = document.createElement("h1")
// newHeading.innerHTML="<i> I am new</i>"

// document.querySelector("body").append(newHeading)



// let button = document.createElement("button")
// button.innerText = "Click Me!"
// button.style.backgroundColor = "red"
// button.style.color = "white"
// console.dir(button)
// document.querySelector("body").prepend(button)


//  let p = document.querySelector("p")
// p.getAttribute("class") 

// p.classList.add("newClass")



// let btn1 = document.querySelector("#btn1");

// btn1.ondblclick  = () => {
//     console.log("SAMEER")
//     let a = 5;
//     a++;
//     console.log(a)
// }

// btn1.addEventListener("click",(evt)=>{
//     console.log("button is clicked")
//     console.log(evt.type)
//     console.log(evt.target)
// })


// let div=document.querySelector("div")
// div.onmouseover = () => {
//     console.log("Akhtar")
// }



// let btn1 = document.querySelector("button")
//  let curMode = "light";
//  let body = document.querySelector("body")
//   btn1.addEventListener("click",(evt) =>{
//      if( curMode === "light"){
//          curMode = "dark"
//      body.classList.add("dark") 
//      body.classList.remove("light") 
//      }
//      else{
//          curMode = "light";
//      body.classList.add("light")        
//      body.classList.remove("dark")        
//      }
//      console.log(curMode)
//  })





let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector(".reset-btn")
let turnO=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,6,8],
    [3,4,5],
    [6,7,8],

]

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
    console.log("box was clicked");
    if(turnO){
        box.innerText="O";
        turnO = false;
    }else{
        box.innerText="X";
        turnO = true;
    }
    box.disabled=true;
    checkWinner();
    })
    
})
 const  checkWinner = () =>{
    for(pattern of winPatterns){
     pos1Val=boxes[pattern[0]].innerText
     pos2Val=boxes[pattern[1]].innerText
     pos3Val=boxes[pattern[2]].innerText
    
     if(pos1Val!="" && pos2Val !="" && pos3Val !=""){
     if(pos1Val===pos2Val && pos2Val===pos3Val){
        console.log("winner",pos1Val)
     }
     }
    }

 }