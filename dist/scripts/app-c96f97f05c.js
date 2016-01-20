/******/!function(e){function t(i){if(s[i])return s[i].exports;var a=s[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}// webpackBootstrap
/******/
var s={};return t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){"use strict";var i=s(1),a=s(2),r=s(3),o=s(4),n=s(5),c=s(6),l=s(7);angular.module("lockTheClockWebApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngRoute","720kb.socialshare"]).constant("moment",moment).config(i.config).config(a.routerConfig).run(r.runBlock).controller("MainController",o.MainController).controller("SprintController",n.SprintController).controller("ScoreController",c.ScoreController).directive("gameTimer",l.gameTimerDirective).value("appData",{}),function(e){var t=/iphone|ipad/i.test(navigator.userAgent);e.fn.nodoubletapzoom=function(){t&&e(this).bind("touchstart",function(t){var s=t.timeStamp,i=e(this).data("lastTouch")||s,a=s-i,r=t.originalEvent.touches.length;e(this).data("lastTouch",s),!a||a>500||r>1||(t.preventDefault(),e(this).trigger("click").trigger("click"))})}}(jQuery),$("body").nodoubletapzoom()},function(e,t){"use strict";function s(e){"ngInject";e.debugEnabled(!0)}s.$inject=["$logProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=s},function(e,t){"use strict";function s(e,t){"ngInject";e.html5Mode({enabled:!1,requireBase:!1}),t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/sprint",{templateUrl:"app/sprint/sprint.html",controller:"SprintController",controllerAs:"sprint"}).when("/score",{templateUrl:"app/score/score.html",controller:"ScoreController",controllerAs:"score"}).otherwise({redirectTo:"/"})}s.$inject=["$locationProvider","$routeProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=s},function(e,t){"use strict";function s(e){"ngInject";e.debug("runBlock end")}s.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=s},function(e,t){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function a(){"ngInject";s(this,a)};t.MainController=i},function(e,t){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}}(),a=void 0,r=function(){function e(t,i,r){"ngInject";s(this,e),a=i,this.result=r.result={score:"99:99"},this.game=t.game={checkState:"",target:"01:00"},this.timers=t.timers={stopwatch:2,score:2},this.states={start:1,stop:2,reset:0},this.started=!1,this.stopped=!1,this.currentTime=0,this.times=[{value:1,complete:!1},{value:2,complete:!1},{value:3,complete:!1},{value:4,complete:!1},{value:5,complete:!1}]}return e.$inject=["$scope","$location","$rootScope"],i(e,[{key:"push",value:function(){return this.started?this.stopped?(this.timers.stopwatch=this.states.reset,this.stopped=!1,void this.setState("")):(this.timers.stopwatch=this.states.stop,this.stopped=!0,this.checkScore(),!1):(this.timers.stopwatch=this.states.start,this.timers.score=this.states.start,this.started=!0,!1)}},{key:"checkScore",value:function(){var e=angular.element(".stopwatch .game-timer").text();if(e===this.game.target){if(this.times[this.currentTime].complete=!0,this.setState("success"),this.currentTime++,angular.element("#success-sound")[0].currentTime=0,angular.element("#success-sound")[0].play(),this.currentTime===this.times.length)return this.finish(),!0}else this.setState("fail")}},{key:"finish",value:function(){this.timers.score=this.states.stop,this.result.score=angular.element(".score .game-timer").text(),a.path("/score")}},{key:"setState",value:function(e){this.game.checkState=e}}]),e}();t.SprintController=r},function(e,t){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function a(){"ngInject";s(this,a)};t.ScoreController=i},function(e,t){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){"ngInject";function s(s,a,r){function o(){a.html(t().hour(0).minute(0).second(0).millisecond(p).format(m)),p+=h}function n(){return angular.isDefined(u)?!1:void(u=e(o,h))}function c(){angular.isDefined(u)&&(e.cancel(u),u=void 0,a.html()===i.template&&l())}function l(){p=parseInt(r.initialMs,10)||0,o()}var u,p=parseInt(r.initialMs,10)||0,m=r.format||"ss:SS",h=100,d={start:1,stop:2,reset:0};n(),s.$watch("gameTimer.state",function(e,t){switch(e){case d.start:n();break;case d.stop:c();break;case d.reset:l(),s.gameTimer.state=1===t?2:1}}),a.on("$destroy",function(){e.cancel(u)})}var i={restrict:"AE",scope:{state:"="},template:"&nbsp;",link:s,controller:a,controllerAs:"gameTimer",bindToController:!0};return i}i.$inject=["$interval","moment"],Object.defineProperty(t,"__esModule",{value:!0}),t.gameTimerDirective=i;var a=function r(){"ngInject";s(this,r)}}]),angular.module("lockTheClockWebApp").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="stage main"><a ng-href="#/sprint" class="main__desciption"><img src="./assets/images/gameicon.png"><p>STOP THE STOPWATCH<br>ON 1:00 SECOND</p><p>HOW FAST CAN YOU HIT<br>1:00 FIVE TIMES. IT\'S A SPRINT!</p></a></div><div class="bg"></div>'),e.put("app/score/score.html",'<div class="stage results"><div class="container"><div class="results__message">CHALLENGE A FRIEND</div><div class="results__shares"><div class="share-icon"></div><a class="facebook-icon" socialshare="" socialshare-provider="facebook" socialshare-type="feed" socialshare-display="popup" socialshare-via="1660751244192488" socialshare-redirect-uri="http://a1essar.ru" socialshare-url="http://google.com" socialshare-text="can you beat my time: {{$root.result.score}}" socialshare-caption="Lock The Clock" socialshare-description=""></a> <a class="gp-icon" socialshare="" socialshare-provider="google+" socialshare-url="http://google.com" socialshare-text="can you beat my time: {{$root.result.score}}" socialshare-caption="Lock The Clock" socialshare-description="text"></a></div><div class="results__score">YOUR TIME:<br>{{$root.result.score}}</div><a class="pushbutton results_pushbutton" ng-href="#/sprint"></a><div class="stores"><a class="appstore-icon" href="#" target="_blank"></a> <a class="googleplay-icon" href="https://play.google.com/store/apps/details?id=com.cage.rumble&hl=en" target="_blank"></a></div></div></div><div class="bg"></div>'),e.put("app/sprint/sprint.html",'<div class="stage sprint" ng-class="game.checkState"><div class="container"><div class="score"><div class="game-timer" game-timer="" state="timers.score" data-initial-ms="0" data-format="<i>mm</i>:<i>ss</i>"></div></div><div class="message success" ng-show="game.checkState == \'success\'">GREAT SHOT</div><div class="message fail" ng-show="game.checkState == \'fail\'">TRY AGAIN</div><div class="sprint__times"><span class="sprint__time" ng-repeat="time in sprint.times" ng-class="{complete: time.complete}">{{time.value}}</span></div><div class="stopwatch"><div class="game-timer" game-timer="" state="timers.stopwatch" data-initial-ms="0" data-format="<i>ss</i>:<i>SS</i>"></div></div><div class="pushbutton" ng-click="sprint.push()"></div><div class="target">target: 1:00</div><div class="stores"><a href="#" target="_blank" class="appstore-icon"></a> <a href="https://play.google.com/store/apps/details?id=com.cage.rumble&hl=en" target="_blank" class="googleplay-icon"></a></div></div></div><div class="bg"></div>'),e.put("app/components/game-timer/game-timer.html","")}]);
//# sourceMappingURL=../maps/scripts/app-c96f97f05c.js.map
