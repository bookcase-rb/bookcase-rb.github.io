import{y as $,v as g,E,H as C,_ as p,G as R,Z as H,d as j,K as k,J as L,a0 as D,r as S,aD as O,$ as T,L as x,M as P,bg as K,aa as W,a1 as M,a3 as X,aR as G,c as y,e as A,h as B}from"./index-C0851Mfg.js";function J(e){const{railColor:t}=e;return{itemColor:t,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}const Z={name:"Rate",common:$,self:J},q=()=>g("svg",{viewBox:"0 0 512 512"},g("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),Q=E("rate",{display:"inline-flex",flexWrap:"nowrap"},[C("&:hover",[p("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),p("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[C("&:not(:first-child)",`
 margin-left: 6px;
 `),R("active",`
 color: var(--n-item-color-active);
 `)]),H("readonly",`
 cursor: pointer;
 `,[p("item",[C("&:hover",`
 transform: scale(1.05);
 `),C("&:active",`
 transform: scale(0.96);
 `)])]),p("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[R("active",`
 color: var(--n-item-color-active);
 `)])]),Y=Object.assign(Object.assign({},L.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ae=j({name:"Rate",props:Y,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:a}=k(e),o=L("Rate","-rate",Q,Z,e,t),r=D(e,"value"),u=S(e.defaultValue),c=S(null),l=O(e),f=T(r,u);function d(n){const{"onUpdate:value":s,onUpdateValue:i}=e,{nTriggerFormChange:b,nTriggerFormInput:v}=l;s&&M(s,n),i&&M(i,n),u.value=n,b(),v()}function m(n,s){return e.allowHalf?s.offsetX>=Math.floor(s.currentTarget.offsetWidth/2)?n+1:n+.5:n+1}let w=!1;function I(n,s){w||(c.value=m(n,s))}function N(){c.value=null}function _(n,s){var i;const{clearable:b}=e,v=m(n,s);b&&v===f.value?(w=!0,(i=e.onClear)===null||i===void 0||i.call(e),c.value=null,d(null)):d(v)}function U(){w=!1}const F=x(()=>{const{size:n}=e,{self:s}=o.value;return typeof n=="number"?`${n}px`:s[X("size",n)]}),z=x(()=>{const{common:{cubicBezierEaseInOut:n},self:s}=o.value,{itemColor:i,itemColorActive:b}=s,{color:v}=e;return{"--n-bezier":n,"--n-item-color":i,"--n-item-color-active":v||b,"--n-item-size":F.value}}),h=a?P("rate",x(()=>{const n=F.value,{color:s}=e;let i="";return n&&(i+=n[0]),s&&(i+=G(s)),i}),z,e):void 0;return{mergedClsPrefix:t,mergedValue:f,hoverIndex:c,handleMouseMove:I,handleClick:_,handleMouseLeave:N,handleMouseEnterSomeStar:U,cssVars:a?void 0:z,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){const{readonly:e,hoverIndex:t,mergedValue:a,mergedClsPrefix:o,onRender:r,$slots:{default:u}}=this;return r==null||r(),g("div",{class:[`${o}-rate`,{[`${o}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},K(this.count,(c,l)=>{const f=u?u({index:l}):g(W,{clsPrefix:o},{default:q}),d=t!==null?l+1<=t:l+1<=(a||0);return g("div",{key:l,class:[`${o}-rate__item`,d&&`${o}-rate__item--active`],onClick:e?void 0:m=>{this.handleClick(l,m)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:m=>{this.handleMouseMove(l,m)}},f,this.allowHalf?g("div",{class:[`${o}-rate__half`,{[`${o}-rate__half--active`]:!d&&t!==null?l+.5<=t:l+.5<=(a||0)}]},f):null)}))}}),ee=e=>{const t=e.replace(/^#/,""),a=parseInt(t,16),o=a>>16&255,r=a>>8&255,u=a>>0&255;return(.299*o+.587*r+.114*u)/255};function te(e,t,a,o="#FFFFFF"){const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("width",e.toString()),r.setAttribute("height",t.toString()),r.style.backgroundColor=o;const u=ee(o)>.5?"#000000":"#ffffff",c=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");c.setAttribute("width","100%"),c.setAttribute("height","100%");const l=document.createElementNS("http://www.w3.org/1999/xhtml","div");l.style.cssText=`
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
  `,l.textContent=a,c.appendChild(l),r.appendChild(c);const f=new XMLSerializer().serializeToString(r),d=new Blob([f],{type:"image/svg+xml"});return URL.createObjectURL(d)}function re(e,t,a,o){return e!=null&&e.length?e.map(r=>y("span",{class:A(a)},[r])):y("span",{class:A(o)},[t])}function se(){return[()=>y("div",{style:{textAlign:"center"}},[B("pages.book.utils.askForBookInfo")]),{showIcon:!1,closable:!0,duration:5e3}]}const V=["#A76545","#FFA55D","#FFDF88","#ACC572","#BF9264","#6F826A","#BBD8A3","#F0F1C5"];function ne(e=0){const t=e%V.length;return V[t]}function le(e,t){if(e)return URL.createObjectURL(e);{const a=ne(t==null?void 0:t.length);return te(200,300,t||B("pages.book.utils.defaultCoverTitle"),a)}}function ie(e,t){if(!t||!e)return;const a=e.clientHeight,o=t.offsetTop-a/2;e.scrollTo({top:o,behavior:"smooth"})}export{ae as N,ie as a,le as g,re as l,se as s};
//# sourceMappingURL=utils-lnPlP4m8.js.map
