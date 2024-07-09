

document.addEventListener("keydown", function (event) {
 

    let pauseMenuCount = 0

    if (event.key === "Escape") {
      

      
     
     if(!pauseMenu.enteredOpened){
        pauseMenu.enteredOpened = true
        
          for (let i =0;  i < levels[level].objects.length; i ++){
            if (levels[level].objects[i].length == undefined){
              levels[level].objects[i].disabled = true
              
            }
            else{
              for(let j =0;  j < levels[level].objects[i].length; j ++){
                  levels[level].objects[i][j].disabled = true
              }
            }
          }
     } else{
        pauseMenu.enteredOpened = false
        combatIns.enteredOpened = false

        if(document.querySelector("#backbutton") != null){
          document.querySelector("#backbutton").remove()
        }

        for (let i = 0; i < menuOptions.length; i ++){
          menuOptions[i].disabled = false
        }

        for (let i =0;  i < levels[level].objects.length; i ++){
          if (levels[level].objects[i].length == undefined){
            levels[level].objects[i].disabled = false
          } else{
            for(let j =0;  j < levels[level].objects[i].length; j ++){
                levels[level].objects[i][j].disabled = false
            }
          }
        }
     }
    
     
    }
  });


  const pauseMenuOptionsEventListenerClickFunctionsContinue = (event,object,levels) => {
    if (
        event.x >= object.position.x &&
        event.x <= object.position.x + object.width &&
        event.y >= object.position.y &&
        event.y <= object.position.y + object.height &&
        pauseMenu.enteredOpened == true
        && object.disabled == false
      ) {
        pauseMenu.enteredOpened = false
        setTimeout(() => {
        for (let i =0;  i < levels[level].objects.length; i ++){
          if (levels[level].objects[i].length == undefined){
            levels[level].objects[i].disabled = false
          } else{
            for(let j =0;  j < levels[level].objects[i].length; j ++){
                levels[level].objects[i][j].disabled = false
            }
          }
        }
      }, 500)
        
      }
}

const pauseMenuOptionsEventListenerClickFunctionsCombat = (event,object,instruction) =>{
  if (
    event.x >= object.position.x &&
    event.x <= object.position.x + object.width &&
    event.y >= object.position.y &&
    event.y <= object.position.y + object.height 
    && pauseMenu.enteredOpened == true 
    && object.disabled == false
  ) {
    if(object == menuOptions[1]){
     
      menuOptions[2].disabled = true
    } else if(object == menuOptions[2]){
      menuOptions[1].disabled = true
    }
    object.disabled = true
    menuOptions[0].disabled = true
    menuOptions[3].disabled=true
    instruction.enteredOpened = true
    backButton()
    removeInts(instruction,object)

    
  }
}

const pauseMenuOptionsEventListenerClickFunctionsQuit = (event,object) =>{
  if (
    event.x >= object.position.x &&
    event.x <= object.position.x + object.width &&
    event.y >= object.position.y &&
    event.y <= object.position.y + object.height 
    && pauseMenu.enteredOpened == true
    && object.disabled == false
  ) {
    

    window.close()
    
  }
}

const mouseMoveEventsPauseMenu = (event,object) => {
  if (
    event.x >= object.position.x &&
    event.x <= object.position.x + object.width &&
    event.y >= object.position.y &&
    event.y <= object.position.y + object.height 
    && pauseMenu.enteredOpened == true
  ) {
    object.switchSprite("hover")
    
  } else{
    object.switchSprite("default")
  }
}


document.addEventListener("click",function (event) {
  
    pauseMenuOptionsEventListenerClickFunctionsContinue(event,menuOptions[0],levels)
    pauseMenuOptionsEventListenerClickFunctionsCombat(event,menuOptions[1],combatIns)
    pauseMenuOptionsEventListenerClickFunctionsCombat(event,menuOptions[2],inventoryIns)
    pauseMenuOptionsEventListenerClickFunctionsQuit(event,menuOptions[3])
  
})

 window.addEventListener("mousemove", function (event) {
  
  for(let i = 0; i < menuOptions.length; i ++){
    mouseMoveEventsPauseMenu(event,menuOptions[i])
  }
 })

 const backButton = () =>{
  let button = document.createElement("p");
  let canvasBody = canvas.getBoundingClientRect();
  button.id = "backbutton";
  button.classList.add("BackBtn");
  button.classList.add("default-cursor");
  button.style.position = "absolute";
  button.style.left = "50px";
  button.style.top = canvasBody.bottom - 125 + "px";
  button.style.color = "white";
  button.innerText = "Back";
  let InventoryBody = document.querySelector("body");
  InventoryBody.appendChild(button);
 }

 const removeInts = (object,menuopt) => {
  let backButton = document.querySelector("#backbutton")
  backButton.addEventListener("click",function (event) {
    menuopt.disabled = false
    object.enteredOpened = false
    if(menuopt == menuOptions[1]){
     
      menuOptions[2].disabled = false
    } else if(menuopt == menuOptions[2]){
      menuOptions[1].disabled = false
    }
    menuOptions[0].disabled = false
   
    menuOptions[3].disabled = false
    document.querySelector("#backbutton").remove()
  })
 }