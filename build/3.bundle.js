(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{43:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={marvelLogo:t.p+"assets/03143cdba8768fb1e1c87181a1e3aa5b.png",marvelLogoIcon:t.p+"assets/1d1e6e9111a0f323e20e2c21e3727c9e.png",homeBanner:t.p+"assets/13155377c1d2f17a944a44b45f01469c.jpg",booksmarksBanner:t.p+"assets/25fd12807ffd267f18fbbefa1541febe.jpg",charactersBanner:t.p+"assets/ae7fa2ad6a820f5dc91ab93ec71b081f.jpg",comicsBanner:t.p+"assets/491e0b29654040760771f83e58882101.jpg",notFoundBanner:t.p+"assets/90f3a84c8ecab047b7af886fd920da8c.jpg",storiesBanner:t.p+"assets/4a5dcd6671f75f40ee01b0187648ebb0.jpg",infoDetailBanner:t.p+"assets/e2796a7d3a884d92aef3d7004ee9225a.jpg",bookCover:t.p+"assets/394460e5945e8a598f29f13e5bd12143.png"}},44:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r="375px",a="768px",c="1024px",i={mobileS:"screen and (max-width: ".concat("320px",")"),mobileM:"screen and (max-width: ".concat(r,")"),tablet:"screen and (max-width: ".concat(a,")"),laptop:"screen and (max-width: ".concat(c,")")}},45:function(n,e,t){"use strict";t.d(e,"a",(function(){return E}));var r=t(0),a=t.n(r),c=t(9),i=t.n(c),o=t(10),u=t(44),l=t(4);function s(){var n=i()(["\n  z-index: 1;\n  font-size: 8rem;\n  @media "," {\n    font-size: 4rem;\n  }\n"]);return s=function(){return n},n}function d(){var n=i()(["\n  height: 500px;\n  width: 100vw;\n  position: absolute;\n  opacity: 0.5;\n  background-color: ",";\n"]);return d=function(){return n},n}function f(){var n=i()(["\n      background-image: url(",");\n      background-position: ",";\n    "]);return f=function(){return n},n}function m(){var n=i()(["\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 500px;\n  width: 100vw;\n  color: white;\n  display: flex;\n  text-align: center;\n  font-size: 8rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  ","\n"]);return m=function(){return n},n}function p(){var n=i()(["\n  position: relative;\n  margin: 0 auto;\n  max-width: 1024px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return p=function(){return n},n}var h=o.c.section(p()),g=o.c.div(m(),(function(n){return n.bgImage&&n.bgPosition&&Object(o.b)(f(),n.bgImage,n.bgPosition)})),b=o.c.div(d(),l.a.red),v=o.c.h1(s(),u.a.tablet),E=function(n){var e=n.title,t=n.bgImage,r=n.bgPosition,c=void 0===r?"center":r;return a.a.createElement(h,null,a.a.createElement(g,{bgImage:t,bgPosition:c},a.a.createElement(v,null,e),a.a.createElement(b,null)))}},46:function(n,e,t){"use strict";t.d(e,"a",(function(){return I}));var r=t(47),a=t.n(r),c=t(0),i=t.n(c),o=t(9),u=t.n(o),l=t(10),s=t(44),d=t(4),f=t(16);function m(){var n=u()(["\n  color: ",";\n  text-decoration: none;\n  padding: 0 10px;\n  align-items: center;\n  height: inherit;\n  @media "," {\n    justify-content: center;\n    font-size: 2rem;\n  }\n"]);return m=function(){return n},n}function p(){var n=u()(["\n  @media "," {\n    height: 50px;\n  }\n"]);return p=function(){return n},n}function h(){var n=u()(["\n  display: flex;\n  margin-right: 2rem;\n  @media "," {\n    display: block;\n  }\n"]);return h=function(){return n},n}function g(){var n=u()(["\n        left: 0;\n      "]);return g=function(){return n},n}function b(){var n=u()(["\n  @media "," {\n    position: fixed;\n    background: ",";\n    z-index: 3;\n    top: 0;\n    left: -100vw;\n    width: 100vw;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.3s;\n\n    ","\n  }\n"]);return b=function(){return n},n}function v(){var n=u()(["\n  width: 100px;\n"]);return v=function(){return n},n}function E(){var n=u()(["\n  margin-left: 2rem;\n  @media "," {\n    display: none;\n  }\n"]);return E=function(){return n},n}function x(){var n=u()(["\n  max-width: 1000px;\n  flex: 1;\n  margin: 0 auto;\n  display: inherit;\n  justify-content: inherit;\n  align-items: inherit;\n  height: inherit;\n  flex-wrap: inherit;\n"]);return x=function(){return n},n}function y(){var n=u()(["\n  display: flex;\n  height: 70px;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media "," {\n    display: block;\n  }\n"]);return y=function(){return n},n}function k(){var n=u()(["\n  z-index: 20;\n  display: none;\n  position: fixed;\n  height: 50px;\n  width: 50px;\n  align-items: center;\n  margin-left: 2rem;\n  margin-top: 2rem;\n  @media "," {\n    display: block;\n  }\n"]);return k=function(){return n},n}var w=l.c.img(k(),s.a.tablet),C=l.c.header(y(),s.a.tablet),O=l.c.div(x()),j=l.c.figure(E(),s.a.tablet),R=l.c.img(v()),_=l.c.nav(b(),s.a.tablet,d.a.black,(function(n){return n.active&&Object(l.b)(g())})),A=l.c.ol(h(),s.a.tablet),B=l.c.li(p(),s.a.tablet),T=Object(l.c)(f.a)(m(),d.a.white,s.a.tablet),S=t(43),I=function(n){var e=n.children,t=Object(c.useState)(!1),r=a()(t,2),o=r[0],u=r[1],l=function(){u(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{onClick:function(){u(!o)},src:S.a.marvelLogoIcon,alt:"Logo de youtube"}),i.a.createElement(C,null,i.a.createElement(O,null,i.a.createElement(j,null,i.a.createElement(T,{to:"/"},i.a.createElement(R,{src:S.a.marvelLogo,alt:"Marvel Logo"}))),i.a.createElement(_,{active:o},i.a.createElement(A,null,i.a.createElement(B,null,i.a.createElement(T,{to:"/",onClick:l},"Home")),i.a.createElement(B,null,i.a.createElement(T,{to:"/characters",onClick:l},"Characters")),i.a.createElement(B,null,i.a.createElement(T,{to:"/comics",onClick:l},"Comics")),i.a.createElement(B,null,i.a.createElement(T,{to:"/stories",onClick:l},"Stories")),i.a.createElement(B,null,i.a.createElement(T,{to:"/bookmarks",onClick:l},"Bookmarks")))))),e)}},48:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={baseRoute:{debug:"https://gateway.marvel.com:443/v1/public",production:""},credentials:{publicKey:"b27cec8e4531d81f6606a50b1af1a7ad",privateKey:"505b04524c75aab27024f6308560149678e0da04",ts:"1",hash:"16cb58342426d406b9d7da76336ad354"},endpoints:{characters:"/characters",comics:"/comics",stories:"/stories"}}},51:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(49),a=t.n(r),c=t(50),i=t.n(c),o=t(48),u=function(){var n=i()(a.a.mark((function n(e){var t,r,c,i=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"",n.prev=1,n.next=4,fetch(o.a.baseRoute.debug+e+"?apikey="+o.a.credentials.publicKey+"&ts="+o.a.credentials.ts+"&hash="+o.a.credentials.hash+t,{method:"GET",headers:{}});case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,n.abrupt("return",c);case 11:throw n.prev=11,n.t0=n.catch(1),Error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},52:function(n,e,t){"use strict";t.d(e,"f",(function(){return r})),t.d(e,"e",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"d",(function(){return i})),t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return u}));var r=function(n){return{type:"SET_QUERY_CHARACTERS",payload:n}},a=function(n){return{type:"SET_CHARACTERS",payload:n}},c=function(n){return{type:"SET_CHARACTER",payload:n}},i=function(n){return{type:"SET_CHARACTER_LOADING",payload:n}},o=function(n){return{type:"ADD_CHARACTER_TO_BOOKMARK",payload:n}},u=function(n){return{type:"REMOVE_CHARACTER_TO_BOOKMARK",payload:n}}},53:function(n,e,t){"use strict";t.d(e,"f",(function(){return r})),t.d(e,"e",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"d",(function(){return i})),t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return u}));var r=function(n){return{type:"SET_QUERY_COMICS",payload:n}},a=function(n){return{type:"SET_COMICS",payload:n}},c=function(n){return{type:"SET_COMIC",payload:n}},i=function(n){return{type:"SET_COMIC_LOADING",payload:n}},o=function(n){return{type:"ADD_COMIC_TO_BOOKMARK",payload:n}},u=function(n){return{type:"REMOVE_COMIC_TO_BOOKMARK",payload:n}}},55:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return p}));var r=t(60),a=t.n(r),c=t(0),i=t.n(c),o=t(61),u=t(4),l=t(9),s=t.n(l);function d(){var n=s()(["\n  margin: 1rem;\n  overflow-x: hidden;\n"]);return d=function(){return n},n}var f=t(10).c.div(d()),m=function(n){return i.a.createElement(f,null,i.a.createElement(o.a,a()({speed:1.5,width:1080,height:250,viewBox:"0 0 1080 250",backgroundColor:u.a.darkGray,foregroundColor:u.a.red},n),i.a.createElement("rect",{x:"0",y:"0",rx:"20",ry:"20",width:"250",height:"250"}),i.a.createElement("rect",{x:"270",y:"0",rx:"20",ry:"20",width:"250",height:"250"}),i.a.createElement("rect",{x:"540",y:"0",rx:"20",ry:"20",width:"250",height:"250"}),i.a.createElement("rect",{x:"810",y:"0",rx:"20",ry:"20",width:"250",height:"250"}),i.a.createElement("rect",{x:"1080",y:"0",rx:"20",ry:"20",width:"250",height:"250"})))},p=function(n){return i.a.createElement(f,null,i.a.createElement(o.a,a()({speed:1.5,width:250,height:250,viewBox:"0 0 250 250",backgroundColor:u.a.darkGray,foregroundColor:u.a.red},n),i.a.createElement("rect",{x:"0",y:"0",rx:"20",ry:"20",width:"250",height:"250"})))}},59:function(n,e,t){"use strict";t.d(e,"a",(function(){return y}));var r=t(0),a=t.n(r),c=t(9),i=t.n(c),o=t(10),u=t(44),l=t(4),s=t(16);function d(){var n=i()(["\n  text-decoration: none;\n"]);return d=function(){return n},n}function f(){var n=i()(["\n  z-index: 1;\n  display: none;\n"]);return f=function(){return n},n}function m(){var n=i()(["\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  border-radius: 2rem;\n"]);return m=function(){return n},n}function p(){var n=i()(["\n      background-image: url(",");\n    "]);return p=function(){return n},n}function h(){var n=i()(["\n  width: 250px;\n  height: 250px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: ",";\n  border-radius: 2rem;\n  padding: 3rem;\n  word-break: break-word;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem;\n  ","\n\n  &:hover h2 {\n    display: block;\n    font-size: 2rem;\n    color: ",";\n    text-align: center;\n  }\n\n  &:hover div {\n    opacity: 0.5;\n    background-color: ",";\n  }\n\n  @media "," {\n    & h2 {\n      display: block;\n      font-size: 2rem;\n      color: ",";\n      text-align: center;\n    }\n\n    & div {\n      opacity: 0.5;\n      background-color: ",";\n    }\n  }\n"]);return h=function(){return n},n}var g=o.c.div(h(),l.a.darkGray,(function(n){return n.url&&Object(o.b)(p(),n.url)}),l.a.white,l.a.red,u.a.tablet,l.a.white,l.a.red),b=o.c.div(m()),v=o.c.h2(f()),E=Object(o.c)(s.a)(d()),x=t(43),y=function(n){var e=n.detail,t=n.url,r=void 0===t?"/characters":t;return e?a.a.createElement(E,{to:"".concat(r,"/").concat(e.id)},a.a.createElement(g,{url:e.thumbnail?"".concat(function(n){return"https"+n.split("http")[1]}(e.thumbnail.path),".").concat(e.thumbnail.extension," "):x.a.bookCover},a.a.createElement(b,null),a.a.createElement(v,null,e.name&&(e.name.length<60?e.name:e.name.slice(0,60)+"..."),e.title&&(e.title.length<60?e.title:e.title.slice(0,60)+"...")))):a.a.createElement(a.a.Fragment,null)}},62:function(n,e,t){"use strict";t.d(e,"a",(function(){return k}));var r=t(0),a=t.n(r),c=t(59),i=t(9),o=t.n(i),u=t(10),l=t(4);function s(){var n=o()(["\n  max-width: 1240px;\n  height: 350px;\n  margin: 0 auto;\n"]);return s=function(){return n},n}function d(){var n=o()(["\n  border-radius: 2rem;\n  padding: 1rem;\n  border: 1px solid red;\n  color: white;\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return d=function(){return n},n}function f(){var n=o()(["\n  margin: 2rem 0;\n  text-align: center;\n  margin-right: 2rem;\n"]);return f=function(){return n},n}function m(){var n=o()(["\n  display: flex;\n  align-items: center;\n  margin-left: 2rem;\n  margin-top: 4rem;\n"]);return m=function(){return n},n}var p=u.c.div(m()),h=u.c.h1(f()),g=u.c.button(d(),l.a.red),b=u.c.div(s()),v=t(16),E=t(68),x=t(64),y=t(55),k=function(n){var e=n.title,t=n.url,i=n.data,o=n.loading,u=void 0!==o&&o,l=Object(r.memo)((function(n){var e=n.index,r=n.style;return a.a.createElement("div",{style:r},a.a.createElement(c.a,{key:e,detail:i[e],url:t}))}),E.b);return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null,a.a.createElement(p,null,a.a.createElement(h,null,e),a.a.createElement(v.a,{to:t},a.a.createElement(g,null,"See more"))),u?a.a.createElement(y.a,null):a.a.createElement(x.a,null,(function(n){n.height;var e=n.width;return a.a.createElement(E.a,{height:270,itemCount:i.length,itemSize:270,layout:"horizontal",width:e},l)}))))}},69:function(n,e,t){"use strict";t.r(e);var r=t(49),a=t.n(r),c=t(50),i=t.n(c),o=t(0),u=t.n(o),l=t(62),s=t(43),d=t(45),f=t(48),m=t(51),p=t(17),h=t(52),g=t(53),b=t(46);e.default=function(){var n=Object(p.b)(),e=Object(p.c)((function(n){return n.charactersReducer})),t=e.charactersCache,r=e.charactersLoading,c=Object(p.c)((function(n){return n.comicsReducer})),v=c.comicsCache,E=c.comicsLoading,x=function(){var e=i()(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=5;break}return e.next=3,Object(m.a)(f.a.endpoints.characters);case 3:r=e.sent,n(Object(h.e)({charactersCache:r.data.results,charactersLoading:!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=i()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==v.length){e.next=5;break}return e.next=3,Object(m.a)(f.a.endpoints.comics);case 3:t=e.sent,n(Object(g.e)({comicsCache:t.data.results,comicsLoading:!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){x(),y()}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,null),u.a.createElement(d.a,{title:"Welcome to Marvel World",bgImage:s.a.homeBanner}),u.a.createElement(l.a,{title:"Characters",url:"/characters",data:t,loading:r}),u.a.createElement(l.a,{title:"Comics",url:"/comics",data:v,loading:E}))}},73:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(62),i=t(43),o=t(45),u=t(17),l=t(46);e.default=function(){Object(u.b)();var n=Object(u.c)((function(n){return n.charactersReducer})),e=(n.characters,n.charactersBookmarks),t=Object(u.c)((function(n){return n.comicsReducer})),r=(t.comics,t.comicsBookmarks),s=Object(u.c)((function(n){return n.storiesReducer})),d=(s.stories,s.storiesBookmarks);return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null),a.a.createElement(o.a,{title:"Bookmarks",bgImage:i.a.booksmarksBanner,bgPosition:"top"}),e.length>0&&a.a.createElement(c.a,{title:"Characters",url:"/characters",data:e}),r.length>0&&a.a.createElement(c.a,{title:"Comics",url:"/comics",data:r}),d.length>0&&a.a.createElement(c.a,{title:"Stories",url:"/stories",data:d}))}}}]);