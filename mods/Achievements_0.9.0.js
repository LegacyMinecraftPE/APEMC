//Mod made by DAW330073

var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var achievementPage=-1;
var achievementWindow=null;
var authorWindow=null;
var aWindow=null;
var display=new android.util.DisplayMetrics();
com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
var path="";
var savefile="";
var aLevel=0;
var tickCounter=0;
var achievementGet=null;
var acWindow=null;
var aTxd=null;

var AchievementSystem={
	0:{title:"Taking Inventory",desc:"Open your inventory.",id:0,req:-1,taken:false},
	1:{title:"Getting Wood",desc:"Attack a tree until a block of wood pops out.",id:17,req:0,taken:false},
	2:{title:"Benchmarking",desc:"Craft a workbench with four blocks of planks.",id:58,req:1,taken:false},
	3:{title:"Time to Mine!",desc:"Use planks and sticks to make a pickaxe.",id:270,req:2,taken:false},
	4:{title:"Hot Topic",desc:"Construct a furnace out of eight stone blocks.",id:61,req:3,taken:false},
	5:{title:"Acquire Hardware",desc:"Smelt an iron ingot.",id:265,req:4,taken:false},
	6:{title:"Time to Farm!",desc:"Use planks and sticks to make a hoe.",id:290,req:2,taken:false},
	7:{title:"Bake Bread",desc:"Turn wheat into bread.",id:297,req:6,taken:false},
	8:{title:"The Lie",desc:"Wheat, sugar, milk, and eggs.",id:354,req:6,taken:false},
	9:{title:"Getting an Upgrade",desc:"Construct a better pickaxe.",id:274,req:3,taken:false},
	10:{title:"Delicious Fish",desc:"Catch and cook a fish!",req:4,taken:false},
	11:{title:"On A Rail",desc:"Travel by minecart at least 1 km from where you started.",id:66,req:5,taken:false},
	12:{title:"Time to Strike!",desc:"Use planks and sticks to make a sword.",id:268,req:2,taken:false},
	13:{title:"Monster Hunter",desc:"Attack and destroy a monster.",req:12,taken:false},
	14:{title:"Cow Tipper",desc:"Harvest some leather.",id:334,req:13,taken:false},
	15:{title:"When Pigs Fly",desc:"Fly a pig off a cliff.",id:329,req:15,taken:false},
	16:{title:"Sniper Duel",desc:"Kill a skeleton with an arrow from more than 50 meters.",req:14,taken:false},
	17:{title:"DIAMONDS!",desc:"Acquire diamonds with your iron tools.",id:264,req:5,taken:false},
	18:{title:"We Need to Go Deeper",desc:"Build a portal to the Nether.",req:17,taken:false},
	19:{title:"Return to Sender",desc:"Destroy a Ghast with a fireball.",req:18,taken:false},
	20:{title:"Into Fire",desc:"Relieve a Blaze of its rod.",req:19,taken:false},
	21:{title:"Local Brewery",desc:"Brew a potion.",req:20,taken:false},
	22:{title:"The End?",desc:"Locate the End.",req:21,taken:false},
	23:{title:"The End.",desc:"Defeat the Ender Dragon.",req:23,taken:false},
	24:{title:"Enchanter",desc:"Use a book, obsidian and diamonds to construct an enchantment table.",req:18,taken:false},
	25:{title:"Overkill",desc:"Deal eight hearts of damage in a single hit.",req:24,taken:false},
	26:{title:"Librarian",desc:"Build some bookshelves to improve your enchantment table.",id:47,req:25,taken:false},
	27:{title:"Adventuring Time",desc:"Discover all biomes.",req:21,taken:false},
	28:{title:"The Beginning?",desc:"Spawn the Wither.",req:24,taken:false},
	29:{title:"The Beginning.",desc:"Kill the Wither.",req:28,taken:false},
	30:{title:"Beaconator",desc:"Create a full beacon.",req:29,taken:false},
	31:{title:"Repopulation",desc:"Breed two cows with wheat.",req:15,taken:false},
	32:{title:"Diamonds to you!",desc:"Throw diamonds at another player.",req:18,taken:false},
	};
