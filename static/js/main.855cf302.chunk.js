(this["webpackJsonpmovee-app"]=this["webpackJsonpmovee-app"]||[]).push([[0],{34:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n,s=c(0),o=c.n(s),i=c(13),a=c.n(i),r=c(10),l=c(8),u=c(3),j=(c(34),c(1)),m=function(){var e=Object(u.g)().state;console.log(e.description);var t=Object(u.f)();return Object(j.jsx)("section",{className:"item",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"item-block",children:[Object(j.jsx)("img",{className:"item__img",src:e.img,alt:e.title}),Object(j.jsxs)("h3",{className:"item__title",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",e.title]}),Object(j.jsxs)("ul",{className:"item__categories",children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:",e.authors.map((function(e){return Object(j.jsx)("li",{className:"item__categories-item",children:e})}))]}),Object(j.jsxs)("ul",{className:"item__categories",children:["\u0416\u0430\u043d\u0440: ",e.categories.map((function(e){return Object(j.jsx)("li",{className:"item__categories-item",children:e})}))]}),Object(j.jsxs)("p",{className:"item__text",children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",e.description]}),Object(j.jsx)("button",{className:"item__btn",onClick:function(){t.push("/")},children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})})},e.id)},d=c(21),b=c.n(d),O=c(23),h=c(22),_=c(26),f=c(25),x=(c(39),function(e){var t=e.img,c=e.title,n=e.authors,s=e.categories;return Object(j.jsxs)("li",{className:"content__item",children:[Object(j.jsxs)("div",{className:"content__header",children:[Object(j.jsx)("img",{className:"content__img",src:t,alt:t}),Object(j.jsx)("h3",{className:"content__title",children:c})]}),Object(j.jsxs)("div",{className:"content__footer",children:[n.map((function(e){return Object(j.jsxs)("p",{children:["- ",e]})})),Object(j.jsx)("p",{children:s[0]})]})]})}),v=(c(40),function(e){var t=e.books.map((function(e){return{id:e.id,title:e.volumeInfo.title,categories:e.volumeInfo.categories,authors:Object(f.a)(e.volumeInfo.authors),img:e.volumeInfo.imageLinks.thumbnail,description:e.volumeInfo.description}}));return console.log(t),Object(j.jsx)("section",{className:"content",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("ul",{className:"content__list",children:t.map((function(e){return Object(j.jsx)(l.b,{to:{pathname:"/books/:".concat(e.id),state:Object(_.a)({},e)},children:Object(j.jsx)(x,{categories:e.categories,img:e.img,authors:e.authors,title:e.title})},e.id)}))})})})}),p=o.a.memo(v),g=(c(41),function(e){var t=e.selectHandler,c=e.value,n=e.inputHandler,o=e.getBooks,i=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e;null===(e=i.current)||void 0===e||e.focus()}),[]),Object(j.jsx)("section",{className:"form",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{className:"form-block",onSubmit:o,action:"#",children:[Object(j.jsxs)("div",{className:"form__header",children:[Object(j.jsx)("input",{ref:i,value:c,className:"form__input",onChange:n,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"}),Object(j.jsx)("input",{className:"form__submit",type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(j.jsx)("div",{className:"form__footer",children:Object(j.jsxs)("select",{className:"form__select",onChange:t,name:"select",children:[Object(j.jsx)("option",{value:"",children:"All"}),Object(j.jsx)("option",{value:"history",children:"History"}),Object(j.jsx)("option",{value:"medical",children:"Medical"}),Object(j.jsx)("option",{value:"poetry",children:"Poetry"})]})})]})})})}),N=(c(42),function(){return Object(j.jsx)("section",{className:"home",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"home-block",children:[Object(j.jsx)("h1",{className:"home__title",children:"LitWare"}),Object(j.jsx)("p",{className:"home__subtitle",children:"\u041d\u0430\u0439\u0434\u0438 \u043d\u0443\u0436\u043d\u0443\u044e \u0434\u043b\u044f \u0442\u0435\u0431\u044f \u043a\u043d\u0438\u0433\u0443"})]})})})}),S=(c(43),function(){return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("div",{className:"lds-hourglass"})})}),k=c(16),C=c(24);!function(e){e.FETCH__BOOKS="FETCH__BOOKS",e.FETCH__BOOKS__SUCCESS="FETCH__BOOKS__SUCCESS",e.FETCH__BOOKS__ERROR="FETCH__BOOKS__ERROR"}(n||(n={}));var E={books:[],loading:!1,error:null},H=Object(k.combineReducers)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH__BOOKS:return{loading:!0,error:null,books:[]};case n.FETCH__BOOKS__SUCCESS:return{loading:!1,error:null,books:t.payload};case n.FETCH__BOOKS__ERROR:return{loading:!1,error:t.payload,books:[]};default:return e}}}),y=Object(k.createStore)(H,Object(C.composeWithDevTools)()),B=r.c,F=function(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)(""),i=Object(h.a)(o,2),a=i[0],l=i[1],u=Object(r.b)(),m=B((function(e){return e.books})),d=m.books,_=m.loading,f=function(e){l(e.target.value),console.log(a)},x=function(e){n(e.target.value)},v=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==c){e.next=3;break}return e.abrupt("return",!1);case 3:u({type:"FETCH__BOOKS"}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c,"+subject:").concat(a,"&maxResults=40")).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.items.filter((function(e){return void 0!==e.volumeInfo.authors&&e.volumeInfo.authors.length>0&&void 0!==e.volumeInfo.authors&&void 0!==e.id&&void 0!==e.volumeInfo.categories&&void 0!==e.volumeInfo.imageLinks&&void 0!==e.volumeInfo.description}));u({type:"FETCH__BOOKS__SUCCESS",payload:t})})).catch((function(e){return u({type:"FetchBooksErrorAction",payload:e})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return _?Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(g,{selectHandler:f,value:c,getBooks:v,inputHandler:x}),Object(j.jsx)(S,{})]}):Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(g,{selectHandler:f,value:c,getBooks:v,inputHandler:x}),0===d.length?Object(j.jsx)(N,{}):Object(j.jsx)(p,{books:d})]})},I=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",exact:!0,component:F}),Object(j.jsx)(u.a,{path:"/books/:id",exact:!0,component:m})]})})};c(44);a.a.render(Object(j.jsx)(r.a,{store:y,children:Object(j.jsx)(l.a,{children:Object(j.jsx)(I,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.855cf302.chunk.js.map