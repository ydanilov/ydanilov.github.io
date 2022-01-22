(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[60],{1405:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var s,a,i,r,o,c=n(336),d=n.n(c),l=n(321),m=n(352);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var h=(p(o={},"template-common-404",(0,m.f)(s||(s=u(['\n    <div id="page404">\n        <table>\n            <tr>\n                <td>\n                    <div class="caption">Page Not Found.</div>\n                    <div class="message">Sorry, there’s nothing here.<br/>Visit our <a class="front-page-link" href="/">front page</a>.</div>\n                </td>\n            </tr>\n        </table>\n    </div>\n'])))),p(o,"template-common-mag-suspended",(0,m.f)(a||(a=u(['\n\t<div class="magsuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this project has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:<%=Constants.SUPPORT_MAIL%>">Contact us</a>\n\t</div>\n'])))),p(o,"template-common-user-suspended",(0,m.f)(i||(i=u(['\n\t<div class="usersuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this account has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:<%=Constants.SUPPORT_MAIL%>">Contact us</a>\n\t</div>\n'])))),p(o,"template-common-domain-errors",(0,m.f)(r||(r=u(['\n\n\t<div class="domain-errors">\n\t\t<div class="message">\n\t\t\t<% if (state.magNotFound || state.domainNotFound) { %>\n\t\t\t<div class="message-caption">Website is almost here</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">To complete the setup, please hit <br class="br-phone"/>the “Connect” <br class="br-desktop"/>button in your <br class="br-phone"/>projects’s settings.</div>\n\t\t\t<a class="help-phone" href="https://help.readymag.com/hc/en-us/articles/4403970232091-Mapping-a-domain">Need Help?</a>\n\t\t\t<% } %>\n\t\t\t<% if (state.magNotPublished) { %>\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">This project has been unpublished.</div>\n\t\t\t<% } %>\n\t\t\t<% if (state.subscriptionExpired) { %>\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t<div class="message-text"><a href="<%=Constants.readymag_auth_host%>/settings/">Log in</a> to manage your subscription.</div>\n\t\t\t<% } %>\n\t\t</div>\n\n\t\t<a class="logo" href="<%=Constants.readymag_host%>"></a>\n\n\t\t<% if (state.magNotFound || state.domainNotFound) { %>\n\t\t<a class="help" href="http://help.readymag.com/hc/en-us/articles/360020588592-Domain">Need Help?</a>\n\t\t<% } %>\n\t</div>\n\n'])))),o),v=n(308);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=d().View.extend({TEMPLATES:{404:"template-common-404","mag-suspended":"template-common-mag-suspended","user-suspended":"template-common-user-suspended","domain-error":"template-common-domain-errors"},initialize:function(t){l.Z.bindAll(this),l.Z.extend(this,t),this.router=this.router||RM.homepageRouter||RM.collectorRouter||RM.constructorRouter,this.template=h[this.TEMPLATES[this.type]],this.setElement(this.$container)},render:function(){return this.$el.html(this.template(g(g({},this.templateData),{},{Constants:v.Z}))),this.postRenderTasks(),this},postRenderTasks:function(){switch(this.type){case"domain-error":l.Z.delay(l.Z.bind((function(){this.$(".domain-errors").addClass("show-elements")}),this),1e3)}}})}}]);