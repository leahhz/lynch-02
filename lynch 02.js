(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"lynch 02_atlas_1", frames: [[0,172,609,253],[611,340,609,253],[0,845,469,171],[1168,737,469,171],[852,910,469,171],[1323,910,469,171],[1639,755,13,12],[1639,737,22,16],[1794,974,176,170],[1773,0,216,218],[1773,220,113,107],[0,0,1195,170],[1781,557,214,214],[1639,773,133,131],[1794,773,201,199],[852,595,314,265],[471,911,282,215],[0,427,557,178],[1222,340,697,215],[1222,557,557,178],[1197,0,574,338],[559,595,291,314],[0,607,382,236]]},
		{name:"lynch 02_atlas_2", frames: [[0,1492,1188,228],[1282,416,420,721],[0,1925,1909,117],[0,0,996,559],[0,1285,1347,205],[0,1722,1331,201],[0,561,1280,360],[0,923,1280,360],[998,0,823,414]]},
		{name:"lynch 02_atlas_3", frames: [[0,519,1195,550],[0,1071,1195,550],[0,0,1280,517],[1282,0,665,970]]},
		{name:"lynch 02_atlas_4", frames: [[0,1214,1104,627],[0,648,1272,564],[0,0,1195,646]]},
		{name:"lynch 02_atlas_5", frames: [[0,1345,1210,649],[0,0,1134,713],[0,715,1280,628]]},
		{name:"lynch 02_atlas_6", frames: [[0,0,913,891],[0,893,1195,677]]},
		{name:"lynch 02_atlas_7", frames: [[0,673,1258,709],[0,0,1331,671]]},
		{name:"lynch 02_atlas_8", frames: [[0,0,913,1019],[0,1021,1347,687]]},
		{name:"lynch 02_atlas_9", frames: [[0,0,1466,642],[0,644,1466,642]]},
		{name:"lynch 02_atlas_10", frames: [[0,0,1026,1090],[0,1186,1227,840],[1028,0,934,1184]]},
		{name:"lynch 02_atlas_11", frames: [[0,0,1026,1090]]},
		{name:"lynch 02_atlas_12", frames: [[0,0,1026,1090]]},
		{name:"lynch 02_atlas_13", frames: [[0,882,1026,1091],[0,0,1854,880]]},
		{name:"lynch 02_atlas_14", frames: [[0,0,1232,1328]]},
		{name:"lynch 02_atlas_15", frames: [[0,0,1351,1634]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_52 = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["lynch 02_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["lynch 02_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["lynch 02_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["lynch 02_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["lynch 02_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["lynch 02_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["lynch 02_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["lynch 02_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["lynch 02_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["lynch 02_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["lynch 02_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["lynch 02_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["lynch 02_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["lynch 02_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["lynch 02_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["lynch 02_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["lynch 02_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["lynch 02_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["lynch 02_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["lynch 02_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["lynch 02_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["lynch 02_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.basicinfopagecaptionfinal = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bluedark = function() {
	this.initialize(img.bluedark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3484,2036);


(lib.bluelight = function() {
	this.initialize(img.bluelight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3540,2074);


(lib.colon = function() {
	this.initialize(img.colon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2166,2041);


(lib._double = function() {
	this.initialize(img._double);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3556,2108);


(lib.epcamtitle = function() {
	this.initialize(img.epcamtitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2532,1170);


(lib.femalebody = function() {
	this.initialize(img.femalebody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1564,2652);


(lib.mlh1 = function() {
	this.initialize(img.mlh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,1082);


(lib.more = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.msh2caption = function() {
	this.initialize(img.msh2caption);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4096,3072);


(lib.msh6caption = function() {
	this.initialize(ss["lynch 02_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ovaries = function() {
	this.initialize(img.ovaries);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4096,3072);


(lib.PMS2TITLE = function() {
	this.initialize(img.PMS2TITLE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2532,1170);


(lib.Screenshot20220705at115016PM = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot20220705at115052PM = function() {
	this.initialize(ss["lynch 02_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stomach = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.stomach03 = function() {
	this.initialize(ss["lynch 02_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sure_logohighres = function() {
	this.initialize(ss["lynch 02_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.unievrsitylogo = function() {
	this.initialize(ss["lynch 02_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.urinarytract1 = function() {
	this.initialize(ss["lynch 02_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.uterus = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.wholegut = function() {
	this.initialize(img.wholegut);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2166,2044);


(lib.图层2 = function() {
	this.initialize(img.图层2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,982,2460);


(lib.whitebackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhxxBBfMAAAiC9MDjjAAAMAAACC9g");
	this.shape.setTransform(728.2,419.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456.4,838.2);


(lib.wherepage_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhuzBP3MAAAiftMDdnAAAMAAACftg");
	this.shape.setTransform(709.15,511.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1418.3,1022.3);


(lib.where = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Where could you find out more?", "normal 400 30px 'Raleway'", "#000033");
	this.text.lineHeight = 43;
	this.text.lineWidth = 457;
	this.text.parent = this;
	this.text.setTransform(-68.45,-55.15);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_47();
	this.instance.setTransform(-11.8,-11.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_48();
	this.instance_1.setTransform(-11.8,-11.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-57.1,461,171.9);


(lib.what = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("what is it?", "normal 400 30px 'Raleway'", "#000033");
	this.text.lineHeight = 43;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(28.5,-46.25);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_27();
	this.instance_1.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_28();
	this.instance_2.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_29();
	this.instance_3.setTransform(-7.2,-7.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-48.2,234.5,125.8);


(lib.urinarytract = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.urinarytract1();
	this.instance.setTransform(0,0,0.3081,0.3906);

	this.instance_1 = new lib.CachedBmp_42();
	this.instance_1.setTransform(-3.7,25.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.3081,scaleY:0.3906,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.3424,scaleY:0.4341,x:-11,y:-21}}]},1).to({state:[{t:this.instance,p:{scaleX:0.3081,scaleY:0.3906,x:0,y:0}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.3081,scaleY:0.3906,x:0,y:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-21,227.7,421.1);


(lib.universitylogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.unievrsitylogo();
	this.instance.setTransform(0,0,0.1713,0.1713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219.3,88.6);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to 75%. This risk is below 2% in the general population.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 595;
	this.text.parent = this;
	this.text.setTransform(20,89.85);

	this.text_1 = new cjs.Text("EPCAM-FEMALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 629;
	this.text_1.parent = this;
	this.text_1.setTransform(316.45,14.3);

	this.instance = new lib.CachedBmp_78();
	this.instance.setTransform(8,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,633,351);


(lib.surelogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sure_logohighres();
	this.instance.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,82.9);


(lib.stomach_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stomach03();
	this.instance.setTransform(13.2,0,0.0996,0.0765,7.4738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1076,scaleY:0.0826,rotation:7.4583,x:8.8,y:-4.65},0).wait(1).to({scaleX:0.0996,scaleY:0.0765,rotation:7.4738,x:13.2,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.6,145.6,126);


(lib.q4answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch syndrome is diagnosed through genetic testing.", "37px 'Helvetica'");
	this.text.lineHeight = 44;
	this.text.lineWidth = 446;
	this.text.parent = this;
	this.text.setTransform(35.35,163.75);

	this.text_1 = new cjs.Text("How do I know if I have Lynch Syndrome?", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 496;
	this.text_1.parent = this;
	this.text_1.setTransform(250.05,13.85);

	this.instance = new lib.CachedBmp_77();
	this.instance.setTransform(-2.7,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-10,513,545);


(lib.q4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("    How do I know if I have Lynch Syndrome?", "normal 400 35px 'Raleway'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 781;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAeIgQgPIgEgPQACgGAEgHQADgGAFgFQADgDADAAQAHgCAHAAIAKAAIAOAPIAGAOIgGAPIgOAPIgYAAg");
	this.shape.setTransform(19.6,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("Eg4pgErMBxTAAAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAMhxTAAAQh8AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB8AAg");
	this.shape_1.setTransform(392.575,29.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg4pAEsQh8gBhYhXQhYhYAAh8QAAh7BYhYQBYhXB8gBMBxTAAAQB8ABBYBXQBYBYAAB7QAAB8hYBYQhYBXh8ABg");
	this.shape_2.setTransform(392.575,29.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 37px 'Raleway'",color:"#000033",lineHeight:52.5}}]},1).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,787.2,61.9);


(lib.q3answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch Syndrome is an autosomal dominant condition. This means that if you have it, your children have a 50% chance of inheriting it from you. ", "normal 400 37px 'Raleway'");
	this.text.lineHeight = 53;
	this.text.lineWidth = 502;
	this.text.parent = this;
	this.text.setTransform(20,157.3);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.text_1 = new cjs.Text("How is Lynch Syndrome passed on?", "normal 400 40px 'Raleway'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 57;
	this.text_1.lineWidth = 456;
	this.text_1.parent = this;
	this.text_1.setTransform(248.05,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_1);
	}

	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,534.2,545);


(lib.q3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("    How is Lynch Syndrome passed on? ", "normal 400 35px 'Raleway'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 830;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAeIgQgPIgEgPQACgGAEgHQADgGAFgFQADgDADAAQAHgCAHAAIAKAAIAOAPIAGAOIgGAPIgOAPIgYAAg");
	this.shape.setTransform(19.6,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("Eg61gE2MB1rAAAQB8AABYBYQBYBYAAB8IAAAVQAAB8hYBXQhYBZh8AAMh1rAAAQh8AAhYhZQhYhXAAh8IAAgVQAAh8BYhYQBYhYB8AAg");
	this.shape_1.setTransform(406.625,31.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg61AE2Qh8ABhYhZQhYhXAAh8IAAgVQAAh8BYhXQBYhZB8AAMB1rAAAQB8AABYBZQBYBXAAB8IAAAVQAAB8hYBXQhYBZh8gBg");
	this.shape_2.setTransform(406.625,31.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 37px 'Raleway'",color:"#000033",lineHeight:52.5}}]},1).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,834.8,64.1);


(lib.q2answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("If you have Lynch Syndrome, you are at greater risk of developing cancer because your  cells’ ability to repair DNA damage may be affected by the gene mutation.\n", "37px 'Helvetica'");
	this.text.lineHeight = 44;
	this.text.lineWidth = 468;
	this.text.parent = this;
	this.text.setTransform(20,167.75);

	this.text_1 = new cjs.Text("How does Lynch Syndrome work?", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 456;
	this.text_1.parent = this;
	this.text_1.setTransform(244.55,18);

	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(-10,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10.5,513,575.6);


(lib.q2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("    How does Lynch Syndrome work?", "normal 400 35px 'Raleway'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 951;
	this.text.parent = this;
	this.text.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAeIgEgEQgOgNgBgJQgCgMAQgQIAGgEQADgBAEAAIAPABIAGAEQANAMABAJQADAPgSAOIgFAEIgFAAg");
	this.shape.setTransform(19.6045,31.7917);

	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(10.75,1.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(16.4,28.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]}).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 37px 'Raleway'",color:"#252526",lineHeight:52.5}}]},1).to({state:[{t:this.shape},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}}]},1).to({state:[{t:this.instance_1},{t:this.text,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,965.3,67.3);


(lib.q1answerpopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Lynch syndrome is a condition that increases the risk of certain cancers. It is caused by a mutation in one of five different genes.", "37px 'Helvetica'");
	this.text.lineHeight = 44;
	this.text.lineWidth = 434;
	this.text.parent = this;
	this.text.setTransform(37.2,166.8);

	this.text_1 = new cjs.Text("What is Lynch syndrome?", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 425;
	this.text_1.parent = this;
	this.text_1.setTransform(249.9,16.4);

	this.instance = new lib.CachedBmp_74();
	this.instance.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,513,545);


(lib.q1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// question
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAeIgFAAIgFgEQgRgPACgOQACgIALgMIAHgFQACgBAEAAIAFABIALAAQADABAGAGIAGAGQAFAGABAIQAAAHgDAGQgDAHgJAGQgCADgDABIgHABg");
	this.shape.setTransform(21.6125,31.5417);

	this.q1 = new cjs.Text("    What is lynch syndrome?", "normal 400 35px 'Raleway'");
	this.q1.name = "q1";
	this.q1.lineHeight = 50;
	this.q1.lineWidth = 1205;
	this.q1.parent = this;
	this.q1.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.q1);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("Eg4pgEsMBxTAAAQB8AABYBYQBYBYAAB8IAAABQAAB8hYBXQhYBZh8AAMhxTAAAQh8AAhYhZQhYhXAAh8IAAgBQAAh8BYhYQBYhYB8AAg");
	this.shape_1.setTransform(392.6,30.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg4pAEtQh8AAhYhZQhYhXAAh9IAAAAQAAh8BYhXQBYhZB8AAMBxTAAAQB8AABYBZQBYBXAAB8IAAAAQAAB9hYBXQhYBZh8AAg");
	this.shape_2.setTransform(392.6,30.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.shape}]}).to({state:[{t:this.q1,p:{font:"normal 400 37px 'Raleway'",color:"#000033",lineHeight:52.5}},{t:this.shape}]},1).to({state:[{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1209.6,68.2);


(lib.previouspage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#016500").ss(20,1,1).p("AkhkSIJDAAIAAIlIpDAAg");
	this.shape.setTransform(27.525,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AkhETIAAolIJDAAIAAIlg");
	this.shape_1.setTransform(27.525,27.5);

	this.text = new cjs.Text("Previous page", "25px 'Helvetica'", "#006600");
	this.text.lineHeight = 30;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(-32.3,90.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#016500").ss(20,1,1).p("Am1mfINrAAIAAM/ItrAAg");
	this.shape_2.setTransform(27.525,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("Am1GgIAAs/INrAAIAAM/g");
	this.shape_3.setTransform(27.525,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,1,1).p("AololIRLAAIAARLIxLAAg");
	this.shape_4.setTransform(27.05,33);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AolImIAAxLIRLAAIAARLg");
	this.shape_5.setTransform(27.05,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-24.1,180.10000000000002,148.2);


(lib.popup_base_messagebox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MLH1-FEMALE-ENDOMETRIUM", "40px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 48;
	this.text.lineWidth = 612;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.text_1 = new cjs.Text("", "35px '_sans'", "#CCCCCC");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(30,2.25);

	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-10,-10,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,626.2,275);


(lib.PMS2BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PMS2TITLE();
	this.instance.setTransform(0,0,0.2349,0.1986);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,594.9,232.4);


(lib.pms2_male_description_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Find out which organs in PMS2 mutation carriers with a male reproductive system have a higher cancer risk than in the general population. Notice that risk increases with age.\n", "40px 'Helvetica'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 483;
	this.text.parent = this;
	this.text.setTransform(29.25,129.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("Egslgp7MBZLAAAMAAABT3MhZLAAAg");
	this.shape.setTransform(266.9816,293.9836,0.9355,1.0954);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgslAp8MAAAhT3MBZLAAAMAAABT3g");
	this.shape_1.setTransform(266.9816,293.9836,0.9355,1.0954);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,554,615.3);


(lib.pms2_female_dis_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Find out which organs in PMS2 mutation carriers with a female reproductive system have a higher cancer risk than in the general population. Notice that risk increases with age.", "40px 'Helvetica'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 485;
	this.text.parent = this;
	this.text.setTransform(36.1,146);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("EgmbgpBMBM4AAAMAAABSDMhM4AAAg");
	this.shape.setTransform(266.9964,293.9807,1.0851,1.1198);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgmbApBMAAAhSBMBM3AAAMAAABSBg");
	this.shape_1.setTransform(266.9964,293.9807,1.0851,1.1198);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,554,608);


(lib.pms2_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578EC4").s().p("EhtZBBVMAAAiCpMDazAAAMAAACCpg");
	this.shape.setTransform(700.175,418.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400.4,836.2);


(lib.PMS2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(" PMS2", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 44;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(116,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("AC/E0QgEgGgPgCQgRAAgWAEQgQADgOgDIgQgKQgHAAgHAFQgGAFgFgDQgPgCgBADQgBADgMgCIAAABIgDgBQgIgCgIABIgPABIgSADQgDAFgIgCIgPgEIgFAGQgngKhFgCQgFgFgaAEIAHADIhEgGIhBAAIgIAFQACgDgEgDQgFgDgHgBIgZABIgcABIAAgDQgbAAgFgBIABgBIAggCIgBAEIBpgCIAAgGIgZgEIgJAHQgVgEgVAAIgfABQgZAAgEAGIgDAAIACABIAAAAQgagHgVgEIAVAAIgVgHQgFgBgJAGQgJAEgYgHIgOgHQgCAEgXgDIgngIIAbAUIgngDQgXgBgNACIABgCQgBgCgFgBIgNADIgIgDQgIACgBAGIgBAKIAAgCQgCAEgVgCIgpgGIgngFIAEgdQAFgbgDgIQgBAEgBACQgCABADgIIgFANQAAgGADgJQADgMACgQQgGgEADgWQADgbAAgLIADgFQABAAABAJIAGgaQAAgBAAAAQAAAAgBAAQAAABgBABQgBAAgBACQgDAFACgMQAAgFAGgGQADgEABgTQABgJgCgXQgBgTADgJIAKg1IAEgTIAAgfIAEAAIAAgZIABABQAAgFgCAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABABIgBABIADgKQAEgGABgKIgCgCIAEgMQABgEgBASQAGgRAMgyIgHgDIgTgfIgDgGIBQgiIgDACQAUADAlgDQAkgDATAEIAAgBQABAGAjgEQAmgFAFAFQARADAVgFIAagFQABABAIACQAMAEAMgDQAEAAAPgGQAQgFAKADQALADAWgBIAlAAIgDgDQAkABBpgBQBYgBArAEQgBABgBABQgBAAABAAQAAAAACAAQABgBADgBQALgGgJAHIAeABIABgCQAJgBASgHQAQgFAOAHQAAAFAOgCQAJgBgGADQApgIBAAFQBAAEAtgJIgFABIAVACIgIgIQAHADAVgCQATgCgBAEIgDABQgBAEAMABIAUABQgBgFgEAAIARgDQATAEAmgBQAkgBANAFIAMgGQARADAzgEQAvgEAUAIIBagGIANC5IgBA2QgBAggHALQgCAbADAfQAFAlAAAPQgHgEAAARQABAWgCAEQAFgBgBAOQgBAQAEADIgGAAIgCA+IgBgFQgEAAABAGQACAKgCADIAIAMIgIgDQgBAEABADIACAFQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAJIgBAwIgtgCQgJAAgGACQgGADgCAEQgCAAgCgDQgCgCgDAAQgGABACACIAFADIgOgDQgIgCgNABIAJgDQgGABgMgCQgLgCgLAFIgCAKIASgEIgdAKQgBAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIAAgDQgIACgJgCQgGgCgFAFIgDgHIgOAGQAEgGAAgCQAAgFgOgCIgTgBIAFAIIgNgHQgHgDgJAFIgBgGQgIgCgDAFQgCAEgHgCIAGgFIg3AFQgeADgUgFIAAgCQgNgDgbACIADACIgbABIgBgEIgUABIABgDQgZgFgbAHIAGACQgDAAgEAHIgIAMQgFAAgGADQgFACgLgCIAGgEQAAgBAAAAQAAAAAAgBQgBgBAAAAQAAgBgBAAIgRADIgNAHQAJgFgFgGgAquDBIAFAAIgFgCIAAACgAKTDAIgBgsQgBgzgGgoQACgHACgiQABgjACgIQAEhTAAhdIk2AFIgGgDQgGgDgNABIgCAHQgkgFhXACQhRACgngHIgaAIIluAEIiXgMIi9AHIgxgVIACAbIgEAJQACgCABAMQABAKAFgHQgEAUAEAIIAIANIgFANIACAqQgDABgCAEQABALACALIAEATIAGgVIgBAIIAAAFIAAAAQgQBLAEAlQACATADAKIgCgFQADAkAAAoIAAAFQAkgBBTgCQCBgBAOAEQA6AFB6gDQBxgCA2AGQCAAGDIgEQEHgFBEABIgCABIA/AEIAQABIAAAAgAqvhJQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABgArkiFIABAAIABAEgAq5i/QAEgJgBAJIgCANgAAdkxIAEgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAFABQAFABAAABIgFABQgGAAgEgCg");
	this.shape.setTransform(188.35,26.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AqFDhIAFABIgFABIAAgCgAKsDhIg/gFIACgBQhEAAkHAFQjIADiBgGQg1gGhyADQh5ADg6gFQgPgFiAACQhTABgkACIAAgGQAAgngDgkIACAEQgEgKgBgTQgEglAPhLIABAAIgBgEIABgJIgFAVIgEgSQgDgMAAgKQABgFADgBIAAABIACAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBgqIAFgNIgIgMQgEgIAEgVQgFAIgBgLQgCgLgBABIAEgJIgCgbIAxAVIC9gGICXAMIFugEIAagJQAmAIBRgCQBYgDAkAFIABgHQAOAAAFACIAHADIE2gEQAABdgEBRQgDAJgBAjQgBAigCAHQAGAoABA0IABArIgQAAgAqQidIAAANIADgNQAAgBAAgBQAAgBAAgBQAAAAAAAAQAAgBAAAAIgDAFgAq+hGIAAicIAEAAIATAgIAHADQgMAygGAQQABgRgBAEIgEAMIACABQgBAKgEAHIgEAJIABAAIAAgBQAAAAAAAAQABgBAAAAQAAABAAAAQABAAAAAAQACAAAAAGIgBgBIAAAZgAq8hjIADAEIgBgFg");
	this.shape_1.setTransform(184.2626,22.6625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:44.15}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",lineHeight:47.55}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:44.15}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:44.15}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.2,-5.9,156.40000000000003,63.9);


(lib.msh6title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.msh6caption();
	this.instance.setTransform(0,0,0.3419,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633.9,300.1);


(lib.MSH6_MALE_POPUPBOX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(-9.95,-32.25,0.4483,0.4483);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-32.2,550,376.5);


(lib.msh6_male_description_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Find out which organs in MSH6 mutation carriers with a male reproductive system have a higher cancer risk than the general population. Notice that risk increases with age.", "40px 'Helvetica'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 485;
	this.text.parent = this;
	this.text.setTransform(28.1,118.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("EghUgmzMBCpAAAMAAABNnMhCpAAAg");
	this.shape.setTransform(267.0027,294.0048,1.2516,1.1837);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EghUAm0MAAAhNnMBCpAAAMAAABNng");
	this.shape_1.setTransform(267.0027,294.0048,1.2516,1.1837);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,554,608);


(lib.MSH6_fem_endometrium_popupbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of endometrial cancer in the lifetime of carriers to between 25% and 70%. This risk is below 2% in the general population.\n", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 434;
	this.text.parent = this;
	this.text.setTransform(20.55,121.7);

	this.text_1 = new cjs.Text("MSH6-FEMALE-ENDOMETRIUM", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 406;
	this.text_1.parent = this;
	this.text_1.setTransform(223.6,2);

	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,466.7,508.4);


(lib.MSH6_FEM_COLORECTAL_POP_BOX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(" The MSH6 mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to between 10% and 30%. This risk is below 2% in the general population.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 438;
	this.text.parent = this;
	this.text.setTransform(31.45,121.7);

	this.text_1 = new cjs.Text("MSH6-FEMALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 452;
	this.text_1.parent = this;
	this.text_1.setTransform(228.05,2);

	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(9.45,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,471.6,509.5);


(lib.msh6_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578EC4").s().p("EhxxBBfMAAAiC9MDjjAAAMAAACC9g");
	this.shape.setTransform(728.2,419.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456.4,838.2);


(lib.MSH6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MSH6", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 33;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ACXE0QgFgGgNgCQgPAAgUAEQgPADgNgDIgOgKQgGAAgHAFQgFAFgEgDQgOgCgCADQAAADgMgCIABABIgDgBQgGgCgIABIgOABIgRADQgCAFgIgCIgMgEIgGAGQgjgKg/gCQgEgFgYAEIAGADIg9gGIg7AAIgHAEQACgCgEgDQgFgDgGgBIgWABIgbABIABgDQgZAAgEgBIABgBIAcgCIAAAEIBfgCIAAgGIgXgEIgIAHQgTgEgSAAIgdABQgWAAgEAGIgDAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAAAAQgYgHgTgEIATAAIgTgHQgEgBgJAGQgIAEgXgHIgLgHQgCAEgWgDIgjgIIAZAUIgkgDQgVgBgMACIABgCQAAgCgFgBIgLADIgIgDQgIACAAAGIgBAKIAAgCQgCAEgKgBIgqgCIABgnIAHgqQAEgdgCgHIgCAFQgCABADgHQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAABIgDAIQAAgGADgIQADgLACgOQgGgEADgUQADgZAAgKIADgEQABgBABAJIAGgYQAAAAAAgBQAAAAgBABQAAAAgBABQgBABgBABQgDAFACgLQABgFAEgFQAEgEABgSQABgIgBgUQgCgRADgIIAKgwIADgQIAAgeIAEAAIABgXIAAABQAAgFgBAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAABAAAAIAAABIgBAAQAAgDAEgGQADgGACgIIgDgCIAFgLQABgDgBAQQAGgOALgrIgIgEIgSgfIgDgGIBJgiIgCACQASADAhgDQAhgDARAEIAAgBQAAAGAhgEQAigFAFAFQAQADASgFIAYgFQABABAHACQALAEALgDQAEAAANgGQAPgFAJADQAKADAUgBIAiAAIgEgDQAiABBfgBQBQgBAnAEQgCABAAABQgBAAAAAAQABAAABAAQACgBACgBQALgGgJAHIAcABIAAgCQAJgBAQgHQAPgFAMAHQAAAFAMgCQAIgBgEADQAmgIA5AFQA5AEAqgJIgFABIATACIgGgIQAGADATgCQAQgCAAAEIgDABQAAAEAKABIASABQAAgFgEAAIAPgDQARAEAjgBQAggBANAFIAKgGQARAEAngEQAmgEARADIBCAOIgJArIgDALIALCWIgBAxQgBAdgHAKQgCAYADAdQAFAhAAAOQgHgDABAPQAAATgCAFQAFgBgBAMQgBAPAEACIgGABIgCA4IgCgEQgCgBAAAGQABAJgBADIAIALIgIgEQgBAEABADIABAEIgCgBIgBAIIgCAwIgtgCQgSgBgDAKQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBABgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAFADIgNgDQgIgCgMABIAJgDQgEABgMgCQgKgCgJAFIgCAKIAQgEIgbAKQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIABgDQgIACgHgCQgGgCgFAFIgDgHIgMAGQADgGAAgCQAAgFgMgCIgRgBIAEAIIgLgHQgHgDgJAFIAAgGQgIgCgCAFQgDAEgGgCIAFgFIgyAFQgaADgTgFIABgCQgMgDgZACIAEACIgaABIgBgEIgSABIABgDQgWgFgZAHIAFACQgDAAgEAHIgGAMQgFAAgGADQgDACgKgCIAEgEQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBgBAAIgPADIgMAHQAIgFgEgGgApTD1IADAEIACgGIgGgFIABAHgAqHDBIAFAAIgJgDgAI6DAIgBgiQgBgvgGgkQADgHABgfQAAggADgHQAEhSAAh2QiVADhRABIgGgDQgFgDgMABIgCAHQgggFhQACQhJACgjgHIgYAIIlMAEIiJgMIisAHIgogTIACATQADgJAAAJIgDAMIAAgMIgFAIQACgCABALQACAJAEgHQgEATAFAIIAIALIgGAMIACAmQgDABgCAEQABAJACALIAFARIAFgTIgBAHIAAAEIAAAAQgPBFADAhQACARAEAJIgDgEQAFAmgCAyIAAAYIBQgBQBfgBAMAEQA1AFBugDQBmgCAxAGQB1AGC2gEQDvgFA+ABIgCABIA5AEIAJABIAAAAgAmWEgIAAAAgApUhaQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgCABgAqJiQIACgBIAAAEgAAxkxIAFgBIAAgBIAFABQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAIgEABQgFAAgFgCg");
	this.shape.setTransform(65.2,26.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AosD7IAAgHIAFAFIgBAGgApjDEIAJACIgGABgAJZDFIg6gEIADgBQg+gBjvAFQi3ADh0gFQgxgHhnADQhtADg1gFQgMgEhfABIhRABIABgZQABgxgEgmIACAEQgDgJgCgRQgDgiAPhEIAAAAIAAgFIABgHIgFAUIgFgRQgCgLgBgKQABgDAEgBIgCgmIAGgNIgIgKQgFgIAEgTQgEAHgCgJQgBgLgCACIAEgIIABALIADgLQAAgJgEAJIgBgTIAoATICrgHICKAMIFMgEIAYgJQAiAIBKgCQBPgCAhAEIACgHQAMAAAFACIAGAEQBQgBCVgDQABB1gEBSQgDAIgBAgQgBAfgCAGQAGAlABAuIABAiIgJAAgAoshUIAAABIACgBIgCgBIAAABgApjj+IADAAIARAgIAJAEQgMAqgGAOQABgPgBADIgEAKIACACQgBAJgDAGQgEAGAAADIABAAIACADIgBgEQACAAAAAFIAAgBIgBAXIgEAAgApiiLQAAgBABAAQAAAAAAAAQAAAAABAAQAAABAAAAIgBABg");
	this.shape_1.setTransform(61.2423,25.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",lineHeight:36.55}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-5.9,138.79999999999998,63.9);


(lib.MSH2caption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.msh2caption();
	this.instance.setTransform(0,0,0.1315,0.1315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.8,404.1);


(lib.msh2background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5791C6").ss(20,1,1).p("Ehsng9aMDZPAAAMAAAB61MjZPAAAg");
	this.shape.setTransform(695.175,393.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#578FC4").s().p("EhsnA9bMAAAh61MDZPAAAMAAAB61g");
	this.shape_1.setTransform(695.175,393.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,1410.4,806.2);


(lib.MSH2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MSH2", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 33;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ACCEcQgEgGgLgCQgOAAgSAEQgNADgMgDIgMgKQgGAAgGAFQgFAFgDgDQgNgCgBADQAAADgLgCIAAABIgBgBQgGgCgHABIgNABIgOADQgCAFgHgCIgMgEIgFAGQgfgKg5gCQgDgFgVAEIAFADIg3gGIg1AAIgGAEQABgCgDgDQgEgDgGgBIgUABIgYABIABgDIBVgCIAAgGIgVgEIgGAHQgRgEgRAAIgaABQgTAAgEAGIAagCIgBAEQgWAAgEgBIABgBIgDAAIACABIAAAAQgVgHgRgEIARAAIgRgHQgEgBgIAGQgGAEgVgHIgKgHQgCAEgTgDIgggIIAWAUIgggDQgTgBgKACIABgCQAAgCgFgBIgKADIgHgDQgGACgBAGIgCAKIAAgCQAAACgEABIgjAEIgGgtQAAgHAGggQAFgegCgHIgCAFQgCABACgGQAAAAAAAAQAAAAgBABQAAAAAAABQAAABgBABIgCAGQAAgEACgIQAEgKACgNQgGgDACgSQAEgWAAgJIADgEQABAAABAHIAGgVQAAAAAAgBQgBAAAAABQgBAAAAAAQgBABgBABQgDAFABgKQABgEAFgFQAEgDABgQQABgHgCgSQgBgPADgIIAKgrIADgPIAAgaIAEAAIABgUIAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAEgHQADgFABgIIgCgCIAEgJQABgDgBAOQAGgMAKgiIgJgFIgPgfIgDgGIBBgiIgCACQAQADAegDQAdgDAPAEIABgBQAAAGAdgEQAfgFAEAFQAOADAQgFIAWgFIAHADQAKAEAKgDQADAAAMgGQANgFAJADQAJADASgBIAeAAIgEgDQAeABBWgBQBHgBAjAEQgBABgBABQAAAAAAAAQAAAAABAAQACgBACgBQAJgGgIAHIAZABIABgCQAHgBAPgHQANgFALAHQABAFAKgCQAIgBgEADQAhgIA0AFQAzAEAlgJIgEABIARACIgGgIQAFADASgCQAOgCAAAEIgCABQgBAEAKABIAQABQgBgFgDAAIANgDQAQAEAfgBQAdgBALAFIAJgGQAPAEAfgEQAjgEANACIBBAKIgHAwQgCAJgDAGIAMCGIgBAsQgBAbgHAIQgDAWAEAZQAFAegBANQgGgDAAANQABASgDADQAGgBgBAMQgBANAEACIgGABIgCAyIgCgEQgDAAABAFQABAIgBACIAIAKIgIgDQgBAEACAGIgCgBIgCAHIgCAxIgsgDQgHAAgFACQgGADAAAEQgCAAgCgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBABQgBAAAAABQgBAAAAAAQAAABAAAAIAEADIgLgDQgHgCgKABIAHgDQgEABgKgCQgJgCgJAFIgBAKIAOgEIgYAKQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgDQgHACgGgCQgFgCgFAFIgCgHIgMAGIAEgIQAAgFgLgCIgQgBIAEAIIgKgHQgGgDgHAFIgBgGQgHgBgCAEQgCAEgGgCIAFgFIgtAFQgXADgRgFIAAgCQgKgDgXACIADACIgWABIgBgEIgQABIAAgDQgUgFgWAHIAFACQgCAAgKATQgFAAgEADQgEACgJgCIAEgEQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgNADIgLAHQAIgFgFgGgAoODfIACACIADgHIgFgFIAAAKgAhYCkQBoAGCjgEQDWgFA3ABIgBABIAzAEIACAAIgBgYQgBgqgGggQACgGABgcQABgcADgHQAEhJAAhpQh+ADhEABIgGgDQgFgDgLABIgBAHQgdgFhHACQhCACgfgHIgVAIIkqAEIh6gMIiaAHIgegRIAAAKIgEAHQACgBABAJQACAJAEgGQgEARAFAGIAIAKIgGALIACAiQgDAAgCAEQABAJACAJIAFAQIAFgSIgBAHIAAAEIAAAAQgPA9ADAeQACAPADAIIgCgDQAEAigBAuIgBASIBCgBQBRgBAKAEQAvAFBigDIAyAAQA3AAAfAEgAoYi0QAEgHAAAHIgDALgAoYi0IAAAAgAAukZIADgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAEABQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAIgEABQgFAAgDgCg");
	this.shape.setTransform(58.2231,23.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AnmDlIAAgKIAEAFIgCAGgAgwCpQgsgGhcADQhiADgvgFQgKgEhRAAIhCACIABgSQABgvgEghIACADQgDgIgCgQQgDgdAPg+IAAAAIAAgDIABgHIgFARIgFgPQgCgKgBgIQACgEADAAIgCgjIAGgKIgIgKQgFgHAEgRQgEAHgCgJQgBgJgCABIAEgHIABAKIADgKQAAgHgEAHIgBgKIAfARICagHIB6AMIEqgEIAVgJQAfAIBCgCQBHgCAdAEIABgHQALAAAFACIAGAEQBEgBB9gDQABBpgEBIQgDAIgBAcQgBAcgCAGQAGAgABAqIABAYIgCAAIgzgFIABgBQg3AAjWAFIhwABQhaAAhBgEgAodhnIAAh/IACAAIAQAgIAJAFQgKAigGAMQABgOgBADIgEAJIACACQgBAIgDAFIgEAGQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAABAAABIAAAAIgBAUg");
	this.shape_1.setTransform(54.2412,23.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:110}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",lineHeight:36.55,lineWidth:118}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:110}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:110}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-5.9,126.1,92);


(lib.more_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.more();
	this.instance.setTransform(0,0,1,0.9222);

	this.text = new cjs.Text("", "normal 400 30px 'Alfa Slab One'", "#10328E");
	this.text.lineHeight = 49;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(128.05,346.95);
	if(!lib.properties.webfonts['Alfa Slab One']) {
		lib.webFontTxtInst['Alfa Slab One'] = lib.webFontTxtInst['Alfa Slab One'] || [];
		lib.webFontTxtInst['Alfa Slab One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,444.9);


(lib.MLH1MSTOMACHPOPUPMESSAGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of gastric cancer in carriers with male reproductive organs to below 10%. This risk is below 1% in the general population.\n\n", "30px 'Helvetica'");
	this.text.lineHeight = 36;
	this.text.lineWidth = 494;
	this.text.parent = this;
	this.text.setTransform(32.75,73.45,0.917,1);

	this.text_1 = new cjs.Text("MSH2-MALE-STOMACH", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 450;
	this.text_1.parent = this;
	this.text_1.setTransform(34.85,2);

	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(7.35,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.4,-10.5,498,370.8);


(lib.MLH1MCOLORECTALPOPUPMESSAGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MLH1 mutation increases the risk of colorectal cancer in carriers with male reproductive organs to between 35% and 65%. This risk is 2% in the general population.", "30px 'Helvetica'");
	this.text.textAlign = "right";
	this.text.lineHeight = 36;
	this.text.lineWidth = 521;
	this.text.parent = this;
	this.text.setTransform(528.8,77.8);

	this.text_1 = new cjs.Text("MLH1-MALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 531;
	this.text_1.parent = this;
	this.text_1.setTransform(16.05,14.3);

	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(-10.5,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,559.3,313.5);


(lib.mlh1femaleovariesbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ovaries();
	this.instance.setTransform(0,0,0.0498,0.0418);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AGJjqIgzA8IAiAhQAmArATAyQALAdgCBTQgCA+AlAZQBJAzBAAVQBfAfAygvQA6g3AFg5QAGg9g7ghQg3geglgJQgXgFhCgFQg0gEg0grQgtgmgVgugAnCi5Ih9B9QgKgGgVgBQgpgBg2AcQhIAmgeArQgjAzAfA1QAlA9BeAKQBjAKAkhHQAXgtAMhJQAJg7AggrQAmgyAegZQAPgMAHgDg");
	this.shape.setTransform(104.3332,53.32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AJmDfQhAgVhJgzQglgZACg+QAChTgLgdQgTgygmgrIgighIAzg8IAZA3QAVAuAtAmQA0ArA0AEQBCAFAXAFQAlAJA3AeQA7AhgGA9QgFA5g6A3QgeAcguAAQgfAAgmgMgAqkDYQhegKglg9Qgfg1AjgzQAegrBIgmQA2gcApABQAVABAKAGIB9h9IBLAeQgHADgPAMQgeAZgmAyQggArgJA7QgMBJgXAtQgfA/hQAAIgYgCg");
	this.shape_1.setTransform(104.3332,53.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.0498,scaleY:0.0418,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.0527,scaleY:0.0443,x:-6,y:-4}}]},1).to({state:[{t:this.instance,p:{scaleX:0.0498,scaleY:0.0418,x:0,y:0}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.0498,scaleY:0.0418,x:0,y:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-4,216.1,136);


(lib.MLH1FEMALEENDOMETRIALPOPUPMESSAGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of endometrial cancer in the lifetime of carriers to between 30% and 40%. This risk is below 2% in the general population.", "30px 'Helvetica'");
	this.text.lineHeight = 36;
	this.text.lineWidth = 607;
	this.text.parent = this;
	this.text.setTransform(2,89.9);

	this.text_1 = new cjs.Text("MSH2-FEMALE-ENDOMETRIUM", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 626;
	this.text_1.parent = this;
	this.text_1.setTransform(315.1,2.9);

	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-8.35,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-10.5,638.5,282);


(lib.mlh1femalecolorectlpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MLH1 mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to between 35% and 55%. This risk is below 2% in the general population.\n\n", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 687;
	this.text.parent = this;
	this.text.setTransform(10.05,75.55);

	this.text_1 = new cjs.Text("MLH1-FEMALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 654;
	this.text_1.parent = this;
	this.text_1.setTransform(10.05,3.1);

	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(-10.5,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,733,420.9);


(lib.mlh1femendometriumpmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MLH1 mutation increases the risk of endometrial cancer in the lifetime of carriers to between 20% and 25%. This risk is below 2% in the general population.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 624;
	this.text.parent = this;
	this.text.setTransform(28.05,83.7);

	this.text_1 = new cjs.Text("MLH1-FEMALE-ENDOMETRIUM", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 610;
	this.text_1.parent = this;
	this.text_1.setTransform(28.05,11.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("EAzRgR9MAAAAj7MhmhAAAMAAAgj7");
	this.shape.setTransform(328.075,189.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(20,1,1).p("EgzQgFxMBmhAAAIAALjMhmhAAAg");
	this.shape_1.setTransform(328.075,37.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("EgzQAR+MAAAgj7MBmhAAAMAAAAj7g");
	this.shape_2.setTransform(328.075,189.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("EgzQAFyIAArjMBmhAAAIAALjg");
	this.shape_3.setTransform(328.075,37.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,676.2,324.1);


(lib.mlh12femalegraphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.femalebody();
	this.instance.setTransform(0,0,0.4159,0.3345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650.5,887.1);


(lib.mlh1uterus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hover effect
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(111.35,11.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(48.9,8.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance_2 = new lib.uterus();
	this.instance_2.setTransform(0,0,0.4847,0.4847);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#551020").s().p("AAeKAIABgCQgIABgIgBQgFAAgEACIgDgEIgMAEIAFgFQgBgCgMgBIgRgBIAFAEIgLgDQgHgCgIACIAAgCQgHgBgDADQgCACgGgCIAFgCIgwACIgLAAIgWAAIgNgCIABgBIgmgGIADABIgUgFIgDAAIgDgCIgBgDIgSgGIACgCIgCAAIgpgcIADAFIgDgCIgPgCIgFgGIgEgDIgGgHIgEgGQAHAGgBgFIgTgYIAEADQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgCgNIgPguIgCgKIAAgHIAAgJIAEgPIAAgEIgDgJQgCgFABgEQABgOgCAAQAAgCAAgKIgBAAIABgDIABgOIgBgOIgBgPQgDgDACgHIABgNIgDgEQAFgiABg9QACgDgCgXIgBAFQADg6AAg5IgDgJQACAEACgEQABgFABgGIgBgvIABABQAAgXABgEIAAAAIAFgpIAAASIAEgSQAAgFgCgHQgCgIADgWIADgLQgDgEAHg0IgKAXIACgiQAAgUgBgMQAAABABABQAAAAAAgBQAAAAABgBQAAgCABgBIgCgMIACgHQgBgHgEAAIgEgCIAAAAQgDgCAEglQADgpgBgHIgBAGQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAgBIgCAJQACgLACgbQgCgDAAgUIACghIACgEQABAAAAAIIACgXQAAgBAAAAQAAAAAAAAQAAAAgBABQAAABAAACQgCAEABgLIABgEIAAgBIABgBIAAgBIABgCIABgFIAHg6IAEgLIAIgSQAFgJALgOIAKgLIAJgJQAKgIACgDIACABIASgLIgBABIABgBIACgBIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAABIgBgBIAIgCIACAAIADAAIAGgCIADAAIABgCIALgBQABAAgCAAIgLADIAWgCIAcAAIAZABIALABIg3AJIgFAAIgCAAQABAAgJADIgDADQgBAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQgIABgGADIgEACIgBACQgDAFgEACIgCABIgCABIgCAAIgBABIgCAAQgMAKgJAKIgEABQgFAIgDAGIgEANIAGgIIgBAEIgBAAIgHANIgLAcIgCAJQgCAMAAAGIAAAFIAAAMIAAACIAAADIAAACIABAHIABAHIgBgDQACAkgBAzQgBA9ABAiIAFgYQABAQABBtQABBvgCANQgDAyACBqQABBjgDAvIgCBJIAABHIADAgQADAQAEAOQAHAPAGALQAJANAJAIQAMALALAFQAMAGAPAFQAcAHAjAAICRAAIgCAAIA3ACQAgABASgBIAAAAIAQAAIACAAIAHAAIgCAAQAXgBAMgCQAVgDAMgGQARgGALgKQAMgJAIgNIAHgIIAJgPIALgeQADgNABgOIACgOIAAgHIAAgCIgCnRQADgDgBgTIgDgBQADghgChLQAAhIADghIgEgWIgCieQgBgQgEgTQgEgPgHgPIgIgOQgBgDgEgDIgEgGQgKgKgOgIQgJgGgNgGQgKgEgRgEIghgGIgEAAIgEAAIgEAAIgBgBIizADIg8gPIgSgQIgCgCIBDgRQASABAgAAQAegCAQACIABAAQAAADAggDQAggDAFADQAIABAKAAIALgBIACAAIAJgBIAEAAIALgBIAFAAIAFADQAKACAOABIASACIAMADIANAFIArAdIAOANIgCgEIALAOIAKAPQAHAOAHASIAJAhQADAUABAPIgBB1QAGAUgGgQIAAAaIAAABIABgNQAAADAAABQAAACAAAAQAAABABgBQAAgBAAgCQgBALgBgBIAEAYQACAPgDALQgDAAACALQAAADAAABQAAABAAABQAAAAgBAAQAAAAAAgBQADAjgCA4QgBA3AEAoIgBgFIgBASIAFgGQgCAGABATQAAAPgBAAIgBgDQgBgBgBALIgBAQQACAAAAgEIADAOQgDARABAhQAAAggCAMIADAKQgCAPADAtQACAogFARIAGCQIAAAoIAAACIAAAGQgBAOgCAKQgDANgCAFIgJAfIgJAZQgFAMgGAMIgCACIgCADIgOASQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBABgBAAIgVARIgHAFIgBABIgCABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgIAFIgGACIgCABIgHAEIgDACIgBgCIgeAIIgeAFIACgBIADgBQAAgBgGABIgMABIgMAEIAEgDIgHAAIgFAAIACgBIgKAAIgIAAQgJABgBADIgEgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgIABAJACIgNgCQgHgBgMABIAIgBIgPgBQgJgBgKACIgCAGIAQgDIgaAGQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAgAlPBsIADAAIADgXIgFgIQADgRAAgTIgBgbQAAgUgDgEIAAgDIAAACIAAABIABAbIgCgBg");
	this.shape.setTransform(92.6,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ABDJYIg3gDIACAAIiRAAQgjAAgcgHQgPgEgMgHQgLgFgMgKQgJgJgJgNQgHgKgGgQQgEgOgDgQIgDggIAAhHIAChJQADgvgChjQgBhpACgzQADgMgBhwQgBhsgCgRIgEAZQgBgjABg9QABgzgCgkIABAEIgBgIIgBgHIAAgCIAAgCIgBgDIAAgMIABgEQAAgHACgMIACgIIAKgdIAIgNIABAAIABgDIgGAHIAEgNQACgGAGgIIAEgBQAIgKANgKIACAAIABgBIABAAIADgBIACAAQADgDADgFIACgCIAEgCQAGgDAIgBQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAEgCQAJgDgCgBIADAAIAEABIA3gJIgLgCIgZgBIgcAAIgVADIALgEQABAAgBAAIgKABIgBACIgDAAIgGACIgDABIgCAAIgIACIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgBAAAAABIAAABIgCABIgCABIABgBIgSAMIgBgCQgCADgKAJIgJAIQAug5BnAAIADAAIARAQIA9AQICzgDIAAAAIAFAAIAEABIAEAAIAgAFQASAEAJAEQAOAGAJAGQANAIALALIAEAFQADADACAEIAIANQAHAQAEAPQAEATABAPIACCeIAEAXQgEAhABBHQABBMgCAgIADABQABATgDAEIACHRIAAACIAAAGIgCAOQgBAOgDANIgLAeIgJAPIgHAIQgIANgMAKQgLAJgRAGQgMAGgVADQgMACgYABIACAAIgGAAIgCAAIgQABIgBgBQgLABgTAAIgTAAg");
	this.shape_1.setTransform(92.425,59.9914);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,185.2,128.2);


(lib.mlh1page_0000_mlh1psd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mlh1
	this.instance = new lib.mlh1();
	this.instance.setTransform(611,331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(611,331,2550,1082);


(lib.MLH1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MLH1", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 44;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ABuFcQgEgGgNgDQgQAAgUAEQgOAEgNgEIgOgKQgGAAgHAGQgEAEgFgDQgOgCAAADQgBADgMgCIAAABIgCgBQgHgCgIABIgOABIgQADQgDAGgHgDIgNgEIgGAGQgigKhAgBQgDgGgYAFIAFACIg9gGIg6AAIgIAFQACgCgEgEQgFgDgGgBIgWABIgaABIAAgCQgZgBgEgBIABgBIgDAAIACABIAAABQgXgIgTgEIATAAIgTgGQgEgCgJAGQgIAFgWgIIgMgHQgCAEgVgDIgjgIIAYAUIg9gEIABgZQACgVgCgOIACACQABgBACgFIgDgLIADgIQgDgHgFAAIgKgCIABAAQgFgCAGgnQAIgqgCgHIgDAFQgCACADgIQgCAAgDALQAAgEADgJQADgLACgOQgFgEACgUQADgYAAgLIADgDQACgCAAAJIAGgYQAAAAAAAAQAAAAgBAAQAAAAgBABQAAABgBABQgEAFACgLQABgFAFgFQADgEABgRQABgHgBgVQgCgSAEgIIAJgwIADgPQAFgZgEgFIAEAAIABgXIAAAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAABIABABIgBAAQAAgDAEgGQADgGABgJIgCgCIAEgKQABgDgBAPQAGgOAMgqIgJgEIgSggIgDgFIBJghIgBABQARADAigDQAggDARAEIAAgBQAAAGAhgFQAigEAFAEQAPAEATgFIAYgGQABACAHACQALAEALgDQADgBAOgGQAPgEAJADQAKADAUgBIAigBIgEgCQAhABBggBQBPgCAnAFQgBABgBABQgBAAABAAQAAAAABgBQACAAACgCQALgFgJAGIAcABIABgBQAIgCAQgHQAPgEAMAHQABAFALgCQAJgCgFAEQAlgIA6AFQA6AEApgKIgFACIATABIgGgIQAFAEAUgCQAQgCAAAEIgDABQgBADALABIATACQgCgFgDAAIAPgDQARAEAjgBQAggCAMAFIALgFQANACASgBIA0gCIADA4IAEAwQABAbgGAQIALCWIgBAwQgBAdgGAJQgDAaAEAcQAEAhAAAPQgHgEABAPQAAAUgCAEQAGgBgCANQgBAOAEADIgGABIgCA3IgBgEQgDAAAAAFQACAKgBACIAHALIgIgDQgBADABADIACAEIgDgBIgBAIIgCAxIgtgDQgSAAgCAJQgDAAgBgDQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBABQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAAAIAFAEIgNgEQgHgCgMABIAIgDQgEABgMgCQgKgBgJAEIgCAKIAQgEIgbALQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQgHACgIgCQgGgBgFAEIgCgHIgNAGIAEgHQgBgGgMgBIgRgCIAEAIIgLgGQgHgEgIAFIgBgGQgHgCgDAGQgCAEgGgDIAFgFIgyAFQgaADgTgEIAAgDQgLgCgZABIADACIgZACIgBgFIgSABIABgDQgXgFgYAHIAFACQgDAAgDAHIgHAMQgFAAgGADQgEADgKgDIAFgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgQADIgLAHQAIgFgFgFgAmhFJIBggDIAAgFIgYgFIgIAHQgSgEgTABIgdAAQgVAAgFAGIAdgCgAIRDnIAAgiQgCgvgGgkQADgGABgfQABghACgIQAFhkgCiwIiVADIgGgEQgFgCgMAAIgCAHQgggEhQACQhJACgjgIIgXAJIlNAEIiIgMIirAHIgogUIABAUIgEAIQACgCABAKQACAJAEgGQgEATAFAHIAIALIgGAMIACAnQgDgBgCAFQABAJACAMIAFAQIAFgTIgBAHIAAAFIAAAAQgPBFADAhQACAQADAKIgCgFQAEAmgBA1QgCA/ACAkIAAAAIAIgZIACAZQBUgBANAFQA1AEBtgDQBngCAwAGQB2AGC1gDQDugGA+ABIgCABIA5AFIAJAAIAAAAgApgi3IABgBIABAEgAo1jsQAEgJAAAJIgDALgAo1jsIAAAAgABZlYIAEgBIAAgBIAFABQABAAABAAQABAAABABQAAAAAAAAQABABAAAAIgFAAQgFAAgEgBg");
	this.shape.setTransform(47.1864,29.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AIwEJIg5gFIACgBQg+AAjuAFQi2ADh1gGQgwgGhnADQhtADg1gFQgMgEhUAAIgDgZIgIAZIAAAAQgCgkACg/QABg1gEglIACAEQgDgJgCgRQgDgiAPhEIAAAAIAAgEIABgIIgFAUIgFgRQgCgLgBgKQACgEADAAIgCgnIAGgLIgIgMQgFgHAEgTQgEAHgCgKQgBgKgCACIAEgIIABAMIADgMQAAgJgEAJIgBgTIAoATICrgHICIAMIFNgEIAXgIQAjAHBJgCQBQgCAgAFIACgHQAMgBAFADIAGADICVgCQACCvgFBlQgCAIgBAgQgBAfgDAGQAGAkACAvIAAAiIgJAAgAo7kIIADAAIASAfIAJAEQgMArgGAOQABgQgBADIgEALIACACQgBAIgDAGQgEAGAAADIABAAIgBgBQABAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAACIAAgBIgBAXIgEAAQAEAFgFAZgAo4iVIACADIgBgEg");
	this.shape_1.setTransform(43.1704,26.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",color:"#333333",lineHeight:44.15,lineWidth:102,x:2}}]}).to({state:[{t:this.text,p:{font:"40px 'Helvetica'",color:"#000000",lineHeight:47.55,lineWidth:110,x:2}}]},1).to({state:[{t:this.text,p:{font:"37px 'Helvetica'",color:"#333333",lineHeight:44.15,lineWidth:116,x:-8}}]},1).to({state:[{t:this.text,p:{font:"35px 'Arial'",color:"#333333",lineHeight:56.8,lineWidth:116,x:-12}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-5.9,132.1,71.7);


(lib.mhl1female_0001_stomachpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stomach
	this.instance = new lib.stomach();
	this.instance.setTransform(1437,1359);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1437,1359,291,314);


(lib.malebodypsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.instance = new lib.图层2();
	this.instance.setTransform(1211,171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1211,171,982,2460);


(lib.lynchuk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Charity offering support and information to people with Lynch Syndrome ", "normal 400 30px 'Raleway'", "#10328E");
	this.text.lineHeight = 43;
	this.text.lineWidth = 399;
	this.text.parent = this;
	this.text.setTransform(-42,157.8);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot20220705at115052PM();
	this.instance.setTransform(0,0,0.3571,0.3571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4059,scaleY:0.4059,x:-20,y:-7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-7,402.6,299.5);


(lib.irelandlogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Voluntary organisation founded by lynch syndrome families ", "normal 400 30px 'Raleway'", "#003300");
	this.text.lineHeight = 43;
	this.text.lineWidth = 332;
	this.text.parent = this;
	this.text.setTransform(24.35,160.9);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot20220705at115016PM();
	this.instance.setTransform(0,0,0.5861,0.5861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6628,scaleY:0.6628,x:-22,y:-13},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-13,380.5,302.8);


(lib.genepagebackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003300").ss(1,1,1).p("Eht3g/6MDbvAAAMAAAB/1MjbvAAAg");
	this.shape.setTransform(703.15,409.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5792C6").s().p("Eht2A/7MAAAh/1MDbtAAAMAAAB/1g");
	this.shape_1.setTransform(703.15,409.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1408.3,820.2);


(lib.femalebody_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// female_body
	this.instance = new lib.femalebody();
	this.instance.setTransform(747,195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747,195,1564,2652);


(lib.epcambutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.epcamtitle();
	this.instance.setTransform(0,0,0.2204,0.1816);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,558,212.5);


(lib.epcam_male_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of colorectal cancer in the lifetime of carriers with male reproductive organs to 75%. This risk is 2% in the general population.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 563;
	this.text.parent = this;
	this.text.setTransform(2,95.85);

	this.text_1 = new cjs.Text("EPCAM-MALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 549;
	this.text_1.parent = this;
	this.text_1.setTransform(2,14);

	this.instance = new lib.CachedBmp_67();
	this.instance.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,576.8,398.8);


(lib.epcam_male_dis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of a range of cancers but at the moment we only know that some parts of the body are at much higher risk than others. Find out which cancer risk has been clearly identified for carriers with male reproductive organs. Notice that risk increases with age.", "38px 'Helvetica'");
	this.text.lineHeight = 45;
	this.text.lineWidth = 505;
	this.text.parent = this;
	this.text.setTransform(27.3,77.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("EgtDglsMBaHAAAMAAABLaMhaHAAAg");
	this.shape.setTransform(267.0172,293.9865,0.9257,1.2181);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CBCBCB").s().p("EgtDAluMAAAhLbMBaHAAAMAAABLbg");
	this.shape_1.setTransform(267.0172,293.9865,0.9257,1.2181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,554,753.5);


(lib.EPCAM_FEMALE_ENDO_POPUPBOX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of endometrial cancer in the lifetime of carriers to 15%. This risk is below 2% in the general population.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 605;
	this.text.parent = this;
	this.text.setTransform(76.15,111.85);

	this.text_1 = new cjs.Text("EPCAM-FEMALE-ENDOMETRIUM", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 737;
	this.text_1.parent = this;
	this.text_1.setTransform(370.55,15.75);

	this.instance = new lib.CachedBmp_66();
	this.instance.setTransform(54.1,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,741.1,354.5);


(lib.epcam_fem_dis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The EPCAM mutation increases the risk of a range of cancers but at the moment we only know that some parts of the body are at much higher risk than others. Find out which cancer risk has been clearly identified for carriers with female reproductive organs. Notice that risk increases with age.", "40px 'Helvetica'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 535;
	this.text.parent = this;
	this.text.setTransform(2,63.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("EgiQgltMBEhAAAMAAABLbMhEhAAAg");
	this.shape.setTransform(267.0228,294.0049,1.2174,1.2181);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CBCBCB").s().p("EgiQAluMAAAhLaMBEhAAAMAAABLag");
	this.shape_1.setTransform(267.0228,294.0049,1.2174,1.2181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,554,739.5);


(lib.epcam_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#578EC4").s().p("EhqlBBVMAAAiCpMDVLAAAMAAACCpg");
	this.shape.setTransform(682.175,418.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364.4,836.2);


(lib.EPCA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("EPCAM", "37px 'Helvetica'", "#333333");
	this.text.lineHeight = 33;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(72,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("ACTFEQgEgGgOgDQgPAAgWAFQgPADgNgEIgOgJQgHgBgHAGQgFAEgFgCQgOgCgBACQgBADgLgBIABABIgDgBQgHgDgIABIgPABIgRADQgCAGgIgDIgNgEIgGAHQgkgKhBgCQgEgFgYAEIAFACIg+gFIg9AAIgIAEQACgCgEgDQgFgEgGgBIgXABIgbABIAAgCQgZAAgEgCIABgBIAdgCIgBAFIBjgDIAAgFIgYgFIgIAIQgUgFgTABIgdAAQgXAAgEAGIgDAAIACABIAAABQgYgIgVgDIAUAAIgUgHQgEgBgJAFQgIAFgXgIIgMgGQgCAEgWgEIgkgIIAZAUIglgCQgWgCgMACIABgBQAAgCgFgCIgMADIgIgDIgFADIgZgZQgCgCgFAAQgFAAgDgBIACAAQgFgCAGgoQAHgsgCgHIgCAFQgCACACgIQAAAAAAABQgBAAAAAAQAAABAAABQgBABAAABIgCAHQAAgFACgJQAEgLACgPQgGgEACgVQAEgZAAgKIADgEQABgBABAJIAGgYQAAgBgBAAQAAgBAAABQgBAAAAABQgBABgBABQgDAFABgLQACgFAEgGQAEgDABgTQABgIgCgUQgBgSADgJIAKgxIADgRIAAgeIAEAAIABgYIAAABQAAgGgCABQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBABAAAAIABABIABgBIABAEIgCgDIgBAAQAAgDAEgGQADgGABgJIgCgCIAEgLQABgDgBAQQAGgPAMgsIgIgEIgSggIgDgFIBLgiIgCABQASAEAjgDQAhgDASAEIAAgBQAAAGAigFQAjgFAFAFQAQADATgEIAZgGQAAABAIADQALAEAMgEQADAAAOgGQAPgFAKADQAKADAVAAIAjgBIgEgDQAiACBjgCQBSgBAoAFQgBABgBAAQgBABABAAQAAAAABgBQACgBACgBQALgFgJAGIAcABIACgBQAIgCARgHQAPgEAMAHQABAFAMgCQAIgCgEAEQAmgIA8AEQA7AEArgJIgFACIATABIgGgIQAGAEAUgCQAQgCAAADIgDABQgBAEAMABIATACQgCgFgDAAIAPgEQASAFAkgBQAhgCANAFIAKgGQARAEAggDQAmgDAMAAIA9ADIgDA3QgBARgEALIAMCaIgBAyQgBAfgHAKQgDAZAEAdQAFAigBAPQgGgEAAAQQABAUgDAEQAGgBgBANQgBAPAEADIgGABIgCA5IgCgEQgDgBABAGQABAKgBADIAIALIgIgEQgBAEACAIQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgCAIIgCAxIgsgCQgIgBgGADQgHACAAAFQgDgBgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgCAAgBAAQgBABAAAAQgBAAAAABQAAAAABABIAFADIgOgEQgHgCgNACIAJgEQgEABgMgCQgKgBgKAEIgCALIAQgFIgcALQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIABgDQgIACgIgCQgGgBgFAEIgDgHIgNAHIAEgIQgBgFgMgCIgSgCIAFAIIgMgGQgHgEgIAFIgBgGQgIgBgDAFQgCAEgGgDIAFgFIgzAFQgcADgTgEIABgDQgMgCgaACIADABIgaACIgBgFIgSACIAAgEQgXgFgZAHIAFACQgDABgDAGIgHAMQgFAAgGADQgEADgKgDIAFgEQAAAAAAgBQAAAAAAAAQAAgBgBgBQAAAAgBgBIgQAEIgMAHQAJgGgFgFgAJFDPIgBglQgBgwgGglQACgHABggQABghADgIQAEhagBiFIjdAEIgHgDQgFgCgNAAIgBAHQgigFhRADQhMACgkgIIgYAJIlXAEIiNgMIixAGIgqgUIABAWQAEgJAAAJIgDAMIgBgMIgEAIQACgBABAKQACAKAEgHQgEAUAFAHIAIAMIgGAMIACAnQgEABgBAEQABAKACALIAFASIAFgUIgBAHIAAAFIAAAAQgPBGADAjQACARADAJIgCgEQAEAngBA3IgBAnIBRAAQBXgBALAEQA2AFBxgDQBqgDAzAGQB4AGC7gDQD2gFBAAAIgCABIA7AFIALAAIAAAAgAmqEvgApfhlQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIgCAAgAA7lBIAEAAIABgCIAFACQAFAAAAACIgFAAQgGAAgEgCg");
	this.shape.setTransform(131.4864,27.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AJiDxIg7gFIACAAQhAgBj2AFQi7AEh4gHQgzgFhqACQhxADg2gFQgLgDhXAAIhRABIABgoQABg3gEgmIACAEQgDgKgCgRQgDgjAPhGIAAAAIAAgEIABgIIgFAUIgFgSQgCgKgBgKQABgEAEgCIgCgmIAGgNIgIgMQgFgHAEgUQgEAIgCgLQgBgKgCABIAEgIIABAMIADgMQAAgJgEAJIgBgVIAqAUICxgHICNAMIFXgEIAYgJQAkAIBMgCQBRgCAiAEIABgHQANAAAFACIAHAEIDdgEQABCEgEBaQgDAIgBAiQgBAfgCAHQAGAlABAxIABAlIgLgBgAo3hDIAAABIACAAIgCgBIAAAAgApuhfIAAiSIADAAIASAgIAIAEQgMAsgGAPQABgQgBADIgEALIACACQgBAKgDAFQgEAHAAACIABAAIACAEIgBgFQACgBAAAHIAAgBIgBAXgApth7QAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBABgAprh7IAAAAg");
	this.shape_1.setTransform(127.4935,24.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:72,font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:142,text:"EPCAM"}}]}).to({state:[{t:this.text,p:{x:66,font:"40px 'Helvetica'",lineHeight:36.55,lineWidth:146,text:"EPCAM"}}]},1).to({state:[{t:this.text,p:{x:68,font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:144,text:"EPCAM"}}]},1).to({state:[{t:this.text,p:{x:67.15,font:"37px 'Helvetica'",lineHeight:33.15,lineWidth:126,text:"EPCA"}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.1,-5.9,155,68);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgmmAt9QjIAAABjIMAAAhVpQgBjIDIAAMBNNAAAQDIAAgBDIMAAABVpQABDIjIAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-294,534.1,588.1);


(lib.popupnavigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010032").s().p("ACbEJQAEgFgGACQgGACADgGQAGgIgHAFQgIAFAGgHQACgGgGAGIgJAGIAEgFQAEgHgFAFQgSARAFgIQADgFgCAAIgDgBIgDAFQAAgFgJgDQgGgDADgKQgQAQAQgQIAAgDIgDACQABAAAAgBQABAAAAABQAAAAgBABQAAABgBABIgCACIACgFIgMALQgHAGAJgLQAGgIgDADQgBABAAAAQAAAAAAgBQAAAAABgBQABgBABgBQgMAJABgJQABgKgNAKIACgBIAAgEIgJAMQADgEgDABQgBABAAAAQgBAAAAgBQAAAAABgBQABgBABgBIABgBQAFgGABgCIAAgDIgGAHIgFAEQAEgHgDgBQgEAAAFgHIgIAHQAEgFgJADQgHAEAIgNIgYAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgCAHgKQADgHgHAEQgIAFgBgCQAJgKgBABQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBQgHAIABgCQAAgDgFAGIAIgJIgCgGIADgCIACgDQAAAAgBAAQAAAAAAAAQgBAAAAAAQABAAAAgBIgKAKIAKgLIAAgBIgDACIAEgDQAHgLgSAUIAFgIQgEADgEAHIAEgHQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAEgDQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgDgHAGIgNAPIAHgFIgOANIAGgIQgBABgBAAQAAAAAAAAQgBAAABAAQAAgBAAgBQACgCgGAGIAJgKIgJAIQAPgPADgHIABgDIgKAMIAIgKQABgCAAAAQAAgBAAABQgBAAgBABQgBABgCABIAIgJQABgDgGAIQgCACAAAAQgBABAAABQgBAAAAgBQABAAAAgBIAHgIIgJAFQgGACAFgHIADgDQADgGgFADIgCACIgDABIAGgHIgEACIAFgGQAFgIgLAIIgCAEIgYAbIgEADQgEAEADgFIAKgKIgPANQASgSAGgMQgBAAgHAFQgFADADgFIAMgPQAAgBgHAHQgCACgBABQgBABAAAAQgBABABAAQAAgBAAAAQACgFgEAFQgBABAAAAQgBABAAAAQAAAAAAAAQgBAAABgBIgBABIABgBQAAgBABgBQAAgBAAAAQAAgBAAAAQAAAAAAABIgCAAIgEACIAFAOQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgDAAgIgJIgBABIAAgBIAAAAQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBQAHAIgCgBQAAAAAAAAQgBAAABABQAAAAAAABQABAAAAABIgGgHIgFAAIgCgCIgDgDQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIAJALIgKgLIgBAAIABABIgCgDQgJgHARAUIgHgIIAIAKIgFgGQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgDgFQAAAAAAABQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgCAFAGIAOAPIAGAJIgHgIQADAEgDgDQgDgBAGAHIgKgLIAIAKQgOgRgFgEIgDgCIAKAMIgJgJQgBgBAAAAQgBgBAAABQABAAAAABQABACACACIgIgKIAEAGQABACABAAQABABAAABQAAAAAAAAQAAAAgBgBIgHgIIAEAJQADAGgHgGIgEgDQgEgEACAFIACACIAAADIgFgGIABADIgFgGQgIgGAJAMIADACIAXAcIADAFQADAEgDgEIgKgLIAJANQgOgRgJgHIAEAHQADAGgFgEIgNgOQAPASgHgGQgBgBgBAAQAAAAAAAAQAAAAAAABQABAAABABQABABAAABQABABAAAAQAAAAAAAAQAAAAgBAAIABABIgBgBQgBgBgBAAQAAgBgBAAQAAAAAAAAQAAAAAAABIABACIADAEQAMAOgPgOIAJAKQgQgNgFABIgFgEIACADIAEADIgKgEQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABIAEAFIgMgMQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABIAAACIgDgEIABgEIABgDIgHgIIgHgGIAJALQgHgGgBACQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAgBQgCAAAIAKIgBgEIAGAGQgBABAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCgCIAAAAIgOgLIABgBIgKgJQgCgCAHAJQAFAGgKgJIgJgJQAFAGgGgFIgMgJIAbAbIgFgCQgBAAAAAAQgBAAAAABQAAAAABABQAAAAAAABIgHgHIAEAFIgFgEQAFAGASAUIgCgDQAHAIgKgHQgMgJACAEIAJAJIgMgKQAGAHgDgBIgGgEIgHgHIgJgIQAMAMgFgEQgLgNgEAAQAAAAgBAAQAAgBAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAAAQgBAAAAgBQgBAAgBgBIgPgMQgNgLAGAIIgGgGIgBAAIgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAABIgIgHIADACIgGgEQgCgCADABIgmgiQgGgHgBgHIAGAFIgEgFIgIgJQAGAFgFgGIgKgMIAIAIIAAgFIAGAGIgHgLIgGgGIgBgBIABABQAXASgDgGQgGgKABABIACAEQgDgIAFAAQAGgBgBgEIgNgMQgDgFAEgHQAEgIAHAHQAJAEABgJQACgJAKAHQAOACAFgNQAGgRAEgDIABABIAAAAQAHgHgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBQgHAIABgCQAAgBAAAAQgBAAAAAAQgBAAAAABQgBABgBABIAHgIIgBgFIACgDIADgCQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgKAKIAKgLQABgBAAAAQAAAAAAAAQAAAAgBABQgBABgBABIAEgEQAFgKgNAPIACgDIgIAJIAEgHQACgDgDACIAFgFQgBABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQACgDgHAGIgNAPIAHgFIgPAMIAHgHQgEACADgDQABgCgGAGIAJgLIgJAJIASgVIABgEIgJALIAHgJQABgBAAgBQAAAAAAAAQgBAAgBABQgBABgBACIAIgJQABgDgHAHQgBABgBABQgBABAAAAQAAAAAAAAQAAAAABgBIAGgHIgJAEQgFADAEgHIAEgEQACgEgEABIgCACIgDABIAFgGIgDABIAFgFQAFgJgLAJIgCAEIgZAbIgEADQgDADACgDIAKgLIgOAMQASgSAFgLQgBAAgHAFQgFAEAEgGIALgOQABgCgIAHQgBACgBABQgBABgBABQAAAAAAAAQAAgBABAAQACgFgEAFQgBABgBAAQAAABgBAAQAAAAAAAAQAAAAAAgBIAAAAQABgBAAgBQABgBAAAAQAAAAAAgBQAAAAgBAAIgCACIgEADQgIAIADgEIAFgHIgJAKQALgSgCgFQAHgLgHAIIgDAEQADgKAAgCQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBgBAAIgBACQAFgHABgEQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAgBAAIgDABIAEgFQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIABgCIAAABIgBABIgBAAIALgRIABAAIAIgLQABgCgHAHQgHAHAIgMIAHgKQgHAIANgWIgXAeIABgFQAAgBAAgBQgBAAAAAAQAAAAgBAAQAAAAgBABIAGgIIgFAEIAEgFIgXAaIACgDQgHAHAGgKQAGgNgDACQgBACgBACQgBABgBAAQAAAAAAAAQABgBABgCIgEAGIAGgMQgHAHABgDQADgGAAgBIAGgHIAHgKQgKAMACgEQALgNAAgEQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgBABgBIAJgRQAIgNgHAGIAGgHQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIABgBIgDACIgBABQAGgHABgEIgDADIAFgFQABgCgBACQAKgOASgdQAHgHAHgCIgFAHIAFgEQACgCAGgHQgEAHAGgHIALgKIgHAJIAEAAIgFAGIAMgIIAFgJIgBACQgOAaAGgDIAIgGIgCACQAHgDABAFQACAGAFgBIAJgNQAFgEAJAEQAKADgGAIQgCAKAKACQAKABgFAMQAAAPAQAFQAVAGAEAEIgBAAIgDAKQAAAFAGgFIgCADIADgBIgBABQACAFAEAAQAFgBAJgGQgDAEABADQABADgDAFQAAANANAFIAGACIABgCQAHgTAEgCIABACIAKADQAEACgEgIIACAEIAAgEIABACQADgCAAgDQAAgFgEgKQADADACABQADAAAEACQANAEAFgMIAJgUIAFAEQABABAAAAQABABAAAAQABAAAAAAQAAAAAAAAIgJgLQAIAGABgIQACgGAMAKIgKgOIANgWIAXALIABgSIBcBcIAoA1IgCgCQgGgFACAHQACAFgGgFQgGgGAEAHQAEAJgGgHQgFgDAFAHIAFAJIgFgFQgFgEAEAEQAPAVgHgGQgEgFgBADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAEAEQgEgBgDAHQgDAGgIgFQANARgOgSIgDAAIACADIAKANQAFAIgKgLQgHgHACAEQABABAAAAQAAAAAAAAQgBAAgBgBQgBgBgBgBQAIANgIgDQgIgEAJAPIgCgCIgDgBIALALQgFgFACAFQAAAAAAAAQAAABAAgBQgBAAAAgBQgBAAgBgBIgBgCIgHgHIgDgBIAGAHIAEAFQgGgFgBAEQAAACgHgFIAHAJQgGgFADAIQADAJgLgLIAHAXQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDgBgJgIQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAABgBgBQAAAAgBAAQAAgBgBAAQAHAHgCAAQgCgCAFAFIgIgIIgGAAIgCgBIgDgDQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAJAKIgKgKIgBgBIgBgBQgKgIASATIgHgGIAGAGIgDgBQgBgBAAAAQgBgBAAAAQAAAAAAABQAAAAAAABIgDgFQAAABAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgDAFAIIABAAIAFACQAWAGADAEIgBABIgCAKQAAAFAGgFIgCADIADAAIgBABQAEAJARgMQgDAFABADQABAEgDADQAAAOAOAGIAZAIQgHAJABAAIAKgKQgEAJAIABQAHACgHANIAMgLIAbANIgGAZIAUABIhRBnIgwAtgAgbAJIAIAIIADAEQAFgKgGAGIAGgHQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAABIAAgBIgCACIgBAAIAEgFIgBgBIgIgEIAAAAIABACIgCgCgAjFAFIgBAAIgFADIAGADIACgCIgCgDIADACIAAAAIAAgDIAAACQABgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDABgAj8hVIAEABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgIIAEgHIgJAKQAEgIgBAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgCgIAJIAEgBgAC7hCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABABABIADAEIgFgFg");
	this.shape.setTransform(25.175,18.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AEkGJQADgHgHABQgHABACgGIgBABIABgCIAAABQAGgHgJACQgJAEAFgHQACgGgHAFIgLAFQALgPgIAGQgTARAEgJQACgFgCgBIgFgCIgDAFQgCgFgMgHQgKgHABgKQgQAOAQgPIgBgFIgDACIgNAKQgHAGAIgMQAGgHgEACQgBAAAAAAQAAAAAAAAQAAgBABAAQABgBABgBQgOAHgBgLQgBgMgQAJIADgBIgBgEIgJAMQAEgFgFABQgEAAAEgEIABgBQAGgGAAgCIAAgFIgGAIIgGAEQAEgIgGgCQgEgCAEgHIgIAHQACgHgKACQgKACAIgNQgGgBgJACIgQACIgFgGQgBgFAHgKQABgHgIADQgJADgBgCQAJgJgCgBQgBAAgBgBQAAAAAAgBQAAAAAAgBQAAgBABAAQgHAIAAgDQAAgDgGAGIAIgJIgEgIIADgDQABgBAAAAQABgBAAAAQABgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgLAKIALgLQAAgBAAAAQAAAAAAAAQAAAAgBAAQgBABgBABIADgDQACgGgDADQgEADgHAHQAHgIgCABQgCABgGAIIAEgHQACgEgEACIAFgFQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQACgEgHAGIgOAPIAIgFIgQANIAGgJQgDACACgDQABgDgGAHIAJgLIgKAIQARgTABgEIAAgDIgKAMIAHgLQAEgFgIAGIAIgJQABgCgHAGQgBACgBABQgBAAAAABQgBAAABgBQAAAAAAgBIAHgHIgLACQgHACAEgJIADgDQACgGgGADIgBACIgEgBIAFgHIgEABIAFgFQADgJgLAHIgCAEIgZAaIgFADQgEAEACgEIAKgLQgEACgJAHQAPgOAFgNQgBgCgIAFQgFADACgGIALgQQABgCgIAJQgCABgBABQgBABAAAAQgBABAAgBQAAAAABgBQABgEgEAEQgBABAAAAQgBABgBAAQAAAAAAAAQAAgBAAAAIgBAAIABgBQAAgBABgBQAAgBAAAAQAAgBAAAAQAAAAgBAAIgDABIgFACQgIAIADgEIAEgIIgJAKQAJgSgFgJQAEgFgBAAIgEAAIgCAFQABgLgBgDQgBgCgFgEIgGAGQAHgHADgJQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgFAAIAEgEQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIACgBIAAAAIgCABQAGgKADgJIABACIAHgMQABgCgIAGQgGAHAGgNIAHgLQgIAKALgaIgVAfIgBgHQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAGAKgFgEQgFgEgBACIgCAEIAEAEQgEAAgHAJQgFAJgKgEQANARgOgRIgDAAIABACIABgBIACACIADAEQgCgBgDgEIAIAPQAFAHgKgKQgHgHACAFIgDgDQAHAOgKgCQgLgBAIAQIgBgDIgEgBIALAMQgFgFABAFQABABgBAAQAAABAAgBQgBAAAAgBQgBAAgBgBIgBgCQgGgHgBABIgEgBIAHAGIADAHQgHgGgCAFQgBAEgHgFIAHAJQgGgFABAKQABAJgLgKIACAcQgDADgCAAQgEABgJgIQgGgEACAIQADAKgBAAQgJgKAAACQAAAAgBABQAAAAgBAAQAAAAgBgBQgBAAgBgBQAIAIgDgBQgCAAAFAGIgJgJIgHABIgBgCQgBgBgBgBQgBAAAAgBQgBAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIAIAMIgJgMQgBAAAAAAQAAgBAAAAQgBAAAAABQABAAAAAAIAAABIgCgCQgEgDACAEIAJAMIgHgHQABADAHAGIgGgEQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAABAAABIgDgGQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBgBQgDgCAFAIIAOAPIgFgHIALAQIgHgHQACAEgDgDQgCgBAFAGIgKgKIAHAKQgQgSgDgDIgEgBIALAMIgKgJQgFgEAGAIIgIgJQgCgBAGAHQACACAAABQABABAAAAQAAAAAAAAQgBAAgBgBIgGgHIACAKQACAGgIgFIgDgDQgDgDAAAFIACABIgBAFIgGgHIABAEIgEgFQgIgFAGAMIADACIAXAcIADAFQADAEgEgCIgKgNIAJAPQgNgRgLgIQgBACAEAHQACAGgFgDIgOgOQgBAAAHAIQABACABACQABABAAAAQAAABAAAAQAAgBgBgBQgEgBADAEQABABABABQAAAAABABQAAAAgBAAQAAAAgBAAIAAAAQgBgBgBAAQAAgBgBAAQAAAAAAAAQAAAAAAABIAAACIACAGQAIAIgFgDIgGgFIAIAKQgQgMgIACQgHgIADAJIAEADQgKgDgCAAQgCAAgDAEIAEAGQgHgJgGgDIgBACQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgDgEIADgFQABgEABgBIgHgIIgIgFIAJAMQgHgGgBACQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgCABAHAJIAAABIABAAIgQgLIABgBIgKgJQgCgBAGAIQAGAHgMgJIgJgIQAFAGgHgDIgMgJIAaAbIgGgCQAAAAgBABQAAAAgBAAQAAABAAAAQAAABABABIgHgHIADAGIgFgFIAWAaQADAGgJgGQgNgHACAEIAJAIIgFgDQgEgDgFgCQAHAIgEgCIgIgCQgGgHAAgBIgKgGQAMAKgFgDIgIgHQgFgFgDAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABQAAABAAAAQAAAAgBAAQAAAAgBAAQgBgBgBgBIgRgKQgOgJAGAIIgGgHQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIgBgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABABIACADIgMgKIADADIgGgFQgBAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIgqgfQgGgIACgIIAFAFIgDgFQgBgCgHgHQAHAFgFgIIgJgLIAIAHIABgGIAGAGIgGgNIgIgGIACABIgBgCIACACQAZAQgCgHQgGgLACACIACADQgCgJAHgCQAHgCABgFIgNgLQgDgGAIgLQAHgMAIAGQAKADAGgMQAFgLAMAEQASAAALgTQAOgaAGgDIABABIALACQAFABgEgIIADADIAAgEIABACQAGgDABgEQACgHgFgLQAEADAEgBQAEAAADACQAQABALgQQAKgUAHgIIAFAEQABABAAABQABAAABAAQAAAAAAAAQABAAAAAAIgGgHIgJAEIACgCIAAgEIgJALQADgEgEABQgEABAEgFIABAAQAGgHAAgCIAAgEIgGAIIgGADQAEgHgFgCQgFgCAFgHIgJAHQADgGgKACQgJABAIgNQgGAAgJACIgPACQgDgDgBgDQgCgDAHgLQABgIgHAEQgKADgBgBQAJgKgCgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBQgHAJAAgEQAAgDgGAHIAIgKIgDgIIACgBQABgCABAAQABgBAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQABgBAAAAIgLAKIAKgLQABgBAAAAQAAAAgBAAQAAAAgBAAQAAABgBABIADgEQAEgKgQATQAGgJgBABQgDACgFAHIAEgHQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBABIAFgEQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABgBQABgEgHAGIgOAQIAIgGIgQANIAHgIQgEACACgDQABgDgGAGIAJgLIgKAJQARgRABgGIAAgEIgKAMIAIgKQADgGgHAHIAIgKQABgCgHAHQgBACgBAAQgBABAAABQgBAAABgBQAAAAAAgBIAHgHIgLACQgHACAEgIIADgEQACgDgFAAIgBACIgFAAIAGgHIgEABIAEgFQAEgJgLAIIgCADIgZAaIgFADQgEAEACgFIAKgLIgOALQARgPAFgNQgCgCgHAFQgGADADgGIALgPQAAgBgHAHQgHAHACgFQACgEgEAEQgBABAAABQgBAAgBAAQAAAAAAAAQAAAAAAgBIgBABIABgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAgBAAIgCAAIgGADQgIAJADgFIAEgHIgJAJQAKgTgFgIQAEgEgBgBIgEABIgDAFQABgLgBgDQAAgCgGgDIgFAEQAGgFAEgJQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEAAIADgEQALACACADIAHgIIADgJIgKAKQAEgIgDgBIgEgBQgBgDgJAJIAAAAIgBACIABgCIAGAAIgGAGQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBABAAIgBAAIAKgTIABACIAHgNQABgCgHAHQgHAGAHgNIAHgKQgFAGACgIIAGgOIgWAfIgBgHQAAgEgEACIAGgIIgFADIADgEQgGAEgSAVIACgDQgHAIAFgMQAEgOgDABQgBACgBABQgBACgBAAQAAAAAAAAQAAAAABgCIgDAGQADgGACgIQgHAIAAgFIABgIQAEgIADABIAFgLIgFAGQgBABAAABQgBABAAAAQAAAAAAAAQAAgBAAgBIAGgJQAEgGgBgCQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQgDAAADgFIAHgTQAGgPgHAGIAGgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAIABgBIgDACIgCAEIABgBIgCACIAEgHIAEgIIgCADIADgHQABgBAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAJgPAPgfQAIgIAIACIgEAHQACgDADgBQACgBAGgIQgEAIAHgGIALgLIgGAKIAGABIgFAGQACABAEgDIAHgEIAFgKIgBADIABgBIgBABQgLAcAHgCQALgHgBACIgDADQAJgDADAHQAEAIAGABIAJgPQAGgDANAIQAOAIgEAIQgBAMAPAGQAOAFgDAOQAFASAYALQAeAPAGAGIgBACIAAAMQABAFAHgEIgCADIAEAAIgBACQAIAMATgJQgCAFACAEQABAFgCAEQAEAQAUALIAjASIgDAFQgBABAAABQgBABAAAAQAAABABAAQAAAAAAABIAJgLQgCAKALAEQAFACABAFQADgDADgFQAGgMAMAEQASAAALgVQAQgaAGgDIABABIALABQAGABgEgIIADAEIAAgFIABABQAGgDABgDQACgHgEgLQAEADAEgBQAEgBAEACQAQAAAMgRIATgdIAEAEQABABABAAQABAAAAABQABAAAAAAQABgBAAAAIgKgLQAJAFAFgKQAEgJANAJIgJgPIAZghIAcAGIAHgXIAtAnIAyA0IAmA3IgCgDQgGgDAAAHQABAGgFgDIAAAAIgBAAIABAAQgIgHADAIQADAKgHgGQgFgDAEAHIAFAKIgFgEQgGgFADAGQAOAUgHgFQgFgDgBABQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAAAIAEAEQgFABgHAJQgGAJgKgEQANASgNgSIgEABIACACIAIAOQAFAHgLgIQgGgIACAEIgDgCQAGANgKgBQgLAAAIAPIgCgCIgDAAIALAKQgFgEABAFQAAAAAAABQAAAAgBAAQAAAAgBgBQgBAAgBgBIgBgCQgFgGgCAAIgEgBIAHAHIADAGQgHgFgCAEQgBAFgHgGIAGAJQgGgEACALQABAIgMgJQgBAJACATIgFADQgEABgJgJQgHgCADAIQACAKgBAAQgJgKAAACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBgBgBgBQAHAIgCAAQgDgBAFAHIgIgJIgHABIgCgDQgBgBAAAAQgBgBgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBgBIAJAMIgKgMQgBAAAAAAQAAAAAAAAQAAAAAAABQABABABACIgEgFQgEgCACADIAJANIgHgHQABADAIAGIgHgFQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAABIgDgGQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBgBQgDgBAFAHIANAPIgEgIIALARIgIgIQACAEgDgCQgCgBAFAGIgJgKIAHAKQgQgSgEgCIgEgBIALALIgJgJQgFgDAGAIIgJgJQgCgCAGAHQACACAAABQABABAAABQABAAgBAAQAAAAgBgBIgHgIIACALQACAGgIgFIgDgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAABgBAAIAAACIACACIAAAEIgGgGIAAADIgEgEQgIgFAGALIADADIAXAcIADAFQADAEgEgCIgKgNIALARQgPgTgLgHQgCABAEAIQACAFgFgDIgNgNQgCAAAHAIQABACABABQABABAAAAQAAABAAAAQAAAAgBgBQgEgCADAFQABABABAAQAAABABAAQAAABgBAAQAAAAgBgBIABABIgBgBQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABIAAACIACAEIAIAEQAPAFgDANQAFAUAZAMQAgAQAGAGIgBABIABANQABAFAHgDIgDACIAFABIgBABQAJANATgJQgDAFACAEQACAFgCAEQAEASAVALIAlATIgDAGQgBABAAAAQgBABAAABQAAAAABABQAAAAAAAAIAKgKQgDAKAMAFQAKADgGAPIANgKIAqAaIAAAeIAbAHIggAyIgtA5IgzAqgAgHCDIAGAAIgGAGIAHADIAFADIAHgJIADgIIgKAKQAEgIgDgCQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQgCAAgGAHgAgQBbIACAEIAFgHIgGAEIACgDIAAgBIgDADgAgNBYIAAABIACgDIgCACgAgqAEIAHAJIAKANQAGgPgHAGIAFgGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIABgBQAAAAAAAAQAAAAAAAAQgBABAAAAQgBABgBAAIgCADQAHgJAAgDIgCACIADgGIAAAAIgCgBQgHgFgCAAIgBABIACADIgCgDgADVFVQABAAAAABQABAAAAAAQAAABgBAAQAAABgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAgBABQABgDACgEgAjpEUIgCgCIAAgFIAGAGIgCACIgCgBgAjlETgAjrESIAAAAgAETijQAAgBAAAAQAAAAAAAAQAAAAABAAQABABABAAIACAFIgFgFgAldl7IAEgFIgCAFgAlGl/QAHgJgHAJg");
	this.shape_1.setTransform(26.3734,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("ACbEJQAEgFgGACQgGACADgGQAGgIgHAFQgIAFAGgHQACgGgGAGIgJAGIAEgFQAEgHgFAFQgSARAFgIQADgFgCAAIgDgBIgDAFQAAgFgJgDQgGgDADgKQgQAQAQgQIAAgDIgDACQABAAAAgBQABAAAAABQAAAAgBABQAAABgBABIgCACIACgFIgMALQgHAGAJgLQAGgIgDADQgBABAAAAQAAAAAAgBQAAAAABgBQABgBABgBQgMAJABgJQABgKgNAKIACgBIAAgEIgJAMQADgEgDABQgBABAAAAQgBAAAAgBQAAAAABgBQABgBABgBIABgBQAFgGABgCIAAgDIgGAHIgFAEQAEgHgDgBQgEAAAFgHIgIAHQAEgFgJADQgHAEAIgNIgYAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgCAHgKQADgHgHAEQgIAFgBgCQAJgKgBABQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBQgHAIABgCQAAgDgFAGIAIgJIgCgGIADgCIACgDQAAAAgBAAQAAAAAAAAQgBAAAAAAQABAAAAgBIgKAKIAKgLIAAgBIgDACIAEgDQAHgLgSAUIAFgIQgEADgEAHIAEgHQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAEgDQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgDgHAGIgNAPIAHgFIgOANIAGgIQgBABgBAAQAAAAAAAAQgBAAABAAQAAgBAAgBQACgCgGAGIAJgKIgJAIQAPgPADgHIABgDIgKAMIAIgKQABgCAAAAQAAgBAAABQgBAAgBABQgBABgCABIAIgJQABgDgGAIQgCACAAAAQgBABAAABQgBAAAAgBQABAAAAgBIAHgIIgJAFQgGACAFgHIADgDQADgGgFADIgCACIgDABIAGgHIgEACIAFgGQAFgIgLAIIgCAEIgYAbIgEADQgEAEADgFIAKgKIgPANQASgSAGgMQgBAAgHAFQgFADADgFIAMgPQAAgBgHAHQgCACgBABQgBABAAAAQgBABABAAQAAgBAAAAQACgFgEAFQgBABAAAAQgBABAAAAQAAAAAAAAQgBAAABgBIgBABIABgBQAAgBABgBQAAgBAAAAQAAgBAAAAQAAAAAAABIgCAAIgEACIAFAOQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgDAAgIgJIgBABIAAgBIAAAAQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBQAHAIgCgBQAAAAAAAAQgBAAABABQAAAAAAABQABAAAAABIgGgHIgFAAIgCgCIgDgDQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIAJALIgKgLIgBAAIABABIgCgDQgJgHARAUIgHgIIAIAKIgFgGQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgDgFQAAAAAAABQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgCAFAGIAOAPIAGAJIgHgIQADAEgDgDQgDgBAGAHIgKgLIAIAKQgOgRgFgEIgDgCIAKAMIgJgJQgBgBAAAAQgBgBAAABQABAAAAABQABACACACIgIgKIAEAGQABACABAAQABABAAABQAAAAAAAAQAAAAgBgBIgHgIIAEAJQADAGgHgGIgEgDQgEgEACAFIACACIAAADIgFgGIABADIgFgGQgIgGAJAMIADACIAXAcIADAFQADAEgDgEIgKgLIAJANQgOgRgJgHIAEAHQADAGgFgEIgNgOQAPASgHgGQgBgBgBAAQAAAAAAAAQAAAAAAABQABAAABABQABABAAABQABABAAAAQAAAAAAAAQAAAAgBAAIABABIgBgBQgBgBgBAAQAAgBgBAAQAAAAAAAAQAAAAAAABIABACIADAEQAMAOgPgOIAJAKQgQgNgFABIgFgEIACADIAEADIgKgEQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABIAEAFIgMgMQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABIAAACIgDgEIABgEIABgDIgHgIIgHgGIAJALQgHgGgBACQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAgBQgCAAAIAKIgBgEIAGAGQgBABAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCgCIAAAAIgOgLIABgBIgKgJQgCgCAHAJQAFAGgKgJIgJgJQAFAGgGgFIgMgJIAbAbIgFgCQgBAAAAAAQgBAAAAABQAAAAABABQAAAAAAABIgHgHIAEAFIgFgEQAFAGASAUIgCgDQAHAIgKgHQgMgJACAEIAJAJIgMgKQAGAHgDgBIgGgEIgHgHIgJgIQAMAMgFgEQgLgNgEAAQAAAAgBAAQAAgBAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAAAQgBAAAAgBQgBAAgBgBIgPgMQgNgLAGAIIgGgGIgBAAIgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAABIgIgHIADACIgGgEQgCgCADABIgmgiQgGgHgBgHIAGAFIgEgFIgIgJQAGAFgFgGIgKgMIAIAIIAAgFIAGAGIgHgLIgGgGIgBgBIABABQAXASgDgGQgGgKABABIACAEQgDgIAFAAQAGgBgBgEIgNgMQgDgFAEgHQAEgIAHAHQAJAEABgJQACgJAKAHQAOACAFgNQAGgRAEgDIABABIAAAAQAHgHgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBQgHAIABgCQAAgBAAAAQgBAAAAAAQgBAAAAABQgBABgBABIAHgIIgBgFIACgDIADgCQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgKAKIAKgLQABgBAAAAQAAAAAAAAQAAAAgBABQgBABgBABIAEgEQAFgKgNAPIACgDIgIAJIAEgHQACgDgDACIAFgFQgBABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQACgDgHAGIgNAPIAHgFIgPAMIAHgHQgEACADgDQABgCgGAGIAJgLIgJAJIASgVIABgEIgJALIAHgJQABgBAAgBQAAAAAAAAQgBAAgBABQgBABgBACIAIgJQABgDgHAHQgBABgBABQgBABAAAAQAAAAAAAAQAAAAABgBIAGgHIgJAEQgFADAEgHIAEgEQACgEgEABIgCACIgDABIAFgGIgDABIAFgFQAFgJgLAJIgCAEIgZAbIgEADQgDADACgDIAKgLIgOAMQASgSAFgLQgBAAgHAFQgFAEAEgGIALgOQABgCgIAHQgBACgBABQgBABgBABQAAAAAAAAQAAgBABAAQACgFgEAFQgBABgBAAQAAABgBAAQAAAAAAAAQAAAAAAgBIAAAAQABgBAAgBQABgBAAAAQAAAAAAgBQAAAAgBAAIgCACIgEADQgIAIADgEIAFgHIgJAKQALgSgCgFQAHgLgHAIIgDAEQADgKAAgCQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBgBAAIgBACQAFgHABgEQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAgBAAIgDABIAEgFQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIABgCIAAABIgBABIgBAAIALgRIABAAIAIgLQABgCgHAHQgHAHAIgMIAHgKQgHAIANgWIgXAeIABgFQAAgBAAgBQgBAAAAAAQAAAAgBAAQAAAAgBABIAGgIIgFAEIAEgFIgXAaIACgDQgHAHAGgKQAGgNgDACQgBACgBACQgBABgBAAQAAAAAAAAQABgBABgCIgEAGIAGgMQgHAHABgDQADgGAAgBIAGgHIAHgKQgKAMACgEQALgNAAgEQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgBABgBIAJgRQAIgNgHAGIAGgHQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIABgBIgDACIgBABQAGgHABgEIgDADIAFgFQABgCgBACQAKgOASgdQAHgHAHgCIgFAHIAFgEQACgCAGgHQgEAHAGgHIALgKIgHAJIAEAAIgFAGIAMgIIAFgJIgBACQgOAaAGgDIAIgGIgCACQAHgDABAFQACAGAFgBIAJgNQAFgEAJAEQAKADgGAIQgCAKAKACQAKABgFAMQAAAPAQAFQAVAGAEAEIgBAAIgDAKQAAAFAGgFIgCADIADgBIgBABQACAFAEAAQAFgBAJgGQgDAEABADQABADgDAFQAAANANAFIAGACIABgCQAHgTAEgCIABACIAKADQAEACgEgIIACAEIAAgEIABACQADgCAAgDQAAgFgEgKQADADACABQADAAAEACQANAEAFgMIAJgUIAFAEQABABAAAAQABABAAAAQABAAAAAAQAAAAAAAAIgJgLQAIAGABgIQACgGAMAKIgKgOIANgWIAXALIABgSIBcBcIAoA1IgCgCQgGgFACAHQACAFgGgFQgGgGAEAHQAEAJgGgHQgFgDAFAHIAFAJIgFgFQgFgEAEAEQAPAVgHgGQgEgFgBADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAEAEQgEgBgDAHQgDAGgIgFQANARgOgSIgDAAIACADIAKANQAFAIgKgLQgHgHACAEQABABAAAAQAAAAAAAAQgBAAgBgBQgBgBgBgBQAIANgIgDQgIgEAJAPIgCgCIgDgBIALALQgFgFACAFQAAAAAAAAQAAABAAgBQgBAAAAgBQgBAAgBgBIgBgCIgHgHIgDgBIAGAHIAEAFQgGgFgBAEQAAACgHgFIAHAJQgGgFADAIQADAJgLgLIAHAXQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDgBgJgIQgFgEADAHQAEAIgBAAQgIgKgBACQAAAAAAAAQAAABgBgBQAAAAgBAAQAAgBgBAAQAHAHgCAAQgCgCAFAFIgIgIIgGAAIgCgBIgDgDQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAJAKIgKgKIgBgBIgBgBQgKgIASATIgHgGIAGAGIgDgBQgBgBAAAAQgBgBAAAAQAAAAAAABQAAAAAAABIgDgFQAAABAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDgDAFAIIABAAIAFACQAWAGADAEIgBABIgCAKQAAAFAGgFIgCADIADAAIgBABQAEAJARgMQgDAFABADQABAEgDADQAAAOAOAGIAZAIQgHAJABAAIAKgKQgEAJAIABQAHACgHANIAMgLIAbANIgGAZIAUABIhRBnIgwAtgAgbAJIAIAIIADAEQAFgKgGAGIAGgHQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAABIAAgBIgCACIgBAAIAEgFIgBgBIgIgEIAAAAIABACIgCgCgAjFAFIgBAAIgFADIAGADIACgCIgCgDIADACIAAAAIAAgDIAAACQABgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDABgAj8hVIAEABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgIIAEgHIgJAKQAEgIgBAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgCgIAJIAEgBgAC7hCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABABABIADAEIgFgFg");
	this.shape_2.setTransform(25.175,18.65);

	this.instance = new lib.CachedBmp_51();
	this.instance.setTransform(-25.7,-29.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_50();
	this.instance_1.setTransform(-3,-7.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-29.3,108,109);


(lib.popup_base_messageboxcopy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of gastric cancer in carriers with female reproductive organs to below 10%. This risk is below 1% in the general population.\n", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 552;
	this.text.parent = this;
	this.text.setTransform(19.25,77.7);

	this.text_1 = new cjs.Text("MSH2-FEMALE-STOMACH", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 540;
	this.text_1.parent = this;
	this.text_1.setTransform(30,6.25);

	this.text_2 = new cjs.Text("", "35px '_sans'", "#CCCCCC");
	this.text_2.lineHeight = 42;
	this.text_2.lineWidth = 100;
	this.text_2.parent = this;
	this.text_2.setTransform(30,2.25);

	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-10,-10,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_39();
	this.instance_1.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,597.5,380.7);


(lib.popup_base_messageboxcopy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of cancer in the urinary tract of carriers with male reproductive organs to below 30%. This risk is below 1% in the general population.\n", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 534;
	this.text.parent = this;
	this.text.setTransform(10.1454,59.65,1.0716,1);

	this.text_1 = new cjs.Text("MSH2-MALE-URINARY TRACT", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 584;
	this.text_1.parent = this;
	this.text_1.setTransform(10,-22.7);

	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-12,-39.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_36();
	this.instance_1.setTransform(-10,-41.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-41.5,608.2,436);


(lib.popup_base_messageboxcopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of cancer in the urinary tract of carriers with female reproductive organs to 10%. This risk is below 1% in the general population.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 642;
	this.text.parent = this;
	this.text.setTransform(-24,71.7);

	this.text_1 = new cjs.Text("MSH2-FEMALE-URINARY TRACT", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 628;
	this.text_1.parent = this;
	this.text_1.setTransform(-24,-20);

	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-47.95,-43.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(-47.95,-43.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-43.9,673.5,366.7);


(lib.popup_base_messageboxcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH2 mutation increases the risk of colorectal cancer in the lifetime of carriers with female reproductive organs to between 35% and 55%. This risk is below 2% in the general population.", "34px 'Helvetica'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 546;
	this.text.parent = this;
	this.text.setTransform(-52.45,79.5,1.1229,1);

	this.text_1 = new cjs.Text("MSH2-FEMALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 572;
	this.text_1.parent = this;
	this.text_1.setTransform(-52.7,-4.05);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-83.9,-28,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-83.95,-27.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-28,665.5,392.4);


(lib.popup_base_messagebox_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text_2 = new cjs.Text("The MLH1 mutation increases the risk of gastric cancer in carriers with male reproductive organs to below 10%. This risk is below 1% in the general population.", "35px 'Helvetica'");
	this.text_2.lineHeight = 42;
	this.text_2.lineWidth = 556;
	this.text_2.parent = this;
	this.text_2.setTransform(22,83,1,0.9044);

	this.text_3 = new cjs.Text("MLH1-MALE-STOMACH", "40px 'Helvetica'", "#FFFFFF");
	this.text_3.lineHeight = 48;
	this.text_3.lineWidth = 536;
	this.text_3.parent = this;
	this.text_3.setTransform(30,2.25);

	this.instance_2 = new lib.CachedBmp_65();
	this.instance_2.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_3},{t:this.text_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,597.5,320.1);


(lib.mlh1femaleovariespopupmessage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MLH1 mutation increases the risk of ovarian cancer in the lifetime of carriers to between 10% and 15%. This risk is below 2% in the general population.", "30px 'Helvetica'");
	this.text.lineHeight = 36;
	this.text.lineWidth = 687;
	this.text.parent = this;
	this.text.setTransform(2,70.9);

	this.text_1 = new cjs.Text("mlh1-female-ovaries", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 542;
	this.text_1.parent = this;
	this.text_1.setTransform(317.45,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("EAzUgOgIAAdBMhmnAAAIAA9B");
	this.shape.setTransform(328.425,146.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(20,1,1).p("EgzTgD8MBmnAAAIAAH5MhmnAAAg");
	this.shape_1.setTransform(328.425,28.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("EgzTAOhIAA9BMBmnAAAIAAdBg");
	this.shape_2.setTransform(328.425,146.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("EgzTAD9IAAn5MBmnAAAIAAH5g");
	this.shape_3.setTransform(328.425,28.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-7.2,700.8,263.3);


(lib.mlh1femalecolorectlpopup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text_2 = new cjs.Text("The MSH2 mutation increases the risk of colorectal cancer in the lifetime of carriers with male reproductive organs to between 45% and 75%. This risk is 2% in the general population.\n", "35px 'Helvetica'");
	this.text_2.lineHeight = 42;
	this.text_2.lineWidth = 687;
	this.text_2.parent = this;
	this.text_2.setTransform(10.05,75.55);

	this.text_3 = new cjs.Text("MSH2-MALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_3.lineHeight = 48;
	this.text_3.lineWidth = 654;
	this.text_3.parent = this;
	this.text_3.setTransform(10.05,3.1);

	this.instance_1 = new lib.CachedBmp_64();
	this.instance_1.setTransform(-10.5,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_3},{t:this.text_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,733,379);


(lib.colonwithparts_0001_wholegutpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// whole_gut
	this.instance = new lib.wholegut();
	this.instance.setTransform(947,513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947,513,2166,2044);


(lib.description_navigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AjcFHQgGgEABgCIgIgEQAKAHgFgBQgJgJgEACQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQAAABgBAAQAAAAgBgBQgBAAgBAAIgOgFQgMgFAEAGIgEgFQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAgBQAAAAgBAAQAAAAABABQAAAAAAAAQAAABABAAIABACQgGgFgDAAIACACIgFgDQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIgWgMIgOgGQgEgFACgIIAFADQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgCgGgEQAGACgEgFIgHgJIAHAEIACgFIAFAEIgEgLIgGgDIAAAAIAAgBIABABQAVAJAAgHQgEgIABAAIACADQgBgIAHgDQAHgEACgGIgMgGQgBgFAIgMQAJgMAGADQAJAAAIgNQAGgNALACQARgFAMgVQARgbAGgGIABABIAKgBQAFgBgCgGIACACIABgDIAAABQAGgEACgEQACgGgDgKQAEACAEgCQAEgCADACQAPgEAMgSQAMgWAIgJQAGAFABgCIgHgIQAIACAFgKQAEgJAMAFIgHgKIAFgGQgBgDACgDQgBgNgOgIQgTgLgDgEIABAAIACgJQAAgEgGADIADgCIgDAAIABgBQgDgEgCgBQgFgBgIAEQACgDgBgDQAAgDACgDQAAgMgMgHQgPgIgHgFIADgDQABgBAAAAQAAgBAAAAQABgBAAAAQgBAAAAAAIgHAGQADgGgHgDQgGgCAGgKIgKAGIgYgRIAFgUIgRgEIBChHIAngbQgDAFAFgBQAFgBgDAFQgFAEAGgCQAHgCgFAFQgDAGAOgJIgDADQgDAFAEgDQAPgLgEAGQgBABAAABQgBABAAAAQAAABAAAAQAAAAABAAIACACIADgDQAAADAIAFQAGAEgDAHQANgKgNAKIAAADIACgBIAKgHQACgBAAAAQABAAgBAAQAAABgBABQgBABgBACQgBACgBAAQgBABAAABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQgBAAAAABQgBAAgBABQAKgFgBAIQgBAHAKgFIgBADIAIgIQAAABgBAAQAAABAAAAQAAABAAAAQABAAABAAQAAgBABABQAAAAAAAAQAAAAgBABQAAAAgBABIgBABQgFAEAAABIgBADIAFgFIAFgDQgEAGADABQADABgEAFIAHgFQgDAFAHgCQAHgBgHAJQAGAAAOgCIACAEQABACgGAHQgCAFAGgCQAGgCABABQgIAGACABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAGgGAAACQAAABAAAAQAAAAABgBQAAAAABAAQABgBABgBIgHAHIACAFIgCABIgCACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAIgHIgIAIQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBIgDADQgFAHAPgNIgFAGIAFgFIgCADQgBABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIgEACIAAACQgBABAAAAQABAAAAAAQABAAAAgBQABAAACgBIAKgLIgGAEIANgIIgGAFQADgBgCACIAEgCIgHAHIAHgGQgNALgCAEIAAADIAIgIIgHAHQgBABAAAAQAAAAAAAAQABAAABAAQABgBABgBIgFAGQAKgKgFAGIgEAFIAHgCQAEgBgEAFIgCADQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIACAAIABgBIADAAIgFAFIADgBIgEADQgFAHAKgGIACgCIAUgRIAEgDQABAAAAAAQABgBAAAAQAAABgBAAQAAAAAAABIgIAIIAIgGQgLAJgFAIQABABAGgDQAEgCgDAEIgHAIIADgBIABAAQABgBABgBQABgBAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBABAAQAAgBABAAQAAAAAAABQAAAAAAAAIgBABQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAAAIACAAIACAAQAEgDACgGQAFgKAKADQAOgDAJgRQANgXAEgEIABABIAJABQAEgBgDgFIADACIAAgDIABAAQAJgGgGgOQADADAEgCQADgBADACQANgCAJgPIAOgZIAEADQABAAABAAQAAABABAAQAAAAAAAAQABgBAAAAIgIgHQAIACADgHQADgIALAFIgHgKIATgcIAWACIAGgUIBLA9IAeAnIgBgBQgFgCAAAFQABAFgEgCQgGgFACAHQADAHgGgFQgEgBADAFIAEAHIgEgCQgFgDADAEQALAPgGgEQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABIgCADIADADQgEABgFAIQgEAHgIgCQAKANgLgNIgDABIACACQgBgBAAAAQAAgBABAAQAAAAAAABQABAAABABIACADQgCgBgCgCIAHAKQADAFgIgGQgCgBAAgBQgBAAgBgBQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAgBQAAAAgBgBQAAAAgBgBQAFAKgJAAQgHABAEAJIgCAAIAIAIQgEgDABAEQAAAAAAABQAAAAAAAAQgBAAAAgBQgBAAgBgBIAAgBQgFgEgBAAIgDgBIAAAAIAAAAIAFAFIADAFQgGgDgBADQgCAEgFgEIAFAGQgFgCABAIQABAHgJgHQgBAIACAPIgEADQgDABgIgGQgFgBACAGQADAHgCAAQgGgHgBACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAgBQAFAGgCAAQAAAAAAAAQgBAAABAAQAAABABABQAAABABABIgGgHIgGADIgCgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAHAJIgIgIQgBgBABABIABACIgDgDQgDgCACADIAHAIQgGgFAAABQABACAGAEIgFgDQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIgCgEQAAAAAAAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAgBgBABQAAAAAAAAQABABAAABQABABABABIALALIgEgGIAJAMIgGgFQABADgCgCQgBAAAAAAQAAABABAAQAAAAABABQAAABABABIgHgHIAFAIQgLgNgEgBIgDgBIAIAIIgHgGQgBAAAAgBQgBAAAAABQAAAAABABQABABABABIgHgGQgCgBAFAFQABABABABQAAABAAAAQABAAgBAAQAAAAgBAAIgFgGIACAJQABAFgGgEIgDgCQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAACIABABIAAADIgFgEIABADIgEgDQgHgEAGAJIACACIASATIADAEQACADgDgCIgIgIIAIAMQgMgPgIgDQgBABADAGQACAEgEgCIgLgJQgCAAAFAGIACADQgBgBAAAAQAAAAAAABQAAAAAAAAQAAABABABQABAAAAABQAAABABAAQAAAAgBAAQAAAAAAAAIAAABIgBgBQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAABIAAACIABAEQAGAGgDgCIgFgEIAGAIQgMgIgHADIgEgDIABAEIADACIgKgBQgCAAgCAEIAFAHQgEgFgIgGIgBADIgBADIgCgDIACgFIACgEIgGgGIgGgCIAHAHQgGgDgBACQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgDABAHAHIAAAAIABABIgOgHIACgCIgJgFQgBgBAEAGQAFAFgJgFIgIgGQAFAFgRgIIAWARQAFgDgCAEIgBABQAAABAAAAQgBABAAABQAAAAABAAQAAABAAAAIADACIADgDQABADAIAHQAHAFgCAHQAOgJgOAJIABADIACgBQACgBAIgEQAGgDgHAGQgBABgBABQgBABAAABQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAAAAAQAAAAgBABQgBAAgBABQALgEAAAIQAAAJAMgGIgCABIAAADIAHgHQAAAAAAABQgBAAAAABQABAAAAAAQAAAAABAAQABAAABAAQAAAAAAABQAAAAgBABQAAAAgBABIgBABQgFAEAAABIAAADIAFgFIAEgCQgDAFAEACQADACgEAFIAHgFQgDAFAIgBQAHAAgHAJQAIABAPgBIADAEQABAEgGAHQgCAFAGgCQAIgBAAABQgHAGABABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAGgFAAACQAAAAAAABQAAAAABAAQAAgBABAAQABgBABgBIgGAGIACAHIgCABQgBABgBAAQAAABAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAJgHIgJAIQAAAAAAAAQAAAAAAAAQAAAAABAAQABAAAAgBIgDADQgCADAEgBIAIgHIgEAFQACAAAEgGIgDAFQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIgEACQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAABAAQAAAAABAAQABgBACgBIALgKIgGADIANgIIgGAGQADgCgCADQAAAAAAAAQAAAAABAAQAAAAABgBQABAAABgBIgHAHIAIgFQgOAKgBAFIgBADIAJgJIgHAIQAAABgBAAQAAABABAAQAAAAABgBQABgBABgBIgGAGQgBACAFgEQABgBABgBQABAAAAAAQABgBAAABQgBAAAAABIgGAEIAJgBQAFgBgEAGIgDADQgBADAEAAIABgCIADABIgFAEIAEAAIgEADQgDAHAIgFIACgCIAVgRIAEgDQADgCgCADIgJAIIANgIQgOAKgFAKQABABAGgDQAEgBgCAEIgKAKQAAACAGgFQABgBABgBQABgBABAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAgBQABAAABgBQAAAAAAAAQABAAAAAAQAAAAAAABIgBAAQAAABAAABQgBAAAAABQAAAAAAAAQABAAAAAAIACAAIAEgCQACgBABgBQABgBAAAAQABAAAAAAQAAAAgBABIgDAFIAHgGQgIANADAGQgGAGAGgCIADgDQgCAIAAACIAEAEIAGgDIgGAFIgEAFQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIADABIgDADQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABIgBAAIgEAAIAFgEQgIgEgBgCIgGAGIgDAGIAIgHQgDAGABABIADACQABACAHgGIABAAIgHANIgCgCIgGAIQgBACAGgFQAGgEgGAJIgGAHQAGgFgKARIATgVIAAAFQAAABAAABQABAAAAAAQAAABABAAQABAAAAgBIgFAFIAEgCIgCAEQAFgDAOgOQADgBgDAHQgEAKACgBQABgCABgBQABAAAAgBQABAAgBABQAAAAgBABIAEgFQABABgGAKQAGgFgBADIgBAGQgFAFgBAAIgFAHIAEgEQABgBAAAAQABAAAAgBQAAAAAAABQAAAAAAAAIgFAHQgEAEABACQAAAAAAAAQAAABAAAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABQAAAAgBABQAAAAgBABIgGANQgGALAFgEIgEAEQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIgBAAIACgBIADgCIgBAAIABgBIgHAKIACgCIgDAFQgBABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgIAKgOAXQgGAEgGgCIAEgEIgEACQgCABgFAFQADgFgFAEIgJAGIAFgGIgFgCIAFgEQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBABgBAAIgGADIgDAFIAAAAIgBAAIABgBQALgTgGAAQgIAFAAgCIADgBQgHABgCgGQgDgHgEgBIgIALQgEABgKgHQgKgHAEgGQABgIgLgGQgKgGADgJQgCgPgRgLQgWgOgEgFIABAAIABgJQAAgFgGADIACgCIgDgBIABgBQgDgFgDgBQgFgCgJADQACgDgBgDQgBgEACgDQgCgNgOgKQgSgKgHgHIADgDQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIgIAGQADgHgIgEQgIgDAGgLIgLAHIgBgCIAEAHQADAFgIgGQgCgBgBgBQAAAAgBgBQAAAAgBABQAAAAABABQAAAAAAABQAAAAgBAAQAAgBAAAAQgBgBgBgBQAFAMgKABQgJABAFANIgBgCIgDAAIAIAHQgDgCAAAEQAAABAAAAQAAAAAAAAQgBAAgBAAQAAgBgBgBIgBgBQgEgEgCAAIgCABIAEAEIADAFQgGgDgCAEQgCAEgFgDIAFAHQgGgCABAIQAAAIgKgGIgBAaIgFAEQgEACgIgGQgFgBABAHQABAHgBABQgHgHgBACQAAABgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAGAFgCAAQAAAAgBABQAAAAAAAAQABABAAABQABABABABIgHgGIgHADIgBgCQgBAAgBgBQAAAAAAgBQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAHAJIgIgJQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABABABIgDgDQgHgDAMANIgDgDQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQABACAGAEIgFgCQgBgBAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgDgEQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQABABAAABQABABABABIAKALIgDgGIAIANIgGgGQABABAAABQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAAAAAQgBAAABABQAAAAABABQAAABABABIgHgHIAFAIQgNgOgDAAIgDAAIAJAIIgIgGQgBAAgBgBQAAAAAAABQAAAAABABQAAABABABIgGgGQgCAAAFAFQABABAAABQABAAAAABQAAAAAAAAQAAAAgBgBIgFgFIAAAJQABAGgHgDIgCgDQgEgBAAAEIACABIgBAEIgFgEIAAADIgDgDQgGgDAEAJIACACIASATIACAEQADADgEgBIgHgIIACAFIAGAHQgMgOgKgEQgBACADAGQACAFgFgCIgLgJQgCAAAFAGQABABABABQABABAAAAQAAABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABABABQABAAAAABQABABAAAAQAAAAAAAAQgBAAAAAAIAAABIgBgBQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABIAAACIACAFQAGAGgEgCIgGgDIAHAHQgNgGgIADIgEgCIAAAEIADACIgLAAIgFAGIAEAGIgGgGIgGgEIgBADIgBAEIgDgDQAEgJADgCIgGgGIgHgCIAHAIQgHgDgBADIgCADQgCACAGAGIAAABIABABQgKgGgFgBIACgCIgJgFQgBAAAEAFQAEAGgJgFIgIgGQAEAFgGgCIgLgEIAXARIgGABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIgGgFIACAEIgEgCIASATIgCgCQAGAFgLgCQgLgDABACQACABABABQABABAAAAQABAAgBAAQAAAAgCgBIADACIgJgDQAFAGgDAAIgHAAgAAhgOIAJAIIAHgHIAIgGQgJgEAEAFIgEgEQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIgBAAIACACIABAAIgJgFIACADIgEgDIgCACIgDAHQAAAAAAAAQAAAAAAABQAAAAAAAAQAAgBABAAIABgBgABqgVIAAAAQgDAEAEgCIADgCIAFgDIgEAAQAAAAgBAAQAAAAAAABQgBAAAAABQABAAAAABIgCgCIgCACgABogXIAAAAIgBgBIABABgABpgYIABAAIgCgCgAiuEpIgBgCIABgEIAEAEIgDACIgBAAgAiqEngAlDEWQgCgBAAgBQgBAAgBgBQAAAAAAAAQAAgBAAAAIAEACIAAACgAAwgSIAAAAIACABgACIgYIgBgBIAAgEIAFAEIgDABIgBAAgACMgZg");
	this.shape.setTransform(28.325,27.125);

	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(-21.75,-23.15,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AjcFHQgGgEABgCIgIgEQAKAHgFgBQgJgJgEACQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQAAABgBAAQAAAAgBgBQgBAAgBAAIgOgFQgMgFAEAGIgEgFQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAgBQAAAAgBAAQAAAAABABQAAAAAAAAQAAABABAAIABACQgGgFgDAAIACACIgFgDQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIgWgMIgOgGQgEgFACgIIAFADQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgCgGgEQAGACgEgFIgHgJIAHAEIACgFIAFAEIgEgLIgGgDIAAAAIAAgBIABABQAVAJAAgHQgEgIABAAIACADQgBgIAHgDQAHgEACgGIgMgGQgBgFAIgMQAJgMAGADQAJAAAIgNQAGgNALACQARgFAMgVQARgbAGgGIABABIAKgBQAFgBgCgGIACACIABgDIAAABQAGgEACgEQACgGgDgKQAEACAEgCQAEgCADACQAPgEAMgSQAMgWAIgJQAGAFABgCIgHgIQAIACAFgKQAEgJAMAFIgHgKIAFgGQgBgDACgDQgBgNgOgIQgTgLgDgEIABAAIACgJQAAgEgGADIADgCIgDAAIABgBQgDgEgCgBQgFgBgIAEQACgDgBgDQAAgDACgDQAAgMgMgHQgPgIgHgFIADgDQABgBAAAAQAAgBAAAAQABgBAAAAQgBAAAAAAIgHAGQADgGgHgDQgGgCAGgKIgKAGIgYgRIAFgUIgRgEIBChHIAngbQgDAFAFgBQAFgBgDAFQgFAEAGgCQAHgCgFAFQgDAGAOgJIgDADQgDAFAEgDQAPgLgEAGQgBABAAABQgBABAAAAQAAABAAAAQAAAAABAAIACACIADgDQAAADAIAFQAGAEgDAHQANgKgNAKIAAADIACgBIAKgHQACgBAAAAQABAAgBAAQAAABgBABQgBABgBACQgBACgBAAQgBABAAABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQgBAAAAABQgBAAgBABQAKgFgBAIQgBAHAKgFIgBADIAIgIQAAABgBAAQAAABAAAAQAAABAAAAQABAAABAAQAAgBABABQAAAAAAAAQAAAAgBABQAAAAgBABIgBABQgFAEAAABIgBADIAFgFIAFgDQgEAGADABQADABgEAFIAHgFQgDAFAHgCQAHgBgHAJQAGAAAOgCIACAEQABACgGAHQgCAFAGgCQAGgCABABQgIAGACABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAGgGAAACQAAABAAAAQAAAAABgBQAAAAABAAQABgBABgBIgHAHIACAFIgCABIgCACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAIgHIgIAIQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBIgDADQgFAHAPgNIgFAGIAFgFIgCADQgBABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIgEACIAAACQgBABAAAAQABAAAAAAQABAAAAgBQABAAACgBIAKgLIgGAEIANgIIgGAFQADgBgCACIAEgCIgHAHIAHgGQgNALgCAEIAAADIAIgIIgHAHQgBABAAAAQAAAAAAAAQABAAABAAQABgBABgBIgFAGQAKgKgFAGIgEAFIAHgCQAEgBgEAFIgCADQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIACAAIABgBIADAAIgFAFIADgBIgEADQgFAHAKgGIACgCIAUgRIAEgDQABAAAAAAQABgBAAAAQAAABgBAAQAAAAAAABIgIAIIAIgGQgLAJgFAIQABABAGgDQAEgCgDAEIgHAIIADgBIABAAQABgBABgBQABgBAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBABAAQAAgBABAAQAAAAAAABQAAAAAAAAIgBABQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAAAIACAAIACAAQAEgDACgGQAFgKAKADQAOgDAJgRQANgXAEgEIABABIAJABQAEgBgDgFIADACIAAgDIABAAQAJgGgGgOQADADAEgCQADgBADACQANgCAJgPIAOgZIAEADQABAAABAAQAAABABAAQAAAAAAAAQABgBAAAAIgIgHQAIACADgHQADgIALAFIgHgKIATgcIAWACIAGgUIBLA9IAeAnIgBgBQgFgCAAAFQABAFgEgCQgGgFACAHQADAHgGgFQgEgBADAFIAEAHIgEgCQgFgDADAEQALAPgGgEQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABIgCADIADADQgEABgFAIQgEAHgIgCQAKANgLgNIgDABIACACQgBgBAAAAQAAgBABAAQAAAAAAABQABAAABABIACADQgCgBgCgCIAHAKQADAFgIgGQgCgBAAgBQgBAAgBgBQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAgBQAAAAgBgBQAAAAgBgBQAFAKgJAAQgHABAEAJIgCAAIAIAIQgEgDABAEQAAAAAAABQAAAAAAAAQgBAAAAgBQgBAAgBgBIAAgBQgFgEgBAAIgDgBIAAAAIAAAAIAFAFIADAFQgGgDgBADQgCAEgFgEIAFAGQgFgCABAIQABAHgJgHQgBAIACAPIgEADQgDABgIgGQgFgBACAGQADAHgCAAQgGgHgBACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAgBQAFAGgCAAQAAAAAAAAQgBAAABAAQAAABABABQAAABABABIgGgHIgGADIgCgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAHAJIgIgIQgBgBABABIABACIgDgDQgDgCACADIAHAIQgGgFAAABQABACAGAEIgFgDQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIgCgEQAAAAAAAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAgBgBABQAAAAAAAAQABABAAABQABABABABIALALIgEgGIAJAMIgGgFQABADgCgCQgBAAAAAAQAAABABAAQAAAAABABQAAABABABIgHgHIAFAIQgLgNgEgBIgDgBIAIAIIgHgGQgBAAAAgBQgBAAAAABQAAAAABABQABABABABIgHgGQgCgBAFAFQABABABABQAAABAAAAQABAAgBAAQAAAAgBAAIgFgGIACAJQABAFgGgEIgDgCQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAACIABABIAAADIgFgEIABADIgEgDQgHgEAGAJIACACIASATIADAEQACADgDgCIgIgIIAIAMQgMgPgIgDQgBABADAGQACAEgEgCIgLgJQgCAAAFAGIACADQgBgBAAAAQAAAAAAABQAAAAAAAAQAAABABABQABAAAAABQAAABABAAQAAAAgBAAQAAAAAAAAIAAABIgBgBQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAABIAAACIABAEQAGAGgDgCIgFgEIAGAIQgMgIgHADIgEgDIABAEIADACIgKgBQgCAAgCAEIAFAHQgEgFgIgGIgBADIgBADIgCgDIACgFIACgEIgGgGIgGgCIAHAHQgGgDgBACQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgDABAHAHIAAAAIABABIgOgHIACgCIgJgFQgBgBAEAGQAFAFgJgFIgIgGQAFAFgRgIIAWASQAFgEgCAEIgBABQAAABAAAAQgBABAAABQAAAAABAAQAAABAAAAIADACIADgDQABADAIAHQAHAFgCAHQAOgJgOAJIABADIACgBQACgBAIgEQAGgDgHAGQgBABgBABQgBABAAABQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAAAAAQAAAAgBABQgBAAgBABQALgEAAAIQAAAJAMgGIgCABIAAADIAHgHQAAAAAAABQgBAAAAABQABAAAAAAQAAAAABAAQABAAABAAQAAAAAAABQAAAAgBABQAAAAgBABIgBABQgFAEAAABIAAADIAFgFIAEgCQgDAFAEACQADACgEAFIAHgFQgDAFAIgBQAHAAgHAJQAIABAPgBIADAEQABAEgGAHQgCAFAGgCQAIgBAAABQgHAGABABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAGgFAAACQAAAAAAABQAAAAABAAQAAgBABAAQABgBABgBIgGAGIACAHIgCABQgBABgBAAQAAABAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAJgHIgJAIQAAAAAAAAQAAAAAAAAQAAAAABAAQABAAAAgBIgDADQgCADAEgBIAIgHIgEAFQACAAAEgGIgDAFQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIgEACQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAABAAQAAAAABAAQABgBACgBIALgKIgGADIANgIIgGAGQADgCgCADQAAAAAAAAQAAAAABAAQAAAAABgBQABAAABgBIgHAHIAIgFQgOAKgBAFIgBADIAJgJIgHAIQAAABgBAAQAAABABAAQAAAAABgBQABgBABgBIgGAGQgBACAFgEQABgBABgBQABAAAAAAQABgBAAABQgBAAAAABIgGAEIAJgBQAFgBgEAGIgDADQgBADAEAAIABgCIADABIgFAEIAEAAIgEADQgDAHAIgFIACgCIAVgRIAEgDQADgCgCADIgJAIIANgIQgOAKgFAKQABABAGgDQAEgBgCAEIgKAKQAAACAGgFQABgBABgBQABgBABAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAgBQABAAABgBQAAAAAAAAQABAAAAAAQAAAAAAABIgBAAQAAABAAABQgBAAAAABQAAAAAAAAQABAAAAAAIACAAIAEgCQACgBABgBQABgBAAAAQABAAAAAAQAAAAgBABIgDAFIAHgGQgIANADAGQgGAGAGgCIADgDQgCAIAAACIAEAEIAGgDIgGAFIgEAFQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIADABIgDADQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABIgBAAIgEAAIAFgEQgIgEgBgCIgGAGIgDAGIAIgHQgDAGABABIADACQABACAHgGIABAAIgHANIgCgCIgGAIQgBACAGgFQAGgEgGAJIgGAHQAGgFgKARIATgVIAAAFQAAABAAABQABAAAAAAQAAABABAAQABAAAAgBIgFAFIAEgCIgCAEQAFgDAOgOQADgBgDAHQgEAKACgBQABgCABgBQABAAAAgBQABAAgBABQAAAAgBABIAEgFQABABgGAKQAGgFgBADIgBAGQgFAFgBAAIgFAHIAEgEQABgBAAAAQABAAAAgBQAAAAAAABQAAAAAAAAIgFAHQgEAEABACQAAAAAAAAQAAABAAAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABQAAAAgBABQAAAAgBABIgGANQgGALAFgEIgEAEQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIgBAAIACgBIADgCIgBAAIABgBIgHAKIACgCIgDAFQgBABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgIAKgOAXQgGAEgGgCIAEgEIgEACQgCABgFAFQADgFgFAEIgJAGIAFgGIgFgCIAFgEQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBABgBAAIgGADIgDAFIAAAAIgBAAIABgBQALgTgGAAQgIAFAAgCIADgBQgHABgCgGQgDgHgEgBIgIALQgEABgKgHQgKgHAEgGQABgIgLgGQgKgGADgJQgCgPgRgLQgWgOgEgFIABAAIABgJQAAgFgGADIACgCIgDgBIABgBQgDgFgDgBQgFgCgJADQACgDgBgDQgBgEACgDQgCgNgOgKQgSgKgHgHIADgDQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIgIAGQADgHgIgEQgIgDAGgLIgLAHIgBgCIAEAHQADAFgIgGQgCgBgBgBQAAAAgBgBQAAAAgBABQAAAAABABQAAAAAAABQAAAAgBAAQAAgBAAAAQgBgBgBgBQAFAMgKABQgJABAFANIgBgCIgDAAIAIAHQgDgCAAAEQAAABAAAAQAAAAAAAAQgBAAgBAAQAAgBgBgBIgBgBQgEgEgCAAIgCABIAEAEIADAFQgGgDgCAEQgCAEgFgDIAFAHQgGgCABAIQAAAIgKgGIgBAaIgFAEQgEACgIgGQgFgBABAHQABAHgBABQgHgHgBACQAAABgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAGAFgCAAQAAAAgBABQAAAAAAAAQABABAAABQABABABABIgHgGIgHADIgBgCQgBAAgBgBQAAAAAAgBQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAHAJIgIgJQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABABABIgDgDQgHgDAMANIgDgDQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQABACAGAEIgFgCQgBgBAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgDgEQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQABABAAABQABABABABIAKALIgDgGIAIANIgGgGQABABAAABQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAAAAAQgBAAABABQAAAAABABQAAABABABIgHgHIAFAIQgNgOgDAAIgDAAIAJAIIgIgGQgBAAgBgBQAAAAAAABQAAAAABABQAAABABABIgGgGQgCAAAFAFQABABAAABQABAAAAABQAAAAAAAAQAAAAgBgBIgFgFIAAAJQABAGgHgDIgCgDQgEgBAAAEIACABIgBAEIgFgEIAAADIgDgDQgGgDAEAJIACACIASATIACAEQADADgEgBIgHgIIACAFIAGAHQgMgOgKgEQgBACADAGQACAFgFgCIgLgJQgCAAAFAGQABABABABQABABAAAAQAAABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABABABQABAAAAABQABABAAAAQAAAAAAAAQgBAAAAAAIAAABIgBgBQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABIAAACIACAFQAGAGgEgCIgGgDIAHAHQgNgGgIADIgEgCIAAAEIADACIgLAAIgFAGIAEAGIgGgGIgGgEIgBADIgBAEIgDgDQAEgJADgCIgGgGIgHgCIAHAIQgHgDgBADIgCADQgCACAGAGIABgEIAEAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBgCIAAABIABABQgKgGgFgBIACgCIgJgFQgBAAAEAFQAEAGgJgFIgIgGQAEAFgGgCIgLgEIAXARIgGABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIgGgFIACAEIgEgCIASATIgCgCQAGAFgLgCQgLgDABACQACABABABQABABAAAAQABAAgBAAQAAAAgCgBIADACIgJgDQAFAGgDAAIgHAAgAAhgOIAJAIIAHgHIAIgGQgJgEAEAFIgEgEQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIgBAAIACACIABAAIgJgFIACADIgEgDIgCACIgDAHQAAAAAAAAQAAAAAAABQAAAAAAAAQAAgBABAAIABgBgABqgVIAAAAQgDAEAEgCIADgCIgCgCIgCACgABugVIAFgDIgEAAQAAAAgBAAQAAAAAAABQgBAAAAABQABAAAAABgABogXIAAAAIgBgBIABABgABpgYIABAAIgCgCgAiqEngAlDEWQgCgBAAgBQgBAAgBgBQAAAAAAAAQAAgBAAAAIAEACIAAACgAAwgSIAAAAIACABgACIgYIgBgBIAAgEIAFAEIgDABIgBAAgACMgZg");
	this.shape_1.setTransform(28.325,27.125);

	this.instance_1 = new lib.CachedBmp_63();
	this.instance_1.setTransform(-16,-24,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_62();
	this.instance_2.setTransform(-5,-5.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-24,112.7,107);


(lib.colonwithparts_0001_wholegutpsd_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// whole_gut
	this.instance_1 = new lib.wholegut();
	this.instance_1.setTransform(947,513);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947,513,2166,2044);


(lib.colonwithparts_0000_colonpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// colon
	this.instance = new lib.colon();
	this.instance.setTransform(947,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947,515,2166,2041);


(lib.caption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bluelight();
	this.instance.setTransform(0,0,0.2203,0.1744);

	this.instance_1 = new lib.bluedark();
	this.instance_1.setTransform(-5,-14,0.2196,0.1913);

	this.instance_2 = new lib._double();
	this.instance_2.setTransform(-22,-43,0.2242,0.2102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-43,801.9,443.2);


(lib.basicinfobackbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AlPDxIAEhUIgDhqIANgoIAQgLIhcAAIhIAAIA4guIABgBIADAAQADgBAEgEIgBgDQAOgJAegaQAcgZAQgIIAGgJIgCgSIgDgaIABgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDAAQACgEgCgJQgBgIADgEIgDgDIgDgmIAEgQIgDgTIAMgIIARgDIAPAIIgBAAQgBACABAEQACADgDACIABABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAABQABABAAAAQAAABgBAAQAAABgBAAQgBADAFADIgBABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAFACgCACIgBAEIAAADIACAAIAAAPQABAJgCAEQAFADgFgCIgBADIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAIgCABIAEADQAAAAABABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIACAEIAAgBQABABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAIACACIAGgDIAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgDIACACIABgBIAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIgCgDIADABIgDgCIADAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAIAAACQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAIgCgEIAAACIAAgFIABACQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBIACACIAAgDQADAFACAAIACgBIgDgDIADACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABACQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABACIABgCIgBAAIgCgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAEAAIgFgDQAGACACgDIgBgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAEgBIgCgCQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgCQgBAAAAAAQAAgBgBAAQAAAAAAAAQABAAAAAAIACgCIgDAAQADgEABgIQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBgBIgBABIACgJIAAAAIAAgBIAAABIgDgBQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAABAAAAIgBgDIgBACIgBgCIgCAIIAAgBQAAABAAAAQAAAAgBAAQAAAAgBgBQgBAAgBgBQgEgDgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIgDgEQgBAAAAABQAAAAAAAAQgBABAAAAQgBgBgBAAIgDgBIAAgCIgCgDQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAgEgDgBIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgJgKgCADIAAgCIgCAAIAAAAIgBABIAAABIgCgEIAAABIgBgCIABAAIgKgMQAAgBAIgCIAAACIACgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIABgDIABACIAFAAIAAACQACAAACgDIgCgCIACAAIAAAAQAHAHAEgBIADgCIAAABQAFgCAFABIALABIgCgEQACgCANABQANAAABACIAFABIAdAGIgDAWIAAAQQABAJgCAGIgCALIA3gnIBCg5IAggKIATAFIgUAjIABgBQgIAEgNAMQgMAMgHAEIAAAAQgCgBgLALQgMANgDAAQgHAEgGAHIgIAKIgEABQgGACgDAFQgGAMgIAEIgZAUIACAAIgzApQgfAagRALQgEALADgJIgLAIIAAABIgHALQgFAGgHABQgCgBgDAEQgBABgBAAQAAABAAAAQAAAAgBAAQAAgBABAAQgNAOgWARIAOAAIAkgXQAKgFATgSQARgRALgFIAEgIIBThMIAngaIApgpIAZgEIAQAHIgJAcIAAgBQgGADgHAIQgIAIgFADQgBgCgIAJQgHAJgCAAQgFACgEAGIgEAHIgDAAQgEACgCADQgDAKgFACQgEABgEAFIgJAIIACAAIghAcQgUATgLAHQgCAIABgHIgIAGIAAAAIgEAJQgCAEgFABQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgCADQAGAAADABIADgCQAGACAPgCQAPgBAGADIAygFIARABQAKAAAEADQAIACAKgCIAPgCQAAADAFAAQAGAAACABQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAABgBIABACIASABIgBABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIADAAIAFgDIgCADIAEAAIgBABQAEABADgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIABABIACABQAEgBgEgCIAEACIAHAAIgDABIAGABQACABAEgCIABgFIgGACIAJgEIABABIAAABQADgBADABQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAADIAFgDQgEAFAHABIAGABIgBgDIADADQACABADgCIABADQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIgBADIARgCQAJgCAGACIAAACIAMAAIgBgBIAJAAIAAACIAGgBIAAABQAIACAIgCIgCgBIAFgIIADgBQAAAAABgBQAAAAABAAQABAAAAAAQABABABAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAFgBAFgDQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQACADAEABIAMgCQAGgBAEABIAFAFQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgBIgBAAIgDgBQACAAgDgGIgOgJIABgBQgGgFAAgCIAAAAIgBAAIABAAIgBAAIgIgMIAFAEIgDgHIgFgBQgDAAgEgHIgBgFQgCABgMgQIABAMIgRgPQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgDgBIgBgDQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgDADIABgBQgDACgHgLQgKgLgDgBQACAEgCgEIACAFIgIgLQgDABgEgFIgIgJQgBAAAAgBQAAAAABgBQAAAAAAABQABAAAAAAIgEgHIAAACQAAABAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBIgBgEQABgCgEgEIgIgGQgFgDgCgDIgKgOQgHgLgDABIAAgCQgBgDgFgCIABAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAABIAAAAQgBgEgDgDIgBAAIgBgDIADACQgCgEgIgNIgHgLQAFABANAKIABADQAAAAAAgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQADAFAEAAIAEAAIACAFIAKAHQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAEACAJADIgFgGIAEADQAOAUAJAGIAIAEIgBAAQALAHAOALIAaAWIgFgJQAFADAeAXQAfAZADAEQAMANAYASQAaAUAKAJIAZAYIACgBQAAgBAFABIAAgBIACABQAFACAIgBIgSgQIgEgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgEgFIgUgPIABAAQgJgIgBgCIAAAAIAMAIIgCACIAnAdIACgCIgIgJIgGAAQgGgHgHgGIgMgJQgIgHgEABIAAgBIAAABIAAAAIgPgRIAIAGIgFgJQgCgBgFgBQgEgBgGgKIgEgGQgBABgUgWIAFAOIgagWIAAAAIgBgDIgGgDIgBgDQgDgCgDACIgDADIABgBQgCABgOgOIgSgSQADAGgEgFIABACIgLgMQgDABgHgHIgNgNIgBgCQAAAAABAAQAAAAAAAAQABAAAAABQABAAABABIgHgKQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABABABQAAAAAAABQAAAAgBAAQAAgBgBAAQAAgBgBgBIgDgFQAAgCgHgGIgMgJQgGgFgDgEIgRgTQgMgPgEAAIABgCIgJgHIABAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBABAAAAIgBAAIABAAIAAABIgDgEIgEgGIgBAAIgEgFQgBgCAHAGQgGgJgYgdIAbARIACAEQAAAAAAAAQABAAAAAAQABAAABABQAAAAABABQAEACgBgDQAGAHAFABIAGABIADAFIAPAMIABADIARAKIgGgIIAEAEQAXAbAOAJQAIAFAEACIgDgBQAQALAVASQAYAUAPALIgHgLQAHAFAtAjQAuAlADAFQAUASAhAbIA0ApIA8A0IhmgFIghgCIAAABIgDAtQgFBKgDDKIgBAaIh5gCIABAAIgjgDQgVgBgMABQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIhVgBIgDgXQgCgbgFgZQABgEgCgTIgBgZIgDg1IhbAAIAEBgIgCAEQAAADAAAHIADABQgBARABAWIAAAZIgYACIgzADQgdABgRgCIgPAEIiTAIgAkeE0QAvgDAWABQgBAAAAABQAAAAAAAAQAAAAABAAQABgBABAAQACgBABAAQABgBAAAAQAAAAgBABQAAAAgCABIARAAIABgBQAFgBAKgDQAKgCAHACQAAACAIgBQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBABQAUgEAUAAIAQAAIgCgUIAAgLIgDAEQABgEgBgMQgCgKACAAIABACQACAAAAgGIAAgMIgCADIgCgJQACgKgBgWQgCgUACgIIgDgGIAAglIAYAAIAhgCQAUgBAKADIBMgEIAXgBIAGApIACAeQABASgBAGQgBAQADARIAFAdQgEgBABAJQACAMgBACQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAJAAIgDABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAACAAIAHAAIAGgDIgCADIAHAAIAAABQAFABAGgBQAFgBABgCIADABIACABQAFAAgFgDIAIACQAEABAIAAIgFABQADgBAHACQAFAAAGgBIACgFIgKACIAQgEQABAAABAAQAAAAABABQAAAAAAAAQAAABgBAAIAKABQADAAADgCIACADIAIgCIgCADQAAACAHABIALABIgCgDIAHADQADABAGgCIAAADQAEABACgDQACgBAEABIgDACIAWgBIAAAAIABgSIgBACIAAgQIACAAIAAgLIABAAQADgNgDgQIgBADQAAgBgIgHIgBgHQgBgCABgGQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIgBgKIgDgGQABABAAAAQABABAAAAQABAAABAAQAAAAABgBQADgCABgIIgBgWQgBgJABgIIAFgJQAAgEgCgEQgCgDABgDQABgIgBgBQgBgBAAgHIAAgBIABAAQABgEgBgFIAAgJIgBgKQgCgCABgEIACgIIgDgEQAEgOACgXQghgCghAAIgFACQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAgBgBIgHgCIgeABIAAgBIgRgBIAAgBIASAAIgBACIA7gBIAAgCIgOgCIgFADQgMgCgLAAIgSAAQgOgBgCADIgCAAIACABIgBAAIgagFIALAAIgLgDQgDAAgFACQgFACgOgDIgHgDQgCACgigGIAPAJIgqgBIAAgBIgDgBIgHABIgFgCQgEABgBADIgBAEIAAgBQgBADgWgDQgbgDgEAAQAGADgHgCIACABIgTgDQgCADgNgBIgVgCIgDgBIAGgBIgPgDQAAAAgBAAQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABgBAAQAAAAgCAAQgBAAgCAAIgGgDQgBgBgLgBIgSAAQgMABgFgCIgdgEIgRgBIgJAAIgCAAIAAAAIgQAAIgVAAIgwAAIAPAsIgBgCQgCALACAVQABAUgCALIABAAQgDAAACAUQACAWgCACQgBAKACALIACAQQAAgBAAABQgBAAAAAAQAAABAAABQgBABAAABQgCAHACAHIACAKQACAKgBAFQgCAKABAeIACgDIAAAqgAC5hcIAIAGIgCABIAWARQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIAAAAIgDgFIgFABQgDgGgFgDIgHgGQgFgEgDAAIgBAAgAjMkMIACAAIgCgBgAjPkPIABABIABAAIgBgCIgBABgAi/hcIAEgCQAAAAgBABQAAAAAAAAQAAABAAAAQABAAAAgBIgDACIgBgBgAkShlIAFgEIAAACIgFACIAAAAgAkNhnIAAAAIAAAAIAAAAg");
	this.shape.setTransform(39.75,34.625);

	this.text = new cjs.Text("Homepage", "25px 'Helvetica'", "#003300");
	this.text.lineHeight = 30;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(-20.95,79.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AmtE+IAGhvIgEiLIAOgzIAPgQIAPA6IgBgBQgCAOACAcQACAZgCAOIAAAAQgCABACAaQACAcgDADQgBANACAPIACAVQAAgCgBAHQgCAJACAJIACAOQACAMgBAHQgCANABAnIABgEIAAA9QA+gDAkAAQgBABgBAAQgBAAABAAQAAAAABAAQABAAACgBQACgBABAAQABgBAAAAQABAAgBABQgBAAgBABIAWAAIABgBQAGgBANgEQANgCAJACQABACAJgBQACAAABAAQABAAAAAAQAAAAAAAAQAAABgBAAQAagEAbAAIAbgBIgDggIABgOIgEAEQABgEgBgPQgBgOACABIAAACQACAAAAgIIAAgQQgBABAAAAQAAAAgBABQAAAAAAABQAAABAAABIgCgNQACgOgCgbQgBgbACgKIgDgIIAAgqIAYAAIArgBQAYgBAPADIBjgEIAYgBIAFAtIAEAnQACAYgCAIQAAAVADAWQAFAbABAMQgEgDABAMQADAPgBAEQACgBABAJIARABIgDAAQAAAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAKABIAIgEIgCAEIAJgBIgBABQAIABAGgBQAIAAAAgCIAEABIAEABQAGgBgHgCIAKACQAGABAKAAIgHABIANAAQAIABAIgCIABgEIgNACIAWgEIADABIAAACQAGgCAGACQAFABAEgDIABAEIALgDQgBABAAAAQgBABgBAAQAAABAAAAQAAAAAAABQAAABAKABIAOABIgEgDIAJADQAGABAHgCIAAADQAGABADgCQABgCAFABIgEADIAjgBIAAgBIABAAIABgeIAAADIAAgUIABgBIAAgPIABABQADgQgCgWIgCAFQAAgDgHgIIgBgIQgBgEABgIQACAFACgCIgCgNIgCgIQACAFADgDQACgEABgKIAAgdQgBgMABgKIAFgLQAAgFgCgFQgBgFAAgEQACgLgCAAQgBgBABgJIAAgCIABgNIAAgKIgBgOQgCgCABgGIACgLIgDgDQAFgVACgjQgwgDgtAAIgHACQABAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBgBIgIgCIgoABIAAgBIgXgBIABAAIAXgBIgBACIBOAAIAAgCIgTgDIgHAEQgPgCgPAAIgXAAQgRAAgEACIgCAAIABAAIgigFIAPAAIgPgDQgEAAgGACQgHACgSgDIgKgDQgCACgsgGIATAJIg3gBIABgBIgFgBIgJABIgGgBQgGAAgBACIgBAFIAAAAQgBABgfgCQghgEgGABQAHACgIgBIAJACIgfgEQgDACgRAAIgcgCIgDgCIAGAAIgSgDQgBAAAAAAQAAAAAAAAQABABAAAAQABAAABABQAEABgJAAQgEgBgFgCQgCgBgPgBIgXAAQgOAAgHgBIgmgEQgfgEgGACIAAgCIgSAAIAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAABQgGgCgMgBIgCABIgIgCIAKAAIgOgCIiyABIhIAAIA4gvIABgBQAEAAAKgIIgBgEQASgMAngiQAmgfAUgMIAJgNIAAAAIgGg+QABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgDgBQACgFgCgLQgBgLADgGIgDgDIgEgyIAFgUIgFgZIANgKIAQgDIAOAKQgBADABAEQACAFgCACQgCABACAFQACAEgCABQgBACACADIACADIgBACQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAHAEgCACIgBAEIAAAGIACgBIAAATQABAMgCAGQAFADgFgCIAAADIABAAIADAEQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAgBQAEAGgCAJIAAAGIABABQAFgCABgEIAFgFQAAABABAAQAAAAAAAAQABABAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAIACACIAGgEIAAABQABAAAAABQABAAAAAAQAAAAAAgBQABAAAAgBIAAgEIABAEQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIABABQAEAAgDgFQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIADAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIAAACIACgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIgCgEIgBADIABgFIABABQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAgBgBIACADIAAgEQACAGADgBIACgBIgCgDIADACQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAgBgBIACACQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIABACIAEgFIABgCIgBAAIgCgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAEAAQgCgCgDgBQAGACADgFIgBgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAEgCQABAAAAAAQgBgBAAAAQAAAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAgBQAAAAABgBIgBAAIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgCQgBgBgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABgCIgDgBQAEgFABgJQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBgBgBIAAABQACgHAAgKIgCgBIACAAIgBgCQAAACgJgFIAEAIIgFgBQgEgBgCABIAAgDIgCACIgBgCIgBADIAAAFIAAAAQgBABgFgCQgHgDgBAAIABACIABABIgFgEQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIgEgDIgBgBIABgBIgDgCQAAAAABABQAAABAAAAQAAAAgBAAQAAAAgBAAQAAgEgEAAIgEgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgHgEQgGgEgBACIABgCIgEgBIgBABIAAABQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBIAAABIgBgCIABAAQgCgEgLgHQABgCAIgCIACADIABgBQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAABABAAQAAAAABAAQAAAAABAAQAAAAAAgBIACgCIACACIAFgBIABACIAGgDIgCgCIABABIAAAAQAKAHAFgCIAEgCIgBABQAGgBAHABQAKACAFgBIgDgEQADgCARABQARAAACACIAGACIAcAFIgDAWIAAAVQACAMgDAIQgCAMABAUIALgKIBJg1IBWhKIApgQIAVAEIgcApIAAgBQgKAGgQAQQgRAOgJAGIAAAAQgCgCgPAPQgRARgDgBQgIAGgJAJIgNAOQgHABgIAIQgJAQgJAFQgGADgKAIIgRAPIADgBIhCA2QgpAigWAPQgHAMAFgLIgPAMIAAABQAFgEADgBQgBAAAAABQgBAAAAABQAAAAAAAAQAAAAABgBQgFAEgCAAIgKANQgGAIgIACQgBgBgGAGQgBABAAAAQgBABAAAAQgBAAAAAAQAAgBABAAQgRASgfAWIgOAMIARAAQAUAAAIABIAuggQAMgHAZgYQAXgVANgIIAGgKIBuhiIAwgkIA3g0IAegIIASAFIgPAhIAAgBQgHAEgKAKQgKALgHADIAAABQgBgBgKAKQgKAMgDgBQgGAEgFAHIgGAJIgEABQgFACgDAEQgEAMgHADQgEABgHAHIgKAKIACAAIgrAlQgaAXgPALQgEAKADgJIgKAIIABABQABgDADgBQgBABAAAAQgBABAAAAQAAAAABAAQAAAAABAAIgEACIgGAJQgEAGgGABQgCgCgDAFQgBABAAAAQAAABgBAAQAAAAAAgBQAAAAAAgBQgGAIgIAIIAHAAQAPgBAGADIAEgDQAHABAUgBQATgCAIAEIBCgFIAWABQANABAEADQALABAMgBIAWgCQgCADAGAAQAKgBABABQAAgCAGABQAGAAABgBIAAACIAZABIgCABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAgBIAEAAIAGgCIgCADIAEgBIAAABQAEACAEgCQAEAAAAgDIADACQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABgBQAFAAgGgCIAGACIAIAAIgEABIAIAAQAEACAFgDIAAgEIgHACIAMgEQABAAAAAAQAAAAAAAAQABABgBAAQAAAAAAABQAEgBADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABAAIABADIAGgDQgFAFAIABIAIACIgCgFIAFADQADACAEgCIAAADQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIgCADIAVgDQANgBAHADIAAABIAQAAIgBAAIALgBIABACIAHgBIAAACQAJACAMgDIgCgBQABAAAFgIIAEgBQACgBAFABQgBAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAQAHgBAFgDQgBABgBAAQAAABAAAAQAAABAAABQAAAAABABQACACAFACIAQgCQAGgBAGABIAFAEQAEAAACgCQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAGABAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAABAAIgNgLIgEAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIgCgFIgSgNIABAAIAhAaIACgCIgHgIIgEAAQgGgHgHgFIgKgIQgGgGgEABIAKAHIgBACIgJgJIAAAAIgBgBIABABQgHgJgFgHIAGAGIgEgIQgBgCgFAAQgEgBgGgIIgCgGQgDABgPgTIADANIgXgUQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBgBIgFgCIgBgDQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEADIABAAQgCABgLgNQgNgOgDgBQACAEgDgEIADAEIgEgEIgHgJQgCABgHgHIgLgKIgBgCIAEABIgHgIQAAgBAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAgBQgBAAAAAAQgBgBAAgBIgCgEQgBgCgGgFIgJgIQgHgFgCgDIgOgRQgKgNgEgBIABgCIgIgGIAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAABIgBAAQgBgEgFgFIgBABIgCgFIAEAEQgFgJgTgZQADABAUANIABAEQAAgBABAAQAAAAAAAAQABABABAAQAAAAACABQADACgBgDQAFAGAEABIAGABIADAEIANAKIABAEQAFADAJAFIgFgIIAEADIgBABQAUAYANAJIAKAFIgCgBQAOAJARAQQAVARAOAKIgHgKQAIAFAmAeQAoAgADAFQARAQAfAZQAjAaAMAMIAiAfQAFAAABgBQAAAAAIAAIAAgBIABABQAIACALgCIALgBIACgBIghgcIgFgCQADAAgHgJIgagUIABAAIAyAnIABgCIgKgMIgGAAIgSgRIgQgLQgLgLgDACIgCgCIAAACIgTgWIAKAIIgHgLQgDgBgFgCQgGgCgJgMIgEgHQgDABgagbIAIAQQgdgZgGgEIACgBIgDgCIgGgFIgEgDQgDgCgCABIgEACIAAAAQgCABgSgSQgUgUgEgCQADAFgEgFIAAABIgNgOQgEABgJgKIgRgPIgBgDIAFADIgLgMQAAAAgBAAQAAAAAAAAQAAAAABABQAAABABABQAAAAAAAAQAAAAgBAAQAAAAgBgBQgBgBgCgBQgCgCgBgEQgBgCgIgJIgQgLQgJgGgDgFIgXgYQgRgSgEgCIABgBIgMgJIABAAIgEgBIgBgBIgCgEIgHgHIgBAAIgEgGIAGAFQgFgGgSgWIgRgTQAHADAbAVIADAEIAFADQAFADgBgEQAIAJAFACIAIACIAFAHIATAPIABAEIAWAMIgIgJIAFAFIAAAAQAfAiATANIAOAIIgDAAQAVAOAaAXIA0AoIgLgNQAKAGA5AvQA9AvAGAIQAZAXArAiIBEA2IA8AzIhugEIgzgBIAAAIIgEA6QgFBOgCBnIgDC0IgBAaIiVgDIgugDQgbgBgPABQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgVAAIACgBIhWAAIgDgYQgDgigGgiIgBgfQgCgZAAgHIgFhMIiFABIAECEIgBAGIAAANIADACQgBAQABAjIAAAZIgYABIhCADQgmACgXgCIgUAFIi3AJgAkKlhIACAAIgCgBgAkNlkIACACIABgBIgBgBIgCAAgAkXllIACAAIACgDIAAgBIAAAAIgBgBIgBABIgBABIgCABgAkKGXIAFgBIAFABIgFAAIgFAAgAF9htIgPgMIACAAIAOAKIgBACIAAAAgAAxmRIAAgBIABABgAAmmdIABAAIACACIgDgCg");
	this.shape_1.setTransform(39.8,34.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("AlPDxIAEhUIgDhqIANgoIAQgLIhcAAIhIAAIA4guIABgBIADAAQADgBAEgEIgBgDQAOgJAegaQAcgZAQgIIAGgJIgCgSIgDgaIABgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDAAQACgEgCgJQgBgIADgEIgDgDIgDgmIAEgQIgDgTIAMgIIARgDIAPAIIgBAAQgBACABAEQACADgDACIABABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAABQABABAAAAQAAABgBAAQAAABgBAAQgBADAFADIgBABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAFACgCACIgBAEIAAADIACAAIAAAPQABAJgCAEQAFADgFgCIgBADIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAIgCABIAEADQAAAAABABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIACAEIAAgBQABABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAIACACIAGgDIAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgDIACACIABgBIAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIgCgDIADABIgDgCIADAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAIAAACQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAIgCgEIAAACIAAgFIABACQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBIACACIAAgDQADAFACAAIACgBIgDgDIADACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABACQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABACIABgCIgBAAIgCgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAEAAIgFgDQAGACACgDIgBgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAEgBIgCgCQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgCQgBAAAAAAQAAgBgBAAQAAAAAAAAQABAAAAAAIACgCIgDAAQADgEABgIQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBgBIgBABIACgJIAAAAIAAgBIAAABIgDgBQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAABAAAAIgBgDIgBACIgBgCIgCAIIAAgBQAAABAAAAQAAAAgBAAQAAAAgBgBQgBAAgBgBQgEgDgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIgDgEQgBAAAAABQAAAAAAAAQgBABAAAAQgBgBgBAAIgDgBIAAgCIgCgDQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAgEgDgBIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgJgKgCADIAAgCIgCAAIAAAAIgBABIAAABIgCgEIAAABIgBgCIABAAIgKgMQAAgBAIgCIAAACIACgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIABgDIABACIAFAAIAAACQACAAACgDIgCgCIACAAIAAAAQAHAHAEgBIADgCIAAABQAFgCAFABIALABIgCgEQACgCANABQANAAABACIAFABIAdAGIgDAWIAAAQQABAJgCAGIgCALIA3gnIBCg5IAggKIATAFIgUAjIABgBQgIAEgNAMQgMAMgHAEIAAAAQgCgBgLALQgMANgDAAQgHAEgGAHIgIAKIgEABQgGACgDAFQgGAMgIAEIgZAUIACAAIgzApQgfAagRALQgEALADgJIgLAIIAAABIgHALQgFAGgHABQgCgBgDAEQgBABgBAAQAAABAAAAQAAAAgBAAQAAgBABAAQgNAOgWARIAOAAIAkgXQAKgFATgSQARgRALgFIAEgIIBThMIAngaIApgpIAZgEIAQAHIgJAcIAAgBQgGADgHAIQgIAIgFADQgBgCgIAJQgHAJgCAAQgFACgEAGIgEAHIgDAAQgEACgCADQgDAKgFACQgEABgEAFIgJAIIACAAIghAcQgUATgLAHQgCAIABgHIgIAGIAAAAIgEAJQgCAEgFABQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgCADQAGAAADABIADgCQAGACAPgCQAPgBAGADIAygFIARABQAKAAAEADQAIACAKgCIAPgCQAAADAFAAQAGAAACABQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAABgBIABACIASABIgBABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIADAAIAFgDIgCADIAEAAIgBABQAEABADgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIABABIACABQAEgBgEgCIAEACIAHAAIgDABIAGABQACABAEgCIABgFIgGACIAJgEIABABIAAABQADgBADABQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAADIAFgDQgEAFAHABIAGABIgBgDIADADQACABADgCIABADQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIgBADIARgCQAJgCAGACIAAACIAMAAIgBgBIAJAAIAAACIAGgBIAAABQAIACAIgCIgCgBIAFgIIADgBQAAAAABgBQAAAAABAAQABAAAAAAQABABABAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAFgBAFgDQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQACADAEABIAMgCQAGgBAEABIAFAFQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgBIgBAAIgDgBQACAAgDgGIgOgJIABgBQgGgFAAgCIAAAAIgBAAIABAAIgBAAIgIgMIAFAEIgDgHIgFgBQgDAAgEgHIgBgFQgCABgMgQIABAMIgRgPQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgDgBIgBgDQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgDADIABgBQgDACgHgLQgKgLgDgBQACAEgCgEIACAFIgIgLQgDABgEgFIgIgJQgBAAAAgBQAAAAABgBQAAAAAAABQABAAAAAAIgEgHIAAACQAAABAAAAQAAAAgBAAQAAAAAAgBQgBAAgBgBIgBgEQABgCgEgEIgIgGQgFgDgCgDIgKgOQgHgLgDABIAAgCQgBgDgFgCIABAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAABIAAAAQgBgEgDgDIgBAAIgBgDIADACQgCgEgIgNIgHgLQAFABANAKIABADQAAAAAAgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQADAFAEAAIAEAAIACAFIAKAHQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAEACAJADIgFgGIAEADQAOAUAJAGIAIAEIgBAAQALAHAOALIAaAWIgFgJQAFADAeAXQAfAZADAEQAMANAYASQAaAUAKAJIAZAYIACgBQAAgBAFABIAAgBIACABQAFACAIgBIgSgQIgEgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgEgFIgUgPIABAAQgJgIgBgCIAAAAIAMAIIgCACIAnAdIACgCIgIgJIgGAAQgGgHgHgGIgMgJQgIgHgEABIAAgBIAAABIAAAAIgPgRIAIAGIgFgJQgCgBgFgBQgEgBgGgKIgEgGQgBABgUgWIAFAOIgagWIAAAAIgBgDIgGgDIgBgDQgDgCgDACIgDADIABgBQgCABgOgOIgSgSQADAGgEgFIABACIgLgMQgDABgHgHIgNgNIgBgCQAAAAABAAQAAAAAAAAQABAAAAABQABAAABABIgHgKQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABABABQAAAAAAABQAAAAgBAAQAAgBgBAAQAAgBgBgBIgDgFQAAgCgHgGIgMgJQgGgFgDgEIgRgTQgMgPgEAAIABgCIgJgHIABAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBABAAAAIgBAAIABAAIAAABIgDgEIgEgGIgBAAIgEgFQgBgCAHAGQgGgJgYgdIAbARIACAEQAAAAAAAAQABAAAAAAQABAAABABQAAAAABABQAEACgBgDQAGAHAFABIAGABIADAFIAPAMIABADIARAKIgGgIIAEAEQAXAbAOAJQAIAFAEACIgDgBQAQALAVASQAYAUAPALIgHgLQAHAFAtAjQAuAlADAFQAUASAhAbIA0ApIA8A0IhmgFIghgCIAAABIgDAtQgFBKgDDKIgBAaIh5gCIABAAIgjgDQgVgBgMABQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIhVgBIgDgXQgCgbgFgZQABgEgCgTIgBgZIgDg1IhbAAIAEBgIgCAEQAAADAAAHIADABQgBARABAWIAAAZIgYACIgzADQgdABgRgCIgPAEIiTAIgAkeE0QAvgDAWABQgBAAAAABQAAAAAAAAQAAAAABAAQABgBABAAQACgBABAAQABgBAAAAQAAAAgBABQAAAAgCABIARAAIABgBQAFgBAKgDQAKgCAHACQAAACAIgBQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBABQAUgEAUAAIAQAAIgCgUIAAgLIgDAEQABgEgBgMQgCgKACAAIABACQACAAAAgGIAAgMIgCADIgCgJQACgKgBgWQgCgUACgIIgDgGIAAglIAYAAIAhgCQAUgBAKADIBMgEIAXgBIAGApIACAeQABASgBAGQgBAQADARIAFAdQgEgBABAJQACAMgBACQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAJAAIgDABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAACAAIAHAAIAGgDIgCADIAHAAIAAABQAFABAGgBQAFgBABgCIADABIACABQAFAAgFgDIAIACQAEABAIAAIgFABQADgBAHACQAFAAAGgBIACgFIgKACIAQgEQABAAABAAQAAAAABABQAAAAAAAAQAAABgBAAIAKABQADAAADgCIACADIAIgCIgCADQAAACAHABIALABIgCgDIAHADQADABAGgCIAAADQAEABACgDQACgBAEABIgDACIAWgBIAAAAIABgSIgBACIAAgQIACAAIAAgLIABAAQADgNgDgQIgBADQAAgBgIgHIgBgHQgBgCABgGQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIgBgKIgDgGQABABAAAAQABABAAAAQABAAABAAQAAAAABgBQADgCABgIIgBgWQgBgJABgIIAFgJQAAgEgCgEQgCgDABgDQABgIgBgBQgBgBAAgHIAAgBIABAAQABgEgBgFIAAgJIgBgKQgCgCABgEIACgIIgDgEQAEgOACgXQghgCghAAIgFACQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAgBgBIgHgCIgeABIAAgBIgRgBIAAgBIASAAIgBACIA7gBIAAgCIgOgCIgFADQgMgCgLAAIgSAAQgOgBgCADIgCAAIACABIgBAAIgagFIALAAIgLgDQgDAAgFACQgFACgOgDIgHgDQgCACgigGIAPAJIgqgBIAAgBIgDgBIgHABIgFgCQgEABgBADIgBAEIAAgBQgBADgWgDQgbgDgEAAQAGADgHgCIACABIgTgDQgCADgNgBIgVgCIgDgBIAGgBIgPgDQAAAAgBAAQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABgBAAQAAAAgCAAQgBAAgCAAIgGgDQgBgBgLgBIgSAAQgMABgFgCIgdgEIgRgBIgJAAIgCAAIAAAAIgQAAIgVAAIgwAAIAPAsIgBgCQgCALACAVQABAUgCALIABAAQgDAAACAUQACAWgCACQgBAKACALIACAQQAAgBAAABQgBAAAAAAQAAABAAABQgBABAAABQgCAHACAHIACAKQACAKgBAFQgCAKABAeIACgDIAAAqgAC5hcIAIAGIgCABIAWARQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIAAAAIgDgFIgFABQgDgGgFgDIgHgGQgFgEgDAAIgBAAgAjMkMIACAAIgCgBgAjPkPIABABIABAAIgBgCIgBABgAi/hcIAEgCQAAAAgBABQAAAAAAAAQAAABAAAAQABAAAAgBIgDACIgBgBgAkShlIAFgEIAAACIgFACIAAAAgAkNhnIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(39.75,34.625);

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-15.75,-13.3,0.3335,0.3335);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-7.25,-1.25,0.3335,0.3335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-13.3,128,125.89999999999999);


(lib.wherepage_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.homepage.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		this.button_10.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("https://www.lynch-syndrome-uk.org/");
		}
		
		this.ireland_logo.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://lynchsyndromeireland.com/");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// uk
	this.button_10 = new lib.lynchuk();
	this.button_10.name = "button_10";
	this.button_10.setTransform(872.5,514.9,1,1,0,0,0,147,73.9);
	this.button_10._off = true;
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_10).wait(1).to({_off:false},0).wait(1));

	// ireland
	this.ireland_logo = new lib.irelandlogo();
	this.ireland_logo.name = "ireland_logo";
	this.ireland_logo.setTransform(395.45,540,1,1,0,0,0,168.2,99);
	this.ireland_logo._off = true;
	new cjs.ButtonHelper(this.ireland_logo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ireland_logo).wait(1).to({_off:false},0).wait(1));

	// back_button
	this.homepage = new lib.basicinfobackbutton();
	this.homepage.name = "homepage";
	this.homepage.setTransform(1042.25,247.7,1.4991,1.4991);
	this.homepage._off = true;
	new cjs.ButtonHelper(this.homepage, 0, 1, 2, false, new lib.basicinfobackbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.homepage).wait(1).to({_off:false},0).wait(1));

	// where_page
	this.instance = new lib.more_1();
	this.instance.setTransform(686.1,205.5,0.8641,0.8641,0,0,0,640,166);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.CachedBmp_52();
	this.instance_1.setTransform(314.2,253.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// background
	this.instance_2 = new lib.wherepage_background("synched",0);
	this.instance_2.setTransform(0.5,0.5,0.0007,0.001,0,0,0,655.4,468.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:709.1,regY:511.1,scaleX:1,scaleY:1,x:766.05,y:556.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,1475.2,1068);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("The MSH6 mutation increases the risk of colorectal cancer in the lifetime of carriers with male reproductive organs to between 20% and 70%. This risk is 2% in the general population.\n", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 526;
	this.text.parent = this;
	this.text.setTransform(8,130);

	this.text_1 = new cjs.Text("MSH6-MALE-COLORECTAL", "40px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 532;
	this.text_1.parent = this;
	this.text_1.setTransform(268.05,28.2);

	this.instance = new lib.MSH6_MALE_POPUPBOX("synched",0);
	this.instance.setTransform(265.1,209.95,1,1.1153,0,0,0,265.1,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,0,550,464.8);


(lib.q4answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.q4answerpopupmessage("synched",0);
	this.instance.setTransform(246.1,260.1,0.002,0.0019,0,0,0,0,262.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:253.8,regY:262.5,scaleX:0.0733,scaleY:0.0732,x:247.1,y:260.25},0).wait(1).to({scaleX:0.1446,scaleY:0.1445,x:247.65,y:260.45},0).wait(1).to({scaleX:0.2159,scaleY:0.2158,x:248.15,y:260.6},0).wait(1).to({scaleX:0.2871,scaleY:0.2871,x:248.7,y:260.75},0).wait(1).to({scaleX:0.3584,scaleY:0.3584,x:249.15,y:260.9},0).wait(1).to({scaleX:0.4297,scaleY:0.4297,x:249.7,y:261.1},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:250.2,y:261.3},0).wait(1).to({scaleX:0.5723,scaleY:0.5722,x:250.75,y:261.45},0).wait(1).to({scaleX:0.6436,scaleY:0.6435,x:251.25,y:261.65},0).wait(1).to({scaleX:0.7149,scaleY:0.7148,x:251.8,y:261.8},0).wait(1).to({scaleX:0.7861,scaleY:0.7861,x:252.25,y:261.95},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:252.8,y:262.1},0).wait(1).to({scaleX:0.9287,scaleY:0.9287,x:253.3,y:262.3},0).wait(1).to({scaleX:1,scaleY:1,x:253.85,y:262.5},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:253.45,y:262.4},0).wait(1).to({scaleX:0.8669,scaleY:0.8669,x:253.15,y:262.25},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:252.8,y:262.2},0).wait(1).to({scaleX:0.7339,scaleY:0.7338,x:252.4,y:262.1},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,x:252.05,y:261.95},0).wait(1).to({scaleX:0.6008,scaleY:0.6008,x:251.75,y:261.9},0).wait(1).to({scaleX:0.5343,scaleY:0.5342,x:251.35,y:261.8},0).wait(1).to({scaleX:0.4677,scaleY:0.4677,x:251,y:261.65},0).wait(1).to({scaleX:0.4012,scaleY:0.4011,x:250.65,y:261.6},0).wait(1).to({scaleX:0.3347,scaleY:0.3346,x:250.3,y:261.5},0).wait(1).to({scaleX:0.2681,scaleY:0.2681,x:249.95,y:261.35},0).wait(1).to({scaleX:0.2016,scaleY:0.2015,x:249.6,y:261.3},0).wait(1).to({scaleX:0.1351,scaleY:0.135,x:249.2,y:261.2},0).wait(1).to({scaleX:0.0685,scaleY:0.0684,x:248.9,y:261.05},0).wait(1).to({scaleX:0.002,scaleY:0.0019,x:248.55,y:260.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-10,513,545);


(lib.q3_answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.q3answerpopupmessage("synched",0);
	this.instance.setTransform(256.05,232.1,0.0019,0.0019,0,0,0,262.1,262.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:256.1,regY:262.5,scaleX:0.0732,scaleY:0.0732,x:255.65,y:232.25},0).wait(1).to({scaleX:0.1445,scaleY:0.1445,x:255.3,y:232.5},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:254.9,y:232.65},0).wait(1).to({scaleX:0.2871,scaleY:0.2871,x:254.55,y:232.85},0).wait(1).to({scaleX:0.3584,scaleY:0.3584,x:254.25,y:233},0).wait(1).to({scaleX:0.4297,scaleY:0.4297,x:253.85,y:233.25},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:253.5,y:233.4},0).wait(1).to({scaleX:0.5722,scaleY:0.5722,x:253.15,y:233.6},0).wait(1).to({scaleX:0.6435,scaleY:0.6435,x:252.75,y:233.8},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:252.4,y:234},0).wait(1).to({scaleX:0.7861,scaleY:0.7861,x:252.05,y:234.15},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:251.7,y:234.35},0).wait(1).to({scaleX:0.9287,scaleY:0.9287,x:251.35,y:234.6},0).wait(1).to({scaleX:1,scaleY:1,x:251.05,y:234.8},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:251.25,y:234.55},0).wait(1).to({scaleX:0.8669,scaleY:0.8669,x:251.55,y:234.2},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:251.85,y:233.95},0).wait(1).to({scaleX:0.7338,scaleY:0.7338,x:252.2,y:233.7},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,x:252.5,y:233.4},0).wait(1).to({scaleX:0.6008,scaleY:0.6008,x:252.75,y:233.15},0).wait(1).to({scaleX:0.5342,scaleY:0.5342,x:253.05,y:232.9},0).wait(1).to({scaleX:0.4677,scaleY:0.4677,x:253.35,y:232.65},0).wait(1).to({scaleX:0.4011,scaleY:0.4011,x:253.7,y:232.4},0).wait(1).to({scaleX:0.3346,scaleY:0.3346,x:254,y:232.15},0).wait(1).to({scaleX:0.2681,scaleY:0.2681,x:254.25,y:231.85},0).wait(1).to({scaleX:0.2015,scaleY:0.2015,x:254.55,y:231.6},0).wait(1).to({scaleX:0.135,scaleY:0.135,x:254.85,y:231.35},0).wait(1).to({scaleX:0.0684,scaleY:0.0684,x:255.2,y:231.05},0).wait(1).to({scaleX:0.0019,scaleY:0.0019,x:255.45,y:230.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-37.7,534.2,545);


(lib.q2answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.q2answerpopupmessage("synched",0);
	this.instance.setTransform(246.05,276.05,0.002,0.0018,0,0,0,246.4,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:246.5,regY:276.3,scaleX:0.0733,scaleY:0.0731,y:275.65},0).wait(1).to({scaleX:0.1446,scaleY:0.1444,x:246.1,y:275.3},0).wait(1).to({scaleX:0.2159,scaleY:0.2157,y:274.95},0).wait(1).to({scaleX:0.2872,scaleY:0.287,x:246.15,y:274.6},0).wait(1).to({scaleX:0.3584,scaleY:0.3583,x:246.2,y:274.25},0).wait(1).to({scaleX:0.4297,scaleY:0.4296,x:246.25,y:273.9},0).wait(1).to({scaleX:0.501,scaleY:0.5009,y:273.55},0).wait(1).to({scaleX:0.5723,scaleY:0.5722,y:273.2},0).wait(1).to({scaleX:0.6436,scaleY:0.6435,x:246.3,y:272.85},0).wait(1).to({scaleX:0.7149,scaleY:0.7148,x:246.35,y:272.5},0).wait(1).to({scaleX:0.7861,scaleY:0.7861,x:246.4,y:272.15},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,y:271.8},0).wait(1).to({scaleX:0.9287,scaleY:0.9287,x:246.45,y:271.45},0).wait(1).to({scaleX:1,scaleY:1,x:246.5,y:271.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:246.6,y:271.35},0).wait(1).to({scaleX:0.8669,scaleY:0.8669,x:246.75,y:271.6},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:246.9,y:271.95},0).wait(1).to({scaleX:0.7339,scaleY:0.7338,x:247,y:272.2},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,x:247.15,y:272.5},0).wait(1).to({scaleX:0.6008,scaleY:0.6007,x:247.3,y:272.8},0).wait(1).to({scaleX:0.5343,scaleY:0.5342,x:247.45,y:273.1},0).wait(1).to({scaleX:0.4677,scaleY:0.4676,x:247.55,y:273.35},0).wait(1).to({scaleX:0.4012,scaleY:0.4011,x:247.7,y:273.65},0).wait(1).to({scaleX:0.3347,scaleY:0.3345,x:247.85,y:273.9},0).wait(1).to({scaleX:0.2681,scaleY:0.268,x:248,y:274.25},0).wait(1).to({scaleX:0.2016,scaleY:0.2014,x:248.1,y:274.5},0).wait(1).to({scaleX:0.1351,scaleY:0.1349,x:248.25,y:274.8},0).wait(1).to({scaleX:0.0685,scaleY:0.0683,x:248.4,y:275.1},0).wait(1).to({scaleX:0.002,scaleY:0.0018,x:248.55,y:275.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-15.7,513,575.6);


(lib.q1answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15));

	// Layer_1
	this.instance = new lib.q1answerpopupmessage("synched",0);
	this.instance.setTransform(244.8,260.8,0.002,0.0019,0,0,0,246.4,237.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:246.5,regY:262.5,scaleX:0.0733,scaleY:0.0732,x:244.9,y:262.7},0).wait(1).to({scaleX:0.1446,scaleY:0.1445,x:245.05,y:264.55},0).wait(1).to({scaleX:0.2159,scaleY:0.2158,x:245.15,y:266.45},0).wait(1).to({scaleX:0.2872,scaleY:0.2871,x:245.3,y:268.3},0).wait(1).to({scaleX:0.3584,scaleY:0.3584,x:245.4,y:270.15},0).wait(1).to({scaleX:0.4297,scaleY:0.4297,x:245.55,y:272.05},0).wait(1).to({scaleX:0.501,scaleY:0.5009,x:245.65,y:273.95},0).wait(1).to({scaleX:0.5723,scaleY:0.5722,x:245.75,y:275.8},0).wait(1).to({scaleX:0.6436,scaleY:0.6435,x:245.9,y:277.7},0).wait(1).to({scaleX:0.7149,scaleY:0.7148,x:246,y:279.55},0).wait(1).to({scaleX:0.7861,scaleY:0.7861,x:246.15,y:281.4},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:246.25,y:283.25},0).wait(1).to({scaleX:0.9287,scaleY:0.9287,x:246.4,y:285.15},0).wait(1).to({scaleX:1,scaleY:1,x:246.5,y:287.05},0).wait(1).to({scaleX:0.9287,scaleY:0.9287,y:285.3},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:246.45,y:283.5},0).wait(1).to({scaleX:0.7861,scaleY:0.7861,y:281.75},0).wait(1).to({scaleX:0.7149,scaleY:0.7148,y:280},0).wait(1).to({scaleX:0.6436,scaleY:0.6435,y:278.2},0).wait(1).to({scaleX:0.5723,scaleY:0.5722,x:246.4,y:276.45},0).wait(1).to({scaleX:0.501,scaleY:0.5009,x:246.45,y:274.75},0).wait(1).to({scaleX:0.4297,scaleY:0.4296,y:273},0).wait(1).to({scaleX:0.3584,scaleY:0.3583,x:246.4,y:271.2},0).wait(1).to({scaleX:0.2872,scaleY:0.287,y:269.45},0).wait(1).to({scaleX:0.2159,scaleY:0.2157,y:267.7},0).wait(1).to({scaleX:0.1446,scaleY:0.1445,y:265.9},0).wait(1).to({scaleX:0.0733,scaleY:0.0732,x:246.35,y:264.15},0).wait(1).to({scaleX:0.002,scaleY:0.0019,x:246.4,y:262.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,14.6,513,545);


(lib.popup_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.popup_base_messagebox("synched",0);
	this.instance.setTransform(-240,220.05,0.0017,0.0039,0,0,0,232,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:302.1,regY:127.5,scaleX:0.1202,scaleY:0.1146,x:-174.15,y:215},0).wait(1).to({scaleX:0.2386,scaleY:0.2253,x:-108.4,y:209.5},0).wait(1).to({scaleX:0.3571,scaleY:0.3359,x:-42.75,y:204.05},0).wait(1).to({scaleX:0.4755,scaleY:0.4466,x:23,y:198.55},0).wait(1).to({scaleX:0.5939,scaleY:0.5573,x:88.75,y:193},0).wait(1).to({scaleX:0.7124,scaleY:0.668,x:154.4,y:187.5},0).wait(1).to({scaleX:0.8308,scaleY:0.7786,x:220.15,y:182.05},0).wait(1).to({scaleX:0.9493,scaleY:0.8893,x:285.85,y:176.55},0).wait(1).to({scaleX:1.0677,scaleY:1,x:351.5,y:171.05},0).wait(1).to({scaleX:0.9611,scaleY:0.9004,x:292.75,y:179.3},0).wait(1).to({scaleX:0.8545,scaleY:0.8008,x:234.05,y:187.6},0).wait(1).to({scaleX:0.7479,scaleY:0.7012,x:175.25,y:195.9},0).wait(1).to({scaleX:0.6413,scaleY:0.6016,x:116.5,y:204.2},0).wait(1).to({scaleX:0.5347,scaleY:0.502,x:57.7,y:212.5},0).wait(1).to({scaleX:0.4281,scaleY:0.4024,x:-1.05,y:220.75},0).wait(1).to({scaleX:0.3215,scaleY:0.3027,x:-59.8,y:229.05},0).wait(1).to({scaleX:0.2149,scaleY:0.2031,x:-118.6,y:237.35},0).wait(1).to({scaleX:0.1083,scaleY:0.1035,x:-177.4,y:245.65},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:-236.2,y:253.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.4,33.6,927.1999999999999,275);


(lib.pms2_male_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.description_navigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(459.7,12.1,0.0172,0.0166);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.description_navigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:34.6,regY:29.5,scaleX:0.1401,scaleY:0.1396,x:464.55,y:16.2},0).wait(1).to({scaleX:0.2629,scaleY:0.2625,x:468.8,y:19.85},0).wait(1).to({scaleX:0.3858,scaleY:0.3854,x:473.05,y:23.45},0).wait(1).to({scaleX:0.5086,scaleY:0.5083,x:477.3,y:27.1},0).wait(1).to({scaleX:0.6315,scaleY:0.6312,x:481.55,y:30.7},0).wait(1).to({scaleX:0.7543,scaleY:0.7542,x:485.8,y:34.35},0).wait(1).to({scaleX:0.8772,scaleY:0.8771,x:490.05,y:37.95},0).wait(1).to({scaleX:1,scaleY:1,x:494.3,y:41.6},0).wait(1).to({scaleX:0.8596,scaleY:0.8595,x:489.45,y:37.45},0).wait(1).to({scaleX:0.7192,scaleY:0.719,x:484.6,y:33.3},0).wait(1).to({scaleX:0.5788,scaleY:0.5786,x:479.75,y:29.15},0).wait(1).to({scaleX:0.4384,scaleY:0.4381,x:474.85,y:25},0).wait(1).to({scaleX:0.298,scaleY:0.2976,x:470,y:20.9},0).wait(1).to({scaleX:0.1576,scaleY:0.1571,x:465.15,y:16.75},0).wait(1).to({scaleX:0.0172,scaleY:0.0166,x:460.3,y:12.6},0).wait(1));

	// Layer_1
	this.instance = new lib.pms2_male_description_box("synched",0);
	this.instance.setTransform(264.4,296.5,0.0019,0.0016,0,0,0,134.3,273.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:267,regY:296.2,scaleX:0.1266,scaleY:0.1264,x:264.9,y:296.45},0).wait(1).to({scaleX:0.2514,scaleY:0.2512,x:265.2,y:296.4},0).wait(1).to({scaleX:0.3762,scaleY:0.376,x:265.5},0).wait(1).to({scaleX:0.5009,scaleY:0.5008,x:265.8,y:296.35},0).wait(1).to({scaleX:0.6257,scaleY:0.6256,x:266.1,y:296.3},0).wait(1).to({scaleX:0.7505,scaleY:0.7504,x:266.35,y:296.25},0).wait(1).to({scaleX:0.8752,scaleY:0.8752,x:266.7},0).wait(1).to({scaleX:1,scaleY:1,x:267,y:296.2},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:266.2,y:298.1},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:265.35,y:299.95},0).wait(1).to({scaleX:0.5722,scaleY:0.5721,x:264.55,y:301.85},0).wait(1).to({scaleX:0.4296,scaleY:0.4295,x:263.7,y:303.7},0).wait(1).to({scaleX:0.287,scaleY:0.2869,x:262.9,y:305.6},0).wait(1).to({scaleX:0.1444,scaleY:0.1443,x:262.05,y:307.5},0).wait(1).to({scaleX:0.0018,scaleY:0.0016,x:261.3,y:309.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-11,554,616.3);


(lib.pms2_female_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.description_navigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(459.7,12.1,0.0172,0.0166);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.description_navigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:34.6,regY:29.5,scaleX:0.1401,scaleY:0.1396,x:464.55,y:16.2},0).wait(1).to({scaleX:0.2629,scaleY:0.2625,x:468.8,y:19.85},0).wait(1).to({scaleX:0.3858,scaleY:0.3854,x:473.05,y:23.45},0).wait(1).to({scaleX:0.5086,scaleY:0.5083,x:477.3,y:27.1},0).wait(1).to({scaleX:0.6315,scaleY:0.6312,x:481.55,y:30.7},0).wait(1).to({scaleX:0.7543,scaleY:0.7542,x:485.8,y:34.35},0).wait(1).to({scaleX:0.8772,scaleY:0.8771,x:490.05,y:37.95},0).wait(1).to({scaleX:1,scaleY:1,x:494.3,y:41.6},0).wait(1).to({scaleX:0.8596,scaleY:0.8595,x:489.45,y:37.45},0).wait(1).to({scaleX:0.7192,scaleY:0.719,x:484.6,y:33.3},0).wait(1).to({scaleX:0.5788,scaleY:0.5786,x:479.75,y:29.15},0).wait(1).to({scaleX:0.4384,scaleY:0.4381,x:474.85,y:25},0).wait(1).to({scaleX:0.298,scaleY:0.2976,x:470,y:20.9},0).wait(1).to({scaleX:0.1576,scaleY:0.1571,x:465.15,y:16.75},0).wait(1).to({scaleX:0.0172,scaleY:0.0166,x:460.3,y:12.6},0).wait(1));

	// Layer_1
	this.instance = new lib.pms2_female_dis_box("synched",0);
	this.instance.setTransform(266.4,292.45,0.0019,0.0017,0,0,0,214.8,265.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:267,regY:294,scaleX:0.1266,scaleY:0.1265,x:273.05,y:296.2},0).wait(1).to({scaleX:0.2514,scaleY:0.2513,x:279.6,y:299.9},0).wait(1).to({scaleX:0.3762,scaleY:0.3761,x:286.25,y:303.6},0).wait(1).to({scaleX:0.5009,scaleY:0.5008,x:292.8,y:307.35},0).wait(1).to({scaleX:0.6257,scaleY:0.6256,x:299.35,y:311.1},0).wait(1).to({scaleX:0.7505,scaleY:0.7504,x:305.95,y:314.75},0).wait(1).to({scaleX:0.8752,scaleY:0.8752,x:312.55,y:318.5},0).wait(1).to({scaleX:1,scaleY:1,x:319.1,y:322.25},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:312.25,y:317.2},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:305.3,y:312.2},0).wait(1).to({scaleX:0.5722,scaleY:0.5722,x:298.4,y:307.15},0).wait(1).to({scaleX:0.4296,scaleY:0.4295,x:291.5,y:302.15},0).wait(1).to({scaleX:0.287,scaleY:0.2869,x:284.6,y:297.1},0).wait(1).to({scaleX:0.1444,scaleY:0.1443,x:277.65,y:292.05},0).wait(1).to({scaleX:0.0018,scaleY:0.0017,x:270.8,y:287},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.2,-11,553.9,637.2);


(lib.mswh6_fem_endometrium_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.MSH6_fem_endometrium_popupbox("synched",0);
	this.instance.setTransform(-366.05,398.15,0.0022,0.002,0,0,0,204.8,225.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:222.3,regY:243.2,scaleX:0.1131,scaleY:0.1129,x:-298.55,y:383.05},0).wait(1).to({scaleX:0.2239,scaleY:0.2238,x:-231.1,y:367.95},0).wait(1).to({scaleX:0.3348,scaleY:0.3347,x:-163.75,y:352.85},0).wait(1).to({scaleX:0.4457,scaleY:0.4456,x:-96.3,y:337.75},0).wait(1).to({scaleX:0.5565,scaleY:0.5565,x:-28.9,y:322.65},0).wait(1).to({scaleX:0.6674,scaleY:0.6673,x:38.55,y:307.55},0).wait(1).to({scaleX:0.7783,scaleY:0.7782,x:105.95,y:292.4},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,x:173.4,y:277.35},0).wait(1).to({scaleX:1,scaleY:1,x:240.8,y:262.2},0).wait(1).to({scaleX:0.9002,scaleY:0.9002,x:181.6,y:274.35},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:122.4,y:286.45},0).wait(1).to({scaleX:0.7007,scaleY:0.7006,x:63.2,y:298.6},0).wait(1).to({scaleX:0.6009,scaleY:0.6008,x:3.95,y:310.7},0).wait(1).to({scaleX:0.5011,scaleY:0.501,x:-55.2,y:322.85},0).wait(1).to({scaleX:0.4013,scaleY:0.4012,x:-114.45,y:334.95},0).wait(1).to({scaleX:0.3015,scaleY:0.3014,x:-173.6,y:347.1},0).wait(1).to({scaleX:0.2018,scaleY:0.2016,x:-232.85,y:359.25},0).wait(1).to({scaleX:0.102,scaleY:0.1018,x:-292.05,y:371.35},0).wait(1).to({scaleX:0.0022,scaleY:0.002,x:-351.25,y:383.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.5,9,841.6,508.4);


(lib.MSH6_MALE_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(790.2,184.05,0.0018,0.0022,0,0,0,81.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:265.1,regY:231.4,scaleX:0.1128,scaleY:0.113,x:728.55,y:186.7},0).wait(1).to({scaleX:0.2237,scaleY:0.2239,x:666.6,y:189.15},0).wait(1).to({scaleX:0.3346,scaleY:0.3348,x:604.6,y:191.6},0).wait(1).to({scaleX:0.4455,scaleY:0.4456,x:542.65,y:194.05},0).wait(1).to({scaleX:0.5564,scaleY:0.5565,x:480.7,y:196.5},0).wait(1).to({scaleX:0.6673,scaleY:0.6674,x:418.7,y:199},0).wait(1).to({scaleX:0.7782,scaleY:0.7783,x:356.75,y:201.45},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,x:294.8,y:203.95},0).wait(1).to({scaleX:1,scaleY:1,x:232.9,y:206.4},0).wait(1).to({scaleX:0.9002,scaleY:0.9002,x:290,y:204.9},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:347.1,y:203.35},0).wait(1).to({scaleX:0.7005,scaleY:0.7006,x:404.25,y:201.9},0).wait(1).to({scaleX:0.6007,scaleY:0.6009,x:461.45,y:200.4},0).wait(1).to({scaleX:0.5009,scaleY:0.5011,x:518.6,y:198.9},0).wait(1).to({scaleX:0.4011,scaleY:0.4013,x:575.75,y:197.4},0).wait(1).to({scaleX:0.3013,scaleY:0.3015,x:632.9,y:195.9},0).wait(1).to({scaleX:0.2015,scaleY:0.2017,x:690.05,y:194.4},0).wait(1).to({scaleX:0.1016,scaleY:0.1019,x:747.2,y:192.95},0).wait(1).to({scaleX:0.0018,scaleY:0.0022,x:804.4,y:191.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-25,847,464.8);


(lib.msh6_male_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.description_navigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(504.8,-6,0.0172,0.0166);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.description_navigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:34.6,regY:29.5,scaleX:0.1401,scaleY:0.1396,x:509.75,y:-2.35},0).wait(1).to({scaleX:0.2629,scaleY:0.2625,x:514.1,y:0.8},0).wait(1).to({scaleX:0.3858,scaleY:0.3854,x:518.5,y:3.9},0).wait(1).to({scaleX:0.5086,scaleY:0.5083,x:522.85,y:7.05},0).wait(1).to({scaleX:0.6315,scaleY:0.6312,x:527.2,y:10.15},0).wait(1).to({scaleX:0.7543,scaleY:0.7542,x:531.6,y:13.3},0).wait(1).to({scaleX:0.8772,scaleY:0.8771,x:535.95,y:16.4},0).wait(1).to({scaleX:1,scaleY:1,x:540.35,y:19.55},0).wait(1).to({scaleX:0.8596,scaleY:0.8595,x:534.6,y:16},0).wait(1).to({scaleX:0.7192,scaleY:0.719,x:528.9,y:12.45},0).wait(1).to({scaleX:0.5788,scaleY:0.5786,x:523.2,y:8.85},0).wait(1).to({scaleX:0.4384,scaleY:0.4381,x:517.45,y:5.3},0).wait(1).to({scaleX:0.298,scaleY:0.2976,x:511.75,y:1.75},0).wait(1).to({scaleX:0.1576,scaleY:0.1571,x:506.05,y:-1.8},0).wait(1).to({scaleX:0.0172,scaleY:0.0166,x:500.35,y:-5.4},0).wait(1));

	// Layer_1
	this.instance = new lib.msh6_male_description_box("synched",0);
	this.instance.setTransform(264.45,292.5,0.0019,0.0017,0,0,0,214.8,265.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:267,regY:294,scaleX:0.1266,scaleY:0.1265,x:271.35,y:289.5},0).wait(1).to({scaleX:0.2514,scaleY:0.2513,x:278.15,y:286.4},0).wait(1).to({scaleX:0.3762,scaleY:0.3761,x:285,y:283.4},0).wait(1).to({scaleX:0.5009,scaleY:0.5008,x:291.8,y:280.35},0).wait(1).to({scaleX:0.6257,scaleY:0.6256,x:298.65,y:277.3},0).wait(1).to({scaleX:0.7505,scaleY:0.7504,x:305.45,y:274.25},0).wait(1).to({scaleX:0.8752,scaleY:0.8752,x:312.3,y:271.2},0).wait(1).to({scaleX:1,scaleY:1,x:319.1,y:268.25},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:311.4,y:272.55},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:303.6,y:277},0).wait(1).to({scaleX:0.5722,scaleY:0.5722,x:295.85,y:281.4},0).wait(1).to({scaleX:0.4296,scaleY:0.4295,x:288.1,y:285.85},0).wait(1).to({scaleX:0.287,scaleY:0.2869,x:280.35,y:290.25},0).wait(1).to({scaleX:0.1444,scaleY:0.1443,x:272.55,y:294.65},0).wait(1).to({scaleX:0.0018,scaleY:0.0017,x:264.85,y:299.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.2,-35.7,553.9,608);


(lib.msh6_female_descriptionbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Find out which organs in MSH6 mutation carriers with a female reproductive system have a higher cancer risk than the general population. Notice that risk increases with age.", "40px 'Helvetica'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 479;
	this.text.parent = this;
	this.text.setTransform(37.6,148.1);

	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(267,294,0.9998,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,534,588.1);


(lib.msh6_fem_colorectal_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.MSH6_FEM_COLORECTAL_POP_BOX("synched",0);
	this.instance.setTransform(-250.05,246.05,0.0021,0.002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:235.8,regY:244.8,scaleX:0.113,scaleY:0.1129,x:-174.05,y:233.95},0).wait(1).to({scaleX:0.2239,scaleY:0.2238,x:-102.65,y:221.9},0).wait(1).to({scaleX:0.3347,scaleY:0.3347,x:-34.65,y:210.35},0).wait(1).to({scaleX:0.4456,scaleY:0.4456,x:30.8,y:199.2},0).wait(1).to({scaleX:0.5565,scaleY:0.5565,x:94.35,y:188.6},0).wait(1).to({scaleX:0.6674,scaleY:0.6673,x:156.9,y:178.45},0).wait(1).to({scaleX:0.7782,scaleY:0.7782,x:219.15,y:168.8},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,x:281.85,y:159.6},0).wait(1).to({scaleX:1,scaleY:1,x:345.85,y:150.8},0).wait(1).to({scaleX:0.9002,scaleY:0.9002,x:289.65,y:166.4},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:233.55,y:182},0).wait(1).to({scaleX:0.7006,scaleY:0.7006,x:177.4,y:197.5},0).wait(1).to({scaleX:0.6008,scaleY:0.6008,x:121.35,y:213.05},0).wait(1).to({scaleX:0.5011,scaleY:0.501,x:65.15,y:228.7},0).wait(1).to({scaleX:0.4013,scaleY:0.4012,x:9,y:244.25},0).wait(1).to({scaleX:0.3015,scaleY:0.3014,x:-47.1,y:259.85},0).wait(1).to({scaleX:0.2017,scaleY:0.2016,x:-103.25,y:275.4},0).wait(1).to({scaleX:0.1019,scaleY:0.1018,x:-159.4,y:290.95},0).wait(1).to({scaleX:0.0021,scaleY:0.002,x:-215.55,y:306.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-103.9,831.6,509.5);


(lib.msh2_title_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.MSH2caption("synched",0);
	this.instance.setTransform(269.4,202,1,1,0,0,0,269.4,202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.8,404.1);


(lib.msh2_male_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(203.3,-236.35,1,1,0,0,0,23,20);
	this.description_navigation._off = true;
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(8).to({_off:false},0).wait(2));

	// text
	this.text = new cjs.Text("The MSH2 mutation increases the risk of a range of cancers but some parts of the body are at much higher risk than others. Find out which organs in carriers with a female reproductive system have a cancer risk that is above 5%. Notice that risk increases with age.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 474;
	this.text.parent = this;
	this.text.setTransform(-242,-157.8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(8).to({_off:false},0).wait(2));

	// box
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(-11,66,0.0612,0.0612);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,y:15.9},7,cjs.Ease.cubicInOut).to({scaleX:0.0412,scaleY:0.0412,y:66},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-278.1,534.1,588.1);


(lib.msh2_fem_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// navigation
	this.description_navigation = new lib.popupnavigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(203.3,-236.35,1,1,0,0,0,23,20);
	this.description_navigation._off = true;
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.popupnavigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(8).to({_off:false},0).wait(2));

	// text
	this.text = new cjs.Text("The MSH2 mutation increases the risk of a range of cancers but some parts of the body are at much higher risk than others. Find out which organs in carriers with a female reproductive system have a cancer risk that is above 5%. Notice that risk increases with age.", "35px 'Helvetica'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 474;
	this.text.parent = this;
	this.text.setTransform(-242,-157.8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(8).to({_off:false},0).wait(2));

	// box
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(-11,66,0.0612,0.0612);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,y:15.9},7,cjs.Ease.cubicInOut).to({scaleX:0.0412,scaleY:0.0412,y:66},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-278.1,534.1,588.1);


(lib.mlh1malestomachpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.MLH1MSTOMACHPOPUPMESSAGE("synched",0);
	this.instance.setTransform(866.25,112.05,0.0019,0.0035,0,0,0,0,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:256.4,regY:173.9,scaleX:0.0898,scaleY:0.0793,x:830.8,y:116.85},0).wait(1).to({scaleX:0.1776,scaleY:0.1551,x:794.9,y:121.4},0).wait(1).to({scaleX:0.2654,scaleY:0.2309,x:759,y:126},0).wait(1).to({scaleX:0.3532,scaleY:0.3066,x:723.05,y:130.55},0).wait(1).to({scaleX:0.441,scaleY:0.3824,x:687.15,y:135.2},0).wait(1).to({scaleX:0.5289,scaleY:0.4582,x:651.25,y:139.8},0).wait(1).to({scaleX:0.6167,scaleY:0.534,x:615.3,y:144.35},0).wait(1).to({scaleX:0.7045,scaleY:0.6098,x:579.4,y:148.95},0).wait(1).to({scaleX:0.7923,scaleY:0.6855,x:543.5,y:153.55},0).wait(1).to({scaleX:0.8801,scaleY:0.7613,x:507.55,y:158.15},0).wait(1).to({scaleX:0.968,scaleY:0.8371,x:471.65,y:162.7},0).wait(1).to({scaleX:1.0558,scaleY:0.9129,x:435.75,y:167.3},0).wait(1).to({scaleX:1.1436,scaleY:0.9886,x:399.8,y:171.9},0).wait(1).to({scaleX:1.2314,scaleY:1.0644,x:363.95,y:176.55},0).wait(1).to({scaleX:1.1494,scaleY:0.9937,x:396.7,y:173.45},0).wait(1).to({scaleX:1.0675,scaleY:0.923,x:429.55,y:170.35},0).wait(1).to({scaleX:0.9855,scaleY:0.8522,x:462.4,y:167.3},0).wait(1).to({scaleX:0.9036,scaleY:0.7815,x:495.15,y:164.25},0).wait(1).to({scaleX:0.8216,scaleY:0.7108,x:528,y:161.2},0).wait(1).to({scaleX:0.7396,scaleY:0.6401,x:560.85,y:158.15},0).wait(1).to({scaleX:0.6577,scaleY:0.5693,x:593.6,y:155.05},0).wait(1).to({scaleX:0.5757,scaleY:0.4986,x:626.45,y:152},0).wait(1).to({scaleX:0.4937,scaleY:0.4279,x:659.3,y:148.95},0).wait(1).to({scaleX:0.4118,scaleY:0.3572,x:692.05,y:145.9},0).wait(1).to({scaleX:0.3298,scaleY:0.2864,x:724.9,y:142.8},0).wait(1).to({scaleX:0.2478,scaleY:0.2157,x:757.75,y:139.75},0).wait(1).to({scaleX:0.1659,scaleY:0.145,x:790.55,y:136.7},0).wait(1).to({scaleX:0.0839,scaleY:0.0743,x:823.35,y:133.65},0).wait(1).to({scaleX:0.0019,scaleY:0.0035,x:856.2,y:130.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.2,-19.6,810,394.5);


(lib.mlh1mcolorectalpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.MLH1MCOLORECTALPOPUPMESSAGE("synched",0);
	this.instance.setTransform(815.2,124.2,0.0018,0.0034,0,0,0,0,146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:268.1,regY:146.2,scaleX:0.0731,scaleY:0.0746,x:776.25,y:124.3},0).wait(1).to({scaleX:0.1444,scaleY:0.1458,x:736.85,y:124.45},0).wait(1).to({scaleX:0.2157,scaleY:0.217,x:697.5,y:124.55},0).wait(1).to({scaleX:0.287,scaleY:0.2882,x:658.05,y:124.75},0).wait(1).to({scaleX:0.3583,scaleY:0.3593,x:618.65,y:124.85},0).wait(1).to({scaleX:0.4296,scaleY:0.4305,x:579.25,y:125},0).wait(1).to({scaleX:0.5009,scaleY:0.5017,x:539.9,y:125.15},0).wait(1).to({scaleX:0.5722,scaleY:0.5729,x:500.45,y:125.25},0).wait(1).to({scaleX:0.6435,scaleY:0.6441,x:461.05,y:125.4},0).wait(1).to({scaleX:0.7148,scaleY:0.7153,x:421.7,y:125.5},0).wait(1).to({scaleX:0.7861,scaleY:0.7864,x:382.25,y:125.7},0).wait(1).to({scaleX:0.8574,scaleY:0.8576,x:342.85,y:125.8},0).wait(1).to({scaleX:0.9287,scaleY:0.9288,x:303.5,y:126},0).wait(1).to({scaleX:1,scaleY:1,x:264.1,y:126.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9336,x:300.7,y:126.2},0).wait(1).to({scaleX:0.8669,scaleY:0.8671,x:337.35},0).wait(1).to({scaleX:0.8004,scaleY:0.8007,x:373.95},0).wait(1).to({scaleX:0.7338,scaleY:0.7342,x:410.65,y:126.25},0).wait(1).to({scaleX:0.6673,scaleY:0.6678,x:447.3,y:126.3},0).wait(1).to({scaleX:0.6007,scaleY:0.6014,x:483.9},0).wait(1).to({scaleX:0.5342,scaleY:0.5349,x:520.55,y:126.35},0).wait(1).to({scaleX:0.4676,scaleY:0.4685,x:557.15,y:126.4},0).wait(1).to({scaleX:0.4011,scaleY:0.402,x:593.85,y:126.45},0).wait(1).to({scaleX:0.3345,scaleY:0.3356,x:630.5},0).wait(1).to({scaleX:0.268,scaleY:0.2692,x:667.1,y:126.5},0).wait(1).to({scaleX:0.2014,scaleY:0.2027,x:703.75,y:126.55},0).wait(1).to({scaleX:0.1349,scaleY:0.1363,x:740.35},0).wait(1).to({scaleX:0.0683,scaleY:0.0698,x:777,y:126.6},0).wait(1).to({scaleX:0.0018,scaleY:0.0034,x:813.7,y:126.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-30.5,830.6,313.5);


(lib.mlh1femaleendometrialpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.MLH1FEMALEENDOMETRIALPOPUPMESSAGE("synched",0);
	this.instance.setTransform(-204.3,214.35,0.0016,0.0038,0,0,0,0,130.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:309.9,regY:130.5,scaleX:0.0729,scaleY:0.075,x:-166.95,y:208.45},0).wait(1).to({scaleX:0.1442,scaleY:0.1461,x:-130.1,y:202.55},0).wait(1).to({scaleX:0.2156,scaleY:0.2173,x:-93.25,y:196.7},0).wait(1).to({scaleX:0.2869,scaleY:0.2884,x:-56.45,y:190.85},0).wait(1).to({scaleX:0.3582,scaleY:0.3596,x:-19.6,y:185},0).wait(1).to({scaleX:0.4295,scaleY:0.4308,x:17.25,y:179.1},0).wait(1).to({scaleX:0.5008,scaleY:0.5019,x:54.05,y:173.25},0).wait(1).to({scaleX:0.5721,scaleY:0.5731,x:90.9,y:167.35},0).wait(1).to({scaleX:0.6434,scaleY:0.6442,x:127.75,y:161.45},0).wait(1).to({scaleX:0.7147,scaleY:0.7154,x:164.6,y:155.6},0).wait(1).to({scaleX:0.7861,scaleY:0.7865,x:201.4,y:149.75},0).wait(1).to({scaleX:0.8574,scaleY:0.8577,x:238.25,y:143.9},0).wait(1).to({scaleX:0.9287,scaleY:0.9288,x:275.1,y:138},0).wait(1).to({scaleX:1,scaleY:1,x:311.9,y:132.15},0).wait(1).to({scaleX:0.9334,scaleY:0.9336,x:277.4,y:137.9},0).wait(1).to({scaleX:0.8669,scaleY:0.8672,x:242.9,y:143.6},0).wait(1).to({scaleX:0.8003,scaleY:0.8008,x:208.35,y:149.4},0).wait(1).to({scaleX:0.7338,scaleY:0.7344,x:173.9,y:155.15},0).wait(1).to({scaleX:0.6672,scaleY:0.6679,x:139.35,y:160.9},0).wait(1).to({scaleX:0.6006,scaleY:0.6015,x:104.85,y:166.65},0).wait(1).to({scaleX:0.5341,scaleY:0.5351,x:70.3,y:172.45},0).wait(1).to({scaleX:0.4675,scaleY:0.4687,x:35.85,y:178.15},0).wait(1).to({scaleX:0.401,scaleY:0.4023,x:1.3,y:183.95},0).wait(1).to({scaleX:0.3344,scaleY:0.3359,x:-33.2,y:189.7},0).wait(1).to({scaleX:0.2678,scaleY:0.2695,x:-67.75,y:195.45},0).wait(1).to({scaleX:0.2013,scaleY:0.2031,x:-102.2,y:201.2},0).wait(1).to({scaleX:0.1347,scaleY:0.1367,x:-136.75,y:207},0).wait(1).to({scaleX:0.0682,scaleY:0.0702,x:-171.3,y:212.7},0).wait(1).to({scaleX:0.0016,scaleY:0.0038,x:-205.8,y:218.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.3,-8.8,838.5,282);


(lib.mlh1femalecolorectalpopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.mlh1femalecolorectlpopup("synched",0);
	this.instance.setTransform(-492.1,322.1,0.0014,0.0031,0,0,0,284.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:356,regY:198.9,scaleX:0.0939,scaleY:0.0957,x:-426.55,y:319.7},0).wait(1).to({scaleX:0.1864,scaleY:0.1884,x:-361.05,y:316.65},0).wait(1).to({scaleX:0.2789,scaleY:0.2811,x:-295.5,y:313.6},0).wait(1).to({scaleX:0.3714,scaleY:0.3738,x:-230.05,y:310.6},0).wait(1).to({scaleX:0.4639,scaleY:0.4665,x:-164.5,y:307.55},0).wait(1).to({scaleX:0.5564,scaleY:0.5591,x:-99.05,y:304.5},0).wait(1).to({scaleX:0.6488,scaleY:0.6518,x:-33.5,y:301.45},0).wait(1).to({scaleX:0.7413,scaleY:0.7445,x:31.9,y:298.45},0).wait(1).to({scaleX:0.8338,scaleY:0.8372,x:97.45,y:295.4},0).wait(1).to({scaleX:0.7506,scaleY:0.7537,x:219.95,y:273.75},0).wait(1).to({scaleX:0.6673,scaleY:0.6703,x:342.6,y:251.5},0).wait(1).to({scaleX:0.5841,scaleY:0.5869,x:436,y:251.65},0).wait(1).to({scaleX:0.5009,scaleY:0.5035,x:321.6,y:303.65},0).wait(1).to({scaleX:0.4176,scaleY:0.4201,x:197.9,y:339.1},0).wait(1).to({scaleX:0.3344,scaleY:0.3367,x:68.55,y:357.95},0).wait(1).to({scaleX:0.2511,scaleY:0.2533,x:-62.85,y:369.75},0).wait(1).to({scaleX:0.1679,scaleY:0.1699,x:-194.6,y:380.45},0).wait(1).to({scaleX:0.0846,scaleY:0.0865,x:-326.4,y:390.45},0).wait(1).to({scaleX:0.0014,scaleY:0.0031,x:-458.55,y:399.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492.5,111.2,1142.5,361.2);


(lib.mlh11malebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("click the body to go back", "normal 400 30px 'Alfa Slab One'", "#003300");
	this.text.lineHeight = 49;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(190.6,112.4);
	if(!lib.properties.webfonts['Alfa Slab One']) {
		lib.webFontTxtInst['Alfa Slab One'] = lib.webFontTxtInst['Alfa Slab One'] || [];
		lib.webFontTxtInst['Alfa Slab One'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance = new lib.malebodypsd("synched",0);
	this.instance.setTransform(218.55,467.35,0.4452,0.3799,0,0,0,1702,1401);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(-9.4,73.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:1702,regY:1401,scaleX:0.4452,scaleY:0.3799,x:218.55}}]}).to({state:[{t:this.instance,p:{regX:1701.9,regY:1400.9,scaleX:0.4609,scaleY:0.3934,x:218.5}}]},1).to({state:[{t:this.instance,p:{regX:1702,regY:1401,scaleX:0.4452,scaleY:0.3799,x:218.55}}]},1).to({state:[{t:this.instance,p:{regX:1702,regY:1401,scaleX:0.4452,scaleY:0.3799,x:218.55}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-16.4,467,967.6999999999999);


(lib.mlh1title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text(" Click on a body to learn which organs are most affected by MLH1", "20px 'Helvetica'", "#10328C");
	this.text.lineHeight = 26;
	this.text.lineWidth = 603;
	this.text.parent = this;
	this.text.setTransform(-44.85,209.45);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib.mlh1page_0000_mlh1psd("synched",0);
	this.instance.setTransform(245.9,104.35,0.1929,0.1929,0,0,0,1886,872.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1885.9,regY:871.9,scaleX:0.2117,scaleY:0.2117},0).wait(1).to({regX:1886,regY:872.1,scaleX:0.1929,scaleY:0.1929},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-10.1,607,271.3);


(lib.mlh1malestomach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mhl1female_0001_stomachpsd("synched",0);
	this.instance.setTransform(83.1,86.75,0.4582,0.4582,14.9988,0,0,1582.9,1516);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010032").s().p("AhZMKIgIAAIgMgBIhOgKIhNgXIgCgCIgSgHIgjgSIADgBIhGg/IgNgKIgKgGIgNgFQADgBAAgEIgZgRIAEAAIhBhHIgBgCIgKgLIgCgBIAAgBIgCgCIgHgGIAAgBIgBAAIgBgCIgHgHIgggaIgFgEQACgHgEgKIgTgtIgDgKIAAgJIgnhwIgjhjIgBgEIgBgDIgQgxIgBAAIAAgBIAAgBIAAgBIgBgCIgBgDIgCgIIgSg6IgRg/IAAgBIAAAAIAAgBIgBgCIAAgCIgeiOICBhhQADAAAGAEQAIACAIgGIgKgRQAggGA2gsQAzgqAlAAIAFgeIDuiwIB2gqIBzhkIApAQIAYgpIACgCIAPgSIACgCIAFgFIgFABIgfAJIgMAGIARgKIAIgIIACACIANgFIABAAIACAAIAZgEIABAAIABAAIACAAIAQABIAEAAIACAAIABABIAQADIACABIABAAIABABIAEABIAWAJIAHABIADAAIABAAQADgBAGgHIADgDQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgDAFIAFgCIACAAIABAAIABgBIAHAAIAAABIAFACIABAAIABABIACACIABABIAAABIAEAEQADACAFgBIAJgXIABgBIADgBIACgBIACAAIABAAIADgBIAGAAIABABIABAAIADAAIACABIACADQACADgEAHIgBAHQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIADABIAHgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABADgFAJIgBAJIABAEQACACAGgBIALgCQAGgBABADIgBACIgHALQgDAGAJgJIgEAEIADgCIgBABQAAABAAABQAAAAABAAQAAABABAAQABAAAAgBQAEgCAMgLQgEAFgBADIgFAIQgHAOAKgBIAJgCQAGgBACAAIgJAMIANgPQgFAIAAABIAEgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgKAOIAQgRIARABIgSAbIANgGIAEgDIgsAyIADgCQAJgGgNAOQgMAKAHgFIADgBIgHAFQANgHACACQACABgCAGQgCAGACABQADABAOgIIgEACIgBAEIAPgPIgDAFIADgBIADAAIgFAFIgCABQgJAIAAACIgCAFIAKgKIAIgFQgFAGAAADQAAAAAAAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAACgFAHIAMgKQgEAGADAAIAIgCQAFgBAAABQAAADgIAKIARgEIASgGQAAADADADIAAAAIAdghIAPgNIAagQIAggMIADgBQAOgDAMgBIAcABIAaAFIAVAIIACABQAIADAKAHIAZATIABACIABABIACABIALANIAPAVIABACIAIANIAIAKQgDgBgCADIAJARIgDgBIACARQABAFACAFQADAEAFADIADACIACABIABABIAIACQgGACgDAFQgCAFgHABIgHAJIgDAJQAAAIADAIIAFAMIACACIABACIAAAAIAAABIABAAQAHACgHAAIABABIAAABIAAABIACAGIACAIIgJABQgHAAABACIAUABIgIAFQgDACAAACIAAADIABACIACAFIABAFIgBADIgBACIgFAFIgMADIAWAIQABASgDATIgCAOIgBADIgBAFIgBACIAAABIgCAGIAAACIgEAOIgNAHIgDACIgCABIgBABIgiAPIgHAQIgFAIIgCAEIgDAEIgCAEIADADIAUAMIgQAJIAAAhQgJAAgDADQAAAIAGALIAJAQIAOgNQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABIABAEIgCAAQgaAegLAYQgHASACAOQABAIAHAIQAFAHgCABIgFgEQAHAjgJAsIgIAoQgDAYABAYIAagUQADAHAAAiQABAigDAoQgHBmgNALQgHAQgEAVIgUBYIg5AmIh3BgQgNAJgPAJQgjATgaAFIhJAeIhJAeQggAOgsAOQgvAPgiAHQgtAKgqADIgvACIgDAAgAgbHyQAEACAFABIACABIACAAIAEgBIAEgCIABgCIACgBIAFgIIgDgFQABgBAAgSIgCggQADgBABgJIAAgCIABgBIAAgBQACAAAFACIgBALIADALIAIgLIACgTQgBAQAHANQACAFAFAGQAEAFAGACIAEgBIABgBIACgBIAFgFIAIgKIADgFIADgDQAEgCAIADIASAVQAGABgBgQQgCgOAGAFQAEABACgBQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgBgFQABgDAGAAIAAgBIACABIAAAAQAHAEAFgFIADgEQADgCACgBIAHgNQgGgOAJADIAIAEIADACIADAAIgGgTQATAHAWgEQAKgBALgEIAUgJQAGAGAGgDQAEgEAEgIIgIgEIAegIIAKgEIAJgEIAIgFIAfgYIgCgOQACAGAIAFQAHAEAHAAIAFgEIAQgSIgMAVIAAABIgjAeIAKANIACAAIABgDQACgQAEgEIADABIAAACIABgCIgBAAIAAgDIgDACIgBAAIAMgLIgHAMIAEACIABAEIABgCIgCgCIgBgCIAFAAIASghIACgDIgCARIAVgPQAEgEgOgJQgMgIAWgSIASgIQgLgEANgRIAYgdIg3AQIAKgfQAFgSgEgLIAFABQAEABAFgEIgHgLIAJgGQgGgHgPgCIgbgFIAFABQgJgCADgLQACgHAKgPIAPgZQAHgNgCgFQgDADgFABQgFABAIgGQgDgBgEAEIgHAGQABgFAHgGQAKgJAHgMQgOgFAHgQQALgVACgJIAJgCQAEgBAAAIIATgTQAAgCgLADQgJADAGgJQADgEAOgDQAKgCAEgPQAEgHgCgTQgCgPAJgHQABgEAKgMIAMgNIAAgCIgRgbIgDgFIgDgDIgCgBIgBAAIgFAAIgCACIgFAHQAAABgBABQgBAAAAABQgBAAAAAAQAAABAAgBIACgFIgDACIgBAAIAAABIgFABIgHAAIgDgBIAAAAIgCgBIgEgCIgKgHIgCgBIAAAAIgDgBIgHAAIgEAZQgDADgKgBIgKAAIgQgEIgEgCIgIgFIgCgDIgCgDIAAgHQgBgEgDgGIgGgGIgHgDIgIgCQgJgCgFgEQgGgGACgLIgBgEIgBgCIgEgIIgGgIIgNgJIgpgRIgFgDIgJgIIABgBIADgPQgBgIgJAGIADgEIgFAAIACgBIgEgFQgDgDgDgBQgEgBgGACIgDAAIgCABIgBABIgIADQAFgFgBgFQgBgFADgGQABgVgWgLIgdgPIgJgGIAGgHQAEgEgCgBIgPANQAFgJgDgEQgBgCgHgDIgEgCIgDgEQAAgFAHgMIgTAMIgNgLIgDAEQgSAcgLgJQgPACgHASIgKAYQgCgCgJgBQgOgEgDAOQgCACgBAUQgDASgLgBQgLgCgOALIgYASIAHAFQgaANhEAzQg5ArglAJQgBgNAAAPQABATgEgTIgVALIABAEQADgHAJADQgBAFABABIgFAAQgFABgCgDQgDAIgCAXQgEASgUgKQgIgLgFALQgDAIgDgLQgPAkgxAUQgcALgRASIgBADQgBAFgEAEIARAFQgFALAFANIANAXIAIAOIAAABIAAAAIABABIAAAAIACAHQABAHgCAHIgBADIAAABIAAABIgGAIIAEAHIACAEIABABIABACIA7BVIAHAQIAGARIACAJIAAAJQAAAEgCAFIgCAEIgEAEQAAAFACAHIACAFIADAFIAGAHIAXAPIAGAFIADAEIADAEQgLAFgBAEQgCADAEAEIAGAHIABAEIAAACQAGgEADABQACABACAFIAEAGQADACAGgEIgNAKIAAABIAAAAIABABIABACIASAcIgFABQgGAFAEABQAHADgBACIAUgJIgRAOQAAABAAAAQAAABAAABQAAAAABAAQAAAAABAAIAFgBIgFAFQAAAEACADIADABIADAAQAJgBAKgKIgEAIQgDAFACABQAEAAADgFIAEgJIgBAHIAAAGQAAAEABACIADABIAEABIgJAEQAEgBABADIABADIAAADQABAEADAAQADABAHgFIARgXIgOAFQAQgIALgHQAAADgCACIgFAIQAFgCABACIABABIAAADIABACQACgBAFgGIgIASIAOgNIgLASQgGAMAEAIIADAEIAEAEIAGgVIgBATIABADIABACQADAAAFgHIgGAQQADADACgDIAHgOQABAAAAAAQABAAAAAAQAAABAAAAQABABAAACIgHAMIAEABIAEAAIAEgBIAagIIADAAIADABIAGACIAGAHIAAAHIACACIACAAIAAABIgCgBIABABIABAAIAJABIADgBIABAAIAGgCIgCgDIAPgEIABAMIALgGgAFjFoIAGgKIgFgBIAAgCIgBAAIgBABIACABgAFuFTIABAGIAJgBIgFgNgAnnAOIgJAFIgDAHQAEADACAAIAGgPIAAAAgAIEi5IgCABIgEAFIgEAGIgCADIgBACIABAEIABACIACAEIAHgHIAHgKIgBAAQAAgIgCgDgAI1j4IACACIALgHIgphYQgNgCgGABIAAABIAGAAIgGAAIACAMIABAEIAAABIACAEQACAFAAgJIAAAMIACABQAAAAABABQAAAAAAAAQAAAAABgBQAAAAAAAAIAAABQABAAAAAAQAAAAAAAAQAAgBAAgBQAAgBgBgCIAAgFIACAJIAEAMIAAgGIAEAKQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAIgCgBIACAGQADAHAEAHIAHALIAKALIADgDIABAAQACAAgDAHgAIWlWIADABIgBgDIgDgBIgCABQgBAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgBAAgAC3pqIAEAAIgEAAIAFAGIABAAIACgBIACgBIAAgEIgBgBIgBgBIgFgBIgBAAIAFACIgKgCgAFkFdgAF6EvIAQgQIgCAFQgIAKgLALgAGngtQADADgCAHIgCABQgDAAAEgLg");
	this.shape.setTransform(79.875,93.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AgmIuIgCAAQgFgBgEgDIAAgJIgMAFIgBgMIgOAEIACADIgHADIgBAAIgCAAIgJgBIgBAAIgCgBIgCgCIAAgHIgFgGIgGgDIgEAAIgDAAIgaAIIgDAAIgFAAIgEAAIAHgNQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAgBABIgGAOQgDADgDgDIAGgQQgFAGgCAAIgCgBIAAgEIABgTIgHAWIgDgEIgEgFQgEgHAGgMIALgTIgOANIAIgSQgFAHgCAAIgBgCIAAgCIgBgCQgBgCgFACIAFgHQACgDAAgDQgKAHgRAJIAOgGIgQAYQgIAEgDgBQgDAAgBgEIAAgDIgBgCQgBgDgDAAIAJgDIgFgBIgCgCQgCgCAAgDIABgGIAAgHIgEAJQgDAEgDAAQgDgBAEgEIADgIQgKAKgJABIgDAAIgDgCQgCgCAAgFIAGgEIgGABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIARgNIgTAJQAAgDgHgCQgEgCAGgFIAFgBIgRgbIgBgCIgBgBIAAgBIgBAAIANgLQgGAEgDgCIgDgGQgDgFgCgBQgDgBgGAEIAAgBIgBgFIgGgHQgEgEACgDQACgEAKgFIgDgEIgCgDIgHgGIgXgPIgGgHIgCgEIgDgFQgCgHAAgFIAEgFIACgEQACgFAAgEIAAgIIgBgJIgHgRIgHgRIg7hUIgBgCIgBgCIgCgDIgDgHIAFgIIAAgBIABgBIABgEQABgGgBgIIgBgGIgBgBIAAAAIgBgBIAAAAIgHgPIgOgXQgEgNAEgLIgRgFQAEgEACgFIABgEQARgSAcgKQAwgUAPgkQADALAEgIQAFgLAHALQAUAKAFgRQABgYADgHQACADAFgBIAGAAQgCgCACgEQgJgDgEAHIgBgFIAWgLQADATAAgSQgBgPABAMQAmgJA4gqQBEg0AbgMIgIgFIAYgSQAOgMAMACQALACADgTQACgUABgCQADgNANADQAJACACACIAKgYQAHgTAPgCQALAJASgcIADgDIANALIATgMQgHAMABAFIACADIAEADQAHADABABQADAEgFAJIAPgNQACABgEAFIgGAHIAJAGIAdAOQAWAMgBAVQgDAFABAFQABAFgEAGIAHgEIACgBIABAAIADgBQAGgBAEABQADAAADADIAEAFIgCACIAGAAIgEAEQAJgGABAHIgDAPIgBACIAJAIIAGADIAoAQIANAJIAGAIIAFAIIAAACIABAEQgBAMAFAGQAFADAJACIAIACIAIAEIAFAFQAEAGAAAFIAAAGIACAEIACACIAIAFIAFACIAPAEIAKABQAKABAEgEIADgYIAHAAIADABIAAAAIADABIAKAGIADADIACAAIAAABIADAAIAHAAIAFgBIAAAAIABAAIAEgCIgDAFQAAAAAAAAQABAAAAgBQABAAAAgBQABgBABgBIAEgHIACgBIAFgBIABABIACABIADADIADAEIARAcIAAABIgLANQgLAMgBAFQgIAGABAQQACASgEAHQgEAQgJACQgOADgEADQgFAJAIgDQALgEAAADIgTATQABgIgFAAIgIADQABgHgDgEQgFANAHgCQgCAJgMAUQgGARANAFQgHAMgKAJQgHAHgBAEIAHgGQAEgDADAAQgIAGAFAAQAGgBACgDQADAFgIANIgPAYQgJAPgCAIQgEAKAJACIgFAAIAbAEQAPACAGAHIgJAGIAHALQgFAEgEAAIgFgBQAEAKgFATIgKAfIA3gQIgYAdQgNARAMADIgTAJQgWASANAIQANAJgDADIgWAPIADgRIgDAEIADgFIgQAQIgGAJQALgKAIgKIgRAgIgGAAIABACIACACIgBACIgBgEIgDgBIAGgNIgLALIAAAAIADgBIAAACIACABIgBACIgBgDIgDgBQgEAEgCARIgBADIgCAAIgJgNIAigfIABAAIALgWIgQATIgEAEQgIAAgHgEQgIgFgCgHIACAOIgeAZIgJAEIgJAEIgJAEIgeAIIAHAEQgEAJgEADQgFAEgHgGIgUAIQgKAEgLACQgVAEgUgHIAHASIgEAAIgDgCIgIgDQgJgEAHAPIgIANQgCAAgCADIgEAEQgFAEgGgDIgBAAIgCgCIABACQgHAAgBACIABAFQAAABAAABQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgDABgEgBQgGgFACAOQABAQgFAAIgTgVQgHgEgEADIgEADIgDAEIgIAKIgEAFIgDABIgBABIgEACQgFgDgEgEQgFgGgDgGQgGgNAAgQIgBATIgIALIgCgKIAAgLQgFgDgCABIAAAAIgBABIAAADQgBAJgEAAIADAgQAAASgCABIAEAGIgGAHIgCACIgBABIgEACIgEABgAhfIjIgBAAIADAAgAFOGVIAFABIgGALgAFMGVIABgBIABgBIAAACgAFZGMIAEgJIAFAOIgJABgAoJBSIAEgHIAIgEIABAAIgHAOIAAABQgCAAgEgEgAHjhqIAAgCIgCgDIACgDIACgCIADgGIAEgFIACgCIACgBQACAEAAAIIACgBIgIAKIgHAIgAICjuIADACIgBAEIgCgGgAIBj4IAAAFIgEgMIgCgJIABAGQAAABAAABQAAABAAABQAAABAAAAQAAAAAAAAIAAgCQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgCIAAgMQAAAJgCgFIgCgEQANAAAJgEIgEAigACpotIAAAAIgCABg");
	this.shape_1.setTransform(82.05,87.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:1582.9,scaleX:0.4582,scaleY:0.4582,rotation:14.9988,x:83.1}}]}).to({state:[{t:this.instance,p:{regX:1582.8,scaleX:0.4832,scaleY:0.4832,rotation:14.9973,x:83.2}}]},1).to({state:[{t:this.instance,p:{regX:1582.9,scaleX:0.4582,scaleY:0.4582,rotation:14.9988,x:83.1}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:1582.9,scaleX:0.4582,scaleY:0.4582,rotation:14.9988,x:83.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.7,175.1,183);


(lib.mlh1malecolorectal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.colonwithparts_0001_wholegutpsd_1("synched",0);
	this.instance.setTransform(107.7,94.4,0.0993,0.0923,0,0,0,2031.2,1535.8);

	this.instance_1 = new lib.colonwithparts_0000_colonpsd("synched",0);
	this.instance_1.setTransform(107.7,100.25,0.1141,0.1104,0,0,0,2030.2,1535.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-12.4,247.10000000000002,225.3);


(lib.mlh1male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.malebodypsd("synched",0);
	this.instance.setTransform(216.65,507.35,0.4412,0.4125,0,0,0,1702.1,1401);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(21,1,1).p("EgYhg3KQgeCIASC2QAjFuDuDuQDuDuguDhQgWBxhGBBQjYAUjhAmQnDBLgyBXQhGB8gCAEQgtBZgNBUQgkDrDOD1QCGCfATAfQAfA0gOA9QgKAsgvCjQgwDFgZESQguH7hWDWQgVA0gjBNQgZBFgHBmQgBARgYEsQgUD0gHC3QgXI8BLFvQBSGMA9DCQAsCNA2BaQAlA+KugPQFXgHFQgUIH0AUIWNAUQgtkjhQlIQigqPivi8QhihoAbg5QAUgtBxggQBCgTCignQCNgqBFg/QBIhBAfhGQAIgSAghzQAahcAxhSQBEh1CHiOQB6iAB8haQBBgvBcg/QBBg2AkhTQApheAkjKQAkjLgEhWQgDhOgpgrQhAgygtgpQhVhMhKh7QhOiCgUhTQgHgbgDhTQgCg3gig7QguhQiDiQQh9iKgshTQgTgkgWhUQgThGg1hPQhMh0i3jDQi3jFh3geQgygNgzAMQghAHg7AcQhDAegjALQg/AUhCgBQirgCj0iSQnPkThBigQgUgyAWghQALgQAPgGQBfhzBViXQCqksgyivQgyiwqpAeQlUAPlLAyg");
	this.shape.setTransform(207.0762,355.056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgCTA38In0gUQlQAUlXAHQquAPglg+Qg2hagsiNQg9jChSmMQhLlvAXo8QAHi3AUj0IAZk9QAHhmAZhFQAjhNAVg0QBWjWAun7QAZkSAwjFQAvijAKgsQAOg9gfg0QgTgfiGifQjOj1AkjrQANhUAthZIBIiAQAyhXHDhLQDhgmDYgUQBGhBAWhxQAujhjujuQjujugjluQgSi2AeiIQFLgyFUgPQKpgeAyCwQAyCviqEsQhVCXhfBzQgPAGgLAQQgWAhAUAyQBBCgHPETQD0CSCrACQBCABA/gUQAjgLBDgeQA7gcAhgHQAzgMAyANQB3AeC3DFQC3DDBMB0QA1BPATBGQAWBUATAkQAsBTB9CKQCDCQAuBQQAiA7ACA3QADBTAHAbQAUBTBOCCQBKB7BVBMQAtApBAAyQApArADBOQAEBWgkDLQgkDKgpBeQgkBThBA2QhcA/hBAvQh8Bah6CAQiHCOhEB1QgxBSgaBcQggBzgIASQgfBGhIBBQhFA/iNAqQiiAnhCATQhxAggUAtQgbA5BiBoQCvC8CgKPQBQFIAtEjg");
	this.shape_1.setTransform(207.0762,355.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:1702.1,scaleX:0.4412,scaleY:0.4125,y:507.35}}]}).to({state:[{t:this.instance,p:{regX:1702,scaleX:0.5143,scaleY:0.4809,y:507.4}}]},1).to({state:[{t:this.instance,p:{regX:1702,scaleX:0.5143,scaleY:0.4809,y:507.4}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:1702,scaleX:0.5143,scaleY:0.4809,y:507.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-84,507.5,1182.9);


(lib.mlh1femaleorganback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TEXT
	this.text = new cjs.Text("Click the body to go back", "bold 25px 'Arial Black'", "#0A630E");
	this.text.lineHeight = 37;
	this.text.lineWidth = 225;
	this.text.parent = this;
	this.text.setTransform(2,153.95);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance = new lib.femalebody_1("synched",0);
	this.instance.setTransform(303.3,460.75,0.391,0.3475,0,0,0,1522.8,1521);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-25.95,-23.7,0.4997,0.4997);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:1521,scaleX:0.391,scaleY:0.3475}}]}).to({state:[{t:this.instance,p:{regY:1520.9,scaleX:0.4224,scaleY:0.3754}}]},1).to({state:[{t:this.instance,p:{regY:1520.9,scaleX:0.4224,scaleY:0.3754}}]},1).to({state:[{t:this.instance,p:{regY:1520.9,scaleX:0.4224,scaleY:0.3754}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-36.9,675.1,995.6);


(lib.mlh1female = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.femalebody_1("synched",0);
	this.instance.setTransform(291.05,437.6,0.3724,0.33,0,0,0,1528.5,1521);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#026401").s().p("EAMnA4VQAFgDgDgBQhNADhOgCQg1gBgwAGIgagIIh/AIQAmgHgBgBQgEgFh5gCIiqAAIArAIIhzgGQhBgChQAFIgHgGQhLgBgZAGQgVADg+gBIAwgGInpAJQkHAFi6gEIAEgCIhOgBIgIgiQgNg2gGgkIgrjmIACAQIgijpIAEgMQgLhegGhSIADAFQgNkKADjKIgDA0IAAgQIgNhyIAHh/IARh6IgDAuQAAACAAABQAAABAAAAQABABAAgBQAAAAABgBIADgNQAHg3AJg0IAaiWIAAACIgCAOIgBARQAAAIAIgTIAQgxIADgEIAohzQAVg9AWgzIAmhUIADgEQARgiAVglIAkg8QATgdARgXIAdgnIAKgMIAigmIACgDIBFhHQA3g1AmgnQAbgfAVgeIAbgpIAfg1IACgCIASgeIABgDIAIgQIABAAIAAgBIACgHIAAgBIACgDIAAAAIABgBIAEgPIABgFQACgKAAgGIgBgMIAAgCIAAAAIgBgBIAAgBIgCgEIAAgBIAAAAIAAgBIgBAAIgBgBIgFgGIgBgBIAAgCIgBgCIgBAAIgBgBIgJgLQgHgIgJgIIgDgBIgZgTIABABIgSgNIAAgBIighvIgBgBIgCgCIgEgDIgfgaIgBgCIgCgCIgkgjQgbgbgfgmIgHgJIgCgCIgBgDIgNgRIAAgBIgbgoIgGgHIgGgIIgohPIAAgCIgBgCIgJgXIAAAAIAAgBIgEgJIgBgCIgBgDIgTgqIgMgUIgPgLIgIgFQgCgBgEgBIgEgEIgBgBIgBAAIgDgCQgEgCgEAAIgEgBIgGgBIgMACQgOACgSAKIgSAMIgSAOQgTAPgSATQgQARgVAYQghAngmA3QgfAvgkA7IhBByQg9Bxg+B/QgIANgLAWIhhDSIAZguIhzDrIgBACIAAAAIgBACIgJAPIgBADIgBABIiNEZQgvBlg0BzQg6CChRC5IgdBLQAKgbgUAlQgXArgYA1QgqBfhYDQIgMAdIi5gTIAFgCQjhgXg5gIIAIAAIEbAbIgJAEICyASIAMgbQBRjABZjKICUlPIgGgDIhiDSIgYBKQhGCXgsBkIhUDBIgJAWIgXgDIilgQQjbgYgoADIgbgDIATADIgCAAIjOgcIAkguIAjgvIAAgBIABAAIAkgyIAmg3Ig5BYICJjFIAOgaIALgVIALgXIDPllQAEgLAHgOICAkIIBojrIhtDXICtnBIA2i7IgBAKIAEgKIA+jeQAOhCgDgJIgEgEQgDgDABgMIACAAIACgNQACgLAEgQICjpwQAkiEAQhCQgMApgFAKQgCAHAEgPIAPgzQgBAAgNAqIgUBGQAPg8AVhHIBHjxIAUhWQAVhMAXhEIB4lCIgCAGIgBABIAAgCIADgIIAdg7IgdA+IAVglQAFgKgKAWIgUAyIAmhSIBNiAQAAgBgBAAQAAAAAAAAQgBABAAAAQgBABgBACIgCACIgBABIgBADIgaAjQgDAFACgFIAZgoIAAgBIAAAAIABAAIAKgPIABgDIAsg3IBqhyQAbgcAqgnQA1gwA9gsQA0gnBBgnIAKgGIABgBIAAAAIABgBIAxgaQAagOAhgPQA/gcA2gPQAhgLAtgJIBSgQIBigIQAnAAAhABIBIADIASgBIAXgEIADAAIAXgGIAngQIARgMIABgCIAJgHIACgBIAXgcQAEgFAGgJIAHgQIAHgQIABgCIAAgCIADgGIABgCIABgFQAEgOAEgSQAEgcABgjIABgeIgBgDIgBgYQgBgVgDgbIgMg8IgBgDIgBgCIAAgBIAFgCIgOg5IgBgBIAAgBIgBgDIgahXIAAgBIgBgBIgtg2IAFAGIgZgfQgHgGABABIgHgFQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIh5izIgKgLQAGALgCgCIgTgaIANAPIg3hcQgRgcAVAhIBABkIg/hrIhTiWQgQgdgRgnIgthqIgpiLIgNheIABg1IAEgYIAAgEIADgOIAJgfIAHgTIADgGIgGAPIgBADIAAABIgBACIgDAPQgIAeAAAZQgCAiADAkQAFAnALApQAIAkARAvIAgBSQAdBAAqBMIgQgiQAAgCAFAIIBGCBIg7hkIAjBGQgDgHADAFIBOB1QAJALgUgjIBeCOQAfAqAWAZIB5CPIAaBeIACAFIAAABIABACIAAABIAAABIABADQAHAYAFAYQAMA2AFAtIAEBmIgBAbIgDAbQgEAbgIAbIgKAUIgCAEIgOAbQgGAMgOATQgKAOgNAMQgOANgMAIQgPAKgNAIQgZAMggAHQgZAGgcADIgdABIgDAAIgGAAIgCAAIgxAAQgtACgjADIBEABIh3AGIiQAdQgdAIgvAQQgnAPgeAOIhaAsIAAABIgBAAIAAAAIgfARIgzAgIhZBBQgiAaglAjQg7A3gpAzIgFAFIhUB0IgIANIgBACIgmBCIAQggIgfA7IgBACIgVAwQgbA7gSAxIgnBrIhCDOIgdBlIhUExIjUNUIBGj0IhbFxIiPHzQgYBHgrBwIg3CFIgBADIgBADIiDEbIg8B3IgtBUIiEDnQgsBOgmA6QgkA6gnA4IGhAuIEFpRIB6kSIDBmUIABgBIABgCIAGgJIABgBIAAgBQAkAUgNgIIgWgPIAAAAIABgCIABgBIAAgBIABgBICslvIBHiUIB+jsIABgCIACgCIAZgrQAqhGAthAIAZghIBPhdIAoglIAPgMQAOgMASgLQATgLAUgIQAXgKAVgEIAZgCQANAAANACQATADAHADQALADANAHQAVAKATARQAQAPANARIAXAhIAjBHIABACIAIAUIABADIAIASIABABIAAABIAJASIABABIAIAQIABADIACAEIAVAjIABACIAYAjIACACIA1BBIAQAQIABABIACABIACAEIAMALIACABIAPAOICsB5IAcAUIASAOIABAAIAEADIABAAIABABIABACIAAABIAEACIAVATIAIAKQAKANADAFIAOAYIABADIABACIACAGIABACIACAGIABABIAAABIABACIAAACIABACIABAFIAAACIAAACIABADIABAGIACAiIgBACIAAAGIgBAFIAAADIgEAYIgBAGIgBACIAAABIgFAQIgBABIgHARIAAACIgDAHQgHAOgKAUIgFAHIg0BPIgpA1QgUAbgWAZIjKDjIhPBxQgiA3gZA1QgzBogmB+Ig6D7IgVCqIgNC9IAAAHQgCA4AABHIANE7IASC+IARB+IAUB9QAKA9AMBAIAQBMQPFgKMfgGIgUACIGnAAQDiAACYgBQAZh2ANhFQgBAMAEgQIA0j2IgDATIAkijQinoOhulSIgBgDIgBgEQg0j9g6kNQgLg/g7ktQg9k6gNhMIgaiIIABgLQB+q0CJsSIAjjDIBIC5QD3J7GsRCIKxbeQAIAWALAjQAQAwAsBxIABABQCQixCwjdIiPrFQhTmfgvkPIgoipMgRqgllIpfizIqyjUIAZlxIABgDIAAgCIA8lmICBtCIrMADIp0gfIitgfIghgGILUgiIgUACQCvADEkgCQE6gDCGACIAtABIgVB7IAAADQgGADguE+IgjDtQgSB0gIAdQgWB7gSCFIgdDXIgGBsQAAABgFAsQgHA9gEBLIArAMQAeAJCFAhQCLAkBcAfQBaAeDAA3IE/BfIgigOIEPBSIAJATIHmQOQEhJoCaFXIgQgdIAdA2QAyBfgrhOIBzD4IAGAKIBJCNIABAEIACAIQAyDPATCIQgEAGAZBxIAMA3QADAPgJghQA+EfA8EtQAjCwBBFSIAEAWIgOASQjeETiwDiIg1BFIhZjZIAOAiIhBitIAOA7QgRg0hJi1Qg9iXAGAEIAKAYQAHAGgmhlIhBiqQAAALAMAiIg4iIQg7iih+lAQh1ksgohyIgqhcQg2iUismsQiZmAg8ivIjbomIhNHLIhNGyQguEAgYBxIAFAhQAtD1A7EUQBHFJAaCEQgOggAeCRQAoDBAFAnQACgFAHAbIAoCBQAcBaAMAWIgFAJICnIQIgPgnQgDgEAPAwIAhBjIADANIgXCNIAAgiQgKAigEAaIgIAtQACgLgCgDQgXBegQBWQgRBYADAKQgGAZgGAQQgFANgGAfQgLAyAFgMIAOgtIgaBkIgKArIgqgBQhLgCiNADIBTgEQgpABhzgBQhhgBhhAFIgTALIA9gCIioAJQghgBADgBgA0TckIAAABIAAgBgEArLAIiQAUAngCgGIAVAxQATAqgBAAQgeg+gbg+gArV80IAAgBIA1ABIADAAgArZ81IAEAAIAAAAgAmL/qQAAgBAAAAQABgBAAAAQAAAAAAAAQAAABABAAIgBADQgCAHgCAAgEgI0gn6IAFAGIACAEg");
	this.shape.setTransform(287.45,358.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EgSsA1+QgNhAgKg9IgUh9IgQh+IgTi+IgMk7QAAhHACg4IAAgHIAMi9IAWiqIA6j7QAmh+AzhoQAZg1Aig3IBPhxIDKjjQAWgZAUgbIApg1IA0hPIAEgHQALgUAGgOIAEgHIAAgCIAHgRIAAgBIAFgQIABgBIAAgCIACgGIAEgYIAAgDIABgFIAAgGIABgCIgCgiIgBgGIgBgDIAAgCIAAgCIgCgFIAAgCIgBgCIAAgCIAAgBIgBgBIgCgGIgBgCIgCgGIgBgCIgBgDIgOgYQgDgFgKgNIgJgKIgUgTIgEgCIAAgBIgCgCIgBgBIgBAAIgDgDIgBAAIgSgOIgcgUIith5IgOgOIgCgBIgMgLIgDgEIgBgBIgBgBIgQgQIg2hBIgBgCIgYgjIgBgCIgVgjIgCgEIgCgDIgIgQIAAgBIgJgSIAAgBIgBgBIgIgSIgBgDIgJgUIAAgCIgjhHIgXghQgNgRgQgPQgTgRgVgKQgNgHgLgDQgIgDgSgDQgNgCgNAAIgZACQgVAEgYAKQgUAIgSALQgSALgOAMIgPAMIgoAlIhQBdIgYAhQguBAgpBGIgaArIgBACIgBACIh+DsIhHCUIisFvIgBABIAAABIgBABIgBACIAAAAIAWAPQANAIglgUIAAABIgBABIgFAJIgBACIgBABIjBGUIh7ESIkEJRImhguQAmg4Alg6QAlg6AthOICEjnIAthUIA8h3ICDkbIABgDIABgDIA3iFQArhwAYhHICPnzIBalxIhGD0IDVtUIBTkxIAehlIBCjOIAnhrQASgxAag7IAWgwIABgCIAfg7IgQAgIAlhCIACgCIAHgNIBVh0IAFgFQApgzA7g3QAlgjAhgaIBZhBIA0ggIAegRIABAAIAAAAIAAgBIBagsQAfgOAngPQAvgQAdgIICPgdIB4gGIhFgBQAkgDAsgCIAyAAIACAAIAGAAIADAAIAdgBQAcgDAZgGQAggHAYgMQAOgIAOgKQANgIAOgNQANgMAKgOQANgTAHgMIAOgbIACgEIAKgUQAIgbAEgbIADgbIABgbIgEhmQgGgtgLg2QgFgYgHgYIgBgDIAAgBIAAgBIgBgCIAAgBIgCgFIgaheIh6iPQgVgZgfgqIheiOQAUAjgKgLIhNh1QgDgFADAHIgjhGIA7BkIhHiBQgEgIAAACIAQAiQgqhMgdhAIgghSQgRgvgJgkQgKgpgFgnQgDgkABgiQABgZAHgeIAEgPIABgCIAAgBIABgDIAFgPIgDAGIgHATIgJAfIgDAOIAAAEIgDAYIgBA1IANBeIApCLIAtBqQARAnAQAdIBSCWIBABrIhAhkQgWghASAcIA3BcIgNgPIATAaQACACgHgLIALALIB5CzQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABIAGAFQAAgBAGAGIAaAfIgGgGIAuA2IAAABIABABIAaBXIABADIAAABIABABIANA5IgEACQgGgdgIgeIgchbQigi5iMjlQkYnNBkjhIAhAAICtAfIJzAfILNgDIiBNCIg8FmIAAACIgBADIgaFxIKzDUIJeCzMARqAllIAoCpQAwEPBTGfICPLFQixDdiPCxIgBgBQgshxgRgwQgKgjgJgWIqw7eQmsxCj3p7IhIi5IgjDDQiJMSh+K0IgCALIAbCIQANBMA9E6QA7EtAKA/QA6ENA1D9IABAEIABADQBuFSCnIOIgkCjIADgTIg0D2QgFAQACgMQgNBFgZB2QiYABjiAAImnAAIAUgCQsgAGvEAKIgQhMgAr48QIAAABIA4AAIgDAAIg1gBIAAAAIgEAAIAEAAgAmu/FIgDAJQACAAACgHIAAgDIAAgBIgBACgEgJQgnLIgCgEIgGgGgAnh/dQAPg2gChKQgCg/gQhIIACADIALA8QAEAbABAVIABAYIABADIgBAeQgBAjgFAcQgDASgFAOIgBAFIgBACIACgHg");
	this.shape_1.setTransform(290.9875,355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:1521,scaleX:0.3724,scaleY:0.33}}]}).to({state:[{t:this.instance,p:{regY:1520.9,scaleX:0.4186,scaleY:0.3709}}]},1).to({state:[{t:this.instance,p:{regY:1520.9,scaleX:0.4186,scaleY:0.3709}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:1520.9,scaleX:0.4186,scaleY:0.3709}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-54.1,654.7,983.6);


(lib.mlh1femcolon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// colon highlight
	this.instance = new lib.colon();
	this.instance.setTransform(-7,-13,0.0962,0.0962);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.colonwithparts_0001_wholegutpsd_1("synched",0);
	this.instance_1.setTransform(93.5,88.25,0.0863,0.0863,0,0,0,2029.9,1535.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(20,1,1).p("AsjrkIhJGTIBfH1IEmFKIBKj0ICyBiICeiHIB9gNICIg8IiyDoIAVB6IgfAxIAUFBIB+kEIGkirIEmnQIAVozIidkNImvENIoMAlImvj1g");
	this.shape.setTransform(91.9,90.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEIfIAfgxIgWh6ICzjoIiIA8Ih9ANIieCHIiyhiIhLD0IkllKIhfn0IBJmUICJg9IGvD0IIMgkIGvkOICdEOIgVIyIkmHPImkCsIh+EEg");
	this.shape_1.setTransform(91.9,90.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-13,208.3,199.5);


(lib.mlh1_fem_endometrial_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.mlh1femendometriumpmessage("synched",0);
	this.instance.setTransform(-214,272.1,0.0015,0.0033,0,0,0,0,136.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:328.1,regY:152.1,scaleX:0.1125,scaleY:0.114,x:-151.75,y:258.95},0).wait(1).to({scaleX:0.2234,scaleY:0.2248,x:-90,y:245.8},0).wait(1).to({scaleX:0.3344,scaleY:0.3355,x:-28.3,y:232.65},0).wait(1).to({scaleX:0.4453,scaleY:0.4463,x:33.45,y:219.45},0).wait(1).to({scaleX:0.5562,scaleY:0.557,x:95.15,y:206.25},0).wait(1).to({scaleX:0.6672,scaleY:0.6678,x:156.9,y:193.1},0).wait(1).to({scaleX:0.7781,scaleY:0.7785,x:218.6,y:179.9},0).wait(1).to({scaleX:0.8891,scaleY:0.8893,x:280.35,y:166.75},0).wait(1).to({scaleX:1,scaleY:1,x:342.05,y:153.6},0).wait(1).to({scaleX:0.9002,scaleY:0.9003,x:286.3,y:167.65},0).wait(1).to({scaleX:0.8003,scaleY:0.8007,x:230.5,y:181.7},0).wait(1).to({scaleX:0.7005,scaleY:0.701,x:174.65,y:195.7},0).wait(1).to({scaleX:0.6006,scaleY:0.6013,x:118.9,y:209.75},0).wait(1).to({scaleX:0.5008,scaleY:0.5016,x:63.1,y:223.8},0).wait(1).to({scaleX:0.4009,scaleY:0.402,x:7.3,y:237.85},0).wait(1).to({scaleX:0.3011,scaleY:0.3023,x:-48.45,y:251.9},0).wait(1).to({scaleX:0.2012,scaleY:0.2026,x:-104.3,y:265.9},0).wait(1).to({scaleX:0.1014,scaleY:0.103,x:-160.1,y:279.95},0).wait(1).to({scaleX:0.0015,scaleY:0.0033,x:-215.9,y:294},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.4,-8.5,897.5,324.1);


(lib.mlh1_fem_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.description_navigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(176.3,-254.35,0.0172,0.0166);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.description_navigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:34.6,regY:29.5,scaleX:0.1401,scaleY:0.1396,x:181.25,y:-249.95},0).wait(1).to({scaleX:0.2629,scaleY:0.2625,x:185.65,y:-246.05},0).wait(1).to({scaleX:0.3858,scaleY:0.3854,x:190,y:-242.2},0).wait(1).to({scaleX:0.5086,scaleY:0.5083,x:194.4,y:-238.3},0).wait(1).to({scaleX:0.6315,scaleY:0.6312,x:198.75,y:-234.45},0).wait(1).to({scaleX:0.7543,scaleY:0.7542,x:203.15,y:-230.55},0).wait(1).to({scaleX:0.8772,scaleY:0.8771,x:207.5,y:-226.7},0).wait(1).to({scaleX:1,scaleY:1,x:211.9,y:-222.8},0).wait(1).to({scaleX:0.8596,scaleY:0.8595,x:207.05,y:-226.95},0).wait(1).to({scaleX:0.7192,scaleY:0.719,x:202.2,y:-231.1},0).wait(1).to({scaleX:0.5788,scaleY:0.5786,x:197.35,y:-235.25},0).wait(1).to({scaleX:0.4384,scaleY:0.4381,x:192.45,y:-239.4},0).wait(1).to({scaleX:0.298,scaleY:0.2976,x:187.6,y:-243.5},0).wait(1).to({scaleX:0.1576,scaleY:0.1571,x:182.75,y:-247.65},0).wait(1).to({scaleX:0.0172,scaleY:0.0166,x:177.9,y:-251.8},0).wait(1));

	// box
	this.instance = new lib.msh6_female_descriptionbox("synched",0);
	this.instance.setTransform(-22,22.05,0.0019,0.0017);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:267,regY:294,scaleX:0.1445,scaleY:0.1443,x:-21.2,y:23.25},0).wait(1).to({scaleX:0.2871,scaleY:0.2869,x:-20.85,y:24},0).wait(1).to({scaleX:0.4296,scaleY:0.4295,x:-20.55,y:24.75},0).wait(1).to({scaleX:0.5722,scaleY:0.5722,x:-20.25,y:25.45},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:-19.95,y:26.2},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:-19.6,y:26.9},0).wait(1).to({scaleX:1,scaleY:1,x:-19.35,y:27.65},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:-19.9,y:26.9},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:-20.5,y:26.2},0).wait(1).to({scaleX:0.5722,scaleY:0.5722,x:-21.1,y:25.45},0).wait(1).to({scaleX:0.4296,scaleY:0.4295,x:-21.7,y:24.75},0).wait(1).to({scaleX:0.287,scaleY:0.2869,x:-22.3,y:24},0).wait(1).to({scaleX:0.1444,scaleY:0.1443,x:-22.9,y:23.25},0).wait(1).to({scaleX:0.0018,scaleY:0.0017,x:-23.5,y:22.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.3,-275.4,542.3,597.0999999999999);


(lib.homepagecaption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front_page_caption
	this.movieClip_3 = new lib.caption();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(389.9,180.8,1,1,0,0,0,389.9,180.8);

	this.instance = new lib.bluedark();
	this.instance.setTransform(-16,-2,0.2196,0.1913);

	this.instance_1 = new lib._double();
	this.instance_1.setTransform(-32,-30,0.2242,0.2102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_3}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},6).to({state:[]},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-30,811.9,443.2);


(lib.epcam_male_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.description_navigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(459.7,12.1,0.0172,0.0166);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.description_navigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:34.6,regY:29.5,scaleX:0.1401,scaleY:0.1396,x:464.55,y:16.2},0).wait(1).to({scaleX:0.2629,scaleY:0.2625,x:468.8,y:19.85},0).wait(1).to({scaleX:0.3858,scaleY:0.3854,x:473.05,y:23.45},0).wait(1).to({scaleX:0.5086,scaleY:0.5083,x:477.3,y:27.1},0).wait(1).to({scaleX:0.6315,scaleY:0.6312,x:481.55,y:30.7},0).wait(1).to({scaleX:0.7543,scaleY:0.7542,x:485.8,y:34.35},0).wait(1).to({scaleX:0.8772,scaleY:0.8771,x:490.05,y:37.95},0).wait(1).to({scaleX:1,scaleY:1,x:494.3,y:41.6},0).wait(1).to({scaleX:0.8596,scaleY:0.8595,x:489.45,y:37.45},0).wait(1).to({scaleX:0.7192,scaleY:0.719,x:484.6,y:33.3},0).wait(1).to({scaleX:0.5788,scaleY:0.5786,x:479.75,y:29.15},0).wait(1).to({scaleX:0.4384,scaleY:0.4381,x:474.85,y:25},0).wait(1).to({scaleX:0.298,scaleY:0.2976,x:470,y:20.9},0).wait(1).to({scaleX:0.1576,scaleY:0.1571,x:465.15,y:16.75},0).wait(1).to({scaleX:0.0172,scaleY:0.0166,x:460.3,y:12.6},0).wait(1));

	// Layer_1
	this.instance = new lib.epcam_male_dis("synched",0);
	this.instance.setTransform(266.4,362.6,0.0019,0.0013,0,0,0,214.8,301.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:267,regY:364.7,scaleX:0.1266,scaleY:0.1262,x:266.55,y:362.9},0).wait(1).to({scaleX:0.2514,scaleY:0.251,x:266.6,y:363.2},0).wait(1).to({scaleX:0.3762,scaleY:0.3758,x:266.7,y:363.4},0).wait(1).to({scaleX:0.5009,scaleY:0.5007,x:266.75,y:363.7},0).wait(1).to({scaleX:0.6257,scaleY:0.6255,x:266.8,y:363.95},0).wait(1).to({scaleX:0.7505,scaleY:0.7503,x:266.85,y:364.2},0).wait(1).to({scaleX:0.8752,scaleY:0.8752,x:266.95,y:364.45},0).wait(1).to({scaleX:1,scaleY:1,x:267,y:364.7},0).wait(1).to({scaleX:0.8574,scaleY:0.8573,x:264.15,y:360.9},0).wait(1).to({scaleX:0.7148,scaleY:0.7147,x:261.25,y:357.15},0).wait(1).to({scaleX:0.5722,scaleY:0.572,x:258.35,y:353.35},0).wait(1).to({scaleX:0.4296,scaleY:0.4293,x:255.45,y:349.55},0).wait(1).to({scaleX:0.287,scaleY:0.2867,x:252.55,y:345.8},0).wait(1).to({scaleX:0.1445,scaleY:0.144,x:249.65,y:342},0).wait(1).to({scaleX:0.0019,scaleY:0.0013,x:246.8,y:338.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-11,554,754.5);


(lib.epcam_male_colorectal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.epcam_male_p("synched",0);
	this.instance.setTransform(751.1,134.25,0.0018,0.0026,0,0,0,282.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:277.4,regY:188.4,scaleX:0.1127,scaleY:0.1134,x:699.75,y:137.75},0).wait(1).to({scaleX:0.2236,scaleY:0.2242,x:648.45,y:140.85},0).wait(1).to({scaleX:0.3345,scaleY:0.3351,x:597.15,y:143.9},0).wait(1).to({scaleX:0.4454,scaleY:0.4459,x:545.85,y:147},0).wait(1).to({scaleX:0.5563,scaleY:0.5567,x:494.55,y:150.1},0).wait(1).to({scaleX:0.6673,scaleY:0.6675,x:443.25,y:153.15},0).wait(1).to({scaleX:0.7782,scaleY:0.7784,x:391.9,y:156.25},0).wait(1).to({scaleX:0.8891,scaleY:0.8892,x:340.65,y:159.35},0).wait(1).to({scaleX:1,scaleY:1,x:289.35,y:162.4},0).wait(1).to({scaleX:0.9002,scaleY:0.9003,x:339.55,y:162.25},0).wait(1).to({scaleX:0.8004,scaleY:0.8005,x:389.75,y:162.05},0).wait(1).to({scaleX:0.7005,scaleY:0.7008,x:440,y:161.85},0).wait(1).to({scaleX:0.6007,scaleY:0.601,x:490.25,y:161.75},0).wait(1).to({scaleX:0.5009,scaleY:0.5013,x:540.45,y:161.55},0).wait(1).to({scaleX:0.4011,scaleY:0.4015,x:590.65,y:161.4},0).wait(1).to({scaleX:0.3012,scaleY:0.3018,x:640.9,y:161.2},0).wait(1).to({scaleX:0.2014,scaleY:0.2021,x:691.1,y:161.05},0).wait(1).to({scaleX:0.1016,scaleY:0.1023,x:741.35,y:160.85},0).wait(1).to({scaleX:0.0018,scaleY:0.0026,x:791.55,y:160.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-35.9,790.1,398.7);


(lib.epcam_female_description = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.description_navigation.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.description_navigation = new lib.description_navigation();
	this.description_navigation.name = "description_navigation";
	this.description_navigation.setTransform(459.7,12.1,0.0172,0.0166);
	new cjs.ButtonHelper(this.description_navigation, 0, 1, 2, false, new lib.description_navigation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.description_navigation).wait(1).to({regX:34.6,regY:29.5,scaleX:0.1401,scaleY:0.1396,x:464.55,y:16.2},0).wait(1).to({scaleX:0.2629,scaleY:0.2625,x:468.8,y:19.85},0).wait(1).to({scaleX:0.3858,scaleY:0.3854,x:473.05,y:23.45},0).wait(1).to({scaleX:0.5086,scaleY:0.5083,x:477.3,y:27.1},0).wait(1).to({scaleX:0.6315,scaleY:0.6312,x:481.55,y:30.7},0).wait(1).to({scaleX:0.7543,scaleY:0.7542,x:485.8,y:34.35},0).wait(1).to({scaleX:0.8772,scaleY:0.8771,x:490.05,y:37.95},0).wait(1).to({scaleX:1,scaleY:1,x:494.3,y:41.6},0).wait(1).to({scaleX:0.8596,scaleY:0.8595,x:489.45,y:37.45},0).wait(1).to({scaleX:0.7192,scaleY:0.719,x:484.6,y:33.3},0).wait(1).to({scaleX:0.5788,scaleY:0.5786,x:479.75,y:29.15},0).wait(1).to({scaleX:0.4384,scaleY:0.4381,x:474.85,y:25},0).wait(1).to({scaleX:0.298,scaleY:0.2976,x:470,y:20.9},0).wait(1).to({scaleX:0.1576,scaleY:0.1571,x:465.15,y:16.75},0).wait(1).to({scaleX:0.0172,scaleY:0.0166,x:460.3,y:12.6},0).wait(1));

	// Layer_1
	this.instance = new lib.epcam_fem_dis("synched",0);
	this.instance.setTransform(202.3,312.5,0.0018,0.0014,0,0,0,216.7,294.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:267,regY:357.6,scaleX:0.1266,scaleY:0.1262,x:210.45,y:318.2},0).wait(1).to({scaleX:0.2514,scaleY:0.251,x:218.5,y:323.8},0).wait(1).to({scaleX:0.3762,scaleY:0.3759,x:226.6,y:329.45},0).wait(1).to({scaleX:0.5009,scaleY:0.5007,x:234.65,y:335.05},0).wait(1).to({scaleX:0.6257,scaleY:0.6255,x:242.75,y:340.7},0).wait(1).to({scaleX:0.7505,scaleY:0.7503,x:250.8,y:346.3},0).wait(1).to({scaleX:0.8752,scaleY:0.8752,x:258.9,y:351.95},0).wait(1).to({scaleX:1,scaleY:1,x:267,y:357.6},0).wait(1).to({scaleX:0.8574,scaleY:0.8573,x:259.45,y:349.2},0).wait(1).to({scaleX:0.7148,scaleY:0.7147,x:252,y:340.75},0).wait(1).to({scaleX:0.5722,scaleY:0.572,x:244.5,y:332.35},0).wait(1).to({scaleX:0.4296,scaleY:0.4293,x:237,y:324},0).wait(1).to({scaleX:0.287,scaleY:0.2867,x:229.5,y:315.55},0).wait(1).to({scaleX:0.1444,scaleY:0.144,x:222,y:307.15},0).wait(1).to({scaleX:0.0018,scaleY:0.0014,x:214.55,y:298.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-11,554,740.5);


(lib.epcam_fem_endo_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.EPCAM_FEMALE_ENDO_POPUPBOX("synched",0);
	this.instance.setTransform(-254.35,324.5,0.0013,0.003,0,0,0,0,151.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:370.6,regY:167.2,scaleX:0.1123,scaleY:0.1138,x:-191.8,y:314.7},0).wait(1).to({scaleX:0.2233,scaleY:0.2245,x:-129.75,y:304.9},0).wait(1).to({scaleX:0.3342,scaleY:0.3353,x:-67.7,y:295.1},0).wait(1).to({scaleX:0.4452,scaleY:0.4461,x:-5.65,y:285.3},0).wait(1).to({scaleX:0.5562,scaleY:0.5569,x:56.4,y:275.5},0).wait(1).to({scaleX:0.6671,scaleY:0.6677,x:118.45,y:265.7},0).wait(1).to({scaleX:0.7781,scaleY:0.7784,x:180.5,y:255.9},0).wait(1).to({scaleX:0.889,scaleY:0.8892,x:242.55,y:246.1},0).wait(1).to({scaleX:1,scaleY:1,x:304.55,y:236.3},0).wait(1).to({scaleX:0.9001,scaleY:0.9003,x:249.35,y:247.05},0).wait(1).to({scaleX:0.8003,scaleY:0.8006,x:194.1,y:257.8},0).wait(1).to({scaleX:0.7004,scaleY:0.7009,x:138.85,y:268.6},0).wait(1).to({scaleX:0.6005,scaleY:0.6012,x:83.6,y:279.3},0).wait(1).to({scaleX:0.5007,scaleY:0.5015,x:28.4,y:290.1},0).wait(1).to({scaleX:0.4008,scaleY:0.4018,x:-26.85,y:300.9},0).wait(1).to({scaleX:0.3009,scaleY:0.3021,x:-82.1,y:311.6},0).wait(1).to({scaleX:0.2011,scaleY:0.2024,x:-137.35,y:322.4},0).wait(1).to({scaleX:0.1012,scaleY:0.1027,x:-192.55,y:333.15},0).wait(1).to({scaleX:0.0013,scaleY:0.003,x:-247.8,y:343.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.3,59.1,929.4000000000001,354.5);


(lib.epcam_fem_colorectal_p = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-284.4,200.3,0.0016,0.0029,0,0,0,0,153.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:316.5,regY:164.5,scaleX:0.1125,scaleY:0.1137,x:-221.4,y:192.15},0).wait(1).to({scaleX:0.2235,scaleY:0.2245,x:-158.95,y:184.05},0).wait(1).to({scaleX:0.3344,scaleY:0.3353,x:-96.4,y:175.9},0).wait(1).to({scaleX:0.4453,scaleY:0.4461,x:-33.95,y:167.8},0).wait(1).to({scaleX:0.5563,scaleY:0.5569,x:28.55,y:159.6},0).wait(1).to({scaleX:0.6672,scaleY:0.6676,x:91,y:151.5},0).wait(1).to({scaleX:0.7781,scaleY:0.7784,x:153.55,y:143.35},0).wait(1).to({scaleX:0.8891,scaleY:0.8892,x:216,y:135.25},0).wait(1).to({scaleX:1,scaleY:1,x:278.45,y:127.1},0).wait(1).to({scaleX:0.9002,scaleY:0.9003,x:223.45,y:139.8},0).wait(1).to({scaleX:0.8003,scaleY:0.8006,x:168.4,y:152.4},0).wait(1).to({scaleX:0.7005,scaleY:0.7009,x:113.4,y:165.05},0).wait(1).to({scaleX:0.6006,scaleY:0.6012,x:58.35,y:177.7},0).wait(1).to({scaleX:0.5008,scaleY:0.5015,x:3.3,y:190.35},0).wait(1).to({scaleX:0.4009,scaleY:0.4018,x:-51.7,y:203},0).wait(1).to({scaleX:0.3011,scaleY:0.3021,x:-106.75,y:215.65},0).wait(1).to({scaleX:0.2013,scaleY:0.2023,x:-161.75,y:228.3},0).wait(1).to({scaleX:0.1014,scaleY:0.1026,x:-216.8,y:240.95},0).wait(1).to({scaleX:0.0016,scaleY:0.0029,x:-271.85,y:253.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.4,-47.3,879.3,350.90000000000003);


(lib.popup_basecopy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.popup_base_messageboxcopy4("synched",0);
	this.instance.setTransform(-194,-12,0.0017,0.0039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:288.8,regY:179.3,scaleX:0.1055,scaleY:0.1002,x:-131.55,y:-9.6},0).wait(1).to({scaleX:0.2092,scaleY:0.1965,x:-69.65,y:-7.9},0).wait(1).to({scaleX:0.3129,scaleY:0.2927,x:-7.75,y:-6.15},0).wait(1).to({scaleX:0.4166,scaleY:0.389,x:54.2,y:-4.45},0).wait(1).to({scaleX:0.5204,scaleY:0.4853,x:116.15,y:-2.75},0).wait(1).to({scaleX:0.6241,scaleY:0.5816,x:178.05,y:-1.05},0).wait(1).to({scaleX:0.7278,scaleY:0.6778,x:239.9,y:0.7},0).wait(1).to({scaleX:0.8315,scaleY:0.7741,x:301.8,y:2.4},0).wait(1).to({scaleX:0.9353,scaleY:0.8704,x:363.75,y:4.05},0).wait(1).to({scaleX:0.8419,scaleY:0.7837,x:310.1,y:4.3},0).wait(1).to({scaleX:0.7486,scaleY:0.6971,x:256.45,y:4.6},0).wait(1).to({scaleX:0.6552,scaleY:0.6104,x:202.75,y:4.8},0).wait(1).to({scaleX:0.5619,scaleY:0.5238,x:149.2,y:5.05},0).wait(1).to({scaleX:0.4685,scaleY:0.4371,x:95.55,y:5.3},0).wait(1).to({scaleX:0.3752,scaleY:0.3505,x:41.9,y:5.55},0).wait(1).to({scaleX:0.2818,scaleY:0.2639,x:-11.7,y:5.8},0).wait(1).to({scaleX:0.1884,scaleY:0.1772,x:-65.4,y:6},0).wait(1).to({scaleX:0.0951,scaleY:0.0906,x:-119.05,y:6.3},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:-172.7,y:6.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-160.7,837.1,331.4);


(lib.popup_basecopy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.popup_base_messageboxcopy3("synched",0);
	this.instance.setTransform(232.1,-21.95,0.0017,0.0039,0,0,0,261,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:291.1,regY:175.5,scaleX:0.1127,scaleY:0.1146,x:173.3,y:-7.2},0).wait(1).to({scaleX:0.2236,scaleY:0.2253,x:114.5,y:6.85},0).wait(1).to({scaleX:0.3345,scaleY:0.3359,x:55.65,y:20.85},0).wait(1).to({scaleX:0.4454,scaleY:0.4466,x:-3.15,y:34.9},0).wait(1).to({scaleX:0.5563,scaleY:0.5573,x:-62,y:48.9},0).wait(1).to({scaleX:0.6672,scaleY:0.668,x:-120.8,y:62.95},0).wait(1).to({scaleX:0.7782,scaleY:0.7786,x:-179.7,y:76.95},0).wait(1).to({scaleX:0.8891,scaleY:0.8893,x:-238.5,y:90.95},0).wait(1).to({scaleX:1,scaleY:1,x:-297.3,y:105},0).wait(1).to({scaleX:0.9002,scaleY:0.9004,x:-251.2,y:111.1},0).wait(1).to({scaleX:0.8003,scaleY:0.8008,x:-205.1,y:117.25},0).wait(1).to({scaleX:0.7005,scaleY:0.7012,x:-159,y:123.3},0).wait(1).to({scaleX:0.6007,scaleY:0.6016,x:-112.9,y:129.4},0).wait(1).to({scaleX:0.5009,scaleY:0.502,x:-66.75,y:135.55},0).wait(1).to({scaleX:0.401,scaleY:0.4024,x:-20.65,y:141.6},0).wait(1).to({scaleX:0.3012,scaleY:0.3027,x:25.5,y:147.75},0).wait(1).to({scaleX:0.2014,scaleY:0.2031,x:71.5,y:153.85},0).wait(1).to({scaleX:0.1016,scaleY:0.1035,x:117.65,y:159.95},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:163.75,y:166.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600.4,-111.9,833.0999999999999,435.9);


(lib.popup_basecopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.popup_base_messageboxcopy("synched",0);
	this.instance.setTransform(-244,116.1,0.0017,0.0039,0,0,0,261,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:248.8,regY:167.2,scaleX:0.1117,scaleY:0.1146,x:-186.1,y:118.95},0).wait(1).to({scaleX:0.2216,scaleY:0.2253,x:-128.25,y:121.15},0).wait(1).to({scaleX:0.3315,scaleY:0.3359,x:-70.4,y:123.4},0).wait(1).to({scaleX:0.4414,scaleY:0.4466,x:-12.55,y:125.6},0).wait(1).to({scaleX:0.5514,scaleY:0.5573,x:45.25,y:127.9},0).wait(1).to({scaleX:0.6613,scaleY:0.668,x:103.1,y:130.1},0).wait(1).to({scaleX:0.7712,scaleY:0.7786,x:160.95,y:132.35},0).wait(1).to({scaleX:0.8811,scaleY:0.8893,x:218.8,y:134.6},0).wait(1).to({scaleX:0.991,scaleY:1,x:276.6,y:136.8},0).wait(1).to({scaleX:0.8921,scaleY:0.9004,x:225.15,y:141.55},0).wait(1).to({scaleX:0.7932,scaleY:0.8008,x:173.7,y:146.25},0).wait(1).to({scaleX:0.6943,scaleY:0.7012,x:122.2,y:150.95},0).wait(1).to({scaleX:0.5953,scaleY:0.6016,x:70.7,y:155.7},0).wait(1).to({scaleX:0.4964,scaleY:0.502,x:19.2,y:160.45},0).wait(1).to({scaleX:0.3975,scaleY:0.4024,x:-32.3,y:165.1},0).wait(1).to({scaleX:0.2985,scaleY:0.3027,x:-83.85,y:169.85},0).wait(1).to({scaleX:0.1996,scaleY:0.2031,x:-135.3,y:174.55},0).wait(1).to({scaleX:0.1007,scaleY:0.1035,x:-186.8,y:179.3},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:-238.3,y:184.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.5,-58.3,851,392.40000000000003);


(lib.popup_base_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance_1 = new lib.popup_base_messagebox_1("synched",0);
	this.instance_1.setTransform(234.1,-42,0.0017,0.0039,0,0,0,261,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:288.8,regY:149.1,scaleX:0.1127,scaleY:0.1146,x:178.15,y:-32.05},0).wait(1).to({scaleX:0.2236,scaleY:0.2253,x:122.15,y:-22.7},0).wait(1).to({scaleX:0.3345,scaleY:0.3359,x:66.25,y:-13.35},0).wait(1).to({scaleX:0.4454,scaleY:0.4466,x:10.3,y:-4},0).wait(1).to({scaleX:0.5563,scaleY:0.5573,x:-45.7,y:5.3},0).wait(1).to({scaleX:0.6672,scaleY:0.668,x:-101.65,y:14.65},0).wait(1).to({scaleX:0.7782,scaleY:0.7786,x:-157.6,y:24},0).wait(1).to({scaleX:0.8891,scaleY:0.8893,x:-213.6,y:33.35},0).wait(1).to({scaleX:1,scaleY:1,x:-269.55,y:42.65},0).wait(1).to({scaleX:0.9002,scaleY:0.9004,x:-220.45,y:38.2},0).wait(1).to({scaleX:0.8003,scaleY:0.8008,x:-171.3,y:33.75},0).wait(1).to({scaleX:0.7005,scaleY:0.7012,x:-122.15,y:29.3},0).wait(1).to({scaleX:0.6007,scaleY:0.6016,x:-73,y:24.8},0).wait(1).to({scaleX:0.5009,scaleY:0.502,x:-23.85,y:20.35},0).wait(1).to({scaleX:0.401,scaleY:0.4024,x:25.25,y:15.9},0).wait(1).to({scaleX:0.3012,scaleY:0.3027,x:74.45,y:11.4},0).wait(1).to({scaleX:0.2014,scaleY:0.2031,x:123.5,y:6.95},0).wait(1).to({scaleX:0.1016,scaleY:0.1035,x:172.7,y:2.5},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:221.8,y:-2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-568.3,-116.4,803,320.1);


(lib.msh2_fem_urinary_popup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance = new lib.popup_base_messageboxcopy2("synched",0);
	this.instance.setTransform(-292,61.25,0.0017,0.0039,0,0,0,174,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:288.8,regY:138.4,scaleX:0.0998,scaleY:0.1021,x:-223.7,y:69.7},0).wait(1).to({scaleX:0.1978,scaleY:0.2004,x:-155.6,y:77.65},0).wait(1).to({scaleX:0.2958,scaleY:0.2986,x:-87.45,y:85.55},0).wait(1).to({scaleX:0.3939,scaleY:0.3968,x:-19.35,y:93.5},0).wait(1).to({scaleX:0.4919,scaleY:0.495,x:48.75,y:101.45},0).wait(1).to({scaleX:0.59,scaleY:0.5932,x:116.9,y:109.4},0).wait(1).to({scaleX:0.688,scaleY:0.6914,x:185,y:117.35},0).wait(1).to({scaleX:0.786,scaleY:0.7896,x:253.05,y:125.3},0).wait(1).to({scaleX:0.8841,scaleY:0.8879,x:321.15,y:133.25},0).wait(1).to({scaleX:0.7958,scaleY:0.7995,x:266.75,y:149.65},0).wait(1).to({scaleX:0.7076,scaleY:0.7111,x:212.3,y:166.05},0).wait(1).to({scaleX:0.6194,scaleY:0.6227,x:157.9,y:182.5},0).wait(1).to({scaleX:0.5311,scaleY:0.5343,x:103.55,y:198.9},0).wait(1).to({scaleX:0.4429,scaleY:0.4459,x:49.1,y:215.3},0).wait(1).to({scaleX:0.3547,scaleY:0.3575,x:-5.3,y:231.75},0).wait(1).to({scaleX:0.2664,scaleY:0.2691,x:-59.75,y:248.15},0).wait(1).to({scaleX:0.1782,scaleY:0.1807,x:-114.2,y:264.55},0).wait(1).to({scaleX:0.09,scaleY:0.0923,x:-168.6,y:280.95},0).wait(1).to({scaleX:0.0017,scaleY:0.0039,x:-223.05,y:297.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.3,-28.6,911.0999999999999,326.8);


(lib.mlh1femaleovariespopup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.mlh1femaleovariespopupmessage("synched",0);
	this.instance.setTransform(-90.45,144.6,0.0014,0.0039,0,0,0,313.8,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:339.4,regY:123.5,scaleX:0.0728,scaleY:0.0751,x:-57.8,y:139.8},0).wait(1).to({scaleX:0.1441,scaleY:0.1462,x:-25.2,y:135.05},0).wait(1).to({scaleX:0.2154,scaleY:0.2174,x:7.4,y:130.25},0).wait(1).to({scaleX:0.2867,scaleY:0.2885,x:40,y:125.5},0).wait(1).to({scaleX:0.3581,scaleY:0.3597,x:72.65,y:120.7},0).wait(1).to({scaleX:0.4294,scaleY:0.4308,x:105.25,y:115.9},0).wait(1).to({scaleX:0.5007,scaleY:0.502,x:137.8,y:111.15},0).wait(1).to({scaleX:0.572,scaleY:0.5731,x:170.4,y:106.4},0).wait(1).to({scaleX:0.6434,scaleY:0.6443,x:203,y:101.55},0).wait(1).to({scaleX:0.7147,scaleY:0.7154,x:235.6,y:96.8},0).wait(1).to({scaleX:0.786,scaleY:0.7866,x:268.15,y:92.1},0).wait(1).to({scaleX:0.8573,scaleY:0.8577,x:300.8,y:87.3},0).wait(1).to({scaleX:0.9287,scaleY:0.9289,x:333.4,y:82.5},0).wait(1).to({scaleX:1,scaleY:1,x:366,y:77.7},0).wait(1).to({scaleX:0.9334,scaleY:0.9336,x:325.8,y:81.85},0).wait(1).to({scaleX:0.8669,scaleY:0.8672,x:285.7,y:85.95},0).wait(1).to({scaleX:0.8003,scaleY:0.8008,x:245.55,y:90.1},0).wait(1).to({scaleX:0.7337,scaleY:0.7344,x:205.4,y:94.15},0).wait(1).to({scaleX:0.6671,scaleY:0.668,x:165.25,y:98.3},0).wait(1).to({scaleX:0.6006,scaleY:0.6016,x:125.1,y:102.4},0).wait(1).to({scaleX:0.534,scaleY:0.5351,x:84.95,y:106.55},0).wait(1).to({scaleX:0.4674,scaleY:0.4687,x:44.8,y:110.65},0).wait(1).to({scaleX:0.4009,scaleY:0.4023,x:4.65,y:114.8},0).wait(1).to({scaleX:0.3343,scaleY:0.3359,x:-35.5,y:118.9},0).wait(1).to({scaleX:0.2677,scaleY:0.2695,x:-75.7,y:123.05},0).wait(1).to({scaleX:0.2011,scaleY:0.2031,x:-115.85,y:127.15},0).wait(1).to({scaleX:0.1346,scaleY:0.1367,x:-156,y:131.3},0).wait(1).to({scaleX:0.068,scaleY:0.0703,x:-196.15,y:135.4},0).wait(1).to({scaleX:0.0014,scaleY:0.0039,x:-236.25,y:139.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.8,-53,955.0999999999999,263.3);


(lib.mlh1femalecolorectalpopup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer_1
	this.instance_1 = new lib.mlh1femalecolorectlpopup_1("synched",0);
	this.instance_1.setTransform(300.05,170.05,0.0014,0.0031,0,0,0,284.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:356,regY:178,scaleX:0.1124,scaleY:0.1138,x:255.15,y:169.4},0).wait(1).to({scaleX:0.2233,scaleY:0.2246,x:210.2,y:168.25},0).wait(1).to({scaleX:0.3343,scaleY:0.3354,x:165.25,y:167.05},0).wait(1).to({scaleX:0.4452,scaleY:0.4461,x:120.3,y:165.85},0).wait(1).to({scaleX:0.5562,scaleY:0.5569,x:75.35,y:164.7},0).wait(1).to({scaleX:0.6671,scaleY:0.6677,x:30.4,y:163.5},0).wait(1).to({scaleX:0.7781,scaleY:0.7785,x:-14.6,y:162.3},0).wait(1).to({scaleX:0.889,scaleY:0.8892,x:-59.55,y:161.15},0).wait(1).to({scaleX:1,scaleY:1,x:-104.5,y:160},0).wait(1).to({scaleX:0.9001,scaleY:0.9003,x:-58.65,y:167.65},0).wait(1).to({scaleX:0.8003,scaleY:0.8006,x:-12.8,y:175.35},0).wait(1).to({scaleX:0.7004,scaleY:0.7009,x:33.05,y:183},0).wait(1).to({scaleX:0.6006,scaleY:0.6012,x:78.9,y:190.7},0).wait(1).to({scaleX:0.5007,scaleY:0.5015,x:124.75,y:198.35},0).wait(1).to({scaleX:0.4008,scaleY:0.4018,x:170.55,y:206.1},0).wait(1).to({scaleX:0.301,scaleY:0.3021,x:216.4,y:213.75},0).wait(1).to({scaleX:0.2011,scaleY:0.2025,x:262.25,y:221.45},0).wait(1).to({scaleX:0.1013,scaleY:0.1028,x:308.1,y:229.1},0).wait(1).to({scaleX:0.0014,scaleY:0.0031,x:353.9,y:236.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471,-28.4,825.5,379);


(lib.mlh1femcolon_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// colon highlight
	this.instance_2 = new lib.colon();
	this.instance_2.setTransform(-7,-13,0.0962,0.0962);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_3 = new lib.colonwithparts_0001_wholegutpsd("synched",0);
	this.instance_3.setTransform(93.5,88.25,0.0863,0.0863,0,0,0,2029.9,1535.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-13,208.3,196.3);


(lib.aboutpage_btn_over_effect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// sure
	this.instance = new lib.surelogo("synched",0);
	this.instance.setTransform(165.2,157.9,0.6031,0.6031,0,0,0,84.5,41.4);
	this.instance.alpha = 0.1406;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regY:41.5,scaleX:0.635,scaleY:0.635,x:179.85,y:144.6,alpha:0.2629},0).wait(1).to({scaleX:0.6669,scaleY:0.6669,x:194.55,y:131.3,alpha:0.3857},0).wait(1).to({scaleX:0.6988,scaleY:0.6988,x:209.2,y:117.9,alpha:0.5086},0).wait(1).to({scaleX:0.7307,scaleY:0.7307,x:223.9,y:104.55,alpha:0.6314},0).wait(1).to({scaleX:0.7625,scaleY:0.7625,x:238.55,y:91.25,alpha:0.7543},0).wait(1).to({scaleX:0.7944,scaleY:0.7944,x:253.25,y:77.85,alpha:0.8771},0).wait(1).to({scaleX:0.8263,scaleY:0.8263,x:267.85,y:64.55,alpha:1},0).wait(1));

	// university
	this.instance_1 = new lib.universitylogo("synched",0);
	this.instance_1.setTransform(96.4,162.65,0.4063,0.4063,0,0,0,109.7,44.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:109.6,regY:44.3,x:96.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:109.7,regY:44,scaleX:0.7032,scaleY:0.7032,x:185.95,y:160.35,alpha:0.5},0).wait(1).to({regX:109.6,regY:44.3,scaleX:0.6939,scaleY:0.7059,x:171.9,y:145.8,alpha:0.5714},0).wait(1).to({scaleX:0.6846,scaleY:0.7087,x:157.95,y:131.1,alpha:0.6429},0).wait(1).to({scaleX:0.6754,scaleY:0.7114,x:143.95,y:116.4,alpha:0.7143},0).wait(1).to({scaleX:0.6661,scaleY:0.7142,x:130.05,y:101.7,alpha:0.7857},0).wait(1).to({scaleX:0.6569,scaleY:0.7169,x:116.1,y:87,alpha:0.8571},0).wait(1).to({scaleX:0.6476,scaleY:0.7197,x:102.15,y:72.3,alpha:0.9286},0).wait(1).to({scaleX:0.6384,scaleY:0.7224,x:88.2,y:57.6,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.3,25.6,319.4,166.1);


(lib.aboutpagebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// movieclip
	this.instance = new lib.aboutpage_btn_over_effect();
	this.instance.setTransform(-38,-118);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_44();
	this.instance_1.setTransform(-12.1,-10.95,0.5,0.5);

	this.instance_2 = new lib.unievrsitylogo();
	this.instance_2.setTransform(762,515,0.141,0.141);

	this.instance_3 = new lib.CachedBmp_45();
	this.instance_3.setTransform(-47,-19.55,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_46();
	this.instance_4.setTransform(-12.1,-10.95,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#578EC4").ss(1,1,1).p("A1goxMArBAAAIAARjMgrBAAAg");
	this.shape.setTransform(133.125,41.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#578EC4").s().p("A1gIyIAAxjMArBAAAIAARjg");
	this.shape_1.setTransform(133.125,41.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-19.5,989.5,607.4);


(lib.PMS2_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_female_description.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_male_description.play();
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_1_male_button.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(5));

	// male
	this.pms2_male_description = new lib.pms2_male_description();
	this.pms2_male_description.name = "pms2_male_description";
	this.pms2_male_description.setTransform(657.6,406,1,1,0,0,0,267,294);
	this.pms2_male_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pms2_male_description).wait(1).to({_off:false},0).wait(19));

	// female
	this.pms2_female_description = new lib.pms2_female_description();
	this.pms2_female_description.name = "pms2_female_description";
	this.pms2_female_description.setTransform(659.6,406,1,1,0,0,0,267,294);
	this.pms2_female_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pms2_female_description).wait(1).to({_off:false},0).wait(19));

	// TITLE
	this.instance = new lib.PMS2BUTTON();
	this.instance.setTransform(701.4,569.2,1,1,0,0,0,297.4,116.2);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.9655,scaleY:0.9655,x:756.6,y:508.8},0).wait(1).to({scaleX:0.931,scaleY:0.931,x:811.85,y:448.45},0).wait(1).to({scaleX:0.8965,scaleY:0.8965,x:867.1,y:388.05},0).wait(1).to({scaleX:0.8621,scaleY:0.8621,x:922.3,y:327.65},0).wait(1).to({scaleX:0.8276,scaleY:0.8276,x:977.5,y:267.25},0).wait(1).to({scaleX:0.7931,scaleY:0.7931,x:1032.75,y:206.9},0).wait(1).to({scaleX:0.7586,scaleY:0.7586,x:1087.95,y:146.5},0).wait(1).to({scaleX:1,scaleY:1,x:701.4,y:569.2},0).wait(1).to({scaleX:0.9675,scaleY:0.9675,x:629.95,y:496.85},0).wait(1).to({scaleX:0.9349,scaleY:0.9349,x:558.6,y:424.6},0).wait(1).to({scaleX:0.9024,scaleY:0.9024,x:487.15,y:352.25},0).wait(1).to({scaleX:0.8699,scaleY:0.8699,x:415.8,y:280},0).wait(1).to({scaleX:0.8373,scaleY:0.8373,x:344.35,y:207.65},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:273,y:135.35},0).to({_off:true},1).wait(4));

	// navigation
	this.previous_page = new lib.previouspage();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(135.55,139.5,1,1,0,0,0,27.5,27.5);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.previouspage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(18));

	// colorectal
	this.msh2_male_colorectal_b = new lib.mlh1femcolon_1();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(856.25,474.1,1,1,0,0,0,93.5,88.2);
	this.msh2_male_colorectal_b.alpha = 0;
	this.msh2_male_colorectal_b._off = true;
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_colorectal_b).wait(12).to({_off:false},0).wait(1).to({regX:97.2,regY:85.1,x:854.05,y:479.85,alpha:0.3333},0).wait(1).to({x:848.2,y:488.75,alpha:0.6667},0).wait(1).to({x:842.35,y:497.65,alpha:1},0).to({_off:true},1).wait(4));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(2).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({regX:224.1,scaleX:1.0629,scaleY:1.0557,x:985.3},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:973.6,y:499.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:961.95},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:950.3,y:499.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:938.6,y:499.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:926.95,y:499.5},0).to({_off:true},1).wait(4));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:433.9,y:657.85,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:433.25,y:665.7,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:432.55,y:673.45,alpha:1},0).to({_off:true},1).wait(11));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolon();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolon(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:425.1,y:498.3,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:426.05,y:533.4,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:426.95,y:568.45,alpha:1},0).to({_off:true},1).wait(11));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 2, false, new lib.mlh1femaleorganback(), 3);

	this.instance_1 = new lib.mlh12femalegraphic("synched",0);
	this.instance_1.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:311.6,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:375.8,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:408.15,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:440.45,y:419.15},0).wait(3).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).to({_off:true},1).wait(4));

	// Layer_1
	this.instance_2 = new lib.pms2_background("synched",0);
	this.instance_2.setTransform(0.5,0.5,0.0007,0.0012,0,0,0,641.1,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:700.2,regY:418.1,scaleX:1.0775,scaleY:1.1322,x:763.8,y:463.45},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-119.5,1560.5,1218.4);


(lib.msh6_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_female_description.play();
		});
		
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh6_male_description.play();
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.MSH6_FEM_COLORECTAL_P.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.MSH6_FEM_ENDOMETRIUM_P.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_1_male_button.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_male_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.MSH6_MALE_P.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// msh6_female__description
	this.mlh1_female_description = new lib.mlh1_fem_description();
	this.mlh1_female_description.name = "mlh1_female_description";
	this.mlh1_female_description.setTransform(654.2,346.1);
	this.mlh1_female_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_description).wait(1).to({_off:false},0).wait(15));

	// msh6_male_description
	this.msh6_male_description = new lib.msh6_male_description();
	this.msh6_male_description.name = "msh6_male_description";
	this.msh6_male_description.setTransform(621.5,402.15,1,1,0,0,0,267,294);
	this.msh6_male_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh6_male_description).wait(1).to({_off:false},0).wait(15));

	// navigation
	this.previous_page = new lib.previouspage();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(101.55,111.5,1,1,0,0,0,27.5,27.5);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.previouspage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(14));

	// title
	this.instance = new lib.msh6title();
	this.instance.setTransform(629.9,512,1,1,0,0,0,316.9,150);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({scaleX:0.9356,scaleY:0.9356,x:698.25,y:449.25},0).wait(1).to({scaleX:0.8712,scaleY:0.8712,x:766.55,y:386.5},0).wait(1).to({scaleX:0.8067,scaleY:0.8067,x:834.9,y:323.8},0).wait(1).to({scaleX:0.7423,scaleY:0.7423,x:903.25,y:261.1},0).wait(1).to({scaleX:0.6779,scaleY:0.6779,x:971.6,y:198.4},0).wait(1).to({scaleX:0.6135,scaleY:0.6135,x:1039.95,y:135.65},0).wait(1).to({scaleX:1,scaleY:1,x:629.9,y:512},0).wait(1).to({scaleX:0.9422,scaleY:0.9422,x:560.55,y:446.65},0).wait(1).to({scaleX:0.8845,scaleY:0.8845,x:491.2,y:381.25},0).wait(1).to({scaleX:0.8267,scaleY:0.8267,x:421.85,y:315.95},0).wait(1).to({scaleX:0.769,scaleY:0.769,x:352.5,y:250.6},0).wait(1).to({scaleX:0.7112,scaleY:0.7112,x:283.15,y:185.3},0).wait(1).to({scaleX:0.6534,scaleY:0.6534,x:213.75,y:119.9},0).wait(1));

	// POPUP
	this.MSH6_MALE_P = new lib.MSH6_MALE_P();
	this.MSH6_MALE_P.name = "MSH6_MALE_P";
	this.MSH6_MALE_P.setTransform(333.1,402.1,1,1,0,0,0,265.1,130);
	this.MSH6_MALE_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MSH6_MALE_P).wait(15).to({_off:false},0).wait(1));

	// colorectal
	this.msh2_male_colorectal_b = new lib.mlh1femcolon_1();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(856.25,474.1,1,1,0,0,0,93.5,88.2);
	this.msh2_male_colorectal_b.alpha = 0;
	this.msh2_male_colorectal_b._off = true;
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_colorectal_b).wait(12).to({_off:false},0).wait(1).to({regX:97.2,regY:85.1,x:854.05,y:479.85,alpha:0.3333},0).wait(1).to({x:848.2,y:488.75,alpha:0.6667},0).wait(1).to({x:842.35,y:497.65,alpha:1},0).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(2).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({regX:224.1,scaleX:1.0629,scaleY:1.0557,x:985.3},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:973.6,y:499.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:961.95},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:950.3,y:499.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:938.6,y:499.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:926.95,y:499.5},0).wait(1));

	// endometrial_p
	this.MSH6_FEM_ENDOMETRIUM_P = new lib.mswh6_fem_endometrium_p();
	this.MSH6_FEM_ENDOMETRIUM_P.name = "MSH6_FEM_ENDOMETRIUM_P";
	this.MSH6_FEM_ENDOMETRIUM_P.setTransform(1012.2,469.2,1,1,0,0,0,218.3,212.8);
	this.MSH6_FEM_ENDOMETRIUM_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MSH6_FEM_ENDOMETRIUM_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:433.9,y:657.85,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:433.25,y:665.7,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:432.55,y:673.45,alpha:1},0).to({_off:true},1).wait(7));

	// colorectal_popup
	this.MSH6_FEM_COLORECTAL_P = new lib.msh6_fem_colorectal_p();
	this.MSH6_FEM_COLORECTAL_P.name = "MSH6_FEM_COLORECTAL_P";
	this.MSH6_FEM_COLORECTAL_P.setTransform(952.3,437.15,1,1,0,0,0,282.1,149.1);
	this.MSH6_FEM_COLORECTAL_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MSH6_FEM_COLORECTAL_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolon();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolon(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:425.1,y:498.3,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:426.05,y:533.4,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:426.95,y:568.45,alpha:1},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 2, false, new lib.mlh1femaleorganback(), 3);

	this.instance_1 = new lib.mlh12femalegraphic("synched",0);
	this.instance_1.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:311.6,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:375.8,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:408.15,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:440.45,y:419.15},0).wait(3).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).wait(1));

	// background
	this.instance_2 = new lib.msh6_background("synched",0);
	this.instance_2.setTransform(420.15,380.15,0.0007,0.0012,0,0,0,0,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:728.2,regY:419.1,scaleX:1,scaleY:1,x:598.95,y:387.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-119.5,1456.4,1218.4);


(lib.msh2title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.msh2_title_button();
	this.instance.setTransform(269.4,202,1,1,0,0,0,269.4,202);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("EgmvgMpMBNgAAAIAAZTMhNgAAAg");
	this.shape.setTransform(262.1,187.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A630E").s().p("EgmwAMqIAA5TMBNgAAAIAAZTg");
	this.shape_1.setTransform(262.1,187.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:269.4,scaleX:1,scaleY:1,x:269.4,y:202}}]}).to({state:[{t:this.instance,p:{regX:269.3,scaleX:1.1559,scaleY:1.1559,x:269.35,y:202.05}}]},1).to({state:[{t:this.instance,p:{regX:269.4,scaleX:1,scaleY:1,x:269.4,y:202}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:269.4,scaleX:1,scaleY:1,x:269.4,y:202}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-31.4,622.6999999999999,467);


(lib.msh2background_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_fem_description.play();
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_male_description.play();
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_fem_colorectal_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_female_endometrial_popup.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_overies_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_female_ovaries_popup.play();
		});
		
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stamoch_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_fem_stomach_p.play();
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_fem_urinary_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_fem_urinary_p.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_1_male_button.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_male_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_male_colorectal_p.play();
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.stamoch_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.stomach_popup.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_fem_urinary_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.MSH2_MALE_URINARY_P.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// male
	this.msh2_male_description = new lib.msh2_male_description();
	this.msh2_male_description.name = "msh2_male_description";
	this.msh2_male_description.setTransform(652.2,362.1);
	this.msh2_male_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_description).wait(1).to({_off:false},0).wait(15));

	// female
	this.msh2_fem_description = new lib.msh2_fem_description();
	this.msh2_fem_description.name = "msh2_fem_description";
	this.msh2_fem_description.setTransform(652.2,382.1);
	this.msh2_fem_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_description).wait(1).to({_off:false},0).wait(15));

	// msh2_title
	this.instance = new lib.msh2title();
	this.instance.setTransform(646,552.1,1,1,0,0,0,269.4,202);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.msh2title(), 3);

	this.instance_1 = new lib.MSH2caption("synched",0);
	this.instance_1.setTransform(646,552.1,1,1,0,0,0,269.4,202);
	this.instance_1._off = true;

	this.instance_2 = new lib.msh2_title_button();
	this.instance_2.setTransform(646,552.1,1,1,0,0,0,269.4,202);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({scaleX:0.9588,scaleY:0.9588,x:720,y:487.7},0).wait(1).to({scaleX:0.9175,scaleY:0.9175,x:794.05,y:423.35},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:868,y:359},0).wait(1).to({scaleX:0.835,scaleY:0.835,x:942.05,y:294.6},0).wait(1).to({scaleX:0.7938,scaleY:0.7938,x:1016.05,y:230.3},0).wait(1).to({scaleX:0.7525,scaleY:0.7525,x:1090.1,y:165.9},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(2).to({scaleX:0.9485,scaleY:0.9485,x:568.65,y:476.4},0).wait(1).to({scaleX:0.8971,scaleY:0.8971,x:491.3,y:400.75},0).wait(1).to({scaleX:0.8456,scaleY:0.8456,x:414,y:325.1},0).wait(1).to({scaleX:0.7941,scaleY:0.7941,x:336.7,y:249.45},0).wait(1).to({scaleX:0.7426,scaleY:0.7426,x:259.35,y:173.8},0).wait(1));

	// navigation
	this.previous_page = new lib.previouspage();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(123.55,111.5,1,1,0,0,0,27.5,27.5);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.previouspage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(14));

	// msh2_male_urinary_p
	this.MSH2_MALE_URINARY_P = new lib.popup_basecopy3();
	this.MSH2_MALE_URINARY_P.name = "MSH2_MALE_URINARY_P";
	this.MSH2_MALE_URINARY_P.setTransform(959.65,546.6,1,1,0,0,0,288.7,127.6);
	this.MSH2_MALE_URINARY_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MSH2_MALE_URINARY_P).wait(15).to({_off:false},0).wait(1));

	// msh2_male_urinary
	this.msh2_fem_urinary_b = new lib.urinarytract();
	this.msh2_fem_urinary_b.name = "msh2_fem_urinary_b";
	this.msh2_fem_urinary_b.setTransform(862.6,494.4,1,0.7255,0,0,0,102.5,189.4);
	this.msh2_fem_urinary_b.alpha = 0.3906;
	this.msh2_fem_urinary_b._off = true;
	new cjs.ButtonHelper(this.msh2_fem_urinary_b, 0, 1, 2, false, new lib.urinarytract(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_urinary_b).wait(13).to({_off:false},0).wait(1).to({regX:102.9,regY:189.5,scaleX:0.9658,scaleY:0.7159,x:850,y:485.95,alpha:0.695},0).wait(1).to({scaleX:0.9317,scaleY:0.7063,x:836.95,y:477.5,alpha:1},0).wait(1));

	// stomach_p
	this.stomach_popup = new lib.mlh1malestomachpopup();
	this.stomach_popup.name = "stomach_popup";
	this.stomach_popup.setTransform(304.5,357.55,1,1,0,0,0,256.4,129.2);
	this.stomach_popup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stomach_popup).wait(15).to({_off:false},0).wait(1));

	// stomach
	this.stamoch_btn = new lib.stomach_1();
	this.stamoch_btn.name = "stamoch_btn";
	this.stamoch_btn.setTransform(897.45,351.7,1,1,0,0,0,67.4,58.3);
	this.stamoch_btn.alpha = 0.4219;
	this.stamoch_btn._off = true;
	new cjs.ButtonHelper(this.stamoch_btn, 0, 1, 2, false, new lib.stomach_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stamoch_btn).wait(13).to({_off:false},0).wait(1).to({regY:58.4,x:892.45,y:345.8,alpha:0.71},0).wait(1).to({x:887.45,y:339.8,alpha:1},0).wait(1));

	// mlh1_female_colorectal_popup
	this.msh2_male_colorectal_p = new lib.mlh1femalecolorectalpopup_1();
	this.msh2_male_colorectal_p.name = "msh2_male_colorectal_p";
	this.msh2_male_colorectal_p.setTransform(900.25,366.05,1,1,0,0,0,356.1,98);
	this.msh2_male_colorectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_colorectal_p).wait(15).to({_off:false},0).wait(1));

	// colorectal
	this.msh2_male_colorectal_b = new lib.mlh1femcolon_1();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(856.25,474.1,1,1,0,0,0,93.5,88.2);
	this.msh2_male_colorectal_b.alpha = 0;
	this.msh2_male_colorectal_b._off = true;
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_colorectal_b).wait(12).to({_off:false},0).wait(1).to({regX:97.2,regY:85.1,x:854.05,y:479.85,alpha:0.3333},0).wait(1).to({x:848.2,y:488.75,alpha:0.6667},0).wait(1).to({x:842.35,y:497.65,alpha:1},0).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(2).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({regX:224.1,scaleX:1.0629,scaleY:1.0557,x:985.3},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:973.6,y:499.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:961.95},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:950.3,y:499.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:938.6,y:499.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:926.95,y:499.5},0).wait(1));

	// fem_stomach_p
	this.msh2_fem_stomach_p = new lib.popup_basecopy4();
	this.msh2_fem_stomach_p.name = "msh2_fem_stomach_p";
	this.msh2_fem_stomach_p.setTransform(959.65,546.6,1,1,0,0,0,288.7,127.6);
	this.msh2_fem_stomach_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_stomach_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// msh2_female_stomach
	this.stamoch_btn_1 = new lib.stomach_1();
	this.stamoch_btn_1.name = "stamoch_btn_1";
	this.stamoch_btn_1.setTransform(473.35,409.75,1,1,0,0,0,67.4,58.3);
	this.stamoch_btn_1.alpha = 0.4688;
	this.stamoch_btn_1._off = true;
	new cjs.ButtonHelper(this.stamoch_btn_1, 0, 1, 2, false, new lib.stomach_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stamoch_btn_1).wait(6).to({_off:false},0).wait(1).to({regY:58.4,y:409.85,alpha:0.735},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(7));

	// msh2_fem_urinary_p
	this.msh2_fem_urinary_p = new lib.msh2_fem_urinary_popup();
	this.msh2_fem_urinary_p.name = "msh2_fem_urinary_p";
	this.msh2_fem_urinary_p.setTransform(1057.6,398.4,1,1,0,0,0,-36.4,42.1);
	this.msh2_fem_urinary_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_urinary_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// msh2_fem_urinary
	this.msh2_fem_urinary_b_1 = new lib.urinarytract();
	this.msh2_fem_urinary_b_1.name = "msh2_fem_urinary_b_1";
	this.msh2_fem_urinary_b_1.setTransform(434.5,546.4,1,1,0,0,0,102.5,189.4);
	this.msh2_fem_urinary_b_1.alpha = 0.3906;
	this.msh2_fem_urinary_b_1._off = true;
	new cjs.ButtonHelper(this.msh2_fem_urinary_b_1, 0, 1, 2, false, new lib.urinarytract(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_urinary_b_1).wait(6).to({_off:false},0).wait(1).to({regX:102.9,regY:189.5,scaleX:1.0341,scaleY:0.9746,x:433.9,y:563.5,alpha:0.695},0).wait(1).to({scaleX:1.0683,scaleY:0.9492,x:432.9,y:580.45,alpha:1},0).to({_off:true},1).wait(7));

	// mlh1_ovaries_popup
	this.mlh1_female_ovaries_popup = new lib.mlh1femaleovariespopup();
	this.mlh1_female_ovaries_popup.name = "mlh1_female_ovaries_popup";
	this.mlh1_female_ovaries_popup.setTransform(930.8,595.25,1,1,0,0,0,328.4,96.6);
	this.mlh1_female_ovaries_popup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_ovaries_popup).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// ovaries_button
	this.mlh1_female_overies_b = new lib.mlh1femaleovariesbutton();
	this.mlh1_female_overies_b.name = "mlh1_female_overies_b";
	this.mlh1_female_overies_b.setTransform(345.65,609.7,0.8528,0.9227,0,0,0,0.2,0.5);
	this.mlh1_female_overies_b._off = true;
	new cjs.ButtonHelper(this.mlh1_female_overies_b, 0, 1, 2, false, new lib.mlh1femaleovariesbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_overies_b).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// mlh1_female_endometrial_popup
	this.mlh1_female_endometrial_popup = new lib.mlh1femaleendometrialpopup();
	this.mlh1_female_endometrial_popup.name = "mlh1_female_endometrial_popup";
	this.mlh1_female_endometrial_popup.setTransform(640.25,432.55);
	this.mlh1_female_endometrial_popup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_popup).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:433.9,y:657.85,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:433.25,y:665.7,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:432.55,y:673.45,alpha:1},0).to({_off:true},1).wait(7));

	// MSH2_FEM_COLORECTAL_P
	this.msh2_fem_colorectal_p = new lib.popup_basecopy();
	this.msh2_fem_colorectal_p.name = "msh2_fem_colorectal_p";
	this.msh2_fem_colorectal_p.setTransform(959.65,546.6,1,1,0,0,0,288.7,127.6);
	this.msh2_fem_colorectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh2_fem_colorectal_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolon();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolon(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:425.1,y:498.3,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:426.05,y:533.4,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:426.95,y:568.45,alpha:1},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 2, false, new lib.mlh1femaleorganback(), 3);

	this.instance_3 = new lib.mlh12femalegraphic("synched",0);
	this.instance_3.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:311.6,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:375.8,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:408.15,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:440.45,y:419.15},0).wait(3).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).wait(1));

	// background
	this.instance_4 = new lib.msh2background("synched",0);
	this.instance_4.setTransform(0.5,0.5,0.0007,0.0013,0,0,0,641.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:695.2,regY:393.1,scaleX:1,scaleY:1,x:749.2,y:391.45},0).wait(1).to({x:749.35,y:392.85},0).wait(1).to({x:749.5,y:394.25},0).wait(1).to({x:749.65,y:395.65},0).wait(1).to({x:749.8,y:397.1},0).wait(1).to({x:749.95,y:398.5},0).wait(1).to({x:750.1,y:399.95},0).wait(1).to({x:750.25,y:401.4},0).wait(1).to({x:750.4,y:402.8},0).wait(1).to({x:750.55,y:404.25},0).wait(1).to({x:750.7,y:405.65},0).wait(1).to({x:750.85,y:407.1},0).wait(1).to({x:751,y:408.5},0).wait(1).to({x:751.15,y:409.95},0).wait(1).to({x:751.25,y:411.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-119.5,1498.6000000000001,1218.4);


(lib.mlh1_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.previous_page.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(0);
		}
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_fem_description.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_male_description.play();
		});
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_female_colorectal_popup.play();
		});
		
		
		
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_overies_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_fem_ovaries_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_fem_endometrium_p.play();
		});
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_m_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_m_coloectal_p.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_m_stomach_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_male_stomach_p.play();
		});
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_1_male_button.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// navigation
	this.previous_page = new lib.previouspage();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(123.55,111.5,1,1,0,0,0,27.5,27.5);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.previouspage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(14));

	// msh6_male_description
	this.mlh1_male_description = new lib.mlh1_fem_description();
	this.mlh1_male_description.name = "mlh1_male_description";
	this.mlh1_male_description.setTransform(654.2,346.1);
	this.mlh1_male_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_description).wait(1).to({_off:false},0).wait(15));

	// msh6_female_description
	this.mlh1_fem_description = new lib.mlh1_fem_description();
	this.mlh1_fem_description.name = "mlh1_fem_description";
	this.mlh1_fem_description.setTransform(654.2,346.1);
	this.mlh1_fem_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_fem_description).wait(1).to({_off:false},0).wait(15));

	// mlh1_male_description
	this.mlh1_male_description_1 = new lib.mlh1_fem_description();
	this.mlh1_male_description_1.name = "mlh1_male_description_1";
	this.mlh1_male_description_1.setTransform(654.2,346.1);
	this.mlh1_male_description_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_description_1).wait(1).to({_off:false},0).wait(15));

	// mlh1_female_description
	this.mlh1_fem_description_1 = new lib.mlh1_fem_description();
	this.mlh1_fem_description_1.name = "mlh1_fem_description_1";
	this.mlh1_fem_description_1.setTransform(654.2,346.1);
	this.mlh1_fem_description_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_fem_description_1).wait(1).to({_off:false},0).wait(15));

	// mlh1_title
	this.mlh1_title = new lib.mlh1title();
	this.mlh1_title.name = "mlh1_title";
	this.mlh1_title.setTransform(640.9,502.6,1,1,0,0,0,245.9,104.4);
	new cjs.ButtonHelper(this.mlh1_title, 0, 1, 2);

	this.instance = new lib.mlh1page_0000_mlh1psd("synched",0);
	this.instance.setTransform(640.95,502.65,0.1929,0.1929,0,0,0,1885.4,870.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_title}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regX:1886,regY:872,scaleX:0.1873,scaleY:0.1873,x:717.45,y:442.4},0).wait(1).to({scaleX:0.1818,scaleY:0.1818,x:793.9,y:381.95},0).wait(1).to({scaleX:0.1762,scaleY:0.1762,x:870.35,y:321.5},0).wait(1).to({scaleX:0.1707,scaleY:0.1707,x:946.75,y:261.1},0).wait(1).to({scaleX:0.1651,scaleY:0.1651,x:1023.2,y:200.65},0).wait(1).to({scaleX:0.1595,scaleY:0.1595,x:1099.6,y:140.2},0).wait(1).to({regX:1885.4,regY:870.9,scaleX:0.1929,scaleY:0.1929,x:640.95,y:502.65},0).wait(1).to({regX:1886,regY:872,scaleX:0.1845,scaleY:0.1845,x:577.1,y:441.75},0).wait(1).to({scaleX:0.1761,scaleY:0.1761,x:513.2,y:380.7},0).wait(1).to({scaleX:0.1678,scaleY:0.1678,x:449.25,y:319.6},0).wait(1).to({scaleX:0.1594,scaleY:0.1594,x:385.3,y:258.5},0).wait(1).to({scaleX:0.151,scaleY:0.151,x:321.4,y:197.4},0).wait(1).to({scaleX:0.1427,scaleY:0.1427,x:257.55,y:136.35},0).wait(1));

	// mlh1_male_stomach_p
	this.mlh1_male_stomach_p = new lib.popup_base_1();
	this.mlh1_male_stomach_p.name = "mlh1_male_stomach_p";
	this.mlh1_male_stomach_p.setTransform(959.65,546.6,1,1,0,0,0,288.7,127.6);
	this.mlh1_male_stomach_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male_stomach_p).wait(15).to({_off:false},0).wait(1));

	// mlh1_male_stomach
	this.instance_1 = new lib.mlh1malestomach();
	this.instance_1.setTransform(915.35,374.55,1,1,0,0,0,83,86.8);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.mlh1malestomach(), 3);

	this.mlh1_m_stomach_button = new lib.mlh1malestomach();
	this.mlh1_m_stomach_button.name = "mlh1_m_stomach_button";
	this.mlh1_m_stomach_button.setTransform(895.35,374.55,1.1204,1,0,0,0,83,86.8);
	new cjs.ButtonHelper(this.mlh1_m_stomach_button, 0, 1, 2, false, new lib.mlh1malestomach(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.mlh1_m_stomach_button}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({_off:true,scaleX:1.1204,x:895.35},2).wait(1));

	// mlh1_m_colorectal_popup
	this.mlh1_m_coloectal_p = new lib.mlh1mcolorectalpopup();
	this.mlh1_m_coloectal_p.name = "mlh1_m_coloectal_p";
	this.mlh1_m_coloectal_p.setTransform(303.45,542.6,1,1,0,0,0,265.4,146.3);
	this.mlh1_m_coloectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_m_coloectal_p).wait(15).to({_off:false},0).wait(1));

	// male_colorectal
	this.instance_2 = new lib.mlh1malecolorectal();
	this.instance_2.setTransform(875.25,524.75,1,1,0,0,0,107.6,94.3);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.mlh1_m_colorectal_b = new lib.mlh1malecolorectal();
	this.mlh1_m_colorectal_b.name = "mlh1_m_colorectal_b";
	this.mlh1_m_colorectal_b.setTransform(841.2,524.75,1,1,0,0,0,107.6,94.3);
	new cjs.ButtonHelper(this.mlh1_m_colorectal_b, 0, 1, 2, false, new lib.mlh1malecolorectal(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.mlh1_m_colorectal_b}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({_off:true,x:841.2},2).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(2).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({regX:224.1,scaleX:1.0629,scaleY:1.0557,x:985.3},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:973.6,y:499.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:961.95},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:950.3,y:499.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:938.6,y:499.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:926.95,y:499.5},0).wait(1));

	// mlh1_fem_ovaries_p
	this.mlh1_fem_ovaries_p = new lib.popup_base();
	this.mlh1_fem_ovaries_p.name = "mlh1_fem_ovaries_p";
	this.mlh1_fem_ovaries_p.setTransform(959.65,546.6,1,1,0,0,0,288.7,127.6);
	this.mlh1_fem_ovaries_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_fem_ovaries_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// ovaries_button
	this.mlh1_female_overies_b = new lib.mlh1femaleovariesbutton();
	this.mlh1_female_overies_b.name = "mlh1_female_overies_b";
	this.mlh1_female_overies_b.setTransform(330,602.25);
	this.mlh1_female_overies_b._off = true;
	new cjs.ButtonHelper(this.mlh1_female_overies_b, 0, 1, 2, false, new lib.mlh1femaleovariesbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_overies_b).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// mlh1_female_endometrial_popup
	this.mlh1_fem_endometrium_p = new lib.mlh1_fem_endometrial_p();
	this.mlh1_fem_endometrium_p.name = "mlh1_fem_endometrium_p";
	this.mlh1_fem_endometrium_p.setTransform(976.3,524.2,1,1,0,0,0,328.1,152.1);
	this.mlh1_fem_endometrium_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_fem_endometrium_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:1.0249,scaleY:1.0249,x:433.9,y:658.2,alpha:0.3333},0).wait(1).to({scaleX:1.0499,scaleY:1.0499,x:433.2,y:666.3,alpha:0.6667},0).wait(1).to({scaleX:1.0748,scaleY:1.0748,x:432.6,y:674.45,alpha:1},0).to({_off:true},1).wait(7));

	// mlh1_female_colorectal_popup
	this.mlh1_female_colorectal_popup = new lib.mlh1femalecolorectalpopup();
	this.mlh1_female_colorectal_popup.name = "mlh1_female_colorectal_popup";
	this.mlh1_female_colorectal_popup.setTransform(1091.15,308.15,1,1,0,0,0,168.8,187.5);
	this.mlh1_female_colorectal_popup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_popup).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolon();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolon(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,x:424.25,y:470.55,alpha:0.3333},0).wait(1).to({y:477.9,alpha:0.6667},0).wait(1).to({y:485.25,alpha:1},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 2, false, new lib.mlh1femaleorganback(), 3);

	this.instance_3 = new lib.mlh12femalegraphic("synched",0);
	this.instance_3.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:311.6,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:375.8,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:408.15,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:440.45,y:419.15},0).wait(3).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).wait(1));

	// background
	this.gene_page_background = new lib.genepagebackground("synched",0);
	this.gene_page_background.name = "gene_page_background";
	this.gene_page_background.setTransform(748.2,456.1,0.0007,0.0012,0,0,0,569.9,331.9);

	this.timeline.addTween(cjs.Tween.get(this.gene_page_background).wait(1).to({regX:703.1,regY:409.1,scaleX:1,scaleY:1,x:680.4,y:418.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-119.5,1426.7,1218.4);


(lib.epcam_movieclip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.previous_page.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(9);
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_female_description.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_male.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_male_description.play();
		});
	}
	this.frame_8 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_female.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_colorectal_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.EPCAM_FEM_COLORECTAL_P.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_female_endometrial_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_fem_endo_p.play();
		});
	}
	this.frame_15 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1_1_male_button.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_male_colorectal_b.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_male_colorectal_p.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(7).call(this.frame_15).wait(1));

	// female
	this.epcam_female_description = new lib.epcam_female_description();
	this.epcam_female_description.name = "epcam_female_description";
	this.epcam_female_description.setTransform(649.6,433,1,1,0,0,0,267,294);
	this.epcam_female_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.epcam_female_description).wait(1).to({_off:false},0).wait(15));

	// male
	this.epcam_male_description = new lib.epcam_male_description();
	this.epcam_male_description.name = "epcam_male_description";
	this.epcam_male_description.setTransform(649.6,433,1,1,0,0,0,267,294);
	this.epcam_male_description._off = true;

	this.timeline.addTween(cjs.Tween.get(this.epcam_male_description).wait(1).to({_off:false},0).wait(15));

	// title
	this.instance = new lib.epcambutton();
	this.instance.setTransform(684.9,560.2,1,1,0,0,0,278.9,106.2);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:279,scaleX:0.9754,scaleY:0.9754,x:741.35,y:502.4},0).wait(1).to({scaleX:0.9508,scaleY:0.9508,x:797.65,y:444.6},0).wait(1).to({scaleX:0.9262,scaleY:0.9262,x:854.05,y:386.75},0).wait(1).to({scaleX:0.9016,scaleY:0.9016,x:910.4,y:329},0).wait(1).to({scaleX:0.877,scaleY:0.877,x:966.75,y:271.2},0).wait(1).to({scaleX:0.8525,scaleY:0.8525,x:1023.15,y:213.4},0).wait(1).to({scaleX:0.8279,scaleY:0.8279,x:1079.45,y:155.55},0).wait(1).to({scaleX:1,scaleY:1,x:685,y:560.2},0).wait(1).to({scaleX:0.9654,scaleY:0.9654,x:615.85,y:492.1},0).wait(1).to({scaleX:0.9308,scaleY:0.9308,x:546.75,y:424},0).wait(1).to({scaleX:0.8962,scaleY:0.8962,x:477.65,y:355.9},0).wait(1).to({scaleX:0.8616,scaleY:0.8616,x:408.55,y:287.8},0).wait(1).to({scaleX:0.8271,scaleY:0.8271,x:339.45,y:219.7},0).wait(1).to({scaleX:0.7925,scaleY:0.7925,x:270.35,y:151.6},0).wait(1));

	// navigation
	this.previous_page = new lib.previouspage();
	this.previous_page.name = "previous_page";
	this.previous_page.setTransform(101.55,111.5,1,1,0,0,0,27.5,27.5);
	this.previous_page._off = true;
	new cjs.ButtonHelper(this.previous_page, 0, 1, 2, false, new lib.previouspage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous_page).wait(1).to({_off:false},0).to({_off:true},1).wait(14));

	// popup
	this.epcam_male_colorectal_p = new lib.epcam_male_colorectal();
	this.epcam_male_colorectal_p.name = "epcam_male_colorectal_p";
	this.epcam_male_colorectal_p.setTransform(345.55,488.65,1,1,0,0,0,259.4,160.2);
	this.epcam_male_colorectal_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.epcam_male_colorectal_p).wait(15).to({_off:false},0).wait(1));

	// colorectal
	this.msh2_male_colorectal_b = new lib.mlh1femcolon_1();
	this.msh2_male_colorectal_b.name = "msh2_male_colorectal_b";
	this.msh2_male_colorectal_b.setTransform(856.25,474.1,1,1,0,0,0,93.5,88.2);
	this.msh2_male_colorectal_b.alpha = 0;
	this.msh2_male_colorectal_b._off = true;
	new cjs.ButtonHelper(this.msh2_male_colorectal_b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.msh2_male_colorectal_b).wait(12).to({_off:false},0).wait(1).to({regX:97.2,regY:85.1,x:854.05,y:479.85,alpha:0.3333},0).wait(1).to({x:848.2,y:488.75,alpha:0.6667},0).wait(1).to({x:842.35,y:497.65,alpha:1},0).wait(1));

	// male_body
	this.mlh1_male = new lib.mlh1male();
	this.mlh1_male.name = "mlh1_male";
	this.mlh1_male.setTransform(1002.55,507.4,1,1,0,0,0,216.6,507.4);
	this.mlh1_male._off = true;
	new cjs.ButtonHelper(this.mlh1_male, 0, 1, 2, false, new lib.mlh1male(), 3);

	this.mlh1_1_male_button = new lib.mlh11malebutton();
	this.mlh1_1_male_button.name = "mlh1_1_male_button";
	this.mlh1_1_male_button.setTransform(991.5,499.4,1,1,0,0,0,218.6,467.4);
	this.mlh1_1_male_button._off = true;
	new cjs.ButtonHelper(this.mlh1_1_male_button, 0, 1, 2, false, new lib.mlh11malebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_male).wait(1).to({_off:false},0).wait(2).to({regX:215.4,scaleX:0.9382,scaleY:0.9382,x:1024.75,y:507.35,alpha:0.7567},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,x:1048.15,y:507.4,alpha:0.5133},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1071.55,y:507.35,alpha:0.27},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.mlh1_1_male_button).wait(9).to({_off:false},0).wait(1).to({regX:224.1,scaleX:1.0629,scaleY:1.0557,x:985.3},0).wait(1).to({scaleX:1.1257,scaleY:1.1114,x:973.6,y:499.45},0).wait(1).to({scaleX:1.1886,scaleY:1.1671,x:961.95},0).wait(1).to({scaleX:1.2514,scaleY:1.2228,x:950.3,y:499.5},0).wait(1).to({scaleX:1.3143,scaleY:1.2785,x:938.6,y:499.55},0).wait(1).to({scaleX:1.3771,scaleY:1.3342,x:926.95,y:499.5},0).wait(1));

	// endometrium_popup
	this.epcam_fem_endo_p = new lib.epcam_fem_endo_p();
	this.epcam_fem_endo_p.name = "epcam_fem_endo_p";
	this.epcam_fem_endo_p.setTransform(987.45,489.7,1,1,0,0,0,304.4,167.2);
	this.epcam_fem_endo_p._off = true;

	this.timeline.addTween(cjs.Tween.get(this.epcam_fem_endo_p).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// endometrial
	this.mlh1_female_endometrial_button = new lib.mlh1uterus();
	this.mlh1_female_endometrial_button.name = "mlh1_female_endometrial_button";
	this.mlh1_female_endometrial_button.setTransform(434.5,645.2,1,1,0,0,0,92.5,57.2);
	this.mlh1_female_endometrial_button.alpha = 0;
	this.mlh1_female_endometrial_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_endometrial_button, 0, 1, 2, false, new lib.mlh1uterus(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_endometrial_button).wait(5).to({_off:false},0).wait(1).to({regX:92.6,regY:62.1,scaleX:0.9601,scaleY:0.9601,x:433.9,y:657.85,alpha:0.3333},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:433.25,y:665.7,alpha:0.6667},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,x:432.55,y:673.45,alpha:1},0).to({_off:true},1).wait(7));

	// colorectal_popup
	this.EPCAM_FEM_COLORECTAL_P = new lib.epcam_fem_colorectal_p();
	this.EPCAM_FEM_COLORECTAL_P.name = "EPCAM_FEM_COLORECTAL_P";
	this.EPCAM_FEM_COLORECTAL_P.setTransform(1001.45,488.7,1,1,0,0,0,292.4,152.2);
	this.EPCAM_FEM_COLORECTAL_P._off = true;

	this.timeline.addTween(cjs.Tween.get(this.EPCAM_FEM_COLORECTAL_P).wait(8).to({_off:false},0).to({_off:true},1).wait(7));

	// FEM_colorectal
	this.mlh1_female_colorectal_button = new lib.mlh1femcolon();
	this.mlh1_female_colorectal_button.name = "mlh1_female_colorectal_button";
	this.mlh1_female_colorectal_button.setTransform(420.55,464.75,1,1,0,0,0,93.5,88.2);
	this.mlh1_female_colorectal_button.alpha = 0;
	this.mlh1_female_colorectal_button._off = true;
	new cjs.ButtonHelper(this.mlh1_female_colorectal_button, 0, 1, 2, false, new lib.mlh1femcolon(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1_female_colorectal_button).wait(5).to({_off:false},0).wait(1).to({regX:97.2,regY:86.7,scaleX:0.9842,scaleY:0.9393,x:425.1,y:498.3,alpha:0.3333},0).wait(1).to({scaleX:0.9684,scaleY:0.8787,x:426.05,y:533.4,alpha:0.6667},0).wait(1).to({scaleX:0.9526,scaleY:0.818,x:426.95,y:568.45,alpha:1},0).to({_off:true},1).wait(7));

	// female_body
	this.mlh1_female = new lib.mlh1female();
	this.mlh1_female.name = "mlh1_female";
	this.mlh1_female.setTransform(348.9,437.6,1,1,0,0,0,291.2,437.6);
	new cjs.ButtonHelper(this.mlh1_female, 0, 1, 2, false, new lib.mlh1female(), 3);

	this.msh2_female = new lib.mlh1femaleorganback();
	this.msh2_female.name = "msh2_female";
	this.msh2_female.setTransform(337.35,430.45,1.0006,0.9302,0,0,0,305.4,460.3);
	this.msh2_female._off = true;
	new cjs.ButtonHelper(this.msh2_female, 0, 1, 2, false, new lib.mlh1femaleorganback(), 3);

	this.instance_1 = new lib.mlh12femalegraphic("synched",0);
	this.instance_1.setTransform(346.2,445.6,1,1,0,0,0,325.2,443.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mlh1_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.msh2_female}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.msh2_female).wait(2).to({_off:false},0).wait(1).to({regX:311.6,regY:460.8,scaleX:1.0733,scaleY:0.9809,x:375.8,y:427},0).wait(1).to({scaleX:1.1461,scaleY:1.0316,x:408.15,y:423.05},0).wait(1).to({scaleX:1.2188,scaleY:1.0824,x:440.45,y:419.15},0).wait(3).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regX:325.3,scaleX:0.9826,scaleY:0.9826,x:330.1,y:455.5,alpha:0.8333},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:313.95,y:465.4,alpha:0.6667},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:297.7,y:475.35,alpha:0.5},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:281.5,y:485.3,alpha:0.3333},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:265.3,y:495.2,alpha:0.1667},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:249.1,y:505.15,alpha:0},0).wait(1));

	// Layer_1
	this.instance_2 = new lib.epcam_background("synched",0);
	this.instance_2.setTransform(0.5,0.5,0.0007,0.0012,0,0,0,614.4,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:682.2,regY:418.1,scaleX:1,scaleY:1,x:682.2,y:458.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-119.5,1406.6000000000001,1218.4);


(lib.basicinfopage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {mlh1:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q1_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q1_answer.play();
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.homepage.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('homepage');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.mlh1.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mlh1_movieclip.play();
		});
		
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q2_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q2_answer.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q3_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q3_answer.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.q4_question.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.q4_answer.play();
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh2_button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh2_movieclip.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.msh6_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.msh6_movieclip.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.pms2_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.pms2_movieclip.play();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.epcam_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.epcam_movieclip.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// epcam
	this.epcam_movieclip = new lib.epcam_movieclip();
	this.epcam_movieclip.name = "epcam_movieclip";
	this.epcam_movieclip.setTransform(642.1,364.1,1,1,0,0,0,682.1,418.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#578EC4").ss(1,1,1).p("EhqlhBUMDVLAAAMAAACCpMjVLAAAg");
	this.shape.setTransform(642.175,364.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.epcam_movieclip}]},1).wait(1));

	// PMS2
	this.pms2_movieclip = new lib.PMS2_movieclip();
	this.pms2_movieclip.name = "pms2_movieclip";
	this.pms2_movieclip.setTransform(654.1,374.1,1,1,0,0,0,700.1,418.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#578EC4").ss(1,1,1).p("EhtZhBUMDazAAAMAAACCpMjazAAAg");
	this.shape_1.setTransform(660.175,364.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.pms2_movieclip}]},1).wait(1));

	// MSH6
	this.msh6_movieclip = new lib.msh6_movieclip();
	this.msh6_movieclip.name = "msh6_movieclip";
	this.msh6_movieclip.setTransform(12.9,-4.9);
	this.msh6_movieclip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.msh6_movieclip).wait(1).to({_off:false},0).wait(1));

	// msh2
	this.instance = new lib.msh2background_1();
	this.instance.setTransform(295.1,169.6,1,1,0,0,0,348.1,201.6);

	this.msh2_movieclip = new lib.msh2background_1();
	this.msh2_movieclip.name = "msh2_movieclip";
	this.msh2_movieclip.setTransform(-40,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.msh2_movieclip},{t:this.instance}]},1).wait(1));

	// mlh1
	this.mlh1_movieclip = new lib.mlh1_movieclip();
	this.mlh1_movieclip.name = "mlh1_movieclip";
	this.mlh1_movieclip.setTransform(649.15,381.1,1,1,0,0,0,703.1,409.1);
	this.mlh1_movieclip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mlh1_movieclip).wait(1).to({_off:false},0).wait(1));

	// q4_answer
	this.q4_answer = new lib.q4answer();
	this.q4_answer.name = "q4_answer";
	this.q4_answer.setTransform(638.9,358.45,1,1,0,0,0,246.4,262.4);
	this.q4_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q4_answer).wait(1).to({_off:false},0).wait(1));

	// q3_answer
	this.q3_answer = new lib.q3_answer();
	this.q3_answer.name = "q3_answer";
	this.q3_answer.setTransform(636.5,400.45,1,1,0,0,0,246.4,262.4);
	this.q3_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q3_answer).wait(1).to({_off:false},0).wait(1));

	// q2_answer
	this.q2_answer = new lib.q2answer();
	this.q2_answer.name = "q2_answer";
	this.q2_answer.setTransform(638.9,374.3,1,1,0,0,0,246.4,262.4);
	this.q2_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q2_answer).wait(1).to({_off:false},0).wait(1));

	// q1_answer
	this.q1_answer = new lib.q1answer();
	this.q1_answer.name = "q1_answer";
	this.q1_answer.setTransform(652.8,364.8,1,1,0,0,0,246.4,262.4);
	this.q1_answer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q1_answer).wait(1).to({_off:false},0).wait(1));

	// epcam
	this.epcam_btn = new lib.EPCA();
	this.epcam_btn.name = "epcam_btn";
	this.epcam_btn.setTransform(993.35,640.25,1,1,0,0,0,52,25.4);
	this.epcam_btn._off = true;
	new cjs.ButtonHelper(this.epcam_btn, 0, 1, 2, false, new lib.EPCA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.epcam_btn).wait(1).to({_off:false},0).wait(1));

	// PMS2
	this.pms2_btn = new lib.PMS2();
	this.pms2_btn.name = "pms2_btn";
	this.pms2_btn.setTransform(823.9,640.25,1,1,0,0,0,63.4,25.4);
	this.pms2_btn._off = true;
	new cjs.ButtonHelper(this.pms2_btn, 0, 1, 2, false, new lib.PMS2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pms2_btn).wait(1).to({_off:false},0).wait(1));

	// MSH6
	this.msh6_btn = new lib.MSH6();
	this.msh6_btn.name = "msh6_btn";
	this.msh6_btn.setTransform(827.4,641.05,1,1,0,0,0,60.1,25.4);
	this.msh6_btn._off = true;
	new cjs.ButtonHelper(this.msh6_btn, 0, 1, 2, false, new lib.MSH6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh6_btn).wait(1).to({_off:false},0).wait(1));

	// MSH2
	this.msh2_button = new lib.MSH2();
	this.msh2_button.name = "msh2_button";
	this.msh2_button.setTransform(695.1,640.25,1,1,0,0,0,52,25.4);
	this.msh2_button._off = true;
	new cjs.ButtonHelper(this.msh2_button, 0, 1, 2, false, new lib.MSH2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.msh2_button).wait(1).to({_off:false},0).wait(1));

	// MLH1
	this.mlh1 = new lib.MLH1();
	this.mlh1.name = "mlh1";
	this.mlh1.setTransform(578.15,638.95,1,1,0,0,0,53,26.1);
	this.mlh1._off = true;
	new cjs.ButtonHelper(this.mlh1, 0, 1, 2, false, new lib.MLH1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mlh1).wait(1).to({_off:false},0).wait(1));

	// text
	this.textField_6 = new cjs.Text("Find out more about the Lynch syndrome genes and the risk associated to their mutations", "37px 'Helvetica'", "#333333");
	this.textField_6.name = "textField_6";
	this.textField_6.lineHeight = 42;
	this.textField_6.lineWidth = 1158;
	this.textField_6.parent = this;
	this.textField_6.setTransform(50.25,571.1);
	this.textField_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.textField_6).wait(1).to({_off:false},0).wait(1));

	// q4
	this.q4_question = new lib.q4();
	this.q4_question.name = "q4_question";
	this.q4_question.setTransform(422.85,520.75,1,1,0,0,0,392.6,29.9);
	this.q4_question._off = true;
	new cjs.ButtonHelper(this.q4_question, 0, 1, 2, false, new lib.q4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q4_question).wait(1).to({_off:false},0).wait(1));

	// Q3
	this.q3_question = new lib.q3();
	this.q3_question.name = "q3_question";
	this.q3_question.setTransform(447.15,465.8,1,1,0,0,0,416.9,30.9);
	this.q3_question._off = true;
	new cjs.ButtonHelper(this.q3_question, 0, 1, 2, false, new lib.q3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q3_question).wait(1).to({_off:false},0).wait(1));

	// q2
	this.q2_question = new lib.q2();
	this.q2_question.name = "q2_question";
	this.q2_question.setTransform(507.95,408.4,1,1,0,0,0,477.7,33.6);
	this.q2_question._off = true;
	new cjs.ButtonHelper(this.q2_question, 0, 1, 2, false, new lib.q2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q2_question).wait(1).to({_off:false},0).wait(1));

	// q1
	this.q1_question = new lib.q1();
	this.q1_question.name = "q1_question";
	this.q1_question.setTransform(632.7,377.95,1,1,0,0,0,604.3,43.9);
	this.q1_question._off = true;
	new cjs.ButtonHelper(this.q1_question, 0, 1, 2, false, new lib.q1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q1_question).wait(1).to({_off:false},0).wait(1));

	// back_button
	this.homepage = new lib.basicinfobackbutton();
	this.homepage.name = "homepage";
	this.homepage.setTransform(302.05,190.05,1.2532,1.2532);
	this.homepage._off = true;
	new cjs.ButtonHelper(this.homepage, 0, 1, 2, false, new lib.basicinfobackbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.homepage).wait(1).to({_off:false},0).wait(1));

	// caption
	this.instance_1 = new lib.basicinfopagecaptionfinal();
	this.instance_1.setTransform(0,0,1,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// white_background
	this.instance_2 = new lib.whitebackground("synched",0);
	this.instance_2.setTransform(640.2,362.1,0.0007,0.0012,0,0,0,0,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:728.2,regY:419.1,scaleX:1,scaleY:1,x:642.3,y:388.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-55,1456.4,862.2);


// stage content:
(lib.lynch02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {homepage:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.what_homepage.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.basic_info_page.play();
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.where_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.wherepage_movieclip.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// where
	this.wherepage_movieclip = new lib.wherepage_movieclip();
	this.wherepage_movieclip.name = "wherepage_movieclip";
	this.wherepage_movieclip.setTransform(645.15,469.1,1,1,0,0,0,709.1,511.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhuzhP2MDdnAAAMAAACftMjdnAAAg");
	this.shape.setTransform(645.2,469.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.wherepage_movieclip}]}).wait(1));

	// _
	this.basic_info_page = new lib.basicinfopage();
	this.basic_info_page.name = "basic_info_page";
	this.basic_info_page.setTransform(640,135,1,1,0,0,0,640,144);

	this.timeline.addTween(cjs.Tween.get(this.basic_info_page).wait(1));

	// logo
	this.instance = new lib.surelogo("synched",0);
	this.instance.setTransform(256.95,60.95,1,1,0,0,0,84.5,41.5);

	this.instance_1 = new lib.universitylogo("synched",0);
	this.instance_1.setTransform(118.1,58.05,1,1,0,0,0,109.7,44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// about
	this.instance_2 = new lib.aboutpagebutton();
	this.instance_2.setTransform(922.3,632.55,0.872,0.8367,0,0,0,133.1,36.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.aboutpagebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// where_button
	this.where_btn = new lib.where();
	this.where_btn.name = "where_btn";
	this.where_btn.setTransform(574.25,635.85,0.8768,0.7129,0,0,0,146.1,49.1);
	new cjs.ButtonHelper(this.where_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.where_btn).wait(1));

	// what_button
	this.what_homepage = new lib.what();
	this.what_homepage.name = "what_homepage";
	this.what_homepage.setTransform(215.9,637.55,1,1,0,0,0,113.5,36.7);
	new cjs.ButtonHelper(this.what_homepage, 0, 1, 2, false, new lib.what(), 3);

	this.timeline.addTween(cjs.Tween.get(this.what_homepage).wait(1));

	// caption
	this.instance_3 = new lib.homepagecaption();
	this.instance_3.setTransform(516.9,314.8,1,1,0,0,0,389.9,180.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(575.1,317,1053,776.7);
// library properties:
lib.properties = {
	id: '6CF5E040F16840128050EBA71FF14D2B',
	width: 1280,
	height: 720,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bluedark.png?1663802476186", id:"bluedark"},
		{src:"images/bluelight.png?1663802476186", id:"bluelight"},
		{src:"images/colon.png?1663802476186", id:"colon"},
		{src:"images/_double.png?1663802476186", id:"_double"},
		{src:"images/epcamtitle.png?1663802476186", id:"epcamtitle"},
		{src:"images/femalebody.png?1663802476186", id:"femalebody"},
		{src:"images/mlh1.png?1663802476186", id:"mlh1"},
		{src:"images/msh2caption.png?1663802476186", id:"msh2caption"},
		{src:"images/ovaries.png?1663802476186", id:"ovaries"},
		{src:"images/PMS2TITLE.png?1663802476186", id:"PMS2TITLE"},
		{src:"images/wholegut.png?1663802476186", id:"wholegut"},
		{src:"images/图层2.png?1663802476186", id:"图层2"},
		{src:"images/lynch 02_atlas_1.png?1663802475631", id:"lynch 02_atlas_1"},
		{src:"images/lynch 02_atlas_2.png?1663802475631", id:"lynch 02_atlas_2"},
		{src:"images/lynch 02_atlas_3.png?1663802475631", id:"lynch 02_atlas_3"},
		{src:"images/lynch 02_atlas_4.png?1663802475631", id:"lynch 02_atlas_4"},
		{src:"images/lynch 02_atlas_5.png?1663802475631", id:"lynch 02_atlas_5"},
		{src:"images/lynch 02_atlas_6.png?1663802475631", id:"lynch 02_atlas_6"},
		{src:"images/lynch 02_atlas_7.png?1663802475631", id:"lynch 02_atlas_7"},
		{src:"images/lynch 02_atlas_8.png?1663802475631", id:"lynch 02_atlas_8"},
		{src:"images/lynch 02_atlas_9.png?1663802475631", id:"lynch 02_atlas_9"},
		{src:"images/lynch 02_atlas_10.png?1663802475631", id:"lynch 02_atlas_10"},
		{src:"images/lynch 02_atlas_11.png?1663802475632", id:"lynch 02_atlas_11"},
		{src:"images/lynch 02_atlas_12.png?1663802475632", id:"lynch 02_atlas_12"},
		{src:"images/lynch 02_atlas_13.png?1663802475632", id:"lynch 02_atlas_13"},
		{src:"images/lynch 02_atlas_14.png?1663802475632", id:"lynch 02_atlas_14"},
		{src:"images/lynch 02_atlas_15.png?1663802475632", id:"lynch 02_atlas_15"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6CF5E040F16840128050EBA71FF14D2B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;