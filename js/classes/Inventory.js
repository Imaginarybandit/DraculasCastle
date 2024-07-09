class Item extends Sprite {
  constructor(
    position,
    imageSrc,
    frameRate = 1,
    frameBuffer = 10,
    loop = false,
    autoplay = false,
    ItemName,
    itemType,
    heal = 0,
    damage = 0,
    defense = 0,
    useItem = false,
    equipped=false,
    description 
    
  
  ) {
    super(position, imageSrc, frameRate, frameBuffer, loop, autoplay);
    this.position = position;
    this.image.src = imageSrc;
    this.frameRate = frameRate;
    this.frameBuffer = frameBuffer;
    this.loop = loop;
    this.autoplay = autoplay;
    this.ItemName = ItemName;
    this.itemType = itemType;
    this.heal = heal;
    this.damage = damage;
    this.defense = defense;
    this.useItem = useItem;
    this.equipped = equipped;
    this.description = description;
   
  }

  healPlayer() {
    if((player.health + this.heal) > player.maxHealth){
      player.health = player.maxHealth;
      this.useItem = true;
    } 
    else {
    player.health += this.heal;
    this.useItem = true;
    }
  }

  equipItem(player) {

    if (!this.equipped ) {
    this.itemType === "weapon" ? player.attack = player.baseAttack : player.defense = player.baseDefense;
    {this.damage > 0? player.attack += this.damage : player.defense += this.defense}
    
    this.equipped = true;
    }

    if (this.itemType === "weapon") {
      player.weapon = this.ItemName;
    } else if (this.itemType === "armor") {
      player.armor = this.ItemName;
    }
 
  }
}



let Inventory = [];
let markers = [];

let InventoryOpen = false;
let displayIventoryItem = false;
let drawInventoryCount = 0;
let inventoryCount = 0;

let firtsMargin = 50;
let secondMargin = 20;
let topMargin = 30;
let bottomMargin = 10;
let itemBox = {
  width: 460,
  height: 440,
};
let YpositionEven = topMargin;
let YpositionOdd = topMargin;

let InventoryImg = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/Inventory.png",
  frameRate: 1,
  frameBuffer: 20,
  loop: false,
  autoplay: false,
});


let displayImg =new Item(
  {
    x: 1004,
    y: 20,
  }
 
);

let item = {};


