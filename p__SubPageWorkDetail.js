(self["webpackChunk"]=self["webpackChunk"]||[]).push([[387],{76698:function(e,s,l){"use strict";l.r(s);var i=l(2824),t=l(67294),a=l(22004),c=l(6700),r=l(4589),n=l(76629),o=l(1351),d=l(98586),h=l(80977),m=l(17787),x=l(2998),j=l(21425),u=l.n(j),v=l(48521),p=()=>{var e=(0,t.useState)(!1),s=(0,i.Z)(e,2),l=s[0],j=s[1],p=(0,t.useState)(""),g=(0,i.Z)(p,2),N=g[0],k=g[1],w=(0,t.useState)(0),f=(0,i.Z)(w,2),b=f[0],_=f[1],C=(0,t.useState)(!1),y=(0,i.Z)(C,2),S=y[0],Z=y[1],D=(0,t.useState)(!1),T=(0,i.Z)(D,2),E=T[0],I=T[1],L=(0,t.useState)("PROJECTS"),F=(0,i.Z)(L,2),B=F[0],z=F[1],O=(0,t.useState)(m),R=(0,i.Z)(O,2),q=R[0],A=R[1],H=(0,t.useRef)(),J=(0,t.useState)(null),P=(0,i.Z)(J,2),U=P[0],W=P[1],G=(0,t.useState)([]),K=(0,i.Z)(G,2),M=K[0],Q=K[1];(0,t.useEffect)((()=>{var e=parseInt(window.location.search.split("?")[2])-1;_(parseInt(window.location.search.split("?")[2])-1),z(window.location.search.split("?")[1]);var s={};s="projects"==window.location.search.split("?")[1]?m:x,A(s);var l=[...s[e].outline];Q([...l]),H.current.scrollTo(0,0)}),[,window.location.search]),(0,t.useEffect)((()=>(0!==M.length&&H.current.addEventListener("scroll",V),()=>{var e;return null===(e=H.current)||void 0===e?void 0:e.removeEventListener("scroll",V)})),[M,E]);var V=()=>{E&&I(!1);for(var e=H.current.scrollTop+200,s=0;s<M.length;s++){var l=M[s],i=document.querySelector("#".concat(l)),t=null===i||void 0===i?void 0:i.offsetTop,a=t+(null===i||void 0===i?void 0:i.clientHeight);if(e>=t&&e<a){W(l);break}}};(0,t.useEffect)((()=>(X(),window.addEventListener("resize",X),()=>window.removeEventListener("resize",X))),[]);var X=()=>{var e=window.innerWidth;e<1180&&Z(!0)};return(0,v.jsxs)(v.Fragment,{children:[l&&(0,v.jsx)(h.Z,{isShow:l,setIsShow:j,type:"img",value:N}),(0,v.jsxs)("div",{className:"workDetail_page",ref:H,children:[(0,v.jsxs)("div",{className:"workDetail_menu",style:{width:S?20:200},children:[(0,v.jsxs)("div",{className:"workDetail_menu_first",children:[(0,v.jsx)(c.Z,{className:"icon_hover",onClick:()=>d.m8.push("/work")}),!S&&(0,v.jsx)("h4",{children:B}),(0,v.jsx)("h4",{className:"detail-title",children:q[b].title}),(0,v.jsx)("div",{className:"outline-mobile-btn",onClick:()=>I(!E),children:(0,v.jsx)(r.Z,{})})]}),(0,v.jsx)("div",{className:"collapsedBtnCtn",children:S?(0,v.jsx)(n.Z,{className:"collapsedBtn",onClick:()=>Z(!S)}):(0,v.jsx)(o.Z,{className:"collapsedBtn",onClick:()=>Z(!S)})}),!S&&q.map(((e,s)=>(0,v.jsxs)("div",{className:"workDetail_menu_item ".concat(s==b?"workDetail_menu_item_focused":null),style:{backgroundColor:e.themeColor},onClick:()=>d.m8.push("/work/work-detail?".concat(B,"?").concat(s+1)),children:[(0,v.jsx)("p",{className:"text-b workDetail_menu_item_title",children:e.title}),(0,v.jsx)("p",{className:"remark workDetail_menu_item_tag",children:e.tag}),e.isStarred?(0,v.jsx)("div",{className:"workDetail_menu_item_isStarred",children:(0,v.jsx)("img",{src:u(),alt:""})}):(0,v.jsx)(v.Fragment,{}),(0,v.jsx)("div",{className:"workDetail_menu_item_back"})]},"data".concat(s))))]}),(0,v.jsx)("div",{className:"divide-vertical",children:" "}),(0,v.jsx)("div",{className:"workDetail_ctx",children:(0,v.jsxs)("div",{className:"project-page-content",children:[(0,v.jsxs)("div",{className:"hero-image",style:{backgroundImage:"url(".concat(q[b].heroImg,")")},children:[(0,v.jsx)("div",{className:"hero-image-cover"}),(0,v.jsxs)("div",{className:"project-info",children:[(0,v.jsx)("h2",{children:q[b].tag}),(0,v.jsx)("h1",{children:q[b].title}),(0,v.jsx)("p",{children:q[b].intro}),(0,v.jsx)("div",{className:"details",children:(0,v.jsx)("ul",{children:q[b].label.map(((e,s)=>2==e.length?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{className:"details-label",children:e[0]},"".concat(s,"label")),(0,v.jsx)("li",{className:"details-info",children:e[1]},"".concat(s,"info"))]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{className:"details-label",children:e[0]},"".concat(s,"label")),(0,v.jsx)("li",{className:"details-info",children:(0,v.jsx)("a",{href:e[2],target:"_blank",rel:"noopener noreferrer",children:e[1]})},"".concat(s,"info"))]})))})})]})]}),q[b].txtArr.map(((e,s)=>"divide-image"==e.blockType?(0,v.jsx)("div",{className:"divider-photo-section",children:(0,v.jsx)("img",{src:e.url,alt:""})},s):(0,v.jsx)("div",{className:"default-section will-fade fade appear",id:e.id,style:{backgroundColor:e.blockType?"color"==e.blockType?"".concat(q[b].themeColor,"24"):"var(--block)":""},children:e.content.map(((e,s)=>{switch(e.tag){case"h1":return(0,v.jsxs)("h1",{className:"chapter-title",children:[e.html,(0,v.jsx)("span",{style:{backgroundColor:q[b].themeColor}})]},"".concat(s,"h1"));case"h2":return(0,v.jsx)("h2",{children:e.html},"".concat(s,"h2"));case"p":return(0,v.jsx)("p",{children:e.html},"".concat(s,"p"));case"p-link":return(0,v.jsxs)("p",{children:[e.html,(0,v.jsx)("a",{style:{color:q[b].themeColor},href:e.link,target:"_blank",children:e.linkName})]},"".concat(s,"plink"));case"li":return(0,v.jsx)("li",{children:e.html},"".concat(s,"li"));case"insight":return(0,v.jsxs)("div",{className:"insight",children:[(0,v.jsx)("div",{className:"insight-label",style:{borderColor:q[b].themeColor},children:e.label}),(0,v.jsx)("div",{className:"insight-text",children:e.html})]},"".concat(s,"insight"));case"objective":return(0,v.jsxs)("div",{className:"objective",children:[(0,v.jsx)("div",{className:"objective-label",children:e.label}),(0,v.jsx)("div",{className:"objective-text",children:e.textList.map(((e,s)=>(0,v.jsxs)("div",{className:"objective-".concat(s+1),children:[(0,v.jsx)("h1",{style:{color:q[b].themeColor},children:s+1}),(0,v.jsx)("p",{children:e})]})))})]},"".concat(s,"objective"));case"single-txt":return(0,v.jsx)("div",{className:"two-col-txt-ctx",children:(0,v.jsxs)("div",{className:"item item-single",children:[(0,v.jsx)("h3",{children:e.item_title}),(0,v.jsxs)("div",{style:{width:"100%"},children:[(0,v.jsx)("h1",{style:{color:q[b].themeColor},children:e.item_h1}),(0,v.jsx)("p",{children:e.item_p})]})]})},"".concat(s,"single-txt"));case"single-txt-between":return(0,v.jsxs)("div",{className:"reflection",children:[(0,v.jsx)("h2",{children:e.item_title}),(0,v.jsxs)("div",{className:"reflection-text",children:[(0,v.jsx)("h1",{children:e.item_h1}),(0,v.jsx)("p",{children:e.item_p})]})]},"".concat(s,"reflection"));case"double-txt":return(0,v.jsxs)("div",{className:"two-col-txt-ctx",children:[(0,v.jsxs)("div",{className:"item",children:[(0,v.jsx)("h3",{children:e.item1_title}),(0,v.jsxs)("div",{style:{width:"100%",flex:1},children:[(0,v.jsx)("h1",{style:{color:q[b].themeColor},children:e.item1_h1}),(0,v.jsx)("p",{children:e.item1_p})]})]}),(0,v.jsxs)("div",{className:"item",children:[(0,v.jsx)("h3",{children:e.item2_title}),(0,v.jsxs)("div",{style:{width:"100%",flex:1},children:[(0,v.jsx)("h1",{style:{color:q[b].themeColor},children:e.item2_h1}),(0,v.jsx)("p",{children:e.item2_p})]})]})]},"".concat(s,"double-txt"));case"single-image":return(0,v.jsxs)("div",{className:"single-image",children:[e.isImg?(0,v.jsx)("img",{src:e.url,alt:"Survey findings",className:"modal-image",onClick:()=>{j(!0),k(e.url)}}):(0,v.jsx)(a.Z,{url:e.url,width:"100%",height:"auto",loop:!0,playing:!0,controls:!0,muted:!0}),(0,v.jsx)("div",{className:"caption",children:e.caption})]},"".concat(s,"single-image"));case"double-images":return(0,v.jsxs)("div",{className:"double-images",children:[(0,v.jsx)("div",{className:"image-1",children:(0,v.jsx)("img",{src:e.url1,alt:"Interaction part 1",onClick:()=>{j(!0),k(e.url1)}})}),(0,v.jsx)("div",{className:"image-2",children:(0,v.jsx)("img",{src:e.url2,alt:"Interaction part 2",onClick:()=>{j(!0),k(e.url2)}})})]},"".concat(s,"double-images"));case"three-images":return(0,v.jsxs)("div",{className:"three-images",children:[(0,v.jsx)("img",{src:e.url1,alt:"Top five exercise part 1",className:"modal-image",onClick:()=>{j(!0),k(e.url1)}}),(0,v.jsx)("img",{src:e.url2,alt:"Top five exercise part 2",className:"modal-image",onClick:()=>{j(!0),k(e.url2)}}),(0,v.jsx)("img",{src:e.url3,alt:"Top five exercise part 3",className:"modal-image",onClick:()=>{j(!0),k(e.url3)}})]},"".concat(s,"three-images"));case"caption":return(0,v.jsx)("div",{className:"caption",children:e.html},"".concat(s,"caption"));case"pdf":return(0,v.jsx)("embed",{src:e.html,type:"application/pdf",width:"100%",height:"1000px"});default:return}}))},s)))]})}),(0,v.jsx)("div",{className:"divide-vertical",children:" "}),(0,v.jsxs)("div",{className:"workDetail_ctx_outline ".concat(E?"isDown":""),style:{height:E?32*q[b].outline.length+63:0},children:[(0,v.jsx)("h4",{children:"\u76ee\u5f55 OUTLINE"}),q[b].outline.map(((e,s)=>(0,v.jsxs)("a",{href:"#".concat(e),className:U===e?"active":"",children:["- ",e]},s)))]})]})]})};s["default"]=p}}]);