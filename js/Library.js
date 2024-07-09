let libraryArrow = new Sprite({
    
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
                  libraryArrow.switchSprite("default");
                  libraryArrow.clicked = false;
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



let libraryChest= new Sprite({
    
        position: {
          x: 959.39,
          y: 950.12,
        },
        imageSrc: "./img/libraryChest.png",
        frameRate: 7,
        animations: {
          default: {
            frameRate: 7,
            frameBuffer: 25,
            loop: false,
            imageSrc: "./img/libraryChest.png",
            onComplete: () => {
              Inventory = rePositionInventory(Inventory);
              item = reorganizeItems(item,Inventory);
              chestOpeningItem(libraryChest,gambesonFound,"Gambeson","You found a Gambeson")
              
            },
          },
          // hover: {
          //   frameBuffer: 0,
          //   loop: false,
          //   imageSrc: "./img/Down Arrow Hover.png",
          // },
         
        },
        loop: false,
        autoplay: false,
      })
    
      let gambesonFound= new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/gambesonFound.png",
        frameRate: 1,
        frameBuffer: 20,
        loop: false,
        autoplay: false,
        clickCount: 1
      });

      let objectUsedBoxLib = new Sprite({
        position: {
          x: 486.22,
          y: 574.12,
        },
        imageSrc: "./img/ObjectFoundBox.png",
        frameRate: 1,
        frameBuffer: 20,
        loop: false,
        autoplay: false,
        //clickCount: 1
      });