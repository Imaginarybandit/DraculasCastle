class Enemy extends Sprite {
  constructor(
    position,
    imageSrc,
    frameRate = 1,
    animations,
    frameBuffer = 10,
    loop = true,
    autoplay = true,
    health,
    baseAttack,
    attack,
    defense = 0,
    weapon = null,
    armor = null,
    item = null,
    stunned = false,
    defeated = false
  ) {
    super(
      position,
      imageSrc,
      frameRate,
      animations,
      frameBuffer,
      loop,
      autoplay
    );
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
      this.OrignalWidth = this.width;
    };
    this.image.src = imageSrc;
    this.loaded = false;
    this.frameRate = frameRate;
    this.currentFrame = 0;
    this.elapsedFrames = 0;
    this.animations = animations;
    this.frameBuffer = frameBuffer;
    this.loop = loop;
    this.autoplay = autoplay;
    this.currentAnimation = null;
    this.health = health;
    this.baseAttack = baseAttack;
    this.attack = attack;
    this.defense = defense;
    this.weapon = weapon;
    this.armor = armor;
    this.item = item;
    this.stunned = stunned;
    this.defeated = defeated;


    if (this.animations) {
      for (let key in this.animations) {
        const image = new Image();
        image.src = this.animations[key].imageSrc;
        this.animations[key].image = image;
       
      }
    }
    
    
  }
  dropItem (object) {
   object.found = true;
  }



}