var tex=new android.widget.TextView(activity);

function modTick(){
	tickCounter+=0.5;
	if(tickCounter==Math.round(tickCounter) && AchievementSystem[tickCounter].req<=aLevel && !AchievementSystem[tickCounter].taken){
		for(var j=0;j<9;j++){
			if(Player.getInventorySlot(j)==AchievementSystem[tickCounter].id){
				GetAchievement(tickCounter);
				break;
				}
			}
		}
	if(tickCounter==32)
		tickCounter=0;
	}

function attackHook(attacker,victim){
	if(AchievementSystem[13].req<=aLevel && !AchievementSystem[13].taken)
		GetAchievement(13);
	}

function GetAchievement(i){
	var txtt=AchievementSystem[i].title;
	AchievementSystem[i].taken=true;
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(acWindow){
					acWindow.dismiss();
					acWindow=null;
					}
				acWindow=new android.widget.PopupWindow();
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				achievementGet=new android.widget.Button(activity);
				if(aTxd)
					achievementGet.setBackgroundDrawable(aTxd);
				achievementGet.setText(android.text.Html.fromHtml("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color=\"#F3E850\">Achievement get!</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+txtt),android.widget.TextView.BufferType.SPANNABLE);
				//achievementGet.setScaleX(5);
				layout.addView(achievementGet);
				acWindow.setContentView(layout);
				acWindow.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				acWindow.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				acWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP,0,0);
				var show=new android.view.animation.TranslateAnimation(0,0,-display.heightPixels/10,0);
				var hide=new android.view.animation.TranslateAnimation(0,0,0,-display.heightPixels/8);
				achievementGet.startAnimation(show);
				show.setDuration(1000);
				achievementGet.postDelayed(new java.lang.Runnable({
					run:function(){
						hide.setFillAfter(true);
						achievementGet.startAnimation(hide);
						hide.setDuration(1000);
						}
					}),7000);
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	java.io.File(path).mkdirs();
	var newFile=new java.io.File(path,"achievements.txt");
	newFile.createNewFile();
	var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
	for(var j=0;j<33;j++){
		if(j>0)
			outWrite.append(",");
		if(AchievementSystem[j].taken)
			outWrite.append("1");
		else
			outWrite.append("0");
		}
	outWrite.close();
	aLevel=i;
	}

function newLevel(){
	path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldName()+"/";
	if(!java.io.File(path+"achievements.txt").exists()){
		java.io.File(path).mkdirs();
		var newFile=new java.io.File(path,"achievements.txt");
		newFile.createNewFile();
		var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
		for(var i=0;i<33;i++){
			if(i>0)
				outWrite.append(",");
			if(AchievementSystem[i].taken)
				outWrite.append("1");
			else
				outWrite.append("0");
			}
		outWrite.close();
		}
	savefile="";
	if(java.io.File(path+"achievements.txt").exists()){
		var file=new java.io.File(path+"achievements.txt");
		var fos=new java.io.FileInputStream(file);
		var str=new java.lang.StringBuilder();
		var ch;
		while((ch=fos.read())!=-1)
			str.append(java.lang.Character(ch));
		savefile=String(str.toString());
		for(var i=0;i<33;i++){
			if(savefile.split(",")[i]=="1"){
				AchievementSystem[i].taken=true;
				aLevel=i;
				}
			}
		fos.close();
		}
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				aWindow=new android.widget.PopupWindow();
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				var aButton=new android.widget.Button(activity);
				aButton.setText("A");
				aButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(achievementWindow)
							HideAchievementGUI();
						else
							ShowAchievementGUI();
						}
					}));
				layout.addView(aButton);
				aWindow.setWidth(Math.ceil(48*activity.getResources().getDisplayMetrics().density));
				aWindow.setHeight(Math.ceil(48*activity.getResources().getDisplayMetrics().density));
				aWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				aWindow.setContentView(layout);
				aWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,display.heightPixels/10);
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	if(!AchievementSystem[0].taken)
		GetAchievement(0);
	}
