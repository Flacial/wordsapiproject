(this.webpackJsonpflary=this.webpackJsonpflary||[]).push([[0],{140:function(e,t,n){},141:function(e,t,n){},166:function(e,t){},207:function(e,t,n){"use strict";n.r(t);var c,r,o,a,l,s,i,b,x,j,d=n(0),u=n.n(d),p=n(117),h=n.n(p),O=(n(140),n(246)),f=n(241),g=n(35),m=n(39),y=n(4),v=(n(141),n(13)),C=n(118),w=n.n(C),F=n(232),S=n(36),k=n(86),B=n.n(k),E=n(119),T=function(){var e=Object(E.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://flary-server.herokuapp.com/thesaurus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t})});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),W=n(22),_=n(33),L=n.n(_),z=n(40),P=n(132),I=n(231),N=n(233),D=n(234),R=n(225),H=n(248),M=n(244),A=n(243),K=n(120),V=n(1),G=K.a.div(c||(c=Object(W.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 15px;\npadding-bottom: 20px;\nword-spacing: 0;\n"]))),J=Object(z.a)(G),U=function(e){var t=e.children,n=e.ml,c=e.mr,r=e.marginTop,o=e.boxShadow,a=e.gradientbg;e.isLargerthan440;return Object(V.jsx)(J,{boxShadow:o,bgGradient:a,ml:n,mr:c,marginTop:r,children:t})},Q=n(226),X=n(227),q=n(228),Y=n(247),Z=n(229),$=Object(v.h)((function(e){var t=e.history,n=e.HandleBackButtonClick,c=e.getWords,r=e.isOpen2,o=e.onToggle2,a=e.onClose2,l=(e.onOpen2,Object(d.useState)("")),s=Object(y.a)(l,2),i=s[0],b=s[1],x=Object(P.c)("#3B82F6","#ffa500"),j=Object(P.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),u=Object(P.c)("#252d3d","#edf2f7"),p=Object(d.useRef)(null),h=function(e){"E"===e.key&&e.ctrlKey&&e.shiftKey&&(e.preventDefault(),o(),(null===p||void 0===p?void 0:p.current)&&p.current.focus())};Object(d.useEffect)((function(){return document.addEventListener("keydown",h),function(){document.removeEventListener("keydown",h)}}),[r]),Object(d.useEffect)((function(){return r&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}}),[r]);return Object(V.jsx)(V.Fragment,{children:r?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(R.a,{position:"fixed",zIndex:"9999",background:"gray.800",opacity:"0.6",style:{height:"100vh",width:"100vw"}}),Object(V.jsx)(R.a,{children:Object(V.jsxs)(R.a,{position:"fixed",display:"flex",alignItems:"flex-start",justifyContent:"center",zIndex:"9999",style:{height:"100vh",width:"100vw"},children:[Object(V.jsx)(Q.a,{in:r,children:Object(V.jsx)(R.a,{className:"relative",children:Object(V.jsxs)(X.a,{mt:"32",children:[Object(V.jsx)(q.a,{zIndex:"9999999",pointerEvents:"none",children:Object(V.jsx)(Z.a,{zIndex:"9999999",color:u})}),Object(V.jsx)(Y.a,{ref:p,style:{zIndex:999999},placeholder:"Search a word",focusBorderColor:x,onKeyDown:function(e){"Enter"===e.key&&(n(!1),c(i),t.push("/thesaurus"),a())},background:j,color:u,w:["16rem","xs",null],rounded:"xl",onChange:function(e){b(e.target.value)}})]})})}),Object(V.jsx)(R.a,{position:"fixed",style:{height:"100vh",width:"100vw"},background:"transparent",onClick:a})]})})]}):Object(V.jsx)(V.Fragment,{})})})),ee=L.a.h1(r||(r=Object(W.a)(["\n    italic\n    font-serif\n    text-3xl\n    font-bold\n    inline-block\n"]))),te=Object(z.a)(ee),ne=L.a.div(o||(o=Object(W.a)(["\n    mt-1\n"]))),ce=L.a.h1(a||(a=Object(W.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),re=Object(z.a)(ce),oe=L.a.span(l||(l=Object(W.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),ae=Object(z.a)(oe),le=L.a.h2(s||(s=Object(W.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),se=Object(z.a)(le),ie=L.a.div(i||(i=Object(W.a)(["\n    mt-2\n    relative pl-6\n"]))),be=L.a.span(b||(b=Object(W.a)(["\n    text-xl\n    block\n"]))),xe=Object(z.a)(be),je=L.a.span(x||(x=Object(W.a)(["\n    text-gray-700\n    text-xl\n"]))),de=Object(z.a)(je),ue=Object(v.h)((function(e){var t=e.Link,n=e.HandleBackButtonClick,c=e.ReturnedWord,r=e.PartOfSpeech,o=e.ShortDef,a=e.ReactHtmlParser,l=e.WordExample,s=e.getPathName,i=e.WordsLoaded,b=e.Syns,x=e.Ants,j=e.HandleTabClick,u=e.AvailableWordType,p=e.getWords,h=e.history,O=Object(z.a)(t),f=Object(P.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),g=Object(P.c)("#252d3d","#edf2f7"),m=Object(P.c)("gray.700","#edf2f7"),y=Object(P.c)("#2563EB","#db8b02"),C=Object(P.c)("#3B82F6","orange"),w=Object(P.c)("#3B82F6","orange.300"),k=(Object(P.c)({background:"gray.200"},{background:"gray.700"}),Object(P.c)({textDecoration:"underline"},{textDecoration:"underline"})),B=Object(P.c)("#3B82F6","orange.200"),E=Object(P.c)("gray.700","orange.500"),T=(Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),Object(I.a)("(max-width: 440px)"),Object(P.c)({color:"#3B82F6"},{color:"orange"})),W=Object(P.c)("rgba(255, 255, 255, .9)","rgba(0, 0, 0, 0.26)"),_=Object(P.c)("linear(to-l, gray.200, white)"),L=Object(P.c)("0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6","0px 0px 11px #1c1c1c, -10px -10px 0px orange"),K=Object(F.a)(),G=(K.isOpen,K.onOpen,Object(d.useRef)(null)),J=Object(d.useRef)(null),Q=Object(d.useRef)(null),X=Object(P.c)({background:"gray.200"},{boxShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600"}),q=Object(P.c)("0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);","0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);"),Y=(Object(P.c)("0 1px 0 #CCCCCC, 0 1px 0 #c9c9c9, 0 1px 0 #bbb, 0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 1px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.3), 0 1px 2px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.2), 0 5px 5px rgba(0,0,0,.10);","0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);"),function(e){n(),p(e.target.textContent),h.push("/thesaurus")}),Z=function(e){var t=[];return void 0!==e&&(t=e.map((function(t,n){return void 0===e[n+1]?Object(V.jsx)(N.a,{_hover:k,className:"cursor-pointer",onClick:Y,listStyleType:"none",display:"inline-block",children:t},n):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(N.a,{_hover:k,className:"cursor-pointer",onClick:Y,listStyleType:"none",display:"inline-block",children:t},t),Object(V.jsx)("span",{children:",\xa0"},n)]})}))),t},$=Object(v.g)(),ee=function(e){var t="Thesaurus By Flary";document.title="mount"===e&&c.length?"".concat(c[0].toUpperCase()+c.slice(1)," Synonyms, ").concat(c," Antonyms | Flary Thesaurus"):t};Object(d.useEffect)((function(){return ee("mount"),function(){ee()}}),[c]),Object(d.useEffect)((function(){s($.pathname)}));var ce=function(e){"Q"===e.key&&e.ctrlKey&&(e.preventDefault(),n(),h.push("/"))},oe=function(e){switch(e.key){case"!":e.preventDefault(),G.current.click();break;case"@":e.preventDefault(),J.current.click();break;case"#":e.preventDefault(),Q.current.click()}};Object(d.useEffect)((function(){return document.addEventListener("keydown",oe),function(){document.removeEventListener("keydown",oe)}}),[]),Object(d.useEffect)((function(){return document.addEventListener("keydown",ce),function(){document.removeEventListener("keydown",ce)}}),[]),Object(d.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);var le=function(){return Object(V.jsxs)(U,{boxShadow:L,gradientbg:_,ml:["0","9em",null],mr:["0","9em",null],marginTop:["3",null,null],children:[Object(V.jsx)(te,{color:C,children:"Thesaurus"}),i?Object(V.jsxs)(S.a.TransitionFade,{children:[Object(V.jsxs)(ne,{children:[Object(V.jsx)(S.a.TransitionFade,{children:Object(V.jsx)(re,{color:m,children:c})}),Object(V.jsx)(ae,{color:C,children:r})]}),Object(V.jsxs)(se,{color:y,children:["Synonyms & Antonyms of"," ",Object(V.jsx)("em",{children:c})]}),Object(V.jsxs)(ie,{children:[Object(V.jsx)(de,{color:m,children:o}),o.slice(0,5)===l.slice(0,5)?Object(V.jsx)(V.Fragment,{}):Object(V.jsxs)(xe,{color:w,children:[" ",Object(V.jsx)("strong",{children:"//"})," ",a(l)]}),Object(V.jsxs)(D.a,{mb:"1",mt:"2",fontSize:"2xl",fontFamily:"sans-serif",color:y,children:["Synonyms for"," ",Object(V.jsx)(z.a.span,{fontStyle:"italic",children:c})]}),Object(V.jsx)(R.a,{w:["100%","70%",null],children:Object(V.jsx)(N.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:w,children:Z(b)})}),void 0!==x?Object(V.jsxs)("div",{children:[Object(V.jsxs)(D.a,{mb:"1",mt:"4",fontSize:"2xl",fontFamily:"sans-serif",color:y,children:["Antonyms for"," ",Object(V.jsx)(z.a.span,{fontStyle:"italic",children:c})]}),Object(V.jsx)(R.a,{w:["100%","70%",null],children:Object(V.jsx)(N.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:w,children:Z(x)})})]}):Object(V.jsx)(V.Fragment,{})]})]}):Object(V.jsx)(S.a.TransitionFade,{children:Object(V.jsxs)(H.a,{children:[Object(V.jsx)(M.a,{height:"9px",mt:"4",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",mb:"1",startColor:B,endColor:E}),Object(V.jsx)(M.a,{height:"9px",w:"80%",mb:"3",startColor:B,endColor:E})]})})]})};return Object(V.jsxs)(V.Fragment,{children:[c.length?Object(V.jsx)(R.a,{zIndex:"9991",className:"fixed top-0",left:[null,"32",null],children:Object(V.jsx)(O,{_focus:X,bg:f,color:g,boxShadow:q,_hover:X,onClick:n,className:"\n  py-2\n  px-4\n  rounded-xl\n  shadow-xl\n  inline-block\n  focus:outline-none\n  focus:border\n  focus:ring-2 focus:ring-blue-500\n  transition duration-500 ease-in-out\n  m-4\n",to:"/",children:"Back to search"})}):Object(V.jsx)(V.Fragment,{}),"/thesaurus"===$.pathname?Object(V.jsx)(R.a,{background:!CSS.supports("backdrop-filter","blur(5px)")&&W,className:"backdrop-blur",zIndex:"9990",position:"fixed",top:"0",h:"70px",w:"full",borderRadius:"0 0 20px 20px"}):Object(V.jsx)(V.Fragment,{}),Object(V.jsxs)(A.e,{align:"center",variant:"soft-rounded",children:[Object(V.jsxs)(A.b,{marginTop:["4","2",null],children:[u.noun?1===Object.keys(u).length?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(A.a,{mr:"4",boxShadow:q,ref:G,onClick:function(){return j("noun")},_hover:T,_selected:{color:g,bg:f},_focus:{color:g},outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Noun"}):Object(V.jsx)(V.Fragment,{}),u.verb?1===Object.keys(u).length?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(A.a,{mr:"4",boxShadow:q,ref:J,onClick:function(){return j("verb")},_hover:T,_selected:{color:g,bg:f},_focus:{color:g},outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Verb"}):Object(V.jsx)(V.Fragment,{}),u.adjective?1===Object.keys(u).length?Object(V.jsx)(V.Fragment,{}):Object(V.jsx)(A.a,{boxShadow:q,ref:Q,onClick:function(){return j("adjective")},_hover:T,_selected:{color:g,bg:f},_focus:{color:g},outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Adjective"}):Object(V.jsx)(V.Fragment,{})]}),Object(V.jsxs)(A.d,{children:[Object(V.jsx)(A.c,{children:le()}),Object(V.jsx)(A.c,{children:le()}),Object(V.jsx)(A.c,{children:le()})]})]})]})})),pe=n(130),he=n(236),Oe=n(245),fe=n(237),ge=L.a.div(j||(j=Object(W.a)(["\n   text-center\n   mt-40\n   sm:mt-0\n   md2:mt-38\n   lg:mt-32\n"]))),me=Object(v.h)((function(e){var t=e.WordFindType,n=e.WordFind,c=e.isOpen,r=e.getInputValue,o=e.HandleSearchButtonClick,a=e.getPathName,l=e.getWords,s=e.history,i=Object(I.a)("(max-width: 420px)"),b=Object(y.a)(i,1)[0],x=Object(v.g)(),j=(Object(P.c)("#3B82F6","orange"),Object(P.c)({color:"#3B82F6"},{color:"orange"}),Object(P.c)({background:"gray.200"},{boxShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600"})),u=(Object(P.c)("#edf2f7","gray.800"),Object(P.c)("#3B82F6","#ffa500"),Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),Object(d.useRef)(null)),p=Object(P.c)("0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);","0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);"),h=function(e){"A"===e.key&&e.ctrlKey&&(e.preventDefault(),u.current.focus())};return Object(d.useEffect)((function(){return document.addEventListener("keydown",h),function(){document.removeEventListener("keydown",h)}})),Object(d.useEffect)((function(){a(x.pathname)})),Object(V.jsxs)(ge,{children:[Object(V.jsx)(R.a,{display:"flex",alignContent:"center",justifyContent:"center",mt:["12",null,"15","0","32"],mb:["5",null,"12"],children:Object(V.jsx)(D.a,{textShadow:p,mt:["-20",0,0],mb:[0,10,null],fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:"Words to be thesaurused"})}),Object(V.jsxs)(R.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(V.jsxs)(R.a,{children:[Object(V.jsx)(R.a,{justifyContent:"center",display:"flex",w:["100%","xs",null],children:Object(V.jsxs)(R.a,{w:["18rem","xs",null],position:"relative",children:[Object(V.jsx)(Y.a,{boxShadow:p,ref:u,_hover:j,_focus:j,focusBorderColor:"transparent",onKeyPress:function(e){13===e.which&&(l(),s.push("/thesaurus"))},variant:"filled",w:["18rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],onChange:r,paddingY:"5",placeholder:"Search for words",paddingLeft:"9"}),Object(V.jsx)(Z.a,{position:"absolute",left:"3",top:"3.5"})]})}),n&&Object(V.jsx)(he.a,{in:c,children:Object(V.jsxs)(R.a,{mt:"2",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(V.jsx)(z.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(V.jsx)(z.a.span,{ml:"1",mb:["-1",0,0],color:"red.400",children:"no response"===t?"Word not found! (Misspelled)":"no input"===t?"Input is empty, type a word!":"The word is not in the thesaurus!"})]})})]}),!b&&Object(V.jsx)(R.a,{ml:[0,6,null],mt:[5,1,0],children:Object(V.jsx)(Oe.a,{_hover:j,_focus:j,color:"gray.800",bgColor:"gray.100",as:g.b,onClick:o,to:"/thesaurus",borderRadius:"xl",boxShadow:p,children:Object(V.jsx)(fe.a,{children:"Search"})})})]})]})}));var ye=function(e){var t=e.Thesaurus,n=Object(pe.a)(e,["Thesaurus"]),c=Object(v.g)();return Object(V.jsxs)(v.d,{location:c,children:[Object(V.jsx)(v.b,{exact:!0,path:"/",children:Object(V.jsx)(me,Object(m.a)({},n))}),Object(V.jsx)(v.b,{exact:!0,path:"/thesaurus",children:Object(V.jsx)(S.a.TransitionFade,{children:t()})})]},c.key)},ve=n(242),Ce=n(238),we=function(){var e=Object(P.c)("#edf2f7","gray.800"),t=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),n=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),c=Object(P.c)("gray.600","gray.400"),r=Object(P.c)("0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);","0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);"),o=Object(P.c)({background:"gray.200"},{boxShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600"});return Object(V.jsxs)(ve.a,{placement:"auto",children:[Object(V.jsx)(ve.g,{children:Object(V.jsx)(Oe.a,{_focus:o,focusBorderColor:n,boxShadow:r,outline:"none",_hover:o,outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:[null,"40",null],rounded:"xl",children:Object(V.jsx)(Ce.a,{})})}),Object(V.jsxs)(ve.e,{width:"max-content",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:t,background:e,children:[Object(V.jsx)(ve.b,{}),Object(V.jsx)(ve.d,{}),Object(V.jsx)(ve.f,{fontFamily:"Playfair Display",fontSize:["xl"],fontWeight:"bold",children:"Keyboard Shortcuts"}),Object(V.jsxs)(ve.c,{className:"whitespace-pre-wrap text-left",children:[Object(V.jsx)("strong",{children:"Global"})," ","\n",Object(V.jsxs)(z.a.span,{children:["Switch theme:"," ",Object(V.jsx)(z.a.span,{color:c,children:"Ctrl + Shift + X"})," ","\n"]}),Object(V.jsx)("hr",{}),Object(V.jsx)("strong",{children:"Home Page"})," ","\n",Object(V.jsxs)(z.a.span,{children:["Focus on input field:"," ",Object(V.jsx)(z.a.span,{color:c,children:"Ctrl + Shift + A"})," ","\n"]}),Object(V.jsx)("hr",{}),Object(V.jsx)("strong",{children:"Thesaurus Page"})," ","\n",Object(V.jsxs)(z.a.span,{children:["Go to Home Page:"," ",Object(V.jsx)(z.a.span,{color:c,children:"Ctrl + Shift + Q"})]}),"\n",Object(V.jsxs)(z.a.span,{children:["Search bar:"," ",Object(V.jsx)(z.a.span,{color:c,children:"Ctrl + Shift + E"})]}),"\n",Object(V.jsxs)(z.a.span,{children:["Switch word type:"," ",Object(V.jsx)(z.a.span,{color:c,children:"Shift + 1 or 2 or 3"})]})]})]})]})},Fe=n(239),Se=function(){var e=Object(P.b)(),t=e.colorMode,n=e.toggleColorMode,c=(Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),Object(d.useRef)(null)),r=Object(P.c)("0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);","0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);"),o=Object(P.c)({background:"gray.200"},{boxShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600"}),a=function(e){"X"===e.key&&e.ctrlKey&&(e.preventDefault(),c.current.click())};return Object(d.useEffect)((function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}),[]),Object(V.jsx)(Oe.a,{ref:c,_focus:o,_hover:o,focusBorderColor:"transparent",boxShadow:r,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:"-1",rounded:"xl",onClick:n,children:"light"===t?Object(V.jsx)(Fe.a,{}):Object(V.jsx)(z.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})})})},ke=function(e){var t=e.onOpen2,n=Object(P.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),c=Object(P.c)("0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);","0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);"),r=Object(P.c)({background:"gray.200"},{boxShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600"});return Object(V.jsx)(Oe.a,{_hover:r,_focus:r,focusBorderColor:n,boxShadow:c,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:"-1",rounded:"xl",onClick:t,children:Object(V.jsx)(Z.a,{})})},Be=function(e){var t=e.onOpen2,n=e.PathName,c=e.InputFiledSearchBarPopUp;return Object(V.jsxs)(R.a,{zIndex:"9991",position:"sticky",top:"0",h:"70px",display:"flex",justifyContent:"flex-end",children:["/thesaurus"===n?Object(V.jsx)(ke,{onOpen2:t,InputFiledSearchBarPopUp:c}):Object(V.jsx)(V.Fragment,{}),Object(V.jsx)(Se,{}),Object(V.jsx)(we,{})]})},Ee=function(){var e=Object(d.useState)(""),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(d.useState)(""),o=Object(y.a)(r,2),a=o[0],l=o[1],s=Object(d.useState)(""),i=Object(y.a)(s,2),b=i[0],x=i[1],j=Object(d.useState)(""),u=Object(y.a)(j,2),p=u[0],h=u[1],O=Object(d.useState)(""),f=Object(y.a)(O,2),C=f[0],k=f[1],B=Object(d.useState)(!1),E=Object(y.a)(B,2),W=E[0],_=E[1],L=Object(d.useState)(""),z=Object(y.a)(L,2),P=z[0],I=z[1],N=Object(F.a)(),D=N.isOpen,R=N.onOpen,H=Object(F.a)(),M=H.isOpen,A=H.onOpen,K=H.onClose,G=H.onToggle,J=Object(d.useState)(!1),U=Object(y.a)(J,2),Q=U[0],X=U[1],q=Object(d.useState)(""),Y=Object(y.a)(q,2),Z=Y[0],ee=Y[1],te=Object(d.useState)(!1),ne=Object(y.a)(te,2),ce=ne[0],re=ne[1],oe=Object(d.useState)([]),ae=Object(y.a)(oe,2),le=ae[0],se=ae[1],ie=Object(d.useState)([]),be=Object(y.a)(ie,2),xe=be[0],je=be[1],de=Object(d.useState)([]),pe=Object(y.a)(de,2),he=pe[0],Oe=pe[1],fe=Object(d.useState)({}),ge=Object(y.a)(fe,2),me=ge[0],ve=ge[1];Object(d.useEffect)((function(){"/thesaurus"!==P||b.length?"/thesaurus"===P&&b.length&&re(!0):re(!1)}));var Ce=function(e){c(e.target.value)},we=function(e,t){return e.filter((function(e){return e.fl===t}))[0]},Fe=function(e){var t,n,c,r,o=e.fl,a=e.hwi.hw,s=e.shortdef,i=Object(y.a)(e.def,1)[0].sseq,b=e.meta.syns,j=e.meta.ants,d=(null!==(t=null===(n=i[0][0][1].dt)||void 0===n||null===(c=n[1])||void 0===c||null===(r=c[1])||void 0===r?void 0:r[0].t)&&void 0!==t?t:i[0][0][1].dt[0][1]).replace("{it}","<em>").replace("{/it}","</em>");je(j[0]),se(b[0]),l(a),h(o),x(s[0]),k(d)},Se=function(e){try{e[0].hwi?(Oe(e),function(e){try{e:for(var t=0;t<4;t++){for(var n=0;n<e.length;n++)if("noun"===e[n].fl){Fe(we(e,"noun"));break e}for(var c=0;c<e.length;c++)if("verb"===e[c].fl){Fe(we(e,"verb"));break e}for(var r=0;r<e.length;r++)if("adjective"===e[r].fl){Fe(we(e,"adjective"));break e}for(var o=0;o<e.length;o++){var a=e[o];if("noun"!==a.fl){Fe(we(e,a.fl));break e}}}}catch(l){console.log(l)}}(e),function(e){try{e.forEach((function(e){switch(e.fl){case"noun":ve((function(e){return Object(m.a)(Object(m.a)({},e),{},{noun:!0})}));break;case"verb":ve((function(e){return Object(m.a)(Object(m.a)({},e),{},{verb:!0})}));break;case"adjective":ve((function(e){return Object(m.a)(Object(m.a)({},e),{},{adjective:!0})}))}}))}catch(t){console.log(t)}}(e)):(_(!0),X(!0),ee("no response"),R())}catch(t){_(!0),X(!0),R()}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;""===n?(X(!0),ee("no input"),R()):(T(e).then((function(e){return Se(e)})),X(!1),ee(""))},Ee=function(e){re(!1),e&&c(""),l(""),h(""),x(""),k(""),se([]),je([]),ve({})};Object(d.useEffect)((function(){"/thesaurus"!==P&&0!==Object.keys(me).length&&(ve({}),Ee())}),[P]);var Te=function(e){switch(e){case"verb":Fe(we(he,"verb"));break;case"noun":Fe(we(he,"noun"));break;case"adjective":Fe(we(he,"adjective"))}},We=function(e){I(e)},_e=function(){return Object(V.jsx)(ue,{setWordsLoaded:re,getInputValue:Ce,getWords:ke,AvailableWordType:me,HandleTabClick:Te,PathName:P,Ants:xe,Syns:le,WordsLoaded:ce,Word:n,Link:g.b,HandleBackButtonClick:Ee,ReturnedWord:a,PartOfSpeech:p,ShortDef:b,ReactHtmlParser:w.a,WordExample:C,getPathName:We})};return Object(d.useEffect)((function(){"/thesaurus"!==P&&b.length&&Ee()}),[P]),Object(V.jsxs)(V.Fragment,{children:["/thesaurus"===P?Object(V.jsx)($,{isOpen2:M,onOpen2:A,onClose2:K,onToggle2:G,HandleBackButtonClick:Ee,getInputValue:Ce,getWords:ke,setWordsLoaded:re}):Object(V.jsx)(V.Fragment,{}),Object(V.jsx)(Be,{PathName:P,onOpen2:A,ReturnedWord:a}),Object(V.jsx)(ye,{getWords:ke,Thesaurus:function(){var e;return e=n.length?a.length?Object(V.jsx)(S.a.TransitionFade,{children:_e()}):W?Object(V.jsx)(v.a,{to:"/"}):Object(V.jsx)(S.a.TransitionFade,{children:_e()}):Object(V.jsx)(v.a,{to:"/"}),Object(d.useEffect)((function(){W&&(c(""),_(!1))}),[W]),e},WordFindType:Z,WordFind:Q,isOpen:D,getInputValue:Ce,HandleSearchButtonClick:function(){ke()},Link:g.b,getPathName:We})]})},Te=n(240),We=Object(Te.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});h.a.render(Object(V.jsx)(u.a.StrictMode,{children:Object(V.jsx)(O.a,{children:Object(V.jsxs)(g.a,{basename:"/flary",children:[Object(V.jsx)(f.a,{initialColorMode:We.config.initialColorMode}),Object(V.jsx)(Ee,{})]})})}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.54ef48f0.chunk.js.map