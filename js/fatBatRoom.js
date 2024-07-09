const morningStarWall = new Sprite ({
    position: {
        x: 276.95,
        y: 274.82,
    },
    imageSrc: "./img/MSwall.png",
    frameRate: 1,
    animations: {
      default: {
        frameRate: 1,
        frameBuffer: 0,
        loop: false,
        imageSrc: "./img/MSwall.png",
      },
    },
    loop: false,
  autoplay: false,
})

const morningStarFound = new Sprite ({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "./img/MorningStarFound.png",
    frameRate: 1,
    loop: false,
  autoplay: false,
})

const morningStarFoundTextbox = new Sprite ({
    position: {
        x: 0,
        y: 1000,
      },
      imageSrc: "./img/TextBox.png",
      frameRate: 1,
      loop: false,
      autoplay: false,
})

const batRoomDownArrow = 
    new Sprite({
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
                  level = 6;
                  levels[level].init();
    
                  gsap.to(overlay, {
                    opacity: 0,
                  });
                  batRoomDownArrow.switchSprite("default");
                  batRoomDownArrow.clicked = false;
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