if(typeof MPoint!="undefined" && typeof MPoint.prototype.getPid=="undefined")
{
	MPoint.prototype.getPid = function (){
		return this.pid;
	}
}

function mapbar_send_loadjq (callback) {
	if (typeof jQuery == "undefined") {
		/** 
		 * @description 继承
		 * @function
		 * @param {Object} destination 
		 * @param {Object} source 
		 * @return {Object}
		 */
		var _extend = function(destination, source) {
			for (var property in source) {destination[property] = source[property];}
			return destination;
		};
		/** 
		 * @description 创建一个Class
		 * @function
		 * @return {Function}
		 */
		var _createClass = function() {return function() {this.initialize.apply(this, arguments);}};
		/**
		 * jsLoader base
		 *
		 */
		var Transfer = {};
		Transfer.Base = function() {};
		Transfer.Base.prototype = {
			setOptions : function(options) {
				if(typeof options != "object"){
					options = {};
				}
				this.options = {
					bCache : options.bCache || false,
					id : options.id || "scriptTemp",
					onfailure : options.onfailure || function(){},
					oncomplate : options.oncomplate || function(){}
				};
			}
		};
		
		/** 
		 * @description 拉取远程js类
		 * @constructor 构造器
		 * @param {String} url js文件的url
		 * @param {Map} [options={}] 请求参数
		 *              .[id="scriptTemp"] {String} 创建script标签的id属性
		 *              .[bCache=false] {Boolean} 是否启用缓存
		 *              .onfailure {Function} 失败时执行的函数
		 *              .oncomplate {Function} 成功时执行的函数
		 */
		Transfer.Request = _createClass();
		Transfer.Request.prototype = _extend(new Transfer.Base(), {
			initialize : function(url, options) {
				this.setOptions(options);
				this.request(url);
			},
			request : function(url) {
				this.url = url;
				this.bCache = this.options.bCache;
				this.id = this.options.id;
				this.oncomplate = this.options.oncomplate;
				this.onfailure = this.options.onfailure;
				this.symbol = "?";
				if (this.url.indexOf("?") != -1) {
					this.symbol = "&";
				}
				var head = document.getElementsByTagName("head")[0];
				var sT = document.getElementById(this.id);
				if (sT && sT.src && sT.src == this.url) {
					this.oncomplate();
					return;
				}
				if (sT) {
					sT.parentNode.removeChild(sT);
				}
				var s = document.createElement("script");
				head.appendChild(s);
				s.setAttribute("language", "javascript");
				s.setAttribute("type", "text/javascript");
				s.setAttribute("id", this.id);
				s.setAttribute("src", (this.bCache && this.bCache == true) ? this.url + this.symbol + Math.random() : this.url);
				var self = this;
				s.onload = s.onreadystatechange = function() {
					if (typeof ActiveXObject!="undefined") {
						if(s.readyState && s.readyState == "loaded") {
							self.oncomplate();
						}
						if(s.readyState && s.readyState == "complete") {
							return;
						}
					} else {
						self.oncomplate();
					}
				};
				s.onerror = function() { 
					//ie not work
					if(s && s.parentNode) {
						s.parentNode.removeChild(s);
					}
					self.onfailure();
					throw new Error("connect faild,please try later;");
				};
			 }
		});
		/****jsLoader end****/
		
		new Transfer.Request("http://api.mapbar.com/share/jquery/jquery-1.2.6.pack.js", {
			oncomplate : function(){
				callback();
				jQuery.noConflict();
			}
		});
	} else {
		callback();
	}
};
function mapbar_send_init () {
	if (typeof mapbar == "undefined" || typeof mapbar.object == "undefined") {
		eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0-9f-o]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0(7 4.2=="h"){4.2={}}0(7 4.2.8=="h"){4.2.8={}}(3(e){1.9(e,{createClass:3(c,a){f b=7 c=="3"?1.9({},c.i):c;f d=3(){0(1.g(5.6)){5.6.j(5,k)}l 0(1.g(d.6)){d.m.6.j(5,k)}};d.m=b;1.9(d.i,b,a);n d},funcToArray:3(c,a){f b=c||new o();0(a){0(a instanceof o){b=b.concact(a)}l 0(1.g(a)){b.push(a)}}n b}})})(2.8);',[],25,'if|jQuery|mapbar|function|window|this|init|typeof|object|extend||||||var|isFunction|undefined|prototype|apply|arguments|else|_super|return|Array'.split('|'),0,{}));
	}
	if(typeof window.mapbar == "undefined"){
		window.mapbar = {};
	}

	if(typeof window.mapbar.ui == "undefined"){
		window.mapbar.ui = {};
	}
	/**
	 * @fileOverview 灯箱效果组件
	 * @import jQuery.js
	 * @author xuanwq 
	 * @revision 1.0
	 */
	(function(package){
		var Mask = mapbar.object.createClass(null, {
			dom : null,
			color : "#FF0000",
			opacity : 0.5,
			init : function () {
				arg0 = arguments[0] || {};
				jQuery.extend(this, {
					color : arg0.color || this.color,
					opacity : arg0.opacity || this.opacity
				});
				
				this._createDiv();
				this.setColor(this.color);
				this.setOpacity(this.opacity);
				this.adjust();
				this._regWinResize();
			},
			_createDiv : function () {
				var dom = jQuery("<div/>").css({"position":"absolute","width":"100%","left":"0","top":"0","z-index":"10"});
				dom.appendTo(document.body);
				this.dom = dom;
			},
			_regWinResize : function () {
				var _this = this;
				jQuery(window).resize(function(){
					_this.adjust();
				});
			},
			adjust : function () {
				this.dom.height(jQuery(document).height());
			},
			setColor : function (color) {
				this.color = color;
				this.dom.css("background", this.color);
			},
			setOpacity : function (opacity) {
				this.opacity = opacity;
				this.dom.css("opacity", this.opacity);
			},
			removeDom : function () {
				this.dom.remove();	
			}
		});
		
		var LightBox = mapbar.object.createClass(null, {
			mask : null,
			dom  : null,
			messageContainer : null,
			closeDom : null, // 创建删除dom
			flag : 0, // 0 代表渐渐显示， 1代表没有渐渐效果，直接显示。
			className : null,
			messageBoxContent : null,
			init : function (arg0) {
				jQuery.extend(this, {
					mask : arg0.mask || new Mask(),
					flag : arg0.flag || this.flag,
					className : arg0.className || this.className,
					messageBoxContent : arg0.messageBoxContent || this.messageBoxContent
				});
				this._createDiv();
				this.setContent(this.messageBoxContent);
				this.setclassName(this.className);
				this.setScroll();
				this.setResize();
				this.setPosition();
				//this.slowlyShow(this.flag);
			},
			_createDiv : function () {
				var dom	= jQuery("<div/>").css({"position":"absolute","height":"403px","background":"#FFFFFF","position":"absolute","z-index":"100"}).hide();
				dom.appendTo(document.body);
				this.dom = dom;
				var _parentObj = this.mask.dom;			
			},
			slowlyShow : function (flag) {
				var _this = this;
				if(flag == 0){
					this.dom.fadeIn(300);
				}
			},
			setclassName : function (className) {
				this.className = className ;
				this.dom.addClass(className);
			},
	
			setContent : function (messageBoxContent) {
				var _parentObj = this.mask.dom;	
				var showOpenWindow = this.dom;
				this.messageBoxContent = messageBoxContent;
				var closeDom = jQuery("<span class='closeOpenWin'><a href='javascript:void(0)' class='closeW'>关闭此窗口</a></span>");
				jQuery(messageBoxContent).show().appendTo(this.dom);
				closeDom.appendTo(this.dom);
				closeDom.find(".closeW").css({"text-indent":"-5000px","background":"url(http://img.mapbar.com/web/send/sms_picT.png) no-repeat -424px -263px","height":"19px","width":"19px","position":"absolute","right":"18px","top":"12px","overflow":"hidden"});
				closeDom.find(".closeW").hover(
											function(){
												jQuery(this).css({"text-indent":"-5000px","background":"url(http://img.mapbar.com/web/send/sms_picT.png) no-repeat -424px -282px","height":"19px","width":"19px","position":"absolute","right":"18px","top":"12px","overflow":"hidden"});return false;
											},
											function(){
												jQuery(this).css({"text-indent":"-5000px","background":"url(http://img.mapbar.com/web/send/sms_picT.png) no-repeat -424px -263px","height":"19px","width":"19px","position":"absolute","right":"18px","top":"12px","overflow":"hidden"});return false;
											});
					function closeWindowDom () {
						jQuery("iframe", showOpenWindow).remove();
						showOpenWindow.remove();
						_parentObj.remove();
					};
					closeDom.click(closeWindowDom);
					_parentObj.click(closeWindowDom);
		
			},
			setScroll : function () {
				var _this = this ;
				jQuery(window).scroll(function(){
						_this.setPosition(true);   

					}
				);
			},
			setResize : function () {
				var _this = this ;
				jQuery(window).resize(function(){
						_this.setPosition(true);							   
					}
				);
			},
			setPosition : function (isAnimate) {
				var scrolltop = ((typeof document.documentElement.scrollTop)=='undefined' ? 0 : document.documentElement.scrollTop);
				var disleft = (jQuery(window).width() - this.dom.width()) / 2;
				var distop = (jQuery(window).height() + scrolltop) - this.dom.height() -  (jQuery(window).height() - this.dom.height()) /2;
				if (isAnimate) {
					this.dom.stop().animate({left: disleft, top: distop},500);
				} else {
					this.dom.css({"left": disleft, "top": distop});
				}
			}
		});
		package.Mask = Mask;
		package.LightBox = LightBox;
	})(mapbar.ui);
};
/**
*	version:1.0
*	author:dengjq
*	email:dengjq@mapbar.com
*	date:2008-12-01
*
*/
function sendTools(options) {
	function sendFunc (options) {
		var sendObj = this;
		this.maplet = options.maplet||maplet;
		
		this.config = {
			url:'',
			split:'-',
			format:'jpeg',
			size:"224x198"
		};
		
		if (typeof this.maplet != "undefined") {
			this.config.size=this.maplet.width+"x"+this.maplet.height;
		}
		
		//openWin style 发送的窗口的宽、高及标题
		this.winWidth = options.winWidth||588;	
		this.winHeight = options.winHeight||403;
		this.winTitle = options.winTitle||"Mapbar发送";
		this.data = options.data||[];//发送数据数组
		this.modetype = options.modetype||"0"; //模块标识
		if(this.modetype == 1){
			maplet.setAutoZoom();
		}
		this.sendposition = options.sendposition||"mapbar-localsearch-list"; //点击发送具体位置
		this.openType = options.openType || "showDiv"; // showDiv默认打开div  showWin 为打开新窗口
		this.xml = null;//xml数据
		this.tempurl = "";//存储临时URL
		//open new Window
		this.openWin = function(){
			var win = window.open('about:blank',this.winTitle,"height="+this.winHeight+",width="+this.winWidth+",top="+(screen.height-this.winHeight)/2+",left="+(screen.width-this.winWidth)/2+",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
			if(win)win.focus();
		};
		
		this.getContextPath = function(){
			var local= window.location;
			return local.protocol+"//"+local.hostname+(local.port?":"+local.port:"");
		};		
		//this.config.url="http://192.168.1.254:8080/send/send.do";
		this.config.url="http://send.sms.mapbar.com/send/send.do";
		
		//filte HTML tag
		this.filterHTML = function(html){
			html = html.replace(/<\/?[^>]*>/g,''); //去除HTML tag
			html = html.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
			html = html.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
			html = html.replace(/\r\n|\r|\n/g,"&#13;"); //替换换行符
			return html;
		};
		
		/******************** 截图部分开始 ********************/
		this.repColor = function(color){
			return color.replace("#","");
		};
		this.contain = function(str1,str2){
			if(str1.indexOf(str2)!=-1)return true;
			else return false;
		};
		this.getUrl = function(center,zoom,markers,polylines,polygons,snapObj){
			var url = SNAPSHOT_SERVER;
			url += "?format="+(snapObj.format||this.config.format)+"&size="+(snapObj.size||this.config.size)+"&zoom="+(snapObj.zoom||zoom)+"&center="+center+"&codeform=1";
			
			if(typeof snapObj.mode != 'undefined'){
				if(this.contain(snapObj.mode,"poi"))url += "&markers="+markers;
				if(this.contain(snapObj.mode,"line"))url += "&polylines="+polylines;
				if(this.contain(snapObj.mode,"area"))url += "&polygons="+polygons;
			}else{
				url += "&markers="+markers+"&polylines="+polylines+"&polygons="+polygons;
			}
			
			return url;
		};
		this.getSnapImage = function(snapObj){
			
			var SHORTURL = "";
			if(typeof snapObj != 'undefined'){
				
				var center = this.maplet.getCenter();//中心点经纬度
				var zoom = this.maplet.getZoomLevel();//缩放级别
				
				//取点信息
				var tempMarker = "";
				var markers = this.maplet.getMarkers();
				if(markers !=null && markers.length>0){
					for(var i=0;i<markers.length;i++){
						var labelLen = markers.length - 1;
						var latlon = markers[i].pt.getPid();
						var label = (markers[i].label !=null ) ? markers[i].label.label : "";
						var labelClass = jQuery(label).attr("class");
						if(jQuery(label).attr("lbltext") != undefined) {							
							if(jQuery(".stationBox2").parent().css("display") == "block" && i == 0){
								label = jQuery(label).attr("lbltext");
							}else if(jQuery(".stationBox2").parent().css("display") == "block" && i == labelLen){
								label = jQuery(label).attr("lbltext");							
							}else if(jQuery(".stationBox").parent().css("display") == "none"){
								label = "";	
							} else {
								label = jQuery(label).attr("lbltext");
							}
							
							label = label.replace(/\s/gi,"");//替换空格
						}
						var icon = markers[i].icon.getImgUrl();
						if(labelClass == "stationBox"){
							tempMarker += latlon+","+encodeURIComponent(label)+",0,0,0000FF,12,"+icon;
						}else if(labelClass == "stationBox2"){
							tempMarker += latlon+","+encodeURIComponent(label)+",40,0,0000FF,12,"+icon;	
						}else{
							tempMarker += latlon+","+encodeURIComponent(label)+",0,0,0000FF,12,"+icon;
						}
						if(i<markers.length-1)tempMarker += "|";
					}
				}
				
				//取线面信息
				var tempLines = "";
				var tempGons = "";
				var lineinfo = "";
				var goninfo = "";
				var linepointArr = [];
				var s = [];
				var gonspointArr = [];
				var polylines = this.maplet.getPolylines();
				try{
				if(polylines!=null && polylines.length>0){
					for(var i=0;i<polylines.length;i++){
						var brush = polylines[i].brush;
						var fill = brush.fill; //线 or 面
						var color = brush.color;
						var bgcolor = brush.bgcolor;
						var stroke = brush.stroke;
						var style = brush.style;
						var bgtransparency= brush.bgtransparency/100;
						var transparency= brush.transparency/100;
						linepointArr = [];
						if(fill){//面
							var _gonsCount = 0;
							for(var j=0;j<polylines[i].pts.length;j++){
								//tempGons += polylines[i].pts[j].pid;
								//tempGons += ",";
								gonspointArr.push(polylines[i].pts[j].getPid()+",");
								_gonsCount++;
							}
							tempGons = gonspointArr.join("");
							if(_gonsCount>0)tempGons += "|";
							goninfo = ";"+this.repColor(bgcolor)+";"+bgtransparency+";"+this.repColor(color)+";"+stroke+";"+style+";"+transparency+";";
						}else{//线
							var _lineCount = 0;						
							for(var j=0;j<polylines[i].pts.length;j++){
								//tempLines += polylines[i].pts[j].pid;
								//tempLines += ",";
								linepointArr.push(polylines[i].pts[j].getPid());
								_lineCount++;
							}
							lineinfo = ";"+this.repColor(color)+";"+stroke+";"+style+";"+transparency+";";
							s.push(linepointArr.join(",")+lineinfo);
							//linepointArr.push(lineinfo);
							//s.push(linepointArr.join(","));
							//if(_lineCount>0)tempLines += "|";
							//lineinfo = ";"+this.repColor(color)+";"+stroke+";"+style+";"+transparency+";";
						}
					}
					tempLines = s.join("|");
					tempGons = tempGons.substring(0,tempGons.length-1);
					//tempLines = tempLines.substring(0,tempLines.length-1);
					tempGons += goninfo;
					//tempLines += lineinfo;
				}
				}catch(e){}
				tempLines = tempLines.substring(0,tempLines.length-1);
				
				//处理多张图片，仅截图中心不同。
				var point = [];
				if(typeof snapObj.center != 'undefined')point=snapObj.center.split(",");
				if(point.length>0){
					for(var i=0;i<point.length;i++){
						SHORTURL += this.getUrl(point[i],zoom,tempMarker,tempLines,tempGons,snapObj);
						if(i<point.length-1)SHORTURL += this.config.split;
					}
				}else{
					SHORTURL += this.getUrl(center,zoom,tempMarker,tempLines,tempGons,snapObj);
				}
			}
			this.tempurl = SHORTURL;
			return this.tempurl;
		};
		
		//全屏截图，由于会产生回调，暂时不用此方法。
		/**
		this.getFullSnapUrl = function(){
			MEvent.addListener(this.maplet,"snapshot",this.snapCbk );
			var options = {
				  mode: "fullscreen",
				  format: this.config.format,    
				  depth: 0,
				  processMode: "event"
			 };
			this.maplet.snapshotBox.snapshot(options);
		}
		this.snapCbk = function(url){
			sendObj.tempurl = url;
		}
		*/
		
		/******************** 截图部分结束 ********************/
		//Cdata
		this.addCdataTag = function(str){
			return "<![CDATA["+str+"]]>";
		};
		
		//get snap url by mode and snap para
		this.getSnapUrlByMode = function(mode,obj){
			if(mode == 'no')return "";
			if(typeof this.maplet != "undefined"){
				if(mode == 'full'){
					var obj = {size:this.config.size};
					this.getSnapImage(obj);
				}
				if(mode == 'auto'){
					var obj={size:"640x480"};
					this.getSnapImage(obj);
				}
				//if(mode == ''){ ... }
			}
			return this.tempurl;
		};
		
		//spell xml data
		this.getXml = function(){
			this.xml = [];
			this.xml.push("<data modetype='"+this.modetype+"' sendposition='"+this.sendposition+"'>");
			
			if(this.data.length>0){
				for(var i=0;i<this.data.length;i++){
					var dataItem = data[i];
					var type = dataItem.type;
					var title = dataItem.title||"";
					var content = (dataItem.content||"").replace(/\r\n/g,"");
					var snapurl = dataItem.snapurl||"";
					var pageurl = dataItem.pageurl||document.location.href;
					var snapmode = dataItem.snapmode||"no"; //截图模式 no:不截图; full:全屏; auto:调用接口截图; 
					var userid = dataItem.userid||"";
					var msgid = dataItem.msgid||"";	//不为空则为手动标注处理功能
					var snap = dataItem.snap||{};
					var pos = dataItem.pos||"";
					var address = dataItem.address||"";
					var phoneNumber = dataItem.phoneNumber||"";
					var imgHrefUrl = dataItem.imgHrefUrl ||"";
					var mailContent= dataItem.mailContent || "";
					var linkUrl = dataItem.linkUrl || "";
					
					title = this.filterHTML(title); 
					//content = this.filterHTML(content);
					if(snapurl=="")snapurl = this.getSnapUrlByMode(snapmode,snap);
					this.xml.push("<item>");
					this.xml.push("<type>"+type+"</type>");
					this.xml.push("<title>"+this.addCdataTag(title)+"</title>");
					
					this.xml.push("<content>"+this.addCdataTag(content)+"</content>");
					this.xml.push("<snapurl>"+this.addCdataTag(snapurl)+"</snapurl>");
					this.xml.push("<pageurl>"+this.addCdataTag(pageurl)+"</pageurl>");
					this.xml.push("<userid>"+userid+"</userid>");
					this.xml.push("<msgid>"+msgid+"</msgid>");
					this.xml.push("<linkUrl>"+this.addCdataTag(linkUrl)+"</linkUrl>");
					this.xml.push("<mailContent>"+ this.addCdataTag(mailContent) +"</mailContent>");
					this.xml.push("<imgHrefUrl>"+ this.addCdataTag(imgHrefUrl)+"</imgHrefUrl>");
					this.xml.push("<pos>"+pos+"</pos>");
					this.xml.push("<address>"+address+"</address>");
					this.xml.push("<phoneNumber>"+phoneNumber+"</phoneNumber>");
					this.xml.push("</item>");
				}
			}
			
			this.xml.push("</data>");
			//alert("xml"+xml)
			return;
		};
		
		
		//基本数据 Form
		this.createForm = function(){
			var form=document.getElementById('_sendForm');
			if(!form){
				 form=document.createElement("form");
				 form.id=form.name="_sendForm";
				 form.method="post";
				 form.action=this.config.url+"?method=show";
				 form.innerHTML='<input type="hidden" name="xml" value="" />'+
								'<input type="hidden" name="encode" value="utf-8" />';
				 document.body.appendChild(form);
			}
			if(this.openType == "showDiv") {
				form.target="mapbarShowWindowDiv";
			} else {
				form.target=this.winTitle;
			}
			form.xml.value=this.xml.join("");
			//alert("xml>>"+xml)
			return form;
		};
		
		//以弹出div的形式发送
		this.createLightBox = function(){
			var ifr = "<iframe name='mapbarShowWindowDiv' src='' width='587' height='403' frameborder='0' scrolling='no' style='display:none;'></iframe>";
			var pmask = new mapbar.ui.Mask({opacity:0.8,color:"#cccccc"});
			return new mapbar.ui.LightBox({mask:pmask,className:"openshow",messageBoxContent:ifr});
		};
		
		//发送
		this.send = function(){
			this.getXml();
			var form = this.createForm();
			if(this.openType == "showDiv") {
				var lightBox = this.createLightBox();
				form.submit();
				setTimeout(function(){lightBox.slowlyShow(0);}, 0);
			} else {
				this.openWin();	
				form.submit();
			}
		};
		this.send();
	};
	mapbar_send_loadjq(
		function () {
			mapbar_send_init();
			sendFunc(options);
		}
	);
}