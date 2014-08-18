function InfoWindow(poi) {
  this.poi = (poi) ? poi : {cityName:"北京市", name:"", phone:"", latLon:""};
  this.icon = {name:"standard", image:"http://r.mapbar.com/searchbox/publish/icon/biaozhu.gif"};
  this.win = {cid:"",title:"standard", style:"standard", template:"standard",userTid:"", url:"http://www.mapbar.com/"};
}
// icon
InfoWindow.prototype.setName = function(name) {
  this.icon["name"] = name;
}
InfoWindow.prototype.setImage = function(url) {
	if ("standard" != url) {
  	this.icon["image"] = url;
 	}
}
InfoWindow.prototype.getImage = function(url) {
  	return this.icon["image"];
}
InfoWindow.prototype.trimText = function(text, length, subfix){
  if(text.length>length) {
    return text.substring(0, length) + subfix;
  } else {
    return text;
	}
}
InfoWindow.prototype.getIconText = function() {
	//if (this.icon["name"] == "standard") {
  	//return "<span style='display:block;height:16px!important;visibility:visible;z-index:0;white-space:nowrap;'><img src=\"${icon.image}\"/><span style='background-color:#FFFFCC;border:1px solid #FF0000;color:#FF0000;font-size:12px;font-weight:bold;height:16px;'>${trimText(poi.name, 14, '...')}</span></span>".process(this);
 // } else {
  	return "<img src=\""+this.icon["image"]+"\">";
 // } 
}

// window
InfoWindow.prototype.setCid = function(c) {
  this.win["cid"] = c;
}
InfoWindow.prototype.setTitle = function(p) {
  this.win["title"] = p;
}
InfoWindow.prototype.setStyle = function(s) {
  this.win["style"] = s;
}
InfoWindow.prototype.setTemplate = function(t) {
  this.win["template"] = t;
}

InfoWindow.prototype.setUserTid = function(u) {
  this.win["userTid"] = u;
}

InfoWindow.prototype.setFunction = function(func) {
	if ("none" == func) {
	  this.win["url"] = func;
  } else if ("standard" != func) {
  	this.win["url"] = func;
	}
}
InfoWindow.prototype.getWinText = function() {
  var htmlStr = "";
  if ("standard" == this.win["template"]) {
  	htmlStr += "<a style='font-size:12px;cursor:default;color:#000'>地址："+this.poi["address"]+"</a><br>";
    htmlStr += "<a style='font-size:12px;cursor:default;color:#000'>电话："+this.poi["phone"]+"</a><br><br>";
  } else {
  	htmlStr += this.win["template"].process(this)+"<br>";
  }
  if ("none" != this.win["url"]) {
	  htmlStr += "<div id='tipdiv' style='font-size:12px;color:#000;width:200px;height:50px'><p style='margin:0 0 10px;'><a href='javascript:;' onclick='showTipDiv(\"tipneardiv\",\"tipdiv\");'>查找周边</a></p>交通指南:<a href='javascript:;' onclick='showTipDiv(\"tipfromDiv\",\"tipdiv\");'>从这里出发</a> - <a href='javascript:;' onclick='showTipDiv(\"tiptoDiv\",\"tipdiv\");'>到这里来</a></div><div id='tipneardiv' style='display:none;width:200px;height:50px'>查找周边: 如:银行,餐馆 <br><form name=nearbyform><input type='text' id='infoWindowPoitype' name='poitype' onkeypress='if (event.keyCode==13) {inforwindowNearSubmit(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\",\""+this.poi["name"]+"\", this.form.elements[\"infoWindowPoitype\"].value);return false;}'/><input name='submit' type='button' value='搜索' onclick='inforwindowNearSubmit(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\", \""+this.poi["name"]+"\", this.form.elements[\"infoWindowPoitype\"].value);return false;'></form></br><a href='javascript:;' onclick='showTipDiv(\"tipdiv\",\"tipneardiv\")'><<上一步</a></div> <div id='tipfromDiv' style='display:none;width:200px;height:50px'>交通查询:从这里出发 - <a href='javascript:;' onclick='showTipDiv(\"tiptoDiv\",\"tipfromDiv\");'>到这里来</a><br><form name=fromform>目的地:<input type='text'id='inforwindowMudi' name='searchmudi' onkeypress='if (event.keyCode==13) {inforwindowMudiFunBus(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\",\""+this.poi["name"]+"\",this.form.elements[\"inforwindowMudi\"].value);return false;}'/><br><a href='javascript:;' onclick='showTipDiv(\"tipdiv\",\"tipfromDiv\")'><<上一步 </a><input name='button' type='button' value='查公交' onclick='inforwindowMudiFunBus(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\",\""+this.poi["name"]+"\",this.form.elements[\"inforwindowMudi\"].value)'><input name='button' type='button' value='查驾车'onclick='inforwindowMudiFunDriver(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\",\""+this.poi["name"]+"\",this.form.elements[\"inforwindowMudi\"].value)'></form></div><div id='tiptoDiv' style='display:none;width:200px;height:50px'>交通查询:<a href='javascript:;' onclick='showTipDiv(\"tipfromDiv\",\"tiptoDiv\");'>从这里出发</a> - 到这里来<br><form name=toform>出发地:<input type='text' id='inforwindowChuFa' onkeypress='if (event.keyCode==13) {inforwindowChuFaFunBus(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\",\""+this.poi["name"]+"\",this.form.elements[\"inforwindowChuFa\"].value);return false;}'/><br><a href='javascript:;' onclick='showTipDiv(\"tipdiv\",\"tiptoDiv\")'><<上一步 </a><input name='button' type='button' value='查公交'onclick='inforwindowChuFaFunBus(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\",\""+this.poi["name"]+"\",this.form.elements[\"inforwindowChuFa\"].value)')'><input name='button' type='button' value='查驾车'onclick='inforwindowChuFaFunDriver(\""+this.win["url"]+"\",\""+this.win["cid"]+"\",\""+this.win["userTid"]+"\",\""+this.poi["cityName"]+"\",\""+this.poi["latLon"]+"\",\""+this.poi["name"]+"\",this.form.elements[\"inforwindowChuFa\"].value)')'></form></div><div id='tipphotoDiv' style='display:none;width:200px;height:50px'>发送到:手机号码  此信息收费1角 <br><input type='text' name='searchmudi'/><br><a href='javascript:;' onclick='showTipDiv(\"tipdiv\",\"tipphotoDiv\")'><<上一步 </a><input name='button' type='button' value='取消'><input name='button' type='button' value='发送'></div></div>";//this.getData().process(this);
  }
  return htmlStr;
}
InfoWindow.prototype.getData = function(){
	if (!this.data) {
		this.data = getUrlText("http://r.mapbar.com/searchbox/publish/js/infowindow0.js");
  }	
	return this.data;
}	

