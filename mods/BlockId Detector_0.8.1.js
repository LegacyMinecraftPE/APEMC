//BlockId Detector Mod by stefan craft

 var name={NAME:"name"}; 

ModPE.setItem(322,"blaze_rod",0,"BlockId Detector ");
function useItem(x,y,z,itemId,blockId,side){

if(itemId==322){

clientMessage(ChatColor.GREEN+"This Block Id is  " +ChatColor.RED+   blockId);
}
}
 function procCmd(cmd){
var cmd1 = cmd.split(" ");
if(cmd1[0]=="blockid"){
addItemInventory(322,1);
clientMessage(ChatColor.GREEN+"You have a BlockId Detector");
}
}
