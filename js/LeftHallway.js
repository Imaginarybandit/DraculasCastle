let leftHallwayDoor = new Sprite({
    position: {
      x: 940.34,
      y: 329.53,
    },
    imageSrc: "./img/left hallway door animation.png",
    frameRate: 5,
    animations: {
      default: {
        frameRate: 5,
        frameBuffer: 25,
        loop: false,
        imageSrc: "./img/left hallway door animation.png",
        onComplete: () => {
          overlay.opacity;
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
              
              level = FatBat.defeated ? 9 : 7;
              levels[level].init();
              gsap.to(overlay, {
                opacity: 0,
              });
              //This reses the door to its default state
              leftHallwayDoor.switchSprite("default");
              
             
            },
          });
        },
      },
    
    },
    frameBuffer: 20,
    loop: false,
    autoplay: false,
  });


  let LibraryEntrance = new Sprite({
    position: {
      x: 171.22,
      y: 472.07,
    },
    imageSrc: "./img/LibraryEntrance.png",
    frameRate: 10,
    animations: {
      default: {
        frameRate: 10,
        frameBuffer: 20,
        loop: false,
        imageSrc: "./img/LibraryEntrance.png",
        onComplete: () => {
          overlay.opacity;
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
              level = 8;
              levels[level].init();
              gsap.to(overlay, {
                opacity: 0,
              });
              //This reses the door to its default state
              LibraryEntrance.switchSprite("default");
              
            },
          });
        },
      },
    
    },
    frameBuffer: 20,
    loop: false,
    autoplay: false,
  });

  let LeftHallwayArrow= new Sprite({
    
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
              LeftHallwayArrow.switchSprite("default");
              LeftHallwayArrow.clicked = false;
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