"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{687:function(e,t,n){n.d(t,{IQ:function(){return h},Jh:function(){return I},Re:function(){return u},XT:function(){return s},YM:function(){return o}});var r=n(861),i=n(757),a=n.n(i),c=n(243),o={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}},u=function(e){return{method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}}},s=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{include_adult:!1,language:"en-US",query:t},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/credits"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}}},I=function(e){return{method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI"}}}},134:function(e,t,n){n.r(t);var r=n(861),i=n(439),a=n(757),c=n.n(a),o=n(791),u=n(87),s=n(687),h=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],I=(0,o.useState)(!1),l=(0,i.Z)(I,2),p=l[0],d=l[1],f=(0,o.useState)(""),g=(0,i.Z)(f,2),m=g[0],J=g[1],j=(0,u.lr)(),N=(0,i.Z)(j,2),Z=N[0],y=N[1],v=Z.get("query");(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=14;break}return d(!0),e.prev=2,e.next=5,(0,s.XT)(v);case 5:t=e.sent,a(t),d(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),d(!1),console.error("Error fetching movies:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var x=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y({query:m});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:x,children:[(0,h.jsx)("input",{type:"text",value:m,name:"searchQuery",onChange:function(e){J(e.target.value)},placeholder:"Search movies..."}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),p?(0,h.jsx)("div",{children:"Loading..."}):(0,h.jsx)("ul",{children:n.map((function(e){return(0,h.jsxs)("li",{children:[e.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.original_title}):(0,h.jsx)("div",{style:{height:"300px",width:"200px",backgroundColor:"lightgray"}}),(0,h.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title})]},e.id)}))})]})}}}]);
//# sourceMappingURL=134.015d6c6d.chunk.js.map