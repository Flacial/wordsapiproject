(this.webpackJsonpflary=this.webpackJsonpflary||[]).push([[6],{260:function(e,r,t){"use strict";t.r(r);var n=t(4),c=t(0),a=t(13),o=t(139),s=t(240),i=t(261),d=t(262),u=t(263),l=t(258),f=t(256),h=t(40),j=t(25),b=t(1);r.default=Object(h.b)((function(e){var r=e.words;return{WordArray:r.WordArray,NounArray:r.NounArray,VerbArray:r.VerbArray,AdjArray:r.AdjArray,PhraseArray:r.PhraseArray,AdverbArray:r.AdverbArray,AvailableWordType:r.AvailableWordType,isOpenSearchBar:r.isOpenSearchBar}}),(function(e){return{onToggleSearchBar:function(){return e(Object(j.c)())},onCloseSearchBar:function(){return e(Object(j.a)())}}}))(Object(a.h)((function(e){var r=e.history,t=e.HandleBackButtonClick,a=e.getWords,h=e.isOpenSearchBar,j=e.onToggleSearchBar,y=e.onCloseSearchBar,O=Object(c.useState)(""),x=Object(n.a)(O,2),v=x[0],p=x[1],g=Object(o.c)("#3B82F6","#ffa500"),A=Object(o.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),w=Object(o.c)("#252d3d","#edf2f7"),k=Object(c.useRef)(null),m=function(e){"E"===e.key&&e.ctrlKey&&e.shiftKey&&(e.preventDefault(),j(),(null===k||void 0===k?void 0:k.current)&&k.current.focus()),"Escape"===e.key&&(e.preventDefault(),y())};Object(c.useEffect)((function(){return document.addEventListener("keydown",m),function(){document.removeEventListener("keydown",m)}}),[h]),Object(c.useEffect)((function(){return h&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}}),[h]);return Object(b.jsx)(b.Fragment,{children:h?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{position:"fixed",zIndex:"9999",background:"gray.800",opacity:"0.6",style:{height:"100vh",width:"100vw"}}),Object(b.jsx)(s.a,{children:Object(b.jsxs)(s.a,{position:"fixed",display:"flex",alignItems:"flex-start",justifyContent:"center",zIndex:"9999",style:{height:"100vh",width:"100vw"},children:[Object(b.jsx)(i.a,{in:h,children:Object(b.jsx)(s.a,{className:"relative",children:Object(b.jsxs)(d.a,{mt:"32",children:[Object(b.jsx)(u.a,{zIndex:"9999999",pointerEvents:"none",children:Object(b.jsx)(f.a,{zIndex:"9999999",color:w})}),Object(b.jsx)(l.a,{id:"InputField2",ref:k,style:{zIndex:999999},placeholder:"Search a word",focusBorderColor:g,onKeyDown:function(e){"Enter"===e.key&&(t(!1),a(v),r.push("/thesaurus"),y())},background:A,color:w,w:["xs","xs",null],rounded:"xl",onChange:function(e){p(e.target.value)}})]})})}),Object(b.jsx)(s.a,{position:"fixed",style:{height:"100vh",width:"100vw"},background:"transparent",onClick:y})]})})]}):Object(b.jsx)(b.Fragment,{})})})))}}]);
//# sourceMappingURL=6.23ce7960.chunk.js.map