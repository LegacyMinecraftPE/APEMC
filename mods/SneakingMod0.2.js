var isSneaking = false;
var btnWindow = null;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*PICTURES*/
sneakoff64 = "iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAAHT56PyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURba2tqurq5OTk35+fl1dXYKCgoyMjFdXV3BwcCUlJVBQUC0tLWchuuMAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACrSURBVBjTHYwxCoNAFETHG7hZcgH1BmNEsdliIWC7eIKQIl06D2AlltsYbOwC29pEcrn8zS+G4c3jI0mhDQoDhRUW2hvku0GiwBG8oPawgklnoJt2lHlmlMjKAEqpNK40ONeeG/T8kMx3+idy//ebTyTibCittRvku8rkSqiqF37nFcpx+i50HU6cdraLsIwrbzycRebqlcfITpirX2P0pJG9E1bYIYTwHsIPQkcxuJSPUZkAAAAASUVORK5CYII="
sneakon64 = "iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAAHT56PyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURVBQUFdXV11dXZOTk35+foKCgoyMjHBwcCUlJS0tLaurq7a2traXyW4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAClSURBVBjTJYo9DoIwAIWfDQdQwgEM1r1JN1ae/OzlBpp4gA6wkyA7ibh1rgs7l7PIG97wfR9whlS4LDhhRIaoV4gmh6MALXhD2UN7RKQJoqqtQtIxRAlZOByAWEGSVLiWfXjZPbeftkb2tXWQ1Zvu3zjkOvsuEOm+HKJoAn9QQxi2n4FGI2U7sR4CiznyztlkwZYjZ0sPQVO+LI0PnSEbE5jft64/KIg1qesZNdgAAAAASUVORK5CYII=" 

/*END OF PICTURES*/
var sneakOffBM = null;
var sneakOnBM = null;
function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function switchSneaking(){
	isSneaking = !isSneaking;
	Entity.setSneaking(getPlayerEnt(), isSneaking);
}
function newLevel(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		var layout = new android.widget.RelativeLayout(ctx);
		var layoutParams = new android.widget.LinearLayout.LayoutParams(dip2px(ctx,18*3), dip2px(ctx,18*3));
		var buttonImg = new android.widget.ImageView(ctx);
		//button.setBackgroundColor(0x55858585)
		
		if(sneakOffBM == null){
			decodedOff64 = android.util.Base64.decode(sneakoff64, 0);
			sneakOffBM = android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeByteArray(decodedOff64, 0, decodedOff64.length), dip2px(ctx,18*3), dip2px(ctx,18*3), false);
		}
		if(sneakOnBM == null){
			decodedOn64 = android.util.Base64.decode(sneakon64, 0);
			sneakOnBM = android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeByteArray(decodedOn64, 0, decodedOn64.length), dip2px(ctx,18*3), dip2px(ctx,18*3), false);
		}
		buttonImg.setImageBitmap(isSneaking ? sneakOnBM : sneakOffBM);
		buttonImg.setOnClickListener(new android.view.View.OnClickListener({
			onClick: function(viewarg) {
				switchSneaking();
				if(isSneaking){
					viewarg.setImageBitmap(sneakOnBM);
				}else{
					viewarg.setImageBitmap(sneakOffBM);
				}
			}
		}));
		buttonImg.setLayoutParams(layoutParams);
		buttonImg.setImageAlpha(125);
		layout.addView(buttonImg);
		
		btnWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 48), dip2px(ctx, 48));
		btnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		var flags;
		var bx = 100;
		var by = 300;
		flags = android.view.Gravity.RIGHT;
		btnWindow.showAtLocation(ctx.getWindow().getDecorView(), flags, bx, by);
	}}));
}

function leaveGame(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		if(btnWindow != null){
			btnWindow.dismiss();
			btnWindow = null;
		}
	}}));
}