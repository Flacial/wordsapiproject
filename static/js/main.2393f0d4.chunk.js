(this.webpackJsonpwordsapiproject=this.webpackJsonpwordsapiproject||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},159:function(e,t){},200:function(e,t,n){"use strict";n.r(t);var c,o,a,r,l,i,s,j,b,d,u=n(0),O=n.n(u),h=n(106),x=n.n(h),f=(n(133),n(3)),p=(n(134),n(11)),m=n(27),g=n(76),y=n.n(g),v=n(77),S=n.n(v),w=n(107),k=function(){var e=Object(w.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://wordsapiprojectserver.herokuapp.com/thesaurus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t})});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),C=n(19),F=n(109),B=n(24),T=n.n(B),W=n(44),P=n(218),_=n(125),z=n(219),E=n(220),N=n(221),M=n(232),L=n(231),A=n(32),D=n(2),R=T.a.h1(c||(c=Object(C.a)(["\n    italic\n    font-serif\n    text-3xl\n    font-bold\n    inline-block\n"]))),I=Object(W.a)(R),H=F.a.div(o||(o=Object(C.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 15px;\npadding-bottom: 20px;\nword-spacing: 0;\n"]))),J=Object(W.a)(H),K=T.a.div(a||(a=Object(C.a)(["\n    mt-1\n"]))),V=T.a.h1(r||(r=Object(C.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),q=Object(W.a)(V),G=T.a.span(l||(l=Object(C.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),Q=Object(W.a)(G),U=T.a.h2(i||(i=Object(C.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),X=Object(W.a)(U),Y=T.a.div(s||(s=Object(C.a)(["\n    mt-2\n    relative pl-6\n"]))),Z=T.a.span(j||(j=Object(C.a)(["\n    text-xl\n    block\n"]))),$=Object(W.a)(Z),ee=T.a.span(b||(b=Object(C.a)(["\n    text-gray-700\n    text-xl\n"]))),te=Object(W.a)(ee),ne=function(e){var t=e.Link,n=e.BackButtonClick,c=e.ReturnedWord,o=e.PartOfSpeech,a=e.ShortDef,r=e.ReactHtmlParser,l=e.WordExample,i=e.getPathName,s=e.WordsLoaded,j=e.Syns,b=e.Ants,d=(e.PathName,e.onTabClick),O=e.AvailableWordType,h=function(){var e=[];return void 0!==j&&(e=j.map((function(e,t){return void 0===j[t+1]?Object(D.jsx)(P.a,{listStyleType:"none",display:"inline-block",children:"".concat(e)},e):Object(D.jsx)(P.a,{listStyleType:"none",display:"inline-block",children:"".concat(e,",\xa0")},e)}))),e},x=function(){var e=[];return void 0!==b&&(e=b.map((function(e,t){return void 0===b[t+1]?Object(D.jsx)(P.a,{listStyleType:"none",display:"inline-block",children:"".concat(e)},e):Object(D.jsx)(P.a,{listStyleType:"none",display:"inline-block",children:"".concat(e,",\xa0")},e)}))),e},f=Object(p.h)();Object(u.useEffect)((function(){i(f.pathname)}));var m=Object(W.a)(t),g=Object(_.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),y=Object(_.c)("#252d3d","#edf2f7"),v=Object(_.c)("gray.700","#edf2f7"),S=Object(_.c)("#2563EB","#db8b02"),w=Object(_.c)("#3B82F6","orange"),k=Object(_.c)("#3B82F6","orange.300"),C=Object(_.c)({background:"gray.200"},{background:"gray.700"}),F=Object(_.c)("linear(to-l, gray.200, white)"),B=Object(_.c)("0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6","0px 0px 11px #1c1c1c, -10px -10px 0px orange"),T=Object(_.c)("#3B82F6","orange.200"),R=Object(_.c)("gray.700","orange.500"),H=Object(_.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),V=Object(z.a)("(max-width: 440px)"),G=Object(_.c)({color:"#3B82F6"},{color:"orange"}),U=function(){return Object(D.jsxs)(J,{boxShadow:B,bgGradient:F,m:V&&"5",ml:[null,"9em",null],mr:[null,"9em",null],marginTop:["6",null,null],children:[Object(D.jsx)(I,{color:w,children:"Thesaurus"}),s?Object(D.jsxs)(A.a.TransitionFade,{children:[Object(D.jsxs)(K,{children:[Object(D.jsx)(q,{color:v,children:c}),Object(D.jsx)(Q,{color:w,children:o})]}),Object(D.jsxs)(X,{color:S,children:["Synonyms & Antonyms of ",Object(D.jsx)("em",{children:c})]}),Object(D.jsxs)(Y,{children:[Object(D.jsx)(te,{color:v,children:a}),Object(D.jsxs)($,{color:k,children:[" ",Object(D.jsx)("strong",{children:"//"})," ",r(l)]}),Object(D.jsxs)(E.a,{mb:"1",mt:"2",fontSize:"2xl",fontFamily:"sans-serif",color:S,children:["Synonyms for ",Object(D.jsx)(W.a.span,{fontStyle:"italic",children:c})]}),Object(D.jsx)(N.a,{w:["100%","70%",null],children:Object(D.jsx)(P.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:k,children:h()})}),void 0!==b?Object(D.jsxs)("div",{children:[Object(D.jsxs)(E.a,{mb:"1",mt:"4",fontSize:"2xl",fontFamily:"sans-serif",color:S,children:["Antonyms for ",Object(D.jsx)(W.a.span,{fontStyle:"italic",children:c})]}),Object(D.jsx)(N.a,{w:["100%","70%",null],children:Object(D.jsx)(P.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:k,children:x()})})]}):Object(D.jsx)(D.Fragment,{})]})]}):Object(D.jsx)(A.a.TransitionFade,{children:Object(D.jsx)(M.a,{mt:"4",mb:"3",noOfLines:11,spacing:"4",startColor:T,endColor:R})})]})};return Object(D.jsxs)(u.Fragment,{children:[c.length?Object(D.jsx)(N.a,{zIndex:"overlay",className:"fixed top-0",left:[null,"32",null],children:Object(D.jsx)(m,{_focus:H,bg:g,color:y,_hover:C,onClick:n,className:"\n  py-2\n  px-4\n  rounded-xl\n  shadow-xl\n  inline-block\n  focus:outline-none\n  focus:border\n  focus:ring-2 focus:ring-blue-500\n  transition duration-500 ease-in-out\n  m-4\n",to:"/",children:"Back to search"})}):Object(D.jsx)(D.Fragment,{}),Object(D.jsxs)(L.e,{align:"center",variant:"solid-rounded",children:[Object(D.jsxs)(L.b,{mt:"1em",children:[O.noun?1===Object.keys(O).length?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(L.a,{onClick:function(){return d("noun")},_hover:G,_selected:{color:y,bg:g},_focus:H,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Noun"}):Object(D.jsx)(D.Fragment,{}),O.verb?1===Object.keys(O).length?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(L.a,{onClick:function(){return d("verb")},_hover:G,_selected:{color:y,bg:g},_focus:H,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Verb"}):Object(D.jsx)(D.Fragment,{}),O.adjective?1===Object.keys(O).length?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(L.a,{onClick:function(){return d("adjective")},_hover:G,_selected:{color:y,bg:g},_focus:H,outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},children:"Adjective"}):Object(D.jsx)(D.Fragment,{})]}),Object(D.jsxs)(L.d,{children:[Object(D.jsx)(L.c,{children:U()}),Object(D.jsx)(L.c,{children:U()}),Object(D.jsx)(L.c,{children:U()})]})]})]})},ce=n(223),oe=n(116),ae=n(121),re=n(10),le=n(230),ie=n(225),se=n(234),je=n(235),be=n(226),de=T.a.div(d||(d=Object(C.a)(["\n   text-center\n   mt-40\n   sm:mt-0\n   md2:mt-38\n   lg:mt-32\n"]))),ue=function(e){var t,n=e.WordFindType,c=e.onEnterKeyPress,o=e.WordFind,a=e.isOpen,r=e.getInputValue,l=e.getButtonClick,i=e.Link,s=e.getPathName,j=Object(z.a)("(max-width: 420px)"),b=Object(f.a)(j,1)[0],d=Object(p.h)(),O=Object(W.a)(i),h=Object(ce.a)(),x=(h.isOpen,h.onOpen,h.onClose,Object(_.c)("#3B82F6","orange")),m=Object(_.c)({color:"#3B82F6"},{color:"orange"}),g=Object(_.c)("#edf2f7","gray.800"),y=Object(_.c)("#3B82F6","#ffa500"),v=Object(_.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"});return Object(u.useEffect)((function(){s(d.pathname)})),Object(D.jsxs)(de,{children:[Object(D.jsxs)(N.a,{display:"flex",alignContent:"center",justifyContent:"center",mt:["12",null,"15","0","32"],mb:["5",null,"12"],children:[Object(D.jsxs)(E.a,{fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:["Words to be",b?"\xa0":" thesaurused"]}),Object(D.jsxs)(le.a,{placement:"auto-end",display:"inline-block",children:[Object(D.jsx)(le.g,{children:b?Object(D.jsx)(E.a,{textDecoration:"underline wavy ".concat(x),_hover:[null,null,m],cursor:"pointer",fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:"thesaurused"}):Object(D.jsx)(ie.a,(t={variant:"ghost",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:v,ml:"2"},Object(re.a)(t,"outline","none"),Object(re.a)(t,"size","sm"),Object(re.a)(t,"icon",Object(D.jsx)(be.a,{w:"5",h:"5"})),t))}),Object(D.jsxs)(le.e,{outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:v,background:g,children:[Object(D.jsx)(le.b,{}),Object(D.jsx)(le.d,{}),Object(D.jsx)(le.f,{fontFamily:"Playfair Display",fontSize:["xl"],fontWeight:"bold",children:"Thesaurus"}),Object(D.jsx)(le.c,{children:"A thesaurus (plural thesauri or thesauruses) or synonym dictionary is a reference work for finding synonyms and sometimes antonyms of words. "})]})]})]}),Object(D.jsxs)(N.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(D.jsxs)(N.a,{children:[Object(D.jsx)(se.a,{focusBorderColor:y,onKeyPress:c,variant:"filled",w:["16rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],onChange:r,placeholder:"Type your word"}),o&&Object(D.jsx)(je.a,{in:a,children:Object(D.jsxs)(N.a,{mt:"1",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(D.jsx)(W.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(D.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(D.jsx)(W.a.span,{ml:"1",mb:["-1",0,0],color:"red.400",children:"no response"===n?"Word not found! (Misspelled)":"no input"===n?"Input is empty, type a word!":"The word is not in the thesaurus!"})]})})]}),Object(D.jsx)(N.a,{ml:[0,5,0],mt:[5,1,0],children:Object(D.jsx)(O,{_hover:{background:"gray.200"},_focus:v,color:b?g:"gray.800",bgColor:b?x:"gray.100",fontWeight:"semibold",onClick:l,className:"\npy-1\npx-3\nrounded-xl\nshadow-2xl\ninline-block\nmd:py-1\nmd:h-8\nmd:mt-1\nmd:px-4\nfocus:outline-none\nfocus:ring-2 focus:ring-blue-400\nhover:bg-gray-200\ntransition duration-200 ease-in-out\n",to:"/thesaurus",children:"Search"})})]})]})};var Oe=function(e){var t=e.ThesaurusPageComponent,n=Object(ae.a)(e,["ThesaurusPageComponent"]),c=Object(p.h)();return Object(D.jsxs)(p.d,{location:c,children:[Object(D.jsx)(p.b,{exact:!0,path:"/",children:Object(D.jsx)(ue,Object(oe.a)({},n))}),Object(D.jsx)(p.b,{exact:!0,path:"/thesaurus",children:Object(D.jsx)(A.a.TransitionFade,{children:t()})})]},c.key)},he=function(){var e=Object(u.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],o=Object(u.useState)(""),a=Object(f.a)(o,2),r=a[0],l=a[1],i=Object(u.useState)(""),s=Object(f.a)(i,2),j=s[0],b=s[1],d=Object(u.useState)(""),O=Object(f.a)(d,2),h=O[0],x=O[1],g=Object(u.useState)(""),v=Object(f.a)(g,2),S=v[0],w=v[1],C=Object(u.useState)(!1),F=Object(f.a)(C,2),B=F[0],T=F[1],W=Object(u.useState)(""),P=Object(f.a)(W,2),_=P[0],z=P[1],E=Object(ce.a)(),N=E.isOpen,M=E.onOpen,L=Object(u.useState)(!1),R=Object(f.a)(L,2),I=R[0],H=R[1],J=Object(u.useState)(""),K=Object(f.a)(J,2),V=K[0],q=K[1],G=Object(u.useState)(!1),Q=Object(f.a)(G,2),U=Q[0],X=Q[1],Y=Object(u.useState)([]),Z=Object(f.a)(Y,2),$=Z[0],ee=Z[1],te=Object(u.useState)([]),oe=Object(f.a)(te,2),ae=oe[0],re=oe[1],le=Object(u.useState)([]),ie=Object(f.a)(le,2),se=ie[0],je=ie[1],be=Object(u.useState)({}),de=Object(f.a)(be,2),ue=de[0],he=de[1];Object(u.useEffect)((function(){"/thesaurus"===_&&""===j?X(!1):"/thesaurus"===_&&""!==j&&X(!0)}));var xe=Object(p.g)(),fe=function(){""===n?(H(!0),q("no input"),M()):(k(n).then((function(e){return ve(e)})),H(!1),q(""))},pe=function(){c(""),l(""),x(""),b(""),w(""),ee([]),re([]),X(!1)};Object(u.useEffect)((function(){"/"===_&&ue!=={}&&(he({}),pe())}),[_]);var me=function(e,t){return e.filter((function(e){return e.fl===t}))[0]},ge=function(e){var t,n,c,o,a=e.fl,r=e.hwi.hw,i=e.shortdef,s=Object(f.a)(e.def,1)[0].sseq,j=e.meta.syns,d=e.meta.ants,u=(null!==(t=null===(n=s[0][0][1].dt)||void 0===n||null===(c=n[1])||void 0===c||null===(o=c[1])||void 0===o?void 0:o[0].t)&&void 0!==t?t:s[0][0][1].dt[0][1]).replace("{it}","<em>").replace("{/it}","</em>");re(d[0]),ee(j[0]),l(r),x(a),b(i[0]),w(u)},ye=function(e){switch(e){case"verb":ge(me(se,"verb"));break;case"noun":ge(me(se,"noun"));break;case"adjective":ge(me(se,"adjective"))}},ve=function(e){try{e[0].hwi?function(e){try{je(e),e.forEach((function(t,n){switch(t.fl){case"noun":he((function(e){return Object.assign({},e,{noun:!0})}));break;case"verb":he((function(e){return Object.assign({},e,{verb:!0})}));break;case"adjective":he((function(e){return Object.assign({},e,{adjective:!0})}))}"noun"===t.fl?ge(me(e,"noun")):void 0!==e[n-1]?"noun"===e[n-1].fl&&ge(me(e,"noun")):ge(me(e,t.fl))}))}catch(t){console.log(t)}}(e):(T(!0),H(!0),q("no response"),M())}catch(t){T(!0),H(!0),M()}},Se=function(e){z(e)};return Object(u.useEffect)((function(){"/"===_&&j.length&&pe()}),[_]),Object(D.jsx)(Oe,{ThesaurusPageComponent:function(){var e;return e=n.length?r.length?Object(D.jsx)(A.a.TransitionFade,{children:Object(D.jsx)(ne,{AvailableWordType:ue,onTabClick:ye,PathName:_,Ants:ae,Syns:$,WordsLoaded:U,Word:n,Link:m.b,BackButtonClick:pe,ReturnedWord:r,PartOfSpeech:h,ShortDef:j,ReactHtmlParser:y.a,WordExample:S,getPathName:Se})}):B?Object(D.jsx)(p.a,{to:"/"}):Object(D.jsx)(A.a.TransitionFade,{children:Object(D.jsx)(ne,{AvailableWordType:ue,onTabClick:ye,PathName:_,Ants:ae,Syns:$,WordsLoaded:U,Word:n,Link:m.b,BackButtonClick:pe,ReturnedWord:r,PartOfSpeech:h,ShortDef:j,ReactHtmlParser:y.a,WordExample:S,getPathName:Se})}):Object(D.jsx)(p.a,{to:"/"}),Object(u.useEffect)((function(){B&&(c(""),T(!1))}),[B]),e},WordFindType:V,onEnterKeyPress:function(e){13===e.which&&(fe(),xe.push("/thesaurus"))},WordFind:I,isOpen:N,getInputValue:function(e){c(e.target.value)},getButtonClick:function(){fe()},Link:m.b,getPathName:Se})},xe=n(233),fe=n(229),pe=n(120),me=n(227),ge=function(){var e=Object(_.b)(),t=e.colorMode,n=e.toggleColorMode,c=Object(_.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"});return Object(D.jsx)(N.a,{className:"backdrop-blur",zIndex:"overlay",display:"flex",position:"sticky",top:"0",justifyContent:"flex-end",h:"70px",w:"full",borderRadius:"0 0 20px 20px",children:Object(D.jsx)(pe.a,{_focus:c,focusBorderColor:c,boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:[null,"40",null],rounded:"xl",onClick:n,children:"light"===t?Object(D.jsx)(me.a,{}):Object(D.jsx)(W.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(D.jsx)("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})})})})},ye=n(228),ve=Object(ye.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});x.a.render(Object(D.jsx)(O.a.StrictMode,{children:Object(D.jsx)(xe.a,{children:Object(D.jsxs)(m.a,{basename:"/wordsapiproject",children:[Object(D.jsx)(fe.a,{initialColorMode:ve.config.initialColorMode}),Object(D.jsx)(ge,{}),Object(D.jsx)(he,{})]})})}),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.2393f0d4.chunk.js.map