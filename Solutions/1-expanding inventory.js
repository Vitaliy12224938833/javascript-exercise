const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const obj of this.potions) {
      if (obj.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      const { name } = this.potions[i];
      if (potionName === name) {
        this.potions.splice(i, 1);
        return
      }
    }
        return `Potion ${potionName} is not in inventory!`
    
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++) {
      const { name } = this.potions[i];
      if (oldName === name) {
        this.potions[i].name = newName;
      }
    }
  },
};
