const clickEventsInventory =(event) => {

    for (let i = 0; i < Inventory.length; i++) {
        if (
          event.x >= Inventory[i].position.x &&
          event.x <= Inventory[i].position.x + Inventory[i].width &&
          event.y >= Inventory[i].position.y &&
          event.y <= Inventory[i].position.y + Inventory[i].height
        ) {
           
          displayImg.image.src = Inventory[i].image.src;  
         displayImg.ItemName = Inventory[i].ItemName;
          displayIventoryItem=true
          drawInventoryCount = 0
        }
      }

}





