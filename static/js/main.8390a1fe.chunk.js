(this.webpackJsonpwordsapiproject=this.webpackJsonpwordsapiproject||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},167:function(e,t){},208:function(e,t,n){"use strict";n.r(t);var c,o,r,a,s,l,i,j,u,d,b=n(0),h=n.n(b),O=n(117),x=n.n(O),f=(n(141),n(247)),p=n(243),g=n(36),m=n(39),y=n(4),v=(n(142),n(12)),w=n(118),k=n.n(w),S=n(233),C=n(34),F=n(86),B=n.n(F),E=n(119),T=function(){var e=Object(E.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://wordsapiprojectserver.herokuapp.com/thesaurus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t})});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),W=n(21),z=n(32),_=n.n(z),L=n(45),P=n(133),I=n(232),N=n(234),D=n(235),H=n(226),M=n(249),R=n(246),A=n(245),K=n(120),V=n(1),G=K.a.div(c||(c=Object(W.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 15px;\npadding-bottom: 20px;\nword-spacing: 0;\n"]))),J=Object(L.a)(G),Q=function(e){var t=e.children,n=e.ml,c=e.mr,o=e.marginTop,r=e.boxShadow,a=e.gradientbg;e.isLargerthan440;return Object(V.jsx)(J,{boxShadow:r,bgGradient:a,ml:n,mr:c,marginTop:o,children:t})},U=n(227),X=n(228),q=n(229),Y=n(248),Z=n(230),$=Object(v.h)((function(e){var t=e.history,n=e.HandleBackButtonClick,c=e.getWords,o=e.isOpen2,r=e.onToggle2,a=e.onClose2,s=(e.onOpen2,Object(b.useState)("")),l=Object(y.a)(s,2),i=l[0],j=l[1],u=Object(P.c)("#3B82F6","#ffa500"),d=Object(P.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),h=Object(P.c)("#252d3d","#edf2f7"),O=Object(b.useRef)(null),x=function(e){"E"===e.key&&e.ctrlKey&&e.shiftKey&&(e.preventDefault(),r(),(null===O||void 0===O?void 0:O.current)&&O.current.focus())};Object(b.useEffect)((function(){return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}}),[o]),Object(b.useEffect)((function(){return o&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}}),[o]);return Object(V.jsx)(V.Fragment,{children:o?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(H.a,{position:"absolute",zIndex:"9999",background:"gray.800",opacity:"0.6",style:{height:"100vh",width:"100vw"}}),Object(V.jsx)(H.a,{children:Object(V.jsxs)(H.a,{position:"absolute",display:"flex",alignItems:"flex-start",justifyContent:"center",zIndex:"9999",style:{height:"100vh",width:"100vw"},children:[Object(V.jsx)(U.a,{in:o,children:Object(V.jsx)(H.a,{className:"relative",children:Object(V.jsxs)(X.a,{mt:"32",children:[Object(V.jsx)(q.a,{zIndex:"9999999",pointerEvents:"none",children:Object(V.jsx)(Z.a,{zIndex:"9999999",color:h})}),Object(V.jsx)(Y.a,{ref:O,style:{zIndex:999999},placeholder:"Search a word",focusBorderColor:u,onKeyDown:function(e){"Enter"===e.key&&(n(!1),c(i),t.push("/thesaurus"),a())},background:d,color:h,w:["16rem","xs",null],rounded:"xl",onChange:function(e){j(e.target.value)}})]})})}),Object(V.jsx)(H.a,{position:"absolute",style:{height:"100vh",width:"100vw"},background:"transparent",onClick:a})]})})]}):Object(V.jsx)(V.Fragment,{})})})),ee=_.a.h1(o||(o=Object(W.a)(["\n    italic\n    font-serif\n    text-3xl\n    font-bold\n    inline-block\n"]))),te=Object(L.a)(ee),ne=_.a.div(r||(r=Object(W.a)(["\n    mt-1\n"]))),ce=_.a.h1(a||(a=Object(W.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),oe=Object(L.a)(ce),re=_.a.span(s||(s=Object(W.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),ae=Object(L.a)(re),se=_.a.h2(l||(l=Object(W.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),le=Object(L.a)(se),ie=_.a.div(i||(i=Object(W.a)(["\n    mt-2\n    relative pl-6\n"]))),je=_.a.span(j||(j=Object(W.a)(["\n    text-xl\n    block\n"]))),ue=Object(L.a)(je),de=_.a.span(u||(u=Object(W.a)(["\n    text-gray-700\n    text-xl\n"]))),be=Object(L.a)(de),he=Object(v.h)((function(e){var t=e.Link,n=e.HandleBackButtonClick,c=e.ReturnedWord,o=e.PartOfSpeech,r=e.ShortDef,a=e.ReactHtmlParser,s=e.WordExample,l=e.getPathName,i=e.WordsLoaded,j=e.Syns,u=e.Ants,d=e.HandleTabClick,h=e.AvailableWordType,O=e.getWords,x=e.history,f=Object(L.a)(t),p=Object(P.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),g=Object(P.c)("#252d3d","#edf2f7"),m=Object(P.c)("gray.700","#edf2f7"),w=Object(P.c)("#2563EB","#db8b02"),k=Object(P.c)("#3B82F6","orange"),F=Object(P.c)("#3B82F6","orange.300"),B=Object(P.c)({background:"gray.200"},{background:"gray.700"}),E=Object(P.c)({textDecoration:"underline"},{textDecoration:"underline"}),T=Object(P.c)("#3B82F6","orange.200"),W=Object(P.c)("gray.700","orange.500"),z=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),_=(Object(I.a)("(max-width: 440px)"),Object(P.c)({color:"#3B82F6"},{color:"orange"})),K=Object(P.c)("rgba(255, 255, 255, .9)","rgba(0, 0, 0, 0.26)"),G=Object(P.c)("linear(to-l, gray.200, white)"),J=Object(P.c)("0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6","0px 0px 11px #1c1c1c, -10px -10px 0px orange"),U=Object(S.a)(),X=(U.isOpen,U.onOpen,Object(b.useState)(!1)),q=Object(y.a)(X,2),Y=(q[0],q[1]),Z=Object(b.useRef)(null),$=Object(b.useRef)(null),ee=Object(b.useRef)(null),ce=function(e){n(),O(e.target.textContent),x.push("/thesaurus")},re=function(e){var t=[];return void 0!==e&&(t=e.map((function(t,n){return void 0===e[n+1]?Object(V.jsx)(N.a,{_hover:E,className:"cursor-pointer",onClick:ce,listStyleType:"none",display:"inline-block",children:t},n):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(N.a,{_hover:E,className:"cursor-pointer",onClick:ce,listStyleType:"none",display:"inline-block",children:t},t),Object(V.jsx)("span",{children:",\xa0"},n)]})}))),t},se=Object(v.g)();Object(b.useEffect)((function(){l(se.pathname)}));var je=function(e){"Q"===e.key&&e.ctrlKey&&(n(),x.push("/"))},de=function(e){switch(e.key){case"!":e.preventDefault(),Z.current.click();break;case"@":e.preventDefault(),$.current.click();break;case"#":e.preventDefault(),ee.current.click()}};Object(b.useEffect)((function(){return document.addEventListener("keydown",de),function(){document.removeEventListener("keydown",de)}}),[]),Object(b.useEffect)((function(){return document.addEventListener("keydown",je),function(){document.removeEventListener("keydown",je),Y(!1)}}),[]),Object(b.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);var he=function(){return Object(V.jsxs)(Q,{boxShadow:J,gradientbg:G,ml:["0","9em",null],mr:["0","9em",null],marginTop:["3",null,null],children:[Object(V.jsx)(te,{color:k,children:"Thesaurus"}),i?Object(V.jsxs)(C.a.TransitionFade,{children:[Object(V.jsxs)(ne,{children:[Object(V.jsx)(C.a.TransitionFade,{children:Object(V.jsx)(oe,{color:m,children:c})}),Object(V.jsx)(ae,{color:k,children:o})]}),Object(V.jsxs)(le,{color:w,children:["Synonyms & Antonyms of"," ",Object(V.jsx)("em",{children:c})]}),Object(V.jsxs)(ie,{children:[Object(V.jsx)(be,{color:m,children:r}),r.slice(0,5)===s.slice(0,5)?Object(V.jsx)(V.Fragment,{}):Object(V.jsxs)(ue,{color:F,children:[" ",Object(V.jsx)("strong",{children:"//"})," ",a(s)]}),Object(V.jsxs)(D.a,{mb:"1",mt:"2",fontSize:"2xl",fontFamily:"sans-serif",color:w,children:["Synonyms for"," ",Object(V.jsx)(L.a.span,{fontStyle:"italic",children:c})]}),Object(V.jsx)(H.a,{w:["100%","70%",null],children:Object(V.jsx)(N.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:F,children:re(j)})}),void 0!==u?Object(V.jsxs)("div",{children:[Object(V.jsxs)(D.a,{mb:"1",mt:"4",fontSize:"2xl",fontFamily:"sans-serif",color:w,children:["Antonyms for"," ",Object(V.jsx)(L.a.span,{fontStyle:"italic",children:c})]}),Object(V.jsx)(H.a,{w:["100%","70%",null],children:Object(V.jsx)(N.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:F,children:re(u)})})]}):Object(V.jsx)(V.Fragment,{})]})]}):Object(V.jsx)(C.a.TransitionFade,{children:Object(V.jsxs)(M.a,{children:[Object(V.jsx)(R.a,{height:"9px",mt:"4",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",mb:"1",startColor:T,endColor:W}),Object(V.jsx)(R.a,{height:"9px",w:"80%",mb:"3",startColor:T,endColor:W})]})})]})};return Object(V.jsxs)(V.Fragment,{children:[c.length?Object(V.jsx)(H.a,{zIndex:"9991",className:"fixed top-0",left:[null,"32",null],children:Object(V.jsx)(f,{_focus:z,bg:p,color:g,_hover:B,onClick:n,className:"\n  py-2\n  px-4\n  rounded-xl\n  shadow-xl\n  inline-block\n  focus:outline-none\n  focus:border\n  focus:ring-2 focus:ring-blue-500\n  transition duration-500 ease-in-out\n  m-4\n",to:"/",children:"Back to search"})}):Object(V.jsx)(V.Fragment,{}),"/thesaurus"===se.pathname?Object(V.jsx)(H.a,{background:!CSS.supports("backdrop-filter","blur(5px)")&&K,className:"backdrop-blur",zIndex:"9990",position:"fixed",top:"0",h:"70px",w:"full",borderRadius:"0 0 20px 20px"}):Object(V.jsx)(V.Fragment,{}),Object(V.jsxs)(A.e,{align:"center",variant:"soft-rounded",children:[Object(V.jsxs)(A.b,{marginTop:["4","2",null],children:[h.noun?1===Object.keys(h).length?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(A.a,{ref:Z,onClick:function(){return d("noun")},_hover:_,_selected:{color:g,bg:p},_focus:z,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Noun"}):Object(V.jsx)(V.Fragment,{}),h.verb?1===Object.keys(h).length?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(A.a,{ref:$,onClick:function(){return d("verb")},_hover:_,_selected:{color:g,bg:p},_focus:z,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Verb"}):Object(V.jsx)(V.Fragment,{}),h.adjective?1===Object.keys(h).length?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(A.a,{ref:ee,onClick:function(){return d("adjective")},_hover:_,_selected:{color:g,bg:p},_focus:z,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Adjective"}):Object(V.jsx)(V.Fragment,{})]}),Object(V.jsxs)(A.d,{children:[Object(V.jsx)(A.c,{children:he()}),Object(V.jsx)(A.c,{children:he()}),Object(V.jsx)(A.c,{children:he()})]})]})]})})),Oe=n(131),xe=n(244),fe=n(237),pe=n(239),ge=n(238),me=_.a.div(d||(d=Object(W.a)(["\n   text-center\n   mt-40\n   sm:mt-0\n   md2:mt-38\n   lg:mt-32\n"]))),ye=Object(v.h)((function(e){var t=e.WordFindType,n=e.WordFind,c=e.isOpen,o=e.getInputValue,r=e.HandleSearchButtonClick,a=e.Link,s=e.getPathName,l=e.getWords,i=e.history,j=Object(I.a)("(max-width: 420px)"),u=Object(y.a)(j,1)[0],d=Object(v.g)(),h=Object(L.a)(a),O=Object(P.c)("#3B82F6","orange"),x=Object(P.c)({color:"#3B82F6"},{color:"orange"}),f=Object(P.c)("#edf2f7","gray.800"),p=Object(P.c)("#3B82F6","#ffa500"),g=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),m=Object(b.useRef)(null),w=function(e){"A"===e.key&&e.ctrlKey&&(e.preventDefault(),m.current.focus())};return Object(b.useEffect)((function(){return document.addEventListener("keydown",w),function(){document.removeEventListener("keydown",w)}})),Object(b.useEffect)((function(){s(d.pathname)})),Object(V.jsxs)(me,{children:[Object(V.jsxs)(H.a,{display:"flex",alignContent:"center",justifyContent:"center",mt:["12",null,"15","0","32"],mb:["5",null,"12"],children:[Object(V.jsxs)(D.a,{fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:["Words to be",u?"\xa0":" thesaurused"]}),Object(V.jsxs)(xe.a,{placement:"auto-end",display:"inline-block",children:[Object(V.jsx)(xe.g,{children:u?Object(V.jsx)(D.a,{textDecoration:"underline wavy ".concat(O),_hover:[null,null,x],cursor:"pointer",fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:"thesaurused"}):Object(V.jsx)(fe.a,{variant:"ghost",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:g,ml:"2",size:"sm",icon:Object(V.jsx)(ge.a,{w:"5",h:"5"})})}),Object(V.jsxs)(xe.e,{outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:g,background:f,children:[Object(V.jsx)(xe.b,{}),Object(V.jsx)(xe.d,{}),Object(V.jsx)(xe.f,{fontFamily:"Playfair Display",fontSize:["xl"],fontWeight:"bold",children:"Thesaurus"}),Object(V.jsx)(xe.c,{children:"A thesaurus (plural thesauri or thesauruses) or synonym dictionary is a reference work for finding synonyms and sometimes antonyms of words."})]})]})]}),Object(V.jsxs)(H.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(V.jsxs)(H.a,{children:[Object(V.jsx)(Y.a,{ref:m,focusBorderColor:p,onKeyPress:function(e){13===e.which&&(l(),i.push("/thesaurus"))},variant:"filled",w:["16rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],onChange:o,placeholder:"Search for words"}),n&&Object(V.jsx)(pe.a,{in:c,children:Object(V.jsxs)(H.a,{mt:"1",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(V.jsx)(L.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(V.jsx)(L.a.span,{ml:"1",mb:["-1",0,0],color:"red.400",children:"no response"===t?"Word not found! (Misspelled)":"no input"===t?"Input is empty, type a word!":"The word is not in the thesaurus!"})]})})]}),Object(V.jsx)(H.a,{ml:[0,5,0],mt:[5,1,0],children:Object(V.jsx)(h,{_hover:{background:"gray.200"},_focus:g,color:u?f:"gray.800",bgColor:u?O:"gray.100",fontWeight:"semibold",onClick:r,className:"\npy-1\npx-3\nrounded-xl\nshadow-2xl\ninline-block\nmd:py-1\nmd:h-8\nmd:mt-1\nmd:px-4\nfocus:outline-none\nfocus:ring-2 focus:ring-blue-400\nhover:bg-gray-200\ntransition duration-200 ease-in-out\n",to:"/thesaurus",children:"Search"})})]})]})}));var ve=function(e){var t=e.Thesaurus,n=Object(Oe.a)(e,["Thesaurus"]),c=Object(v.g)();return Object(V.jsxs)(v.d,{location:c,children:[Object(V.jsx)(v.b,{exact:!0,path:"/",children:Object(V.jsx)(ye,Object(m.a)({},n))}),Object(V.jsx)(v.b,{exact:!0,path:"/thesaurus",children:Object(V.jsx)(C.a.TransitionFade,{children:t()})})]},c.key)},we=n(130),ke=n(240),Se=function(){var e=Object(P.c)("#edf2f7","gray.800"),t=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),n=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),c=Object(P.c)("gray.600","gray.400");return Object(V.jsxs)(xe.a,{placement:"auto",children:[Object(V.jsx)(xe.g,{children:Object(V.jsx)(we.a,{_focus:n,focusBorderColor:n,boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:[null,"40",null],rounded:"xl",children:Object(V.jsx)(ke.a,{})})}),Object(V.jsxs)(xe.e,{width:"max-content",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:t,background:e,children:[Object(V.jsx)(xe.b,{}),Object(V.jsx)(xe.d,{}),Object(V.jsx)(xe.f,{fontFamily:"Playfair Display",fontSize:["xl"],fontWeight:"bold",children:"Keyboard Shortcuts"}),Object(V.jsxs)(xe.c,{className:"whitespace-pre-wrap text-left",children:[Object(V.jsx)("strong",{children:"Global"})," ","\n",Object(V.jsxs)(L.a.span,{children:["Switch theme:"," ",Object(V.jsx)(L.a.span,{color:c,children:"Ctrl + Shift + X"})," ","\n"]}),Object(V.jsx)("hr",{}),Object(V.jsx)("strong",{children:"Home Page"})," ","\n",Object(V.jsxs)(L.a.span,{children:["Focus on input field:"," ",Object(V.jsx)(L.a.span,{color:c,children:"Ctrl + Shift + A"})," ","\n"]}),Object(V.jsx)("hr",{}),Object(V.jsx)("strong",{children:"Thesaurus Page"})," ","\n",Object(V.jsxs)(L.a.span,{children:["Go to Home Page:"," ",Object(V.jsx)(L.a.span,{color:c,children:"Ctrl + Shift + Q"})]}),"\n",Object(V.jsxs)(L.a.span,{children:["Search bar:"," ",Object(V.jsx)(L.a.span,{color:c,children:"Ctrl + Shift + E"})]}),"\n",Object(V.jsxs)(L.a.span,{children:["Switch word type:"," ",Object(V.jsx)(L.a.span,{color:c,children:"Shift + 1 or 2 or 3"})]})]})]})]})},Ce=n(241),Fe=function(){var e=Object(P.b)(),t=e.colorMode,n=e.toggleColorMode,c=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),o=Object(b.useRef)(null),r=function(e){"X"===e.key&&e.ctrlKey&&(e.preventDefault(),o.current.click())};return Object(b.useEffect)((function(){return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}}),[]),Object(V.jsx)(we.a,{ref:o,_focus:c,focusBorderColor:c,boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:"-1",rounded:"xl",onClick:n,children:"light"===t?Object(V.jsx)(Ce.a,{}):Object(V.jsx)(L.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})})})},Be=function(e){var t=e.onOpen2,n=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"});return Object(V.jsx)(we.a,{_focus:n,focusBorderColor:n,boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:"-1",rounded:"xl",onClick:t,children:Object(V.jsx)(Z.a,{})})},Ee=function(e){var t=e.onOpen2,n=e.PathName,c=e.InputFiledSearchBarPopUp;return Object(V.jsxs)(H.a,{zIndex:"9991",position:"sticky",top:"0",h:"70px",w:"100vw",borderRadius:"0 0 20px 20px",display:"flex",justifyContent:"flex-end",children:["/thesaurus"===n?Object(V.jsx)(Be,{onOpen2:t,InputFiledSearchBarPopUp:c}):Object(V.jsx)(V.Fragment,{}),Object(V.jsx)(Fe,{}),Object(V.jsx)(Se,{})]})},Te=function(){var e=Object(b.useState)(""),t=Object(y.a)(e,2),n=t[0],c=t[1],o=Object(b.useState)(""),r=Object(y.a)(o,2),a=r[0],s=r[1],l=Object(b.useState)(""),i=Object(y.a)(l,2),j=i[0],u=i[1],d=Object(b.useState)(""),h=Object(y.a)(d,2),O=h[0],x=h[1],f=Object(b.useState)(""),p=Object(y.a)(f,2),w=p[0],F=p[1],B=Object(b.useState)(!1),E=Object(y.a)(B,2),W=E[0],z=E[1],_=Object(b.useState)(""),L=Object(y.a)(_,2),P=L[0],I=L[1],N=Object(S.a)(),D=N.isOpen,H=N.onOpen,M=Object(S.a)(),R=M.isOpen,A=M.onOpen,K=M.onClose,G=M.onToggle,J=Object(b.useState)(!1),Q=Object(y.a)(J,2),U=Q[0],X=Q[1],q=Object(b.useState)(""),Y=Object(y.a)(q,2),Z=Y[0],ee=Y[1],te=Object(b.useState)(!1),ne=Object(y.a)(te,2),ce=ne[0],oe=ne[1],re=Object(b.useState)([]),ae=Object(y.a)(re,2),se=ae[0],le=ae[1],ie=Object(b.useState)([]),je=Object(y.a)(ie,2),ue=je[0],de=je[1],be=Object(b.useState)([]),Oe=Object(y.a)(be,2),xe=Oe[0],fe=Oe[1],pe=Object(b.useState)({}),ge=Object(y.a)(pe,2),me=ge[0],ye=ge[1];Object(b.useEffect)((function(){"/thesaurus"!==P||j.length?"/thesaurus"===P&&j.length&&oe(!0):oe(!1)}));var we=function(e){c(e.target.value)},ke=function(e,t){return e.filter((function(e){return e.fl===t}))[0]},Se=function(e){var t,n,c,o,r=e.fl,a=e.hwi.hw,l=e.shortdef,i=Object(y.a)(e.def,1)[0].sseq,j=e.meta.syns,d=e.meta.ants,b=(null!==(t=null===(n=i[0][0][1].dt)||void 0===n||null===(c=n[1])||void 0===c||null===(o=c[1])||void 0===o?void 0:o[0].t)&&void 0!==t?t:i[0][0][1].dt[0][1]).replace("{it}","<em>").replace("{/it}","</em>");de(d[0]),le(j[0]),s(a),x(r),u(l[0]),F(b)},Ce=function(e){try{e[0].hwi?(fe(e),function(e){try{e:for(var t=0;t<4;t++){for(var n=0;n<e.length;n++)if("noun"===e[n].fl){Se(ke(e,"noun"));break e}for(var c=0;c<e.length;c++)if("verb"===e[c].fl){Se(ke(e,"verb"));break e}for(var o=0;o<e.length;o++)if("adjective"===e[o].fl){Se(ke(e,"adjective"));break e}for(var r=0;r<e.length;r++){var a=e[r];if("noun"!==a.fl){Se(ke(e,a.fl));break e}}}}catch(s){console.log(s)}}(e),function(e){try{e.forEach((function(e){switch(e.fl){case"noun":ye((function(e){return Object(m.a)(Object(m.a)({},e),{},{noun:!0})}));break;case"verb":ye((function(e){return Object(m.a)(Object(m.a)({},e),{},{verb:!0})}));break;case"adjective":ye((function(e){return Object(m.a)(Object(m.a)({},e),{},{adjective:!0})}))}}))}catch(t){console.log(t)}}(e)):(z(!0),X(!0),ee("no response"),H())}catch(t){z(!0),X(!0),H()}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;""===n?(X(!0),ee("no input"),H()):(T(e).then((function(e){return Ce(e)})),X(!1),ee(""))},Be=function(e){oe(!1),e&&c(""),s(""),x(""),u(""),F(""),le([]),de([]),ye({})};Object(b.useEffect)((function(){"/thesaurus"!==P&&0!==Object.keys(me).length&&(ye({}),Be())}),[P]);var Te=function(e){switch(e){case"verb":Se(ke(xe,"verb"));break;case"noun":Se(ke(xe,"noun"));break;case"adjective":Se(ke(xe,"adjective"))}},We=function(e){I(e)},ze=function(){return Object(V.jsx)(he,{setWordsLoaded:oe,getInputValue:we,getWords:Fe,AvailableWordType:me,HandleTabClick:Te,PathName:P,Ants:ue,Syns:se,WordsLoaded:ce,Word:n,Link:g.b,HandleBackButtonClick:Be,ReturnedWord:a,PartOfSpeech:O,ShortDef:j,ReactHtmlParser:k.a,WordExample:w,getPathName:We})};return Object(b.useEffect)((function(){"/thesaurus"!==P&&j.length&&Be()}),[P]),Object(V.jsxs)(V.Fragment,{children:["/thesaurus"===P?Object(V.jsx)($,{isOpen2:R,onOpen2:A,onClose2:K,onToggle2:G,HandleBackButtonClick:Be,getInputValue:we,getWords:Fe,setWordsLoaded:oe}):Object(V.jsx)(V.Fragment,{}),Object(V.jsx)(Ee,{PathName:P,onOpen2:A}),Object(V.jsx)(ve,{getWords:Fe,Thesaurus:function(){var e;return e=n.length?a.length?Object(V.jsx)(C.a.TransitionFade,{children:ze()}):W?Object(V.jsx)(v.a,{to:"/"}):Object(V.jsx)(C.a.TransitionFade,{children:ze()}):Object(V.jsx)(v.a,{to:"/"}),Object(b.useEffect)((function(){W&&(c(""),z(!1))}),[W]),e},WordFindType:Z,WordFind:U,isOpen:D,getInputValue:we,HandleSearchButtonClick:function(){Fe()},Link:g.b,getPathName:We})]})},We=n(242),ze=Object(We.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});x.a.render(Object(V.jsx)(h.a.StrictMode,{children:Object(V.jsx)(f.a,{children:Object(V.jsxs)(g.a,{basename:"/wordsapiproject",children:[Object(V.jsx)(p.a,{initialColorMode:ze.config.initialColorMode}),Object(V.jsx)(Te,{})]})})}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.8390a1fe.chunk.js.map