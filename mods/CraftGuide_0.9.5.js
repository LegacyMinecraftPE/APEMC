//Mod made by DAW330073

var version=1.1;
var checkForUpdates=true;

var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var display=new android.util.DisplayMetrics();
com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);

var versionCheck=CheckForUpdates();
var versionChecked=false;
if(versionCheck && version<versionCheck && !versionChecked){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			versionChecked=true;
			var alert=new android.app.AlertDialog.Builder(activity);
			alert.setTitle("New Version");
			alert.setMessage("Currently available version: "+versionCheck+"\nYour version: "+version); 
			alert.setPositiveButton("Update",new android.content.DialogInterface.OnClickListener(){
				onClick: function(dialog,whichButton){
					try{
						activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://adf.ly/qERTr")));
						}
					catch(err){
						print(err);
						}
					}
				});
			alert.setNegativeButton("Later",new android.content.DialogInterface.OnClickListener(){
				onClick: function(dialog,whichButton){}
				});
			alert.show();
			}
		}));
	}
function CheckForUpdates(){
	var out=new java.io.ByteArrayOutputStream();
	if(checkForUpdates)
		var response=android.net.http.AndroidHttpClient.newInstance("CheckForUpdates()").execute(new org.apache.http.client.methods.HttpGet("https://dl.dropboxusercontent.com/u/82808924/MCPE/CraftGuide%20update.txt")).getEntity().writeTo(out);
	out.close();
	return Number(String(out.toString()));
	}
ModPE.downloadFile=function(filename,url){
	var file=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftResource/ExtendedCraft/InGameWiki/"+filename);
	file.createNewFile();
	var fos=new java.io.FileOutputStream(file);
	var response=android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(fos);
	fos.close();
	};
var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftResource/ExtendedCraft/InGameWiki/";
if(!java.io.File(path+"craftingArrow.png").exists()){
	try{
		java.io.File(path).mkdirs();
		print("Please wait...downloading GUI...")
		ModPE.downloadFile("blocks.png","http://i.imgur.com/ID7YHQ5.png");
		ModPE.downloadFile("items.png","http://i.imgur.com/v9oqKKC.png");
		ModPE.downloadFile("background.png","http://i.imgur.com/hajlp6C.png");
		ModPE.downloadFile("craftingArrow.png","http://i.imgur.com/RBdfAc2.png");
		}
	catch(err){
		print(err);
		}
	}
else
	print("Please wait...");
