
// Aqui te quedastes 
const eventListenerClickFunctions = (event,object,animation) => {
    if (
        event.x >= object.position.x &&
        event.x <= object.position.x + object.width &&
        event.y >= object.position.y &&
        event.y <= object.position.y + object.height
      ) {
       
          object.switchSprite(animation);
          object.play();
         object.clicked= true
        
      }
}

const ClickFunctionsItemsTriggerEnemies = (event,object,object2,item,enemyDefeated = null,textboxText,searched,itemName,roomClickCount) => {

    if (
        event.x >= object.position.x &&
        event.x <= object.position.x + object.width &&
        event.y >= object.position.y &&
        event.y <= object.position.y + object.height &&
        item.found == false
      ) {
        if (!enemyDefeated ){
          object2.switchSprite("change");
        object2.play();
        } else{
        
        var rect = canvas.getBoundingClientRect();
        div = document.createElement("div");
        div.style.position = "absolute";
        div.style.width = rect.width - 60 + "px";
        div.style.height = 500 - 60 + "px";
        div.style.left = rect.left + "px";
        div.style.top = rect.bottom - 500 + "px";
        div.classList.add("TextBox");
        par = document.createElement("p");
        par.classList.add("Text");
        par.innerHTML =
        textboxText
    
        body = document.querySelector("body");
        div.appendChild(par);
        body.appendChild(div);
        
        item.found = true;

        if (!object.searched) {
          addItem(itemName);
          addItemToInventory(itemName);
          object.searched = true;
        }
      }
    
    }

}

const foundItemScreen = (event,object,item,text,itemName) => {
  if (
    event.x >= object.position.x &&
    event.x <= object.position.x + object.width &&
    event.y >= object.position.y &&
    event.y <= object.position.y + object.height &&
    item.found == false
  ) {
    var rect = canvas.getBoundingClientRect();
    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = rect.width - 60 + "px";
    div.style.height = 500 - 60 + "px";
    div.style.left = rect.left + "px";
    div.style.top = rect.bottom - 500 + "px";
    div.classList.add("TextBox");
    par = document.createElement("p");
    par.classList.add("Text");
    par.innerHTML =
      text;

    body = document.querySelector("body");
    div.appendChild(par);
    body.appendChild(div);
    item.found = true;

    if (!object.searched) {
      addItem(itemName);
      addItemToInventory(itemName);
      object.searched = true;
    }
  }

}


const removeFoundItemScreen =(event,itemScreen) =>{
  if (
    event.x >= itemScreen.position.x &&
    event.x <= itemScreen.position.x + itemScreen.width &&
    event.y >= itemScreen.position.y &&
    event.y <= itemScreen.position.y + itemScreen.height &&
    itemScreen.found == true
  ) {
    
    itemScreen.clickCount ++;
     if (itemScreen.clickCount > 1) {
      
      div.removeChild(par);
      body.removeChild(div);
      itemScreen.found = false;
    }
   
  }

}

const removeFoundItemScreenDropItem = (event,itemScreen,itemName) => {
  if (
    event.x >= itemScreen.position.x &&
    event.x <= itemScreen.position.x + itemScreen.width &&
    event.y >= itemScreen.position.y &&
    event.y <= itemScreen.position.y + itemScreen.height &&
    itemScreen.found == true
  ) {
    itemScreen.clickCount ++;
    
    if (itemScreen.clickCount == 1) {
      enemyDropItem(itemName)
      itemScreen.found = false;
      
      if (document.querySelector("#TextBox") != null) {
        document.querySelector("#TextBox").remove();
      }
    }
  }
}

const mousemoveEvents = (event,object) => {
  if (
    event.x >= object.position.x &&
    event.x <= object.position.x + object.width &&
    event.y >= object.position.y &&
    event.y <= object.position.y + object.height &&
    object.clicked == false
  ) {
    object.switchSprite("hover");
    
  } else if(object.clicked==false) {
    object.switchSprite("default");
  }
}

const chestOpeningItem = (object,item,itemName,text) => {

  var rect = canvas.getBoundingClientRect();
  div = document.createElement("div");
  div.style.position = "absolute";
  div.style.width = rect.width - 60 + "px";
  div.style.height = 500 - 60 + "px";
  div.style.left = rect.left + "px";
  div.style.top = rect.bottom - 500 + "px";
  div.classList.add("TextBox");
  par = document.createElement("p");
  par.classList.add("Text");
  par.innerHTML =
    text;

  body = document.querySelector("body");
  div.appendChild(par);
  body.appendChild(div);
  item.found = true;

  if (!object.searched) {
    addItem(itemName);
    addItemToInventory(itemName);
    object.searched = true;
  }
}

const checkForKey = (event,object,inventory,itemName,animation,item,useitembox,itemboxtext) => {

  if (
    event.x >= object.position.x &&
    event.x <= object.position.x + object.width &&
    event.y >= object.position.y &&
    event.y <= object.position.y + object.height 

  ) {
    keyfound = false;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].ItemName === itemName){
        keyfound = true;
        
        for (var key in item) {
          if (item[key] === inventory[i].ItemName) {
            delete item[key];
          }
        }
          inventory.splice(i, 1);
          markers.splice(i, 1);
          displayIventoryItem = false;         
          YpositionEven= reorganizeYpositions(YpositionEven,YpositionOdd,inventory)[0]
          YpositionOdd= reorganizeYpositions(YpositionEven,YpositionOdd,inventory)[1]
        useObjectBoxShow(useitembox,itemboxtext)
        return true
        break

      } 
    }
    if (!keyfound) {
      
      useObjectBoxShow(useitembox,"You need a key to open this chest")
      
    }
    return false
  }
}

const useObjectBoxShow =(object,text) =>{
  
 object.found = true;
 var rect = canvas.getBoundingClientRect();
  div = document.createElement("div");
  div.id = "useItembox"
  div.style.position = "absolute";
  div.style.width = 540 + "px";
  div.style.height = 310 + "px";
  div.style.left = 486.22 + 10+ "px";
  div.style.top = 574.12 + 10 + "px";
  div.style.margin = 0 + "px";
  div.classList.add("useItemBox");
  par = document.createElement("p");
  par.classList.add("Text");
  par.style.margin= 0 + "px"; 
  par.innerHTML =
    text;

  body = document.querySelector("body");
  div.appendChild(par);
  body.appendChild(div);
}

const removeUseObjectBox = (event,object,object2 = null) => {
  if (
    event.x >= object.position.x &&
    event.x <= object.position.x + object.width &&
    event.y >= object.position.y &&
    event.y <= object.position.y + object.height &&
    object.found == true
  ) {
    
    object.clickCount ++;
    document.querySelector("#useItembox").remove();
   
     if (object.clickCount  > 0) {
      object.found = false;
     }

    object2 != null ? object2.disabled = false : null;

  }

}
