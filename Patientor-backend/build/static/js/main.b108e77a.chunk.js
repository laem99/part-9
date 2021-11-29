(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n,c,r,i=a(0),l=a.n(i),s=a(63),o=a.n(s),d=(a(171),a(30)),j=a.n(d),b=a(58),u=a(23),h=a(39),p=a.n(h),O=a(93),x=a(12),m=a(209),v=a(221),f=a(216),g=a(210),y="http://localhost:3000/api",C=a(68),k=a(11),w=a(2),H={patients:{},entries:{},patient:{},diagnoses:[]},D=Object(i.createContext)([H,function(){return H}]),S=function(e){var t=e.reducer,a=e.children,n=Object(i.useReducer)(t,H),c=Object(u.a)(n,2),r=c[0],l=c[1];return Object(w.jsx)(D.Provider,{value:[r,l],children:a})},T=function(){return Object(i.useContext)(D)},E=a(214),N=a(213),R=a(219),A=a(218),Y=a(10),F=a(212),I=(a(211),function(e){var t=e.name,a=e.label,n=e.options;return Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(Y.b,{as:"select",name:t,className:"ui dropdown",children:n.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})}),_=function(e){var t=e.field,a=e.label,n=e.placeholder;return void 0===t.value&&(t.value=""),Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(Y.b,Object(k.a)({placeholder:n},t)),Object(w.jsx)("div",{style:{color:"red"},children:Object(w.jsx)(Y.a,{name:t.name})})]})};!function(e){e.Male="male",e.Female="female",e.Other="other"}(n||(n={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(c||(c={})),function(e){e.Hospital="Hospital",e.OccupationalHealthcare="OccupationalHealthcare",e.HealthCheck="HealthCheck"}(r||(r={}));var M=[{value:n.Male,label:"Male"},{value:n.Female,label:"Female"},{value:n.Other,label:"Other"}],P=function(e){var t=e.onSubmit,a=e.onCancel;return Object(w.jsx)(Y.e,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:n.Other},onSubmit:t,validate:function(e){var t="Field is required",a={};return e.name||(a.name=t),e.ssn||(a.ssn=t),e.dateOfBirth||(a.dateOfBirth=t),e.occupation||(a.occupation=t),a},children:function(e){var t=e.isValid,n=e.dirty;return Object(w.jsxs)(Y.d,{className:"form ui",children:[Object(w.jsx)(Y.b,{label:"Name",placeholder:"Name",name:"name",component:_}),Object(w.jsx)(Y.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:_}),Object(w.jsx)(Y.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:_}),Object(w.jsx)(Y.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:_}),Object(w.jsx)(I,{label:"Gender",name:"gender",options:M}),Object(w.jsxs)(A.a,{children:[Object(w.jsx)(A.a.Column,{floated:"left",width:5,children:Object(w.jsx)(f.a,{type:"button",onClick:a,color:"red",children:"Cancel"})}),Object(w.jsx)(A.a.Column,{floated:"right",width:5,children:Object(w.jsx)(f.a,{type:"submit",floated:"right",color:"green",disabled:!n||!t,children:"Add"})})]})]})}})},B=function(e){var t=e.modalOpen,a=e.onClose,n=e.onSubmit,c=e.error;return Object(w.jsxs)(N.a,{open:t,onClose:a,centered:!1,closeIcon:!0,children:[Object(w.jsx)(N.a.Header,{children:"Add a new patient"}),Object(w.jsxs)(N.a.Content,{children:[c&&Object(w.jsx)(R.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(w.jsx)(P,{onSubmit:n,onCancel:a})]})]})},L=a(220),G=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],U=function(e){var t=e.rating,a=e.showText;return Object(w.jsxs)("div",{className:"health-bar",children:[Object(w.jsx)(L.a,{icon:"heart",disabled:!0,rating:4-t,maxRating:4}),a?Object(w.jsx)("p",{children:G[t]}):null]})},V=function(){var e=T(),t=Object(u.a)(e,2),a=t[0].patients,n=t[1],c=l.a.useState(!1),r=Object(u.a)(c,2),i=r[0],s=r[1],o=l.a.useState(),d=Object(u.a)(o,2),h=d[0],x=d[1],v=function(){s(!1),x(void 0)},g=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,r,i,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(y,"/patients"),t);case 3:a=e.sent,c=a.data,n({type:"ADD_PATIENT",payload:c}),v(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),x((null===(i=e.t0.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.error)||"Unknown error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(m.a,{textAlign:"center",children:Object(w.jsx)("h3",{children:"Patient list"})}),Object(w.jsxs)(E.a,{celled:!0,children:[Object(w.jsx)(E.a.Header,{children:Object(w.jsxs)(E.a.Row,{children:[Object(w.jsx)(E.a.HeaderCell,{children:"Name"}),Object(w.jsx)(E.a.HeaderCell,{children:"Gender"}),Object(w.jsx)(E.a.HeaderCell,{children:"Occupation"}),Object(w.jsx)(E.a.HeaderCell,{children:"Health Rating"})]})}),Object(w.jsx)(E.a.Body,{children:Object.values(a).map((function(e){return Object(w.jsxs)(E.a.Row,{children:[Object(w.jsx)(E.a.Cell,{children:Object(w.jsx)(O.b,{to:"/".concat(e.id),children:e.name})}),Object(w.jsx)(E.a.Cell,{children:e.gender}),Object(w.jsx)(E.a.Cell,{children:e.occupation}),Object(w.jsx)(E.a.Cell,{children:Object(w.jsx)(U,{showText:!1,rating:1})})]},e.id)}))})]}),Object(w.jsx)(B,{modalOpen:i,onSubmit:g,error:h,onClose:v}),Object(w.jsx)(f.a,{onClick:function(){return s(!0)},children:"Add New Patient"})]})},J=a(88),q=a(215),z=function(e){var t=e.entry,a=e.dia;return Object(w.jsxs)(q.a,{style:{width:"90vw"},children:[Object(w.jsxs)("h1",{children:[t.date," ",Object(w.jsx)(J.a,{name:"hospital"})]}),void 0!==a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:a.code}),Object(w.jsx)("p",{children:a.name})]}):null,Object(w.jsx)("p",{children:t.description})]})},K=function(e){var t=e.entry,a=e.dia;return Object(w.jsxs)(q.a,{style:{width:"90vw"},children:[Object(w.jsxs)("h1",{children:[t.date," ",Object(w.jsx)(J.a,{name:"user doctor"})]}),void 0!==a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:a.code}),Object(w.jsx)("p",{children:a.name})]}):null,Object(w.jsx)("p",{children:t.description})]})},Q=function(e){var t=e.entry,a=e.dia;return Object(w.jsxs)(q.a,{style:{width:"90vw"},children:[Object(w.jsxs)("h1",{children:[t.date," ",Object(w.jsx)(J.a,{name:"stethoscope"})]}),void 0!==a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:a.code}),Object(w.jsx)("p",{children:a.name})]}):null,Object(w.jsx)("p",{children:t.description})]})},W=function(e){var t=e.entry,a=T(),n=Object(u.a)(a,1)[0].diagnoses.find((function(e){var a;return null===(a=t.diagnosisCodes)||void 0===a?void 0:a.includes(e.code)}));switch(t.type){case"Hospital":return Object(w.jsx)(z,{entry:t,dia:n});case"OccupationalHealthcare":return Object(w.jsx)(K,{entry:t,dia:n});case"HealthCheck":return Object(w.jsx)(Q,{entry:t,dia:n});default:return function(e){throw new Error("Unhandled discriminated member: ".concat(JSON.stringify(e)))}(t)}},X=function(e){var t=e.name,a=e.label,n=e.options,c=e.onChange,r=e.handleChange;return Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(Y.b,{onChange:function(e){r("type",e.value),c()},id:"select",as:"select",name:t,className:"ui dropdown",children:n.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})},Z=function(e){var t=e.name,a=e.label,n=e.options;return Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(Y.b,{as:"select",name:t,className:"ui dropdown",children:n.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})},$=[{value:r.Hospital,label:"Hospital"},{value:r.OccupationalHealthcare,label:"OccupationalHealthcare"},{value:r.HealthCheck,label:"HealthCheck"}],ee=[{value:c.Healthy,label:"Healthy"},{value:c.LowRisk,label:"LowRisk"},{value:c.HighRisk,label:"HighRisk"},{value:c.CriticalRisk,label:"CriticalRisk"}],te={date:"",description:"",specialist:"",diagnosisCodes:[""],discharge:{diDate:"",criteria:""},type:"Hospital"},ae={date:"",description:"",specialist:"",diagnosisCodes:[""],employerName:"",sickLeave:{endDate:"",startDate:""},type:"OccupationalHealthcare"},ne={date:"",description:"",specialist:"",diagnosisCodes:[""],healthCheckRating:0,type:"HealthCheck"},ce=function(e){var t=e.onSubmit,a=e.onCancel,n=Object(i.useState)("Hospital"),c=Object(u.a)(n,2),r=c[0],l=c[1],s=function(){var e=document.getElementById("select");l(e.value)};return Object(w.jsx)(Y.e,{enableReinitialize:!0,initialValues:"HealthCheck"===r?ne:"Hospital"===r?te:ae,onSubmit:t,validate:function(e){var t="Field is required",a={};switch(e.date||(a.date=t),e.description||(a.description=t),e.specialist||(a.specialist=t),e.diagnosisCodes||(a.diagnosisCodes=t),e.type||(a.type=t),e.type){case"HealthCheck":return e.healthCheckRating||(a.healthCheckRating=t),a;case"Hospital":return e.discharge.criteria&&e.discharge.diDate||(a.discharge=t,a.discharge=t),a;case"OccupationalHealthcare":return e.employerName||(a.employerName=t),e.sickLeave||(a.startDate=t,a.endDate=t),a;default:return a}},children:function(e){var t=e.isValid,n=e.dirty,c=e.setFieldValue;return Object(w.jsxs)(Y.d,{className:"form ui",children:[Object(w.jsx)(X,{label:"Type",name:"type",options:$,onChange:s,handleChange:c}),Object(w.jsx)(Y.b,{label:"description",placeholder:"Description",name:"description",component:_}),Object(w.jsx)(Y.b,{label:"Specialist",placeholder:"Specialist",name:"specialist",component:_}),Object(w.jsx)(Y.b,{label:"Date",placeholder:"YYYY-MM-DD",name:"date",component:_}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Diagnosis Codes"}),Object(w.jsx)(Y.c,{name:"diagnosisCodes",children:function(e){var t=e.push,a=e.remove,n=e.form.values.diagnosisCodes;return Object(w.jsx)("div",{children:n.map((function(e,c){return Object(w.jsxs)("div",{children:[Object(w.jsx)(Y.b,{name:"diagnosisCodes[".concat(c,"]")}),1!==n.length?Object(w.jsx)("button",{type:"button",onClick:function(){return a(c)},children:" - "}):null,Object(w.jsx)("button",{type:"button",onClick:function(){return t("")},children:" + "})]},c)}))})}})]}),"OccupationalHealthcare"===r?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Y.b,{label:"startDate",placeholder:"YYYY-MM-DD",name:"sickLeave.startDate",component:_}),Object(w.jsx)(Y.b,{label:"endDate",placeholder:"YYYY-MM-DD",name:"sickLeave.endDate",component:_}),Object(w.jsx)(Y.b,{label:"employer name",placeholder:"name here",name:"employerName",component:_})]}):"HealthCheck"===r?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(Z,{label:"healthCheckRating",name:"healthCheckRating",options:ee})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Y.b,{label:"Discharge Date",placeholder:"YYYY-MM-DD",name:"discharge.diDate",component:_}),Object(w.jsx)(Y.b,{label:"Criteria",placeholder:"criteria",name:"discharge.criteria",component:_})]}),Object(w.jsxs)(A.a,{children:[Object(w.jsx)(A.a.Column,{floated:"left",width:5,children:Object(w.jsx)(f.a,{type:"button",onClick:a,color:"red",children:"Cancel"})}),Object(w.jsx)(A.a.Column,{floated:"right",width:5,children:Object(w.jsx)(f.a,{type:"submit",floated:"right",color:"green",disabled:!n||!t,children:"Add"})})]})]})}})},re=function(e){var t=e.modalOpen,a=e.onClose,n=e.onSubmit,c=e.error;return Object(w.jsxs)(N.a,{open:t,onClose:a,centered:!1,closeIcon:!0,children:[Object(w.jsx)(N.a.Header,{children:"Add a new entry for patient"}),Object(w.jsxs)(N.a.Content,{children:[c&&Object(w.jsx)(R.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(w.jsx)(ce,{onSubmit:n,onCancel:a})]})]})},ie=function(){var e=T(),t=Object(u.a)(e,2),a=t[0].patient,n=t[1],c=Object(x.f)().id,r=l.a.useState(!1),s=Object(u.a)(r,2),o=s[0],d=s[1],h=l.a.useState(),O=Object(u.a)(h,2),m=O[0],v=O[1];Object(i.useEffect)((function(){p.a.get("".concat(y,"/ping")),function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(y,"/patients/").concat(c));case 3:t=e.sent,a=t.data,n({type:"SET_PATIENT",payload:[a]}),n({type:"SET_PATIENT",payload:[a]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[n]),Object(i.useEffect)((function(){p.a.get("".concat(y,"/ping")),function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(y,"/diagnoses"));case 3:t=e.sent,a=t.data,n({type:"SET_DIAGNOSES",payload:a}),n({type:"SET_DIAGNOSES",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[n]);var g=function(){d(!1),v(void 0)},C=Object(x.f)(),k=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,r,i,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(y,"/patients/").concat(C.id,"/entries"),t);case 3:a=e.sent,c=a.data,n({type:"ADD_ENTRY",payload:c}),g(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),v((null===(i=e.t0.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.error)||"Unknown error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object.values(a).map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{children:Object(w.jsxs)("h1",{children:[e.name," ","female"===e.gender?Object(w.jsx)(J.a,{name:"venus"}):"male"===e.gender?Object(w.jsx)(J.a,{name:"mars"}):Object(w.jsx)(J.a,{name:"neuter"})]})},e.id),Object(w.jsxs)("p",{children:["Birthday: ",e.dateOfBirth]}),Object(w.jsxs)("p",{children:["ssn: ",e.ssn]}),Object(w.jsxs)("p",{children:["occupation: ",e.occupation]}),Object(w.jsx)(re,{modalOpen:o,onSubmit:k,error:m,onClose:g}),Object(w.jsx)(f.a,{onClick:function(){return d(!0)},children:"Add New Entry"}),Object(w.jsx)("p",{children:"Entries"}),e.entries.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:Object(w.jsx)(W,{entry:e},e.id)})},e.id)}))]})}))})},le=function(){var e=T(),t=Object(u.a)(e,2)[1];return l.a.useEffect((function(){p.a.get("".concat(y,"/ping")),function(){var e=Object(b.a)(j.a.mark((function e(){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(y,"/patients"));case 3:a=e.sent,n=a.data,t({type:"SET_PATIENT_LIST",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(O.a,{children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(v.a,{as:"h1",children:"Patientor"}),Object(w.jsx)(f.a,{as:O.b,to:"/",primary:!0,children:"Home"}),Object(w.jsx)(g.a,{hidden:!0}),Object(w.jsxs)(x.c,{children:[Object(w.jsx)(x.a,{exact:!0,path:"/",children:Object(w.jsx)(V,{})}),Object(w.jsx)(x.a,{path:"/:id",children:Object(w.jsx)(ie,{})})]})]})})})};o.a.render(Object(w.jsx)(S,{reducer:function(e,t){switch(t.type){case"SET_PATIENT_LIST":return Object(k.a)(Object(k.a)({},e),{},{patients:Object(k.a)(Object(k.a)({},t.payload.reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),{},Object(C.a)({},t.id,t))}),{})),e.patients)});case"SET_DIAGNOSES":return Object(k.a)(Object(k.a)({},e),{},{diagnoses:Object(k.a)(Object(k.a)({},t.payload),e.diagnoses)});case"SET_PATIENT":return Object(k.a)(Object(k.a)({},e),{},{patient:Object(k.a)({},t.payload.reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),{},Object(C.a)({},t.id,t))}),{}))});case"ADD_PATIENT":return Object(k.a)(Object(k.a)({},e),{},{patients:Object(k.a)(Object(k.a)({},e.patients),{},Object(C.a)({},t.payload.id,t.payload))});case"ADD_ENTRY":return Object(k.a)(Object(k.a)({},e),{},{entries:Object(k.a)(Object(k.a)({},e.entries),{},Object(C.a)({},t.payload.id,t.payload))});default:return e}},children:Object(w.jsx)(le,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.b108e77a.chunk.js.map