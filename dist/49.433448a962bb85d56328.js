(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[49],{1451:function(t,e,i){"use strict";i.r(e),i(1452);var s=window.soundcite;delete window.soundcite,e.default=s},1452:function(t,e,i){!function(t,e){var s={update_playing_element:function(t,e,i){var s="rgba("+i.r+", "+i.g+", "+i.b+", "+.2*i.a+")",n="rgba("+i.r+", "+i.g+", "+i.b+", "+.1*i.a+")";t.style.cssText+="background: -webkit-linear-gradient(left, "+s+e+"%, "+n+(e+.1)+"%);background: linear-gradient(to right, "+s+e+"%, "+n+(e+.1)+"%);"}};for(var n in t.SOUNDCITE_CONFIG)s[n]=t.SOUNDCITE_CONFIG[n];var o=t.soundcite={};/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?o.mobile=!0:o.mobile=!1;var a,d,l=e.head||e.getElementsByTagName("head").item(0)||e.documentElement.childNodes[0],r=[],u="none",h="none",p=[],c=[];function y(t){var i={r:0,g:0,b:0,a:1};if(e.defaultView&&e.defaultView.getComputedStyle){var s=e.defaultView.getComputedStyle(t,null);if(s){var n=s.getPropertyValue("color").toLowerCase(),o=n.match(/\s*rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/)||n.match(/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/);o?i={r:o[1]-0,g:o[2]-0,b:o[3]-0,a:void 0!==o[4]?o[4]-0:1}:(n=n.replace("#",""),i={r:parseInt(n.substring(0,2),16),g:parseInt(n.substring(2,4),16),b:parseInt(n.substring(4,6),16),a:1})}}return i}var g=function(t,e){var i=Array.prototype.slice,s=i.call(arguments,2);return function(){return t.apply(e,s.concat(i.call(arguments)))}};function f(i,s){var n,o=t.SC;if(u="loading",!o||!o.Dialog||function(t,e){for(var i=t.split("."),s=e.split("."),n=0;n<Math.min(i.length,s.length);n++){var o=parseInt(i[n])-parseInt(s[n]);if(o)return o}return i.length-s.length}(i,o._version)>0||s(o,u="loaded")){var a=e.createElement("script");a.type="text/javascript",a.src="//connect.soundcloud.com/sdk-2.0.0.js",a.onload=a.onreadystatechange=function(){"loading"!=u||(n=this.readyState)&&"loaded"!=n&&"complete"!=n||(s(t.SC,u="loaded"),l.removeChild(a))},l.appendChild(a)}}function _(t,e){for(var i=t.className,s=0,n=e.match(/\S+/g);s<n.length;s++)i=i.replace(new RegExp("(?:^|\\s)"+n[s]+"(?!\\S)"),"");t.className=i}function m(t,e){for(var i=t.className,s=0,n=e.match(/\S+/g);s<n.length;s++)i.match(new RegExp("(?:^|\\s)"+n[s]+"(?!\\S)"))||(i+=" "+n[s]);t.className=i}function b(t){this.el=t,this.start=t.hasAttribute("data-start")?t.getAttribute("data-start"):0,this.end=t.hasAttribute("data-end")?t.getAttribute("data-end"):null,this.plays=t.hasAttribute("data-plays")?parseInt(t.getAttribute("data-plays")):1,this.plays_left=this.plays,this.playing=!1,this.sound=null,this.click_handler_binded=g(this.click_handler,this),r.push(this)}function v(t){b.apply(this,Array.prototype.slice.call(arguments)),this.id=t.getAttribute("data-id"),"initialized"!==u&&(a.initialize({client_id:"5ba7fd66044a60db41a97cb9d924996a"}),u="initialized"),a.stream(this.id,g((function(t){this.destroyed?t._player.kill&&t._player.kill():(this.sound=t,this.sound._player.on("positionChange",g((function(t){this.track_progress(),this.playing&&(t<this.start&&this.sound.seek(this.start),t>=this.end&&(this.plays?(this.plays_left--,this.plays_left>0?this.play():this.stop()):this.play(),this.track_progress()),this.prevPos=t)}),this)),null===this.end&&(this.end=this.sound.getDuration()),this.sound_loaded())}),this))}function x(t){b.apply(this,Array.prototype.slice.call(arguments)),this.id="soundcite-audio-"+this.generateUUID(),this.url=t.getAttribute("data-url"),this.start=Math.floor(this.start/1e3),null!==this.end&&(this.end=Math.floor(this.end/1e3)),"initialized"!=h&&(o.audio_container=e.createElement("div"),m(o.audio_container,"soundcite-audio"),e.getElementsByTagName("body")[0].appendChild(o.audio_container),h="initialized"),this.audio=e.createElement("audio"),this.audio.id=this.id,this.audio.setAttribute("src",this.url),this.audio.setAttribute("preload","none"),o.mobile=!0,o.audio_container.appendChild(this.audio),this.sound=d("#"+this.id,{frameAnimation:!0}),this.sound.on("loadeddata",g((function(){null===this.end&&(this.end=this.sound.duration()),o.mobile||this.sound_loaded()}),this)),(o.mobile||this.sound.readyState()>1)&&this.sound_loaded()}b.prototype.generateUUID=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?i:3&i|8).toString(16)}))},b.prototype.sound_loaded=function(){this.el.addEventListener("click",this.click_handler_binded),_(this.el,"soundcite-initializing"),this.el.style.display="none",this.el.offsetHeight,this.el.style.display="",m(this.el,"soundcite-loaded soundcite-play")},b.prototype.pause=function(){_(this.el,"soundcite-pause"),m(this.el,"soundcite-play"),this.playing=!1,this.pause_sound()},b.prototype.stop=function(){_(this.el,"soundcite-pause"),m(this.el,"soundcite-play"),this.playing=!1,this.plays_left=this.plays,this.stop_sound()},b.prototype.track_progress=function(){var t=this.end-this.start,e=100*(this.sound_position()-this.start)/t;this.color||(this.color=y(this.el)),s.update_playing_element(this.el,e,this.color)},b.prototype.click_handler=function(t){t.preventDefault(),function(t){for(var e=0;e<r.length;e++)r[e].playing&&(t&&t.el===r[e].el||r[e].pause())}(this),this.playing?this.pause():this.play()},b.prototype.destroy=function(t){this.destroyed=!0,this.playing&&this.pause(),this.el&&_(this.el,"soundcite-loaded soundcite-initializing soundcite-loading soundcite-play soundcite-pause"),this.el&&this.el.removeEventListener("click",this.click_handler_binded)},v.prototype=Object.create(b.prototype),v.prototype.sound_position=function(){return this.sound.getCurrentPosition()},v.prototype.pause_sound=function(){this.sound.pause()},v.prototype.stop_sound=function(){this.sound.stop()},v.prototype.play=function(){var t=this.sound_position();(t<this.start||t>=this.end)&&this.sound.seek(this.start),_(this.el,"soundcite-play"),m(this.el,"soundcite-pause"),this.sound.play(),this.playing=!0,this.prevPos=-1},v.prototype.destroy=function(){this.sound&&this.sound._player.kill&&this.sound._player.kill(),b.prototype.destroy.apply(this,arguments)},x.prototype=Object.create(b.prototype),x.prototype.sound_position=function(){return this.sound.currentTime()},x.prototype.pause_sound=function(){this.sound.pause(),this.sound.off("timeupdate")},x.prototype.stop_sound=function(){this.sound.off("timeupdate"),this.sound.pause()},x.prototype._play_sound=function(){_(this.el,"soundcite-loading soundcite-play"),m(this.el,"soundcite-pause"),this.sound.play(),this.playing=!0,this.sound.on("timeupdate",g((function(){this.track_progress(),this.playing&&this.sound.currentTime()>=this.end&&(this.plays?(this.plays_left--,this.plays_left>0?this.play_sound():this.stop()):this.play_sound(),this.track_progress())}),this))},x.prototype.play_sound=function(){var t=this.sound.currentTime();t<this.start||t>=this.end?(this.sound.on("seeked",g((function(){this.sound.off("seeked"),this._play_sound()}),this)),this.sound.currentTime(this.start)):this._play_sound()},x.prototype.play=function(){/soundcite\-loading/.test(this.el.className)||(o.mobile?(_(this.el,"soundcite-play"),m(this.el,"soundcite-loading"),this.startedLoading?this.play_sound():(this.sound.on("canplaythrough",g((function(){this.play_sound()}),this)),e.getElementById(this.id).load()),this.startedLoading=!0):this.play_sound())},x.prototype.destroy=function(){this.sound&&d.destroy(this.sound),this.audio&&o.audio_container.removeChild(this.audio),b.prototype.destroy.apply(this,arguments)},o.createPlayer=function(e){m(e,"soundcite-initializing"),m(e,"soundcite-force-bg-color"),s.update_playing_element(e,0,y(e)),e.getAttribute("data-url")&&("none"==h?(c.push(e),i.e(53).then(i.bind(i,1493)).then((function(e){(0,e.default)(t,t.document),d=t.Popcorn;for(var i=0;i<c.length;i++)new x(c[i])}))):"loading"==h?c.push(e):new x(e)),e.getAttribute("data-id")&&("none"==u?(p.push(e),f("2.0.0",(function(t){a=t;for(var e=0;e<p.length;e++)new v(p[e])}))):"loading"==u?p.push(e):new v(e))},o.destroyPlayer=function(t){for(var e=r.length-1;e>=0;e--)r[e].el==t&&(r[e].destroy(),r.splice(e,1));for(e=c.length-1;e>=0;e--)c[e]==t&&c.splice(e,1);for(e=p.length-1;e>=0;e--)p[e]==t&&p.splice(e,1)},o.pausePlayer=function(t){for(var e=0;e<r.length;e++)t==r[e].el&&r[e].playing&&r[e].pause()},o.setElementsColor=function(t){s.update_playing_element(t,0,y(t))}}(window,document)}}]);