/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/



/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class GameObject{
    constructor(gameAttr){
    this.createdAt = gameAttr.createdAt;
    this.dimensions = gameAttr.dimensions;
  }
  destroy(){
    return "Object was removed from the Game"
  };
}

  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  class CharacterStats extends GameObject{
    constructor(charAttr){
        super(charAttr); 
        this.healthPoints = charAttr.healthPoints;
        this.name = charAttr.name;
    }
    takeDamage(){
    return `${this.name} took damage`
    };
}
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  class Humanoid extends CharacterStats{
    constructor(humanAttr){
        super(humanAttr);
        this.team = humanAttr.team;
        this.weapons = humanAttr.weapons;
        this.language = humanAttr.language;
        
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`
    };
    kill(){
        return `${this.name} was removed from the Game`
    };
    attack(victim, attacker){
    victim.healthPoints = victim.healthPoints - attacker.damage;
        if (victim.healthPoints > 0)
            return victim.healthPoints;
        else
            return victim.kill();
    }
    train(trainee){
    return trainee.damage *= 2;
    };
  }   
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  class Hero extends Humanoid{
    constructor(heroAttr){
        super(heroAttr);
        this.damage = heroAttr.damage;
        
  } 
}  
class Villian extends Humanoid{
    constructor(VillianAttr){
        super(VillianAttr);
        this.damage = VillianAttr.damage;
        
  } 
}  
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({                                                            
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const  God = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 7,
        width: 7,
        height: 7,
      },
      healthPoints: 77700,
      name: 'YHWH',
      team: 'Trinity',
      weapons: [
        'words',
      ],
      language: 'All',
      damage: 1000,
    });
  
    const Demon = new Villian({
      createdAt: new Date(),
      dimensions: {
        length: 4,
        width: 4,
        height: 10,
      },
      healthPoints: 26000,
      name: 'Satan',
      team: 'The Ten Commandments',
      weapons: [
        'Spear',
      ],
      language: 'All',
      damage: 1000,
    });
    
    
    
    console.log(God.attack(Demon, God));
    console.log(God.train(God));
    console.log(Demon.train(Demon));
    console.log(Demon.attack(God, Demon));
    console.log(Demon.train(Demon));
    console.log(God.train(God));
    console.log(God.train(God));
    console.log(God.attack(Demon, God));
    console.log(God.attack(Demon, God));
    console.log(Demon.attack(God, Demon));
    console.log(Demon.attack(God, Demon));
    console.log(God.attack(Demon, God));
    console.log(God.attack(Demon, God));
  
    
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  