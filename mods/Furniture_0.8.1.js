/*Furniture Mod 0.8.1*/

var Fridge = [260, 282, 319, 320, 344, 354, 363, 364, 365, 366, 391, 392, 393, 400, 457, 459];
var Barrel = [341, 79, 79, 280, 280, 280];


function useItem(x, y, z, itemId, blockId, side)
{
if(itemId==470)
{
setTile(x, y + 1, z, 136)
setTile(x, y, z, 85)
}else if(blockId==136&&getTile(x, y + -1, z)==85)
{
minecart=Level.spawnMob(x + 0.5, y + 0.5, z + 0.4, 80);
Entity.setRenderType(minecart, 0)
rideAnimal(getPlayerEnt(), minecart);
}else if(itemId==471)
{
setTile(x, y + 1, z, 136)
setTile(x, y + 1, z + 1, 134)
setTile(x, y + 1, z + -1, 134)
}else if(blockId==136&&getTile(x, y, z + 1)==134&&getTile(x, y, z + -1)==134)
{
minecart=Level.spawnMob(x + 0.5, y + 0.5, z + 0.4, 80);
Entity.setRenderType(minecart, 0)
rideAnimal(getPlayerEnt(), minecart);
}else if(blockId==134&&getTile(x, y, z + 1)==136&&getTile(x, y, z + 2)==134)
{
minecart=Level.spawnMob(x + 0.5, y + 0.5, z + 0.4, 80);
Entity.setRenderType(minecart, 0)
rideAnimal(getPlayerEnt(), minecart);
}else if(blockId==134&&getTile(x, y, z + -1)==136&&getTile(x, y, z + -2)==134)
{
minecart=Level.spawnMob(x + 0.5, y + 0.5, z + 0.4, 80);
Entity.setRenderType(minecart, 0)
rideAnimal(getPlayerEnt(), minecart);
}else if(itemId==472)
{
setTile(x + 1, y + 1, z, 54)
setTile(x, y + 1, z, 255)
}else if(blockId==255&&getTile(x + 1, y, z)==54&&itemId==264)
{
setTile(x, y, z, 57)
}else if(blockId==54&&getTile(x + -1, y, z)==57&&itemId==351)
{
addItemInventory(itemId = 264, 1);
addItemInventory(itemId = 351, -1);
setTile(x + -1, y, z, 255)
}else if(blockId==255&&getTile(x + 1, y, z)==54&&itemId==266)
{
setTile(x, y, z, 41)
}else if(blockId==54&&getTile(x + -1, y, z)==41&&itemId==351)
{
addItemInventory(itemId = 266, 1);
addItemInventory(itemId = 351, -1);
setTile(x + -1, y, z, 255)
}else if(blockId==255&&getTile(x + 1, y, z)==54&&itemId==265)
{
setTile(x, y, z, 42)
}else if(blockId==54&&getTile(x + -1, y, z)==42&&itemId==351)
{
addItemInventory(itemId = 265, 1);
addItemInventory(itemId = 351, -1);
setTile(x + -1, y, z, 255)
}else if(blockId==255&&getTile(x + 1, y, z)==54&&itemId==263)
{
setTile(x, y, z, 173)
}else if(blockId==54&&getTile(x + -1, y, z)==173&&itemId==351)
{
addItemInventory(itemId = 263, 1);
addItemInventory(itemId = 351, -1);
setTile(x + -1, y, z, 255)
}else if(blockId==255&&getTile(x + 1, y, z)==54&&itemId==331)
{
setTile(x, y, z, 35, 14)
}else if(blockId==54&&getTile(x + -1, y, z)==35&&itemId==351)
{
addItemInventory(itemId = 331, 1);
addItemInventory(itemId = 351, -1);
setTile(x + -1, y, z, 255)
}else if(itemId==474)
{
setTile(x + 1, y + 1, z, 71)
setTile(x, y + 1, z, 42)
setTile(x, y + 2, z, 42)
}else if(blockId==71&&getTile(x + -1, y + 1, z)==42&&getTile(x + -1, y, z)==42)
{
var rnd = Math.floor(Math.random()*(Fridge.length));
addItemInventory(itemId = Fridge[rnd], 1);
}else if(itemId==475)
{
setTile(x, y + 1, z, 62)
setTile(x, y + 2, z, 171)
}else if(blockId==171&&getTile(x, y + -1, z)==62&&itemId==319)
{
addItemInventory(itemId = 320, 1)
addItemInventory(itemId = 319, -1)
}else if(blockId==171&&getTile(x, y + -1, z)==62&&itemId==363)
{
addItemInventory(itemId = 364, 1)
addItemInventory(itemId = 363, -1)
}else if(blockId==171&&getTile(x, y + -1, z)==62&&itemId==365)
{
addItemInventory(itemId = 366, 1)
addItemInventory(itemId = 365, -1)
}else if(blockId==171&&getTile(x, y + -1, z)==62&&itemId==392)
{
addItemInventory(itemId = 393, 1)
addItemInventory(itemId = 392, -1)
}else if(itemId==477)
{
setTile(x, y + 1, z, 85)
setTile(x, y + 2, z, 246)
}else if(blockId==246&&getTile(x, y + -1, z)==85)
{
setTile(x, y, z, 89)
}else if(blockId==89&&getTile(x, y + -1, z)==85)
{
setTile(x, y, z, 246)
}else if(itemId==478)
{
setTile(x, y + 1, z, 42)
setTile(x, y + 2, z, 171, 12)
setTile(x + 1, y + 1, z, 96)
setTile(x + -1, y + 1, z, 96)
setTile(x, y + 1, z + 1, 96)
setTile(x, y + 1, z + -1, 96)
}else if(blockId==171&&getTile(x, y + -1, z)==42&&getTile(x + 1, y + -1, z)==96&&getTile(x + -1, y + -1, z)==96&&getTile(x, y + -1, z + 1)==96&&getTile(x, y + -1, z + -1)==96&&itemId==325)
{
addItemInventory(itemId = 325, 1, 9)
addItemInventory(itemId = 325, -1)
var rnd = Math.floor(Math.random()*(Barrel.length));
addItemInventory(itemId = Barrel[rnd], 1)
}else if(itemId==479)
{
setTile(x, y + 1, z, 85)
setTile(x, y + 2, z, 171, 8)
}else if(blockId==171&&getTile(x, y + -1, z)==85)
{
clientMessage(ChatColor.BLUE + "Only for decoration")
}else if(blockId==85&&getTile(x, y + 1, z)==171)
{
clientMessage(ChatColor.BLUE + "Only for decoration")
}else if(itemId==481)
{
setTile(x, y + 1, z, 53)
setTile(x + -1, y + 1, z, 53)
setTile(x, y + 2, z, 53)
setTile(x + -1, y + 2, z, 53)
setTile(x, y + 3, z, 158)
setTile(x + -1, y + 3, z, 158)
setTile(x, y, z, 5)
setTile(x + -1, y, z, 5)
setTile(x, y + 1, z + 1, 64)
setTile(x + -1, y + 1, z + 1, 64)
}else if(blockId==53&&getTile(x, y + -1, z)==53&&itemId==264)
{
Player.setArmorSlot(0, 310, 0)
Player.setArmorSlot(1, 311, 0)
Player.setArmorSlot(2, 312, 0)
Player.setArmorSlot(3, 313, 0)
}else if(blockId==53&&getTile(x, y + -1, z)==53&&itemId==265)
{
Player.setArmorSlot(0, 306, 0)
Player.setArmorSlot(1, 307, 0)
Player.setArmorSlot(2, 308, 0)
Player.setArmorSlot(3, 309, 0)
}else if(blockId==53&&getTile(x, y + -1, z)==53&&itemId==266)
{
Player.setArmorSlot(0, 314, 0)
Player.setArmorSlot(1, 315, 0)
Player.setArmorSlot(2, 316, 0)
Player.setArmorSlot(3, 317, 0)
}else if(blockId==53&&getTile(x, y + -1, z)==53&&itemId==334)
{
Player.setArmorSlot(0, 298, 0)
Player.setArmorSlot(1, 299, 0)
Player.setArmorSlot(2, 300, 0)
Player.setArmorSlot(3, 301, 0)
} else if(blockId==53&&getTile(x, y + -1, z)==53&&itemId==0)
{
Player.setArmorSlot(0, 0, 1)
Player.setArmorSlot(1, 0, 1)
Player.setArmorSlot(2, 0, 1)
Player.setArmorSlot(3, 0, 1)
}else if(itemId==483)
{
setTile(x, y + 1, z, 47)
setTile(x + -1, y + 1, z, 47)
setTile(x + -2, y + 1, z, 47)
setTile(x + -3, y + 1, z, 47)
setTile(x, y + 3, z, 47)
setTile(x + -1, y + 3, z, 47)
setTile(x + -2, y + 3, z, 47)
setTile(x + -3, y + 3, z, 47)
setTile(x, y + 2, z, 173)
setTile(x + -1, y + 2, z, 20)
setTile(x + -2, y + 2, z, 20)
setTile(x + -3, y + 2, z, 173)
setTile(x + -1, y + 1, z + 1, 68)
setTile(x + -1, y + 2, z + -1, 173)
setTile(x + -2, y + 2, z + -1, 173)
}else if(blockId==47&&getTile(x + -1, y, z)==47&&getTile(x + 1, y, z)==47&&getTile(x + 2, y, z)==47&&itemId==0)
{
setTile(x, y, z + 1, 20)
}else if(blockId==47&&getTile(x + 1, y, z)==47&&getTile(x + -1, y, z)==47&&getTile(x + -2, y, z)==47&&getTile(x, y, z + 1)==68&&itemId==0)
{
setTile(x, y + 1, z + -1, 35, 3)
setTile(x + -1, y + 1, z + -1, 35, 3)
setTile(x + -1, y + -1, z, 1)
var stve = Level.spawnMob(x + -0.5, y, z + -0.5, 11, "mob/char.png");
pig = Level.spawnMob(x + -0.5, y, z + 0.5, 80)
Entity.setRenderType(stve, 3);
steve = 1;
rideAnimal(stve, pig)
clientMessage("<Reporter>In today news: Someone kill Steve; Has Herobrine really been return?; New update comming");
clientMessage(ChatColor.RED + "Type '/next1' to see 1st news");
clientMessage(ChatColor.RED + "Type '/next2' to see 2nd news");
clientMessage(ChatColor.RED + "Type '/next3' to see 3th news");
}else if(blockId==47&&getTile(x + -1, y, z)==47&&getTile(x + -2, y, z)==47&&getTile(x + -3, y, z)==47&&itemId==0)
{
setTile(x + -1, y + 1, z + -1, 173)
setTile(x + -2, y + 1, z + -1, 173)
setTile(x + -2, y + -1, z, 0)
}

}

