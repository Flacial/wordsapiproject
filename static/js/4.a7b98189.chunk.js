(this.webpackJsonpflary=this.webpackJsonpflary||[]).push([[4],{255:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]}},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(138),a=Object(r.a)({d:"M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",displayName:"SearchIcon"})},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(18),a=n(27),i=n(4),c=n(129),o=n(244),l=n(37),u=n(137),s=n(53),d=n(54),f=n(55),b=n(9),j=n(219),O=n(242),p=n(62);var v=n(0);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var y=Object(j.a)({strict:!1,name:"FormControlContext"}),x=Object(i.a)(y,2),g=x[0],w=x[1];var k=Object(l.a)((function(e,t){var n=Object(u.a)("Form",e),a=function(e){var t,n=e.id,r=e.isRequired,a=e.isInvalid,l=e.isDisabled,u=e.isReadOnly,s=m(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),d=Object(c.a)(),f=n||"field-"+d,j=f+"-label",y=f+"-feedback",x=f+"-helptext",g=v.useState(!1),w=Object(i.a)(g,2),k=w[0],E=w[1],R=v.useState(!1),C=Object(i.a)(R,2),F=C[0],I=C[1],P=Object(o.a)(),S=Object(i.a)(P,2),M=S[0],T=S[1],W=v.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),h({id:x},e,{ref:Object(O.a)(t,(function(e){e&&I(!0)}))})}),[x]),A=v.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),h({id:y},e,{ref:Object(O.a)(t,(function(e){e&&E(!0)})),"aria-live":"polite"})}),[y]),B=v.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),h({},e,s,{ref:t,role:"group"})}),[s]);return{isRequired:!!r,isInvalid:!!a,isReadOnly:!!u,isDisabled:!!l,isFocused:!!M,onFocus:(t=T.on,function(e){var n=p.flushSync;Object(b.e)(n)?n((function(){t(e)})):t(e)}),onBlur:T.off,hasFeedbackText:k,setHasFeedbackText:E,hasHelpText:F,setHasHelpText:I,id:f,labelId:j,feedbackId:y,helpTextId:x,htmlProps:s,getHelpTextProps:W,getErrorMessageProps:A,getRootProps:B}}(Object(s.b)(e)),l=a.getRootProps,j=m(a,["getRootProps","htmlProps"]),y=Object(r.d)("chakra-form-control",e.className),x=v.useMemo((function(){return j}),[j]);return v.createElement(g,{value:x},v.createElement(d.b,{value:n},v.createElement(f.a.div,h({},l({},t),{className:y,__css:{width:"100%",position:"relative"}}))))}));b.a&&(k.displayName="FormControl");var E=Object(l.a)((function(e,t){var n=w(),a=Object(d.d)(),i=Object(r.d)("chakra-form__helper-text",e.className);return v.createElement(f.a.div,h({},null==n?void 0:n.getHelpTextProps(e,t),{__css:a.helperText,className:i}))}));function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function F(e){var t=function(e){var t,n,r,i=w(),c=e.id,o=e.disabled,l=e.readOnly,u=e.required,s=e.isRequired,d=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,j=e.onFocus,O=e.onBlur,p=C(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),v=[];null!=i&&i.hasFeedbackText&&null!=i&&i.isInvalid&&v.push(i.feedbackId);null!=i&&i.hasHelpText&&v.push(i.helpTextId);return R({},p,{"aria-describedby":v.join(" ")||void 0,id:null!=c?c:null==i?void 0:i.id,isDisabled:null!=(t=null!=o?o:b)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=l?l:f)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(r=null!=u?u:s)?r:null==i?void 0:i.isRequired,isInvalid:null!=d?d:null==i?void 0:i.isInvalid,onFocus:Object(a.a)(null==i?void 0:i.onFocus,j),onBlur:Object(a.a)(null==i?void 0:i.onBlur,O)})}(e),n=t.isDisabled,i=t.isInvalid,c=t.isReadOnly,o=t.isRequired;return R({},C(t,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:n,readOnly:c,required:o,"aria-invalid":Object(r.b)(i),"aria-required":Object(r.b)(o),"aria-readonly":Object(r.b)(c)})}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}b.a&&(E.displayName="FormHelperText");var P=Object(l.a)((function(e,t){var n=Object(u.a)("Input",e),a=F(Object(s.b)(e)),i=Object(r.d)("chakra-input",e.className);return v.createElement(f.a.input,I({},a,{__css:n.field,ref:t,className:i}))}));b.a&&(P.displayName="Input"),P.id="Input"},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(0),a=n(3),i=n(26),c=n(64);var o=n(41),l=n(45),u=0;function s(){var e=u;return u++,e}var d=function(e){var t=e.children,n=e.initial,a=e.isPresent,i=e.onExitComplete,c=e.custom,u=e.presenceAffectsLayout,d=Object(l.a)(f),b=Object(l.a)(s),j=Object(r.useMemo)((function(){return{id:b,initial:n,isPresent:a,custom:c,onExitComplete:function(e){d.set(e,!0);var t=!0;d.forEach((function(e){e||(t=!1)})),t&&(null===i||void 0===i||i())},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),u?void 0:[a]);return Object(r.useMemo)((function(){d.forEach((function(e,t){return d.set(t,!1)}))}),[a]),Object(r.useEffect)((function(){!a&&!d.size&&(null===i||void 0===i||i())}),[a]),Object(r.createElement)(o.a.Provider,{value:j},t)};function f(){return new Map}function b(e){return e.key||""}var j=function(e){var t=e.children,n=e.custom,o=e.initial,l=void 0===o||o,u=e.onExitComplete,s=e.exitBeforeEnter,f=e.presenceAffectsLayout,j=void 0===f||f,O=function(){var e=Object(r.useRef)(!1),t=Object(a.c)(Object(r.useState)(0),2),n=t[0],i=t[1];return Object(c.a)((function(){return e.current=!0})),Object(r.useCallback)((function(){!e.current&&i(n+1)}),[n])}(),p=Object(r.useContext)(i.b);Object(i.c)(p)&&(O=p.forceUpdate);var v=Object(r.useRef)(!0),h=function(e){var t=[];return r.Children.forEach(e,(function(e){Object(r.isValidElement)(e)&&t.push(e)})),t}(t),m=Object(r.useRef)(h),y=Object(r.useRef)(new Map).current,x=Object(r.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=b(e);t.set(n,e)}))}(h,y),v.current)return v.current=!1,Object(r.createElement)(r.Fragment,null,h.map((function(e){return Object(r.createElement)(d,{key:b(e),isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:j},e)})));for(var g=Object(a.e)(h),w=m.current.map(b),k=h.map(b),E=w.length,R=0;R<E;R++){var C=w[R];-1===k.indexOf(C)?x.add(C):x.delete(C)}return s&&x.size&&(g=[]),x.forEach((function(e){if(-1===k.indexOf(e)){var t=y.get(e);if(t){var a=w.indexOf(e);g.splice(a,0,Object(r.createElement)(d,{key:b(t),isPresent:!1,onExitComplete:function(){y.delete(e),x.delete(e);var t=m.current.findIndex((function(t){return t.key===e}));m.current.splice(t,1),x.size||(m.current=h,O(),u&&u())},custom:n,presenceAffectsLayout:j},t))}}})),g=g.map((function(e){var t=e.key;return x.has(t)?e:Object(r.createElement)(d,{key:b(e),isPresent:!0,presenceAffectsLayout:j},e)})),m.current=g,Object(r.createElement)(r.Fragment,null,x.size?g:g.map((function(e){return Object(r.cloneElement)(e)})))}},265:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(34),i=n(43),c=n.n(i),o=n(39),l=n(13),u=n(0),s=n(18),d=s.h?u.useLayoutEffect:u.useEffect;var f=n(139),b=n(240),j=n(239),O=n(250),p=n(37),v=n(9),h=n(222);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=Object(p.a)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],c=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),o=n||r,l=u.isValidElement(o)?u.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return u.createElement(h.a,m({padding:"0",borderRadius:a?"full":"md",ref:t,"aria-label":i},c),l)}));v.a&&(y.displayName="IconButton");var x=n(259),g=n(249),w=n(255);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E={initial:"exit",animate:"enter",exit:"exit",variants:{exit:{opacity:0,transition:{duration:.1,ease:w.a.easeOut}},enter:{opacity:1,transition:{duration:.2,ease:w.a.easeIn}}}},R=u.forwardRef((function(e,t){var n=e.unmountOnExit,r=e.in,a=e.className,i=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["unmountOnExit","in","className"]),c=!n||r&&n;return u.createElement(x.a,null,c&&u.createElement(g.a.div,k({ref:t,className:Object(s.d)("chakra-fade",a)},E,{animate:r||n?"enter":"exit"},i)))}));v.a&&(R.displayName="Fade");var C,F=n(55),I=n(138),P=Object(I.a)({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"}),S=n(256),M=n(40),T=n(258),W=n(25),A=n(1),B=Object(M.b)((function(e){var t=e.words;return{Word:t.Word,AvailableWordType:t.AvailableWordType}}),(function(e){return{setWord:function(t){return e(Object(W.k)(t))}}}))(Object(l.h)((function(e){var t=e.setWord,n=e.getWords,a=e.history,i=Object(f.c)("#3B82F6","#ffa500"),c=Object(u.useState)(""),o=Object(r.a)(c,2),l=o[0],s=o[1],d=Object(u.useRef)(null),b=function(e){"A"===e.key&&e.ctrlKey&&(e.preventDefault(),d.current.focus())};return Object(u.useEffect)((function(){return document.addEventListener("keydown",b),function(){document.removeEventListener("keydown",b)}})),Object(A.jsx)(T.a,{ref:d,focusBorderColor:i,onKeyPress:function(e){13===e.which&&(t(l),n(l),a.push("/thesaurus"))},variant:"filled",w:["18rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],value:l,onBlur:function(){l.length&&t(l)},onChange:function(e){s(e.target.value)},paddingY:"5",placeholder:"Search for words",paddingLeft:"9"})}))),N=c.a.div(C||(C=Object(a.a)(["\n   text-center\n   mt-24\n   md2:mt-38\n   lg:mt-32\n"])));t.default=Object(M.b)((function(e){return{Word:e.words.Word}}),null)(Object(l.h)((function(e){var t=e.WordFindType,n=e.WordFind,a=e.isOpen,i=e.HandleSearchButtonClick,c=e.getWords,l=function(e){var t=Array.isArray(e)?e:[e],n=s.h&&"matchMedia"in window,a=u.useState(t.map((function(e){return!!n&&!!window.matchMedia(e).matches}))),i=Object(r.a)(a,2),c=i[0],o=i[1];return d((function(){if(n){var e=t.map((function(e){return window.matchMedia(e)})),r=e.map((function(e,t){var n=function(){return o((function(n){return n.map((function(n,r){return t===r?!!e.matches:n}))}))};return e.addListener(n),n}));return function(){e.forEach((function(e,t){e.removeListener(r[t])}))}}}),[e]),c}("(max-width: 420px)"),p=Object(r.a)(l,1)[0],v=Object(f.c)("#3B82F6","orange"),m=Object(f.c)({color:"#3B82F6"},{color:"orange"}),x=Object(f.c)("#edf2f7","gray.800"),g=Object(f.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"});return Object(A.jsxs)(N,{children:[Object(A.jsxs)(b.a,{display:"flex",alignContent:"center",justifyContent:"center",mt:["12",null,"15","0","32"],mb:["5",null,"12"],children:[Object(A.jsxs)(j.a,{fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:["Words to be",p?"\xa0":" thesaurused"]}),Object(A.jsxs)(O.a,{placement:"auto-end",display:"inline-block",children:[Object(A.jsx)(O.g,{children:p?Object(A.jsx)(j.a,{textDecoration:"underline wavy ".concat(v),_hover:[null,null,m],cursor:"pointer",fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:"thesaurused"}):Object(A.jsx)(y,{variant:"ghost",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:g,ml:"2",size:"sm",icon:Object(A.jsx)(P,{w:"5",h:"5"})})}),Object(A.jsxs)(O.e,{outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:g,background:x,children:[Object(A.jsx)(O.b,{}),Object(A.jsx)(O.d,{}),Object(A.jsx)(O.f,{fontFamily:"Playfair Display",fontSize:["xl"],fontWeight:"bold",children:"Thesaurus"}),Object(A.jsx)(O.c,{children:"A thesaurus (plural thesauri or thesauruses) or synonym dictionary is a reference work for finding synonyms and sometimes antonyms of words."})]})]})]}),Object(A.jsxs)(b.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(A.jsxs)(b.a,{children:[Object(A.jsx)(b.a,{justifyContent:"center",display:"flex",w:["100%","xs",null],children:Object(A.jsxs)(b.a,{w:["18rem","xs",null],position:"relative",children:[Object(A.jsx)(B,{getWords:c}),Object(A.jsx)(S.a,{color:"gray.300",position:"absolute",left:"3",top:"3.5"})]})}),n&&Object(A.jsx)(R,{in:a,children:Object(A.jsxs)(b.a,{mt:"1",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(A.jsx)(F.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(A.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(A.jsx)(F.a.span,{ml:"1",mb:["-1",0,0],color:"red.400",children:"no response"===t?"Word not found! (Misspelled)":"no input"===t?"Input is empty, type a word!":"The word is not in the thesaurus!"})]})})]}),!p&&Object(A.jsx)(b.a,{ml:[0,6,null],mt:[5,1,0],children:Object(A.jsx)(h.a,{_hover:{background:"gray.200"},_focus:g,color:"gray.800",bgColor:"gray.100",as:o.b,onClick:i,to:"/thesaurus",borderRadius:"xl",children:"Search"})})]})]})})))}}]);
//# sourceMappingURL=4.a7b98189.chunk.js.map