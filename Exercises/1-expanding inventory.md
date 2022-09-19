The customer wants each potion to be represented not only by the name, but also by the price, and in the future it may have other characteristics. Therefore, now an array of objects with the following properties will be stored in the potions property

Refactor the methods of the atTheOldToad object so that they work not with an array of strings, but with an array of objects.

*getPotions() - method for getting all potions. Returns the value of the potions property.
*addPotion(newPotion) - adds a potion newPotion (already an object) to the array in the potions property, but only if such a potion is not already in the inventory.   
 Otherwise, a string is returned.
*removePotion(potionName) - removes the potion object with the name potionName from the array in the potions property.
*updatePotionName(oldName, newName) - updates the name property of the potion object with the name oldName to newName in the potions array.

1.The variable atTheOldToad is declared
2.The value of the variable atTheOldToad is an object
3.he value of the atTheOldToad.getPotions property is an object method
4.Calling the atTheOldToad.getPotions() method on the original object returns [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: 
  "Stone skin", price: 520 } ]
5.The value of the atTheOldToad.addPotion property is an object method.
6.For the original object, after calling the atTheOldToad.addPotion({ name: "Invisibility", price: 620 }) method in the potions array, the last element will be this 
  object
7.For the original object, after calling the atTheOldToad.addPotion({ name: "Power potion", price: 270 }) method in the potions array, the last element will be this 
  object
8.If the potion to be added already exists in the potions array, the addPotion method returns a string with the text from the source code
9.If the potion to be added already exists in the potions array, the addPotion method does not add the passed object to it
10.For the original object, after calling atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) the potions array is not changed
11.For the original object, after calling atTheOldToad.addPotion({ name: "Stone skin", price: 240 }) the potions array is not changed
12.For the original object, calling atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) returns the string "Error! Potion Dragon breath is already in your 
   inventory!"
13.For the original object, calling atTheOldToad.addPotion({ name: "Stone skin", price: 240 }) returns the string "Error! Potion Stone skin is already in your  
   inventory!"
14.The value of the atTheOldToad.removePotion property is an object method
15.For the original object, after calling the atTheOldToad.removePotion("Dragon breath") method the potions property will contain the array [ { name: "Speed potion",  
  price: 460 }, { name: "Stone skin", price: 520 } ]
16.For the original object, after calling the atTheOldToad.removePotion("Speed potion") method the potions property will contain the array [ { name: "Dragon breath",  
  price: 780 }, { name: "Stone skin", price: 520 }]
17.The value of the atTheOldToad.updatePotionName property is an object method
18.For the original object, after calling the atTheOldToad.updatePotionName("Dragon breath", "Polymorth") method the potions property will contain the array [{ name: 
  "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
19.For the original object, after calling the atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion") method the potions property will contain the array 
  [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]