(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),o=c(8),r=c.n(o),s=(c(13),c(3)),i=c(4),l=c(2),u=(c(14),Object(a.createContext)()),b=c(0),d=function(e){var t=e.index,c=Object(a.useContext)(u),n=c.addTaskItem,o=c.contentInput,r=c.contentValue,s=Object(a.useState)(!1),l=Object(i.a)(s,2),d=l[0],m=l[1];return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){return m(!0)},className:"content__btn btn",children:"+ \u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"}),d&&Object(b.jsxs)("form",{onSubmit:function(e){return n(t,e)},action:"#",className:"form content-form",children:[Object(b.jsx)("input",{value:r,onChange:function(e){return o(e)},type:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",className:"form__text content-form__text"}),Object(b.jsx)("input",{type:"submit",className:"form__btn content-form__btn"}),Object(b.jsx)("button",{onClick:function(e){return m(!1,e)},className:"btn content-form__close",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})},m=(c(16),function(e){var t=e.item,c=Object(a.useContext)(u),n=c.route,o=c.taskCheckedHendler;return 0==t||""==n?Object(b.jsx)("div",{}):Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h3",{className:"content__title",children:n.item}),Object(b.jsx)("ul",{className:"content__list",children:n.task===[]||""===n.task||void 0===n.task?null:n.task.map((function(e,t){return Object(b.jsxs)("li",{onClick:function(){return o(e,t,n.index)},className:"content__item",children:[Object(b.jsx)("div",{style:e.checked?{backgroundColor:"#4DD599"}:{backgroundColor:"white"},className:"content__checked"}),Object(b.jsx)("p",{className:"content__text",children:e.value})]},t)}))}),Object(b.jsx)(d,{index:n.index})]})}),j=(c(17),c.p+"static/media/close.618167a4.svg"),p=function(e){var t=e.item,c=e.i,n=e.index,o=Object(a.useContext)(u),r=o.deleteItem,s=o.AddRoute;return Object(b.jsxs)("li",{className:"sidebar__item",onClick:function(){return s(c,n,t)},children:[Object(b.jsx)("div",{className:"sidebar__item-color"}),Object(b.jsx)("p",{className:"sidebar__item-text",children:c}),Object(b.jsx)("img",{onClick:function(){return r(n)},src:j,alt:"close",className:"sidebar__item-img"})]})},f=function(e){var t=e.item;return Object(b.jsx)("ul",{className:"sidebar__list",children:t.map((function(e,t){return Object(b.jsx)(p,{item:e.task,index:t,i:e.value},t)}))})},_=function(e){var t=e.item,c=e.addItem,n=e.value,o=e.inputHandler,r=Object(a.useState)(!1),s=Object(i.a)(r,2),l=s[0],u=s[1],d=function(e,t){t.preventDefault(),u((function(){return e}))};return Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)(f,{item:t}),Object(b.jsx)("button",{onClick:function(e){return d(!0,e)},className:"sidebar__btn btn",children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u043f\u043a\u0443"}),Object(b.jsx)("div",{className:"sidebar-form__wrapper",children:l&&Object(b.jsxs)("form",{onSubmit:function(e){return c(e)},action:"#",className:"form sidebar-form",children:[Object(b.jsx)("input",{value:n,onChange:o,name:"name",type:"text",className:"form__text sidebar-form__text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438"}),Object(b.jsxs)("div",{className:"form__list sidebar-form__list",children:[Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"}),Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"}),Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"}),Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"}),Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"}),Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"}),Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"}),Object(b.jsx)("input",{type:"radio",className:"sidebar-form__checkbox form__checkbox"})]}),Object(b.jsx)("button",{onClick:function(e){return d(!1,e)},className:"sidebar-form__close",children:"X"}),Object(b.jsx)("input",{type:"submit",className:"form__btn sidebar-form__btn"})]})})]})};function x(e){return Object(l.a)({},e)}function O(e,t){switch(t.type){case"item":return Object(l.a)(Object(l.a)({},e),{},{item:t.payload});case"value":return Object(l.a)(Object(l.a)({},e),{},{value:t.payload});case"contentTask":return Object(l.a)(Object(l.a)({},e),{},{contentTask:t.payload});case"contentValue":return Object(l.a)(Object(l.a)({},e),{},{contentValue:t.payload});case"route":return Object(l.a)(Object(l.a)({},e),{},{route:t.payload});case"reset":return x(t.payload);default:return e}}var h=function(){var e=Object(a.useReducer)(O,{item:[],value:"",contentValue:"",route:""},x),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("item"),t=localStorage.getItem("route");n({type:"item",payload:JSON.parse(e)}),n({type:"route",payload:JSON.parse(t)})}),[]),Object(a.useEffect)((function(){localStorage.setItem("item",JSON.stringify(c.item)),localStorage.setItem("route",JSON.stringify(c.route))}),[c.item,c.route]),Object(b.jsx)(u.Provider,{value:{deleteItem:function(e){var t=Object(s.a)(c.item);t.splice(e,1),n({type:"item",payload:Object(s.a)(t)}),n({type:"route",payload:""})},addTaskItem:function(e,t){t.preventDefault();var a=Object(s.a)(c.item),o=a[e];if(""!==c.contentValue){o.task=[].concat(Object(s.a)(o.task),[{value:c.contentValue,checked:!1}]);var r={index:e,item:o.value,task:o.task};n({type:"item",payload:Object(s.a)(a)}),n({type:"route",payload:r}),n({type:"contentValue",payload:""})}},contentInput:function(e){n({type:"contentValue",payload:e.target.value})},contentValue:c.contentValue,AddRoute:function(e,t,c){n({type:"route",payload:{item:e,index:t,task:c}})},route:c.route,taskCheckedHendler:function(e,t,a){var o=Object(s.a)(c.item),r=o[a].task[t];r.checked=!r.checked,n({type:"item",payload:Object(s.a)(o)})}},children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(_,{item:c.item,addItem:function(e){if(e.preventDefault(),""!==c.value){var t={value:c.value,task:[]};n({type:"item",payload:[].concat(Object(s.a)(c.item),[t])}),n({type:"value",payload:""}),n({type:"route",payload:""})}},inputHandler:function(e){n({type:"value",payload:e.target.value})},value:c.value}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)(m,{item:c.item})})]})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.2056b135.chunk.js.map