// marker
InfoWindow.prototype.getMMarker = function() {
	var mpit=new MPoint(this.poi["latLon"]);
	var micn=new MIcon(this.icon["image"],20,20);
	var mlabel=new MLabel(this.trimText(this.poi["name"], 14, '...'));
	var miww=new MInfoWindow((this.win["title"]=="none")?"":this.trimText(this.poi["name"], 12, '...'), this.getWinText());
	var mmark=new MMarker(mpit, micn, ((this.win["style"]=="none")? null: miww),(this.icon["name"] == "standard"?mlabel:null));
	miww.setZMBtnVisible(false);
	return mmark; 	
}


// global
function inforwindowNearSubmit(url, cid, userTid, cityName, latLon, name, keyword){
	if(keyword==null || keyword.trim()==""){
		alert("查询值不能为空！");
		return false;
	}
	if(url.indexOf("www.mapbar.com")!=-1 || url.indexOf("ditu.mapbar.com")!=-1){
		inforwindowOpen("http://www.mapbar.com/search/#c="+encodeURIComponent(cityName)+"&cll="+latLon+"&cn="+encodeURIComponent(name)+"&k="+encodeURIComponent(keyword)+"&wf=ls");
	}else{
		if(url.indexOf("searchbox.mapbar.com")!=-1){
			inforwindowOpen(url+"?range=1000&CID="+cid+"&city="+encodeURIComponent(cityName)+"&strlatlon="+latLon+"&name="+encodeURIComponent(name)+"&poitype="+encodeURIComponent(keyword));

		}else{
			inforwindowOpen(url+"?range=1000&CID="+cid+"&tid="+userTid+"&city="+encodeURIComponent(cityName)+"&strlatlon="+latLon+"&name="+encodeURIComponent(name)+"&poitype="+encodeURIComponent(keyword));
		}
	}
}
function inforwindowMudiFunBus(url, cid, userTid, cityName, latLon, name, keyword){
	if(keyword==null || keyword.trim()==""){
		alert("目的地不能为空！");
		return false;
	}
	if(url.indexOf("www.mapbar.com")!=-1 || url.indexOf("ditu.mapbar.com")!=-1 || url.indexOf("bus.mapbar.com")!=-1){
		inforwindowOpen("http://www.mapbar.com/search/#ac=bus&on="+latLon+"&os="+encodeURIComponent(name)+"&dn="+encodeURIComponent(keyword)+"&mc="+encodeURIComponent(cityName)+"&st=b&qbus=1&wf=bs");
	}else{
		if(url.indexOf("searchbox.mapbar.com")!=-1){
			inforwindowOpen(url+"?action=buslist&CID="+cid+"&city="+encodeURIComponent(cityName)+"&origLatLon="+latLon+"&origName="+encodeURIComponent(name)+"&destName="+encodeURIComponent(keyword));
		}else{
			inforwindowOpen(url+"?action=buslist&CID="+cid+"&tid="+userTid+"&city="+encodeURIComponent(cityName)+"&origLatLon="+latLon+"&origName="+encodeURIComponent(name)+"&destName="+encodeURIComponent(keyword));
		}
	}
}
function inforwindowMudiFunDriver(url, cid, userTid, cityName, latLon, name, keyword){
	if(keyword==null || keyword.trim()==""){
		alert("目的地不能为空！");
		return false;
	}
	if(url.indexOf("www.mapbar.com")!=-1 || url.indexOf("ditu.mapbar.com")!=-1 || url.indexOf("nav.mapbar.com")!=-1){
		inforwindowOpen("http://www.mapbar.com/search/#ac=nav&on="+latLon+"&os="+encodeURIComponent(name)+"&dn="+encodeURIComponent(keyword)+"&oc="+encodeURIComponent(cityName)+"&dc="+encodeURIComponent(cityName)+"&st=n&qnav=1&wf=navs");
	}else{
		if(url.indexOf("searchbox.mapbar.com")!=-1){
			inforwindowOpen(url+"?action=drivelist&CID="+cid+"&origCity="+encodeURIComponent(cityName)+"&origLatLon="+latLon+"&origName="+encodeURIComponent(name)+"&destCity="+encodeURIComponent(cityName)+"&destName="+encodeURIComponent(keyword));
		}else{
			inforwindowOpen(url+"?action=drivelist&CID="+cid+"&tid="+userTid+"&origCity="+encodeURIComponent(cityName)+"&origLatLon="+latLon+"&origName="+encodeURIComponent(name)+"&destCity="+encodeURIComponent(cityName)+"&destName="+encodeURIComponent(keyword));
		}
	}
}
function inforwindowChuFaFunBus(url, cid, userTid, cityName, latLon, name, keyword){
	if(keyword==null || keyword.trim()==""){
		alert("目的地不能为空！");
		return false;
	}
	if(url.indexOf("www.mapbar.com")!=-1 || url.indexOf("ditu.mapbar.com")!=-1 || url.indexOf("bus.mapbar.com")!=-1){
		inforwindowOpen("http://www.mapbar.com/search/#ac=bus&dn="+latLon+"&on="+encodeURIComponent(keyword)+"&ds="+encodeURIComponent(name)+"&mc="+encodeURIComponent(cityName)+"&st=b&qbus=1&wf=bs");
	}else{
		if(url.indexOf("searchbox.mapbar.com")!=-1){
			inforwindowOpen(url+"?action=buslist&CID="+cid+"&city="+encodeURIComponent(cityName)+"&destLatLon="+latLon+"&destName="+encodeURIComponent(name)+"&origName="+encodeURIComponent(keyword));
		}else{
			inforwindowOpen(url+"?action=buslist&CID="+cid+"&tid="+userTid+"&city="+encodeURIComponent(cityName)+"&destLatLon="+latLon+"&destName="+encodeURIComponent(name)+"&origName="+encodeURIComponent(keyword));
		}

	}
}
function inforwindowChuFaFunDriver(url, cid, userTid, cityName, latLon, name, keyword){
	if(keyword==null || keyword.trim()==""){
		alert("目的地不能为空！");
		return false;
	}
	if(url.indexOf("www.mapbar.com")!=-1 || url.indexOf("ditu.mapbar.com")!=-1 || url.indexOf("nav.mapbar.com")!=-1){
		inforwindowOpen("http://www.mapbar.com/search/#ac=nav&dn="+latLon+"&on="+encodeURIComponent(keyword)+"&ds="+encodeURIComponent(name)+"&oc="+encodeURIComponent(cityName)+"&dc="+encodeURIComponent(cityName)+"&st=n&qnav=1&wf=navs");
	}else{
		if(url.indexOf("searchbox.mapbar.com")!=-1){
			inforwindowOpen(url+"?action=drivelist&CID="+cid+"&destCity="+encodeURIComponent(cityName)+"&destLatLon="+latLon+"&destName="+encodeURIComponent(name)+"&origCity="+encodeURIComponent(cityName)+"&origName="+encodeURIComponent(keyword));
		}else{
			inforwindowOpen(url+"?action=drivelist&CID="+cid+"&tid="+userTid+"&destCity="+encodeURIComponent(cityName)+"&destLatLon="+latLon+"&destName="+encodeURIComponent(name)+"&origCity="+encodeURIComponent(cityName)+"&origName="+encodeURIComponent(keyword));
		}
	}
}
function inforwindowOpen(url) {
	var winname = window.open(url, '_blank');
}
function showTipDiv(showDiv,hideDiv){
	if (showDiv) document.getElementById(hideDiv).style.display = "none";
	if (hideDiv) document.getElementById(showDiv).style.display = "";	
}
function getScriptUrl(name) {
	var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
	  if (scripts[i].src.indexOf(name)>=0) {
	     return  scripts[i].src;
	  }
	}
  return name;
}


