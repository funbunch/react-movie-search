(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(12),a(4),a(1)),s=a.n(l),i=a(6),m=a(2);var u=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(m.a)(o,2),u=l[0],p=l[1],h=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=e1d4cd7a72e42e432324ccb18474dc56&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log("Data:",c),o=c.results.filter((function(e){return e.poster_path})),p(o),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return console.log("Movies",u),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("label",{className:"label mb-sm-2",htmlFor:"query"},"Movie Name"),r.a.createElement("form",{className:"form-inline",onSubmit:h},r.a.createElement("input",{className:"form-control mr-sm-2 mb-2",type:"text",name:"query",placeholder:"Top Gun",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-success mb-2"},"Search")),r.a.createElement("div",{className:"card-list row pt-3"},u.map((function(e,t){return r.a.createElement("div",{key:"movie-card-".concat(t),className:"col-12 col-sm-6 col-md-4 col-lg-3 "},r.a.createElement("div",{class:"card mb-4 p-2"},r.a.createElement("img",{className:"card--image img-fluid mb-2",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title+" poster"}),r.a.createElement("h5",null,"Title: ",e.title)))})))))};var p=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title row"},"React Movie Search"),r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e6374538.chunk.js.map