let clickCount = 0;
let leftRoomClickCount = 0;
let div;
let body;
let par;
let isClicked =false

window.addEventListener("mousemove", function (event) {

  if (level == 2) {

    for (let i = 0; i < arrows.length; i++) {
      mousemoveEvents(event,arrows[i]);
    }

  }
  if (level == 3) {
   
    for (let i = 0; i < LeftRoomarrows.length; i++) {
      mousemoveEvents(event,LeftRoomarrows[i]);
    }
  
  }
  if (level == 5) {
    
    for (let i = 0; i < FBDarrows.length; i++){
      mousemoveEvents(event,FBDarrows[i]);
    }
  }
  if (level ==6){
    
    mousemoveEvents(event,LeftHallwayArrow)
  
  }
  if (level == 8){
    mousemoveEvents(event,libraryArrow)
  }
  if (level == 9){
    mousemoveEvents(event,batRoomDownArrow)
  }
  if(level == 10){
    mousemoveEvents(event,flOneArrow)
  }

});

//Here are the event listeners for the click events
window.addEventListener("click", function (event) {

  clickEventsInventory(event)

  if (level == 1) {
    for (let i = 0; i < doors.length; i++) {
    
      doors[i].disabled == false? eventListenerClickFunctions(event,doors[i],"default") : null;
    }

    stairs.disabled == false? eventListenerClickFunctions(event,stairs,"default") : null;
  }

  if (level == 2) {
    
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].disabled == false? eventListenerClickFunctions(event,arrows[i],"change") : null
    }
  
    let textboxText = "You found a key! You should probably go back to the door and use it.";
    
    PortraitWithKey.disabled == false ? foundItemScreen(event,PortraitWithKey,KeyFound,textboxText,"Hallway Key"): null
  
    removeFoundItemScreen(event,KeyFound);
  }

  if (level == 3) {

  enemy.disabled == false? eventListenerClickFunctions(event,enemy,"change") : null

  Desk.disabled == false ? ClickFunctionsItemsTriggerEnemies(event,Desk,enemy,Medbottle,leftRoomiEnemiesDefeated,"You found a medicine bottle. It heals some health",leftroomSearch,"Medicine Bottle",leftRoomClickCount) : null

  removeFoundItemScreenDropItem(event,Cudgel,"Cudgel")

  removeFoundItemScreen(event,Medbottle)

  for (let i = 0; i < LeftRoomarrows.length; i++) {
   
    LeftRoomarrows[i].disabled == false ? eventListenerClickFunctions(event,LeftRoomarrows[i],"change"): null
    
  }

  }

  if (level == 5) {

    for (let i = 0; i < FBDarrows.length; i++){
      FBDarrows[i].disabled == false ? eventListenerClickFunctions(event,FBDarrows[i],"change") : null
    }
    FinalBossDoor.disabled == false ? eventListenerClickFunctions(event,FinalBossDoor,"default") : null

  }

  if (level == 6) {
   leftHallwayDoor.disabled == false ? eventListenerClickFunctions(event,leftHallwayDoor,"default") : null
    LibraryEntrance.disabled == false ? eventListenerClickFunctions(event,LibraryEntrance,"default") : null
    LeftHallwayArrow.disabled == false ? eventListenerClickFunctions(event,LeftHallwayArrow,"change") : null
  }
if (level == 8){
  eventListenerClickFunctions(event,libraryArrow,"change")
  removeFoundItemScreen(event,gambesonFound)
  let keyfound = checkForKey(event,libraryChest,Inventory,"Hallway Key","default",item,objectUsedBoxLib,"You used the  hallway key")
  removeUseObjectBox(event,objectUsedBoxLib)
  if (libraryChest.clicked == false && keyfound ) {
    
    libraryChest.switchSprite("default");
    libraryChest.play();
    libraryChest.clicked= true
   
  }

}
if(level == 9 )
  {
    textboxText = "You found a Morning Star! You should probably go back to the door and use it.";
    morningStarWall.disabled == false ? foundItemScreen(event,morningStarWall,morningStarFound,textboxText,"MorningStar"): null;
    removeFoundItemScreen(event,morningStarFound);
    batRoomDownArrow.disabled == false ? eventListenerClickFunctions(event,batRoomDownArrow,"change") : null
  }

  if(level ==10){
    
    wolfwake.disabled == false ? eventListenerClickFunctions(event,wolfwake,"change") : null;
    fountain.disabled == false ? eventListenerClickFunctions(event,fountain,"change") : null;
    flOneArrow.disabled == false ? eventListenerClickFunctions(event,flOneArrow,"change") : null;
    (finalLvlOneDoor.disabled == false && wolf.defeated)? eventListenerClickFunctions(event,finalLvlOneDoor,"default"):null;
    removeUseObjectBox(event,objectUsedBoxFinOne,wolfwake)
  }

});

document.addEventListener("keydown", function (event) {
 
  if (event.key === "i" || event.keyCode === 73) {
    
    if (InventoryOpen == false) {
      
      InventoryOpen = true;
    } else {
      InventoryOpen = false;
      if (document.querySelector("#infobox") != null){
        document.querySelector("#infobox").remove()
      }
    }
  }


if((event.key === "Enter" && dead) ||(event.key === "Enter" && level == 12) ){
   location.reload(true)
}

if (event.key === "Escape" && level == 12){
  window.close()
}


});





