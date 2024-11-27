import{a6 as m,ph as h,_ as y,pi as w,s as d,pj as v,mC as b,dZ as x,pk as _,pl as E}from"./index.8c0c1e38.js";const f=m.getLogger("esri.layers.support.labelFormatUtils"),g={type:"simple",evaluate:()=>null},F={getAttribute:(t,s)=>t.field(s)};async function $(t,s,e){if(!t||!t.symbol)return g;const n=t.where,u=h(t),i=n?await y(()=>import("./index.8c0c1e38.js").then(r=>r.pu),["assets/index.8c0c1e38.js","assets/index.313b6d72.css"]):null;let o;if(u.type==="arcade"){const r=await w(u.expression,e,s);o={type:"arcade",evaluate(l){try{const a=r.evaluate({$feature:"attributes"in l?r.repurposeFeature(l):l});if(a!=null)return a.toString()}catch{f.error(new d("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:l,expression:u}))}return null},needsHydrationToEvaluate:()=>_(u.expression)==null}}else o={type:"simple",evaluate:r=>u.expression.replace(/{[^}]*}/g,l=>{const a=l.slice(1,-1),c=s.get(a);if(!c)return l;let p=null;return"attributes"in r?r&&r.attributes&&(p=r.attributes[c.name]):p=r.field(c.name),p==null?"":V(p,c)})};if(n){let r;try{r=i.WhereClause.create(n,s)}catch(a){return f.error(new d("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:n,error:a})),g}const l=o.evaluate;o.evaluate=a=>{const c="attributes"in a?void 0:F;try{if(r.testFeature(a,c))return l(a)}catch(p){f.error(new d("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:n,feature:a,error:p}))}return null}}return o}function V(t,s){if(t==null)return"";const e=s.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const u=t;for(const i of e.codedValues)if(i.code===u)return i.name}else if(e.type==="range"){const u=+t,i="range"in e?e.range[0]:e.minValue,o="range"in e?e.range[1]:e.maxValue;if(i<=u&&u<=o)return e.name}}let n=t;return s.type==="date"||s.type==="esriFieldTypeDate"?n=v(n,E("short-date")):b(s)&&(n=x(+n)),n||""}export{$ as createLabelFunction,V as formatField};
