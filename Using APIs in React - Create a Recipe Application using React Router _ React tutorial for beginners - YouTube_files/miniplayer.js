(function(g){var window=this;var x5=function(a){g.dD.call(this,{C:"div",G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.cJ);this.K(a,"onStateChange",this.aM)},y5=function(a){g.TK.call(this,a);
this.g=new x5(this.player);this.g.hide();g.FK(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(x5,g.dD);g.h=x5.prototype;
g.h.show=function(){this.l=new g.qo(this.vF,null,this);this.l.start();if(!this.H){this.D=new g.mW(this.player,this);g.I(this,this.D);g.FK(this.player,this.D.element,4);this.D.A=.6;this.O=new g.qV(this.player);g.I(this,this.O);this.B=new g.V({C:"div",G:"ytp-miniplayer-scrim"});g.I(this,this.B);this.B.g(this.element);this.K(this.B.element,"click",this.Jy);var a=new g.V({C:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},J:[g.LP()]});g.I(this,a);a.g(this.B.element);this.K(a.element,
"click",this.ix);this.u=new g.V({C:"div",G:"ytp-miniplayer-controls"});g.I(this,this.u);this.u.g(this.B.element);this.K(this.u.element,"click",this.Jy);var b=new g.V({C:"div",G:"ytp-miniplayer-button-container"});g.I(this,b);b.g(this.u.element);a=new g.V({C:"div",G:"ytp-miniplayer-play-button-container"});g.I(this,a);a.g(this.u.element);var c=new g.V({C:"div",G:"ytp-miniplayer-button-container"});g.I(this,c);c.g(this.u.element);this.M=new g.sT(this.player,this,!1);g.I(this,this.M);this.M.g(b.element);
b=new g.pT(this.player,this);g.I(this,b);b.g(a.element);this.I=new g.sT(this.player,this,!0);g.I(this,this.I);this.I.g(c.element);this.F=new g.LU(this.player,this);g.I(this,this.F);this.F.g(this.B.element);this.A=new g.yT(this.player,this);g.I(this,this.A);g.FK(this.player,this.A.element,4);this.o=new g.V({C:"div",G:"ytp-miniplayer-buttons"});g.I(this,this.o);g.FK(this.player,this.o.element,4);this.o.hide();a=new g.V({C:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},
J:[g.LP()]});g.I(this,a);a.g(this.o.element);this.K(a.element,"click",this.ix);a=new g.V({C:"button",W:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"Close"},J:[g.YP()]});g.I(this,a);a.g(this.o.element);this.K(a.element,"click",this.cK);this.K(this.player,"presentingplayerstatechange",this.wF);this.K(this.player,"appresize",this.ib);this.K(this.player,"fullscreentoggled",this.ib);this.ib();this.H=!0}0!=this.player.getPlayerState()&&g.dD.prototype.show.call(this);this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.dD.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.T=function(){this.l&&(this.l.dispose(),this.l=void 0);g.dD.prototype.T.call(this)};
g.h.ix=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.cK=function(){this.player.playVideo()};
g.h.Jy=function(a){if(a.target==this.B.element||a.target==this.u.element)g.R(g.X(this.player).experiments,"kevlar_miniplayer_scrim_pause")?2==this.player.getPlayerState()?this.player.playVideo():this.player.pauseVideo():this.player.ma("onExpandMiniplayer")};
g.h.cJ=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g);this.player.app.F.g&&0==this.player.getPlayerState()?this.o.show():this.o.hide()};
g.h.vF=function(){this.A.qd();this.F.qd();this.l&&this.l.start()};
g.h.wF=function(a){g.T(a.state,32)&&this.D.hide()};
g.h.ib=function(){var a=this.A,b=g.qK(this.player).getPlayerSize().width;a.Oa=0;a.A=b;a.D=!1;g.AT(a)};
g.h.aM=function(a){this.player.app.F.g&&(0==a?(this.hide(),this.o.show()):(this.show(),this.o.hide()))};
g.h.fb=function(){return this.D};
g.h.Ac=function(){return!1};
g.h.pg=function(){return!1};
g.h.Zh=function(){return!1};
g.h.Uz=function(){};
g.h.ij=function(){};
g.h.Ol=function(){};
g.h.Rm=function(){return null};
g.h.Qq=function(){return new g.qh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.pn=function(a,b,c,d,e){var f=0,k=d=0,l=g.Xh(a);if(b){c=g.io(b,"ytp-prev-button")||g.io(b,"ytp-next-button");var m=g.io(b,"ytp-play-button");c?f=k=12:m&&(b=g.Sh(b,this.element),k=b.x,f=b.y-12)}else k=c-l.width/2,d=25+(e||0);b=g.qK(this.player).getPlayerSize().width;e=f+(e||0);k=g.qd(k,0,b-l.width);e?(a.style.top=e+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=k+"px"};
g.h.showControls=function(){};
g.h.Rq=function(){};
g.h.Mh=function(){};g.t(y5,g.TK);y5.prototype.init=function(){};
y5.prototype.load=function(){this.player.hideControls();this.g.show()};
y5.prototype.unload=function(){this.player.showControls();this.g.hide()};g.mV.miniplayer=y5;})(_yt_player);