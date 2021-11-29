(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{198:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(61),l=n.n(i),o=(n(171),n(41)),s=n.n(o),j=n(69),d=n(39),b=n(56),u=n.n(b),O=n(93),h=n(11),p=n(209),x=n(220),f=n(215),m=n(210),v="http://localhost:3000/api",g=n(83),T=n(13),y=n(5),w={patients:{},patient:{}},C=Object(c.createContext)([w,function(){return w}]),N=function(e){var t=e.reducer,n=e.children,a=Object(c.useReducer)(t,w),r=Object(d.a)(a,2),i=r[0],l=r[1];return Object(y.jsx)(C.Provider,{value:[i,l],children:n})},S=function(){return Object(c.useContext)(C)},k=n(214),E=n(213),A=n(218),I=n(217),P=n(25),H=n(212),_=(n(211),function(e){var t=e.name,n=e.label,a=e.options;return Object(y.jsxs)(H.a.Field,{children:[Object(y.jsx)("label",{children:n}),Object(y.jsx)(P.b,{as:"select",name:t,className:"ui dropdown",children:a.map((function(e){return Object(y.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})}),B=function(e){var t=e.field,n=e.label,a=e.placeholder;return Object(y.jsxs)(H.a.Field,{children:[Object(y.jsx)("label",{children:n}),Object(y.jsx)(P.b,Object(T.a)({placeholder:a},t)),Object(y.jsx)("div",{style:{color:"red"},children:Object(y.jsx)(P.a,{name:t.name})})]})};!function(e){e.Male="male",e.Female="female",e.Other="other"}(a||(a={}));var D=[{value:a.Male,label:"Male"},{value:a.Female,label:"Female"},{value:a.Other,label:"Other"}],F=function(e){var t=e.onSubmit,n=e.onCancel;return Object(y.jsx)(P.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:a.Other},onSubmit:t,validate:function(e){var t="Field is required",n={};return e.name||(n.name=t),e.ssn||(n.ssn=t),e.dateOfBirth||(n.dateOfBirth=t),e.occupation||(n.occupation=t),n},children:function(e){var t=e.isValid,a=e.dirty;return Object(y.jsxs)(P.c,{className:"form ui",children:[Object(y.jsx)(P.b,{label:"Name",placeholder:"Name",name:"name",component:B}),Object(y.jsx)(P.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:B}),Object(y.jsx)(P.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:B}),Object(y.jsx)(P.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:B}),Object(y.jsx)(_,{label:"Gender",name:"gender",options:D}),Object(y.jsxs)(I.a,{children:[Object(y.jsx)(I.a.Column,{floated:"left",width:5,children:Object(y.jsx)(f.a,{type:"button",onClick:n,color:"red",children:"Cancel"})}),Object(y.jsx)(I.a.Column,{floated:"right",width:5,children:Object(y.jsx)(f.a,{type:"submit",floated:"right",color:"green",disabled:!a||!t,children:"Add"})})]})]})}})},M=function(e){var t=e.modalOpen,n=e.onClose,a=e.onSubmit,c=e.error;return Object(y.jsxs)(E.a,{open:t,onClose:n,centered:!1,closeIcon:!0,children:[Object(y.jsx)(E.a.Header,{children:"Add a new patient"}),Object(y.jsxs)(E.a.Content,{children:[c&&Object(y.jsx)(A.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(y.jsx)(F,{onSubmit:a,onCancel:n})]})]})},R=n(219),Y=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],G=function(e){var t=e.rating,n=e.showText;return Object(y.jsxs)("div",{className:"health-bar",children:[Object(y.jsx)(R.a,{icon:"heart",disabled:!0,rating:4-t,maxRating:4}),n?Object(y.jsx)("p",{children:Y[t]}):null]})},J=function(){var e=S(),t=Object(d.a)(e,2),n=t[0].patients,a=t[1],c=r.a.useState(!1),i=Object(d.a)(c,2),l=i[0],o=i[1],b=r.a.useState(),h=Object(d.a)(b,2),x=h[0],m=h[1],g=function(){o(!1),m(void 0)},T=function(){var e=Object(j.a)(s.a.mark((function e(t){var n,c,r,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(v,"/patients"),t);case 3:n=e.sent,c=n.data,a({type:"ADD_PATIENT",payload:c}),g(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),m((null===(i=e.t0.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.error)||"Unknown error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(p.a,{textAlign:"center",children:Object(y.jsx)("h3",{children:"Patient list"})}),Object(y.jsxs)(k.a,{celled:!0,children:[Object(y.jsx)(k.a.Header,{children:Object(y.jsxs)(k.a.Row,{children:[Object(y.jsx)(k.a.HeaderCell,{children:"Name"}),Object(y.jsx)(k.a.HeaderCell,{children:"Gender"}),Object(y.jsx)(k.a.HeaderCell,{children:"Occupation"}),Object(y.jsx)(k.a.HeaderCell,{children:"Health Rating"})]})}),Object(y.jsx)(k.a.Body,{children:Object.values(n).map((function(e){return Object(y.jsxs)(k.a.Row,{children:[Object(y.jsx)(k.a.Cell,{children:Object(y.jsx)(O.b,{to:"/".concat(e.id),children:e.name})}),Object(y.jsx)(k.a.Cell,{children:e.gender}),Object(y.jsx)(k.a.Cell,{children:e.occupation}),Object(y.jsx)(k.a.Cell,{children:Object(y.jsx)(G,{showText:!1,rating:1})})]},e.id)}))})]}),Object(y.jsx)(M,{modalOpen:l,onSubmit:T,error:x,onClose:g}),Object(y.jsx)(f.a,{onClick:function(){return o(!0)},children:"Add New Patient"})]})},L=function(){var e=S(),t=Object(d.a)(e,2),n=t[0].patient,a=t[1],r=Object(h.f)().id;return Object(c.useEffect)((function(){u.a.get("".concat(v,"/ping")),function(){var e=Object(j.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(v,"/patients/").concat(r));case 3:t=e.sent,n=t.data,console.log(n),a({type:"SET_PATIENT",payload:[n]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),console.log("patient",n),Object(y.jsx)("div",{})},U=function(){var e=S(),t=Object(d.a)(e,2)[1];return r.a.useEffect((function(){u.a.get("".concat(v,"/ping")),function(){var e=Object(j.a)(s.a.mark((function e(){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(v,"/patients"));case 3:n=e.sent,a=n.data,t({type:"SET_PATIENT_LIST",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(O.a,{children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(x.a,{as:"h1",children:"Patientor"}),Object(y.jsx)(f.a,{as:O.b,to:"/",primary:!0,children:"Home"}),Object(y.jsx)(m.a,{hidden:!0}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:"/",children:Object(y.jsx)(J,{})}),Object(y.jsx)(h.a,{path:"/:id",children:Object(y.jsx)(L,{})})]})]})})})};l.a.render(Object(y.jsx)(N,{reducer:function(e,t){switch(t.type){case"SET_PATIENT_LIST":return Object(T.a)(Object(T.a)({},e),{},{patients:Object(T.a)(Object(T.a)({},t.payload.reduce((function(e,t){return Object(T.a)(Object(T.a)({},e),{},Object(g.a)({},t.id,t))}),{})),e.patients)});case"SET_PATIENT":return Object(T.a)(Object(T.a)({},e),{},{patient:Object(T.a)(Object(T.a)({},t.payload.reduce((function(e,t){return Object(T.a)(Object(T.a)({},e),{},Object(g.a)({},t.id,t))}),{})),e.patient)});case"ADD_PATIENT":return Object(T.a)(Object(T.a)({},e),{},{patients:Object(T.a)(Object(T.a)({},e.patients),{},Object(g.a)({},t.payload.id,t.payload))});default:return e}},children:Object(y.jsx)(U,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.4dd7e202.chunk.js.map