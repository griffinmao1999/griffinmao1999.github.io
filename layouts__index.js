(self["webpackChunk"]=self["webpackChunk"]||[]).push([[717],{71156:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var n=s(2824),a=s(98586),i=s(19611),o=s(67294),c=s(26916),l=s.n(c),r=s(92535),d=s.n(r),m=s(84091),u=s.n(m),h=s(48521);function v(){function e(e){var t=document.querySelector("#lightBtn"),s=document.querySelector("#darkBtn"),n=document.querySelector("#autoBtn"),a=document.querySelector(".sun"),i=document.querySelector(".moon");function o(){i.style.transform="rotate(60deg)",document.body.classList.remove("dark-theme"),setTimeout((()=>a.style.transform="rotate(0deg)"),1e3)}function c(){a.style.transform="rotate(60deg)",document.body.classList.add("dark-theme"),setTimeout((()=>i.style.transform="rotate(0deg)"),1e3)}"dark"==e?(t.classList.remove("mode_btn_selected"),s.classList.remove("mode_btn_selected"),n.classList.remove("mode_btn_selected"),s.classList.add("mode_btn_selected"),sessionStorage.setItem("theme","dark"),c()):"light"==e?(t.classList.remove("mode_btn_selected"),s.classList.remove("mode_btn_selected"),n.classList.remove("mode_btn_selected"),t.classList.add("mode_btn_selected"),sessionStorage.setItem("theme","light"),o()):(window.matchMedia("(prefers-color-scheme: dark)").matches?c():o(),t.classList.remove("mode_btn_selected"),s.classList.remove("mode_btn_selected"),n.classList.remove("mode_btn_selected"),n.classList.add("mode_btn_selected"),sessionStorage.setItem("theme","auto"))}return(0,o.useEffect)((()=>{null==sessionStorage.getItem("theme")?e("light"):e(sessionStorage.getItem("theme"))}),[]),(0,h.jsxs)("div",{style:{position:"relative"},children:[(0,h.jsxs)("div",{className:"widgets_item",children:[(0,h.jsx)("p",{className:"text-b",style:{marginBottom:12},children:"Color Mode"}),(0,h.jsx)("div",{className:"divide"}),(0,h.jsxs)("div",{className:"flex-row-between",style:{marginTop:12},children:[(0,h.jsxs)("div",{id:"lightBtn",className:"mode_btn",onClick:()=>e("light"),children:[" ","LIGHT"]}),(0,h.jsx)("div",{id:"darkBtn",className:"mode_btn",onClick:()=>e("dark"),children:"DARK"}),(0,h.jsx)("div",{id:"autoBtn",className:"mode_btn",onClick:()=>e("auto"),children:"AUTO"})]})]}),(0,h.jsx)("img",{className:"menu_god sun",src:d(),alt:""}),(0,h.jsx)("img",{className:"menu_god moon",src:u(),alt:""})]})}var f=e=>{var t=(0,o.useState)(!0),s=(0,n.Z)(t,2),c=s[0],r=s[1],d=(0,o.useState)(!1),m=(0,n.Z)(d,2),u=m[0],f=m[1];function _(){var e=document.querySelector(".black_shadow"),t=document.querySelector(".menu_ctn");u?(e.style.pointerEvents="none",e.style.opacity=0,t.style.right="-1200px"):(e.style.pointerEvents="auto",e.style.opacity=1,t.style.right=0),f(!u)}function N(e){var t=document.querySelector(".icon_oval");switch(e){case 1:t.style.transform="rotate(-55deg)";break;case 2:t.style.transform="rotate(-80deg)";break;case 3:t.style.transform="rotate(-90deg)";break;case 4:t.style.transform="rotate(-100deg)";break;case 5:t.style.transform="rotate(-125deg)";break}}return l()("browser-address-bar"),(0,o.useEffect)((()=>{var e=a.m8.location.pathname,t=document.querySelector(".icon_oval");switch(r("/"==e),e){case"/work":t.style.transform="rotate(-55deg)";break;case"/blog":t.style.transform="rotate(-80deg)";break;case"/notes":t.style.transform="rotate(-90deg)";break;case"/gallery":t.style.transform="rotate(-100deg)";break;case"/hi":t.style.transform="rotate(-125deg)";break}})),(0,h.jsxs)("div",{id:"theme",className:"basic_layout",children:[(0,h.jsx)("div",{className:"basic_layout_animate"}),!c&&(0,h.jsxs)("header",{id:"real_header",children:[(0,h.jsx)("h3",{onClick:()=>a.m8.push("/"),children:"XINYANG.MAO"}),(0,h.jsxs)("div",{className:"flex-row-center header_link_ctn",children:[(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/work",children:"WORK"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/blog",children:"BLOG"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/notes",children:"NOTES"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/gallery",children:"GALLERY"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/hi",children:"Hi"})]}),(0,h.jsx)("div",{className:"flex-row-center",children:(0,h.jsx)("div",{className:"icon_svg icon_menu",onClick:()=>_()})})]}),(0,h.jsx)("div",{className:"black_shadow",onClick:()=>_()}),(0,h.jsxs)("div",{className:"menu_ctn flex-row-center",children:[(0,h.jsx)("div",{className:"icon_svg icon_close",onClick:_}),(0,h.jsxs)("div",{className:"widgets_ctn",children:[(0,h.jsx)(v,{}),(0,h.jsxs)("div",{className:"widgets_item",children:[(0,h.jsx)("p",{className:"text-b",style:{marginBottom:12},children:"Last Updated"}),(0,h.jsx)("div",{className:"divide"}),(0,h.jsx)("div",{style:{marginTop:16,fontSize:10,lineHeight:"20px",textAlign:"center"},children:"March 30, 2023"})]})]}),(0,h.jsxs)("div",{className:"menu_list_ctn flex-col-center",children:[(0,h.jsxs)("div",{className:"menu_list flex-col-center",children:[(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/work",onClick:_,onMouseEnter:()=>N(1),children:"WORK \u4f5c\u54c1"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/blog",onClick:_,onMouseEnter:()=>N(2),children:"BLOG \u535a\u5ba2"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/notes",onClick:_,onMouseEnter:()=>N(3),children:"NOTES \u672d\u8bb0"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/gallery",onClick:_,onMouseEnter:()=>N(4),children:"GALLERY \u753b\u5eca"}),(0,h.jsx)(i.OL,{className:"link",activeClassName:"link_selected",to:"/hi",onClick:_,onMouseEnter:()=>N(5),children:"Hi \u8ba4\u8bc6\u4e00\u4e0b"})]}),(0,h.jsxs)("div",{className:"flex-row-between menu_remark",children:[(0,h.jsx)("p",{className:"remark",children:"\xa92022 - Xinyang Mao, All rights reserved. Designed and Developed by Myself with Love \ud83d\udc97."}),(0,h.jsx)(i.OL,{to:"/log",onClick:_,children:(0,h.jsx)("p",{className:"remark journal",children:"\u7f51\u7ad9\u65e5\u5fd7"})})]}),(0,h.jsx)("div",{className:"icon_oval"})]})]}),e.children,(0,h.jsxs)("div",{className:"mobile_header",children:[(0,h.jsx)(i.OL,{className:"mobile_link",activeClassName:"mobile_selected",to:"/work",children:(0,h.jsx)("div",{className:"mobile_icon_item icon_work",children:" "})}),(0,h.jsx)(i.OL,{className:"mobile_link",activeClassName:"mobile_selected",to:"/blog",children:(0,h.jsx)("div",{className:"mobile_icon_item icon_blog",children:" "})}),(0,h.jsx)(i.OL,{className:"mobile_link",activeClassName:"mobile_selected",to:"/notes",children:(0,h.jsx)("div",{className:"mobile_icon_item icon_notes",children:" "})}),(0,h.jsx)(i.OL,{className:"mobile_link",activeClassName:"mobile_selected",to:"/",exact:!0,children:(0,h.jsx)("div",{className:"mobile_icon_item icon_mao",children:" "})}),(0,h.jsx)(i.OL,{className:"mobile_link",activeClassName:"mobile_selected",to:"/gallery",children:(0,h.jsx)("div",{className:"mobile_icon_item icon_gallery",children:" "})}),(0,h.jsx)(i.OL,{className:"mobile_link",activeClassName:"mobile_selected",to:"/hi",children:(0,h.jsx)("div",{className:"mobile_icon_item icon_hi",children:" "})}),(0,h.jsx)("div",{className:"mobile_icon_item icon_settings",onClick:_})]})]})},_=f},92535:function(e,t,s){e.exports=s.p+"static/redSun.bffce58d.svg"},84091:function(e,t,s){e.exports=s.p+"static/yellowMoon.5ff35b3e.svg"},26916:function(e){(function(t,s){e.exports=s()})(0,(function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var a in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},e.apply(this,arguments)};function t(){var e=document.createElement("div");return e.style.cssText="position: fixed; top: 0; height: 100vh; pointer-events: none;",document.documentElement.insertBefore(e,document.documentElement.firstChild),e}function s(e){document.documentElement.removeChild(e)}function n(){var e=t(),n=window.innerHeight,a=e.offsetHeight,i=a-n;return s(e),{vh:a,windowHeight:n,offset:i,isNeeded:0!==i,value:0}}function a(){}function i(){var e=n();return e.value=e.offset,e}function o(){var e=n();return e.value=.01*e.windowHeight,e}var c=Object.freeze({noop:a,computeDifference:i,redefineVhUnit:o});function l(e){return"string"===typeof e&&e.length>0}function r(e){return"function"===typeof e}var d=Object.freeze({cssVarName:"vh-offset",redefineVh:!1,method:i,force:!1,bind:!0,updateOnTouch:!1,onUpdate:a});function m(t){if(l(t))return e({},d,{cssVarName:t});if("object"!==typeof t)return d;var s={force:!0===t.force,bind:!1!==t.bind,updateOnTouch:!0===t.updateOnTouch,onUpdate:r(t.onUpdate)?t.onUpdate:a},n=!0===t.redefineVh;return s.method=c[n?"redefineVhUnit":"computeDifference"],s.cssVarName=l(t.cssVarName)?t.cssVarName:n?"vh":d.cssVarName,s}var u=!1,h=[];try{var v=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("test",v,v),window.removeEventListener("test",v,v)}catch(k){u=!1}function f(e,t){h.push({eventName:e,callback:t}),window.addEventListener(e,t,!!u&&{passive:!0})}function _(){h.forEach((function(e){window.removeEventListener(e.eventName,e.callback)})),h=[]}function N(e,t){document.documentElement.style.setProperty("--"+e,t.value+"px")}function b(t,s){return e({},t,{unbind:_,recompute:s.method})}function x(e){var t=Object.freeze(m(e)),s=b(t.method(),t);if(!s.isNeeded&&!t.force)return s;if(N(t.cssVarName,s),t.onUpdate(s),!t.bind)return s;function n(){window.requestAnimationFrame((function(){var e=t.method();N(t.cssVarName,e),t.onUpdate(b(e,t))}))}return s.unbind(),f("orientationchange",n),t.updateOnTouch&&f("touchmove",n),s}return x}))}}]);