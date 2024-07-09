let DrawKeyFound = false;
let searched = false;

let PortraitMan = new Sprite({
  position: {
    x: 229.44,
    y: 435.53,
  },
  imageSrc: "./img/PortraitManHall.png",
  frameRate: 1,
  animations: {
    default: {
      frameRate: 1,
      frameBuffer: 0,
      loop: false,
      imageSrc: "./img/PortraitManHall.png",
    },
    hover: {
      frameBuffer: 0,
      loop: false,
      imageSrc: "./img/PortraitManHover.png",
      ExtraPixels: 20,
    },
  },
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});

let PortraitWithKey = new Sprite({
  position: {
    x: 842,
    y: 421,
  },
  imageSrc: "./img/Portrait with key.png",
  frameRate: 1,
  animations: {
    default: {
      frameRate: 1,
      frameBuffer: 0,
      loop: false,
      imageSrc: "./img/Portrait with key.png",
    },
    hover: {
      frameBuffer: 0,
      loop: false,
      imageSrc: "./img/PortraitWithKeyHover.png",
      ExtraPixels: 20,
    },
  },
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});


let KeyFound = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/KeyFound.png",
  frameRate: 1,
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});

let TextBox = new Sprite({
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

let arrows = [
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
               level = 5;
               levels[level].init();
               gsap.to(overlay, {
                 opacity: 0,
               });
               arrows[0].switchSprite("default");
               arrows[0].clicked = false;
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
              level--;
              levels[level].init();

              gsap.to(overlay, {
                opacity: 0,
              });
              arrows[1].switchSprite("default");
              arrows[1].clicked = false;
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