function leaveGame(){
	HideAchievementGUI();
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(aWindow!=null){
				aWindow.dismiss();
				aWindow=null;
				}
			if(acWindow){
				acWindow.dismiss();
				acWindow=null;
				}
			}
		}));
	for(var i=0;i<33;i++)
		AchievementSystem[i].taken=false;
	savefile="";
	}
function ShowAchievementGUI(){
	HideAchievementGUI();
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				achievementWindow=new android.widget.PopupWindow();
				authorWindow=new android.widget.PopupWindow();
				var authorlayout=new android.widget.LinearLayout(activity);
				authorlayout.setOrientation(android.widget.LinearLayout.VERTICAL);
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				var layout1=new android.widget.LinearLayout(activity);
				layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
				var layout2=new android.widget.LinearLayout(activity);
				layout2.setOrientation(android.widget.LinearLayout.VERTICAL);
				var scrollView=new android.widget.ScrollView(activity);
				var scrollView2=new android.widget.ScrollView(activity);
				var layout3=new android.widget.LinearLayout(activity);
				layout3.setOrientation(android.widget.LinearLayout.VERTICAL);
				authorButton=new android.widget.Button(activity);
				authorButton.setText("Official website");
				authorButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						try{
							activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://adf.ly/q403Z")));
							}
						catch(err){
							clientMessage(err);
							}
						}
					}));
				authorlayout.addView(authorButton);
				for(var i=0;i<33;i++)
					layout2.addView(AchButton(AchievementSystem[i].title,i));
				if(tex.getParent()!=null)
					tex.getParent().removeView(tex);
				tex.setText("Achievements Mod made by DAW330073\nVersion 1.0");
				layout3.addView(tex);
				achievementWindow.setWidth(display.widthPixels*0.91);
				achievementWindow.setHeight(display.heightPixels*0.8);
				achievementWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.DKGRAY));
				authorWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				authorWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				authorWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				layout.addView(layout1);
				scrollView.addView(layout2);
				layout.addView(scrollView);
				scrollView2.addView(layout3);
				layout.addView(scrollView2);
				achievementWindow.setContentView(layout);
				achievementWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,display.widthPixels*0.05,display.heightPixels*0.075);
				authorWindow.setContentView(authorlayout);
				authorWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,display.widthPixels-(display.widthPixels*0.91+display.widthPixels*0.05),display.heightPixels-(display.heightPixels*0.8+display.heightPixels*0.075));
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	}

function HideAchievementGUI(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(achievementWindow!=null) { 
				achievementWindow.dismiss();
				authorWindow.dismiss();
				achievementWindow=null;
				authorWindow=null;
				}
			}
		}));
	}

function AchButton(text,page){
	try{
		var btn=new android.widget.Button(activity);
		btn.setText(text);
		if(AchievementSystem[page].taken)
			btn.setTextColor(android.graphics.Color.rgb(98,0,255));
		btn.setOnClickListener(new android.view.View.OnClickListener({
			onClick: function(viewarg){
				if(page>0)
					tex.setText(AchievementSystem[page].title+"\n\n"+AchievementSystem[page].desc+"\n\n"+"Requires: "+AchievementSystem[AchievementSystem[page].req].title);
				else
					tex.setText(AchievementSystem[page].title+"\n\n"+AchievementSystem[page].desc+"\n\n");
				}
			}));
		}
	catch(err){
		clientMessage(err);
		}
	return btn;
	}

var path2=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftResource/ExtendedCraft/achievements/";
ModPE.downloadFile=function(filename,url){
	var file=new java.io.File(path2+filename);
	file.createNewFile();
	var fos=new java.io.FileOutputStream(file);
	var response=android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(fos);
	fos.close();
	};
if(!java.io.File(path2+"achievement.png").exists()){
	try{
		java.io.File(path2).mkdirs();
		ModPE.downloadFile("achievement.png","http://i.imgur.com/68GS2t9.png");
		aTxd=new android.graphics.drawable.BitmapDrawable(path2+"achievement.png");
		}
	catch(err){
		print(err);
		}
	}
else{
	try{
		aTxd=new android.graphics.drawable.BitmapDrawable(path2+"achievement.png");
		}
	catch(err){
		print(err);
		}
	}

