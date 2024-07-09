const doors = [
    new Sprite({
      position: {
        x: 39.94,
        y: 361.35,
      },
      imageSrc: "./img/DoorsRoom1.png",
      frameRate: 5,
      animations: {
        default: {
          frameRate: 5,
          frameBuffer: 25,
          loop: false,
          imageSrc: "./img/DoorsRoom1.png",
          onComplete: () => {
            overlay.opacity;
            gsap.to(overlay, {
              opacity: 1,
              onComplete: () => {
                level = 3;
                levels[level].init();
                gsap.to(overlay, {
                  opacity: 0,
                });
                doors[0].switchSprite("default")

                doors[0].clicked = false
              },
            });
          },
        },
        hover: {
          frameBuffer: 0,
          loop: false,
          imageSrc: "./img/Doors Hover.png",
          ExtraPixels: 20,
        },
      },
      frameBuffer: 20,
      loop: false,
      autoplay: false,
    }),
  ];

  const stairs = new Sprite({
    position: {
      x: 761.58,
      y: 63.74,
    },
    imageSrc: "./img/StairAnimation.png",
    frameRate: 6,
    animations: {
      default: {
        frameRate: 6,
        frameBuffer: 25,
        loop: false,
        imageSrc: "./img/StairAnimation.png",
        onComplete: () => {
          overlay.opacity;
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
              level++;
              levels[level].init();
              gsap.to(overlay, {
                opacity: 0,
              });
              stairs.switchSprite("default")
            },
          });

          stairs.clicked=false
        },
      },
      hover: {
        frameBuffer: 0,
        loop: false,
        imageSrc: "./img/StairHover1.png",
        ExtraPixels: 10,
      },
    },
    frameBuffer: 20,
    loop: false,
    autoplay: false,
  });

