let wolfwake = new Sprite({
    position: {
      x: 495,
      y: 728.13,
    },
    imageSrc: "./img/WolfWake.png",
    frameRate: 6,
    animations: {
      change: {
        frameRate: 6,
        frameBuffer: 15,
        loop: false,
        imageSrc: "./img/WolfWake.png",
        onComplete: () => {
            
            overlay.opacity;
            gsap.to(overlay, {
              opacity: 1,
              onComplete: () => {
                level = 11;
                levels[level].init();
  
                gsap.to(overlay, {
                  opacity: 0,
                });
             },
           });
        }
      },
    },
    frameBuffer: 20,
    loop: false,
    autoplay: false,
  });

let fountain = new Sprite({
    position: {
      x: 26.77,
      y: 547.07,
    },
    imageSrc: "./img/Fountain.png",
    frameRate: 6,
    animations: {
      change: {
        frameRate: 6,
        frameBuffer: 15,
        loop: false,
        imageSrc: "./img/Fountain.png",
        onComplete: () => {
           
           if (fountain.enteredOpened == false) {

             itemboxtext = "You gained 10 health";

             useObjectBoxShow(objectUsedBoxFinOne,itemboxtext)
           
             wolfwake.disabled = true;
             if((player.health + 10) > player.maxHealth){
               player.health = player.maxHealth;
              } 
              else {
                player.health += 10;
              }
              fountain.enteredOpened = true;
        }

        }
      },
    },
    frameBuffer: 20,
    loop: false,
    autoplay: false,
  });

  let objectUsedBoxFinOne = new Sprite({
    position: {
      x: 486.22,
      y: 574.12,
    },
    imageSrc: "./img/ObjectFoundBox.png",
    frameRate: 1,
    frameBuffer: 20,
    loop: false,
    autoplay: false,
  });

  let flOneArrow = new Sprite({
    position: {
      x: 525.61,
      y: 1364.36,
    },
    imageSrc: "./img/Down Arrow Idle.png",
    frameRate: 1,
    animations: {
      change: {
        frameRate: 2,
        frameBuffer: 25,
        loop: false,
        imageSrc: "./img/Down Arrow Ani.png",
        onComplete: () => {
          overlay.opacity;
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
              level = 5;
              levels[level].init();

              gsap.to(overlay, {
                opacity: 0,
              });
              flOneArrow.switchSprite("default");
              flOneArrow.clicked = false;
            },
          });
        },
      },
      hover: {
        frameBuffer: 0,
        loop: false,
        imageSrc: "./img/Down Arrow Hover.png",
      },
      default: {
        frameBuffer: 0,
        loop: false,
        imageSrc: "./img/Down Arrow Idle.png",
      },
    },
    loop: false,
    autoplay: false,
  
  })

  let finalLvlOneDoor =  new Sprite({
    position: {
      x: 908.33,
      y: 349.33,
    },
    imageSrc: "./img/finalRoomDoor.png",
    frameRate: 5,
    animations: {
      default: {
        frameRate: 5,
        frameBuffer: 25,
        loop: false,
        imageSrc: "./img/finalRoomDoor.png",
        onComplete: () => {
          overlay.opacity;
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
              
              level = 12;
              levels[level].init();
              gsap.to(overlay, {
                opacity: 0,
              });
              
              finalLvlOneDoor.switchSprite("default");
              
             
            },
          });
        },
      },
    
    },
    frameBuffer: 20,
    loop: false,
    autoplay: false,
  });