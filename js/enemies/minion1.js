


 let minion1 = new Enemy(
    {
      x: 376.79,
      y: 25.15,
    },
    "./img/minion1Idle.png",
     2,
    {
        default: {
          frameRate: 2,
          frameBuffer: 40,
          loop: true,
          imageSrc: "./img/minion1Idle.png",
          onComplete: () => {
           
          },
        },
       attack: {
        frameRate: 6,
         frameBuffer: 13,
         loop: false,
         imageSrc: "./img/minionattack.png",
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
              attackBoxChange(minion1,player,missed);
              gameOverScreen(player);
              minion1.switchSprite("default");
              minion1.play();

            },
          });
          
        },
       },
       damage: {
         frameRate: 5,
         frameBuffer: 7,
         loop: false,
         imageSrc: "./img/minionDamage.png",
         onComplete: () => {
         
            minion1.switchSprite("default");
            minion1.play();
          
         
       },
       },
       vanish: {
         frameRate: 4,
         frameBuffer: 8,
         loop: false,
         imageSrc: "./img/minionvanish.png",
         onComplete: () => {
         
          redScreen = false;
          leftRoomiEnemiesDefeated = true;
          minion1.dropItem(Cudgel);

          var rect = canvas.getBoundingClientRect();
          div = document.createElement("div");
          div.id = "TextBox";
          div.style.position = "absolute";
          div.style.width = rect.width - 60 + "px";
          div.style.height = 500 - 60 + "px";
          div.style.left = rect.left + "px";
          div.style.top = rect.bottom - 500 + "px";
          div.classList.add("TextBox");
          par = document.createElement("p");
          par.classList.add("Text");
          par.innerHTML =
            "You found a cudgel! You can equip it in your inventory. It will increase your attack by 5.";
    
          body = document.querySelector("body");
          div.appendChild(par);
          body.appendChild(div);
          
          overlay.opacity;
              gsap.to(overlay, {
                opacity: 1,
                onComplete: () => {
                  level = 3;
                  countActivated = 0;
                  levels[level].init();
                  gsap.to(overlay, {
                    opacity: 0,
                  });
                },
              });
          
       },
       },
    },
     40,
     true,
     true,
    20,
    12,
    12,
    0,
    "Cudgel"

  );

  let min1battleTextBox = new Sprite({
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
  