const drawInventory = () => {
  InventoryImg.draw();
  
  for (let key in item) {
    for (let key2 in Inventory) {
      
      if (item[key] === Inventory[key2].ItemName) {
        
        Inventory[key2].draw();
        if (Inventory[key2].equipped) {
          markers[key2].draw();
        }
      }
     
    }
  }

  if (displayIventoryItem) {

    displayImg.draw();
    if (drawInventoryCount === 0){
      
      if (document.querySelector("#infobox") != null){
        document.querySelector("#infobox").remove()
      }


     for(i = 0; i < Inventory.length; i ++){
      
      if(Inventory[i].ItemName === displayImg.ItemName){
        console.log(Inventory[i])
        let infobox = document.createElement("div")
        infobox.id = "infobox"
     
        let description = document.createElement("p");
        description.id = "description";
        description.classList.add("Text");
        description.classList.add("default-cursor");
        description.style.color = "white";
        description.innerText = Inventory[i].description;

        infobox.appendChild(description)

        if(Inventory[i].damage > 0){
          let itemStat = document.createElement("p");
          itemStat.id = "itemStat";
          itemStat.classList.add("Text");
          itemStat.classList.add("default-cursor");
          itemStat.style.color = "white";
          itemStat.innerText = "Damage + " + Inventory[i].damage;
          infobox.appendChild(itemStat)

        }else if (Inventory[i].defense > 0){
          let itemStat = document.createElement("p");
          itemStat.id = "itemStat";
          itemStat.classList.add("Text");
          itemStat.classList.add("default-cursor");
          itemStat.style.color = "white";
          itemStat.innerText = "Defense + " + Inventory[i].defense;
          infobox.appendChild(itemStat)
        }

        let InventoryBody = document.querySelector("body");
        InventoryBody.appendChild(infobox);
      }
     }
    }

    drawInventoryCount = 1

  }



  

  
if(inventoryCount === 0){

  let playerStats = {
    Health: player.health,
    Attack: player.attack,
    Defense: player.defense,
  }

  let use = document.createElement("p");
  let canvasBody = canvas.getBoundingClientRect();
  use.id = "useItem";
  use.classList.add("Text");
  use.classList.add("default-cursor");
  use.style.position = "absolute";
  use.style.left = "50px";
  use.style.top = canvasBody.bottom - 125 + "px";
  use.style.color = "white";
  use.innerText = "Use Item";
  let InventoryBody = document.querySelector("body");
  InventoryBody.appendChild(use);

  let equipItem = document.createElement("p");
  equipItem.id = "Equip";
  equipItem.classList.add("Text");
  equipItem.classList.add("default-cursor");
  equipItem.style.position = "absolute";
  equipItem.style.left = "200px";
  equipItem.style.top = canvasBody.bottom - 125 + "px";
  equipItem.style.color = "white";
  equipItem.innerText = "Equip";

  
  InventoryBody.appendChild(equipItem);
    let bottomMinus = 185; 
    for (key in playerStats) {
     
      let stat = document.createElement("p");
       stat.classList.add("Text");
       stat.id = key;
       stat.style.position = "absolute";
       stat.style.left = "1015px";
       stat.style.top = canvasBody.bottom - bottomMinus + "px";
       stat.style.color = "white";
       if(key === "Health" ){
       stat.innerText =  key + ": " +playerStats[key] + "/" + player.maxHealth;
       bottomMinus -= 40;
       } else if (key !== "MaxHealth") {
        stat.innerText = key + ": " + playerStats[key];
        bottomMinus -= 40;
       }
      InventoryBody.appendChild(stat);
  
    }

  inventoryCount = 1

  let useItemBtn = document.getElementById("useItem");


    useItemBtn.addEventListener("click", () => {



      for (let i = 0; i < Inventory.length; i++) {
        if (displayImg.ItemName == Inventory[i].ItemName) {
          
          if(Inventory[i].itemType === "heal"){
            Inventory[i].healPlayer();
            document.querySelector('#Health').innerText = "Health: " + player.health + "/" + player.maxHealth;
            if (Inventory[i].useItem) {
              
               for (var key in item) {
                 if (item[key] === Inventory[i].ItemName) {
                   delete item[key];
                 }
               }

               
               Inventory.splice(i, 1);
               displayIventoryItem = false;
               Inventory = rePositionInventory(Inventory);
               item = reorganizeItems(item,Inventory);
               YpositionEven= reorganizeYpositions(YpositionEven,YpositionOdd,Inventory)[0]
               YpositionOdd= reorganizeYpositions(YpositionEven,YpositionOdd,Inventory)[1]

               
               }
                
          }
          
        }
      }
      

    });
    
    let equipItemBtn = document.getElementById("Equip");
    
    equipItemBtn.addEventListener("click", () => {
      
      for (let i = 0; i < Inventory.length; i++) {
        if (displayImg.ItemName == Inventory[i].ItemName && (Inventory[i].itemType === "weapon" || Inventory[i].itemType === "armor")) {
          

          Inventory[i].equipItem(player);
          if(Inventory[i].itemType === "weapon"){
            document.querySelector('#Attack').innerText = "Attack: " + player.attack;
          }else{
            document.querySelector('#Defense').innerText = "Defense: " + player.defense;
          }
         checkIfOtherItemIsEquipped(Inventory[i])
        }
      }
    });
  
 

} 

};

const addItemToInventory = (itemName) => {

  if (Inventory.length === 0) {
    Inventory.push(
      new Item(
        {
          x: firtsMargin,
          y: topMargin,
        },
        `./img/${itemName}.png`,
        1,
        20,
        false,
        false,
        itemName,
        
      )
    );

    markers.push(
      new Sprite({
        position: {
          x: firtsMargin,
          y: topMargin,
        },
        imageSrc: "./img/equippedMarker.png",
        frameRate: 1,
        frameBuffer: 20,
        loop: false,
        autoplay: false,
      })
    );
    
    YpositionOdd += itemBox.height + bottomMargin;
  } else if ((Inventory.length + 1) % 2 === 0) {
    
    Inventory.push(
      new Item(
        {
          x: itemBox.width + secondMargin + firtsMargin,
          y: YpositionEven,
        },
        `./img/${itemName}.png`,
        1,
        20,
        false,
        false,
        itemName,
        
      ) );
      markers.push(
        new Sprite({
          position: {
            x: itemBox.width + secondMargin + firtsMargin,
            y: YpositionEven,
          },
          imageSrc: "./img/equippedMarker.png",
          frameRate: 1,
          frameBuffer: 20,
          loop: false,
          autoplay: false,
        })
      )
    

    YpositionEven += itemBox.height + bottomMargin;
  } else if ((Inventory.length + 1) % 2 !== 0) {
    Inventory.push(
      new Item(
        {
          x: firtsMargin,
          y: YpositionOdd,
        },
        `./img/${itemName}.png`,
        1,
        20,
        false,
        false,
        itemName,
        
      )
    );

    markers.push(
      new Sprite({
        position: {
          x: firtsMargin,
          y: YpositionOdd,
        },
        imageSrc: "./img/equippedMarker.png",
        frameRate: 1,
        frameBuffer: 20,
        loop: false,
        autoplay: false,
      })
    )
    YpositionOdd += itemBox.height + bottomMargin;
  }

  checkAllItems(Inventory);
  
};