function attackHook(attacker, victim)
{

}

function modTick()
{
Item.addCraftRecipe(351, 1, 4, [341, 4, 0, 353, 1, 0])
Item.addCraftRecipe(80, 18, 0, [79, 1, 0])
Item.addCraftRecipe(79, 1, 0, [80, 9, 0])
Item.addFurnaceRecipe(264, 255)
Item.addCraftRecipe(351, 3, 0, [351, 1, 1, 351, 1, 4, 351, 1, 11])
ModPE.setItem(470, "minecart_normal", 0, "Chair");
Item.addCraftRecipe(470, 1, 0, [53, 1, 0, 323, 2, 0]);
ModPE.setItem(471, "minecart_hopper", 0, "Sofa");
Item.addCraftRecipe(471, 1, 0, [470, 3, 0, 351, 1, 3]);
ModPE.setItem(472, "minecart_chest", 0, "Printer");
Item.addCraftRecipe(472, 1, 0, [54, 1, 0, 351, 1, 0, 255, 1, 0, 265, 5, 0, 339, 1, 0])
ModPE.setItem(473, "empty_armor_slot_chestplate", 0, "Cooling rib")
Item.addCraftRecipe(473, 1, 0, [265, 8, 0, 79, 1, 0])
ModPE.setItem(474, "door_iron", 0, "Fridge")
Item.addCraftRecipe(474, 1, 0, [265, 4, 0, 325, 1, 0, 473, 1, 0, 266, 2, 0, 331, 1, 0])
ModPE.setItem(475, "painting", 0, "Cooker")
Item.addCraftRecipe(475, 1, 0, [42, 4, 0, 173, 3, 0, 318, 1, 0, 61, 1, 0])
ModPE.setItem(476, "experience_bottle", 0, "Bulb")
Item.addCraftRecipe(476, 1, 0, [49, 1, 0, 331, 3, 0, 265, 1, 0, 266, 1, 0])
ModPE.setItem(477, "fireball", 0, "Light")
Item.addCraftRecipe(477, 1, 0, [476, 1, 0, 20, 4, 0, 102, 4, 0])
ModPE.setItem(478, "boat", 0, "Barrel")
Item.addCraftRecipe(478, 1, 0, [325, 1, 0, 5, 4, 0, 265, 4, 0])
ModPE.setItem(479, "hopper", 0, "Table")
Item.addCraftRecipe(479, 1, 0, [280, 4, 0, 44, 3, 0])
ModPE.setItem(480, "book_normal", 0, "Shelf")
Item.addCraftRecipe(480, 1, 0, [280, 4, 0, 53, 3, 0])
ModPE.setItem(481, "book_written", 0, "Wardrobe")
Item.addCraftRecipe(481, 1, 0, [480, 3, 0, 158, 6, 0])
ModPE.setItem(482, "ender_eye", 0, "TV Lights");
Item.addCraftRecipe(482, 1, 0, [255, 4, 0, 331, 2, 0, 351, 1, 1, 351, 1, 4, 351, 1, 2])
ModPE.setItem(483, "item_frame", 0, "TV");
Item.addCraftRecipe(483, 1, 0, [482, 4, 0, 20, 1, 0, 265, 2, 0, 47, 2, 0])

}

function procCmd(command)
{
var cmd = command.split(" ");
if(cmd[0] == "next1")
{
clientMessage("<Reporter>Steve has been killed by someone. The police searching for him or her along the world. Police can be come to your home too.");
}
if(cmd[0] == "next2")
{
clientMessage("<Reporter>Some people told that Herobrine has been return. We asked Notch if Herobrine really been return, but he told that he doesn't What is reall that he has return? We don't know, but you can assure if he has.");
}
if(cmd[0] == "next3")
{
clientMessage("<Reporter>Who hardly waiting to new version Minecraft PE 0.9.0? Who want to know what will be new in Minecraft PE? We can tell you what will be new! New will be lot of stuffs that are in computer version!");
}

}

function newLevel()
{
clientMessage("<FunnyCinema>Hi, I'm back with new Script Mod called Furniture Mod 0.8.1! With this mod you get lot's of Furniture in the Minecraft game. For example: Fridge, Chair, Sofa, TV, Light, Printer and more. All Furniture you can Craft on Crafting Table. To get '.Name<' block, you must smelt Diamond. Ice block is Craftable too! I hope you enjoy this mod and have fun")
}

function leaveGame()
{

}

