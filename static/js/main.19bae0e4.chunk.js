(this.webpackJsonpflary=this.webpackJsonpflary||[]).push([[0],{148:function(e,t,n){},155:function(e,t,n){},196:function(e,t){},217:function(e,t,n){"use strict";n.r(t);var r,a,c,o,l,s,i,u,d,b=n(0),j=n.n(b),O=n(63),h=n.n(O),f=(n(148),n(250)),p=n(245),x=n(40),y=n(33),A=n(4),S=(n(155),n(13)),E=n(240),_=n(18),g=n(88),v=n.n(g),R=n(119),T=function(){var e=Object(R.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://flary-server.herokuapp.com/thesaurus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t})});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=n(55),W=n(140),C=n(238),k=n(248),B=n(251),w=n(249),N=n(1),F=function(){var e=Object(W.c)("#3B82F6","orange.200"),t=Object(W.c)("gray.700","orange.500");return Object(N.jsx)(_.a.TransitionFade,{children:Object(N.jsxs)(B.a,{children:[Object(N.jsx)(w.a,{height:"9px",mt:"4",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",mb:"1",startColor:e,endColor:t}),Object(N.jsx)(w.a,{height:"9px",w:"80%",mb:"3",startColor:e,endColor:t})]})})},P=n(36),D=n(122).a.div(r||(r=Object(P.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 15px;\npadding-bottom: 20px;\nword-spacing: 0;\n"]))),L=Object(m.a)(D),Y=function(e){var t=e.children,n=e.ml,r=e.mr,a=e.marginTop,c=e.boxShadow,o=e.gradientbg;e.isLargerthan440;return Object(N.jsx)(L,{boxShadow:c,bgGradient:o,ml:n,mr:r,marginTop:a,children:t})},H=n(43),V=n.n(H),I=n(125),z=n.n(I),G=n(236),M=n(237),U=V.a.div(a||(a=Object(P.a)(["\n    mt-1\n"]))),J=V.a.h1(c||(c=Object(P.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),X=Object(m.a)(J),K=V.a.span(o||(o=Object(P.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),Q=Object(m.a)(K),q=V.a.h2(l||(l=Object(P.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),Z=Object(m.a)(q),$=V.a.div(s||(s=Object(P.a)(["\n    mt-2\n    relative pl-6\n"]))),ee=V.a.span(i||(i=Object(P.a)(["\n    text-xl\n    block\n"]))),te=Object(m.a)(ee),ne=V.a.span(u||(u=Object(P.a)(["\n    text-gray-700\n    text-xl\n"]))),re=Object(m.a)(ne),ae=Object(y.b)((function(e){var t=e.words;return{Word:t.Word,ReturnedWord:t.ReturnedWord,ShortDef:t.ShortDef,PartOfSpeech:t.PartOfSpeech,WordExample:t.WordExample,Syns:t.Syns,Ants:t.Ants,WordArray:t.WordArray}}),null)(Object(S.h)((function(e){var t,n,r,a,c=e.getWords,o=e.HandleBackButtonClick,l=e.history,s=e.WordsArray,i=s.fl,u=s.hwi.hw,b=s.shortdef,j=Object(A.a)(s.def,1)[0].sseq,O=s.meta.syns,h=s.meta.ants,f=(null!==(t=null===(n=j[0][0][1].dt)||void 0===n||null===(r=n[1])||void 0===r||null===(a=r[1])||void 0===a?void 0:a[0].t)&&void 0!==t?t:j[0][0][1].dt[0][1]).replace("{it}","<em>").replace("{/it}","</em>"),p=h[0],x=O[0],y=u,S=i,E=b[0],g=f,v=Object(W.c)("gray.700","#edf2f7"),R=Object(W.c)("#2563EB","#db8b02"),T=Object(W.c)("#3B82F6","orange.300"),k=Object(W.c)("#3B82F6","orange"),B=Object(W.c)({textDecoration:"underline"},{textDecoration:"underline"}),w=function(e){o(),c(e.target.textContent),l.push("/thesaurus")},F=function(e){var t=[];return void 0!==e&&(t=e.map((function(t,n){return void 0===e[n+1]?Object(N.jsx)(G.a,{_hover:B,className:"cursor-pointer",onClick:w,listStyleType:"none",display:"inline-block",children:t},n):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(G.a,{_hover:B,className:"cursor-pointer",onClick:w,listStyleType:"none",display:"inline-block",children:t},t),Object(N.jsx)("span",{children:",\xa0"},n)]})}))),t},D=V.a.h1(d||(d=Object(P.a)(["\nitalic\nfont-serif\ntext-3xl\nfont-bold\ninline-block\n"]))),L=Object(m.a)(D);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(L,{color:k,children:"Thesaurus"}),Object(N.jsxs)(U,{children:[Object(N.jsx)(_.a.TransitionFade,{children:Object(N.jsx)(X,{color:v,children:y})}),Object(N.jsx)(Q,{color:k,children:S})]}),Object(N.jsxs)(Z,{color:R,children:["Synonyms & Antonyms of"," ",Object(N.jsx)("em",{children:y})]}),Object(N.jsxs)($,{children:[Object(N.jsx)(re,{color:v,children:E}),E.slice(0,5)===g.slice(0,5)?Object(N.jsx)(N.Fragment,{}):Object(N.jsxs)(te,{color:T,children:[" ",Object(N.jsx)("strong",{children:"//"})," ",z()(g)]}),Object(N.jsxs)(M.a,{mb:"1",mt:"2",fontSize:"2xl",fontFamily:"sans-serif",color:R,children:["Synonyms for"," ",Object(N.jsx)(m.a.span,{fontStyle:"italic",children:y})]}),Object(N.jsx)(C.a,{w:["100%","70%",null],children:Object(N.jsx)(G.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:T,children:F(x)})}),void 0!==p?Object(N.jsxs)("div",{children:[Object(N.jsxs)(M.a,{mb:"1",mt:"4",fontSize:"2xl",fontFamily:"sans-serif",color:R,children:["Antonyms for"," ",Object(N.jsx)(m.a.span,{fontStyle:"italic",children:y})]}),Object(N.jsx)(C.a,{w:["100%","70%",null],children:Object(N.jsx)(G.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:T,children:F(p)})})]}):Object(N.jsx)(N.Fragment,{})]})]})}))),ce=n(126),oe=n(127),le=n(135),se=n(134),ie=function(e){Object(le.a)(n,e);var t=Object(se.a)(n);function n(e){var r;return Object(ce.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(oe.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?Object(N.jsx)("div",{children:"Something went wrong"}):t}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(j.a.Component),ue=n(27),de=function(e){var t=e.AvailableWordType,n=e.WordsLoaded,r=e.getWords,a=e.HandleBackButtonClick,c=e.NounArray,o=e.VerbArray,l=e.AdjArray,s=e.PhraseArray,i=e.AdverbArray,u=Object(W.c)("0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6","0px 0px 11px #1c1c1c, -10px -10px 0px orange"),d=Object(W.c)("linear(to-l, gray.200, white)"),j=Object(W.c)({color:"#3B82F6"},{color:"orange"}),O=Object(W.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),h=Object(W.c)("#252d3d","#edf2f7"),f=Object(W.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),p=Object(b.useRef)(null),x=Object(b.useRef)(null),y=Object(b.useRef)(null),A=Object(b.useRef)(null),S=Object(b.useRef)(null),E=Object(b.useRef)(null),g=function(){var e;return(null===Object||void 0===Object||null===(e=Object.keys(c))||void 0===e?void 0:e.length)?c:Object.keys(o).length?o:Object.keys(l).length?l:Object.keys(s).length?s:Object.keys(i).length?i:void 0},v=function(e){return Object(N.jsx)(Y,{boxShadow:u,gradientbg:d,ml:["0","9em",null],mr:["0","9em",null],marginTop:["3",null,null],children:Object(N.jsx)(_.a.TransitionFade,{children:n?Object(N.jsx)(ie,{children:Object(N.jsx)(ae,{getWords:r,HandleBackButtonClick:a,WordsArray:e})}):Object(N.jsx)(F,{})})})};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(k.e,{align:"center",variant:"soft-rounded",children:[Object(N.jsx)(_.a.TransitionFade,{children:Object(N.jsxs)(k.b,{ref:E,flexWrap:"wrap",marginTop:["4","2",null],children:[t.noun&&Object.keys(t).length?Object(N.jsx)(k.a,{ref:p,_hover:j,_selected:{color:h,bg:O},_focus:f,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Noun"}):null,t.verb&&Object.keys(t).length?Object(N.jsx)(k.a,{ref:x,_hover:j,_selected:{color:h,bg:O},_focus:f,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Verb"}):null,t.adjective&&Object.keys(t).length?Object(N.jsx)(k.a,{ref:y,_hover:j,_selected:{color:h,bg:O},_focus:f,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Adjective"}):null,t.phrase&&Object.keys(t).length?Object(N.jsx)(k.a,{ref:A,_hover:j,_selected:{color:h,bg:O},_focus:f,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Phrase"}):null,t.adverb&&Object.keys(t).length?Object(N.jsx)(k.a,{ref:S,_hover:j,_selected:{color:h,bg:O},_focus:f,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Adverb"}):null]})}),Object(N.jsxs)(k.d,{children:[Object(N.jsx)(k.c,{children:v(g())}),Object.keys(o).length&&"verb"!==g().fl?Object(N.jsx)(k.c,{children:v(o)}):null,Object.keys(l).length&&"adjective"!==g().fl?Object(N.jsx)(k.c,{children:v(l)}):null,Object.keys(s).length&&"phrase"!==g().fl?Object(N.jsx)(k.c,{children:v(s)}):null,Object.keys(i).length&&"adverb"!==g().fl?Object(N.jsx)(k.c,{children:v(i)}):null]})]})})},be=Object(y.b)((function(e){var t=e.words;return{WordArray:t.WordArray,NounArray:t.NounArray,VerbArray:t.VerbArray,AdjArray:t.AdjArray,PhraseArray:t.PhraseArray,AdverbArray:t.AdverbArray,AvailableWordType:t.AvailableWordType}}),(function(e){return{setAvailableWordType:function(t){return e(Object(ue.g)(t))}}}))(j.a.memo(de)),je=Object(y.b)((function(e){return{ReturnedWord:e.words.ReturnedWord}}),null)(Object(S.h)((function(e){var t=e.Link,n=e.HandleBackButtonClick,r=e.ReturnedWord,a=e.WordsLoaded,c=e.AvailableWordType,o=e.getWords,l=e.history,s=e.location,i=Object(m.a)(t),u=Object(W.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),d=Object(W.c)("#252d3d","#edf2f7"),j=Object(W.c)({background:"gray.200"},{background:"gray.700"}),O=Object(W.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),h=Object(W.c)("rgba(255, 255, 255, .9)","rgba(0, 0, 0, 0.26)"),f=function(e){var t="Thesaurus By Flary";document.title="mount"===e&&r.length?"".concat(r[0].toUpperCase()+r.slice(1)," Synonyms, ").concat(r," Antonyms | Flary Thesaurus"):t};Object(b.useEffect)((function(){return f("mount"),function(){f()}}),[a]);var p=function(e){"Q"===e.key&&e.ctrlKey&&(n(),l.push("/"))};return Object(b.useEffect)((function(){return document.addEventListener("keydown",p),function(){document.removeEventListener("keydown",p)}}),[]),Object(b.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),Object(N.jsxs)(N.Fragment,{children:[a?Object(N.jsx)(C.a,{zIndex:"9991",className:"fixed top-0",left:[null,"32",null],children:Object(N.jsx)(i,{_focus:O,bg:u,color:d,_hover:j,onClick:n,className:"\n  py-2\n  px-4\n  rounded-xl\n  shadow-xl\n  inline-block\n  focus:outline-none\n  focus:border\n  focus:ring-2 focus:ring-blue-500\n  transition duration-500 ease-in-out\n  m-4\n",to:"/",children:"Back to search"})}):Object(N.jsx)(N.Fragment,{}),"/thesaurus"===s.pathname?Object(N.jsx)(C.a,{background:!CSS.supports("backdrop-filter","blur(5px)")&&h,className:"backdrop-blur",zIndex:"9990",position:"fixed",top:"0",h:"70px",w:"full",borderRadius:"0 0 20px 20px"}):Object(N.jsx)(N.Fragment,{}),Object(N.jsx)(_.a.TransitionFade,{children:Object(N.jsx)(be,{AvailableWordType:c,WordsLoaded:a,getWords:o,HandleBackButtonClick:n})})]})}))),Oe=n(8),he=n(136),fe=Object(b.lazy)((function(){return n.e(4).then(n.bind(null,258))}));var pe=function(e){var t=e.Thesaurus,n=Object(he.a)(e,["Thesaurus"]),r=Object(S.g)();return Object(N.jsxs)(S.d,{location:r,children:[Object(N.jsx)(S.b,{exact:!0,path:"/",children:Object(N.jsx)(b.Suspense,{fallback:null,children:Object(N.jsx)(fe,Object(Oe.a)({},n))})}),Object(N.jsx)(S.b,{exact:!0,path:"/thesaurus",children:Object(N.jsx)(_.a.TransitionFade,{children:t()})})]},r.key)},xe=n(247),ye=n(220),Ae=n(242),Se=function(){var e=Object(W.c)("#edf2f7","gray.800"),t=Object(W.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),n=Object(W.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),r=Object(W.c)("gray.600","gray.400");return Object(N.jsxs)(xe.a,{placement:"auto",children:[Object(N.jsx)(xe.g,{children:Object(N.jsx)(ye.a,{_focus:n,focusBorderColor:n,boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:[null,"40",null],rounded:"xl",children:Object(N.jsx)(Ae.a,{})})}),Object(N.jsxs)(xe.e,{width:"max-content",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:t,background:e,children:[Object(N.jsx)(xe.b,{}),Object(N.jsx)(xe.d,{}),Object(N.jsx)(xe.f,{fontFamily:"Playfair Display",fontSize:["xl"],fontWeight:"bold",children:"Keyboard Shortcuts"}),Object(N.jsxs)(xe.c,{className:"whitespace-pre-wrap text-left",children:[Object(N.jsx)("strong",{children:"Global"})," ","\n",Object(N.jsxs)(m.a.span,{children:["Switch theme:"," ",Object(N.jsx)(m.a.span,{color:r,children:"Ctrl + Shift + X"})," ","\n"]}),Object(N.jsx)("hr",{}),Object(N.jsx)("strong",{children:"Home Page"})," ","\n",Object(N.jsxs)(m.a.span,{children:["Focus on input field:"," ",Object(N.jsx)(m.a.span,{color:r,children:"Ctrl + Shift + A"})," ","\n"]}),Object(N.jsx)("hr",{}),Object(N.jsx)("strong",{children:"Thesaurus Page"})," ","\n",Object(N.jsxs)(m.a.span,{children:["Go to Home Page:"," ",Object(N.jsx)(m.a.span,{color:r,children:"Ctrl + Shift + Q"})]}),"\n",Object(N.jsxs)(m.a.span,{children:["Search bar:"," ",Object(N.jsx)(m.a.span,{color:r,children:"Ctrl + Shift + E"})]}),"\n"]})]})]})},Ee=n(243),_e=function(){var e=Object(W.b)(),t=e.colorMode,n=e.toggleColorMode,r=Object(W.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),a=Object(b.useRef)(null),c=function(e){"X"===e.key&&e.ctrlKey&&(e.preventDefault(),a.current.click())};return Object(b.useEffect)((function(){return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}}),[]),Object(N.jsx)(ye.a,{ref:a,_focus:r,focusBorderColor:r,boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:"-1",rounded:"xl",onClick:n,children:"light"===t?Object(N.jsx)(Ee.a,{}):Object(N.jsx)(m.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(N.jsx)("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})})})},ge=Object(b.lazy)((function(){return n.e(5).then(n.bind(null,257))})),ve=Object(S.h)((function(e){var t=e.InputFiledSearchBarPopUp,n=e.location,r=e.WordsLoaded;return Object(N.jsxs)(C.a,{zIndex:"9991",position:"sticky",top:"0",h:"70px",display:"flex",justifyContent:"flex-end",children:["/thesaurus"===n.pathname&&r?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(_.a.TransitionFade,{children:Object(N.jsx)(b.Suspense,{fallback:null,children:Object(N.jsx)(ge,{WordsLoaded:r,InputFiledSearchBarPopUp:t})})})}):Object(N.jsx)(N.Fragment,{}),Object(N.jsx)(_e,{}),Object(N.jsx)(Se,{})]})})),Re=Object(b.lazy)((function(){return n.e(3).then(n.bind(null,259))})),Te=Object(y.b)((function(e){var t=e.words;return{Word:t.Word,WordArray:t.WordArray,NounArray:t.NounArray,VerbArray:t.VerbArray,AdjArray:t.AdjArray,PhraseArray:t.PhraseArray,AdverbArray:t.AdverbArray,AvailableWordType:t.AvailableWordType}}),(function(e){return{setWord:function(t){return e(Object(ue.k)(t))},setWordArray:function(t){return e(Object(ue.l)(t))},setNounArray:function(t){return e(Object(ue.h)(t))},setVerbArray:function(t){return e(Object(ue.j)(t))},setAdjArray:function(t){return e(Object(ue.e)(t))},setPhraseArray:function(t){return e(Object(ue.i)(t))},setAdverbArray:function(t){return e(Object(ue.f)(t))},setAvailableWordType:function(t){return e(Object(ue.g)(t))},resetAvailableWordType:function(){return e(Object(ue.d)())}}}))(Object(S.h)((function(e){var t=e.location,n=e.Word,r=e.setWord,a=e.setWordArray,c=e.setNounArray,o=e.WordArray,l=e.setVerbArray,s=e.setAdjArray,i=e.setPhraseArray,u=e.setAdverbArray,d=e.AvailableWordType,j=e.setAvailableWordType,O=e.resetAvailableWordType,h=Object(b.useState)(!1),f=Object(A.a)(h,2),p=f[0],y=f[1],g=t.pathname,v=Object(E.a)(),R=v.isOpen,m=v.onOpen,W=Object(E.a)(),C=W.isOpen,k=W.onOpen,B=W.onClose,w=W.onToggle,F=Object(b.useState)(!1),P=Object(A.a)(F,2),D=P[0],L=P[1],Y=Object(b.useState)(""),H=Object(A.a)(Y,2),V=H[0],I=H[1],z=Object(b.useState)(!1),G=Object(A.a)(z,2),M=G[0],U=G[1],J=Object(b.useState)(!1),X=Object(A.a)(J,2),K=X[0],Q=X[1],q=Object(b.useRef)(null),Z=function(e){r(e)};Object(b.useEffect)((function(){K&&function(e){if(d.noun){var t=e.filter((function(e){return"noun"===e.fl}));c(t[0])}if(d.verb){var n=e.filter((function(e){return"verb"===e.fl}));l(n[0])}if(d.adjective){var r=e.filter((function(e){return"adjective"===e.fl}));s(r[0])}if(d.phrase){var a=e.filter((function(e){return"phrase"===e.fl}));i(a[0])}if(d.adverb){var o=e.filter((function(e){return"adverb"===e.fl}));u(o[0])}}(o)}),[d]);var $=function(e){try{e[0].hwi?(a(e),function(e){try{e.forEach((function(e){switch(e.fl){case"noun":j({type:"noun",value:!0}),Q(!0),U(!0);break;case"verb":j({type:"verb",value:!0}),Q(!0),U(!0);break;case"adjective":j({type:"adjective",value:!0}),Q(!0),U(!0);break;case"phrase":j({type:"phrase",value:!0}),Q(!0),U(!0);break;case"adverb":j({type:"adverb",value:!0}),Q(!0),U(!0)}}))}catch(t){console.log(t)}}(e)):(y(!0),L(!0),I("no response"),m())}catch(t){console.log(t),y(!0),L(!0),m()}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;""===e?(L(!0),I("no input"),m()):(T(e).then((function(e){return $(e)})),L(!1),I(""))},te=function(e){e&&r(""),U(!1),O(),c([]),l([]),s([]),i([]),u([]),a([])};Object(b.useEffect)((function(){"/thesaurus"!==g&&0!==Object.keys(d).length&&(j([]),te())}),[g]);return Object(b.useEffect)((function(){var e,t;"/thesaurus"!==g&&(null===o||void 0===o||null===(e=o[0])||void 0===e||null===(t=e.fl)||void 0===t?void 0:t.length)&&te()}),[g]),Object(N.jsxs)(N.Fragment,{children:["/thesaurus"===g&&M?Object(N.jsx)(ie,{children:Object(N.jsx)(b.Suspense,{fallback:null,children:Object(N.jsx)(Re,{isOpen2:C,onOpen2:k,onClose2:B,onToggle2:w,HandleBackButtonClick:te,getInputValue:Z,getWords:ee,setWordsLoaded:U,searchPop:q})})}):Object(N.jsx)(N.Fragment,{}),Object(N.jsx)(ve,{PathName:g,onOpen2:k,WordsLoaded:M,searchPop:q}),Object(N.jsx)(pe,{getWords:ee,Thesaurus:function(){var e;return e=n.length?p?Object(N.jsx)(S.a,{to:"/"}):Object(N.jsx)(_.a.TransitionFade,{children:Object(N.jsx)(je,{getWords:ee,AvailableWordType:d,WordsLoaded:M,Link:x.b,HandleBackButtonClick:te})}):Object(N.jsx)(S.a,{to:"/"}),Object(b.useEffect)((function(){p&&(r(""),y(!1))}),[p]),e},WordFindType:V,WordFind:D,isOpen:R,getInputValue:Z,HandleSearchButtonClick:function(){ee()},Link:x.b})]})}))),me=n(52),We=n(130),Ce=n.n(We),ke=n(7),Be=n(9),we={Word:"",ReturnedWord:"",ShortDef:"",PartOfSpeech:"",WordExample:"",Syns:[],Ants:[],WordArray:[],NounArray:[],VerbArray:[],AdjArray:[],PhraseArray:[],AdverbArray:[],AvailableWordType:[],isOpenSearchBar:!1,isCloseSearchBar:!0},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be.a.ON_OPEN_SEARCHBAR:return Object(Oe.a)(Object(Oe.a)({},e),{},{isOpenSearchBar:!0,isCloseSearchBar:!1});case Be.a.ON_CLOSE_SEARCHBAR:return Object(Oe.a)(Object(Oe.a)({},e),{},{isOpenSearchBar:!1,isCloseSearchBar:!0});case Be.a.ON_TOGGLE_SEARCHBAR:return Object(Oe.a)(Object(Oe.a)({},e),{},{isOpenSearchBar:!e.isOpenSearchBar,isCloseSearchBar:!e.isCloseSearchBar});case Be.a.SET_NOUN_ARRAY:return Object(Oe.a)(Object(Oe.a)({},e),{},{NounArray:t.payload});case Be.a.SET_AVAILABLE_WORD_TYPES:return Object(Oe.a)(Object(Oe.a)({},e),{},{AvailableWordType:Object(Oe.a)(Object(Oe.a)({},e.AvailableWordType),{},Object(ke.a)({},Object.keys(t.payload)[0],[Object.values(t.payload)[0]]))});case Be.a.RESET_AVAILABLE_WORD_TYPES:return Object(Oe.a)(Object(Oe.a)({},e),{},{AvailableWordType:[]});case Be.a.SET_ADVERB_ARRAY:return Object(Oe.a)(Object(Oe.a)({},e),{},{AdverbArray:t.payload});case Be.a.SET_PHRASE_ARRAY:return Object(Oe.a)(Object(Oe.a)({},e),{},{PhraseArray:t.payload});case Be.a.SET_VERB_ARRAY:return Object(Oe.a)(Object(Oe.a)({},e),{},{VerbArray:t.payload});case Be.a.SET_ADJ_ARRAY:return Object(Oe.a)(Object(Oe.a)({},e),{},{AdjArray:t.payload});case Be.a.SET_WORD:return Object(Oe.a)(Object(Oe.a)({},e),{},{Word:t.payload});case Be.a.SET_RETURNED_WORD:return Object(Oe.a)(Object(Oe.a)({},e),{},{ReturnedWord:t.payload});case Be.a.SET_SHORTDEF:return Object(Oe.a)(Object(Oe.a)({},e),{},{ShortDef:t.payload});case Be.a.SET_PART_OF_SPEECH:return Object(Oe.a)(Object(Oe.a)({},e),{},{PartOfSpeech:t.payload});case Be.a.SET_WORD_EXAMPLE:return Object(Oe.a)(Object(Oe.a)({},e),{},{WordExample:t.payload});case Be.a.SET_SYNS:return Object(Oe.a)(Object(Oe.a)({},e),{},{Syns:t.payload});case Be.a.SET_ANTS:return Object(Oe.a)(Object(Oe.a)({},e),{},{Ants:t.payload});case Be.a.SET_WORD_ARRAY:return Object(Oe.a)(Object(Oe.a)({},e),{},{WordArray:t.payload});default:return e}},Fe=Object(me.b)({words:Ne}),Pe=(Ce.a,Object(me.c)(Fe)),De=n(244),Le=Object(De.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});h.a.render(Object(N.jsx)(y.a,{store:Pe,children:Object(N.jsx)(j.a.StrictMode,{children:Object(N.jsx)(f.a,{children:Object(N.jsxs)(x.a,{basename:"/flary",children:[Object(N.jsx)(p.a,{initialColorMode:Le.config.initialColorMode}),Object(N.jsx)(Te,{})]})})})}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"j",(function(){return j})),n.d(t,"e",(function(){return O})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return f}));var r=n(7),a=n(9),c=function(e){return{type:a.a.SET_AVAILABLE_WORD_TYPES,payload:Object(r.a)({},e.type,e.value)}},o=function(){return{type:a.a.RESET_AVAILABLE_WORD_TYPES}},l=function(){return{type:a.a.ON_OPEN_SEARCHBAR}},s=function(){return{type:a.a.ON_TOGGLE_SEARCHBAR}},i=function(){return{type:a.a.ON_CLOSE_SEARCHBAR}},u=function(e){return{type:a.a.SET_PHRASE_ARRAY,payload:e}},d=function(e){return{type:a.a.SET_ADVERB_ARRAY,payload:e}},b=function(e){return{type:a.a.SET_NOUN_ARRAY,payload:e}},j=function(e){return{type:a.a.SET_VERB_ARRAY,payload:e}},O=function(e){return{type:a.a.SET_ADJ_ARRAY,payload:e}},h=function(e){return{type:a.a.SET_WORD,payload:e}},f=function(e){return{type:a.a.SET_WORD_ARRAY,payload:e}}},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SET_PHRASE_ARRAY:"SET_PHRASE_ARRAY",SET_ADVERB_ARRAY:"SET_ADVERB_ARRAY",SET_WORD:"SET_WORD",SET_RETURNED_WORD:"SET_RETURNED_WORD",SET_SHORTDEF:"SET_SHORTDEF",SET_PART_OF_SPEECH:"SET_PART_OF_SPEECH",SET_WORD_EXAMPLE:"SET_WORD_EXAMPLE",SET_SYNS:"SET_SYNS",SET_ANTS:"SET_ANTS",SET_WORD_ARRAY:"SET_WORD_ARRAY",SET_NOUN_ARRAY:"SET_NOUN_ARRAY",SET_VERB_ARRAY:"SET_VERB_ARRAY",SET_ADJ_ARRAY:"SET_ADJ_ARRAY",SET_AVAILABLE_WORD_TYPES:"SET_AVAILABLE_WORD_TYPES",RESET_AVAILABLE_WORD_TYPES:"RESET_AVAILABLE_WORD_TYPES",ON_OPEN_SEARCHBAR:"ON_OPEN_SEARCHBAR",ON_TOGGLE_SEARCHBAR:"ON_TOGGLE_SEARCHBAR",ON_CLOSE_SEARCHBAR:"ON_CLOSE_SEARCHBAR"}}},[[217,1,2]]]);
//# sourceMappingURL=main.19bae0e4.chunk.js.map