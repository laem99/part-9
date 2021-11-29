(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{204:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(64),l=n.n(i),s=(n(177),n(87)),o=n.n(s),j=n(102),d=n(60),b=n(93),u=n.n(b),h=n(99),O=n(12),p=n(215),x=n(226),m=n(221),f=n(216),v="http://localhost:3000/api",g=n(94),C=n(22),w=n(5),T={patients:{}},y=Object(c.createContext)([T,function(){return T}]),N=function(e){var t=e.reducer,n=e.children,a=Object(c.useReducer)(t,T),r=Object(d.a)(a,2),i=r[0],l=r[1];return Object(w.jsx)(y.Provider,{value:[i,l],children:n})},S=function(){return Object(c.useContext)(y)},k=n(220),A=n(219),E=n(224),H=n(223),I=n(26),P=n(218),B=(n(217),function(e){var t=e.name,n=e.label,a=e.options;return Object(w.jsxs)(P.a.Field,{children:[Object(w.jsx)("label",{children:n}),Object(w.jsx)(I.b,{as:"select",name:t,className:"ui dropdown",children:a.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})}),D=function(e){var t=e.field,n=e.label,a=e.placeholder;return Object(w.jsxs)(P.a.Field,{children:[Object(w.jsx)("label",{children:n}),Object(w.jsx)(I.b,Object(C.a)({placeholder:a},t)),Object(w.jsx)("div",{style:{color:"red"},children:Object(w.jsx)(I.a,{name:t.name})})]})};!function(e){e.Male="male",e.Female="female",e.Other="other"}(a||(a={}));var F=[{value:a.Male,label:"Male"},{value:a.Female,label:"Female"},{value:a.Other,label:"Other"}],_=function(e){var t=e.onSubmit,n=e.onCancel;return Object(w.jsx)(I.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:a.Other},onSubmit:t,validate:function(e){var t="Field is required",n={};return e.name||(n.name=t),e.ssn||(n.ssn=t),e.dateOfBirth||(n.dateOfBirth=t),e.occupation||(n.occupation=t),n},children:function(e){var t=e.isValid,a=e.dirty;return Object(w.jsxs)(I.c,{className:"form ui",children:[Object(w.jsx)(I.b,{label:"Name",placeholder:"Name",name:"name",component:D}),Object(w.jsx)(I.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:D}),Object(w.jsx)(I.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:D}),Object(w.jsx)(I.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:D}),Object(w.jsx)(B,{label:"Gender",name:"gender",options:F}),Object(w.jsxs)(H.a,{children:[Object(w.jsx)(H.a.Column,{floated:"left",width:5,children:Object(w.jsx)(m.a,{type:"button",onClick:n,color:"red",children:"Cancel"})}),Object(w.jsx)(H.a.Column,{floated:"right",width:5,children:Object(w.jsx)(m.a,{type:"submit",floated:"right",color:"green",disabled:!a||!t,children:"Add"})})]})]})}})},M=function(e){var t=e.modalOpen,n=e.onClose,a=e.onSubmit,c=e.error;return Object(w.jsxs)(A.a,{open:t,onClose:n,centered:!1,closeIcon:!0,children:[Object(w.jsx)(A.a.Header,{children:"Add a new patient"}),Object(w.jsxs)(A.a.Content,{children:[c&&Object(w.jsx)(E.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(w.jsx)(_,{onSubmit:a,onCancel:n})]})]})},R=n(225),Y=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],G=function(e){var t=e.rating,n=e.showText;return Object(w.jsxs)("div",{className:"health-bar",children:[Object(w.jsx)(R.a,{icon:"heart",disabled:!0,rating:4-t,maxRating:4}),n?Object(w.jsx)("p",{children:Y[t]}):null]})},J=function(){var e=S(),t=Object(d.a)(e,2),n=t[0].patients,a=t[1],c=r.a.useState(!1),i=Object(d.a)(c,2),l=i[0],s=i[1],b=r.a.useState(),O=Object(d.a)(b,2),x=O[0],f=O[1],g=function(){s(!1),f(void 0)},C=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,c,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(v,"/patients"),t);case 3:n=e.sent,c=n.data,a({type:"ADD_PATIENT",payload:c}),g(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),f((null===(i=e.t0.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.error)||"Unknown error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(p.a,{textAlign:"center",children:Object(w.jsx)("h3",{children:"Patient list"})}),Object(w.jsxs)(k.a,{celled:!0,children:[Object(w.jsx)(k.a.Header,{children:Object(w.jsxs)(k.a.Row,{children:[Object(w.jsx)(k.a.HeaderCell,{children:"Name"}),Object(w.jsx)(k.a.HeaderCell,{children:"Gender"}),Object(w.jsx)(k.a.HeaderCell,{children:"Occupation"}),Object(w.jsx)(k.a.HeaderCell,{children:"Health Rating"})]})}),Object(w.jsx)(k.a.Body,{children:Object.values(n).map((function(e){return Object(w.jsxs)(k.a.Row,{children:[Object(w.jsx)(k.a.Cell,{children:Object(w.jsx)(h.b,{to:"/:".concat(e.id),children:e.name})}),Object(w.jsx)(k.a.Cell,{children:e.gender}),Object(w.jsx)(k.a.Cell,{children:e.occupation}),Object(w.jsx)(k.a.Cell,{children:Object(w.jsx)(G,{showText:!1,rating:1})})]},e.id)}))})]}),Object(w.jsx)(M,{modalOpen:l,onSubmit:C,error:x,onClose:g}),Object(w.jsx)(m.a,{onClick:function(){return s(!0)},children:"Add New Patient"})]})},L=function(){return Object(w.jsx)("p",{children:"T\xe4ss\xe4"})},U=function(){var e=S(),t=Object(d.a)(e,2)[1];return r.a.useEffect((function(){u.a.get("".concat(v,"/ping")),function(){var e=Object(j.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(v,"/patients"));case 3:n=e.sent,a=n.data,t({type:"SET_PATIENT_LIST",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(h.a,{children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(x.a,{as:"h1",children:"Patientor"}),Object(w.jsx)(m.a,{as:h.b,to:"/",primary:!0,children:"Home"}),Object(w.jsx)(f.a,{hidden:!0}),Object(w.jsxs)(O.c,{children:[Object(w.jsx)(O.a,{path:"/",children:Object(w.jsx)(J,{})}),Object(w.jsx)(O.a,{path:"/:id",children:Object(w.jsx)(L,{})})]})]})})})};l.a.render(Object(w.jsx)(N,{reducer:function(e,t){switch(t.type){case"SET_PATIENT_LIST":return Object(C.a)(Object(C.a)({},e),{},{patients:Object(C.a)(Object(C.a)({},t.payload.reduce((function(e,t){return Object(C.a)(Object(C.a)({},e),{},Object(g.a)({},t.id,t))}),{})),e.patients)});case"ADD_PATIENT":return Object(C.a)(Object(C.a)({},e),{},{patients:Object(C.a)(Object(C.a)({},e.patients),{},Object(g.a)({},t.payload.id,t.payload))});default:return e}},children:Object(w.jsx)(U,{})}),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.da1b6e70.chunk.js.map