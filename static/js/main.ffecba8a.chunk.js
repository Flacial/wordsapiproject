(this.webpackJsonpwordsapiproject=this.webpackJsonpwordsapiproject||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},144:function(e,t){},185:function(e,t,n){"use strict";n.r(t);var c,r,a,o,s,l,i,j,d,b,u,h=n(0),x=n.n(h),O=n(97),f=n.n(O),p=(n(118),n(5)),m=(n(119),n(11)),g=n(31),w=n(98),y=n.n(w),v=n(66),k=n.n(v),C=n(99),S=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dictionaryapi.com/api/v3/references/ithesaurus/json/".concat(t,"?key=c48ccf67-004d-4d61-bf2b-54e83578866c"));case 2:return n=e.sent,c=n.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=n(18),W=n(19),P=n.n(W),E=n(110),M=n(199),z=n(200),N=n(205),F=n(204),R=n(3),I=P.a.div(c||(c=Object(B.a)(["\n   text-center\n   mt-40\n   sm:mt-0\n   md2:mt-44  \n"]))),L=(P.a.input(r||(r=Object(B.a)(["\n  rounded-full\n  px-10\n  text-center\n  outline-none\n  focus:ring-4 focus:ring-green-500\n  lg:mr-3\n"]))),function(e){var t=e.WordFindType,n=e.onEnterKeyPress,c=e.WordFind,r=e.isOpen,a=(e.onClose,e.cancelRef,e.getInputValue),o=e.getButtonClick,s=e.Link,l=e.getPathName,i=Object(m.h)();Object(h.useEffect)((function(){l(i.pathname)}));var j=Object(E.a)(s);return Object(R.jsxs)(I,{children:[Object(R.jsx)(M.a,{fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],mt:["12",null,"15","0","32"],mb:["5",null,"12"],whiteSpace:"nowrap",children:"Words to be thesaurused"}),Object(R.jsxs)(z.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(R.jsxs)(z.a,{children:[Object(R.jsx)(N.a,{onKeyPress:n,variant:"filled",w:["16rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],onChange:a,placeholder:"Type your word"}),c&&Object(R.jsx)(F.a,{in:r,children:Object(R.jsxs)(z.a,{mt:"1",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(R.jsx)(E.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(R.jsx)(E.a.span,{ml:"1",color:"red.400",children:"no response"===t?"Word not found!":"no input"===t?"Input is empty, type a word!":"API Side Error or a bug"})]})})]}),Object(R.jsx)(z.a,{mt:[5,1,0],children:Object(R.jsx)(j,{onClick:o,className:"\nbg-gray-100\ntext-gray-800\npy-1\npx-3\nrounded-xl\nshadow-2xl\ninline-block\nmd:py-1\nmd:h-8\nmd:mt-1\nmd:px-4\nfocus:outline-none\nfocus:ring-2 focus:ring-blue-400\nhover:bg-gray-200\ntransition duration-200 ease-in-out\n",to:"/thesaurus",children:"Search"})})]})]})}),T=n(102),A=n(187),D=P.a.h1(a||(a=Object(B.a)(["\n    italic\n    font-serif\n    text-3xl\n    font-bold\n    inline-block\n"]))),K=Object(E.a)(D),H=T.a.div(o||(o=Object(B.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 5px;\npadding-bottom: 5px;\nword-spacing: 0;\n"]))),J=Object(E.a)(H),V=P.a.div(s||(s=Object(B.a)(["\n    mt-5\n"]))),q=P.a.h1(l||(l=Object(B.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),G=Object(E.a)(q),_=P.a.span(i||(i=Object(B.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),Q=Object(E.a)(_),U=P.a.h2(j||(j=Object(B.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),X=Object(E.a)(U),Y=P.a.div(d||(d=Object(B.a)(["\n    mt-2\n    relative pl-6\n"]))),Z=P.a.span(b||(b=Object(B.a)(["\n    text-xl\n    block\n"]))),$=Object(E.a)(Z),ee=P.a.span(u||(u=Object(B.a)(["\n    text-gray-700\n    text-xl\n"]))),te=Object(E.a)(ee),ne=function(e){var t=e.Link,n=e.BackButtonClick,c=e.ReturnedWord,r=e.PartOfSpeech,a=e.ShortDef,o=e.ReactHtmlParser,s=e.WordExample,l=e.getPathName,i=Object(m.h)();Object(h.useEffect)((function(){l(i.pathname)}));var j=Object(E.a)(t),d=Object(A.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),b=Object(A.c)("#252d3d","#edf2f7"),u=Object(A.c)("gray.700","#edf2f7"),x=Object(A.c)("#2563EB","#db8b02"),O=Object(A.c)("#3B82F6","orange"),f=Object(A.c)({background:"gray.200"},{background:"gray.700"}),p=Object(A.c)("linear(to-l, gray.200, white)"),g=Object(A.c)("2px 2px 12px #37413f, -10px -10px 0px #3B82F6","2px 2px 12px #37413f, -10px -10px 0px orange");return Object(R.jsxs)(h.Fragment,{children:[Object(R.jsx)(z.a,{className:"absolute top-0",children:Object(R.jsx)(j,{bg:d,color:b,_hover:f,onClick:n,className:"\npy-2\npx-4\nrounded-xl\nshadow-xl\ninline-block\nfocus:outline-none\nfocus:border\nfocus:ring-2 focus:ring-blue-500\ntransition duration-500 ease-in-out\nm-4\n",to:"/",children:"Back to search"})}),Object(R.jsxs)(J,{boxShadow:g,bgGradient:p,m:["1em","3em",null],marginTop:["20",null,null],children:[Object(R.jsx)(K,{color:O,children:"Thesaurus"}),Object(R.jsxs)(V,{children:[Object(R.jsx)(G,{color:u,children:c}),Object(R.jsx)(Q,{color:O,children:r})]}),Object(R.jsxs)(X,{color:x,children:["Synonyms & Antonyms of ",Object(R.jsx)("em",{children:c})]}),Object(R.jsxs)(Y,{children:[Object(R.jsx)(E.a.span,{color:u,className:"font-bold text-xl absolute left-0 top-0",children:"1"}),Object(R.jsx)(te,{color:u,children:a}),Object(R.jsxs)($,{color:O,children:[" ",Object(R.jsx)("strong",{children:"//"})," ",o(s)," "]})]})]})]})},ce=function(){return Object(R.jsx)(z.a,{display:"flex",justifyContent:"center",children:Object(R.jsx)("svg",{className:"animate-spin mt-28 md:mt-42 lg:mt-48",stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"5em",width:"5em",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"M340.896,58.488C303.18,20.771,253.033,0,199.694,0C146.353,0,96.207,20.771,58.491,58.488 C20.772,96.206,0,146.354,0,199.693c0,53.342,20.772,103.489,58.491,141.206c37.716,37.717,87.863,58.488,141.203,58.488 c53.337,0,103.486-20.771,141.203-58.488c37.719-37.718,58.49-87.865,58.49-141.206C399.387,146.355,378.615,96.207,340.896,58.488 z M199.694,77.457c67.402,0,122.236,54.835,122.236,122.236s-54.834,122.236-122.236,122.236S77.457,267.094,77.457,199.693 S132.292,77.457,199.694,77.457z M328.061,328.062c-34.289,34.287-79.877,53.17-128.367,53.17 c-48.491,0-94.079-18.883-128.367-53.17c-34.289-34.287-53.173-79.877-53.173-128.37h41.148 c0,77.411,62.979,140.391,140.392,140.391c77.412,0,140.39-62.979,140.39-140.391c0-77.412-62.979-140.391-140.39-140.391 c-4.594,0-9.134,0.229-13.615,0.662v-41.31c4.508-0.332,9.049-0.5,13.615-0.5c48.49,0,94.078,18.883,128.367,53.171 c34.289,34.289,53.172,79.878,53.172,128.368C381.232,248.186,362.35,293.775,328.061,328.062z"})})})},re=n(208),ae=n(203),oe=n(72),se=function(){var e=Object(h.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(h.useState)(""),a=Object(p.a)(r,2),o=a[0],s=a[1],l=Object(h.useState)(""),i=Object(p.a)(l,2),j=i[0],d=i[1],b=Object(h.useState)(""),u=Object(p.a)(b,2),x=u[0],O=u[1],f=Object(h.useState)(""),w=Object(p.a)(f,2),v=w[0],k=w[1],C=Object(h.useState)(!1),B=Object(p.a)(C,2),W=B[0],P=B[1],E=Object(h.useState)(""),M=Object(p.a)(E,2),z=M[0],N=M[1],F=Object(re.a)(),I=F.isOpen,T=F.onOpen,A=F.onClose,D=Object(h.useRef)(),K=Object(h.useState)(!1),H=Object(p.a)(K,2),J=H[0],V=H[1],q=Object(h.useState)(""),G=Object(p.a)(q,2),_=G[0],Q=G[1],U=Object(m.h)(),X=Object(m.g)(),Y=function(){""===n?(V(!0),Q("no input"),T()):S(n).then((function(e){return $(e)}))},Z=function(){c(""),s(""),O(""),d(""),k("")},$=function(e){try{e.length>=1?function(e,t){var n=e[t],c=n.fl,r=n.hwi.hw,a=n.shortdef,o=Object(p.a)(n.def,1)[0].sseq[0][0][1].dt[1][1][0].t.replace("{it}","<em>").replace("{/it}","</em>");s(r),O(c),d(a[0]),k(o)}(e,0):e[0]||(P(!0),V(!0),Q("no response"),T())}catch(t){console.log(t),P(!0),V(!0),T()}},ee=function(e){N(e)};return Object(h.useEffect)((function(){"/"===z&&j.length&&Z()}),[z]),Object(R.jsx)(ae.a,{enterAnimation:oe.a.fade.enter,exitAnimation:oe.a.fade.exit,children:Object(R.jsxs)(m.d,{location:U,children:[Object(R.jsx)(m.b,{exact:!0,path:"/",children:Object(R.jsx)(L,{WordFindType:_,onEnterKeyPress:function(e){13===e.which&&(Y(),X.push("/thesaurus"))},WordFind:J,isOpen:I,onClose:A,cancelRef:D,getInputValue:function(e){c(e.target.value)},getButtonClick:function(){Y(),console.log(J)},Link:g.b,getPathName:ee})}),Object(R.jsx)(m.b,{exact:!0,path:"/thesaurus",children:function(){var e;return n.length?o.length?e=Object(R.jsx)(ne,{Word:n,Link:g.b,BackButtonClick:Z,ReturnedWord:o,PartOfSpeech:x,ShortDef:j,ReactHtmlParser:y.a,WordExample:v,getPathName:ee}):W?(c(""),P(!1),e=Object(R.jsx)(m.a,{to:"/"})):e=Object(R.jsx)(ce,{}):e=Object(R.jsx)(m.a,{to:"/"}),J&&"/"!==z&&(V(!1),Q("")),e}()})]},U.key)})},le=n(201),ie=n(207),je=n(202),de=n(206),be=function(){var e=Object(A.b)(),t=e.colorMode,n=e.toggleColorMode;return Object(R.jsx)(z.a,{display:"flex",justifyContent:"flex-end",children:Object(R.jsx)(de.a,{boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",rounded:"xl",onClick:n,children:"light"===t?Object(R.jsx)(E.a.svg,{outline:"none",stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"})}):Object(R.jsx)(E.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"})})})})},ue=Object(le.a)({fonts:{heading:"Playfair Display",body:"Open Sans"}});f.a.render(Object(R.jsx)(x.a.StrictMode,{children:Object(R.jsx)(ie.a,{children:Object(R.jsxs)(g.a,{basename:"/wordsapiproject",children:[Object(R.jsx)(je.a,{theme:ue}),Object(R.jsx)(be,{}),Object(R.jsx)(se,{})]})})}),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.ffecba8a.chunk.js.map