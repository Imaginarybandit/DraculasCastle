let wolfBattleTextBox = new Sprite({
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

  let wolf= new Enemy(
    {
      x: 312.12,
      y: 8.22,
    },
    "./img/wolfIdle.png",
     2,
    {
        default: {
          frameRate: 2,
          frameBuffer: 50,
          loop: true,
          imageSrc: "./img/wolfIdle.png",
          onComplete: () => {
           
          },
        },
       attack: {
        frameRate: 5,
         frameBuffer: 10,
         loop: false,
         imageSrc: "./img/wolfAttack.png",
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
              attackBoxChange(wolf,player,missed);
              gameOverScreen(player);
              wolf.switchSprite("default");
              wolf.play();

            },
          });
          
        },
       },
       damage: {
         frameRate: 5,
         frameBuffer: 7,
         loop: false,
         imageSrc: "./img/wolfDamage.png",
         onComplete: () => {
         
            wolf.switchSprite("default");
            wolf.play();
          
         
       },
       },
       vanish: {
         frameRate: 4,
         frameBuffer: 10,
         loop: false,
         imageSrc: "./img/wolfVanish.png",
         onComplete: () => {
          
          redScreen = false;
          wolf.defeated = true;
          overlay.opacity;
              gsap.to(overlay, {
                opacity: 1,
                onComplete: () => {
                  level = 10;
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
     50,
     true,
     true,
    30,
    25,
    0,
    

  );