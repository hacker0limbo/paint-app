(this["webpackJsonppaint-app"]=this["webpackJsonppaint-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),i=(n(10),n(1)),u=n(4),l=n.n(u),s=a.a.memo((function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return a.a.createElement("label",{className:"header-name"},a.a.createElement("input",{value:n,onChange:function(e){return c(e.target.value)},onClick:function(e){return e.target.setSelectionRange(0,e.target.value.length)},placeholder:"Untitled"}))})),f=function(e){var t=e.colors,n=e.activeColor,r=e.setActiveColor;return 0===t.length?a.a.createElement("h3",null,"Loading..."):a.a.createElement("fieldset",{className:"color-picker"},t.map((function(e,t){return a.a.createElement("label",{key:t},a.a.createElement("input",{name:"color",type:"radio",value:e,checked:n===e,onChange:function(e){return r(e.target.value)}}),a.a.createElement("span",{style:{background:e}}))})))},m=function(e){var t=Object(r.useState)([window.innerWidth,window.innerHeight]),n=Object(i.a)(t,2),a=Object(i.a)(n[0],2),c=a[0],o=a[1],u=n[1];return Object(r.useEffect)((function(){var t=function(){e(),u([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[e]),[c,o]},d=a.a.memo((function(e){var t=e.refresh;return a.a.createElement("button",{className:"button-refresh-colors",onClick:t},"\u21ba")})),h=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(!1),o=Object(i.a)(c,2),u=o[0],l=o[1],s=Object(r.useState)([window.innerWidth,window.innerHeight]),f=Object(i.a)(s,2),d=Object(i.a)(f[0],2),h=d[0],p=d[1],b=f[1];m((function(){b([window.innerWidth,window.innerHeight])})),Object(r.useEffect)((function(){t.current&&(n.current=t.current.getContext("2d"))}),[t]);var v=function(e){n.current.closePath(),l(!1)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("canvas",{ref:t,width:e.width||h,height:e.height||p,onMouseDown:function(r){var a=n.current;a.lineJoin="round",a.lineCap="round",a.lineWidth=10,a.strokeStyle=e.color,a.beginPath(),a.moveTo(r.clientX-t.current.offsetLeft,r.clientY-t.current.offsetTop),l(!0)},onMouseMove:function(e){var r=n.current,a=[e.clientX-t.current.offsetLeft,e.clientY-t.current.offsetTop];u&&(r.lineTo.apply(r,a),r.stroke())},onMouseUp:v,onMouseOut:v}))},p=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(null),u=Object(i.a)(o,2),p=u[0],b=u[1],v=Object(r.useState)(!1),w=Object(i.a)(v,2),E=w[0],j=w[1],O=Object(r.useRef)(),g=Object(r.useCallback)((function(){var e=l()().slice(1);fetch("https://www.thecolorapi.com/scheme?hex=".concat(e,"&mode=monochrome")).then((function(e){return e.json()})).then((function(e){c(e.colors.map((function(e){return e.hex.value}))),b(e.colors[0].hex.value)}))}),[]);Object(r.useEffect)((function(){g()}),[g]);var k=m((function(){j(!0),clearTimeout(O.current),O.current=setTimeout((function(){j(!1)}),500)})),C=Object(i.a)(k,2),S=C[0],y=C[1];return a.a.createElement("div",{className:"app"},a.a.createElement("header",{style:{borderTop:"10px solid ".concat(p)}},a.a.createElement("div",{className:"app"},a.a.createElement(s,null)),a.a.createElement("div",{style:{marginTop:10}},a.a.createElement(f,{colors:n,activeColor:p,setActiveColor:b}),a.a.createElement(d,{refresh:g}))),p&&a.a.createElement(h,{color:p}),a.a.createElement("div",{className:"window-size ".concat(E?"":"hidden")},S," x ",y))},b=function(){return a.a.createElement(p,null)};o.a.render(a.a.createElement(b,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.54163c32.chunk.js.map