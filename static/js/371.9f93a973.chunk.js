"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[371],{2609:function(e,n,t){t.d(n,{N:function(){return d},Z:function(){return l}});var r=t(1413),i=t(5987),o=t(6151),u=t(1087),s=t(17),a=t(184),c=["children","to"],l=function(e){var n=e.children,t=e.to,s=(0,i.Z)(e,c);return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({component:u.OL,to:t},s),{},{children:n}))},d=function(e){var n=e.children,t=e.to;return(0,a.jsx)(l,{to:t,startIcon:(0,a.jsx)(s.Z,{sx:{transform:"rotate(180deg)"}}),children:n})}},1127:function(e,n,t){t.d(n,{Ng:function(){return i.N},nw:function(){return a}});var r,i=t(2609),o=t(168),u=t(225),s=t(6151),a=(0,u.Z)(s.Z)(r||(r=(0,o.Z)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: ",";\n"])),(function(e){return e.theme.spacing(3)}))},4294:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(3433),i=t(1127),o=t(1413),u=t(4554),s=t(3452),a=t(184);function c(e){return(0,a.jsx)(u.Z,(0,o.Z)((0,o.Z)({},e),{},{children:(0,a.jsx)(s.Z,{size:10,color:"#1976d2",cssOverride:{display:"flex",justifyContent:"center",margin:"10px 0"}})}))}var l=t(1933),d=t(1392),h=t.n(d),f=t(2007),m=t.n(f);m().oneOfType([m().string,m().array]).isRequired,m().func.isRequired,m().elementType.isRequired,m().bool;function x(e){var n=e.queryKey,t=e.queryFn,o=e.component,u=e.enabled,s=function(e,n,t){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=(0,l.useInfiniteQuery)({queryKey:e,queryFn:function(e){var t=e.pageParam;return n(void 0===t?1:t)},enabled:r,getNextPageParam:function(e,n){if(n.length<e.total_pages)return n.length+1},select:t});return i}(n,t,(function(e){return h()(e.pages.reduce((function(e,n){return[].concat((0,r.Z)(e),(0,r.Z)(n.results))}),[]),"id")}),void 0===u||u),d=s.isFetching,f=s.isError,m=s.error,x=s.data,g=s.hasNextPage,p=s.fetchNextPage;return f?(0,a.jsx)("h2",{children:m.message}):(0,a.jsxs)(a.Fragment,{children:[x&&(0,a.jsx)(o,{list:x}),d&&(0,a.jsx)(c,{mt:3}),!d&&g&&(0,a.jsx)(i.nw,{onClick:p,children:"Load more"})]})}},7443:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(1889),i=t(7621),o=t(6647),u=t(2169),s=t(1087),a=t(7689),c=t(77),l=t(2007),d=t.n(l),h=(d().arrayOf(d().shape({id:d().number.isRequired,poster_path:d().string,title:d().string.isRequired}).isRequired).isRequired,t(184));function f(e){var n=e.list,t=(0,a.TH)(),l="/"===t.pathname?"movies/":"";return(0,h.jsx)(r.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:15},children:n.map((function(e){var n=e.id,a=e.poster_path,d=e.title,f=a?"".concat(c.Z.urls.theMovies.image.poster).concat(a):"";return(0,h.jsx)(r.ZP,{item:!0,xs:2,sm:2,md:3,children:(0,h.jsx)(i.Z,{sx:{maxWidth:250,height:"100%"},children:(0,h.jsx)(o.Z,{component:s.rU,to:"".concat(l).concat(n),state:{from:t},sx:{height:"100%"},children:(0,h.jsx)(u.Z,{component:"img",height:"250",image:f,alt:d,sx:{height:"100%",objectFit:"cover"}})})})},n)}))})}},77:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(7406)},2371:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(9439),i=t(2791),o=t(1087),u=t(4294),s=t(3184),a=t(7443),c=t(5527),l=t(3400),d=t(7924),h=t(4245),f=t(5403),m=t(2007),x=t.n(m),g=(x().string.isRequired,x().func.isRequired,x().func.isRequired,t(184));function p(e){var n=e.onSubmit,t=e.onChange,r=e.value;return(0,g.jsxs)(c.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:400,mx:"auto",mb:3},onSubmit:n,children:[(0,g.jsx)(l.Z,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:(0,g.jsx)(f.Z,{})}),(0,g.jsx)(d.Z,{sx:{height:28,m:.5},orientation:"vertical"}),(0,g.jsx)(h.ZP,{sx:{ml:1,flex:1},placeholder:"Search movies",inputProps:{"aria-label":"search movie"},value:r,onChange:t})]})}function v(){var e,n=(0,i.useState)(""),t=(0,r.Z)(n,2),c=t[0],l=t[1],d=(0,o.lr)(),h=(0,r.Z)(d,2),f=h[0],m=h[1],x=null!==(e=f.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){x.length&&l(x)}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{value:x,onSubmit:function(e){e.preventDefault(),l(x)},onChange:function(e){var n=e.target.value;if(0===n.length)return m({});m({query:n.trim().toLocaleLowerCase()})}}),(0,g.jsx)(u.Z,{queryKey:["seqrch-movie",c],queryFn:function(e){return s.Z.getMoviesBySearchQuery(c,e)},component:a.Z,enabled:c.length>0})]})}}}]);
//# sourceMappingURL=371.9f93a973.chunk.js.map