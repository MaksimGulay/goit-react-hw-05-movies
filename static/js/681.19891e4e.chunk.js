"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{687:function(e,n,r){r.d(n,{IQ:function(){return h},Jh:function(){return I},Re:function(){return s},XT:function(){return u},YM:function(){return o}});var i=r(861),t=r(757),a=r.n(t),c=r(243),o={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}},s=function(e){return{method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}}},u=function(){var e=(0,i.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{include_adult:!1,language:"en-US",query:n},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),h=function(e){return{method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/credits"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}}},I=function(e){return{method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}}}},681:function(e,n,r){r.r(n);var i=r(861),t=r(439),a=r(757),c=r.n(a),o=r(791),s=r(243),u=r(689),h=r(687),I=r(184);n.default=function(){var e=(0,o.useState)([]),n=(0,t.Z)(e,2),r=n[0],a=n[1],l=(0,o.useState)(!0),d=(0,t.Z)(l,2),p=d[0],f=d[1],J=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,h.Jh)(J),e.next=4,s.Z.request(n);case 4:r=e.sent,a(r.data.results),f(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching reviews:",e.t0),f(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[J]),(0,I.jsxs)("div",{children:[(0,I.jsx)("h3",{children:"Reviews"}),p?(0,I.jsx)("div",{children:"Loading reviews..."}):(0,I.jsx)("ul",{children:r.map((function(e){return(0,I.jsxs)("li",{children:[(0,I.jsx)("h4",{children:e.author}),(0,I.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=681.19891e4e.chunk.js.map