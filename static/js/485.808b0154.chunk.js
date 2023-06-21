"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{4672:function(n,t,e){e.d(t,{Z:function(){return Z}});var r,c,a,o,u,i=e(168),s=e(5706),p=e(1087),f=s.Z.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  padding: 0;\n  margin-bottom: 5px;\n\n  list-style: none;\n"]))),l=s.Z.li(c||(c=(0,i.Z)(["\n  flex-basis: calc((100% - 2 * 30px) / 3);\n"]))),h=(0,s.Z)(p.rU)(a||(a=(0,i.Z)(["\n  text-align: center;\n  text-decoration: none;\n"]))),d=s.Z.h2(o||(o=(0,i.Z)(["\n  margin-top: 0px;\n  color: darkslategray;\n"]))),x=s.Z.img(u||(u=(0,i.Z)(["\n  display: block;\n  width: 100%;\n  border-radius: 8px;\n"]))),g=e(9419),v=e(7689),m=e(184),Z=function(n){var t=n.movies,e=(0,v.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{children:t.map((function(n){return(0,m.jsx)(l,{children:(0,m.jsxs)(h,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,m.jsx)(d,{children:n.title||n.name}),(0,m.jsx)(x,{src:n.poster_path?"https://image.tmdb.org/t/p/w300".concat(n.poster_path):g,alt:n.title||n.name})]})},n.id)}))})})}},3020:function(n,t,e){e.d(t,{M1:function(){return x},QO:function(){return s},gH:function(){return f},t2:function(){return h},tx:function(){return v}});var r=e(5861),c=e(4687),a=e.n(c),o=e(1243),u="https://api.themoviedb.org/3",i="048dfb7517a31fb5a77ea118ba208738";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var t,e,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e="".concat(u,"/trending/all/day?api_key=").concat(i,"&page=").concat(t),n.next=4,o.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t),n.next=3,o.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"?api_key=").concat(i),n.next=3,o.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i),n.next=3,o.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i),n.next=3,o.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,c=e(3433),a=e(5861),o=e(9439),u=e(4687),i=e.n(u),s=e(4672),p=e(2791),f=e(3020),l=e(168),h=e(5706).Z.h1(r||(r=(0,l.Z)(["\n  margin-top: 8px;\n  text-align: center;\n  color: darkslategray;\n"]))),d=e(184),x=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1];return(0,p.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.QO)();case 3:t=n.sent,r((0,c.Z)(t.results)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{children:"Trending today "}),(0,d.jsx)(s.Z,{movies:e})]})}},9419:function(n,t,e){n.exports=e.p+"static/media/noFoto.47b950d4f6a1dd386722.jpg"}}]);
//# sourceMappingURL=485.808b0154.chunk.js.map