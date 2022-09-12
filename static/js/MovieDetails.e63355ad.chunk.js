"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739],{6117:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(5861),a=n(885),i=n(7757),c=n.n(i),o=n(3995),s=n(2791),u="MovieInfo_movieInfoWrap__mg9H-",p="MovieInfo_movieInfoPoster__OQA8i",d="MovieInfo_movieAbout__7EPPq",l="MovieInfo_overview__fAKQx",f="MovieInfo_additionalOverview__C0Acr",v="MovieInfo_overviewContent__1GLhw",m="MovieInfo_posterWrap__gxetF",h=n(184);function b(e){var t=e.movieTitle,n=e.movieOverview,r=e.movieRait,a=e.moviePoster,i=e.movieGenres,c=e.movieDate,o=e.movieTrailer,s=e.country.map((function(e){return e.name})),b=Math.round(10*r),_="https://www.youtube.com/embed/".concat(o),g="https://image.tmdb.org/t/p/w500".concat(a);return null===a&&(g="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"),(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("div",{className:m,children:(0,h.jsx)("img",{className:p,src:g,alt:""})}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("h2",{children:t}),(0,h.jsxs)("p",{className:l,children:["Country:","  ",(0,h.jsx)("span",{className:f,children:s})]}),(0,h.jsxs)("p",{className:l,children:["Year: ",(0,h.jsx)("span",{className:f,children:c})]}),(0,h.jsxs)("p",{className:l,children:["User Score:","  ",(0,h.jsxs)("span",{className:f,children:[b,"%"]})]}),(0,h.jsxs)("p",{className:l,children:["Genres:","  ",(0,h.jsx)("span",{className:f,children:i})]}),(0,h.jsx)("p",{className:l,children:"Overview"}),(0,h.jsx)("p",{className:v,children:n})]}),(0,h.jsx)("div",{children:(0,h.jsx)("iframe",{width:"560",height:"315",title:"This is a unique title",src:_,frameBorder:"0"})})]})}var _=n(6871),g=n(501),x="AdditionalInfo_additionalWrap__aSvfi",k="AdditionalInfo_additionalLinkWrap__JhjzN",y="AdditionalInfo_additionalLink__8PuCQ";function j(e){var t=e.location;return(0,h.jsxs)("div",{className:x,children:[(0,h.jsx)("h2",{children:"Additional Information"}),(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)(g.rU,{className:y,to:"cast",state:{from:t},children:"Cast"}),(0,h.jsx)(g.rU,{className:y,to:"reviews",state:{from:t},children:"Reviews"})]})]})}var w="GoBackLink_backLink__CRjWp";function N(){var e,t,n=(0,_.TH)();return(0,h.jsx)(g.rU,{className:w,to:null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/Home",children:"Go back"})}function I(){var e,t,n=(0,s.useState)(null),i=(0,a.Z)(n,2),u=i[0],p=i[1],d=(0,s.useState)(null),l=(0,a.Z)(d,2),f=l[0],v=l[1],m=(0,s.useState)([]),g=(0,a.Z)(m,2),x=g[0],k=g[1],y=(0,s.useState)(""),w=(0,a.Z)(y,2),I=w[0],S=w[1],Z=(0,_.UO)().movieId;(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.TP)(Z);case 3:return t=e.sent,n=t.data,e.next=7,(0,o.Yj)(Z);case 7:r=e.sent,console.log(n),v(r.data.results[0].key),p(n),S(n.poster_path),k(n.genres),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}void 0!==Z&&function(){e.apply(this,arguments)}()}),[Z]);var U=x.map((function(e){return e.name})),T=(0,_.TH)();return(0,h.jsxs)(h.Fragment,{children:[u&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N,{}),(0,h.jsx)(b,{moviePoster:I,movieTitle:u.title,movieOverview:u.overview,movieRait:u.vote_average,movieGenres:U.join(", "),movieDate:u.release_date.slice(0,4),movieTrailer:f,country:u.production_countries})]}),(0,h.jsx)(j,{location:null!==(e=null===(t=T.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/Home"}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading.."}),children:(0,h.jsx)(_.j3,{})})]})}},3995:function(e,t,n){n.d(t,{OQ:function(){return p},Ql:function(){return x},TP:function(){return l},Yj:function(){return _},qr:function(){return s},tx:function(){return h},vJ:function(){return v}});var r=n(5861),a=n(7757),i=n.n(a),c=n(4569),o=n.n(c);function s(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day","api_key=5f364d2fc6b25c805674b50a1c63d59e",e.next=4,o().get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat("api_key=5f364d2fc6b25c805674b50a1c63d59e","&page=").concat(t));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","api_key=5f364d2fc6b25c805674b50a1c63d59e",e.next=4,o().get("".concat("https://api.themoviedb.org/3/search/movie","?").concat("api_key=5f364d2fc6b25c805674b50a1c63d59e","&query=").concat(t,"&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","api_key=5f364d2fc6b25c805674b50a1c63d59e",e.next=4,o().get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?").concat("api_key=5f364d2fc6b25c805674b50a1c63d59e","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","api_key=5f364d2fc6b25c805674b50a1c63d59e",e.next=4,o().get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?").concat("api_key=5f364d2fc6b25c805674b50a1c63d59e","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","api_key=5f364d2fc6b25c805674b50a1c63d59e",e.next=4,o().get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?").concat("api_key=5f364d2fc6b25c805674b50a1c63d59e","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","api_key=5f364d2fc6b25c805674b50a1c63d59e",e.next=4,o().get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/videos?").concat("api_key=5f364d2fc6b25c805674b50a1c63d59e","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/genre/movie/list","api_key=5f364d2fc6b25c805674b50a1c63d59e",e.next=4,o().get("".concat("https://api.themoviedb.org/3/genre/movie/list","?").concat("api_key=5f364d2fc6b25c805674b50a1c63d59e","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=MovieDetails.e63355ad.chunk.js.map