(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{198:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),i=n.n(r),s=n(62),l=n.n(s),o=(n(171),n(38)),j=n.n(o),d=n(63),b=n(37),u=n(41),O=n.n(u),h=n(93),p=n(12),x=n(209),f=n(221),m=n(216),v=n(210),y="http://localhost:3000/api",g=n(84),T=n(11),w=n(4),S={patients:{},patient:{},diagnoses:[]},E=Object(r.createContext)([S,function(){return S}]),k=function(e){var t=e.reducer,n=e.children,a=Object(r.useReducer)(t,S),c=Object(b.a)(a,2),i=c[0],s=c[1];return Object(w.jsx)(E.Provider,{value:[i,s],children:n})},C=function(){return Object(r.useContext)(E)},N=n(214),A=n(213),H=n(219),I=n(218),_=n(26),P=n(212),R=(n(211),function(e){var t=e.name,n=e.label,a=e.options;return Object(w.jsxs)(P.a.Field,{children:[Object(w.jsx)("label",{children:n}),Object(w.jsx)(_.b,{as:"select",name:t,className:"ui dropdown",children:a.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})}),D=function(e){var t=e.field,n=e.label,a=e.placeholder;return Object(w.jsxs)(P.a.Field,{children:[Object(w.jsx)("label",{children:n}),Object(w.jsx)(_.b,Object(T.a)({placeholder:a},t)),Object(w.jsx)("div",{style:{color:"red"},children:Object(w.jsx)(_.a,{name:t.name})})]})};!function(e){e.Male="male",e.Female="female",e.Other="other"}(a||(a={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(c||(c={}));var B=[{value:a.Male,label:"Male"},{value:a.Female,label:"Female"},{value:a.Other,label:"Other"}],F=function(e){var t=e.onSubmit,n=e.onCancel;return Object(w.jsx)(_.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:a.Other},onSubmit:t,validate:function(e){var t="Field is required",n={};return e.name||(n.name=t),e.ssn||(n.ssn=t),e.dateOfBirth||(n.dateOfBirth=t),e.occupation||(n.occupation=t),n},children:function(e){var t=e.isValid,a=e.dirty;return Object(w.jsxs)(_.c,{className:"form ui",children:[Object(w.jsx)(_.b,{label:"Name",placeholder:"Name",name:"name",component:D}),Object(w.jsx)(_.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:D}),Object(w.jsx)(_.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:D}),Object(w.jsx)(_.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:D}),Object(w.jsx)(R,{label:"Gender",name:"gender",options:B}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Column,{floated:"left",width:5,children:Object(w.jsx)(m.a,{type:"button",onClick:n,color:"red",children:"Cancel"})}),Object(w.jsx)(I.a.Column,{floated:"right",width:5,children:Object(w.jsx)(m.a,{type:"submit",floated:"right",color:"green",disabled:!a||!t,children:"Add"})})]})]})}})},G=function(e){var t=e.modalOpen,n=e.onClose,a=e.onSubmit,c=e.error;return Object(w.jsxs)(A.a,{open:t,onClose:n,centered:!1,closeIcon:!0,children:[Object(w.jsx)(A.a.Header,{children:"Add a new patient"}),Object(w.jsxs)(A.a.Content,{children:[c&&Object(w.jsx)(H.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(w.jsx)(F,{onSubmit:a,onCancel:n})]})]})},M=n(220),L=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],Y=function(e){var t=e.rating,n=e.showText;return Object(w.jsxs)("div",{className:"health-bar",children:[Object(w.jsx)(M.a,{icon:"heart",disabled:!0,rating:4-t,maxRating:4}),n?Object(w.jsx)("p",{children:L[t]}):null]})},J=function(){var e=C(),t=Object(b.a)(e,2),n=t[0].patients,a=t[1],c=i.a.useState(!1),r=Object(b.a)(c,2),s=r[0],l=r[1],o=i.a.useState(),u=Object(b.a)(o,2),p=u[0],f=u[1],v=function(){l(!1),f(void 0)},g=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c,r,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(y,"/patients"),t);case 3:n=e.sent,c=n.data,a({type:"ADD_PATIENT",payload:c}),v(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),f((null===(i=e.t0.response)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.error)||"Unknown error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(x.a,{textAlign:"center",children:Object(w.jsx)("h3",{children:"Patient list"})}),Object(w.jsxs)(N.a,{celled:!0,children:[Object(w.jsx)(N.a.Header,{children:Object(w.jsxs)(N.a.Row,{children:[Object(w.jsx)(N.a.HeaderCell,{children:"Name"}),Object(w.jsx)(N.a.HeaderCell,{children:"Gender"}),Object(w.jsx)(N.a.HeaderCell,{children:"Occupation"}),Object(w.jsx)(N.a.HeaderCell,{children:"Health Rating"})]})}),Object(w.jsx)(N.a.Body,{children:Object.values(n).map((function(e){return Object(w.jsxs)(N.a.Row,{children:[Object(w.jsx)(N.a.Cell,{children:Object(w.jsx)(h.b,{to:"/".concat(e.id),children:e.name})}),Object(w.jsx)(N.a.Cell,{children:e.gender}),Object(w.jsx)(N.a.Cell,{children:e.occupation}),Object(w.jsx)(N.a.Cell,{children:Object(w.jsx)(Y,{showText:!1,rating:1})})]},e.id)}))})]}),Object(w.jsx)(G,{modalOpen:s,onSubmit:g,error:p,onClose:v}),Object(w.jsx)(m.a,{onClick:function(){return l(!0)},children:"Add New Patient"})]})},U=n(88),V=n(215),q=function(e){var t=e.entry;return Object(w.jsxs)(V.a,{children:[Object(w.jsxs)("h1",{children:[t.date," ",Object(w.jsx)(U.a,{name:"hospital"})]}),Object(w.jsx)("p",{children:t.description})]})},z=function(e){var t=e.entry;return Object(w.jsxs)(V.a,{children:[Object(w.jsxs)("h1",{children:[t.date," ",Object(w.jsx)(U.a,{name:"user doctor"})]}),Object(w.jsx)("p",{children:t.description})]})},K=function(e){var t=e.entry;return Object(w.jsxs)(V.a,{children:[Object(w.jsxs)("h1",{children:[t.date," ",Object(w.jsx)(U.a,{name:"stethoscope"})]}),Object(w.jsx)("p",{children:t.description})]})},Q=function(e){var t=e.entry;switch(t.type){case"Hospital":return Object(w.jsx)(q,{entry:t});case"OccupationalHealthcare":return Object(w.jsx)(z,{entry:t});case"HealthCheck":return Object(w.jsx)(K,{entry:t});default:return function(e){throw new Error("Unhandled discriminated member: ".concat(JSON.stringify(e)))}(t)}},W=function(){var e=C(),t=Object(b.a)(e,2),n=t[0].patient,a=t[1],c=C(),i=Object(b.a)(c,1)[0].diagnoses,s=Object(p.f)().id;return Object(r.useEffect)((function(){O.a.get("".concat(y,"/ping")),function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(y,"/patients/").concat(s));case 3:t=e.sent,n=t.data,a({type:"SET_PATIENT",payload:[n]}),a({type:"SET_PATIENT",payload:[n]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(r.useEffect)((function(){O.a.get("".concat(y,"/ping")),function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(y,"/diagnoses"));case 3:t=e.sent,n=t.data,a({type:"SET_DIAGNOSES",payload:n}),a({type:"SET_DIAGNOSES",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(w.jsx)("div",{children:Object.values(n).map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{children:Object(w.jsxs)("h1",{children:[e.name," ","female"===e.gender?Object(w.jsx)(U.a,{name:"venus"}):"male"===e.gender?Object(w.jsx)(U.a,{name:"mars"}):Object(w.jsx)(U.a,{name:"neuter"})]})},e.id),Object(w.jsxs)("p",{children:["Birthday: ",e.dateOfBirth]}),Object(w.jsxs)("p",{children:["ssn: ",e.ssn]}),Object(w.jsxs)("p",{children:["occupation: ",e.occupation]}),Object(w.jsx)("p",{children:"Entries"}),e.entries.map((function(e){var t;return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:null===(t=e.diagnosisCodes)||void 0===t?void 0:t.map((function(t){return Object.values(i).map((function(n){return t===n.code?Object(w.jsx)(Q,{entry:e}):null}))}))})},e.id)}))]})}))})},X=function(){var e=C(),t=Object(b.a)(e,2)[1];return i.a.useEffect((function(){O.a.get("".concat(y,"/ping")),function(){var e=Object(d.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(y,"/patients"));case 3:n=e.sent,a=n.data,t({type:"SET_PATIENT_LIST",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(h.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(f.a,{as:"h1",children:"Patientor"}),Object(w.jsx)(m.a,{as:h.b,to:"/",primary:!0,children:"Home"}),Object(w.jsx)(v.a,{hidden:!0}),Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{exact:!0,path:"/",children:Object(w.jsx)(J,{})}),Object(w.jsx)(p.a,{path:"/:id",children:Object(w.jsx)(W,{})})]})]})})})};l.a.render(Object(w.jsx)(k,{reducer:function(e,t){switch(t.type){case"SET_PATIENT_LIST":return Object(T.a)(Object(T.a)({},e),{},{patients:Object(T.a)(Object(T.a)({},t.payload.reduce((function(e,t){return Object(T.a)(Object(T.a)({},e),{},Object(g.a)({},t.id,t))}),{})),e.patients)});case"SET_DIAGNOSES":return Object(T.a)(Object(T.a)({},e),{},{diagnoses:Object(T.a)(Object(T.a)({},t.payload),e.diagnoses)});case"SET_PATIENT":return Object(T.a)(Object(T.a)({},e),{},{patient:Object(T.a)({},t.payload.reduce((function(e,t){return Object(T.a)(Object(T.a)({},e),{},Object(g.a)({},t.id,t))}),{}))});case"ADD_PATIENT":return Object(T.a)(Object(T.a)({},e),{},{patients:Object(T.a)(Object(T.a)({},e.patients),{},Object(g.a)({},t.payload.id,t.payload))});default:return e}},children:Object(w.jsx)(X,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.61a55782.chunk.js.map