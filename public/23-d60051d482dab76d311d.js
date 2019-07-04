(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.parseStartTime=function(e){return d(e,c)},t.parseEndTime=function(e){return d(e,f)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")},t.getSDK=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a.default;if(window[t]&&r(window[t]))return Promise.resolve(window[t]);return new Promise(function(r,a){if(h[e])h[e].push(r);else{h[e]=[r];var i=function(t){h[e].forEach(function(e){return e(t)})};if(n){var l=window[n];window[n]=function(){l&&l(),i(window[t])}}o(e,function(e){e&&a(e),n||i(window[t])})}})},t.getConfig=function(e,t,n){var r=(0,i.default)(t.config,e.config),o=!0,a=!1,u=void 0;try{for(var c,f=l.DEPRECATED_CONFIG_PROPS[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var p=c.value;if(e[p]){var y=p.replace(/Config$/,"");if(r=(0,i.default)(r,s({},y,e[p])),n){var d="ReactPlayer: %c"+p+" %cis deprecated, please use the config prop instead – https://github.com/CookPete/react-player#config-prop";console.warn(d,"font-weight: bold","")}}}}catch(h){a=!0,u=h}finally{try{!o&&f.return&&f.return()}finally{if(a)throw u}}return r},t.omit=function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=(t=[]).concat.apply(t,r),i={},l=Object.keys(e),u=!0,s=!1,c=void 0;try{for(var f,p=l[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var y=f.value;-1===a.indexOf(y)&&(i[y]=e[y])}}catch(d){s=!0,c=d}finally{try{!u&&p.return&&p.return()}finally{if(s)throw c}}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var n="ReactPlayer: "+this.constructor.displayName+" player could not call %c"+e+"%c – ";return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isObject=v,t.isEqual=function e(t,n){if("function"==typeof t&&"function"==typeof n)return!0;if(t instanceof Array&&n instanceof Array){if(t.length!==n.length)return!1;for(var r=0;r!==t.length;r++)if(!e(t[r],n[r]))return!1;return!0}if(v(t)&&v(n)){if(Object.keys(t).length!==Object.keys(n).length)return!1;var o=!0,a=!1,i=void 0;try{for(var l,u=Object.keys(t)[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value;if(!e(t[s],n[s]))return!1}}catch(c){a=!0,i=c}finally{try{!o&&u.return&&u.return()}finally{if(a)throw i}}return!0}return t===n},t.isMediaStream=function(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream};var a=u(n(421)),i=u(n(422)),l=n(247);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=/[?&#](?:start|t)=([0-9hms]+)/,f=/[?&#]end=([0-9hms]+)/,p=/(\d+)(h|m|s)/g,y=/^\d+$/;function d(e,t){var n=e.match(t);if(n){var r=n[1];if(r.match(p))return function(e){var t=0,n=p.exec(e);for(;null!==n;){var r=n,a=o(r,3),i=a[1],l=a[2];"h"===l&&(t+=60*parseInt(i,10)*60),"m"===l&&(t+=60*parseInt(i,10)),"s"===l&&(t+=parseInt(i,10)),n=p.exec(e)}return t}(r);if(y.test(r))return parseInt(r)}}var h={};function v(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))}},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEPRECATED_CONFIG_PROPS=t.defaultProps=t.propTypes=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};var i=a.default.string,l=a.default.bool,u=a.default.number,s=a.default.array,c=a.default.oneOfType,f=a.default.shape,p=a.default.object,y=a.default.func;t.propTypes={url:c([i,s,p]),playing:l,loop:l,controls:l,volume:u,muted:l,playbackRate:u,width:c([i,u]),height:c([i,u]),style:p,progressInterval:u,playsinline:l,pip:l,light:c([l,i]),wrapper:c([i,y,f({render:y.isRequired})]),config:f({soundcloud:f({options:p,preload:l}),youtube:f({playerVars:p,embedOptions:p,preload:l}),facebook:f({appId:i}),dailymotion:f({params:p,preload:l}),vimeo:f({playerOptions:p,preload:l}),file:f({attributes:p,tracks:s,forceVideo:l,forceAudio:l,forceHLS:l,forceDASH:l,hlsOptions:p,hlsVersion:i,dashVersion:i}),wistia:f({options:p}),mixcloud:f({options:p}),twitch:f({options:p})}),onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onProgress:y,onEnablePIP:y,onDisablePIP:y},t.defaultProps={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,light:!1,wrapper:"div",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},preload:!1},facebook:{appId:"1309697205772819"},dailymotion:{params:{api:1,"endscreen-enable":!1},preload:!1},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},preload:!1},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,hlsOptions:{},hlsVersion:"0.10.1",dashVersion:"2.9.2"},wistia:{options:{}},mixcloud:{options:{hide_cover:1}},twitch:{options:{}}},onReady:function(){},onStart:function(){},onPlay:function(){},onPause:function(){},onBuffer:function(){},onBufferEnd:function(){},onEnded:function(){},onError:function(){},onDuration:function(){},onSeek:function(){},onProgress:function(){},onEnablePIP:function(){},onDisablePIP:function(){}},t.DEPRECATED_CONFIG_PROPS=["soundcloudConfig","youtubeConfig","facebookConfig","dailymotionConfig","vimeoConfig","fileConfig","wistiaConfig"]},420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTube=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(0),l=c(i),u=n(246),s=c(n(423));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p="YT",y=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,d=/list=([a-zA-Z0-9_-]+)/;function h(e){if(d.test(e)){var t=e.match(d);return{listType:"playlist",list:a(t,2)[1]}}return{}}var v=t.YouTube=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.callPlayer=u.callPlayer,r.onStateChange=function(e){var t=e.data,n=r.props,o=n.onPlay,a=n.onPause,i=n.onBuffer,l=n.onBufferEnd,u=n.onEnded,s=n.onReady,c=n.loop,f=window[p].PlayerState,y=f.PLAYING,d=f.PAUSED,h=f.BUFFERING,v=f.ENDED,b=f.CUED;if(t===y&&(o(),l()),t===d&&a(),t===h&&i(),t===v){var g=!!r.callPlayer("getPlaylist");c&&!g&&r.play(),u()}t===b&&s()},r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unMute")},r.ref=function(e){r.container=e},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"load",value:function(e,t){var n=this,o=this.props,a=o.playing,i=o.muted,l=o.playsinline,s=o.controls,c=o.loop,f=o.config,v=o.onError,b=f.youtube,g=b.playerVars,m=b.embedOptions,P=e&&e.match(y)[1];if(t)return d.test(e)?void this.player.loadPlaylist(h(e)):void this.player.cueVideoById({videoId:P,startSeconds:(0,u.parseStartTime)(e)||g.start,endSeconds:(0,u.parseEndTime)(e)||g.end});(0,u.getSDK)("https://www.youtube.com/iframe_api",p,"onYouTubeIframeAPIReady",function(e){return e.loaded}).then(function(t){n.container&&(n.player=new t.Player(n.container,r({width:"100%",height:"100%",videoId:P,playerVars:r({autoplay:a?1:0,mute:i?1:0,controls:s?1:0,start:(0,u.parseStartTime)(e),end:(0,u.parseEndTime)(e),origin:window.location.origin,playsinline:l},h(e),g),events:{onReady:n.props.onReady,onStateChange:n.onStateChange,onError:function(e){return v(e.data)}}},m)),c&&n.player.setLoop(!0))},v)}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e),this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e=r({width:"100%",height:"100%"},this.props.style);return l.default.createElement("div",{style:e},l.default.createElement("div",{ref:this.ref}))}}]),t}();v.displayName="YouTube",v.canPlay=function(e){return y.test(e)},t.default=(0,s.default)(v)},421:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},422:function(e,t,n){e.exports=function(){"use strict";var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var n=Object.prototype.toString.call(e);return"[object RegExp]"===n||"[object Date]"===n||function(e){return e.$$typeof===t}(e)}(e)},t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function r(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function o(e,t,r){var o={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){o[t]=n(e[t],r)}),Object.keys(t).forEach(function(i){r.isMergeableObject(t[i])&&e[i]?o[i]=function(e,t){if(!t.customMerge)return a;var n=t.customMerge(e);return"function"==typeof n?n:a}(i,r)(e[i],t[i],r):o[i]=n(t[i],r)}),o}function a(t,a,i){(i=i||{}).arrayMerge=i.arrayMerge||r,i.isMergeableObject=i.isMergeableObject||e;var l=Array.isArray(a),u=Array.isArray(t),s=l===u;return s?l?i.arrayMerge(t,a,i):o(t,a,i):n(a,i)}return a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return a(e,n,t)},{})},a}()},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t,n;return n=t=function(t){function n(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),t=r,r.config=(0,u.getConfig)(r.props,l.defaultProps,!0),r.getDuration=function(){return r.player?r.player.getDuration():null},r.getCurrentTime=function(){return r.player?r.player.getCurrentTime():null},r.getSecondsLoaded=function(){return r.player?r.player.getSecondsLoaded():null},r.getInternalPlayer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null},r.seekTo=function(e,t){if(!r.player)return null;r.player.seekTo(e,t)},r.ref=function(e){r.player=e},f(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,u.isEqual)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.config=(0,u.getConfig)(e,l.defaultProps)}},{key:"render",value:function(){var t=this.config.file,n=t.forceVideo,o=t.forceAudio,a=t.forceHLS,c=t.forceDASH,f=n||o||a||c;if(!e.canPlay(this.props.url)&&!f)return null;var y=this.props,d=y.style,h=y.width,v=y.height,b=y.wrapper,g=(0,u.omit)(this.props,p,l.DEPRECATED_CONFIG_PROPS);return i.default.createElement(b,r({style:r({},d,{width:h,height:v})},g),i.default.createElement(s.default,r({},this.props,{ref:this.ref,activePlayer:e,config:this.config})))}}]),n}(a.Component),t.displayName=e.displayName+"Player",t.propTypes=l.propTypes,t.defaultProps=l.defaultProps,t.canPlay=e.canPlay,n};var a=n(0),i=c(a),l=n(247),u=n(246),s=c(n(424));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=Object.keys(l.propTypes)},424:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=(r=i)&&r.__esModule?r:{default:r},u=n(247),s=n(246);function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.mounted=!1,r.isReady=!1,r.isPlaying=!1,r.isLoading=!0,r.loadOnReady=null,r.startOnPlay=!0,r.seekOnPlay=null,r.onDurationCalled=!1,r.getInternalPlayer=function(e){return r.player?r.player[e]:null},r.progress=function(){if(r.props.url&&r.player&&r.isReady){var e=r.getCurrentTime()||0,t=r.getSecondsLoaded(),n=r.getDuration();if(n){var o={playedSeconds:e,played:e/n};null!==t&&(o.loadedSeconds=t,o.loaded=t/n),o.played===r.prevPlayed&&o.loaded===r.prevLoaded||r.props.onProgress(o),r.prevPlayed=o.played,r.prevLoaded=o.loaded}}r.progressTimeout=setTimeout(r.progress,r.props.progressFrequency||r.props.progressInterval)},r.onReady=function(){if(r.mounted){r.isReady=!0,r.isLoading=!1;var e=r.props,t=e.onReady,n=e.playing,o=e.volume,a=e.muted;t(),a||null===o||r.player.setVolume(o),r.loadOnReady?(r.player.load(r.loadOnReady,!0),r.loadOnReady=null):n&&r.player.play(),r.onDurationCheck()}},r.onPlay=function(){r.isPlaying=!0,r.isLoading=!1;var e=r.props,t=e.onStart,n=e.onPlay,o=e.playbackRate;r.startOnPlay&&(r.player.setPlaybackRate&&r.player.setPlaybackRate(o),t(),r.startOnPlay=!1),n(),r.seekOnPlay&&(r.seekTo(r.seekOnPlay),r.seekOnPlay=null),r.onDurationCheck()},r.onPause=function(e){r.isPlaying=!1,r.isLoading||r.props.onPause(e)},r.onEnded=function(){var e=r.props,t=e.activePlayer,n=e.loop,o=e.onEnded;t.loopOnEnded&&n&&r.seekTo(0),n||(r.isPlaying=!1,o())},r.onError=function(e){r.isLoading=!1,r.props.onError(e)},r.onDurationCheck=function(){clearTimeout(r.durationCheckTimeout);var e=r.getDuration();e?r.onDurationCalled||(r.props.onDuration(e),r.onDurationCalled=!0):r.durationCheckTimeout=setTimeout(r.onDurationCheck,100)},r.onLoaded=function(){r.isLoading=!1},r.ref=function(e){e&&(r.player=e)},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.player.load(this.props.url),this.progress()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.player.stop(),this.player.disablePIP&&this.player.disablePIP(),this.mounted=!1}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props,r=n.url,o=n.playing,a=n.volume,i=n.muted,l=n.playbackRate,u=n.pip,c=n.loop;if(!(0,s.isEqual)(r,e.url)){if(this.isLoading)return console.warn("ReactPlayer: the attempt to load "+e.url+" is being deferred until the player has loaded"),void(this.loadOnReady=e.url);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(e.url,this.isReady)}o||!e.playing||this.isPlaying||this.player.play(),o&&!e.playing&&this.isPlaying&&this.player.pause(),!u&&e.pip&&this.player.enablePIP?this.player.enablePIP():u&&!e.pip&&this.player.disablePIP&&this.player.disablePIP(),a!==e.volume&&null!==e.volume&&this.player.setVolume(e.volume),i!==e.muted&&(e.muted?this.player.mute():(this.player.unmute(),null!==e.volume&&setTimeout(function(){return t.player.setVolume(e.volume)}))),l!==e.playbackRate&&this.player.setPlaybackRate&&this.player.setPlaybackRate(e.playbackRate),c!==e.loop&&this.player.setLoop&&this.player.setLoop(e.loop)}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e,t){var n=this;if(!this.isReady&&0!==e)return this.seekOnPlay=e,void setTimeout(function(){n.seekOnPlay=null},5e3);if(t?"fraction"===t:e>0&&e<1){var r=this.player.getDuration();return r?void this.player.seekTo(r*e):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e)}},{key:"render",value:function(){var e=this.props.activePlayer;return e?l.default.createElement(e,o({},this.props,{ref:this.ref,onReady:this.onReady,onPlay:this.onPlay,onPause:this.onPause,onEnded:this.onEnded,onLoaded:this.onLoaded,onError:this.onError})):null}}]),t}();f.displayName="Player",f.propTypes=u.propTypes,f.defaultProps=u.defaultProps,t.default=f}}]);
//# sourceMappingURL=23-d60051d482dab76d311d.js.map