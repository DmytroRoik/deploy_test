(this["webpackJsonptest-ts1"]=this["webpackJsonptest-ts1"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(38),o=n.n(s),i=(n(105),n.p+"static/media/logo.6ce24c58.svg"),u=(n(106),n(7)),l=n.n(u),d=n(40),b=n(28),j=n(29),p=n(55),f=n(5),O=n(100),m=n(3),h=function(e){var t=e.label,n=e.error,a=Object(O.a)(e,["label","error"]);return Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:t}),Object(m.jsx)("input",Object(f.a)({},a)),n&&Object(m.jsx)("div",{children:n})]})})},x=n(13),E=function(){var e=Object(r.useState)(0),t=Object(x.a)(e,2),n=t[0],a=t[1],c=function(e){a((function(t){return t+e}))};return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return c(1)},children:"Add"}),Object(m.jsx)("div",{role:"result",children:n}),Object(m.jsx)("button",{onClick:function(){return c(-1)},children:"Remove"})]})},v=function(e){var t=Object(b.c)(e.name),n=Object(x.a)(t,2),a=n[0],r=n[1],c=r.touched?r.error:void 0;return Object(m.jsx)(h,Object(f.a)(Object(f.a)(Object(f.a)({},a),e),{},{error:c}))},_="ADD_PRODUCTS";!function(e){e.GET_ALL_REQUEST="GET_ALL_REQUEST",e.GET_ALL_SUCCESS="GET_ALL_SUCCESS",e.GET_ALL_FAIL="GET_ALL_FAIL",e.ADD_HOTEL_REQUEST="ADD_HOTEL_REQUEST",e.ADD_HOTEL_SUCCESS="ADD_HOTEL_SUCCESS",e.ADD_HOTEL_FAIL="ADD_HOTEL_FAIL"}(a||(a={}));var g=function(e){return e.hotels},L=n(30),S=L.a().shape({firstName:L.b().min(3,"Minimum 3 chars").max(10,"Maximum 10 chars").required(),lastName:L.b().min(3,"Minimum 3 chars").max(10,"Maximum 10 chars").required(),email:L.b().email("Invalid email").required()}),A={firstName:"",lastName:"",email:""},T=function(){var e=Object(j.b)(),t=Object(j.c)(g);console.log(t);var n=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.loginUser)({email:"d.das@ads.dd",password:"Aa123456"});case 3:t=e.sent,n=t.data,a=n.access_token,r=n.refresh_token,localStorage.setItem("token",a),localStorage.setItem("refresh_token",r),console.log(t.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){e({type:a.GET_ALL_REQUEST})}),[]);return Object(m.jsxs)("div",{children:[Object(m.jsx)(E,{}),Object(m.jsx)("button",{onClick:function(){var t;e((t={name:"aaadadkbkjbbjkbjkbjkjkb---",description:"aaa",phone:"38080664479770",address:{country:"aaa",city:"aaa",state:"aaa",street:"aaa",address1:"aaa",address2:"aaa",zip:0,location:{latitude:"0",longtitude:"0"}}},{type:a.ADD_HOTEL_REQUEST,payload:t}))},children:"Create hotel"}),Object(m.jsx)("button",{onClick:function(){Object(p.registerUser)({email:"d.das@ads.dd",firstName:"fdsdf",lastName:"dfgdfgdfg",password:"Aa123456"})},children:"Register"}),Object(m.jsx)("button",{onClick:n,children:"Login"}),Object(m.jsx)(b.b,{initialValues:A,validationSchema:S,onSubmit:function(e){console.log(e)},children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(v,{name:"firstName",label:"First Name"}),Object(m.jsx)(v,{name:"lastName",label:"Last Name"}),Object(m.jsx)(v,{name:"email",label:"Email"}),Object(m.jsx)("button",{children:"Send"})]})})]})};var k=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)(T,{}),Object(m.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(m.jsxs)("p",{children:["Edit ",Object(m.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(m.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},D=n(17),w=n(99),U=n(8),y={products:[{id:1,name:"apple"}]},H={loading:!1,items:[],itemsCount:0,total:0},R=n(10),I=n(57),N=l.a.mark(q),G=l.a.mark(P),F=l.a.mark(B),Q=l.a.mark(z),M=l.a.mark(J);function q(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(R.b)(I.getHotels);case 3:return e=t.sent,console.log(e),t.next=7,Object(R.c)({type:a.GET_ALL_SUCCESS,payload:e.data});case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),N,null,[[0,9]])}function P(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(a.GET_ALL_REQUEST,q);case 2:case"end":return e.stop()}}),G)}function B(e){var t,n;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,e.type,r.prev=1,r.next=4,Object(R.b)(I.postHotel,t);case 4:if(n=r.sent,console.log(n),!n.ok){r.next=9;break}return r.next=9,Object(R.c)({type:a.ADD_HOTEL_SUCCESS,payload:Object(f.a)(Object(f.a)({},t),{},{id:n.data.objectId})});case 9:r.next=13;break;case 11:r.prev=11,r.t0=r.catch(1);case 13:case"end":return r.stop()}}),F,null,[[1,11]])}function z(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(a.ADD_HOTEL_REQUEST,B);case 2:case"end":return e.stop()}}),Q)}function J(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([P(),z()]);case 2:case"end":return e.stop()}}),M)}var V=l.a.mark(K);function K(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([J()]);case 2:case"end":return e.stop()}}),V)}var W=Object(w.a)(),X=Object(D.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(f.a)(Object(f.a)({},e),{},{products:[].concat(Object(U.a)(e.products),[t.payload])});default:return e}},hotels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_ALL_REQUEST:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case a.GET_ALL_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{loading:!1,items:t.payload.items,itemsCount:t.payload.itemsCount,total:t.payload.total});case a.GET_ALL_FAIL:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case a.ADD_HOTEL_REQUEST:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case a.ADD_HOTEL_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{loading:!1,items:[].concat(Object(U.a)(e.items),[t.payload]),itemsCount:e.itemsCount+1,total:e.itemsCount+1});case a.GET_ALL_FAIL:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});default:return e}}}),Y=Object(D.e)(X,Object(D.a)(W));W.run(K),o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j.a,{store:Y,children:Object(m.jsx)(k,{})})}),document.getElementById("root")),C()},23:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(40),s=n(95),o=n.n(s).a.create({baseURL:"http://192.168.0.148:3000"});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers={Authorization:"Bearer ".concat(t)}),e})),o.interceptors.response.use((function(e){return e}),function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.getItem("refresh_token")||401===t.response.status&&window.location.replace("/login"),console.log(t.response),e.abrupt("return",Promise.reject(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.a={instance:o}},55:function(e,t,n){"use strict";var a=n(58);n.d(t,"loginUser",(function(){return a.a})),n.d(t,"registerUser",(function(){return a.b}));n(67)},57:function(e,t,n){"use strict";var a=n(90);n.d(t,"getHotels",(function(){return a.a})),n.d(t,"postHotel",(function(){return a.b}));n(91)},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(23),r=function(e){return a.a.instance.post("/register",e)},c=function(e){return a.a.instance.post("/login",e)}},67:function(e,t){},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(23),r=function(){return a.a.instance.get("/hotel")},c=function(e){return a.a.instance.post("/hotel",e)}},91:function(e,t){}},[[229,1,2]]]);
//# sourceMappingURL=main.34983405.chunk.js.map