const addItem = function (itemName) {
  let count = 0;
  for (var key in item) {
    if (item.hasOwnProperty(key)) {
      count++;
    }
  }

  item[count + 1] = itemName;
};


const checkAllItems = (inventory) => {

  for(let i = 0; i < allItems.length; i++){
   
    for(let j = 0; j < inventory.length; j++){
     if(allItems[i].name === inventory[j].ItemName){
      
      inventory[j].itemType = allItems[i].type;
      if(allItems[i].type === "heal"){
        inventory[j].heal = allItems[i].heal;
      }
      if(allItems[i].type === "weapon"){
        inventory[j].damage = allItems[i].damage;
      }
      if(allItems[i].type === "armor"){
        inventory[j].defense = allItems[i].defense;
      }
       
      inventory[j].description = allItems[i].description
     }
   }
  }

}

const enemyDropItem = (itemName) => {
  
  addItem(itemName);
  addItemToInventory(itemName);
};

const checkIfOtherItemIsEquipped = (inventoryItem) => {
  for (let i = 0; i < Inventory.length; i++) {
    if (Inventory[i].equipped && Inventory[i].ItemName !== inventoryItem.ItemName && Inventory[i].itemType === inventoryItem.itemType) {
      Inventory[i].equipped = false;
     
      
    }
  }
}

const removeFromItem = (itemdict,inventory) => {

  for (let i = 0; i < inventory.length; i++) {
    
  }
}


const rePositionInventory = (inventory) => {

  const newInventory = [];
  markers = [];
  

  let firtsMargin = 50;
let secondMargin = 20;
let topMargin = 30;
let bottomMargin = 10;
let itemBox = {
  width: 460,
  height: 440,
};
let YpositionEven = topMargin;
let YpositionOdd = topMargin;

for(let i = 0; i < inventory.length; i++){
  
  if (i === 0) {
    console.log(firtsMargin,topMargin)
    newInventory.push(
      new Item(
        {
          x: firtsMargin,
          y: topMargin,
        },
        `./img/${inventory[i].ItemName}.png`,
        1,
        20,
        false,
        false,
        inventory[i].ItemName,
        
      )
    );
    
    markers.push(
      new Sprite({
        position: {
          x: firtsMargin,
          y: topMargin,
        },
        imageSrc: "./img/equippedMarker.png",
        frameRate: 1,
        frameBuffer: 20,
        loop: false,
        autoplay: false,
      })
    );
    
    YpositionOdd += itemBox.height + bottomMargin;
  } else if ((i +1) % 2 === 0) {
    
    newInventory.push(
      new Item(
        {
          x: itemBox.width + secondMargin + firtsMargin,
          y: YpositionEven,
        },
        `./img/${inventory[i].ItemName}.png`,
        1,
        20,
        false,
        false,
        inventory[i].ItemName,
        
      ) );
      markers.push(
        new Sprite({
          position: {
            x: itemBox.width + secondMargin + firtsMargin,
            y: YpositionEven,
          },
          imageSrc: "./img/equippedMarker.png",
          frameRate: 1,
          frameBuffer: 20,
          loop: false,
          autoplay: false,
        })
      )
    

    YpositionEven += itemBox.height + bottomMargin;
  } else if ((i + 1) % 2 !== 0) {
    
    newInventory.push(
      new Item(
        {
          x: firtsMargin,
          y: YpositionOdd,
        },
        `./img/${inventory[i].ItemName}.png`,
        1,
        20,
        false,
        false,
        inventory[i].ItemName,
        
      )
    );

    markers.push(
      new Sprite({
        position: {
          x: firtsMargin,
          y: YpositionOdd,
        },
        imageSrc: "./img/equippedMarker.png",
        frameRate: 1,
        frameBuffer: 20,
        loop: false,
        autoplay: false,
      })
    )
    YpositionOdd += itemBox.height + bottomMargin;
  }
}
 
  checkAllItems(newInventory);

  for (let item in inventory) {
    if (inventory[item].equipped) {
      newInventory[item].equipped = true;
    }
  }
  return newInventory;
}


const reorganizeYpositions = (yEven,yOdd,inventory) => {
    
    if ((inventory.length + 1)   % 2 === 0) {
       yEven -= itemBox.height + bottomMargin;
       
    } else {
        yOdd -= itemBox.height + bottomMargin;
       
    }

    return [yEven,yOdd]
}

const reorganizeItems = (item,inventory) => {
  item = {}
  for (let i = 0; i < inventory.length; i++) {
    item[i] = inventory[i].ItemName;
  }
  return item;
}