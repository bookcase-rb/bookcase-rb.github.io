import{y as B,v as g,E,H as p,_ as w,G as M,Z as U,d as $,K as T,J as L,a0 as j,r as R,aD as O,$ as H,L as x,M as P,bh as D,aa as K,a1 as F,a3 as W,aS as X,c as y,e as V,h as A}from"./index-CNTf6xRC.js";function G(e){const{railColor:n}=e;return{itemColor:n,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}const J={name:"Rate",common:B,self:G},Z=()=>g("svg",{viewBox:"0 0 512 512"},g("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),q=E("rate",{display:"inline-flex",flexWrap:"nowrap"},[p("&:hover",[w("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),w("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[p("&:not(:first-child)",`
 margin-left: 6px;
 `),M("active",`
 color: var(--n-item-color-active);
 `)]),U("readonly",`
 cursor: pointer;
 `,[w("item",[p("&:hover",`
 transform: scale(1.05);
 `),p("&:active",`
 transform: scale(0.96);
 `)])]),w("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[M("active",`
 color: var(--n-item-color-active);
 `)])]),Q=Object.assign(Object.assign({},L.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ne=$({name:"Rate",props:Q,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:l}=T(e),o=L("Rate","-rate",q,J,e,n),a=j(e,"value"),u=R(e.defaultValue),c=R(null),s=O(e),f=H(a,u);function d(t){const{"onUpdate:value":r,onUpdateValue:i}=e,{nTriggerFormChange:b,nTriggerFormInput:h}=s;r&&F(r,t),i&&F(i,t),u.value=t,b(),h()}function m(t,r){return e.allowHalf?r.offsetX>=Math.floor(r.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let C=!1;function k(t,r){C||(c.value=m(t,r))}function I(){c.value=null}function N(t,r){var i;const{clearable:b}=e,h=m(t,r);b&&h===f.value?(C=!0,(i=e.onClear)===null||i===void 0||i.call(e),c.value=null,d(null)):d(h)}function _(){C=!1}const z=x(()=>{const{size:t}=e,{self:r}=o.value;return typeof t=="number"?`${t}px`:r[W("size",t)]}),S=x(()=>{const{common:{cubicBezierEaseInOut:t},self:r}=o.value,{itemColor:i,itemColorActive:b}=r,{color:h}=e;return{"--n-bezier":t,"--n-item-color":i,"--n-item-color-active":h||b,"--n-item-size":z.value}}),v=l?P("rate",x(()=>{const t=z.value,{color:r}=e;let i="";return t&&(i+=t[0]),r&&(i+=X(r)),i}),S,e):void 0;return{mergedClsPrefix:n,mergedValue:f,hoverIndex:c,handleMouseMove:k,handleClick:N,handleMouseLeave:I,handleMouseEnterSomeStar:_,cssVars:l?void 0:S,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{readonly:e,hoverIndex:n,mergedValue:l,mergedClsPrefix:o,onRender:a,$slots:{default:u}}=this;return a==null||a(),g("div",{class:[`${o}-rate`,{[`${o}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},D(this.count,(c,s)=>{const f=u?u({index:s}):g(K,{clsPrefix:o},{default:Z}),d=n!==null?s+1<=n:s+1<=(l||0);return g("div",{key:s,class:[`${o}-rate__item`,d&&`${o}-rate__item--active`],onClick:e?void 0:m=>{this.handleClick(s,m)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:m=>{this.handleMouseMove(s,m)}},f,this.allowHalf?g("div",{class:[`${o}-rate__half`,{[`${o}-rate__half--active`]:!d&&n!==null?s+.5<=n:s+.5<=(l||0)}]},f):null)}))}}),Y=e=>{const n=e.replace(/^#/,""),l=parseInt(n,16),o=l>>16&255,a=l>>8&255,u=l>>0&255;return(.299*o+.587*a+.114*u)/255};function ee(e,n,l,o="#FFFFFF"){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("width",e.toString()),a.setAttribute("height",n.toString()),a.style.backgroundColor=o;const u=Y(o)>.5?"#000000":"#ffffff",c=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");c.setAttribute("width","100%"),c.setAttribute("height","100%");const s=document.createElementNS("http://www.w3.org/1999/xhtml","div");s.style.cssText=`
    width: 100%;
    height: 100%;
    padding: 0 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: Arial;
    font-size: 14px;
    color: ${u};
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-all;
  `,s.textContent=l,c.appendChild(s),a.appendChild(c);const f=new XMLSerializer().serializeToString(a),d=new Blob([f],{type:"image/svg+xml"});return URL.createObjectURL(d)}function oe(e,n,l,o){return e!=null&&e.length?e.map(a=>y("span",{class:V(l)},[a])):y("span",{class:V(o)},[n])}function ae(e){return[()=>y("div",{style:{textAlign:"center"}},[A("pages.book.utils.askForBookInfo")]),{showIcon:!1,closable:!0,duration:5e3}]}function re(e,n){return e?URL.createObjectURL(e):ee(200,300,n||A("pages.book.utils.defaultCoverTitle"),"#FECB23")}export{ne as N,re as g,oe as l,ae as s};
//# sourceMappingURL=utils-LINMqLrS.js.map
