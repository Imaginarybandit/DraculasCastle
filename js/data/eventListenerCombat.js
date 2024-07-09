let bodyPartsDict = {
  head: "Head",
  chest: "Chest",
  feet: "Arms",
  legs: "Legs",
}; 

let missed = false;

let stunTurn = 0
let attReduce = 0;


let attackBoxChange = (enemy,player,missed = false) => {
  if(!missed) {
 
  let combatText = document.querySelectorAll(".combatText");
  for (let i = 0; i < combatText.length; i++) {
    combatText[i].remove();
  }
  }

  let par = document.createElement("p");
  par.classList.add("combatText");
  let nextCursor = document.createElement("div");
  nextCursor.classList.add("nextCursor");

   if (!enemy.stunned){
 
  par.innerHTML = "You took " + enemy.attack + " damage!";

  } else {
    
    par.innerHTML = "The enemy is stunned!";

    if (stunTurn == 0) {
      stunTurn  ++;
    }

    enemy.stunned = false;
  }
  
  div.appendChild(par);
  div.appendChild(nextCursor);
  let wrect = document.querySelector(".nextCursor");
 
  wrect.addEventListener("click", () => {
      par.remove();
      nextCursor.remove();
     wrect.remove();
     clickBodyPart(enemy,player);
   });
  
   missed = false;
  
}

let missedAttack = (enemy,player,missed) => {
  let combatText = document.querySelectorAll(".combatText");
  for (let i = 0; i < combatText.length; i++) {
    combatText[i].remove();
  }
  let par = document.createElement("p");
  par.classList.add("combatText");
  par.innerHTML = "You missed!";
  let rectangle = document.createElement("div");
  rectangle.classList.add("nextCursor");
  div.appendChild(par);
  div.appendChild(rectangle);
  let wrect = document.querySelector(".nextCursor");
  wrect.addEventListener("click", () => {
    par.remove();
    rectangle.remove();
    wrect.remove();
    enemyTurn(enemy,player,missed);
  });

}


let enemyDamaged = (enemy,player) => {
  enemy.switchSprite("damage");
  enemy.play();
  
} 

let enemyTurn = (enemy,player) => {
  if (enemy.stunned) {
    attackBoxChange(enemy,player);
      
  } else  if( enemy.health > 0){
    
    enemy.switchSprite("attack");
    enemy.play();
    damage = enemy.attack < player.defense ? 0 : enemy.attack - player.defense;
    player.health = player.health - damage;
   
    
 redScreen = false;
  }
}


let clickBodyPart = (enemy,player) => {

  if (document.querySelector(".TextBox")) {
    let textBox = document.querySelector(".TextBox");
    textBox.remove();
  }

let rect = canvas.getBoundingClientRect();
   // Aqui se crea el div que contiene los botones de las partes del cuerpo
    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = rect.width - 60 + "px";
    div.style.height = 500 - 60 + "px";
    div.style.left = rect.left + "px";
    div.style.top = rect.bottom - 500 + "px";
    div.classList.add("TextBox");
    div.classList.add("default-cursor");
    
   for (let key in bodyPartsDict) {
    let par = document.createElement("p");
    par.classList.add("combatText");
    par.innerHTML = bodyPartsDict[key];
    div.appendChild(par);
    
    count = 1
  }
  // Aqui se crea el div que contiene la vida del jugador
  let playerHealth = document.createElement("div");
  playerHealth.id = "playerHealth";
  playerHealth.classList.add("combatText");
  playerHealth.innerHTML = "Health: " + player.health + " / " + player.maxHealth;
  div.appendChild(playerHealth);
  body = document.querySelector("body");
  
  body.appendChild(div);
  
  
  
let bodyPartsText = document.querySelectorAll(".combatText");

for (let i = 0; i < bodyPartsText.length; i++) {
  bodyPartsText[i].addEventListener("click", (e) => {
    let random = Math.floor(Math.random() * 100);
    let bodyPart = bodyPartsText[i].innerText;
    if (bodyPart == "Head") {
      resetAttack(enemy);
      stunTurn = resetStun(stunTurn);
      if (random > 80) {
        missed = false;
        enemy.health = enemy.health - (player.attack * 2);
       
        enemyDamaged(enemy,player);
        makeUnclickable(bodyPartsText);
        setTimeout(() => {
          enemyTurn(enemy,player);
        }, 750);

        if(enemyDefeated(enemy)){
          enemy.switchSprite("vanish");
          enemy.play();
        }
      } else {
        missed = true;
        missedAttack(enemy,player,missed);
      }
    }
    if (bodyPart == "Chest") {
      resetAttack(enemy);
      stunTurn = resetStun(stunTurn);
        missed = false;
        enemy.health = enemy.health - player.attack;  
      
        makeUnclickable(bodyPartsText);
        enemyDamaged(enemy,player);
        setTimeout(() => {
          enemyTurn(enemy,player);
        }, 750);

        if(enemyDefeated(enemy)){
          enemy.switchSprite("vanish");
          enemy.play();
        }
        
    }
    if (bodyPart == "Legs") {
      resetAttack(enemy);
      if (random > 20) {
        missed = false;
        enemy.health = enemy.health - (player.attack * 0.3); 
        makeUnclickable(bodyPartsText);
        enemyDamaged(enemy,player);  
        
         stunTurn === 0? enemy.stunned = true : enemy.stunned = false;
         stunTurn = resetStun(stunTurn);
        setTimeout(() => {
          enemyTurn(enemy,player);
        }, 750);

        if(enemyDefeated(enemy)){
          enemy.switchSprite("vanish");
          enemy.play();
        }
      } else {
        missed = true;
        missedAttack(enemy,player,missed);
      }
    }
    if (bodyPart == "Arms") {
      stunTurn = resetStun(stunTurn);
      if (random > 30) {
        missed = false;
        enemy.health = enemy.health - (player.attack * 0.5);

        if(enemy.attack < enemy.baseAttack){
          resetAttack(enemy);
        }else{
        enemy.weapon !== null ? enemy.attack = Math.floor(enemy.attack - enemy.attack * 0.4) : Math.floor(enemy.attack = enemy.attack - enemy.attack * 0.2);
        }

        makeUnclickable(bodyPartsText);
        enemyDamaged(enemy,player);
        setTimeout(() => {
          enemyTurn(enemy,player);
        }, 750);

        if(enemyDefeated(enemy)){
          enemy.switchSprite("vanish");
          enemy.play();
        }

      } else {

        missed = true;
        resetAttack(enemy);
        missedAttack(enemy,player,missed);
      }
    }
  });
}


}


let makeUnclickable = (bodyparts) => {

  for (let i = 0; i < bodyparts.length; i++) {
    bodyparts[i].classList.add("click-disabled");
    
  }
}


let enemyDefeated = (enemy) => {
  if (enemy.health <= 0) {
    
    let textBox = document.querySelector(".TextBox");
    textBox.remove();
    return true;
  } 
  return false;
}

let gameOverScreen = (player) => {
if (player.health <= 0) {
  let textBox = document.querySelector(".TextBox");
  textBox.remove();
dead = true;
}
}


let resetStun = (stunturn) => {
  if(stunturn > 0){
    stunturn = 0;
  }
  return stunturn;
}

let resetAttack = (enemy) =>{
  enemy.attack = enemy.baseAttack;
}