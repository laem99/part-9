(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{198:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),i=n.n(r),s=n(61),l=n.n(s),o=(n(171),n(38)),j=n.n(o),d=n(62),b=n(37),u=n(41),O=n.n(u),h=n(93),p=n(12),x=n(209),f=n(220),m=n(215),v=n(210),g="http://localhost:3000/api",y=n(67),T=n(10),S=n(4),w={patients:{},patient:{},diagnoses:{}},C=Object(r.createContext)([w,function(){return w}]),E=function(e){var t=e.reducer,n=e.children,a=Object(r.useReducer)(t,w),c=Object(b.a)(a,2),i=c[0],s=c[1];return Object(S.jsx)(C.Provider,{value:[i,s],children:n})},k=function(){return Object(r.useContext)(C)},N=n(214),A=n(213),I=n(218),H=n(217),_=n(25),P=n(212),R=(n(211),function(e){var t=e.name,n=e.label,a=e.options;return Object(S.jsxs)(P.a.Field,{children:[Object(S.jsx)("label",{children:n}),Object(S.jsx)(_.b,{as:"select",name:t,className:"ui dropdown",children:a.map((function(e){return Object(S.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})}),D=function(e){var t=e.field,n=e.label,a=e.placeholder;return Object(S.jsxs)(P.a.Field,{children:[Object(S.jsx)("label",{children:n}),Object(S.jsx)(_.b,Object(T.a)({placeholder:a},t)),Object(S.jsx)("div",{style:{color:"red"},children:Object(S.jsx)(_.a,{name:t.name})})]})};!function(e){e.Male="male",e.Female="female",e.Other="other"}(a||(a={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(c||(c={}));var B=[{value:a.Male,label:"Male"},{value:a.Female,label:"Female"},{value:a.Other,label:"Other"}],F=function(e){var t=e.onSubmit,n=e.onCancel;return Object(S.jsx)(_.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:a.Other},onSubmit:t,validate:function(e){var t="Field is required",n={};return e.name||(n.name=t),e.ssn||(n.ssn=t),e.dateOfBirth||(n.dateOfBirth=t),e.occupation||(n.occupation=t),n},children:function(e){var t=e.isValid,a=e.dirty;return Object(S.jsxs)(_.c,{className:"form ui",children:[Object(S.jsx)(_.b,{label:"Name",placeholder:"Name",name:"name",component:D}),Object(S.jsx)(_.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:D}),Object(S.jsx)(_.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:D}),Object(S.jsx)(_.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:D}),Object(S.jsx)(R,{label:"Gender",name:"gender",options:B}),Object(S.jsxs)(H.a,{children:[Object(S.jsx)(H.a.Column,{floated:"left",width:5,children:Object(S.jsx)(m.a,{type:"button",onClick:n,color:"red",children:"Cancel"})}),Object(S.jsx)(H.a.Column,{floated:"right",width:5,children:Object(S.jsx)(m.a,{type:"submit",floated:"right",color:"green",disabled:!a||!t,children:"Add"})})]})]})}})},G=function(e){var t=e.modalOpen,n=e.onClose,a=e.onSubmit,c=e.error;return Object(S.jsxs)(A.a,{open:t,onClose:n,centered:!1,closeIcon:!0,children:[Object(S.jsx)(A.a.Header,{children:"Add a new patient"}),Object(S.jsxs)(A.a.Content,{children:[c&&Object(S.jsx)(I.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(S.jsx)(F,{onSubmit:a,onCancel:n})]})]})},M=n(219),L=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],Y=function(e){var t=e.rating,n=e.showText;return Object(S.jsxs)("div",{className:"health-bar",children:[Object(S.jsx)(M.a,{icon:"heart",disabled:!0,rating:4-t,maxRating:4}),n?Object(S.jsx)("p",{children:L[t]}):null]})},J=function(){var e=k(),t=Object(b.a)(e,2),n=t[0].patients,a=t[1],c=i.a.useState(!1),r=Object(b.a)(c,2),s=r[0],l=r[1],o=i.a.useState(),u=Object(b.a)(o,2),p=u[0],f=u[1],v=function(){l(!1),f(void 0)},y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c,r,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(g,"/patients"),t);case 3:n=e.sent,c=n.data,a({type:"ADD_PATIENT",payload:c}),v(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),f((null===(i=e.t0.response)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.error)||"Unknown error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(x.a,{textAlign:"center",children:Object(S.jsx)("h3",{children:"Patient list"})}),Object(S.jsxs)(N.a,{celled:!0,children:[Object(S.jsx)(N.a.Header,{children:Object(S.jsxs)(N.a.Row,{children:[Object(S.jsx)(N.a.HeaderCell,{children:"Name"}),Object(S.jsx)(N.a.HeaderCell,{children:"Gender"}),Object(S.jsx)(N.a.HeaderCell,{children:"Occupation"}),Object(S.jsx)(N.a.HeaderCell,{children:"Health Rating"})]})}),Object(S.jsx)(N.a.Body,{children:Object.values(n).map((function(e){return Object(S.jsxs)(N.a.Row,{children:[Object(S.jsx)(N.a.Cell,{children:Object(S.jsx)(h.b,{to:"/".concat(e.id),children:e.name})}),Object(S.jsx)(N.a.Cell,{children:e.gender}),Object(S.jsx)(N.a.Cell,{children:e.occupation}),Object(S.jsx)(N.a.Cell,{children:Object(S.jsx)(Y,{showText:!1,rating:1})})]},e.id)}))})]}),Object(S.jsx)(G,{modalOpen:s,onSubmit:y,error:p,onClose:v}),Object(S.jsx)(m.a,{onClick:function(){return l(!0)},children:"Add New Patient"})]})},U=n(88),V=function(){var e=k(),t=Object(b.a)(e,2),n=t[0].patient,a=t[1],c=k(),i=Object(b.a)(c,1)[0],s=Object(p.f)().id;return Object(r.useEffect)((function(){O.a.get("".concat(g,"/ping")),function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(g,"/patients/").concat(s));case 3:t=e.sent,n=t.data,a({type:"SET_PATIENT",payload:[n]}),a({type:"SET_PATIENT",payload:[n]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),console.log(i),Object(r.useEffect)((function(){O.a.get("".concat(g,"/ping")),function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(g,"/diagnoses"));case 3:t=e.sent,n=t.data,a({type:"SET_DIAGNOSES",payload:n}),a({type:"SET_DIAGNOSES",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(S.jsx)("div",{children:Object.values(n).map((function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{children:Object(S.jsxs)("h1",{children:[e.name," ","female"===e.gender?Object(S.jsx)(U.a,{name:"venus"}):"male"===e.gender?Object(S.jsx)(U.a,{name:"mars"}):Object(S.jsx)(U.a,{name:"neuter"})]})},e.id),Object(S.jsxs)("p",{children:["Birthday: ",e.dateOfBirth]}),Object(S.jsxs)("p",{children:["ssn: ",e.ssn]}),Object(S.jsxs)("p",{children:["occupation: ",e.occupation]}),Object(S.jsx)("p",{children:"Entries"}),e.entries.map((function(e){var t;return console.log(e.diagnosisCodes),Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:[e.date," ",e.description]}),Object(S.jsx)("ul",{children:null===(t=e.diagnosisCodes)||void 0===t?void 0:t.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})]},e.id)}))]})}))})},q=function(){var e=k(),t=Object(b.a)(e,2)[1];return i.a.useEffect((function(){O.a.get("".concat(g,"/ping")),function(){var e=Object(d.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(g,"/patients"));case 3:n=e.sent,a=n.data,t({type:"SET_PATIENT_LIST",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(h.a,{children:Object(S.jsxs)(x.a,{children:[Object(S.jsx)(f.a,{as:"h1",children:"Patientor"}),Object(S.jsx)(m.a,{as:h.b,to:"/",primary:!0,children:"Home"}),Object(S.jsx)(v.a,{hidden:!0}),Object(S.jsxs)(p.c,{children:[Object(S.jsx)(p.a,{exact:!0,path:"/",children:Object(S.jsx)(J,{})}),Object(S.jsx)(p.a,{path:"/:id",children:Object(S.jsx)(V,{})})]})]})})})};l.a.render(Object(S.jsx)(E,{reducer:function(e,t){switch(t.type){case"SET_PATIENT_LIST":return Object(T.a)(Object(T.a)({},e),{},{patients:Object(T.a)(Object(T.a)({},t.payload.reduce((function(e,t){return Object(T.a)(Object(T.a)({},e),{},Object(y.a)({},t.id,t))}),{})),e.patients)});case"SET_DIAGNOSES":return Object(T.a)(Object(T.a)({},e),{},{diagnoses:Object(T.a)({},t.payload.reduce((function(e,t){return Object(T.a)(Object(T.a)({},e),{},Object(y.a)({},t.code,t))}),{}))});case"SET_PATIENT":return Object(T.a)(Object(T.a)({},e),{},{patient:Object(T.a)({},t.payload.reduce((function(e,t){return Object(T.a)(Object(T.a)({},e),{},Object(y.a)({},t.id,t))}),{}))});case"ADD_PATIENT":return Object(T.a)(Object(T.a)({},e),{},{patients:Object(T.a)(Object(T.a)({},e.patients),{},Object(y.a)({},t.payload.id,t.payload))});default:return e}},children:Object(S.jsx)(q,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.ad8d114e.chunk.js.map