if(java.io.File(path+"craftingArrow.png").exists()){
	try{
		blocks=new android.graphics.drawable.BitmapDrawable(path+"blocks.png");
		items=new android.graphics.drawable.BitmapDrawable(path+"items.png");
		bg=new android.graphics.drawable.BitmapDrawable(path+"background.png");
		cArrow=new android.graphics.drawable.BitmapDrawable(path+"craftingArrow.png");
		//blocks
		i0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,14*32,31,32));
		i1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,3*32,31,32));
		i2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,1*32,31,32));
		i3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,2*32,31,32));
		i4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,0*32,31,32));
		i5d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,0*32,31,32));
		i5d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,4*32,31,32));
		i5d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,4*32,31,32));
		i5d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,5*32,31,32));
		i5d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,6*32,31,32));
		i5d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,7*32,31,32));
		i6d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,7*32,31,32));
		i6d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,8*32,31,32));
		i6d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,9*32,31,32));
		i6d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,9*32,31,32));
		i6d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,10*32,31,32));
		i6d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,10*32,31,32));
		i7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,10*32,31,32));
		i8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,10*32,31,32));
		i9=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,10*32,31,32));
		i10=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,10*32,31,32));
		i11=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,10*32,31,32));
		i12d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,10*32,31,32));
		i12d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,10*32,31,32));
		i13=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,10*32,31,32));
		i14=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,10*32,31,32));
		i15=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,10*32,31,32));
		i16=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,10*32,31,32));
		i17d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,10*32,31,32));
		i17d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,10*32,31,32));
		i17d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,11*32,31,32));
		i17d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,11*32,31,32));
		i18d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,11*32,31,32));
		i18d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,11*32,31,32));
		i18d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,11*32,31,32));
		i18d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,11*32,31,32));
		i19=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,11*32,31,32));
		i20=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,11*32,31,32));
		i21=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,11*32,31,32));
		i22=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,11*32,31,32));
		i24d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,11*32,31,32));
		i24d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,11*32,31,32));
		i24d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,11*32,31,32));
		i27=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,11*32,31,32));
		i30=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,11*32,31,32));
		i31d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,12*32,31,32));
		i31d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,12*32,31,32));
		i31d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,12*32,31,32));
		i31d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,12*32,31,32));
		i32=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,12*32,31,32));
		i35d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,12*32,31,32));
		i35d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,12*32,31,32));
		i35d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,12*32,31,32));
		i35d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,12*32,31,32));
		i35d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,12*32,31,32));
		i35d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,12*32,31,32));
		i35d6=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,12*32,31,32));
		i35d7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,12*32,31,32));
		i35d8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,12*32,31,32));
		i35d9=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,12*32,31,32));
		i35d10=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,12*32,31,32));
		i35d11=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,13*32,31,32));
		i35d12=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,13*32,31,32));
		i35d13=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,13*32,31,32));
		i35d14=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,13*32,31,32));
		i35d15=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,13*32,31,32));
		i37=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,13*32,31,32));
		i38d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,13*32,31,32));
		i38d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,13*32,31,32));
		i38d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,13*32,31,32));
		i38d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,13*32,31,32));
		i38d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,13*32,31,32));
		i38d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,13*32,31,32));
		i38d6=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,13*32,31,32));
		i38d7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,13*32,31,32));
		i38d8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,13*32,31,32));
		i39=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,14*32,31,32));
		i40=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,14*32,31,32));
		i41=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,14*32,31,32));
		i42=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,14*32,31,32));
		i43d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,14*32,31,32));
		i43d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,0*32,31,32));
		i43d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,0*32,31,32));
		i43d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,0*32,31,32));
		i43d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,0*32,31,32));
		i43d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,0*32,31,32));
		i43d6=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,0*32,31,32));
		i43d7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,0*32,31,32));
		i43d8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,0*32,31,32));
		i43d9=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,0*32,31,32));
		i44d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,0*32,31,32));
		i44d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,0*32,31,32));
		i44d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,0*32,31,32));
		i44d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,0*32,31,32));
		i44d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,0*32,31,32));
		i44d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,0*32,31,32));
		i44d6=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,1*32,31,32));
		i44d7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,1*32,31,32));
		i45=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,0*32,31,32));
		i46=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,1*32,31,32));
		i47=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,1*32,31,32));
		i48=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,1*32,31,32));
		i49=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,1*32,31,32));
		i50=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,1*32,31,32));
		i51=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,1*32,31,32));
		i52=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,1*32,31,32));
		i53=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,1*32,31,32));
		i54=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,1*32,31,32));
		i56=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,1*32,31,32));
		i57=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,1*32,31,32));
		i58=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,2*32,31,32));
		i60=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,2*32,31,32));
		i61=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,2*32,31,32));
		i62=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,2*32,31,32));
		i65=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,2*32,31,32));
		i66=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,2*32,31,32));
		i67=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,2*32,31,32));
		i73=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,2*32,31,32));
		i78=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,2*32,31,32));
		i79=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,2*32,31,32));
		i80=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,2*32,31,32));
		i81=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,2*32,31,32));
		i82=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,2*32,31,32));
		i85=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,2*32,31,32));
		i86=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,3*32,31,32));
		i87=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,3*32,31,32));
		i89=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,3*32,31,32));
		i91=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,3*32,31,32));
		i96=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,3*32,31,32));
		i97d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,3*32,31,32));
		i97d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,3*32,31,32));
		i97d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,3*32,31,32));
		i98d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,3*32,31,32));
		i98d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,3*32,31,32));
		i98d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,3*32,31,32));
		i98d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,3*32,31,32));
		i99=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,3*32,31,32));
		i100=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,3*32,31,32));
		i101=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,3*32,31,32));
		i102=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,4*32,31,32));
		i103=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,4*32,31,32));
		i106=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,4*32,31,32));
		i107=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,4*32,31,32));
		i108=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,4*32,31,32));
		i109=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,4*32,31,32));
		i110=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,4*32,31,32));
		i111=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,4*32,31,32));
		i112=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,0*32,31,32));
		i114=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,4*32,31,32));
		i120=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,4*32,31,32));
		i121=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,4*32,31,32));
		i127=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,4*32,31,32));
		i128=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,4*32,31,32));
		i129=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,5*32,31,32));
		i133=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,5*32,31,32));
		i134=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,5*32,31,32));
		i135=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,5*32,31,32));
		i136=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,5*32,31,32));
		i139d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,5*32,31,32));
		i139d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,5*32,31,32));
		i141=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,5*32,31,32));
		i142=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,5*32,31,32));
		i155d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,5*32,31,32));
		i155d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,5*32,31,32));
		i155d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,5*32,31,32));
		i155d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,5*32,31,32));
		i155d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,5*32,31,32));
		i156=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,5*32,31,32));
		i158d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,0*32,31,32));
		i158d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,6*32,31,32));
		i158d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,6*32,31,32));
		i158d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,6*32,31,32));
		i159d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,6*32,31,32));
		i159d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,6*32,31,32));
		i159d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,6*32,31,32));
		i159d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,6*32,31,32));
		i159d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,6*32,31,32));
		i159d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,6*32,31,32));
		i159d6=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,6*32,31,32));
		i159d7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,6*32,31,32));
		i159d8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,6*32,31,32));
		i159d9=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,6*32,31,32));
		i159d10=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,6*32,31,32));
		i159d11=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,7*32,31,32));
		i159d12=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,7*32,31,32));
		i159d13=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,7*32,31,32));
		i159d14=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,7*32,31,32));
		i159d15=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,7*32,31,32));
		i161d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,7*32,31,32));
		i161d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,7*32,31,32));
		i162d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,7*32,31,32));
		i162d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,7*32,31,32));
		i170=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,7*32,31,32));
		i171d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,7*32,31,32));
		i171d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,7*32,31,32));
		i171d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,7*32,31,32));
		i171d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,7*32,31,32));
		i171d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,8*32,31,32));
		i171d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,8*32,31,32));
		i171d6=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,8*32,31,32));
		i171d7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,8*32,31,32));
		i171d8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,8*32,31,32));
		i171d9=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,8*32,31,32));
		i171d10=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,8*32,31,32));
		i171d11=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),8*31,8*32,31,32));
		i171d12=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,8*32,31,32));
		i171d13=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,8*32,31,32));
		i171d14=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,8*32,31,32));
		i171d15=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,8*32,31,32));
		i172=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,8*32,31,32));
		i173=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,8*32,31,32));
		i175d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,9*32,31,32));
		i175d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),2*31,9*32,31,32));
		i175d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),3*31,9*32,31,32));
		i175d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),4*31,9*32,31,32));
		i175d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),5*31,9*32,31,32));
		i175d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),6*31,9*32,31,32));
		i243=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,9*32,31,32));
		i244=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),7*31,5*32,31,32));
		i245=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),9*31,9*32,31,32));
		i246=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),10*31,9*32,31,32));
		i247d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),11*31,9*32,31,32));
		i247d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),12*31,9*32,31,32));
		i247d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),13*31,9*32,31,32));
		i248=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),14*31,9*32,31,32));
		i249=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),0*31,10*32,31,32));
		i255=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(blocks.getBitmap(),1*31,10*32,31,32));
		//items
		i256=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,1*32,31,32));
		i257=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,2*32,31,32));
		i258=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,3*32,31,32));
		i259=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,4*32,31,32));
		i260=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,4*32,31,32));
		i261=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,5*32,31,32));
		i262=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,5*32,31,32));
		i263d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,5*32,31,32));
		i263d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,5*32,31,32));
		i264=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,6*32,31,32));
		i265=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,6*32,31,32));
		i266=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,6*32,31,32));
		i267=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,6*32,31,32));
		i268=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,6*32,31,32));
		i269=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,6*32,31,32));
		i270=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,6*32,31,32));
		i271=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,6*32,31,32));
		i272=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,6*32,31,32));
		i273=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,6*32,31,32));
		i274=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,6*32,31,32));
		i275=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,6*32,31,32));
		i276=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,7*32,31,32));
		i277=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,7*32,31,32));
		i278=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,7*32,31,32));
		i279=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,7*32,31,32));
		i280=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,7*32,31,32));
		i281=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,7*32,31,32));
		i282=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,7*32,31,32));
		i283=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,7*32,31,32));
		i284=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,7*32,31,32));
		i285=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,7*32,31,32));
		i286=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,7*32,31,32));
		i287=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,7*32,31,32));
		i288=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,8*32,31,32));
		i289=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,8*32,31,32));
		i290=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,8*32,31,32));
		i291=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,8*32,31,32));
		i292=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,8*32,31,32));
		i293=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,8*32,31,32));
		i294=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,8*32,31,32));
		i295=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,8*32,31,32));
		i296=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,8*32,31,32));
		i297=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,8*32,31,32));
		i298=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,8*32,31,32));
		i299=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,8*32,31,32));
		i300=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,9*32,31,32));
		i301=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,9*32,31,32));
		i302=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,9*32,31,32));
		i303=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,9*32,31,32));
		i304=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,9*32,31,32));
		i305=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,9*32,31,32));
		i306=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,9*32,31,32));
		i307=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,9*32,31,32));
		i308=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,9*32,31,32));
		i309=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,9*32,31,32));
		i310=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,9*32,31,32));
		i311=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,9*32,31,32));
		i312=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,10*32,31,32));
		i313=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,10*32,31,32));
		i314=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,10*32,31,32));
		i315=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,10*32,31,32));
		i316=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,10*32,31,32));
		i317=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,10*32,31,32));
		i318=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,10*32,31,32));
		i319=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,10*32,31,32));
		i320=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,10*32,31,32));
		i321=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,10*32,31,32));
		i323=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,10*32,31,32));
		i324=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,10*32,31,32));
		i325d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,11*32,31,32));
		i325d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,11*32,31,32));
		i325d8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,11*32,31,32));
		i325d10=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,11*32,31,32));
		i328=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,11*32,31,32));
		i329=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,11*32,31,32));
		i330=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,11*32,31,32));
		i331=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,11*32,31,32));
		i332=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,11*32,31,32));
		i334=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,11*32,31,32));
		i336=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,11*32,31,32));
		i337=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,0*32,31,32));
		i338=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,0*32,31,32));
		i339=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,0*32,31,32));
		i340=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,0*32,31,32));
		i341=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,0*32,31,32));
		i344=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,0*32,31,32));
		i345=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,0*32,31,32));
		i347=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,0*32,31,32));
		i348=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,0*32,31,32));
		i351d0=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,0*32,31,32));
		i351d1=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,0*32,31,32));
		i351d2=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,0*32,31,32));
		i351d3=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,1*32,31,32));
		i351d4=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,1*32,31,32));
		i351d5=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,1*32,31,32));
		i351d6=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,1*32,31,32));
		i351d7=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,1*32,31,32));
		i351d8=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,1*32,31,32));
		i351d9=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,1*32,31,32));
		i351d10=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,1*32,31,32));
		i351d11=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,1*32,31,32));
		i351d12=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,1*32,31,32));
		i351d13=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,1*32,31,32));
		i351d14=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,0*32,31,32));
		i351d15=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,2*32,31,32));
		i352=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,2*32,31,32));
		i353=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,2*32,31,32));
		i354=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,2*32,31,32));
		i355=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,2*32,31,32));
		i357=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,2*32,31,32));
		i359=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,2*32,31,32));
		i360=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,2*32,31,32));
		i361=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,2*32,31,32));
		i362=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,2*32,31,32));
		i363=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,3*32,31,32));
		i364=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,3*32,31,32));
		i365=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,3*32,31,32));
		i366=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,3*32,31,32));
		i367=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,3*32,31,32));
		i383d10=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,3*32,31,32));
		i383d11=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,3*32,31,32));
		i383d12=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,3*32,31,32));
		i383d13=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,3*32,31,32));
		i383d14=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),10*31,3*32,31,32));
		i383d15=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,3*32,31,32));
		i383d16=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,4*32,31,32));
		i383d32=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,4*32,31,32));
		i383d33=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,4*32,31,32));
		i383d34=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,4*32,31,32));
		i383d35=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,4*32,31,32));
		i383d36=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,4*32,31,32));
		i383d37=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,4*32,31,32));
		i383d38=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),8*31,4*32,31,32));
		i383d39=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),9*31,4*32,31,32));
		i388=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),11*31,4*32,31,32));
		i391=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),0*31,5*32,31,32));
		i392=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),1*31,5*32,31,32));
		i393=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),2*31,5*32,31,32));
		i405=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),3*31,5*32,31,32));
		i406=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),4*31,5*32,31,32));
		i407=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),5*31,5*32,31,32));
		i408=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),6*31,5*32,31,32));
		i409=android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createBitmap(items.getBitmap(),7*31,5*32,31,32));
		var img={" ":i0,"0:0":i0,
			"1:0":i1,"2:0":i2,"3:0":i3,"4:0":i4,"5:0":i5d0,"5:1":i5d1,"5:2":i5d2,"5:3":i5d3,"5:4":i5d4,"5:5":i5d5,"6:0":i6d0,
			"6:1":i6d1,"6:2":i6d2,"6:3":i6d3,"6:4":i6d4,"6:5":i6d5,"7:0":i7,"8:0":i8,"9:0":i9,"10:0":i10,"11:0":i11,"12:0":i12d0,
			"12:1":i12d1,"13:0":i13,"14:0":i14,"15:0":i15,"16:0":i16,"17:0":i17d0,"17:1":i17d1,"17:2":i17d2,"17:3":i17d3,"18:0":i18d0,
			"18:1":i18d1,"18:2":i18d2,"18:3":i18d3,"19:0":i19,"20:0":i20,"21:0":i21,"22:0":i22,"24:0":i24d0,"24:1":i24d1,"24:2":i24d2,
			"27:0":i27,"30:0":i30,"31:0":i31d0,"31:1":i31d1,"31:2":i31d2,"31:3":i31d3,"32:0":i32,"35:0":i35d0,"35:1":i35d1,"35:2":i35d2,
			"35:3":i35d3,"35:4":i35d4,"35:5":i35d5,"35:6":i35d6,"35:7":i35d7,"35:8":i35d8,"35:9":i35d9,"35:10":i35d10,"35:11":i35d11,
			"35:12":i35d12,"35:13":i35d13,"35:14":i35d14,"35:15":i35d15,"37:0":i37,"38:0":i38d0,"38:1":i38d1,"38:2":i38d2,"38:3":i38d3,
			"38:4":i38d4,"38:5":i38d5,"38:6":i38d6,"38:7":i38d7,"38:8":i38d8,"39:0":i39,"40:0":i40,"41:0":i41,"42:0":i42,"43:0":i43d0,
			"43:1":i43d1,"43:2":i43d2,"43:3":i43d3,"43:4":i43d4,"43:5":i43d5,"43:6":i43d6,"43:7":i43d7,"43:8":i43d8,"43:9":i43d9,"44:0":i44d0,
			"44:1":i44d1,"44:2":i44d2,"44:3":i44d3,"44:4":i44d4,"44:5":i44d5,"44:6":i44d6,"44:7":i44d7,"45:0":i45,"46:0":i46,"47:0":i47,
			"48:0":i48,"49:0":i49,"50:0":i50,"51:0":i51,"52:0":i52,"53:0":i53,"54:0":i54,"56:0":i56,"57:0":i57,"58:0":i58,"60:0":i60,
			"61:0":i61,"62:0":i62,"65:0":i65,"66:0":i66,"67:0":i67,"73:0":i73,"78:0":i78,"79:0":i79,"80:0":i80,"81:0":i81,"82:0":i82,
			"85:0":i85,"86:0":i86,"87:0":i87,"89:0":i89,"91:0":i91,"96:0":i96,"97:0":i97d0,"97:1":i97d1,"97:2":i97d2,"98:0":i98d0,"98:1":i98d1,
			"98:2":i98d2,"98:3":i98d3,"99:0":i99,"100:0":i100,"101:0":i101,"102:0":i102,"103:0":i103,"106:0":i106,"107:0":i107,"108:0":i108,
			"109:0":i109,"110:0":i110,"111:0":i111,"112:0":i112,"114:0":i114,"120:0":i120,"121:0":i121,"127:0":i127,"128:0":i128,"129:0":i129,
			"133:0":i133,"134:0":i134,"135:0":i135,"136:0":i136,"139:0":i139d0,"139:1":i139d1,"141:0":i141,"142:0":i142,"155:0":i155d0,
			"155:1":i155d1,"155:2":i155d2,"155:3":i155d3,"155:4":i155d4,"156:0":i156,"158:0":i158d0,"158:1":i158d1,"158:2":i158d2,"158:3":i158d3,
			"159:0":i159d0,"159:1":i159d1,"159:2":i159d2,"159:3":i159d3,"159:4":i159d4,"159:5":i159d5,"159:6":i159d6,"159:7":i159d7,"159:8":i159d8,
			"159:9":i159d9,"159:10":i159d10,"159:11":i159d11,"159:12":i159d12,"159:13":i159d13,"159:14":i159d14,"159:15":i159d15,"161:0":i161d0,
			"161:1":i161d1,"162:0":i162d0,"162:1":i162d1,"170:0":i170,"171:0":i171d0,"171:1":i171d1,"171:2":i171d2,"171:3":i171d3,"171:4":i171d4,
			"171:5":i171d5,"171:6":i171d6,"171:7":i171d7,"171:8":i171d8,"171:9":i171d9,"171:10":i171d10,"171:11":i171d11,"171:12":i171d12,
			"171:13":i171d13,"171:14":i171d14,"171:15":i171d15,"172:0":i172,"173:0":i173,"175:0":i175d0,"175:1":i175d1,"175:2":i175d2,
			"175:3":i175d3,"175:4":i175d4,"175:5":i175d5,"243:0":i243,"244:0":i244,"245:0":i245,"246:0":i246,"247:0":i247d0,"247:1":i247d1,
			"247:2":i247d2,"248:0":i248,"249:0":i249,"255:0":i255,"256:0":i256,"257:0":i257,"258:0":i258,"259:0":i259,"260:0":i260,"261:0":i261,
			"262:0":i262,"263:0":i263d0,"263:1":i263d1,"264:0":i264,"265:0":i265,"266:0":i266,"267:0":i267,"268:0":i268,"269:0":i269,"270:0":i270,
			"271:0":i271,"272:0":i272,"273:0":i273,"274:0":i274,"275:0":i275,"276:0":i276,"277:0":i277,"278:0":i278,"279:0":i279,"280:0":i280,
			"281:0":i281,"282:0":i282,"283:0":i283,"284:0":i284,"285:0":i285,"286:0":i286,"287:0":i287,"288:0":i288,"289:0":i289,"290:0":i290,
			"291:0":i291,"292:0":i292,"293:0":i293,"294:0":i294,"295:0":i295,"296:0":i296,"297:0":i297,"298:0":i298,"299:0":i299,"300:0":i300,
			"301:0":i301,"302:0":i302,"303:0":i303,"304:0":i304,"305:0":i305,"306:0":i306,"307:0":i307,"308:0":i308,"309:0":i309,"310:0":i310,
			"311:0":i311,"312:0":i312,"313:0":i313,"314:0":i314,"315:0":i315,"316:0":i316,"317:0":i317,"318:0":i318,"319:0":i319,"320:0":i320,
			"321:0":i321,"323:0":i323,"324:0":i324,"325:0":i325d0,"325:1":i325d1,"325:8":i325d8,"325:10":i325d10,"328:0":i328,"329:0":i329,
			"330:0":i330,"331:0":i331,"332:0":i332,"334:0":i334,"336:0":i336,"337:0":i337,"338:0":i338,"339:0":i339,"340:0":i340,"341:0":i341,
			"344:0":i344,"345:0":i345,"347:0":i347,"348:0":i348,"351:0":i351d0,"351:1":i351d1,"351:2":i351d2,"351:3":i351d3,"351:4":i351d4,
			"351:5":i351d5,"351:6":i351d6,"351:7":i351d7,"351:8":i351d8,"351:9":i351d9,"351:10":i351d10,"351:11":i351d11,"351:12":i351d12,
			"351:13":i351d13,"351:14":i351d14,"351:15":i351d15,"352:0":i352,"353:0":i353,"354:0":i354,"355:0":i355,"357:0":i357,"359:0":i359,
			"360:0":i360,"361:0":i361,"362:0":i362,"363:0":i363,"364:0":i364,"365:0":i365,"366:0":i366,"367:0":i367,"383:10":i383d10,
			"383:11":i383d11,"383:12":i383d12,"383:13":i383d13,"383:14":i383d14,"383:15":i383d15,"383:16":i383d16,"383:32":i383d32,
			"383:33":i383d33,"383:34":i383d34,"383:35":i383d35,"383:36":i383d36,"383:37":i383d37,"383:38":i383d38,"383:39":i383d39,"388:0":i388,
			"391:0":i391,"392:0":i392,"393:0":i393,"405:0":i405,"406:0":i406,"407:0":i407,"408:0":i408,"409:0":i409
			};
		var recipes={
			"1:0":["f",4,0,1],
			"5:0":["c",17,0,4],
			"5:1":["c",17,1,4],
			"5:2":["c",17,2,4],
			"5:3":["c",17,3,4],
			"5:4":["c",162,0,4],
			"5:5":["c",162,1,4],
			"20:0":["f",12,0,1],
			"22:0":["s","lll","lll","lll","l",351,4,1],
			"24:0":["s","   ","ss ","ss "," ",0,0,"s",12,0,1],
			"24:1":["s","   ","ss ","ss "," ",0,0,"s",24,0,4],
			"24:2":["s","   "," s "," s "," ",0,0,"s",44,1,1],
			"27:0":["s","g g","gsg","grg"," ",0,0,"g",266,0,"s",280,0,"r",331,0,6],
			"35:0":["s","   ","ss ","ss "," ",0,0,"s",287,0,1],
			"35:1":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,14,1],
			"35:2":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,13,1],
			"35:3":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,12,1],
			"35:4":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,11,1],
			"35:5":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,10,1],
			"35:6":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,9,1],
			"35:7":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,8,1],
			"35:8":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,7,1],
			"35:9":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,6,1],
			"35:10":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,5,1],
			"35:11":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,4,1],
			"35:12":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,3,1],
			"35:13":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,2,1],
			"35:14":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,1,1],
			"35:15":["s","   ","wd ","   "," ",0,0,"w",35,0,"d",351,0,1],
			"41:0":["s","ggg","ggg","ggg","g",266,0,1],
			"42:0":["s","iii","iii","iii","i",265,0,1],
			"44:0":["s","   ","bbb","   "," ",0,0,"b",1,0,6],
			"44:1":["s","   ","bbb","   "," ",0,0,"b",24,0,6],
			"44:3":["s","   ","bbb","   "," ",0,0,"b",4,0,6],
			"44:4":["s","   ","bbb","   "," ",0,0,"b",47,0,6],
			"44:5":["s","   ","bbb","   "," ",0,0,"b",98,0,6],
			"44:6":["s","   ","bbb","   "," ",0,0,"b",112,0,6],
			"44:7":["s","   ","bbb","   "," ",0,0,"b",155,0,6],
			"45:0":["s","   ","bb ","bb "," ",0,0,"b",336,0,1],
			"46:0":["s","gsg","sgs","gsg","s",12,0,"g",289,0,1],
			"47:0":["s","www","bbb","www","w",5,0,"b",340,0,1],
			"50:0":["s","   "," c "," s "," ",0,0,"c",263,0,"s",280,0,4],
			"53:0":["s","  w"," ww","www"," ",0,0,"w",5,0,"s",280,0,4],
			"54:0":["s","www","w w","www"," ",0,0,"w",5,0,1],
			"57:0":["s","ddd","ddd","ddd","d",264,0,1],
			"58:0":["s","   ","ww ","ww "," ",0,0,"w",5,0,1],
			"61:0":["s","ccc","ccc","ccc"," ",0,0,"c",4,0,1],
			"65:0":["s","s s","sss","s s"," ",0,0,"s",280,0,3],
			"66:0":["s","i i","isi","i i"," ",0,0,"s",280,0,"i",265,0,16],
			"67:0":["s","  c"," cc","ccc"," ",0,0,"c",4,0,4],
			"80:0":["s","   ","ss ","ss "," ",0,0,"s",332,0,1],
			"82:0":["s","   ","cc ","cc "," ",0,0,"c",337,0,1],
			"85:0":["s","   ","sss","sss"," ",0,0,"s",280,0,2],
			"89:0":["s","   ","gg ","gg "," ",0,0,"g",348,0,1],
			"91:0":["s","   "," g "," t "," ",0,0,"g",86,0,"t",50,0,1],
			"96:0":["s","   ","www","www"," ",0,0,"w",5,0,2],
			"98:0":["s","   ","ss ","ss "," ",0,0,"s",1,0,4],
			"98:1":["s","   ","sv ","   "," ",0,0,"s",98,0,"v",106,0,1],
			"98:2":["f",98,0,1],
			"98:3":["s","   "," s "," s "," ",0,0,"s",44,5,1],
			"101:0":["s","   ","iii","iii"," ",0,0,"i",265,0,16],
			"102:0":["s","   ","ggg","ggg"," ",0,0,"g",20,0,16],
			"107:0":["s","   ","sws","sws"," ",0,0,"s",280,0,"w",5,0,1],
			"108:0":["s","  b"," bb","bbb"," ",0,0,"b",45,0,4],
			"109:0":["s","  b"," bb","bbb"," ",0,0,"b",98,0,4],
			"128:0":["s","  b"," bb","bbb"," ",0,0,"b",24,0,4],
			"133:0":["s","eee","eee","eee","e",388,0,1],
			"134:0":["s","  w"," ww","www"," ",0,0,"w",5,1,4],
			"135:0":["s","  w"," ww","www"," ",0,0,"w",5,2,4],
			"136:0":["s","  w"," ww","www"," ",0,0,"w",5,3,4],
			"139:0":["s","   ","ccc","ccc"," ",0,0,"c",4,0,6],
			"139:1":["s","   ","ccc","ccc"," ",0,0,"c",48,0,6],
			"155:0":["s","   ","qq ","qq "," ",0,0,"q",406,0,1],
			"155:1":["s","   "," q "," q "," ",0,0,"q",44,7,1],
			"155:2":["s","   "," q "," q "," ",0,0,"q",155,0,1],
			"156:0":["s","  q"," qq","qqq"," ",0,0,"q",150,0,4],
			"158:0":["s","   ","www","   "," ",0,0,"w",5,0,6],
			"158:1":["s","   ","www","   "," ",0,0,"w",5,1,6],
			"158:2":["s","   ","www","   "," ",0,0,"w",5,2,6],
			"158:3":["s","   ","www","   "," ",0,0,"w",5,3,6],
			"159:0":["f",82,0,1],
			"159:1":["s","ccc","cdc","ccc","c",159,0,"d",351,14,8],
			"159:2":["s","ccc","cdc","ccc","c",159,0,"d",351,13,8],
			"159:3":["s","ccc","cdc","ccc","c",159,0,"d",351,12,8],
			"159:4":["s","ccc","cdc","ccc","c",159,0,"d",351,11,8],
			"159:5":["s","ccc","cdc","ccc","c",159,0,"d",351,10,8],
			"159:6":["s","ccc","cdc","ccc","c",159,0,"d",351,9,8],
			"159:7":["s","ccc","cdc","ccc","c",159,0,"d",351,8,8],
			"159:8":["s","ccc","cdc","ccc","c",159,0,"d",351,7,8],
			"159:9":["s","ccc","cdc","ccc","c",159,0,"d",351,6,8],
			"159:10":["s","ccc","cdc","ccc","c",159,0,"d",351,5,8],
			"159:11":["s","ccc","cdc","ccc","c",159,0,"d",351,4,8],
			"159:12":["s","ccc","cdc","ccc","c",159,0,"d",351,3,8],
			"159:13":["s","ccc","cdc","ccc","c",159,0,"d",351,2,8],
			"159:14":["s","ccc","cdc","ccc","c",159,0,"d",351,1,8],
			"159:15":["s","ccc","cdc","ccc","c",159,0,"d",351,0,8],
			"170:0":["s","www","www","www","w",296,0,1],
			"171:0":["s","   ","   ","ww "," ",0,0,"w",35,0,3],
			"171:1":["s","   ","   ","ww "," ",0,0,"w",35,1,3],
			"171:2":["s","   ","   ","ww "," ",0,0,"w",35,2,3],
			"171:3":["s","   ","   ","ww "," ",0,0,"w",35,3,3],
			"171:4":["s","   ","   ","ww "," ",0,0,"w",35,4,3],
			"171:5":["s","   ","   ","ww "," ",0,0,"w",35,5,3],
			"171:6":["s","   ","   ","ww "," ",0,0,"w",35,6,3],
			"171:7":["s","   ","   ","ww "," ",0,0,"w",35,7,3],
			"171:8":["s","   ","   ","ww "," ",0,0,"w",35,8,3],
			"171:9":["s","   ","   ","ww "," ",0,0,"w",35,9,3],
			"171:10":["s","   ","   ","ww "," ",0,0,"w",35,10,3],
			"171:11":["s","   ","   ","ww "," ",0,0,"w",35,11,3],
			"171:12":["s","   ","   ","ww "," ",0,0,"w",35,12,3],
			"171:13":["s","   ","   ","ww "," ",0,0,"w",35,13,3],
			"171:14":["s","   ","   ","ww "," ",0,0,"w",35,14,3],
			"171:15":["s","   ","   ","ww "," ",0,0,"w",35,15,3],
			"173:0":["s","ccc","ccc","ccc","c",263,0,1],
			"245:0":["s","   ","cc ","cc "," ",0,0,"c",4,0,1],
			"247:0":["s","idi","idi","idi","i",265,0,"d",264,0,1],
			"256:0":["s"," i "," s "," s "," ",0,0,"i",265,0,"s",280,0,1],
			"257:0":["s","iii"," s "," s "," ",0,0,"i",265,0,"s",280,0,1],
			"258:0":["s","ii ","is "," s "," ",0,0,"i",265,0,"s",280,0,1],
			"259:0":["s","   ","if ","   "," ",0,0,"i",265,0,"f",318,0,1],
			"261:0":["s"," st","s t"," st"," ",0,0,"s",280,0,"t",287,0,1],
			"262:0":["s"," f "," s "," h "," ",0,0,"s",280,0,"f",318,0,"h",287,0,4],
			"263:0":["f",16,0,1],
			"264:0":["f",56,0,1],
			"265:0":["f",15,0,1],
			"266:0":["f",14,0,1],
			"267:0":["s"," i "," i "," s "," ",0,0,"i",265,0,"s",280,0,1],
			"268:0":["s"," w "," w "," s "," ",0,0,"w",5,0,"s",280,0,1],
			"269:0":["s"," w "," s "," s "," ",0,0,"w",5,0,"s",280,0,1],
			"270:0":["s","www"," s "," s "," ",0,0,"w",5,0,"s",280,0,1],
			"271:0":["s","ww ","ws "," s "," ",0,0,"w",5,0,"s",280,0,1],
			"272:0":["s"," c "," c "," s "," ",0,0,"c",4,0,"s",280,0,1],
			"273:0":["s"," c "," s "," s "," ",0,0,"c",4,0,"s",280,0,1],
			"274:0":["s","ccc"," s "," s "," ",0,0,"c",4,0,"s",280,0,1],
			"275:0":["s","cc ","cs "," s "," ",0,0,"c",4,0,"s",280,0,1],
			"276:0":["s"," c "," c "," s "," ",0,0,"c",264,0,"s",280,0,1],
			"277:0":["s"," c "," s "," s "," ",0,0,"c",264,0,"s",280,0,1],
			"278:0":["s","ccc"," s "," s "," ",0,0,"c",264,0,"s",280,0,1],
			"279:0":["s","cc ","cs "," s "," ",0,0,"c",264,0,"s",280,0,1],
			"280:0":["s","   "," w "," w "," ",0,0,"w",5,0,4],
			"281:0":["s","   ","w w"," w "," ",0,0,"w",5,0,4],
			"282:0":["s","   ","rb "," w "," ",0,0,"w",281,0,"r",40,0,"b",39,0,1],
			"283:0":["s"," c "," c "," s "," ",0,0,"c",264,0,"s",280,0,1],
			"284:0":["s"," c "," s "," s "," ",0,0,"c",264,0,"s",280,0,1],
			"285:0":["s","ccc"," s "," s "," ",0,0,"c",264,0,"s",280,0,1],
			"286:0":["s","cc ","cs "," s "," ",0,0,"c",266,0,"s",280,0,1],
			"290:0":["s","ww "," s "," s "," ",0,0,"w",5,0,"s",280,0,1],
			"291:0":["s","ww "," s "," s "," ",0,0,"w",4,0,"s",280,0,1],
			"292:0":["s","ww "," s "," s "," ",0,0,"w",265,0,"s",280,0,1],
			"293:0":["s","ww "," s "," s "," ",0,0,"w",264,0,"s",280,0,1],
			"294:0":["s","ww "," s "," s "," ",0,0,"w",266,0,"s",280,0,1],
			"297:0":["s","   ","www","   "," ",0,0,"w",296,0,1],
			"298:0":["s","aaa","a a","   "," ",0,0,"a",334,0,1],
			"299:0":["s","a a","aaa","aaa"," ",0,0,"a",334,0,1],
			"300:0":["s","aaa","a a","a a"," ",0,0,"a",334,0,1],
			"301:0":["s","   ","a a","a a"," ",0,0,"a",334,0,1],
			"306:0":["s","aaa","a a","   "," ",0,0,"a",265,0,1],
			"307:0":["s","a a","aaa","aaa"," ",0,0,"a",265,0,1],
			"308:0":["s","aaa","a a","a a"," ",0,0,"a",265,0,1],
			"309:0":["s","   ","a a","a a"," ",0,0,"a",265,0,1],
			"310:0":["s","aaa","a a","   "," ",0,0,"a",264,0,1],
			"311:0":["s","a a","aaa","aaa"," ",0,0,"a",264,0,1],
			"312:0":["s","aaa","a a","a a"," ",0,0,"a",264,0,1],
			"313:0":["s","   ","a a","a a"," ",0,0,"a",264,0,1],
			"314:0":["s","aaa","a a","   "," ",0,0,"a",266,0,1],
			"315:0":["s","a a","aaa","aaa"," ",0,0,"a",266,0,1],
			"316:0":["s","aaa","a a","a a"," ",0,0,"a",266,0,1],
			"317:0":["s","   ","a a","a a"," ",0,0,"a",266,0,1],
			"320:0":["f",319,0,1],
			"321:0":["s","sss","sws","sss"," ",0,0,"s",280,0,"w",35,0,1],
			"323:0":["s","www","www"," w "," ",0,0,"s",280,0,"w",5,0,3],
			"324:0":["s"," ww"," ww"," ww"," ",0,0,"w",5,0,1],
			"325:0":["s","   ","i i"," i "," ",0,0,"i",265,0,1],
			"328:0":["s","   ","i i","iii"," ",0,0,"i",265,0,1],
			"333:0":["s","   ","i i","iii"," ",0,0,"i",5,0,1],
			"336:0":["f",337,0,1],
			"339:0":["s","   ","sss","   "," ",0,0,"s",338,0,3],
			"340:0":["s","lp ","pp ","   "," ",0,0,"l",334,0,"p",339,0,1],
			"345:0":["s"," i ","iri"," i "," ",0,0,"i",265,0,"r",331,0,1],
			"347:0":["s"," i ","iri"," i "," ",0,0,"i",266,0,"r",331,0,1],
			"353:0":["c",338,0,1],
			"354:0":["s","mmm","ses","www","m",335,14,"s",353,0,"e",344,0,"w",296,0,1],
			"355:0":["s","   ","www","ppp"," ",0,0,"w",35,0,"p",5,0,1],
			"357:0":["s","   ","wcw","   "," ",0,0,"w",296,0,"c",351,3,8],
			"359:0":["s","   ","  i"," i "," ",0,0,"i",265,0,1],
			"364:0":["f",363,0,1],
			"366:0":["f",365,0,1],
			"393:0":["f",392,0,1]
			};
		var names={
			"1:0":"Stone",
			"5:0":"Oak Planks",
			"5:1":"Spruce Planks",
			"5:2":"Birch Planks",
			"5:3":"Jungle Planks",
			"5:4":"Acaccia Planks",
			"5:5":"Dark Oak Planks",
			"20:0":"Glass",
			"22:0":"Lapis Lazuli Block",
			"24:0":"Sandstone",
			"24:1":"Carved Sandstone",
			"24:2":"Smooth Sandstone",
			"27:0":"Powered Rail",
			"35:0":"Wool",
			"35:1":"Orange Wool",
			"35:2":"Magenta Wool",
			"35:3":"Light Blue Wool",
			"35:4":"Yellow Wool",
			"35:5":"Lime Wool",
			"35:6":"Pink Wool",
			"35:7":"Gray Wool",
			"35:8":"Light Gray Wool",
			"35:9":"Cyan Wool",
			"35:10":"Purple Wool",
			"35:11":"Blue Wool",
			"35:12":"Brown Wool",
			"35:13":"Green Wool",
			"35:14":"Red Wool",
			"35:15":"Black Wool",
			"41:0":"Gold Block",
			"42:0":"Iron Block",
			"44:0":"Stone Slab",
			"44:1":"Sandstone Slab",
			"44:3":"Cobblestone Slab",
			"44:4":"Brick Slab",
			"44:5":"Stone Brick Slab",
			"44:6":"Nether Brick Slab",
			"44:7":"Quartz Slab",
			"45:0":"Brick Block",
			"46:0":"TNT",
			"47:0":"Bookshelf",
			"50:0":"Torch",
			"53:0":"Wooden Stairs",
			"54:0":"Chest",
			"57:0":"Diamond Block",
			"58:0":"Crafting Table",
			"61:0":"Furnace",
			"65:0":"Ladder",
			"66:0":"Rail",
			"67:0":"Cobblestone Stairs",
			"80:0":"Snow",
			"82:0":"Clay Block",
			"85:0":"Fence",
			"89:0":"Glowstone Block",
			"91:0":"Jack'o Lantern",
			"96:0":"Trapdoor",
			"98:0":"Stone Brick",
			"98:1":"Mossy Stone Brick",
			"98:2":"Cracked Stone Brick",
			"98:3":"Chiseled Stone Brick",
			"101:0":"Iron Bars",
			"102:0":"Glass Pane",
			"107:0":"Fence Gate",
			"108:0":"Brick Stairs",
			"109:0":"Stone Brick Stairs",
			"128:0":"Sandstone Stairs",
			"133:0":"Emerald Block",
			"134:0":"Spruce Stairs",
			"135:0":"Birch Stairs",
			"136:0":"Jungle Stairs",
			"139:0":"Cobblestone Wall",
			"139:1":"Mossy Cobblestone Wall",
			"155:0":"Quartz Block",
			"155:1":"Carved Quartz Block",
			"155:2":"Quartz Pillar",
			"156:0":"Quartz Stairs",
			"158:0":"Oak Slab",
			"158:1":"Spruce Slab",
			"158:2":"Birch Slab",
			"158:3":"Jungle Slab",
			"159:0":"Hardened Clay",
			"159:1":"Orange Hardened Clay",
			"159:2":"Magenta Hardened Clay",
			"159:3":"Light Blue Hardened Clay",
			"159:4":"Yellow Hardened Clay",
			"159:5":"Lime Hardened Clay",
			"159:6":"Pink Hardened Clay",
			"159:7":"Gray Hardened Clay",
			"159:8":"Light Gray Hardened Clay",
			"159:9":"Cyan Hardened Clay",
			"159:10":"Purple Hardened Clay",
			"159:11":"Blue Hardened Clay",
			"159:12":"Brown Hardened Clay",
			"159:13":"Green Hardened Clay",
			"159:14":"Red Hardened Clay",
			"159:15":"Black Hardened Clay",
			"170:0":"Hay Bale",
			"171:0":"Carpet",
			"171:1":"Orange Carpet",
			"171:2":"Magenta Carpet",
			"171:3":"Light Blue Carpet",
			"171:4":"Yellow Carpet",
			"171:5":"Lime Carpet",
			"171:6":"Pink Carpet",
			"171:7":"Gray Carpet",
			"171:8":"Light Gray Carpet",
			"171:9":"Cyan Carpet",
			"171:10":"Purple Carpet",
			"171:11":"Blue Carpet",
			"171:12":"Brown Carpet",
			"171:13":"Green Carpet",
			"171:14":"Red Carpet",
			"171:15":"Black Carpet",
			"173:0":"Coal Block",
			"245:0":"Stonecutter",
			"247:0":"Nether Reactor Core",
			"256:0":"Iron Shovel",
			"257:0":"Iron Pickaxe",
			"258:0":"Iron Axe",
			"259:0":"Flint & Steel",
			"261:0":"Bow",
			"262:0":"Arrow",
			"263:0":"Coal",
			"263:1":"Charcoal",
			"264:0":"Diamond",
			"265:0":"Iron Ingot",
			"266:0":"Gold Ingot",
			"267:0":"Iron Sword",
			"268:0":"Wooden Sword",
			"269:0":"Wooden Shovel",
			"270:0":"Wooden Pickaxe",
			"271:0":"Wooden Axe",
			"272:0":"Stone Sword",
			"273:0":"Stone Shovel",
			"274:0":"Stone Pickaxe",
			"275:0":"Stone Axe",
			"276:0":"Diamond Sword",
			"277:0":"Diamond Shovel",
			"278:0":"Diamond Pickaxe",
			"279:0":"Diamond Axe",
			"280:0":"Stick",
			"281:0":"Bowl",
			"282:0":"Mushroom Stew",
			"283:0":"Golden Sword",
			"284:0":"Golden Shovel",
			"285:0":"Golden Pickaxe",
			"286:0":"Golden Axe",
			"290:0":"Wooden Hoe",
			"291:0":"Stone Hoe",
			"292:0":"Iron Hoe",
			"293:0":"Diamond Hoe",
			"294:0":"Golden Hoe",
			"297:0":"Bread",
			"298:0":"Leather Cap",
			"299:0":"Leather Tunic",
			"300:0":"Leather Pants",
			"301:0":"Leather Boots",
			"306:0":"Iron Helmet",
			"307:0":"Iron Chestplate",
			"308:0":"Iron Leggings",
			"309:0":"Iron Boots",
			"310:0":"Diamond Helmet",
			"311:0":"Diamond Chestplate",
			"312:0":"Diamond Leggings",
			"313:0":"Diamond Boots",
			"314:0":"Golden Helmet",
			"315:0":"Golden Chestplate",
			"316:0":"Golden Leggings",
			"317:0":"Golden Boots",
			"320:0":"Cooked Porkchop",
			"321:0":"Painting",
			"323:0":"Sign",
			"324:0":"Wooden Door",
			"325:0":"Bucket",
			"328:0":"Minecart",
			"333:0":"Boat",
			"336:0":"Clay Brick",
			"339:0":"Paper",
			"340:0":"Book",
			"345:0":"Compass",
			"347:0":"Clock",
			"353:0":"Sugar",
			"354:0":"Cake",
			"355:0":"Bed",
			"357:0":"Cookie",
			"359:0":"Shears",
			"364:0":"Steak",
			"366:0":"Cooked Chicken",
			"393:0":"Baked Potato"
			};
		print("Done!");
		}
	catch(err){
		print(err);
		}
	}
