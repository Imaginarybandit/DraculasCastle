const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1500;
canvas.height = 1500;

const placeDoor = [];

let background;

let level = 1;

let levels = {
  1: {objects:[doors,stairs],
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/BG Room1.png",
      });
      doors,
      stairs
    },
  },
  2: {
    objects:[
      PortraitMan,
      PortraitWithKey,
      arrows
    ],
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/Level2Hallway.png",
      });
      arrows;
      PortraitMan;
      PortraitWithKey;
      KeyFound;
    },
  },
  3: {
    objects: [enemy,Desk,LeftRoomarrows],
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/LeftRoomi.png",
      });
      enemy;
      Desk;
    },
  },
  4:{
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/battlebg1.png",
      });
      minion1;
    },
  },
  5: {
    objects:[FinalBossDoor,FBDarrows],
    init: () => {
      
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/FinalDoorHallway.png",
      });
     FBDarrows
     FinalBossDoor
    },
  },
 
  6:{
    objects:[leftHallwayDoor,LibraryEntrance,LeftHallwayArrow],
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/Hallway left.png",
      });
    
    },
    leftHallwayDoor,
    LibraryEntrance,
    LeftHallwayArrow
  },
  7:{
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/BattleBGBat.png",
      });
    },
    fatBatBattleTextBox,
    FatBat
  },
  9:{
    objects:[morningStarWall,batRoomDownArrow],
    init: () => {
      background = new Sprite ({
        position: {
            x: 0,
            y: 0,
          },
          imageSrc: "./img/BatroomBG.png",
    })
    },
    morningStarWall,
    morningStarFound,
    batRoomDownArrow,
    morningStarFoundTextbox
  },
  8:{
    objects:[libraryArrow,libraryChest],
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/Library.png",
      });
    },
    libraryArrow,
    libraryChest
  },

  10:{
    objects:[wolfwake,fountain,flOneArrow,finalLvlOneDoor],
    init: () => {
      background = new Sprite (
        {
          position:{
            x:0,
            y:0
          },
          imageSrc: "./img/finalRoomOne.png"
        }
      )
    },
    finalLvlOneDoor,
    wolfwake,
    fountain,
    objectUsedBoxFinOne,
    flOneArrow
  },
  
  11:{
    objects:[],
    init: () =>{
      background = new Sprite (
        {
          position:{
            x:0,
            y:0
          },
          imageSrc: "./img/wolfBG.png"
        }
      )
    },
    wolf,
    wolfBattleTextBox
  },
  12:{
    objects:[],
    init: () =>{
      background = new Sprite (
        {
          position:{
            x:0,
            y:0
          },
          imageSrc: "./img/thanks.png"
        }
      )
    },
  }
};

const mouse = {
  x: undefined,
  y: undefined,
};

const overlay = {
  opacity: 0,
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  if (level == 1) {
    for (let i = 0; i < doors.length; i++) {
      doors[i].draw();
    }
    stairs.draw();
    
  }

  if (level == 2) {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].draw();
    }
    PortraitMan.draw();
    PortraitWithKey.draw();

    if (KeyFound.found) {
      KeyFound.draw();
      TextBox.draw();
    }
  }

  if (level == 3) {
    if(!leftRoomiEnemiesDefeated){
    enemy.draw();
    }
    Desk.draw();
    for (let i = 0; i < LeftRoomarrows.length; i++) {
      LeftRoomarrows[i].draw();
    }

    if (Cudgel.found) {
      Cudgel.draw();
      LeftroomTextBox.draw();   
    }

    if (Medbottle.found) {
      Medbottle.draw();
      LeftroomTextBox.draw();
    }
  }

  if(level == 4){
    
    minion1.draw()
    min1battleTextBox.draw()
   
    if (countActivated == 0) {   
     
      clickBodyPart(minion1,player);
      countActivated = 1
    }
    


  }

  if (level == 5) {
    for (let i = 0; i < FBDarrows.length; i++) {
      FBDarrows[i].draw();
    }
    FinalBossDoor.draw();
  }

  if (level == 6) {
 
    leftHallwayDoor.draw();
    LibraryEntrance.draw();
    LeftHallwayArrow.draw();
    
  }

  if (level == 7) {
    
    FatBat.draw();
    fatBatBattleTextBox.draw();
   
    if (countActivated == 0) {   
      
      clickBodyPart(FatBat,player);
      countActivated = 1
    }
    
  }
  
  if (level == 8) {
    libraryArrow.draw();
    libraryChest.draw();

    if (gambesonFound.found) {
      gambesonFound.draw();
      TextBox.draw();
    }
    if (objectUsedBoxLib.found ){
      
      objectUsedBoxLib.draw();
      
    }
  }

  if (level == 9) {
    morningStarWall.draw();
    batRoomDownArrow.draw();
    
    if(morningStarFound.found) {
      morningStarFound.draw();
      morningStarFoundTextbox.draw();
    }
  }
  if (level == 10) {
    finalLvlOneDoor.draw()
    if(!wolf.defeated){
    wolfwake.draw();
    }
    fountain.draw();
    flOneArrow.draw()
    if (objectUsedBoxFinOne.found) {
      objectUsedBoxFinOne.draw();
    }
  }

  if(level == 11){
    wolf.draw()
    wolfBattleTextBox.draw()

    if (countActivated == 0) {   
      console.log(wolf)
      clickBodyPart(wolf,player);
      countActivated = 1
    }
  }

  if (InventoryOpen) {
    drawInventory();

  } else if(!InventoryOpen) {
    displayIventoryItem = false;
    inventoryCount = 0;
    drawInventoryCount = 0
    if( (document.querySelector("#useItem" ) !== null) && 
    (document.querySelector("#Equip" ) !== null) && 
    (document.querySelector('#Health') !== null) &&
    (document.querySelector('#Attack') !== null) &&
    (document.querySelector('#Defense') !== null)){
      document.querySelector("#useItem").remove();
      document.querySelector("#Equip").remove();
      document.querySelector('#Health').remove();
      document.querySelector('#Attack').remove();
      document.querySelector('#Defense').remove();
      
    }
    
   
  }

  if(pauseMenu.enteredOpened){
    pauseMenu.draw()
    for( let i = 0; i < menuOptions.length ; i ++){
   
     menuOptions[i].draw()
    }

    if(combatIns.enteredOpened){
     
      combatIns.draw()
    } 
    if(inventoryIns.enteredOpened){
      inventoryIns.draw()
    }
  }

  if (dead) {
   gameOver.draw()

  }

  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = (redScreen) ? "red" : "black";
  c.fillRect(0, 0, canvas.width , canvas.height );
  c.restore();
}
levels[level].init();
animate();


