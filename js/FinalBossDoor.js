let FBDarrows = [
    new Sprite({
      position: {
        x: 30.64,
        y: 595.7,
      },
      imageSrc: "./img/Left Arrow Trans.png",
      frameRate: 1,
      animations: {
        change: {
          frameRate: 2,
          frameBuffer: 25,
          loop: false,
          imageSrc: "./img/Left arrow ani.png",
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
                 FBDarrows[0].switchSprite("default");
                 FBDarrows[0].clicked = false;
              },
            });
            
          },
        },
        hover: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/Left Arrow Hover.png",
        },
        default: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/Left Arrow Trans.png",
        },
      },
      loop: false,
      autoplay: false,
    }),
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
                level = 2;
                levels[level].init();
  
                gsap.to(overlay, {
                  opacity: 0,
                });
                FBDarrows[1].switchSprite("default");
                FBDarrows[1].clicked = false;
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
    }),
  ];


  const FinalBossDoor = new Sprite({
    position: {
      x: 301.22,
      y: 208.83,
    },
    imageSrc: "./img/bossDoorAnimation.png",
    frameRate: 6,
    animations: {
      default: {
        frameRate: 6,
        frameBuffer: 25,
        loop: false,
        imageSrc: "./img/bossDoorAnimation.png",
        onComplete: () => {
          overlay.opacity;
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
               level = 10;
               
               levels[level].init();
               console.log(levels[level])
               gsap.to(overlay, {
                 opacity: 0,
               });
               FinalBossDoor.switchSprite("default");
            },
          });
          
        },
      },
      // hover: {
      //   frameBuffer: 0,
      //   loop: false,
      //   imageSrc: "./img/Left Arrow Hover.png",
      // },
     
    },
    loop: false,
    autoplay: false,
  })