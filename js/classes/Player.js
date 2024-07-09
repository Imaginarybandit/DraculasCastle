class Player {
    constructor({
        maxHealth = 25,
        health = 25,
        baseAttack = 10,
        attack = 10,
        baseDefense = 0,
        defense = 0,
        weapon = null,
        armor = null,
        item = null

    }) {
        this.maxHealth = maxHealth;
        this.health = health;
        this.baseAttack = baseAttack;
        this.attack = attack;
        this.baseDefense = baseDefense;
        this.defense = defense;
        this.weapon = weapon;
        this.armor = armor;
        this.item = item;
    }
   
}

let player = new Player({
    
});