function ShowRecipe(item){
	var c1=img[img["0:0"]];c2=img["0:0"];c3=img["0:0"];c4=img["0:0"];c5=img["0:0"];c6=img["0:0"];c7=img["0:0"];c8=img["0:0"];c9=img["0:0"];
	if(recipes[item][0]=="f")
		c1=img[recipes[item][1]+":"+recipes[item][2]];
	else if(recipes[item][0]=="c")
		c1=img[recipes[item][1]+":"+recipes[item][2]];
	else{
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][1].split("")[0]==recipes[item][i]){
				c1=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][1].split("")[1]==recipes[item][i]){
				c2=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][1].split("")[2]==recipes[item][i]){
				c3=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][2].split("")[0]==recipes[item][i]){
				c4=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][2].split("")[1]==recipes[item][i]){
				c5=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][2].split("")[2]==recipes[item][i]){
				c6=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][3].split("")[0]==recipes[item][i]){
				c7=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][3].split("")[1]==recipes[item][i]){
				c8=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		for(var i=4;i<recipes[item].length;i+=3){
			if(recipes[item][3].split("")[2]==recipes[item][i]){
				c9=img[recipes[item][i+1]+":"+recipes[item][i+2]];
				break;
				}
			}
		}
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				var alert=new android.app.AlertDialog.Builder(activity);
				alert.setTitle(names[item]);
				var cs=android.graphics.Bitmap.createBitmap(31*4+32,32*3+14,android.graphics.Bitmap.Config.ARGB_8888);
				var comboImage=new android.graphics.Canvas(cs);
				var txtPaint=new android.graphics.Paint();
				txtPaint.setColor(android.graphics.Color.WHITE);
				if(recipes[item][0]=="s")
					comboImage.drawText("Shaped recipe",31,14,txtPaint);
				if(recipes[item][0]=="c")
					comboImage.drawText("Shapeless recipe",31,14,txtPaint);
				if(recipes[item][0]=="f")
					comboImage.drawText("Smelting",31,14,txtPaint);
				if(recipes[item][0]=="f" || recipes[item][0]=="c"){
					comboImage.drawBitmap(c1.getBitmap(),31,46,null);
					comboImage.drawBitmap(cArrow.getBitmap(),76,48,null);
					comboImage.drawBitmap(img[item].getBitmap(),125,46,null);
					}
				else{
					comboImage.drawBitmap(c1.getBitmap(),0,14,null);
					comboImage.drawBitmap(c2.getBitmap(),31,14,null);
					comboImage.drawBitmap(c3.getBitmap(),62,14,null);
					comboImage.drawBitmap(c4.getBitmap(),0,46,null);
					comboImage.drawBitmap(c5.getBitmap(),31,46,null);
					comboImage.drawBitmap(c6.getBitmap(),62,46,null);
					comboImage.drawBitmap(cArrow.getBitmap(),93,48,null);
					comboImage.drawBitmap(img[item].getBitmap(),125,46,null);
					comboImage.drawBitmap(c7.getBitmap(),0,78,null);
					comboImage.drawBitmap(c8.getBitmap(),31,78,null);
					comboImage.drawBitmap(c9.getBitmap(),62,78,null);
					}
				if(recipes[item][recipes[item].length-1]>1)
					comboImage.drawText(String(recipes[item][recipes[item].length-1]),157,60,txtPaint);
				recipe=new android.widget.ImageView(activity);
				recipe.setImageBitmap(android.graphics.Bitmap.createScaledBitmap(cs,cs.getWidth()*2,cs.getHeight()*2,false));/*
				var inflater=activity.getLayoutInflater();
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				layout.addView(recipe);
				alert.setView(inflater.inflate(layout,null));*/
				alert.setView(recipe);
				alert.setNegativeButton("Close",new android.content.DialogInterface.OnClickListener(){
					onClick: function(dialog,whichButton){}
					});
				alert.show();
				}
			catch(err){
				print(err);
				}
			}
		}));
	}
