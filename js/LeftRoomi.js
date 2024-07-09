let leftRoomiEnemiesDefeated  = false
let CudgelDropped = false
let MedBottleFound = false;
let leftRSearch = false;

let enemy = new Sprite({
  position: {
    x: 320.75,
    y: 632.45,
  },
  imageSrc: "./img/minion_room_ani.png",
  frameRate: 3,
  animations: {
    change: {
      frameRate: 3,
      frameBuffer: 25,
      loop: false,
      imageSrc: "./img/minion_room_ani.png",
      onComplete: () => {
        overlay.opacity;
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level = 4;
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

let LeftRoomarrows = [
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
              level = 1;
              levels[level].init();

              gsap.to(overlay, {
                opacity: 0,
              });
              LeftRoomarrows[0].switchSprite("default");
              LeftRoomarrows[0].clicked = false;
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

let Desk = new Sprite({
  position: {
    x: 812.89,
    y: 810.91,
  },
  imageSrc: "./img/LeftRoomDeskDef.png",
  frameRate: 1,
  animations: {
    hover: {
      frameRate: 1,
      frameBuffer: 25,
      loop: false,
      imageSrc: "./img/LeftRoomDeskHov.png",
    },
    default: {
      frameRate: 1,
      frameBuffer: 0,
      loop: false,
      imageSrc: "./img/LeftRoomDeskDef.png",
    },
  },
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});

let LeftroomTextBox = new Sprite({
  position: {
    x: 0,
    y: 1000,
  },
  imageSrc: "./img/TextBox.png",
  frameRate: 1,
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});

let Medbottle = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/MedBottleFound.png",
  frameRate: 1,
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});


let Cudgel = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/cudgelFound.png",
  frameRate: 1,
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});