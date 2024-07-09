

let fatBatBattleTextBox = new Sprite({
    position: {
      x: 0,
      y: 1030,
    },
    imageSrc: "./img/Combat text box.png",
    frameRate: 1,
    
    frameBuffer: 0,
    loop: false,
    autoplay: false,
  });

  let FatBat= new Enemy(
    {
      x: 41.15,
      y: 186.77,
    },
    "./img/FatBatIdle.png",
     6,
    {
        default: {
          frameRate: 6,
          frameBuffer: 40,
          loop: true,
          imageSrc: "./img/FatBatIdle.png",
          onComplete: () => {
           
          },
        },
       attack: {
        frameRate: 8,
         frameBuffer: 10,
         loop: false,
         imageSrc: "./img/FatBatAttack.png",
         onComplete: () => {
          overlay.opacity;
          redScreen = true;
          gsap.to(overlay, {
            opacity: 0.5,
            duration: 0.15,
            onComplete: () => {
              
               gsap.to(overlay, {
                 opacity: 0,
                  duration: 0.5,
               });
              attackBoxChange(FatBat,player,missed);
              gameOverScreen(player);
              FatBat.switchSprite("default");
              FatBat.play();

            },
          });
          
        },
       },
       damage: {
         frameRate: 5,
         frameBuffer: 7,
         loop: false,
         imageSrc: "./img/FatBatDamage.png",
         onComplete: () => {
         
            FatBat.switchSprite("default");
            FatBat.play();
          
         
       },
       },
       vanish: {
         frameRate: 5,
         frameBuffer: 6,
         loop: false,
         imageSrc: "./img/FatBatVanish.png",
         onComplete: () => {
          
          redScreen = false;
          FatBat.defeated = true;
          overlay.opacity;
              gsap.to(overlay, {
                opacity: 1,
                onComplete: () => {
                  level = 9;
                  levels[level].init();
                  countActivated = 0
                  gsap.to(overlay, {
                    opacity: 0,
                  });
                },
              });
          
       },
       },
    },
     25,
     true,
     true,
    25,
    20,
    0,
    

  );