function newLevel(){
	ShowBtn();
	}
function leaveGame(){
	HideBtn();
	}
var wikiWindow=null;
function ShowWiki(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				wikiWindow=new android.widget.PopupWindow();
				var scrollView=new android.widget.ScrollView(activity);
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				for(key in recipes)
					layout.addView(Button(key));
				scrollView.addView(layout);
				wikiWindow.setContentView(scrollView);
				wikiWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				wikiWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				wikiWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.DKGRAY));
				wikiWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	}
function HideWiki(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(wikiWindow!=null) { 
				wikiWindow.dismiss();
				wikiWindow=null;
				}
			}
		}));
	}
function Button(key){
	var btn=new android.widget.Button(activity);
	btn.setText(names[key]);
	btn.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg){
			ShowRecipe(key);
			}
		}));
	return btn;
	}
var btnWindow=null;
function ShowBtn(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				btnWindow=new android.widget.PopupWindow();
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				var button=new android.widget.Button(activity);
				button.setText("Recipes");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(wikiWindow)
							HideWiki();
						else
							ShowWiki();
						}
					}));
				layout.addView(button);
				btnWindow.setContentView(layout);
				btnWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				btnWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				btnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				btnWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,0,display.heightPixels/10);
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	}
function HideBtn(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(btnWindow!=null) { 
				btnWindow.dismiss();
				btnWindow=null;
				}
			}
		}));
	}