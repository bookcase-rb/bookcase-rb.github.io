import{d as _,t as C,r as c,w as L,c as t,a as k,B as g,b as S,e as w,S as v,u as I,o as R,i as P,I as T}from"./index-DkYgaArx.js";import{u as y}from"./useTRouter-sTePj2MT.js";import{B as $,a as j}from"./BasicTopBar-Dyq_xIRB.js";import{E}from"./Empty-C-qC4pHu.js";import{D as F}from"./DeleteConfirmButton-ChuXxxvl.js";import{B as M}from"./BookcasePreview-Ddd2o0bY.js";import"./Popconfirm-DQEg8XpO.js";import"./Popover-JWH0sjZb.js";import"./get-T0yiJ2Om.js";import"./constants-D8IofHZa.js";const N="_waterfall_1mpvx_1",V="_mask_1mpvx_28",O="_shown_1mpvx_45",p={waterfall:N,"bookcase-waterfall-list":"_bookcase-waterfall-list_1mpvx_11","waterfall-item":"_waterfall-item_1mpvx_20",mask:V,shown:O},W=_({name:"WaterfallList",props:{list:{type:Array,default:()=>[]},onReloadData:{type:Function}},setup(s){const{list:f}=C(s),{router:u}=y(),n=c(),m=c(!1),i=c(0),r=c([]),h=c([]);L(r.value,e=>{if(e.filter(o=>o!==void 0).length===f.value.length){m.value=!0;const o=[],a=[0,0];for(let l=0;l<e.length;l++)a[0]<=a[1]?(o.push([0,a[0]]),a[0]+=e[l]):(o.push([1,a[1]]),a[1]+=e[l]);h.value=o,i.value=Math.max(...a)}},{immediate:!0});const B=e=>{var l;e.stopPropagation();const o=e.target,a=(l=o==null?void 0:o.dataset)==null?void 0:l.id;a!==void 0?n.value=a:n.value=void 0};return()=>t("div",{class:k(p.waterfall),onClick:()=>{n.value=void 0}},[t("ul",{class:k(p["bookcase-waterfall-list"]),style:{height:`${i.value+1}px`},onClick:B},[f.value.map((e,o)=>{const a=h.value[o]||[0,(Math.random()-.5)*1e3],l=a[0]===0?"0%":"100%",x=a[1]+"px";return t("li",{key:e.id,class:k(p["waterfall-item"]),style:{visibility:m.value?"visible":"hidden",transform:`translate(${l}, ${x})`},"data-id":e.id},[t("div",{class:k(p.mask,{[p.shown]:n.value===e.id})},[t(g,{circle:!0,onClick:()=>{u.push({path:`/bookcase/edit/${e.id}`})}},{default:()=>[S("👀️")]}),t(F,{circle:!0,onShow:d=>{d.stopPropagation()},onConfirm:()=>{w.bookcase.deleteBookcase(e.id).then(()=>{var d;(d=s.onReloadData)==null||d.call(s),n.value=void 0})}},{default:()=>[t(v,{name:"delete"},null)]})]),t(M,{bookcaseId:e.id,onSizeLoad:(d,D)=>{r.value[o]=D}},null)])})])])}});function b(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!P(s)}const Z=_({name:"ListBookcase",setup(){const{t:s}=I({useScope:"global"}),{router:f}=y(),u=c([]);function n(){w.bookcase.getBookcases().then(i=>{u.value=i})}R(()=>{n()});const m=()=>u.value.length===0?t(E,{title:s("pages.bookcase.list.empty.title"),description:t(T,{scope:"global",keypath:"pages.bookcase.list.empty.description"},{default:()=>[t(v,{name:"plus"},null)]})},null):t(W,{list:u.value,onReloadData:n},null);return()=>{let i,r;return t(j,{topBar:t($,{rightSlots:[t(g,{onClick:()=>{f.push({path:"/bookcase/new"})}},{default:()=>[t(v,{name:"plus"},null)]})]},b(i=s("pages.bookcase.list.topbar.title"))?i:{default:()=>[i]})},b(r=m())?r:{default:()=>[r]})}}});export{Z as default};
//# sourceMappingURL=ListBookcase-C9dAsOdd.js.map
