const pauseMenu =  new Sprite({
    position: {
        x: 0,
        y: 0,
      },
      imageSrc: "./img/PauseBG.png",
})


let menuOptions = [
    new Sprite({
      position: {
        x: 249.49,
        y: 74.26,
      },
      imageSrc: "./img/Continue.png",
      frameRate: 1,
      animations: {
        hover: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/ContinueHightlight.png",
        },
        default: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/Continue.png",
        },
      },
      loop: false,
      autoplay: false,
    }),new Sprite({
      position: {
        x: 274.31,
        y: 366.21,
      },
      imageSrc: "./img/combat.png",
      frameRate: 1,
      animations: {
        hover: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/combatHighlight.png",
        },
        default: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/combat.png",
        },
      },
      loop: false,
      autoplay: false,
    }),new Sprite({
      position: {
        x: 76.32,
        y: 695.17,
      },
      imageSrc: "./img/inventoryMenuOpt.png",
      frameRate: 1,
      animations: {
        hover: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/inventoryMenuOptHighlight.png",
        },
        default: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/inventoryMenuOpt.png",
        },
      },
      loop: false,
      autoplay: false,
    }),new Sprite({
      position: {
        x: 456.32,
        y: 1058.86,
      },
      imageSrc: "./img/quit.png",
      frameRate: 1,
      animations: {
        hover: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/quitHighlight.png",
        },
        default: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/quit.png",
        },
      },
      loop: false,
      autoplay: false,
    }),
    
  ];

  let combatIns = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "./img/combatIns.png",
    frameRate: 1,
  })

  let inventoryIns = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "./img/inventoryIns.png",
    frameRate: 1,
  })